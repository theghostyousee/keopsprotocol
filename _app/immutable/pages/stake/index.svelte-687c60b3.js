import {
  S as xa,
  i as er,
  s as tr,
  l as o,
  r as k,
  a as h,
  a7 as Ya,
  m as i,
  n as c,
  u as E,
  h as r,
  c as v,
  a8 as Ja,
  p as n,
  I as de,
  b as U,
  J as s,
  a0 as Al,
  K as X,
  v as fe,
  t as O,
  d as je,
  f as B,
  a2 as Sl,
  G as Tl,
  M as Ls,
  o as lr,
  g as qe,
  w as se,
  x as ae,
  y as re,
  B as ne,
  E as Y,
  e as Ka,
} from "../../chunks/index-b9522995.js";
import {
  d as sr,
  c as ar,
  s as rr,
  w as nr,
} from "../../chunks/web3-store-c691b065.js";

import {
  M as Qa,
  C as Xa,
} from "../../chunks/ConnectWalletTrigger-21c5e1a9.js";
import "../../chunks/index-f6a2642a.js";
import { m as Xt } from "../../chunks/mgiza-354f3226.js";
import { m as js } from "../../chunks/mgizatracker-839f932c.js";
import { S as Te } from "../../chunks/Spinner-ca0f996b.js";
import "../../chunks/ConnectWalletTrigger.svelte_svelte_type_style_lang-60896ddd.js";
import "../../chunks/_commonjsHelpers-cea7ac1a.js";
function or(a) {
  let t, l;
  return (
    (t = new Qa({
      props: { $$slots: { default: [cr] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p(e, u) {
        const f = {};
        u[1] & 8388608 && (f.$$scope = { dirty: u, ctx: e }), t.$set(f);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function ir(a) {
  let t, l, e, u, f, I, T, g, d, p, _, b, w, D, H, R, N, A, G, z, W, F, M;
  const L = [_r, ur],
    J = [];
  function ke(S, j) {
    return S[8] ? 0 : 1;
  }
  (l = ke(a)), (e = J[l] = L[l](a));
  function $e(S, j) {
    return S[7] == "USDT" ? pr : S[7] == "WETH" ? dr : fr;
  }
  let x = $e(a),
    C = x(a);
  return {
    c() {
      (t = o("button")),
        e.c(),
        (u = h()),
        (f = o("span")),
        (I = k("as")),
        (T = h()),
        (g = o("details")),
        (d = o("summary")),
        (p = o("img")),
        (b = h()),
        (w = o("span")),
        (D = o("span")),
        (H = k(a[7])),
        (R = h()),
        (N = o("img")),
        (G = h()),
        (z = o("div")),
        C.c(),
        this.h();
    },
    l(S) {
      t = i(S, "BUTTON", { class: !0 });
      var j = c(t);
      e.l(j), j.forEach(r), (u = v(S)), (f = i(S, "SPAN", { class: !0 }));
      var K = c(f);
      (I = E(K, "as")),
        K.forEach(r),
        (T = v(S)),
        (g = i(S, "DETAILS", { id: !0, class: !0 }));
      var q = c(g);
      d = i(q, "SUMMARY", { class: !0 });
      var Q = c(d);
      (p = i(Q, "IMG", { class: !0, src: !0, alt: !0 })),
        (b = v(Q)),
        (w = i(Q, "SPAN", { class: !0 }));
      var pe = c(w);
      D = i(pe, "SPAN", { class: !0 });
      var Ge = c(D);
      (H = E(Ge, a[7])),
        Ge.forEach(r),
        (R = v(pe)),
        (N = i(pe, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
        pe.forEach(r),
        Q.forEach(r),
        (G = v(q)),
        (z = i(q, "DIV", { class: !0 }));
      var le = c(z);
      C.l(le), le.forEach(r), q.forEach(r), this.h();
    },
    h() {
      n(t, "class", "ui__button"),
        n(f, "class", "claim__text svelte-wtt52l"),
        n(p, "class", "ui__currency__logo summary"),
        de(p.src, (_ = a[6])) || n(p, "src", _),
        n(p, "alt", ""),
        n(D, "class", "summary"),
        n(N, "class", "summary"),
        de(N.src, (A = "/img/icon/arrowDown.svg")) || n(N, "src", A),
        n(N, "alt", ""),
        n(N, "width", "12"),
        n(N, "height", "12"),
        n(w, "class", "ui__currency__text summary"),
        n(d, "class", "ui__currency summary"),
        n(z, "class", "ui__dropdown__content svelte-wtt52l"),
        n(g, "id", "dropdown"),
        n(g, "class", "ui__dropdown");
    },
    m(S, j) {
      U(S, t, j),
        J[l].m(t, null),
        U(S, u, j),
        U(S, f, j),
        s(f, I),
        U(S, T, j),
        U(S, g, j),
        s(g, d),
        s(d, p),
        s(d, b),
        s(d, w),
        s(w, D),
        s(D, H),
        s(w, R),
        s(w, N),
        s(g, G),
        s(g, z),
        C.m(z, null),
        (W = !0),
        F || ((M = X(t, "click", a[22])), (F = !0));
    },
    p(S, j) {
      let K = l;
      (l = ke(S)),
        l !== K &&
          (qe(),
          O(J[K], 1, 1, () => {
            J[K] = null;
          }),
          je(),
          (e = J[l]),
          e || ((e = J[l] = L[l](S)), e.c()),
          B(e, 1),
          e.m(t, null)),
        (!W || (j[0] & 64 && !de(p.src, (_ = S[6])))) && n(p, "src", _),
        (!W || j[0] & 128) && fe(H, S[7]),
        x === (x = $e(S)) && C
          ? C.p(S, j)
          : (C.d(1), (C = x(S)), C && (C.c(), C.m(z, null)));
    },
    i(S) {
      W || (B(e), (W = !0));
    },
    o(S) {
      O(e), (W = !1);
    },
    d(S) {
      S && r(t),
        J[l].d(),
        S && r(u),
        S && r(f),
        S && r(T),
        S && r(g),
        C.d(),
        (F = !1),
        M();
    },
  };
}
function cr(a) {
  let t, l;
  return (
    (t = new Xa({ props: { type: "large" } })),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function ur(a) {
  let t;
  return {
    c() {
      t = k("Claim");
    },
    l(l) {
      t = E(l, "Claim");
    },
    m(l, e) {
      U(l, t, e);
    },
    i: Y,
    o: Y,
    d(l) {
      l && r(t);
    },
  };
}
function _r(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function fr(a) {
  let t, l, e, u, f, I, T, g, d, p, _, b, w, D, H, R, N;
  return {
    c() {
      (t = o("button")),
        (l = o("img")),
        (u = h()),
        (f = o("span")),
        (I = o("span")),
        (T = k("WETH")),
        (g = h()),
        (d = o("button")),
        (p = o("img")),
        (b = h()),
        (w = o("span")),
        (D = o("span")),
        (H = k("USDT")),
        this.h();
    },
    l(A) {
      t = i(A, "BUTTON", { class: !0 });
      var G = c(t);
      (l = i(G, "IMG", { class: !0, src: !0, alt: !0 })),
        (u = v(G)),
        (f = i(G, "SPAN", { class: !0 }));
      var z = c(f);
      I = i(z, "SPAN", {});
      var W = c(I);
      (T = E(W, "WETH")),
        W.forEach(r),
        z.forEach(r),
        G.forEach(r),
        (g = v(A)),
        (d = i(A, "BUTTON", { class: !0 }));
      var F = c(d);
      (p = i(F, "IMG", { class: !0, src: !0, alt: !0 })),
        (b = v(F)),
        (w = i(F, "SPAN", { class: !0 }));
      var M = c(w);
      D = i(M, "SPAN", {});
      var L = c(D);
      (H = E(L, "USDT")), L.forEach(r), M.forEach(r), F.forEach(r), this.h();
    },
    h() {
      n(l, "class", "ui__currency__logo"),
        de(l.src, (e = a[23][a[23].indexOf(a[23].find(Br))].image)) ||
          n(l, "src", e),
        n(l, "alt", ""),
        n(f, "class", "ui__currency__text"),
        n(t, "class", "ui__currency ui__currency--dropdown"),
        n(p, "class", "ui__currency__logo"),
        de(p.src, (_ = a[23][a[23].indexOf(a[23].find(Fr))].image)) ||
          n(p, "src", _),
        n(p, "alt", ""),
        n(w, "class", "ui__currency__text"),
        n(
          d,
          "class",
          "ui__currency ui__currency--dropdown ui__currency--dropdown--bottom"
        );
    },
    m(A, G) {
      U(A, t, G),
        s(t, l),
        s(t, u),
        s(t, f),
        s(f, I),
        s(I, T),
        U(A, g, G),
        U(A, d, G),
        s(d, p),
        s(d, b),
        s(d, w),
        s(w, D),
        s(D, H),
        R || ((N = [X(t, "click", a[36]), X(d, "click", a[37])]), (R = !0));
    },
    p: Y,
    d(A) {
      A && r(t), A && r(g), A && r(d), (R = !1), Tl(N);
    },
  };
}
function dr(a) {
  let t, l, e, u, f, I, T, g, d, p, _, b, w, D, H, R, N;
  return {
    c() {
      (t = o("button")),
        (l = o("img")),
        (u = h()),
        (f = o("span")),
        (I = o("span")),
        (T = k("ETH")),
        (g = h()),
        (d = o("button")),
        (p = o("img")),
        (b = h()),
        (w = o("span")),
        (D = o("span")),
        (H = k("USDT")),
        this.h();
    },
    l(A) {
      t = i(A, "BUTTON", { class: !0 });
      var G = c(t);
      (l = i(G, "IMG", { class: !0, src: !0, alt: !0 })),
        (u = v(G)),
        (f = i(G, "SPAN", { class: !0 }));
      var z = c(f);
      I = i(z, "SPAN", {});
      var W = c(I);
      (T = E(W, "ETH")),
        W.forEach(r),
        z.forEach(r),
        G.forEach(r),
        (g = v(A)),
        (d = i(A, "BUTTON", { class: !0 }));
      var F = c(d);
      (p = i(F, "IMG", { class: !0, src: !0, alt: !0 })),
        (b = v(F)),
        (w = i(F, "SPAN", { class: !0 }));
      var M = c(w);
      D = i(M, "SPAN", {});
      var L = c(D);
      (H = E(L, "USDT")), L.forEach(r), M.forEach(r), F.forEach(r), this.h();
    },
    h() {
      n(l, "class", "ui__currency__logo"),
        de(l.src, (e = a[23][a[23].indexOf(a[23].find(Cr))].image)) ||
          n(l, "src", e),
        n(l, "alt", ""),
        n(f, "class", "ui__currency__text"),
        n(t, "class", "ui__currency ui__currency--dropdown"),
        n(p, "class", "ui__currency__logo"),
        de(p.src, (_ = a[23][a[23].indexOf(a[23].find(Or))].image)) ||
          n(p, "src", _),
        n(p, "alt", ""),
        n(w, "class", "ui__currency__text"),
        n(
          d,
          "class",
          "ui__currency ui__currency--dropdown ui__currency--dropdown--bottom"
        );
    },
    m(A, G) {
      U(A, t, G),
        s(t, l),
        s(t, u),
        s(t, f),
        s(f, I),
        s(I, T),
        U(A, g, G),
        U(A, d, G),
        s(d, p),
        s(d, b),
        s(d, w),
        s(w, D),
        s(D, H),
        R || ((N = [X(t, "click", a[34]), X(d, "click", a[35])]), (R = !0));
    },
    p: Y,
    d(A) {
      A && r(t), A && r(g), A && r(d), (R = !1), Tl(N);
    },
  };
}
function pr(a) {
  let t, l, e, u, f, I, T, g, d, p, _, b, w, D, H, R, N;
  return {
    c() {
      (t = o("button")),
        (l = o("img")),
        (u = h()),
        (f = o("span")),
        (I = o("span")),
        (T = k("ETH")),
        (g = h()),
        (d = o("button")),
        (p = o("img")),
        (b = h()),
        (w = o("span")),
        (D = o("span")),
        (H = k("WETH")),
        this.h();
    },
    l(A) {
      t = i(A, "BUTTON", { class: !0 });
      var G = c(t);
      (l = i(G, "IMG", { class: !0, src: !0, alt: !0 })),
        (u = v(G)),
        (f = i(G, "SPAN", { class: !0 }));
      var z = c(f);
      I = i(z, "SPAN", {});
      var W = c(I);
      (T = E(W, "ETH")),
        W.forEach(r),
        z.forEach(r),
        G.forEach(r),
        (g = v(A)),
        (d = i(A, "BUTTON", { class: !0 }));
      var F = c(d);
      (p = i(F, "IMG", { class: !0, src: !0, alt: !0 })),
        (b = v(F)),
        (w = i(F, "SPAN", { class: !0 }));
      var M = c(w);
      D = i(M, "SPAN", {});
      var L = c(D);
      (H = E(L, "WETH")), L.forEach(r), M.forEach(r), F.forEach(r), this.h();
    },
    h() {
      n(l, "class", "ui__currency__logo"),
        de(l.src, (e = a[23][a[23].indexOf(a[23].find(Vr))].image)) ||
          n(l, "src", e),
        n(l, "alt", ""),
        n(f, "class", "ui__currency__text"),
        n(t, "class", "ui__currency ui__currency--dropdown"),
        n(p, "class", "ui__currency__logo"),
        de(p.src, (_ = a[23][a[23].indexOf(a[23].find(Hr))].image)) ||
          n(p, "src", _),
        n(p, "alt", ""),
        n(w, "class", "ui__currency__text"),
        n(
          d,
          "class",
          "ui__currency ui__currency--dropdown ui__currency--dropdown--bottom"
        );
    },
    m(A, G) {
      U(A, t, G),
        s(t, l),
        s(t, u),
        s(t, f),
        s(f, I),
        s(I, T),
        U(A, g, G),
        U(A, d, G),
        s(d, p),
        s(d, b),
        s(d, w),
        s(w, D),
        s(D, H),
        R || ((N = [X(t, "click", a[32]), X(d, "click", a[33])]), (R = !0));
    },
    p: Y,
    d(A) {
      A && r(t), A && r(g), A && r(d), (R = !1), Tl(N);
    },
  };
}
function mr(a) {
  let t, l;
  return (
    (t = new Qa({
      props: { $$slots: { default: [vr] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p(e, u) {
        const f = {};
        u[1] & 8388608 && (f.$$scope = { dirty: u, ctx: e }), t.$set(f);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function hr(a) {
  let t, l, e, u, f, I;
  const T = [kr, wr, gr, br],
    g = [];
  function d(p, _) {
    return (
      _[0] & 38922 && (t = null),
      _[0] & 1546 && (l = null),
      p[3] == 0 || p[3] == null || p[3] == ""
        ? 0
        : (t == null &&
            (t =
              p[1] === "KEOPS"
                ? parseInt(p[12]) < p[15].utils.toWei(p[3].toString(), "gwei")
                : parseInt(p[11]) < p[15].utils.toWei(p[3].toString(), "gwei")),
          t
            ? 1
            : (l == null &&
                (l = (p[1] === "KEOPS" ? p[9] : p[10]) < parseFloat(p[3])),
              l ? 2 : 3))
    );
  }
  return (
    (e = d(a, [-1, -1])),
    (u = g[e] = T[e](a)),
    {
      c() {
        u.c(), (f = Ka());
      },
      l(p) {
        u.l(p), (f = Ka());
      },
      m(p, _) {
        g[e].m(p, _), U(p, f, _), (I = !0);
      },
      p(p, _) {
        let b = e;
        (e = d(p, _)),
          e === b
            ? g[e].p(p, _)
            : (qe(),
              O(g[b], 1, 1, () => {
                g[b] = null;
              }),
              je(),
              (u = g[e]),
              u ? u.p(p, _) : ((u = g[e] = T[e](p)), u.c()),
              B(u, 1),
              u.m(f.parentNode, f));
      },
      i(p) {
        I || (B(u), (I = !0));
      },
      o(p) {
        O(u), (I = !1);
      },
      d(p) {
        g[e].d(p), p && r(f);
      },
    }
  );
}
function vr(a) {
  let t, l;
  return (
    (t = new Xa({ props: { type: "large" } })),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function br(a) {
  let t, l, e, u, f, I, T;
  const g = [Ir, yr, Er],
    d = [];
  function p(_, b) {
    return _[14] ? 0 : 2;
  }
  return (
    (l = p(a)),
    (e = d[l] = g[l](a)),
    {
      c() {
        (t = o("button")), e.c(), this.h();
      },
      l(_) {
        t = i(_, "BUTTON", { class: !0 });
        var b = c(t);
        e.l(b), b.forEach(r), this.h();
      },
      h() {
        n(
          t,
          "class",
          (u =
            "ui__button " +
            (!!a[14] && "ui__button--disabled ui__button--loading") +
            " svelte-wtt52l")
        );
      },
      m(_, b) {
        U(_, t, b),
          d[l].m(t, null),
          (f = !0),
          I || ((T = X(t, "click", a[28])), (I = !0));
      },
      p(_, b) {
        let w = l;
        (l = p(_)),
          l === w
            ? d[l].p(_, b)
            : (qe(),
              O(d[w], 1, 1, () => {
                d[w] = null;
              }),
              je(),
              (e = d[l]),
              e ? e.p(_, b) : ((e = d[l] = g[l](_)), e.c()),
              B(e, 1),
              e.m(t, null)),
          (!f ||
            (b[0] & 16384 &&
              u !==
                (u =
                  "ui__button " +
                  (!!_[14] && "ui__button--disabled ui__button--loading") +
                  " svelte-wtt52l"))) &&
            n(t, "class", u);
      },
      i(_) {
        f || (B(e), (f = !0));
      },
      o(_) {
        O(e), (f = !1);
      },
      d(_) {
        _ && r(t), d[l].d(), (I = !1), T();
      },
    }
  );
}
function gr(a) {
  let t, l, e, u, f, I, T;
  const g = [Tr, Sr, Ar],
    d = [];
  function p(_, b) {
    return !!_[13] || !!_[14] ? 0 : 2;
  }
  return (
    (l = p(a)),
    (e = d[l] = g[l](a)),
    {
      c() {
        (t = o("button")), e.c(), this.h();
      },
      l(_) {
        t = i(_, "BUTTON", { class: !0 });
        var b = c(t);
        e.l(b), b.forEach(r), this.h();
      },
      h() {
        n(
          t,
          "class",
          (u =
            "ui__button ui__button--disabled " +
            ((!!a[13] || !!a[14]) && "ui__button--loading") +
            " svelte-wtt52l")
        );
      },
      m(_, b) {
        U(_, t, b),
          d[l].m(t, null),
          (f = !0),
          I || ((T = X(t, "click", a[27])), (I = !0));
      },
      p(_, b) {
        let w = l;
        (l = p(_)),
          l !== w &&
            (qe(),
            O(d[w], 1, 1, () => {
              d[w] = null;
            }),
            je(),
            (e = d[l]),
            e || ((e = d[l] = g[l](_)), e.c()),
            B(e, 1),
            e.m(t, null)),
          (!f ||
            (b[0] & 24576 &&
              u !==
                (u =
                  "ui__button ui__button--disabled " +
                  ((!!_[13] || !!_[14]) && "ui__button--loading") +
                  " svelte-wtt52l"))) &&
            n(t, "class", u);
      },
      i(_) {
        f || (B(e), (f = !0));
      },
      o(_) {
        O(e), (f = !1);
      },
      d(_) {
        _ && r(t), d[l].d(), (I = !1), T();
      },
    }
  );
}
function wr(a) {
  let t, l, e, u, f, I, T;
  const g = [Pr, Gr, $r],
    d = [];
  function p(_, b) {
    return _[13] ? 0 : 2;
  }
  return (
    (l = p(a)),
    (e = d[l] = g[l](a)),
    {
      c() {
        (t = o("button")), e.c(), this.h();
      },
      l(_) {
        t = i(_, "BUTTON", { class: !0 });
        var b = c(t);
        e.l(b), b.forEach(r), this.h();
      },
      h() {
        n(
          t,
          "class",
          (u =
            "ui__button " +
            (!!a[13] && "ui__button--disabled ui__button--loading") +
            " svelte-wtt52l")
        );
      },
      m(_, b) {
        U(_, t, b),
          d[l].m(t, null),
          (f = !0),
          I || ((T = X(t, "click", a[27])), (I = !0));
      },
      p(_, b) {
        let w = l;
        (l = p(_)),
          l === w
            ? d[l].p(_, b)
            : (qe(),
              O(d[w], 1, 1, () => {
                d[w] = null;
              }),
              je(),
              (e = d[l]),
              e ? e.p(_, b) : ((e = d[l] = g[l](_)), e.c()),
              B(e, 1),
              e.m(t, null)),
          (!f ||
            (b[0] & 8192 &&
              u !==
                (u =
                  "ui__button " +
                  (!!_[13] && "ui__button--disabled ui__button--loading") +
                  " svelte-wtt52l"))) &&
            n(t, "class", u);
      },
      i(_) {
        f || (B(e), (f = !0));
      },
      o(_) {
        O(e), (f = !1);
      },
      d(_) {
        _ && r(t), d[l].d(), (I = !1), T();
      },
    }
  );
}
function kr(a) {
  let t, l, e, u, f, I, T;
  const g = [Ur, Nr, Dr],
    d = [];
  function p(_, b) {
    return !!_[13] || !!_[14] ? 0 : 2;
  }
  return (
    (l = p(a)),
    (e = d[l] = g[l](a)),
    {
      c() {
        (t = o("button")), e.c(), this.h();
      },
      l(_) {
        t = i(_, "BUTTON", { class: !0 });
        var b = c(t);
        e.l(b), b.forEach(r), this.h();
      },
      h() {
        n(
          t,
          "class",
          (u =
            "ui__button ui__button--disabled " +
            (!!a[13] && "ui__button--loading") +
            " svelte-wtt52l")
        );
      },
      m(_, b) {
        U(_, t, b),
          d[l].m(t, null),
          (f = !0),
          I || ((T = X(t, "click", a[27])), (I = !0));
      },
      p(_, b) {
        let w = l;
        (l = p(_)),
          l !== w &&
            (qe(),
            O(d[w], 1, 1, () => {
              d[w] = null;
            }),
            je(),
            (e = d[l]),
            e || ((e = d[l] = g[l](_)), e.c()),
            B(e, 1),
            e.m(t, null)),
          (!f ||
            (b[0] & 8192 &&
              u !==
                (u =
                  "ui__button ui__button--disabled " +
                  (!!_[13] && "ui__button--loading") +
                  " svelte-wtt52l"))) &&
            n(t, "class", u);
      },
      i(_) {
        f || (B(e), (f = !0));
      },
      o(_) {
        O(e), (f = !1);
      },
      d(_) {
        _ && r(t), d[l].d(), (I = !1), T();
      },
    }
  );
}
function Er(a) {
  let t = a[1] === "KEOPS" ? "Stake KEOPS" : "Unstake mKEOPS",
    l;
  return {
    c() {
      l = k(t);
    },
    l(e) {
      l = E(e, t);
    },
    m(e, u) {
      U(e, l, u);
    },
    p(e, u) {
      u[0] & 2 &&
        t !== (t = e[1] === "KEOPS" ? "Stake KEOPS" : "Unstake mKEOPS") &&
        fe(l, t);
    },
    i: Y,
    o: Y,
    d(e) {
      e && r(l);
    },
  };
}
function yr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Ir(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Ar(a) {
  let t;
  return {
    c() {
      t = k("Insufficient balance");
    },
    l(l) {
      t = E(l, "Insufficient balance");
    },
    m(l, e) {
      U(l, t, e);
    },
    i: Y,
    o: Y,
    d(l) {
      l && r(t);
    },
  };
}
function Sr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Tr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function $r(a) {
  let t, l;
  return {
    c() {
      (t = k("Approve ")), (l = k(a[1]));
    },
    l(e) {
      (t = E(e, "Approve ")), (l = E(e, a[1]));
    },
    m(e, u) {
      U(e, t, u), U(e, l, u);
    },
    p(e, u) {
      u[0] & 2 && fe(l, e[1]);
    },
    i: Y,
    o: Y,
    d(e) {
      e && r(t), e && r(l);
    },
  };
}
function Gr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Pr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      p: Y,
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Dr(a) {
  let t;
  return {
    c() {
      t = k("Enter an amount");
    },
    l(l) {
      t = E(l, "Enter an amount");
    },
    m(l, e) {
      U(l, t, e);
    },
    i: Y,
    o: Y,
    d(l) {
      l && r(t);
    },
  };
}
function Nr(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Ur(a) {
  let t, l;
  return (
    (t = new Te({})),
    {
      c() {
        se(t.$$.fragment);
      },
      l(e) {
        ae(t.$$.fragment, e);
      },
      m(e, u) {
        re(t, e, u), (l = !0);
      },
      i(e) {
        l || (B(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        O(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        ne(t, e);
      },
    }
  );
}
function Zr(a) {
  let t,
    l,
    e,
    u,
    f,
    I,
    T,
    g,
    d,
    p,
    _,
    b,
    w,
    D,
    H,
    R,
    N,
    A,
    G,
    z,
    W,
    F,
    M =
      (a[7] === "USDT"
        ? `\u2248${a[25](parseFloat(a[4]) * parseFloat(a[5]), 6)}`
        : a[24](a[4], 6)) + "",
    L,
    J,
    ke,
    $e,
    x,
    C,
    S,
    j,
    K,
    q,
    Q,
    pe,
    Ge,
    le,
    Ye = a[24](a[9], 2) + "",
    et,
    wt,
    me,
    ce,
    ue,
    kt,
    Pe,
    Je = a[24](a[10], 2) + "",
    tt,
    Et,
    Ee,
    ye,
    _e,
    Ke,
    yt,
    Ie,
    It,
    lt,
    P,
    Z,
    y,
    st,
    $l,
    Gl,
    At,
    Pl,
    Dl,
    St,
    Nl,
    Ul,
    Tt,
    Zl,
    Vl,
    $t,
    Hl,
    Cl,
    Gt,
    Ol,
    Bl,
    Pt,
    Fl,
    Wl,
    at,
    Ml,
    Rl,
    Dt,
    zl,
    Ll,
    Nt,
    jl,
    ql,
    Ut,
    Yl,
    Jl,
    Zt,
    Kl,
    Ql,
    Vt,
    Xl,
    xl,
    Ht,
    es,
    ts,
    Ct,
    ls,
    ss,
    Ot,
    as,
    rs,
    Bt,
    ns,
    os,
    Ft,
    is,
    cs,
    Wt,
    us,
    _s,
    Mt,
    fs,
    ds,
    rt,
    ps,
    ms,
    nt,
    hs,
    De,
    vs,
    bs,
    ee,
    Ne,
    Ue,
    gs,
    xt,
    ws,
    Ze,
    ks,
    el,
    Es,
    he,
    Ve,
    He,
    Qe,
    qs,
    ys,
    ot,
    Rt,
    tl,
    Is,
    it,
    ve,
    As,
    ll,
    Ss,
    Ce,
    Oe,
    zt,
    Ts,
    Lt,
    $s,
    Ae,
    ct,
    Gs,
    Ps,
    jt = (a[1] === "KEOPS" ? a[24](a[9], 6) : a[24](a[10], 6)) + "",
    sl,
    Ds,
    ut,
    Xe,
    Be,
    _t,
    Ns,
    be,
    Fe,
    We,
    xe,
    Ys,
    Us,
    ft,
    qt,
    al,
    Zs,
    dt,
    ge,
    Vs,
    rl,
    Hs,
    Me,
    Re,
    Yt,
    Cs,
    Jt,
    Os,
    Se,
    pt,
    Bs,
    Fs,
    Kt = (a[1] === "KEOPS" ? a[24](a[10], 6) : a[24](a[9], 6)) + "",
    nl,
    Ws,
    oe,
    ie,
    te,
    Ms,
    Js;
  const Ks = [ir, or],
    ze = [];
  function Qs(m, V) {
    return m[0] != null ? 0 : 1;
  }
  (C = Qs(a)), (S = ze[C] = Ks[C](a));
  const Xs = [hr, mr],
    Le = [];
  function xs(m, V) {
    return m[0] != null ? 0 : 1;
  }
  return (
    (oe = xs(a)),
    (ie = Le[oe] = Xs[oe](a)),
    {
      c() {
        (t = o("sveltekit:head")),
          (l = o("title")),
          (e = k("Stake | Keops Protocol")),
          (u = h()),
          (f = o("h1")),
          (I = k("Staking")),
          (T = h()),
          (g = o("p")),
          (d = k(
            "Stake your $KEOPS for $mKEOPS at a 1:1 ratio for special perks and a cut of trading fees."
          )),
          (p = o("br")),
          (_ = o("br")),
          (b = k("No lockups. No fees. Unstake at any time.")),
          (w = h()),
          (D = o("div")),
          (H = o("div")),
          (R = o("div")),
          (N = o("div")),
          (A = o("p")),
          (G = k("Pending rewards")),
          (z = h()),
          (W = o("span")),
          (F = o("p")),
          (L = k(M)),
          (J = o("span")),
          (ke = k(a[7])),
          ($e = h()),
          (x = o("div")),
          S.c(),
          (j = h()),
          (K = o("div")),
          (q = o("div")),
          (Q = o("p")),
          (pe = k("$KEOPS balance")),
          (Ge = h()),
          (le = o("p")),
          (et = k(Ye)),
          (wt = h()),
          (me = o("div")),
          (ce = o("p")),
          (ue = k("$mKEOPS balance")),
          (kt = h()),
          (Pe = o("p")),
          (tt = k(Je)),
          (Et = h()),
          (Ee = o("div")),
          (ye = o("div")),
          (_e = o("div")),
          (Ke = o("span")),
          (yt = h()),
          (Ie = o("span")),
          (It = k("Scroll down")),
          (lt = h()),
          (P = o("main")),
          (Z = o("div")),
          (y = o("section")),
          (st = o("h2")),
          ($l = k("Staking Rewards")),
          (Gl = h()),
          (At = o("p")),
          (Pl = k(
            "1.00-1.30% of every trade is paid out to $mKEOPS holders, proportional to their share, in the form of ETH."
          )),
          (Dl = h()),
          (St = o("p")),
          (Nl = k("Staking rewards can be claimed as ETH, WETH, or USDT.")),
          (Ul = h()),
          (Tt = o("p")),
          (Zl = k(
            "Staking rewards accrue after every trade. Unclaimed rewards may be claimed at any time and as frequently as desired."
          )),
          (Vl = h()),
          ($t = o("p")),
          (Hl = k(
            "Your pending rewards will reset after each claim and immediately start re-accruing."
          )),
          (Cl = h()),
          (Gt = o("p")),
          (Ol = k(
            "Example: If there are 1,000,000 $mKEOPS tokens staked, and you have 50,000 $mKEOPS tokens (5% of the staking pool), you will earn 5% of all staking rewards (0.05-0.065% of each trade)."
          )),
          (Bl = h()),
          (Pt = o("p")),
          (Fl = k("Pending rewards are auto-claimed upon staking/unstaking.")),
          (Wl = h()),
          (at = o("h2")),
          (Ml = k("Presale Access")),
          (Rl = h()),
          (Dt = o("p")),
          (zl = k(
            "$mKEOPS holders are entitled to exclusive participation in presales on KEOPSSwap's Uniswap V3 token launchpad."
          )),
          (Ll = h()),
          (Nt = o("p")),
          (jl = k("These presales have two rounds.")),
          (ql = h()),
          (Ut = o("h3")),
          (Yl = k("First Round")),
          (Jl = h()),
          (Zt = o("p")),
          (Kl = k(
            "In the first round of a presale, which lasts anywhere from 4-48 hours, $mKEOPS holders may contribute funds pro rata."
          )),
          (Ql = h()),
          (Vt = o("p")),
          (Xl = k(
            "For example, if you hold 1% of all $mKEOPS tokens, then you have the option to purchase up to 1% of the tokens available in the presale."
          )),
          (xl = h()),
          (Ht = o("p")),
          (es = k(
            "You have no obligation to exercise this option, in full or in part. Presale participation is never required. There is no penalty for abstaining from presale participation."
          )),
          (ts = h()),
          (Ct = o("h3")),
          (ls = k("Second Round")),
          (ss = h()),
          (Ot = o("p")),
          (as = k(
            "In the second round of a presale, which lasts until the presale hits its hard cap or until 24 hours have passed, the remaining available tokens are sold on a first-come, first-serve basis."
          )),
          (rs = h()),
          (Bt = o("p")),
          (ns = k(
            "If 24 hours have passed and the presale has not hit its soft cap, then the presale will be cancelled, and all participants will be refunded fully."
          )),
          (os = h()),
          (Ft = o("h3")),
          (is = k("Vesting & Unlocks")),
          (cs = h()),
          (Wt = o("p")),
          (us = k(
            "Presale tokens may be fully or partially vested, and the precise vesting terms may vary from project to project."
          )),
          (_s = h()),
          (Mt = o("p")),
          (fs = k("Presale unlocks are escrowed by Keop's Protocol itself.")),
          (ds = h()),
          (rt = o("h2")),
          (ps = k("Other Info")),
          (ms = h()),
          (nt = o("p")),
          (hs = k("$mKEOPS Contract Address: ")),
          (De = o("a")),
          (vs = k("")),
          (bs = h()),
          (ee = o("section")),
          (Ne = o("div")),
          (Ue = o("button")),
          (gs = k("Stake")),
          (ws = h()),
          (Ze = o("button")),
          (ks = k("Unstake")),
          (Es = h()),
          (he = o("div")),
          (Ve = o("div")),
          (He = o("button")),
          (Qe = o("img")),
          (ys = h()),
          (ot = o("span")),
          (Rt = o("span")),
          (tl = k(a[1])),
          (Is = h()),
          (it = o("div")),
          (ve = o("input")),
          (As = h()),
          (ll = o("hr")),
          (Ss = h()),
          (Ce = o("div")),
          (Oe = o("div")),
          (zt = o("div")),
          (Ts = h()),
          (Lt = o("div")),
          ($s = h()),
          (Ae = o("div")),
          (ct = o("span")),
          (Gs = k("Balance:")),
          (Ps = h()),
          (sl = k(jt)),
          (Ds = h()),
          (ut = o("div")),
          (Xe = o("button")),
          (Be = Ya("svg")),
          (_t = Ya("path")),
          (Ns = h()),
          (be = o("div")),
          (Fe = o("div")),
          (We = o("button")),
          (xe = o("img")),
          (Us = h()),
          (ft = o("span")),
          (qt = o("span")),
          (al = k(a[2])),
          (Zs = h()),
          (dt = o("div")),
          (ge = o("input")),
          (Vs = h()),
          (rl = o("hr")),
          (Hs = h()),
          (Me = o("div")),
          (Re = o("div")),
          (Yt = o("div")),
          (Cs = h()),
          (Jt = o("div")),
          (Os = h()),
          (Se = o("div")),
          (pt = o("span")),
          (Bs = k("Balance:")),
          (Fs = h()),
          (nl = k(Kt)),
          (Ws = h()),
          ie.c(),
          this.h();
      },
      l(m) {
        t = i(m, "SVELTEKIT:HEAD", {});
        var V = c(t);
        l = i(V, "TITLE", {});
        var mt = c(l);
        (e = E(mt, "Stake | KEOPSSwap")),
          mt.forEach(r),
          V.forEach(r),
          (u = v(m)),
          (f = i(m, "H1", { class: !0 }));
        var ht = c(f);
        (I = E(ht, "Staking")),
          ht.forEach(r),
          (T = v(m)),
          (g = i(m, "P", { class: !0 }));
        var Qt = c(g);
        (d = E(
          Qt,
          "Stake your $KEOPS for $mKEOPS at a 1:1 ratio for special perks and a cut of trading fees."
        )),
          (p = i(Qt, "BR", {})),
          (_ = i(Qt, "BR", {})),
          (b = E(Qt, "No lockups. No fees. Unstake at any time.")),
          Qt.forEach(r),
          (w = v(m)),
          (D = i(m, "DIV", { class: !0 }));
        var ol = c(D);
        H = i(ol, "DIV", { class: !0 });
        var il = c(H);
        R = i(il, "DIV", { class: !0 });
        var ea = c(R);
        N = i(ea, "DIV", { class: !0 });
        var vt = c(N);
        A = i(vt, "P", { class: !0 });
        var ta = c(A);
        (G = E(ta, "Pending rewards")),
          ta.forEach(r),
          (z = v(vt)),
          (W = i(vt, "SPAN", { class: !0 }));
        var Rs = c(W);
        F = i(Rs, "P", { class: !0 });
        var la = c(F);
        (L = E(la, M)), la.forEach(r), (J = i(Rs, "SPAN", { class: !0 }));
        var sa = c(J);
        (ke = E(sa, a[7])),
          sa.forEach(r),
          Rs.forEach(r),
          ($e = v(vt)),
          (x = i(vt, "DIV", { class: !0 }));
        var aa = c(x);
        S.l(aa),
          aa.forEach(r),
          vt.forEach(r),
          ea.forEach(r),
          (j = v(il)),
          (K = i(il, "DIV", { class: !0 }));
        var cl = c(K);
        q = i(cl, "DIV", { class: !0 });
        var ul = c(q);
        Q = i(ul, "P", { class: !0 });
        var ra = c(Q);
        (pe = E(ra, "$KEOPS balance")),
          ra.forEach(r),
          (Ge = v(ul)),
          (le = i(ul, "P", { class: !0 }));
        var na = c(le);
        (et = E(na, Ye)),
          na.forEach(r),
          ul.forEach(r),
          (wt = v(cl)),
          (me = i(cl, "DIV", { class: !0 }));
        var _l = c(me);
        ce = i(_l, "P", { class: !0 });
        var oa = c(ce);
        (ue = E(oa, "$mKEOPS balance")),
          oa.forEach(r),
          (kt = v(_l)),
          (Pe = i(_l, "P", { class: !0 }));
        var ia = c(Pe);
        (tt = E(ia, Je)),
          ia.forEach(r),
          _l.forEach(r),
          cl.forEach(r),
          il.forEach(r),
          (Et = v(ol)),
          (Ee = i(ol, "DIV", { id: !0, class: !0 }));
        var ca = c(Ee);
        ye = i(ca, "DIV", { id: !0, class: !0 });
        var ua = c(ye);
        _e = i(ua, "DIV", { id: !0, class: !0 });
        var fl = c(_e);
        (Ke = i(fl, "SPAN", { class: !0 })),
          c(Ke).forEach(r),
          (yt = v(fl)),
          (Ie = i(fl, "SPAN", { id: !0, class: !0 }));
        var _a = c(Ie);
        (It = E(_a, "Scroll down")),
          _a.forEach(r),
          fl.forEach(r),
          ua.forEach(r),
          ca.forEach(r),
          ol.forEach(r),
          (lt = v(m)),
          (P = i(m, "MAIN", { class: !0 }));
        var fa = c(P);
        Z = i(fa, "DIV", { class: !0 });
        var dl = c(Z);
        y = i(dl, "SECTION", { class: !0 });
        var $ = c(y);
        st = i($, "H2", { class: !0 });
        var da = c(st);
        ($l = E(da, "Staking Rewards")),
          da.forEach(r),
          (Gl = v($)),
          (At = i($, "P", {}));
        var pa = c(At);
        (Pl = E(
          pa,
          "1.00-1.30% of every trade is paid out to $mKEOPS holders, proportional to their share, in the form of ETH."
        )),
          pa.forEach(r),
          (Dl = v($)),
          (St = i($, "P", {}));
        var ma = c(St);
        (Nl = E(ma, "Staking rewards can be claimed as ETH, WETH, or USDT.")),
          ma.forEach(r),
          (Ul = v($)),
          (Tt = i($, "P", {}));
        var ha = c(Tt);
        (Zl = E(
          ha,
          "Staking rewards accrue after every trade. Unclaimed rewards may be claimed at any time and as frequently as desired."
        )),
          ha.forEach(r),
          (Vl = v($)),
          ($t = i($, "P", {}));
        var va = c($t);
        (Hl = E(
          va,
          "Your pending rewards will reset after each claim and immediately start re-accruing."
        )),
          va.forEach(r),
          (Cl = v($)),
          (Gt = i($, "P", {}));
        var ba = c(Gt);
        (Ol = E(
          ba,
          "Example: If there are 1,000,000 $mKEOPS tokens staked, and you have 50,000 $mKEOPS tokens (5% of the staking pool), you will earn 5% of all staking rewards (0.05-0.065% of each trade)."
        )),
          ba.forEach(r),
          (Bl = v($)),
          (Pt = i($, "P", {}));
        var ga = c(Pt);
        (Fl = E(
          ga,
          "Pending rewards are auto-claimed upon staking/unstaking."
        )),
          ga.forEach(r),
          (Wl = v($)),
          (at = i($, "H2", { class: !0 }));
        var wa = c(at);
        (Ml = E(wa, "Presale Access")),
          wa.forEach(r),
          (Rl = v($)),
          (Dt = i($, "P", {}));
        var ka = c(Dt);
        (zl = E(
          ka,
          "$mKEOPS holders are entitled to exclusive participation in presales on KEOPSSwap's Uniswap V3 token launchpad."
        )),
          ka.forEach(r),
          (Ll = v($)),
          (Nt = i($, "P", {}));
        var Ea = c(Nt);
        (jl = E(Ea, "These presales have two rounds.")),
          Ea.forEach(r),
          (ql = v($)),
          (Ut = i($, "H3", {}));
        var ya = c(Ut);
        (Yl = E(ya, "First Round")),
          ya.forEach(r),
          (Jl = v($)),
          (Zt = i($, "P", {}));
        var Ia = c(Zt);
        (Kl = E(
          Ia,
          "In the first round of a presale, which lasts anywhere from 4-48 hours, $mKEOPS holders may contribute funds pro rata."
        )),
          Ia.forEach(r),
          (Ql = v($)),
          (Vt = i($, "P", {}));
        var Aa = c(Vt);
        (Xl = E(
          Aa,
          "For example, if you hold 1% of all $mKEOPS tokens, then you have the option to purchase up to 1% of the tokens available in the presale."
        )),
          Aa.forEach(r),
          (xl = v($)),
          (Ht = i($, "P", {}));
        var Sa = c(Ht);
        (es = E(
          Sa,
          "You have no obligation to exercise this option, in full or in part. Presale participation is never required. There is no penalty for abstaining from presale participation."
        )),
          Sa.forEach(r),
          (ts = v($)),
          (Ct = i($, "H3", {}));
        var Ta = c(Ct);
        (ls = E(Ta, "Second Round")),
          Ta.forEach(r),
          (ss = v($)),
          (Ot = i($, "P", {}));
        var $a = c(Ot);
        (as = E(
          $a,
          "In the second round of a presale, which lasts until the presale hits its hard cap or until 24 hours have passed, the remaining available tokens are sold on a first-come, first-serve basis."
        )),
          $a.forEach(r),
          (rs = v($)),
          (Bt = i($, "P", {}));
        var Ga = c(Bt);
        (ns = E(
          Ga,
          "If 24 hours have passed and the presale has not hit its soft cap, then the presale will be cancelled, and all participants will be refunded fully."
        )),
          Ga.forEach(r),
          (os = v($)),
          (Ft = i($, "H3", {}));
        var Pa = c(Ft);
        (is = E(Pa, "Vesting & Unlocks")),
          Pa.forEach(r),
          (cs = v($)),
          (Wt = i($, "P", {}));
        var Da = c(Wt);
        (us = E(
          Da,
          "Presale tokens may be fully or partially vested, and the precise vesting terms may vary from project to project."
        )),
          Da.forEach(r),
          (_s = v($)),
          (Mt = i($, "P", {}));
        var Na = c(Mt);
        (fs = E(Na, "Presale unlocks are escrowed by Keop's Protocol itself.")),
          Na.forEach(r),
          (ds = v($)),
          (rt = i($, "H2", { class: !0 }));
        var Ua = c(rt);
        (ps = E(Ua, "Other Info")),
          Ua.forEach(r),
          (ms = v($)),
          (nt = i($, "P", {}));
        var zs = c(nt);
        (hs = E(zs, "$mKEOPS Contract Address: ")),
          (De = i(zs, "A", { class: !0, href: !0, target: !0 }));
        var Za = c(De);
        (vs = E(Za, "")),
          Za.forEach(r),
          zs.forEach(r),
          $.forEach(r),
          (bs = v(dl)),
          (ee = i(dl, "SECTION", { class: !0 }));
        var we = c(ee);
        Ne = i(we, "DIV", { class: !0 });
        var pl = c(Ne);
        Ue = i(pl, "BUTTON", { class: !0 });
        var Va = c(Ue);
        (gs = E(Va, "Stake")),
          Va.forEach(r),
          (ws = v(pl)),
          (Ze = i(pl, "BUTTON", { class: !0 }));
        var Ha = c(Ze);
        (ks = E(Ha, "Unstake")),
          Ha.forEach(r),
          pl.forEach(r),
          (Es = v(we)),
          (he = i(we, "DIV", { class: !0 }));
        var bt = c(he);
        Ve = i(bt, "DIV", { class: !0 });
        var ml = c(Ve);
        He = i(ml, "BUTTON", { class: !0 });
        var hl = c(He);
        (Qe = i(hl, "IMG", { class: !0, src: !0, alt: !0 })),
          (ys = v(hl)),
          (ot = i(hl, "SPAN", { class: !0 }));
        var Ca = c(ot);
        Rt = i(Ca, "SPAN", {});
        var Oa = c(Rt);
        (tl = E(Oa, a[1])),
          Oa.forEach(r),
          Ca.forEach(r),
          hl.forEach(r),
          (Is = v(ml)),
          (it = i(ml, "DIV", { class: !0 }));
        var Ba = c(it);
        (ve = i(Ba, "INPUT", { class: !0, type: !0, placeholder: !0 })),
          Ba.forEach(r),
          ml.forEach(r),
          (As = v(bt)),
          (ll = i(bt, "HR", { class: !0 })),
          (Ss = v(bt)),
          (Ce = i(bt, "DIV", { class: !0 }));
        var vl = c(Ce);
        Oe = i(vl, "DIV", { class: !0 });
        var bl = c(Oe);
        (zt = i(bl, "DIV", { class: !0 })),
          c(zt).forEach(r),
          (Ts = v(bl)),
          (Lt = i(bl, "DIV", { class: !0 })),
          c(Lt).forEach(r),
          bl.forEach(r),
          ($s = v(vl)),
          (Ae = i(vl, "DIV", { class: !0 }));
        var gl = c(Ae);
        ct = i(gl, "SPAN", { class: !0 });
        var Fa = c(ct);
        (Gs = E(Fa, "Balance:")),
          Fa.forEach(r),
          (Ps = v(gl)),
          (sl = E(gl, jt)),
          gl.forEach(r),
          vl.forEach(r),
          bt.forEach(r),
          (Ds = v(we)),
          (ut = i(we, "DIV", { class: !0 }));
        var Wa = c(ut);
        Xe = i(Wa, "BUTTON", { class: !0 });
        var Ma = c(Xe);
        Be = Ja(Ma, "svg", { xmlns: !0, width: !0, height: !0 });
        var Ra = c(Be);
        (_t = Ja(Ra, "path", { fill: !0, d: !0 })),
          c(_t).forEach(r),
          Ra.forEach(r),
          Ma.forEach(r),
          Wa.forEach(r),
          (Ns = v(we)),
          (be = i(we, "DIV", { class: !0 }));
        var gt = c(be);
        Fe = i(gt, "DIV", { class: !0 });
        var wl = c(Fe);
        We = i(wl, "BUTTON", { class: !0 });
        var kl = c(We);
        (xe = i(kl, "IMG", { class: !0, src: !0, alt: !0 })),
          (Us = v(kl)),
          (ft = i(kl, "SPAN", { class: !0 }));
        var za = c(ft);
        qt = i(za, "SPAN", {});
        var La = c(qt);
        (al = E(La, a[2])),
          La.forEach(r),
          za.forEach(r),
          kl.forEach(r),
          (Zs = v(wl)),
          (dt = i(wl, "DIV", { class: !0 }));
        var ja = c(dt);
        (ge = i(ja, "INPUT", { class: !0, type: !0, placeholder: !0 })),
          ja.forEach(r),
          wl.forEach(r),
          (Vs = v(gt)),
          (rl = i(gt, "HR", { class: !0 })),
          (Hs = v(gt)),
          (Me = i(gt, "DIV", { class: !0 }));
        var El = c(Me);
        Re = i(El, "DIV", { class: !0 });
        var yl = c(Re);
        (Yt = i(yl, "DIV", { class: !0 })),
          c(Yt).forEach(r),
          (Cs = v(yl)),
          (Jt = i(yl, "DIV", { class: !0 })),
          c(Jt).forEach(r),
          yl.forEach(r),
          (Os = v(El)),
          (Se = i(El, "DIV", { class: !0 }));
        var Il = c(Se);
        pt = i(Il, "SPAN", { class: !0 });
        var qa = c(pt);
        (Bs = E(qa, "Balance:")),
          qa.forEach(r),
          (Fs = v(Il)),
          (nl = E(Il, Kt)),
          Il.forEach(r),
          El.forEach(r),
          gt.forEach(r),
          (Ws = v(we)),
          ie.l(we),
          we.forEach(r),
          dl.forEach(r),
          fa.forEach(r),
          this.h();
      },
      h() {
        n(f, "class", "svelte-wtt52l"),
          n(g, "class", "svelte-wtt52l"),
          n(A, "class", "reward__label svelte-wtt52l"),
          n(F, "class", "reward__value__amount svelte-wtt52l"),
          n(J, "class", "reward__value__currency svelte-wtt52l"),
          n(W, "class", "reward__value svelte-wtt52l"),
          n(x, "class", "claim__row svelte-wtt52l"),
          n(N, "class", "reward svelte-wtt52l"),
          n(R, "class", "rewards__left svelte-wtt52l"),
          n(Q, "class", "reward__label svelte-wtt52l"),
          n(le, "class", "reward__value svelte-wtt52l"),
          n(q, "class", "reward svelte-wtt52l"),
          n(ce, "class", "reward__label svelte-wtt52l"),
          n(Pe, "class", "reward__value svelte-wtt52l"),
          n(me, "class", "reward svelte-wtt52l"),
          n(K, "class", "rewards__right svelte-wtt52l"),
          n(H, "class", "rewards svelte-wtt52l"),
          n(Ke, "class", "arrow-down svelte-wtt52l"),
          n(Ie, "id", "scroll-title"),
          n(Ie, "class", "svelte-wtt52l"),
          n(_e, "id", "scroll-down"),
          n(_e, "class", "svelte-wtt52l"),
          n(ye, "id", "wrapper-inner"),
          n(ye, "class", "svelte-wtt52l"),
          n(Ee, "id", "wrapper"),
          n(Ee, "class", "svelte-wtt52l"),
          n(D, "class", "wrapper wrapper--top svelte-wtt52l"),
          n(st, "class", "g no-margin svelte-wtt52l"),
          n(at, "class", "g svelte-wtt52l"),
          n(rt, "class", "g svelte-wtt52l"),
          n(De, "class", "a"),
          n(
            De,
            "href",
            "https://arbiscan.io"
          ),
          n(De, "target", "_blank"),
          n(y, "class", "ui__text"),
          n(
            Ue,
            "class",
            (xt =
              "ui__toggle__button " +
              (a[1] === "KEOPS" && "ui__toggle__button--buy") +
              " svelte-wtt52l")
          ),
          n(
            Ze,
            "class",
            (el =
              "ui__toggle__button " +
              (a[1] !== "KEOPS" && "ui__toggle__button--sell") +
              " svelte-wtt52l")
          ),
          n(Ne, "class", "ui__toggle"),
          n(Qe, "class", "ui__currency__logo"),
          de(Qe.src, (qs = a[16])) || n(Qe, "src", qs),
          n(Qe, "alt", ""),
          n(ot, "class", "ui__currency__text"),
          n(He, "class", "ui__currency"),
          n(ve, "class", "ui__input"),
          n(ve, "type", "number"),
          n(ve, "placeholder", "0.00"),
          n(it, "class", "ui__field__right"),
          n(Ve, "class", "ui__field"),
          n(ll, "class", "ui__divider"),
          n(zt, "class", "ui__slider__input"),
          n(Lt, "class", "ui__slider__button"),
          n(Oe, "class", "ui__slider"),
          n(ct, "class", "ui__balance__label"),
          n(Ae, "class", "ui__balance"),
          n(Ce, "class", "ui__amount"),
          n(he, "class", "ui__bubble"),
          n(_t, "fill", "#eee"),
          n(
            _t,
            "d",
            "M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z"
          ),
          n(Be, "xmlns", "http://www.w3.org/2000/svg"),
          n(Be, "width", "22px"),
          n(Be, "height", "22px"),
          n(Xe, "class", "ui__flipper"),
          n(ut, "class", "ui__flip"),
          n(xe, "class", "ui__currency__logo"),
          de(xe.src, (Ys = a[17])) || n(xe, "src", Ys),
          n(xe, "alt", ""),
          n(ft, "class", "ui__currency__text"),
          n(We, "class", "ui__currency"),
          n(ge, "class", "ui__input"),
          n(ge, "type", "number"),
          n(ge, "placeholder", "0.00"),
          n(dt, "class", "ui__field__right"),
          n(Fe, "class", "ui__field"),
          n(rl, "class", "ui__divider"),
          n(Yt, "class", "ui__slider__input"),
          n(Jt, "class", "ui__slider__button"),
          n(Re, "class", "ui__slider"),
          n(pt, "class", "ui__balance__label"),
          n(Se, "class", "ui__balance"),
          n(Me, "class", "ui__amount"),
          n(be, "class", "ui__bubble"),
          n(ee, "class", "ui__swap svelte-wtt52l"),
          n(Z, "class", "ui svelte-wtt52l"),
          n(P, "class", "wrapper svelte-wtt52l");
      },
      m(m, V) {
        U(m, t, V),
          s(t, l),
          s(l, e),
          U(m, u, V),
          U(m, f, V),
          s(f, I),
          U(m, T, V),
          U(m, g, V),
          s(g, d),
          s(g, p),
          s(g, _),
          s(g, b),
          U(m, w, V),
          U(m, D, V),
          s(D, H),
          s(H, R),
          s(R, N),
          s(N, A),
          s(A, G),
          s(N, z),
          s(N, W),
          s(W, F),
          s(F, L),
          s(W, J),
          s(J, ke),
          s(N, $e),
          s(N, x),
          ze[C].m(x, null),
          s(H, j),
          s(H, K),
          s(K, q),
          s(q, Q),
          s(Q, pe),
          s(q, Ge),
          s(q, le),
          s(le, et),
          s(K, wt),
          s(K, me),
          s(me, ce),
          s(ce, ue),
          s(me, kt),
          s(me, Pe),
          s(Pe, tt),
          s(D, Et),
          s(D, Ee),
          s(Ee, ye),
          s(ye, _e),
          s(_e, Ke),
          s(_e, yt),
          s(_e, Ie),
          s(Ie, It),
          U(m, lt, V),
          U(m, P, V),
          s(P, Z),
          s(Z, y),
          s(y, st),
          s(st, $l),
          s(y, Gl),
          s(y, At),
          s(At, Pl),
          s(y, Dl),
          s(y, St),
          s(St, Nl),
          s(y, Ul),
          s(y, Tt),
          s(Tt, Zl),
          s(y, Vl),
          s(y, $t),
          s($t, Hl),
          s(y, Cl),
          s(y, Gt),
          s(Gt, Ol),
          s(y, Bl),
          s(y, Pt),
          s(Pt, Fl),
          s(y, Wl),
          s(y, at),
          s(at, Ml),
          s(y, Rl),
          s(y, Dt),
          s(Dt, zl),
          s(y, Ll),
          s(y, Nt),
          s(Nt, jl),
          s(y, ql),
          s(y, Ut),
          s(Ut, Yl),
          s(y, Jl),
          s(y, Zt),
          s(Zt, Kl),
          s(y, Ql),
          s(y, Vt),
          s(Vt, Xl),
          s(y, xl),
          s(y, Ht),
          s(Ht, es),
          s(y, ts),
          s(y, Ct),
          s(Ct, ls),
          s(y, ss),
          s(y, Ot),
          s(Ot, as),
          s(y, rs),
          s(y, Bt),
          s(Bt, ns),
          s(y, os),
          s(y, Ft),
          s(Ft, is),
          s(y, cs),
          s(y, Wt),
          s(Wt, us),
          s(y, _s),
          s(y, Mt),
          s(Mt, fs),
          s(y, ds),
          s(y, rt),
          s(rt, ps),
          s(y, ms),
          s(y, nt),
          s(nt, hs),
          s(nt, De),
          s(De, vs),
          s(Z, bs),
          s(Z, ee),
          s(ee, Ne),
          s(Ne, Ue),
          s(Ue, gs),
          s(Ne, ws),
          s(Ne, Ze),
          s(Ze, ks),
          s(ee, Es),
          s(ee, he),
          s(he, Ve),
          s(Ve, He),
          s(He, Qe),
          s(He, ys),
          s(He, ot),
          s(ot, Rt),
          s(Rt, tl),
          s(Ve, Is),
          s(Ve, it),
          s(it, ve),
          Al(ve, a[3]),
          s(he, As),
          s(he, ll),
          s(he, Ss),
          s(he, Ce),
          s(Ce, Oe),
          s(Oe, zt),
          s(Oe, Ts),
          s(Oe, Lt),
          s(Ce, $s),
          s(Ce, Ae),
          s(Ae, ct),
          s(ct, Gs),
          s(Ae, Ps),
          s(Ae, sl),
          s(ee, Ds),
          s(ee, ut),
          s(ut, Xe),
          s(Xe, Be),
          s(Be, _t),
          s(ee, Ns),
          s(ee, be),
          s(be, Fe),
          s(Fe, We),
          s(We, xe),
          s(We, Us),
          s(We, ft),
          s(ft, qt),
          s(qt, al),
          s(Fe, Zs),
          s(Fe, dt),
          s(dt, ge),
          Al(ge, a[3]),
          s(be, Vs),
          s(be, rl),
          s(be, Hs),
          s(be, Me),
          s(Me, Re),
          s(Re, Yt),
          s(Re, Cs),
          s(Re, Jt),
          s(Me, Os),
          s(Me, Se),
          s(Se, pt),
          s(pt, Bs),
          s(Se, Fs),
          s(Se, nl),
          s(ee, Ws),
          Le[oe].m(ee, null),
          (te = !0),
          Ms ||
            ((Js = [
              X(Ue, "click", a[38]),
              X(Ze, "click", a[39]),
              X(ve, "input", a[40]),
              X(Ae, "click", a[29]),
              X(Xe, "click", a[26]),
              X(ge, "input", a[41]),
              X(Se, "click", a[30]),
            ]),
            (Ms = !0));
      },
      p(m, V) {
        (!te || V[0] & 176) &&
          M !==
            (M =
              (m[7] === "USDT"
                ? `\u2248${m[25](parseFloat(m[4]) * parseFloat(m[5]), 6)}`
                : m[24](m[4], 6)) + "") &&
          fe(L, M),
          (!te || V[0] & 128) && fe(ke, m[7]);
        let mt = C;
        (C = Qs(m)),
          C === mt
            ? ze[C].p(m, V)
            : (qe(),
              O(ze[mt], 1, 1, () => {
                ze[mt] = null;
              }),
              je(),
              (S = ze[C]),
              S ? S.p(m, V) : ((S = ze[C] = Ks[C](m)), S.c()),
              B(S, 1),
              S.m(x, null)),
          (!te || V[0] & 512) &&
            Ye !== (Ye = m[24](m[9], 2) + "") &&
            fe(et, Ye),
          (!te || V[0] & 1024) &&
            Je !== (Je = m[24](m[10], 2) + "") &&
            fe(tt, Je),
          (!te ||
            (V[0] & 2 &&
              xt !==
                (xt =
                  "ui__toggle__button " +
                  (m[1] === "KEOPS" && "ui__toggle__button--buy") +
                  " svelte-wtt52l"))) &&
            n(Ue, "class", xt),
          (!te ||
            (V[0] & 2 &&
              el !==
                (el =
                  "ui__toggle__button " +
                  (m[1] !== "KEOPS" && "ui__toggle__button--sell") +
                  " svelte-wtt52l"))) &&
            n(Ze, "class", el),
          (!te || V[0] & 2) && fe(tl, m[1]),
          V[0] & 8 && Sl(ve.value) !== m[3] && Al(ve, m[3]),
          (!te || V[0] & 1538) &&
            jt !==
              (jt =
                (m[1] === "KEOPS" ? m[24](m[9], 6) : m[24](m[10], 6)) + "") &&
            fe(sl, jt),
          (!te || V[0] & 4) && fe(al, m[2]),
          V[0] & 8 && Sl(ge.value) !== m[3] && Al(ge, m[3]),
          (!te || V[0] & 1538) &&
            Kt !==
              (Kt =
                (m[1] === "KEOPS" ? m[24](m[10], 6) : m[24](m[9], 6)) + "") &&
            fe(nl, Kt);
        let ht = oe;
        (oe = xs(m)),
          oe === ht
            ? Le[oe].p(m, V)
            : (qe(),
              O(Le[ht], 1, 1, () => {
                Le[ht] = null;
              }),
              je(),
              (ie = Le[oe]),
              ie ? ie.p(m, V) : ((ie = Le[oe] = Xs[oe](m)), ie.c()),
              B(ie, 1),
              ie.m(ee, null));
      },
      i(m) {
        te || (B(S), B(ie), (te = !0));
      },
      o(m) {
        O(S), O(ie), (te = !1);
      },
      d(m) {
        m && r(t),
          m && r(u),
          m && r(f),
          m && r(T),
          m && r(g),
          m && r(w),
          m && r(D),
          ze[C].d(),
          m && r(lt),
          m && r(P),
          Le[oe].d(),
          (Ms = !1),
          Tl(Js);
      },
    }
  );
}
const Vr = (a) => a.symbol == "ETH",
  Hr = (a) => a.symbol == "WETH",
  Cr = (a) => a.symbol == "ETH",
  Or = (a) => a.symbol == "USDT",
  Br = (a) => a.symbol == "WETH",
  Fr = (a) => a.symbol == "USDT";
function Wr(a, t, l) {
  let e, u, f;
  Ls(a, ar, (P) => l(31, (e = P))),
    Ls(a, rr, (P) => l(0, (u = P))),
    Ls(a, nr, (P) => l(15, (f = P)));
  const I = "0xfcaa8eef70f373e00ac29208023d106c846259ee",
    T = "",
    g = "0xeD114612fC2a61DD2bE4473bd21c78e359EF137D";
  let d = "/img/pyramidCompact.jpg",
    p = "/img/pyramidCompact.jpg",
    _ = "KEOPS",
    b = "mKEOPS",
    w = 1,
    D = 0,
    H = 1;
  const R = async () => {
      const Z = await (
        await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        )
      ).json();
      try {
        l(5, (H = parseFloat(Z.ethereum.usd)));
      } catch {}
    },
    N = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    A = "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    G = "0x0000000000000000000000000000000000000000";
  let z = "/img/tokens/eth.png",
    W = "ETH",
    F = G;
  const M = (P) => {
    const Z =
      x[x.indexOf(x.find((y) => y.address.toLowerCase() == P.toLowerCase()))];
    l(6, (z = Z.image)),
      l(7, (W = Z.symbol)),
      (F = Z.address),
      document.getElementById("dropdown").removeAttribute("open");
  };
  let L = !1,
    J = !1;
  const ke = async () => {
      const P = new f.eth.Contract(js, g);
      J = !0;
      try {
        const Z = await P.methods.getUnclaimedRewards(u).call();
        l(4, (D = f.utils.fromWei(Z, "ether"))), (J = !1);
      } catch {
        J = !1;
      }
    },
    $e = async () => {
      if (L) return;
      const P = new f.eth.Contract(js, g);
      l(13, (q = !0));
      try {
        let Z = await P.methods.claimRewards(F).send({ from: u });
        ce(), l(8, (L = !1));
      } catch {
        l(8, (L = !1));
      }
    };
  let x = [
      {
        address: G,
        balance: 0,
        decimals: 18,
        decimalsName: "ether",
        image: "/img/tokens/eth.png",
        symbol: "ETH",
        value: 0,
      },
      {
        address: N,
        balance: 0,
        decimals: 18,
        decimalsName: "ether",
        image: "/img/tokens/weth.png",
        symbol: "WETH",
        value: 0,
      },
      {
        address: A,
        balance: 0,
        decimals: 6,
        decimalsName: "lovelace",
        image: "/img/tokens/usdt.png",
        symbol: "USDT",
        value: 0,
      },
    ],
    C = 0,
    S = 0,
    j = 0,
    K = 0,
    q = !1,
    Q = !1;
  const pe = (P, Z) =>
      new Intl.NumberFormat("en-US", { minimumFractionDigits: Z }).format(P),
    Ge = (P, Z) =>
      new Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: Z,
        style: "currency",
      }).format(P),
    le = () => {
      try {
        l(2, (b = [_, l(1, (_ = b))][0]));
      } catch {
        l(3, (w = 0)), l(2, (b = [_, l(1, (_ = b))][0]));
      }
    },
    Ye = async () => {
      if (!!Q || !!q) return;
      const P = _ === "KEOPS",
        Z = new f.eth.Contract(Xt, P ? I : T);
      l(13, (q = !0));
      try {
        let y = await Z.methods.approveMax(T).send({ from: u });
        ce(), l(13, (q = !1));
      } catch {
        l(13, (q = !1));
      }
    },
    et = async () => {
      if (!!Q || !!q) return;
      const P = _ === "KEOPS",
        Z = new f.eth.Contract(Xt, T);
      l(14, (Q = !0));
      try {
        let y = P
          ? await Z.methods
              .stake(f.utils.toWei(w.toString(), "gwei"))
              .send({ from: u })
          : await Z.methods
              .unstake(f.utils.toWei(w.toString(), "gwei"))
              .send({ from: u });
        ce(), l(14, (Q = !1));
      } catch {
        l(14, (Q = !1));
      }
    },
    wt = () => {
      l(3, (w = _ === "KEOPS" ? C : S));
    },
    me = () => {
      l(3, (w = _ === "KEOPS" ? S : C));
    },
    ce = async () => {
      if (u != null) {
        const P = new f.eth.Contract(Xt, I),
          Z = new f.eth.Contract(Xt, T);
        l(
          9,
          (C = f.utils.fromWei(
            (await P.methods.balanceOf(u).call()).toString(),
            "gwei"
          ))
        ),
          l(11, (j = await Z.methods.allowance(u, T).call())),
          l(
            10,
            (S = f.utils.fromWei(
              (await Z.methods.balanceOf(u).call()).toString(),
              "gwei"
            ))
          ),
          l(12, (K = await P.methods.allowance(u, T).call())),
          await ke();
      }
    };
  let ue = { apr: 0, unclaimed: 0, total: 0, accrued: 0, staked: 0 };
  const kt = async () => {},
    Pe = async () => {
      const P = new f.eth.Contract(js, g);
      (ue.unclaimed = await P.methods.getUnclaimedRewardsTotal().call()),
        (ue.claimed = f.utils.fromWei(
          (await P.methods.getClaimedRewardsTotal().call()).toString(),
          "ether"
        )),
        (ue.accrued =
          parseFloat(ue.claimed) +
          parseFloat(f.utils.fromWei(ue.unclaimed[0].toString(), "ether")) +
          parseFloat(f.utils.fromWei(ue.unclaimed[1].toString(), "lovelace")) /
            parseFloat(H));
    },
    Je = async () => {
      const P = new f.eth.Contract(Xt, I);
      ue.staked = f.utils.fromWei(
        (await P.methods.balanceOf(T).call()).toString(),
        "gwei"
      );
    };
  lr(async () => {
    R(),
      u == null &&
        (await sr.setProvider(
          "https://eth-mainnet.g.alchemy.com/v2/cmyTBPLJ65F2whZ0xPUtnOqW0GFzNLaV"
        )),
      await kt(),
      await Pe(),
      await Je();
  });
  const tt = () => M(G),
    Et = () => M(N),
    Ee = () => M(G),
    ye = () => M(A),
    _e = () => M(N),
    Ke = () => M(A),
    yt = () => _ !== "KEOPS" && le(),
    Ie = () => _ === "KEOPS" && le();
  function It() {
    (w = Sl(this.value)), l(3, w);
  }
  function lt() {
    (w = Sl(this.value)), l(3, w);
  }
  return (
    (a.$$.update = () => {
      (a.$$.dirty[0] & 1) | (a.$$.dirty[1] & 1) && e && ce();
    }),
    [
      u,
      _,
      b,
      w,
      D,
      H,
      z,
      W,
      L,
      C,
      S,
      j,
      K,
      q,
      Q,
      f,
      d,
      p,
      N,
      A,
      G,
      M,
      $e,
      x,
      pe,
      Ge,
      le,
      Ye,
      et,
      wt,
      me,
      e,
      tt,
      Et,
      Ee,
      ye,
      _e,
      Ke,
      yt,
      Ie,
      It,
      lt,
    ]
  );
}
class Qr extends xa {
  constructor(t) {
    super(), er(this, t, Wr, Zr, tr, {}, null, [-1, -1]);
  }
}
export { Qr as default };
