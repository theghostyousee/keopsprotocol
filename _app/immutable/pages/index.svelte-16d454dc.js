import{S as Oa,i as Aa,s as qa,l as u,r as M,a as H,m as d,n as h,u as T,h as i,c as C,p as a,I as Ke,b as K,J as e,t as be,d as Gt,f as _e,M as Va,o as Ma,g as Ht,w as Ct,x as Ft,y as Wt,E as ye,B as Rt,v as Ut}from"../chunks/index-b9522995.js";import{c as Ta,g as Pa}from"../chunks/_commonjsHelpers-cea7ac1a.js";import{d as $a,s as La,w as Na}from"../chunks/web3-store-c691b065.js";import{S as Bt}from"../chunks/Spinner-ca0f996b.js";import{g as Ga}from"../chunks/gizaswap-24ec2f8a.js";import{m as Ha}from"../chunks/mgizatracker-839f932c.js";import"../chunks/index-f6a2642a.js";var Ia={exports:{}};(function(P,l){(function(f,t){P.exports=t()})(Ta,function(){return function(f){function t(o){if(r[o])return r[o].exports;var c=r[o]={exports:{},id:o,loaded:!1};return f[o].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var r={};return t.m=f,t.c=r,t.p="dist/",t(0)}([function(f,t,r){function o(m){return m&&m.__esModule?m:{default:m}}var c=Object.assign||function(m){for(var I=1;I<arguments.length;I++){var L=arguments[I];for(var Q in L)Object.prototype.hasOwnProperty.call(L,Q)&&(m[Q]=L[Q])}return m},k=r(1),S=(o(k),r(6)),p=o(S),E=r(7),b=o(E),g=r(8),y=o(g),D=r(9),$=o(D),V=r(10),F=o(V),N=r(11),ie=o(N),ae=r(14),ve=o(ae),B=[],oe=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},R=function(){var m=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(m&&(oe=!0),oe)return B=(0,ie.default)(B,x),(0,F.default)(B,x.once),B},de=function(){B=(0,ve.default)(),R()},v=function(){B.forEach(function(m,I){m.node.removeAttribute("data-aos"),m.node.removeAttribute("data-aos-easing"),m.node.removeAttribute("data-aos-duration"),m.node.removeAttribute("data-aos-delay")})},s=function(m){return m===!0||m==="mobile"&&$.default.mobile()||m==="phone"&&$.default.phone()||m==="tablet"&&$.default.tablet()||typeof m=="function"&&m()===!0},w=function(m){x=c(x,m),B=(0,ve.default)();var I=document.all&&!window.atob;return s(x.disable)||I?v():(x.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),x.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?R(!0):x.startEvent==="load"?window.addEventListener(x.startEvent,function(){R(!0)}):document.addEventListener(x.startEvent,function(){R(!0)}),window.addEventListener("resize",(0,b.default)(R,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,b.default)(R,x.debounceDelay,!0)),window.addEventListener("scroll",(0,p.default)(function(){(0,F.default)(B,x.once)},x.throttleDelay)),x.disableMutationObserver||y.default.ready("[data-aos]",de),B)};f.exports={init:w,refresh:R,refreshHard:de}},function(f,t){},,,,,function(f,t){(function(r){function o(s,w,m){function I(_){var A=W,se=ee;return W=ee=void 0,U=_,j=s.apply(se,A)}function L(_){return U=_,z=setTimeout(pe,w),X?I(_):j}function Q(_){var A=_-Y,se=_-U,me=w-A;return re?de(me,te-se):me}function fe(_){var A=_-Y,se=_-U;return Y===void 0||A>=w||A<0||re&&se>=te}function pe(){var _=v();return fe(_)?Z(_):void(z=setTimeout(pe,Q(_)))}function Z(_){return z=void 0,O&&W?I(_):(W=ee=void 0,j)}function J(){z!==void 0&&clearTimeout(z),U=0,W=Y=ee=z=void 0}function he(){return z===void 0?j:Z(v())}function G(){var _=v(),A=fe(_);if(W=arguments,ee=this,Y=_,A){if(z===void 0)return L(Y);if(re)return z=setTimeout(pe,w),I(Y)}return z===void 0&&(z=setTimeout(pe,w)),j}var W,ee,te,j,z,Y,U=0,X=!1,re=!1,O=!0;if(typeof s!="function")throw new TypeError(g);return w=E(w)||0,k(m)&&(X=!!m.leading,re="maxWait"in m,te=re?R(E(m.maxWait)||0,w):te,O="trailing"in m?!!m.trailing:O),G.cancel=J,G.flush=he,G}function c(s,w,m){var I=!0,L=!0;if(typeof s!="function")throw new TypeError(g);return k(m)&&(I="leading"in m?!!m.leading:I,L="trailing"in m?!!m.trailing:L),o(s,w,{leading:I,maxWait:w,trailing:L})}function k(s){var w=typeof s>"u"?"undefined":b(s);return!!s&&(w=="object"||w=="function")}function S(s){return!!s&&(typeof s>"u"?"undefined":b(s))=="object"}function p(s){return(typeof s>"u"?"undefined":b(s))=="symbol"||S(s)&&x.call(s)==D}function E(s){if(typeof s=="number")return s;if(p(s))return y;if(k(s)){var w=typeof s.valueOf=="function"?s.valueOf():s;s=k(w)?w+"":w}if(typeof s!="string")return s===0?s:+s;s=s.replace($,"");var m=F.test(s);return m||N.test(s)?ie(s.slice(2),m?2:8):V.test(s)?y:+s}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},g="Expected a function",y=NaN,D="[object Symbol]",$=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,N=/^0o[0-7]+$/i,ie=parseInt,ae=(typeof r>"u"?"undefined":b(r))=="object"&&r&&r.Object===Object&&r,ve=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,B=ae||ve||Function("return this")(),oe=Object.prototype,x=oe.toString,R=Math.max,de=Math.min,v=function(){return B.Date.now()};f.exports=c}).call(t,function(){return this}())},function(f,t){(function(r){function o(v,s,w){function m(O){var _=G,A=W;return G=W=void 0,Y=O,te=v.apply(A,_)}function I(O){return Y=O,j=setTimeout(fe,s),U?m(O):te}function L(O){var _=O-z,A=O-Y,se=s-_;return X?R(se,ee-A):se}function Q(O){var _=O-z,A=O-Y;return z===void 0||_>=s||_<0||X&&A>=ee}function fe(){var O=de();return Q(O)?pe(O):void(j=setTimeout(fe,L(O)))}function pe(O){return j=void 0,re&&G?m(O):(G=W=void 0,te)}function Z(){j!==void 0&&clearTimeout(j),Y=0,G=z=W=j=void 0}function J(){return j===void 0?te:pe(de())}function he(){var O=de(),_=Q(O);if(G=arguments,W=this,z=O,_){if(j===void 0)return I(z);if(X)return j=setTimeout(fe,s),m(z)}return j===void 0&&(j=setTimeout(fe,s)),te}var G,W,ee,te,j,z,Y=0,U=!1,X=!1,re=!0;if(typeof v!="function")throw new TypeError(b);return s=p(s)||0,c(w)&&(U=!!w.leading,X="maxWait"in w,ee=X?x(p(w.maxWait)||0,s):ee,re="trailing"in w?!!w.trailing:re),he.cancel=Z,he.flush=J,he}function c(v){var s=typeof v>"u"?"undefined":E(v);return!!v&&(s=="object"||s=="function")}function k(v){return!!v&&(typeof v>"u"?"undefined":E(v))=="object"}function S(v){return(typeof v>"u"?"undefined":E(v))=="symbol"||k(v)&&oe.call(v)==y}function p(v){if(typeof v=="number")return v;if(S(v))return g;if(c(v)){var s=typeof v.valueOf=="function"?v.valueOf():v;v=c(s)?s+"":s}if(typeof v!="string")return v===0?v:+v;v=v.replace(D,"");var w=V.test(v);return w||F.test(v)?N(v.slice(2),w?2:8):$.test(v)?g:+v}var E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},b="Expected a function",g=NaN,y="[object Symbol]",D=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,F=/^0o[0-7]+$/i,N=parseInt,ie=(typeof r>"u"?"undefined":E(r))=="object"&&r&&r.Object===Object&&r,ae=(typeof self>"u"?"undefined":E(self))=="object"&&self&&self.Object===Object&&self,ve=ie||ae||Function("return this")(),B=Object.prototype,oe=B.toString,x=Math.max,R=Math.min,de=function(){return ve.Date.now()};f.exports=o}).call(t,function(){return this}())},function(f,t){function r(E){var b=void 0,g=void 0;for(b=0;b<E.length;b+=1)if(g=E[b],g.dataset&&g.dataset.aos||g.children&&r(g.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!o()}function k(E,b){var g=window.document,y=o(),D=new y(S);p=b,D.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function S(E){E&&E.forEach(function(b){var g=Array.prototype.slice.call(b.addedNodes),y=Array.prototype.slice.call(b.removedNodes),D=g.concat(y);if(r(D))return p()})}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){};t.default={isSupported:c,ready:k}},function(f,t){function r(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function g(y,D){for(var $=0;$<D.length;$++){var V=D[$];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(y,V.key,V)}}return function(y,D,$){return D&&g(y.prototype,D),$&&g(y,$),y}}(),k=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,S=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,E=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,b=function(){function g(){r(this,g)}return c(g,[{key:"phone",value:function(){var y=o();return!(!k.test(y)&&!S.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=o();return!(!p.test(y)&&!E.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g}();t.default=new b},function(f,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(c,k,S){var p=c.node.getAttribute("data-aos-once");k>c.position?c.node.classList.add("aos-animate"):typeof p<"u"&&(p==="false"||!S&&p!=="true")&&c.node.classList.remove("aos-animate")},o=function(c,k){var S=window.pageYOffset,p=window.innerHeight;c.forEach(function(E,b){r(E,p+S,k)})};t.default=o},function(f,t,r){function o(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(t,"__esModule",{value:!0});var c=r(12),k=o(c),S=function(p,E){return p.forEach(function(b,g){b.node.classList.add("aos-init"),b.position=(0,k.default)(b.node,E.offset)}),p};t.default=S},function(f,t,r){function o(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(t,"__esModule",{value:!0});var c=r(13),k=o(c),S=function(p,E){var b=0,g=0,y=window.innerHeight,D={offset:p.getAttribute("data-aos-offset"),anchor:p.getAttribute("data-aos-anchor"),anchorPlacement:p.getAttribute("data-aos-anchor-placement")};switch(D.offset&&!isNaN(D.offset)&&(g=parseInt(D.offset)),D.anchor&&document.querySelectorAll(D.anchor)&&(p=document.querySelectorAll(D.anchor)[0]),b=(0,k.default)(p).top,D.anchorPlacement){case"top-bottom":break;case"center-bottom":b+=p.offsetHeight/2;break;case"bottom-bottom":b+=p.offsetHeight;break;case"top-center":b+=y/2;break;case"bottom-center":b+=y/2+p.offsetHeight;break;case"center-center":b+=y/2+p.offsetHeight/2;break;case"top-top":b+=y;break;case"bottom-top":b+=p.offsetHeight+y;break;case"center-top":b+=p.offsetHeight/2+y}return D.anchorPlacement||D.offset||isNaN(E)||(g=E),b+g};t.default=S},function(f,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(o){for(var c=0,k=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)c+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),k+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:k,left:c}};t.default=r},function(f,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(c){return{node:c}})};t.default=r}])})})(Ia);const Ca=Pa(Ia.exports);function Fa(P){let l,f;return l=new Bt({}),{c(){Ct(l.$$.fragment)},l(t){Ft(l.$$.fragment,t)},m(t,r){Wt(l,t,r),f=!0},p:ye,i(t){f||(_e(l.$$.fragment,t),f=!0)},o(t){be(l.$$.fragment,t),f=!1},d(t){Rt(l,t)}}}function Wa(P){let l,f,t=P[2](P[0].tvl,2)+"",r;return{c(){l=u("p"),f=M(">"),r=M(t),this.h()},l(o){l=d(o,"P",{class:!0});var c=h(l);f=T(c,">"),r=T(c,t),c.forEach(i),this.h()},h(){a(l,"class","stat__value svelte-1htos8x")},m(o,c){K(o,l,c),e(l,f),e(l,r)},p(o,c){c&1&&t!==(t=o[2](o[0].tvl,2)+"")&&Ut(r,t)},i:ye,o:ye,d(o){o&&i(l)}}}function Ra(P){let l,f;return l=new Bt({}),{c(){Ct(l.$$.fragment)},l(t){Ft(l.$$.fragment,t)},m(t,r){Wt(l,t,r),f=!0},p:ye,i(t){f||(_e(l.$$.fragment,t),f=!0)},o(t){be(l.$$.fragment,t),f=!1},d(t){Rt(l,t)}}}function Ua(P){let l,f,t=P[2](P[0].volume,2)+"",r;return{c(){l=u("p"),f=M(">"),r=M(t),this.h()},l(o){l=d(o,"P",{class:!0});var c=h(l);f=T(c,">"),r=T(c,t),c.forEach(i),this.h()},h(){a(l,"class","stat__value svelte-1htos8x")},m(o,c){K(o,l,c),e(l,f),e(l,r)},p(o,c){c&1&&t!==(t=o[2](o[0].volume,2)+"")&&Ut(r,t)},i:ye,o:ye,d(o){o&&i(l)}}}function Ba(P){let l,f;return l=new Bt({}),{c(){Ct(l.$$.fragment)},l(t){Ft(l.$$.fragment,t)},m(t,r){Wt(l,t,r),f=!0},p:ye,i(t){f||(_e(l.$$.fragment,t),f=!0)},o(t){be(l.$$.fragment,t),f=!1},d(t){Rt(l,t)}}}function Za(P){let l,f=P[2](P[0].stakingRewards,2)+"",t;return{c(){l=u("p"),t=M(f),this.h()},l(r){l=d(r,"P",{class:!0});var o=h(l);t=T(o,f),o.forEach(i),this.h()},h(){a(l,"class","stat__value svelte-1htos8x")},m(r,o){K(r,l,o),e(l,t)},p(r,o){o&1&&f!==(f=r[2](r[0].stakingRewards,2)+"")&&Ut(t,f)},i:ye,o:ye,d(r){r&&i(l)}}}function Ya(P){let l,f,t,r,o,c,k,S,p,E,b,g,y,D,$,V,F,N,ie,ae,ve,B,oe,x,R,de,v,s,w,m,I,L,Q,fe,pe,Z,J,he,G,W,ee,te,j,z,Y,U,X,re,O,_,A,se,me,Pe,ge,ht,$e,bt,_t,Qe,Ie,Le,we,Ne,Oe,Zt,yt,ne,ke,gt,wt,kt,xt,le,Et,St,zt,Dt,jt,Vt,It,Xe,Ae,Ge,xe,ce,He,Ot,At,Ce,qt,Mt,Fe,qe,Yt,et,Me,We,Ee,Re,Te,Jt,Tt,ue,Ue,Pt,$t,Be,Lt,tt;const Kt=[Wa,Fa],Se=[];function Qt(n,q){return n[1]?0:1}Z=Qt(P),J=Se[Z]=Kt[Z](P);const Xt=[Ua,Ra],ze=[];function ea(n,q){return n[1]?0:1}j=ea(P),z=ze[j]=Xt[j](P);const ta=[Za,Ba],De=[];function aa(n,q){return n[1]?0:1}return _=aa(P),A=De[_]=ta[_](P),{c(){l=u("sveltekit:head"),f=u("title"),t=M("Keops"),r=H(),o=u("div"),c=u("div"),k=u("div"),S=u("div"),p=u("h1"),E=M("The "),b=u("span"),g=M("most liquid"),y=M(" decentralized spot exchange"),D=H(),$=u("p"),V=M("The Uniswap V3 altcoin season is here, and Keops Protocol is at its forefront. Mint and swap self-market-making tokens with hyper-efficient, perma-locked liquidity."),F=H(),N=u("div"),ie=u("div"),ae=u("a"),ve=M("Launch App"),B=H(),oe=u("div"),x=u("video"),R=u("source"),v=u("img"),w=H(),m=u("div"),I=u("div"),L=u("div"),Q=u("h2"),fe=M("TVL"),pe=H(),J.c(),he=H(),G=u("div"),W=u("h2"),ee=M("Volume"),te=H(),z.c(),Y=H(),U=u("div"),X=u("h2"),re=M("Staking Rewards"),O=H(),A.c(),se=H(),me=u("div"),Pe=u("div"),ge=u("h2"),ht=M("Up to "),$e=u("span"),bt=M("4,000x more capitally efficient"),_t=M(" than Uniswap V2."),Qe=H(),Ie=u("div"),Le=u("div"),we=u("div"),Ne=u("div"),Oe=u("img"),yt=H(),ne=u("div"),ke=u("h2"),gt=M("Concentrated liquidity."),wt=u("br"),kt=M("No active management."),xt=H(),le=u("p"),Et=M("It's always been clear that Uniswap V3 is more efficient than V2 - about ~4,000x more efficient, in fact. But before Keops's innovations, the lower slippage that V3 boasts has come at the cost of active, centralized, and IL-exposed market making."),St=u("br"),zt=u("br"),Dt=M("Keops enables the creation and trading of self-market making tokens propped up by algorithmic concentrated LP taxes, that re-organize the placement of their liquidity asymmetrically as the price fluctuates."),jt=u("br"),Vt=u("br"),It=M("We can finally move our tokens to Uniswap V3 and make the most of the liquidity in this space!"),Xe=H(),Ae=u("div"),Ge=u("div"),xe=u("div"),ce=u("div"),He=u("h2"),Ot=M("A new paradigm in AMM trading."),At=H(),Ce=u("p"),qt=M('Keops currently provides the only way to make and trade tokens that have both buy/sell taxes AND concentrated liquidity. Furthermore, it provides the only way to create a "zero-liquidity" token that market makes itself. This enables us to take middleman fees that are automatically distributed to $mKEOPS stakers.'),Mt=H(),Fe=u("div"),qe=u("img"),et=H(),Me=u("div"),We=u("div"),Ee=u("div"),Re=u("div"),Te=u("img"),Tt=H(),ue=u("div"),Ue=u("h2"),Pt=M("Create. Swap. Stake."),$t=H(),Be=u("p"),Lt=M("Create your own Keops tokens with your own custom parameters in just a few clicks - even with virtually zero liquidity. Permissionlessly swap any Keops token, and stake your $KEOPS for a cut of trading fees!"),this.h()},l(n){l=d(n,"SVELTEKIT:HEAD",{});var q=h(l);f=d(q,"TITLE",{});var Ze=h(f);t=T(Ze,"Keops"),Ze.forEach(i),q.forEach(i),r=C(n),o=d(n,"DIV",{class:!0});var Ye=h(o);c=d(Ye,"DIV",{class:!0});var je=h(c);k=d(je,"DIV",{class:!0});var at=h(k);S=d(at,"DIV",{class:!0,"data-aos":!0,"data-aos-duration":!0,"data-aos-delay":!0,"data-aos-easing":!0});var ot=h(S);p=d(ot,"H1",{class:!0});var rt=h(p);E=T(rt,"The "),b=d(rt,"SPAN",{class:!0});var oa=h(b);g=T(oa,"most liquid"),oa.forEach(i),y=T(rt," decentralized spot exchange"),rt.forEach(i),D=C(ot),$=d(ot,"P",{class:!0});var ra=h($);V=T(ra,"The Uniswap V3 altcoin season is here, and Keops Protocol is at its forefront. Mint and swap self-market-making tokens with hyper-efficient, perma-locked liquidity."),ra.forEach(i),ot.forEach(i),F=C(at),N=d(at,"DIV",{class:!0,"data-aos":!0,"data-aos-duration":!0,"data-aos-delay":!0,"data-aos-easing":!0});var sa=h(N);ie=d(sa,"DIV",{class:!0});var ia=h(ie);ae=d(ia,"A",{class:!0,href:!0});var na=h(ae);ve=T(na,"Launch App"),na.forEach(i),ia.forEach(i),sa.forEach(i),at.forEach(i),B=C(je),oe=d(je,"DIV",{class:!0});var la=h(oe);x=d(la,"VIDEO",{class:!0});var Nt=h(x);R=d(Nt,"SOURCE",{src:!0,type:!0}),v=d(Nt,"IMG",{class:!0,src:!0,alt:!0}),Nt.forEach(i),la.forEach(i),je.forEach(i),Ye.forEach(i),w=C(n),m=d(n,"DIV",{class:!0});var ca=h(m);I=d(ca,"DIV",{class:!0});var Je=h(I);L=d(Je,"DIV",{class:!0});var st=h(L);Q=d(st,"H2",{class:!0});var ua=h(Q);fe=T(ua,"TVL"),ua.forEach(i),pe=C(st),J.l(st),st.forEach(i),he=C(Je),G=d(Je,"DIV",{class:!0});var it=h(G);W=d(it,"H2",{class:!0});var da=h(W);ee=T(da,"Volume"),da.forEach(i),te=C(it),z.l(it),it.forEach(i),Y=C(Je),U=d(Je,"DIV",{class:!0});var nt=h(U);X=d(nt,"H2",{class:!0});var fa=h(X);re=T(fa,"Staking Rewards"),fa.forEach(i),O=C(nt),A.l(nt),nt.forEach(i),Je.forEach(i),ca.forEach(i),se=C(n),me=d(n,"DIV",{class:!0});var pa=h(me);Pe=d(pa,"DIV",{class:!0});var va=h(Pe);ge=d(va,"H2",{class:!0});var lt=h(ge);ht=T(lt,"Up to "),$e=d(lt,"SPAN",{class:!0});var ma=h($e);bt=T(ma,"4,000x more capitally efficient"),ma.forEach(i),_t=T(lt," than Uniswap V2."),lt.forEach(i),va.forEach(i),pa.forEach(i),Qe=C(n),Ie=d(n,"DIV",{class:!0});var ha=h(Ie);Le=d(ha,"DIV",{class:!0});var ba=h(Le);we=d(ba,"DIV",{class:!0});var ct=h(we);Ne=d(ct,"DIV",{class:!0});var _a=h(Ne);Oe=d(_a,"IMG",{src:!0,alt:!0,class:!0}),_a.forEach(i),yt=C(ct),ne=d(ct,"DIV",{class:!0,"data-aos":!0,"data-aos-duration":!0,"data-aos-delay":!0,"data-aos-easing":!0});var ut=h(ne);ke=d(ut,"H2",{class:!0});var dt=h(ke);gt=T(dt,"Concentrated liquidity."),wt=d(dt,"BR",{}),kt=T(dt,"No active management."),dt.forEach(i),xt=C(ut),le=d(ut,"P",{class:!0});var Ve=h(le);Et=T(Ve,"It's always been clear that Uniswap V3 is more efficient than V2 - about ~4,000x more efficient, in fact. But before Keops's innovations, the lower slippage that V3 boasts has come at the cost of active, centralized, and IL-exposed market making."),St=d(Ve,"BR",{}),zt=d(Ve,"BR",{}),Dt=T(Ve,"Keops enables the creation and trading of self-market making tokens propped up by algorithmic concentrated LP taxes, that re-organize the placement of their liquidity asymmetrically as the price fluctuates."),jt=d(Ve,"BR",{}),Vt=d(Ve,"BR",{}),It=T(Ve,"We can finally move our tokens to Uniswap V3 and make the most of the liquidity in this space!"),Ve.forEach(i),ut.forEach(i),ct.forEach(i),ba.forEach(i),ha.forEach(i),Xe=C(n),Ae=d(n,"DIV",{class:!0});var ya=h(Ae);Ge=d(ya,"DIV",{class:!0});var ga=h(Ge);xe=d(ga,"DIV",{class:!0});var ft=h(xe);ce=d(ft,"DIV",{class:!0,"data-aos":!0,"data-aos-duration":!0,"data-aos-delay":!0,"data-aos-easing":!0});var pt=h(ce);He=d(pt,"H2",{class:!0});var wa=h(He);Ot=T(wa,"A new paradigm in AMM trading."),wa.forEach(i),At=C(pt),Ce=d(pt,"P",{class:!0});var ka=h(Ce);qt=T(ka,'Keops currently provides the only way to make and trade tokens that have both buy/sell taxes AND concentrated liquidity. Furthermore, it provides the only way to create a "zero-liquidity" token that market makes itself. This enables us to take middleman fees that are automatically distributed to $mKEOPS stakers.'),ka.forEach(i),pt.forEach(i),Mt=C(ft),Fe=d(ft,"DIV",{class:!0});var xa=h(Fe);qe=d(xa,"IMG",{src:!0,alt:!0,class:!0}),xa.forEach(i),ft.forEach(i),ga.forEach(i),ya.forEach(i),et=C(n),Me=d(n,"DIV",{class:!0});var Ea=h(Me);We=d(Ea,"DIV",{class:!0});var Sa=h(We);Ee=d(Sa,"DIV",{class:!0});var vt=h(Ee);Re=d(vt,"DIV",{class:!0});var za=h(Re);Te=d(za,"IMG",{src:!0,alt:!0,class:!0}),za.forEach(i),Tt=C(vt),ue=d(vt,"DIV",{class:!0,"data-aos":!0,"data-aos-duration":!0,"data-aos-delay":!0,"data-aos-easing":!0});var mt=h(ue);Ue=d(mt,"H2",{class:!0});var Da=h(Ue);Pt=T(Da,"Create. Swap. Stake."),Da.forEach(i),$t=C(mt),Be=d(mt,"P",{class:!0});var ja=h(Be);Lt=T(ja,"Create your own Keops tokens with your own custom parameters in just a few clicks - even with virtually zero liquidity. Permissionlessly swap any Keops token, and stake your $KEOPS for a cut of trading fees!"),ja.forEach(i),mt.forEach(i),vt.forEach(i),Sa.forEach(i),Ea.forEach(i),this.h()},h(){a(b,"class","hero__title__inner svelte-1htos8x"),a(p,"class","hero__title hero__title--max svelte-1htos8x"),a($,"class","max svelte-1htos8x"),a(S,"class","hero__row1 svelte-1htos8x"),a(S,"data-aos","fade-up"),a(S,"data-aos-duration","1100"),a(S,"data-aos-delay","200"),a(S,"data-aos-easing","ease-out-quart"),a(ae,"class","hero__button svelte-1htos8x"),a(ae,"href","/swap/"),a(ie,"class","hero__buttons svelte-1htos8x"),a(N,"class","hero__row2 svelte-1htos8x"),a(N,"data-aos","fade-up"),a(N,"data-aos-duration","1100"),a(N,"data-aos-delay","200"),a(N,"data-aos-easing","ease-out-quart"),a(k,"class","hero__left svelte-1htos8x"),Ke(R.src,de="/video/pyramid.webm")||a(R,"src",de),a(R,"type","video/webm"),a(v,"class","hero__image svelte-1htos8x"),Ke(v.src,s="/img/landing/pyramid.png")||a(v,"src",s),a(v,"alt",""),a(x,"class","hero__video svelte-1htos8x"),x.autoplay=!0,x.muted=!0,x.loop=!0,a(oe,"class","hero__right"),a(c,"class","hero svelte-1htos8x"),a(o,"class","wrapper wrapper--top svelte-1htos8x"),a(Q,"class","stat__title svelte-1htos8x"),a(L,"class","stat svelte-1htos8x"),a(W,"class","stat__title svelte-1htos8x"),a(G,"class","stat svelte-1htos8x"),a(X,"class","stat__title svelte-1htos8x"),a(U,"class","stat svelte-1htos8x"),a(I,"class","stats svelte-1htos8x"),a(m,"class","wrapper svelte-1htos8x"),a($e,"class","hero__title__inner svelte-1htos8x"),a(ge,"class","hero__title svelte-1htos8x"),a(Pe,"class","banner"),a(me,"class","wrapper svelte-1htos8x"),Ke(Oe.src,Zt="/img/landing/design2.png")||a(Oe,"src",Zt),a(Oe,"alt",""),a(Oe,"class","svelte-1htos8x"),a(Ne,"class","feature__image"),a(ke,"class","svelte-1htos8x"),a(le,"class","svelte-1htos8x"),a(ne,"class","feature__text svelte-1htos8x"),a(ne,"data-aos","fade-left"),a(ne,"data-aos-duration","1100"),a(ne,"data-aos-delay","200"),a(ne,"data-aos-easing","ease-out-quart"),a(we,"class","feature svelte-1htos8x"),a(Le,"class","featureWrapper svelte-1htos8x"),a(Ie,"class","wrapper svelte-1htos8x"),a(He,"class","svelte-1htos8x"),a(Ce,"class","svelte-1htos8x"),a(ce,"class","feature__text feature__text--l svelte-1htos8x"),a(ce,"data-aos","fade-right"),a(ce,"data-aos-duration","1100"),a(ce,"data-aos-delay","200"),a(ce,"data-aos-easing","ease-out-quart"),Ke(qe.src,Yt="/img/landing/design3.png")||a(qe,"src",Yt),a(qe,"alt",""),a(qe,"class","svelte-1htos8x"),a(Fe,"class","feature__image"),a(xe,"class","feature svelte-1htos8x"),a(Ge,"class","featureWrapper svelte-1htos8x"),a(Ae,"class","wrapper svelte-1htos8x"),Ke(Te.src,Jt="/img/landing/design1.png")||a(Te,"src",Jt),a(Te,"alt",""),a(Te,"class","svelte-1htos8x"),a(Re,"class","feature__image"),a(Ue,"class","svelte-1htos8x"),a(Be,"class","svelte-1htos8x"),a(ue,"class","feature__text svelte-1htos8x"),a(ue,"data-aos","fade-left"),a(ue,"data-aos-duration","1100"),a(ue,"data-aos-delay","200"),a(ue,"data-aos-easing","ease-out-quart"),a(Ee,"class","feature svelte-1htos8x"),a(We,"class","featureWrapper svelte-1htos8x"),a(Me,"class","wrapper svelte-1htos8x")},m(n,q){K(n,l,q),e(l,f),e(f,t),K(n,r,q),K(n,o,q),e(o,c),e(c,k),e(k,S),e(S,p),e(p,E),e(p,b),e(b,g),e(p,y),e(S,D),e(S,$),e($,V),e(k,F),e(k,N),e(N,ie),e(ie,ae),e(ae,ve),e(c,B),e(c,oe),e(oe,x),e(x,R),e(x,v),K(n,w,q),K(n,m,q),e(m,I),e(I,L),e(L,Q),e(Q,fe),e(L,pe),Se[Z].m(L,null),e(I,he),e(I,G),e(G,W),e(W,ee),e(G,te),ze[j].m(G,null),e(I,Y),e(I,U),e(U,X),e(X,re),e(U,O),De[_].m(U,null),K(n,se,q),K(n,me,q),e(me,Pe),e(Pe,ge),e(ge,ht),e(ge,$e),e($e,bt),e(ge,_t),K(n,Qe,q),K(n,Ie,q),e(Ie,Le),e(Le,we),e(we,Ne),e(Ne,Oe),e(we,yt),e(we,ne),e(ne,ke),e(ke,gt),e(ke,wt),e(ke,kt),e(ne,xt),e(ne,le),e(le,Et),e(le,St),e(le,zt),e(le,Dt),e(le,jt),e(le,Vt),e(le,It),K(n,Xe,q),K(n,Ae,q),e(Ae,Ge),e(Ge,xe),e(xe,ce),e(ce,He),e(He,Ot),e(ce,At),e(ce,Ce),e(Ce,qt),e(xe,Mt),e(xe,Fe),e(Fe,qe),K(n,et,q),K(n,Me,q),e(Me,We),e(We,Ee),e(Ee,Re),e(Re,Te),e(Ee,Tt),e(Ee,ue),e(ue,Ue),e(Ue,Pt),e(ue,$t),e(ue,Be),e(Be,Lt),tt=!0},p(n,[q]){let Ze=Z;Z=Qt(n),Z===Ze?Se[Z].p(n,q):(Ht(),be(Se[Ze],1,1,()=>{Se[Ze]=null}),Gt(),J=Se[Z],J?J.p(n,q):(J=Se[Z]=Kt[Z](n),J.c()),_e(J,1),J.m(L,null));let Ye=j;j=ea(n),j===Ye?ze[j].p(n,q):(Ht(),be(ze[Ye],1,1,()=>{ze[Ye]=null}),Gt(),z=ze[j],z?z.p(n,q):(z=ze[j]=Xt[j](n),z.c()),_e(z,1),z.m(G,null));let je=_;_=aa(n),_===je?De[_].p(n,q):(Ht(),be(De[je],1,1,()=>{De[je]=null}),Gt(),A=De[_],A?A.p(n,q):(A=De[_]=ta[_](n),A.c()),_e(A,1),A.m(U,null))},i(n){tt||(_e(J),_e(z),_e(A),tt=!0)},o(n){be(J),be(z),be(A),tt=!1},d(n){n&&i(l),n&&i(r),n&&i(o),n&&i(w),n&&i(m),Se[Z].d(),ze[j].d(),De[_].d(),n&&i(se),n&&i(me),n&&i(Qe),n&&i(Ie),n&&i(Xe),n&&i(Ae),n&&i(et),n&&i(Me)}}}function Ja(P,l,f){let t,r;Va(P,La,V=>f(4,t=V)),Va(P,Na,V=>f(5,r=V));const o="",c="0xfcaa8eef70f373e00ac29208023d106c846259ee",k="0xeD114612fC2a61DD2bE4473bd21c78e359EF137D",S=(V,F)=>new Intl.NumberFormat("en-US",{currency:"USD",minimumFractionDigits:F,style:"currency"}).format(V);let p={tvl:0,volume:0,stakingRewards:0},E=!1,b=0;const g=async()=>{const F=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=Arbitrum&vs_currencies=usd",{headers:{"content-type":"application/json"}})).json();try{b=parseFloat(F.Arbitrum.usd)}catch{}},y=async()=>{const F=await new r.eth.Contract(Ga,o).methods.getVolume(c).call();f(0,p.volume=parseFloat(0)+parseFloat(r.utils.fromWei(F[0],"lovelace"))+parseFloat(r.utils.fromWei(F[1],"lovelace")),p)},D=async()=>{const V=new r.eth.Contract(Ha,k),F=await V.methods.getClaimedRewardsTotal().call(),N=await V.methods.getUnclaimedRewardsTotal().call();f(0,p.stakingRewards=parseFloat(r.utils.fromWei(F,"ether"))*b+parseFloat(r.utils.fromWei(N[0],"ether"))*b+parseFloat(r.utils.fromWei(N[1],"lovelace")),p)},$=async()=>{await g(),await y(),await D(),f(1,E=!0)};return Ma(async()=>{Ca.init(),t==null&&await $a.setProvider("https://eth-mainnet.g.alchemy.com/v2/cmyTBPLJ65F2whZ0xPUtnOqW0GFzNLaV"),$()}),[p,E,S]}class ro extends Oa{constructor(l){super(),Aa(this,l,Ja,Ya,qa,{})}}export{ro as default};
