function h() {
}
function j(t) {
  return t();
}
function E() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(j);
}
function C(t) {
  return typeof t == "function";
}
function O(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function B(t) {
  return Object.keys(t).length === 0;
}
function z(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function D(t) {
  return document.createElement(t);
}
function I(t, e, n, s) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
}
function K(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function M(t) {
  return Array.from(t.childNodes);
}
let x;
function d(t) {
  x = t;
}
const f = [], A = [], m = [], S = [], P = Promise.resolve();
let y = !1;
function T() {
  y || (y = !0, P.then(N));
}
function b(t) {
  m.push(t);
}
const $ = /* @__PURE__ */ new Set();
let p = 0;
function N() {
  const t = x;
  do {
    for (; p < f.length; ) {
      const e = f[p];
      p++, d(e), U(e.$$);
    }
    for (d(null), f.length = 0, p = 0; A.length; )
      A.pop()();
    for (let e = 0; e < m.length; e += 1) {
      const n = m[e];
      $.has(n) || ($.add(n), n());
    }
    m.length = 0;
  } while (f.length);
  for (; S.length; )
    S.pop()();
  y = !1, $.clear(), d(t);
}
function U(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(b);
  }
}
const q = /* @__PURE__ */ new Set();
function F(t, e) {
  t && t.i && (q.delete(t), t.i(e));
}
function G(t, e, n, s) {
  const { fragment: o, after_update: c } = t.$$;
  o && o.m(e, n), s || b(() => {
    const l = t.$$.on_mount.map(j).filter(C);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : g(l), t.$$.on_mount = [];
  }), c.forEach(b);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function J(t, e) {
  t.$$.dirty[0] === -1 && (f.push(t), T(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Q(t, e, n, s, o, c, l, u = [-1]) {
  const i = x;
  d(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: h,
    not_equal: o,
    bound: E(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: E(),
    dirty: u,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  l && l(r.root);
  let _ = !1;
  if (r.ctx = n ? n(t, e.props || {}, (a, k, ...v) => {
    const w = v.length ? v[0] : k;
    return r.ctx && o(r.ctx[a], r.ctx[a] = w) && (!r.skip_bound && r.bound[a] && r.bound[a](w), _ && J(t, a)), k;
  }) : [], r.update(), _ = !0, g(r.before_update), r.fragment = s ? s(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = M(e.target);
      r.fragment && r.fragment.l(a), a.forEach(L);
    } else
      r.fragment && r.fragment.c();
    e.intro && F(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), N();
  }
  d(i);
}
class R {
  $destroy() {
    H(this, 1), this.$destroy = h;
  }
  $on(e, n) {
    if (!C(n))
      return h;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(n), () => {
      const o = s.indexOf(n);
      o !== -1 && s.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !B(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function V(t) {
  let e, n, s;
  return {
    c() {
      e = D("textarea"), e.value = t[0], K(e, "class", "svelte-hyxn8s");
    },
    m(o, c) {
      z(o, e, c), n || (s = I(e, "keydown", t[1]), n = !0);
    },
    p(o, [c]) {
      c & 1 && (e.value = o[0]);
    },
    i: h,
    o: h,
    d(o) {
      o && L(e), n = !1, s();
    }
  };
}
function W(t, e, n) {
  let s = "Select some text and hit the tab key to toggle uppercase";
  async function o(c) {
    if (c.key !== "Tab")
      return;
    c.preventDefault();
    const { selectionStart: l, selectionEnd: u, value: i } = this, r = i.slice(l, u), _ = /[a-z]/.test(r) ? r.toUpperCase() : r.toLowerCase();
    n(0, s = i.slice(0, l) + _ + i.slice(u)), this.selectionStart = l, this.selectionEnd = u;
  }
  return [s, o];
}
class X extends R {
  constructor(e) {
    super(), Q(this, e, W, V, O, {});
  }
}
const Y = new X({
  target: document.getElementById("app")
});
export {
  Y as default
};
