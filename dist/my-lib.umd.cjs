(function(p,c){typeof exports=="object"&&typeof module<"u"?module.exports=c():typeof define=="function"&&define.amd?define(c):(p=typeof globalThis<"u"?globalThis:p||self,p.MyLib=c())})(this,function(){"use strict";const p="";function c(){}function v(e){return e()}function w(){return Object.create(null)}function _(e){e.forEach(v)}function E(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function M(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function z(e){return document.createElement(e)}function D(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}let $;function a(e){$=e}const d=[],S=[],m=[],j=[],P=Promise.resolve();let b=!1;function U(){b||(b=!0,P.then(C))}function x(e){m.push(e)}const k=new Set;let g=0;function C(){const e=$;do{for(;g<d.length;){const t=d[g];g++,a(t),q(t.$$)}for(a(null),d.length=0,g=0;S.length;)S.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];k.has(n)||(k.add(n),n())}m.length=0}while(d.length);for(;j.length;)j.pop()();b=!1,k.clear(),a(e)}function q(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const F=new Set;function G(e,t){e&&e.i&&(F.delete(e),e.i(t))}function H(e,t,n,s){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),s||x(()=>{const l=e.$$.on_mount.map(v).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...l):_(l),e.$$.on_mount=[]}),i.forEach(x)}function J(e,t){const n=e.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(d.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,s,o,i,l,h=[-1]){const u=$;a(e);const r=e.$$={fragment:null,ctx:[],props:i,update:c,not_equal:o,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:w(),dirty:h,skip_bound:!1,root:t.target||u.$$.root};l&&l(r.root);let y=!1;if(r.ctx=n?n(e,t.props||{},(f,L,...N)=>{const O=N.length?N[0]:L;return r.ctx&&o(r.ctx[f],r.ctx[f]=O)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](O),y&&Q(e,f)),L}):[],r.update(),y=!0,_(r.before_update),r.fragment=s?s(r.ctx):!1,t.target){if(t.hydrate){const f=K(t.target);r.fragment&&r.fragment.l(f),f.forEach(A)}else r.fragment&&r.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),C()}a(u)}class V{$destroy(){J(this,1),this.$destroy=c}$on(t,n){if(!E(n))return c;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="";function W(e){let t,n,s;return{c(){t=z("textarea"),t.value=e[0],I(t,"class","svelte-hyxn8s")},m(o,i){M(o,t,i),n||(s=D(t,"keydown",e[1]),n=!0)},p(o,[i]){i&1&&(t.value=o[0])},i:c,o:c,d(o){o&&A(t),n=!1,s()}}}function X(e,t,n){let s="Select some text and hit the tab key to toggle uppercase";async function o(i){if(i.key!=="Tab")return;i.preventDefault();const{selectionStart:l,selectionEnd:h,value:u}=this,r=u.slice(l,h),y=/[a-z]/.test(r)?r.toUpperCase():r.toLowerCase();n(0,s=u.slice(0,l)+y+u.slice(h)),this.selectionStart=l,this.selectionEnd=h}return[s,o]}class Y extends V{constructor(t){super(),R(this,t,X,W,T,{})}}return new Y({target:document.getElementById("app")})});