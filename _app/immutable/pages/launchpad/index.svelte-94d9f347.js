// import{S as K,i as Q,s as U,a as I,l as m,r as P,$ as Y,h as o,c as L,m as w,n as y,u as k,p as h,b as R,J as l,E as q,M as V,o as Z,v as x}from"../../chunks/index-b9522995.js";import{c as $,s as ee,w as te}from"../../chunks/web3-store-c691b065.js";import{i as j}from"../../chunks/icaruspresale-89f60f1e.js";import"../../chunks/index-f6a2642a.js";function se(a){let s=a[1]+"d "+a[2]+"h "+a[3]+"m "+a[4]+"s ",e;return{c(){e=P(s)},l(t){e=k(t,s)},m(t,d){R(t,e,d)},p(t,d){d&30&&s!==(s=t[1]+"d "+t[2]+"h "+t[3]+"m "+t[4]+"s ")&&x(e,s)},d(t){t&&o(e)}}}function ae(a){let s;return{c(){s=P("Closed")},l(e){s=k(e,"Closed")},m(e,t){R(e,s,t)},p:q,d(e){e&&o(s)}}}function le(a){let s,e,t,d,E,i,g,u,D,f,r,_,A,H,b,S,c,v;function B(n,C){return n[0]<0?ae:se}let T=B(a),p=T(a);return{c(){s=I(),e=m("div"),t=m("h1"),d=P("Launchpad"),E=I(),i=m("div"),g=m("h2"),u=P("Ongoing Presales"),D=I(),f=m("div"),r=m("a"),_=m("span"),A=P("SafX"),H=I(),b=m("span"),S=P("0 / 20 ETH"),c=I(),v=m("span"),p.c(),this.h()},l(n){Y('[data-svelte="svelte-o63vpv"]',document.head).forEach(o),s=L(n),e=w(n,"DIV",{class:!0});var F=y(e);t=w(F,"H1",{class:!0});var O=y(t);d=k(O,"Launchpad"),O.forEach(o),E=L(F),i=w(F,"DIV",{class:!0});var N=y(i);g=w(N,"H2",{class:!0});var X=y(g);u=k(X,"Ongoing Presales"),X.forEach(o),D=L(N),f=w(N,"DIV",{class:!0});var z=y(f);r=w(z,"A",{class:!0,href:!0});var M=y(r);_=w(M,"SPAN",{class:!0});var G=y(_);A=k(G,"SafX"),G.forEach(o),H=L(M),b=w(M,"SPAN",{class:!0});var J=y(b);S=k(J,"0 / 20 ETH"),J.forEach(o),c=L(M),v=w(M,"SPAN",{class:!0});var W=y(v);p.l(W),W.forEach(o),M.forEach(o),z.forEach(o),N.forEach(o),F.forEach(o),this.h()},h(){document.title="Launchpad | KeopsSwap",h(t,"class","svelte-1re4v1d"),h(g,"class","g svelte-1re4v1d"),h(_,"class","presale__title svelte-1re4v1d"),h(b,"class","presale__raised"),h(v,"class","presale__duration"),h(r,"class","presale svelte-1re4v1d"),h(r,"href","/launchpad/safx/"),h(f,"class","presales__grid svelte-1re4v1d"),h(i,"class","presales svelte-1re4v1d"),h(e,"class","wrapper svelte-1re4v1d")},m(n,C){R(n,s,C),R(n,e,C),l(e,t),l(t,d),l(e,E),l(e,i),l(i,g),l(g,u),l(i,D),l(i,f),l(f,r),l(r,_),l(_,A),l(r,H),l(r,b),l(b,S),l(r,c),l(r,v),p.m(v,null)},p(n,[C]){T===(T=B(n))&&p?p.p(n,C):(p.d(1),p=T(n),p&&(p.c(),p.m(v,null)))},i:q,o:q,d(n){n&&o(s),n&&o(e),p.d()}}}function re(a,s,e){let t,d,E;V(a,$,c=>e(5,t=c)),V(a,ee,c=>e(6,d=c)),V(a,te,c=>e(9,E=c));const i="0x9F84DFD914768728535011E6A2e050F4B972c863",g=new Date("Aug 6, 2022 03:45:00-04:00").getTime();let u=0,D=0,f=0,r=0,_=0;Z(()=>{const c=setInterval(()=>{const v=new Date().getTime();e(0,u=g-v),e(1,D=Math.floor(u/864e5)),e(2,f=Math.floor(u%864e5/36e5)),e(3,r=Math.floor(u%36e5/6e4)),e(4,_=Math.floor(u%6e4/1e3)),u<0&&clearInterval(c)},1e3)});let A=0;const H=async()=>{typeof window<"u"&&await new E.eth.Contract(j,i).methods.viewParticipated(d).call()},b=async()=>{typeof window<"u"&&(A=await new E.eth.Contract(j,i).methods.viewRaised().call(),A=E.utils.fromWei(A.toString()))},S=()=>{H(),b()};return a.$$.update=()=>{a.$$.dirty&32&&t&&S(),a.$$.dirty&96&&t&&S()},[u,D,f,r,_,t,d]}class ie extends K{constructor(s){super(),Q(this,s,re,le,U,{})}}export{ie as default};