(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Kr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},Et=[],Pe=()=>{},fs=()=>!1,cs=/^on[^a-z]/,Wn=e=>cs.test(e),qr=e=>e.startsWith("onUpdate:"),se=Object.assign,Xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},us=Object.prototype.hasOwnProperty,U=(e,t)=>us.call(e,t),F=Array.isArray,Ot=e=>qn(e)==="[object Map]",Fi=e=>qn(e)==="[object Set]",D=e=>typeof e=="function",re=e=>typeof e=="string",Kn=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Li=e=>(G(e)||D(e))&&D(e.then)&&D(e.catch),ji=Object.prototype.toString,qn=e=>ji.call(e),ds=e=>qn(e).slice(8,-1),Di=e=>qn(e)==="[object Object]",Vr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ms=/-(\w)/g,Le=Xn(e=>e.replace(ms,(t,n)=>n?n.toUpperCase():"")),hs=/\B([A-Z])/g,Rt=Xn(e=>e.replace(hs,"-$1").toLowerCase()),Vn=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=Xn(e=>e?`on${Vn(e)}`:""),ht=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ln=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const _r=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?ys(r):Jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||G(e))return e}const gs=/;(?![^(]*\))/g,vs=/:([^]+)/,bs=/\/\*[^]*?\*\//g;function ys(e){const t={};return e.replace(bs,"").split(gs).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zr(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Zr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_s=Kr(xs);function zi(e){return!!e||e===""}const Q=e=>re(e)?e:e==null?"":F(e)||G(e)&&(e.toString===ji||!D(e.toString))?JSON.stringify(e,$i,2):String(e),$i=(e,t)=>t&&t.__v_isRef?$i(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!Di(t)?String(t):t;let ke;class ws{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ks(e,t=ke){t&&t.active&&t.effects.push(e)}function As(){return ke}const Gr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&Qe)>0,Hi=e=>(e.n&Qe)>0,Es=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Qe},Os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Qe,a.n&=~Qe}t.length=n}},wr=new WeakMap;let Ht=0,Qe=1;const kr=30;let Ae;const dt=Symbol(""),Ar=Symbol("");class Qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ks(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Ze=!0,Qe=1<<++Ht,Ht<=kr?Es(this):Na(this),this.fn()}finally{Ht<=kr&&Os(this),Qe=1<<--Ht,Ae=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const Bi=[];function Ft(){Bi.push(Ze),Ze=!1}function Lt(){const e=Bi.pop();Ze=e===void 0?!0:e}function ve(e,t,n){if(Ze&&Ae){let r=wr.get(e);r||wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Gr()),Yi(a)}}function Yi(e,t){let n=!1;Ht<=kr?Hi(e)||(e.n|=Qe,n=!Ui(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ue(e,t,n,r,a,i){const o=wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Kn(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(dt)),Ot(e)&&s.push(o.get(Ar)));break;case"delete":F(e)||(s.push(o.get(dt)),Ot(e)&&s.push(o.get(Ar)));break;case"set":Ot(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&Er(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Er(Gr(l))}}function Er(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Is=Kr("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kn)),Ra=Ps();function Ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=H(this)[t].apply(this,n);return Lt(),r}}),e}function Cs(e){const t=H(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Ki{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Hs:Ji:i?Vi:Xi).get(t))return t;const o=F(t);if(!a){if(o&&U(Ra,n))return Reflect.get(Ra,n,r);if(n==="hasOwnProperty")return Cs}const s=Reflect.get(t,n,r);return(Kn(n)?Wi.has(n):Is(n))||(a||ve(t,"get",n),i)?s:ue(s)?o&&Vr(n)?s:s.value:G(s)?a?Zi(s):na(s):s}}class qi extends Ki{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(St(i)&&ue(i)&&!ue(r))return!1;if(!this._shallow&&(!jn(r)&&!St(r)&&(i=H(i),r=H(r)),!F(t)&&ue(i)&&!ue(r)))return i.value=r,!0;const o=F(t)&&Vr(n)?Number(n)<t.length:U(t,n),s=Reflect.set(t,n,r,a);return t===H(a)&&(o?ht(r,i)&&Ue(t,"set",n,r):Ue(t,"add",n,r)),s}deleteProperty(t,n){const r=U(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ue(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Kn(n)||!Wi.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",F(t)?"length":dt),Reflect.ownKeys(t)}}class Ss extends Ki{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ts=new qi,Ns=new Ss,Ms=new qi(!0),ea=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(ht(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:o}=Jn(a),s=r?ea:n?aa:Jt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(ht(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function gn(e,t=!1){return e=e.__v_raw,!t&&ve(H(e),"iterate",dt),Reflect.get(e,"size",e)}function Fa(e){e=H(e);const t=H(this);return Jn(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function La(e,t){t=H(t);const n=H(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ht(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function ja(e){const t=H(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function Da(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function vn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?ea:e?aa:Jt;return!e&&ve(s,"iterate",dt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function bn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Ot(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ea:t?aa:Jt;return!t&&ve(i,"iterate",l?Ar:dt),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:s?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Rs(){const e={get(i){return hn(this,i)},get size(){return gn(this)},has:pn,add:Fa,set:La,delete:ja,clear:Da,forEach:vn(!1,!1)},t={get(i){return hn(this,i,!1,!0)},get size(){return gn(this)},has:pn,add:Fa,set:La,delete:ja,clear:Da,forEach:vn(!1,!0)},n={get(i){return hn(this,i,!0)},get size(){return gn(this,!0)},has(i){return pn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:vn(!0,!1)},r={get(i){return hn(this,i,!0,!0)},get size(){return gn(this,!0)},has(i){return pn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=bn(i,!1,!1),n[i]=bn(i,!0,!1),t[i]=bn(i,!1,!0),r[i]=bn(i,!0,!0)}),[e,n,t,r]}const[Fs,Ls,js,Ds]=Rs();function ta(e,t){const n=t?e?Ds:js:e?Ls:Fs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const zs={get:ta(!1,!1)},$s={get:ta(!1,!0)},Us={get:ta(!0,!1)},Xi=new WeakMap,Vi=new WeakMap,Ji=new WeakMap,Hs=new WeakMap;function Bs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ys(e){return e.__v_skip||!Object.isExtensible(e)?0:Bs(ds(e))}function na(e){return St(e)?e:ra(e,!1,Ts,zs,Xi)}function Ws(e){return ra(e,!1,Ms,$s,Vi)}function Zi(e){return ra(e,!0,Ns,Us,Ji)}function ra(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ys(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function It(e){return St(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function jn(e){return!!(e&&e.__v_isShallow)}function Gi(e){return It(e)||St(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Qi(e){return Ln(e,"__v_skip",!0),e}const Jt=e=>G(e)?na(e):e,aa=e=>G(e)?Zi(e):e;function eo(e){Ze&&Ae&&(e=H(e),Yi(e.dep||(e.dep=Gr())))}function to(e,t){e=H(e);const n=e.dep;n&&Er(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function $t(e){return Ks(e,!1)}function Ks(e,t){return ue(e)?e:new qs(e,t)}class qs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Jt(t)}get value(){return eo(this),this._value}set value(t){const n=this.__v_isShallow||jn(t)||St(t);t=n?t:H(t),ht(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Jt(t),to(this))}}function Xs(e){return ue(e)?e.value:e}const Vs={get:(e,t,n)=>Xs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return It(e)?e:new Proxy(e,Vs)}class Js{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,to(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return eo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zs(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new Js(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Zn(i,t,n)}return a}function Ce(e,t,n,r){if(D(e)){const i=Ge(e,t,n,r);return i&&Li(i)&&i.catch(o=>{Zn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Zn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}Gs(e,n,a,r)}function Gs(e,t,n,r=!0){console.error(e)}let Zt=!1,Or=!1;const ce=[];let Re=0;const Pt=[];let ze=null,lt=0;const ro=Promise.resolve();let ia=null;function Qs(e){const t=ia||ro;return e?t.then(this?e.bind(this):e):t}function el(e){let t=Re+1,n=ce.length;for(;t<n;){const r=t+n>>>1,a=ce[r],i=Gt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function oa(e){(!ce.length||!ce.includes(e,Zt&&e.allowRecurse?Re+1:Re))&&(e.id==null?ce.push(e):ce.splice(el(e.id),0,e),ao())}function ao(){!Zt&&!Or&&(Or=!0,ia=ro.then(oo))}function tl(e){const t=ce.indexOf(e);t>Re&&ce.splice(t,1)}function nl(e){F(e)?Pt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?lt+1:lt))&&Pt.push(e),ao()}function za(e,t=Zt?Re+1:0){for(;t<ce.length;t++){const n=ce[t];n&&n.pre&&(ce.splice(t,1),t--,n())}}function io(e){if(Pt.length){const t=[...new Set(Pt)];if(Pt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Gt(n)-Gt(r)),lt=0;lt<ze.length;lt++)ze[lt]();ze=null,lt=0}}const Gt=e=>e.id==null?1/0:e.id,rl=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function oo(e){Or=!1,Zt=!0,ce.sort(rl);const t=Pe;try{for(Re=0;Re<ce.length;Re++){const n=ce[Re];n&&n.active!==!1&&Ge(n,null,14)}}finally{Re=0,ce.length=0,io(),Zt=!1,ia=null,(ce.length||Pt.length)&&oo()}}function al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[d]||Z;p&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(ps))}let s,l=r[s=fr(t)]||r[s=fr(Le(t))];!l&&i&&(l=r[s=fr(Rt(t))]),l&&Ce(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(c,e,6,a)}}function so(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=so(c,t,!0);d&&(s=!0,se(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):se(o,i),G(e)&&r.set(e,o),o)}function Gn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Rt(t))||U(e,t))}let Ee=null,lo=null;function Dn(e){const t=Ee;return Ee=e,lo=e&&e.type.__scopeId||null,t}function il(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Dn(t);let o;try{o=e(...a)}finally{Dn(i),r._d&&Ja(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:p,setupState:w,ctx:y,inheritAttrs:O}=e;let z,A;const I=Dn(e);try{if(n.shapeFlag&4){const T=a||r;z=Me(d.call(T,T,m,i,w,p,y)),A=l}else{const T=t;z=Me(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),A=t.props?l:ol(l)}}catch(T){qt.length=0,Zn(T,e,1),z=de(pt)}let L=z;if(A&&O!==!1){const T=Object.keys(A),{shapeFlag:B}=L;T.length&&B&7&&(o&&T.some(qr)&&(A=sl(A,o)),L=Tt(L,A))}return n.dirs&&(L=Tt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),z=L,Dn(I),z}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(o[p]!==r[p]&&!Gn(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fo="components";function cl(e,t){return dl(fo,e,!0,t)||e}const ul=Symbol.for("v-ndc");function dl(e,t,n=!0,r=!1){const a=Ee||oe;if(a){const i=a.type;if(e===fo){const s=of(i,!1);if(s&&(s===t||s===Le(t)||s===Vn(Le(t))))return i}const o=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!o&&r?i:o}}function Ua(e,t){return e&&(e[t]||e[Le(t)]||e[Vn(Le(t))])}const ml=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):nl(e)}const yn={};function Sn(e,t,n){return co(e,t,n)}function co(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=As()===((s=oe)==null?void 0:s.scope)?oe:null;let c,d=!1,m=!1;if(ue(e)?(c=()=>e.value,d=jn(e)):It(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(T=>It(T)||jn(T)),c=()=>e.map(T=>{if(ue(T))return T.value;if(It(T))return wt(T);if(D(T))return Ge(T,l,2)})):D(e)?t?c=()=>Ge(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ce(e,l,3,[w])}:c=Pe,t&&r){const T=c;c=()=>wt(T())}let p,w=T=>{p=I.onStop=()=>{Ge(T,l,4)}},y;if(en)if(w=Pe,t?n&&Ce(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const T=cf();y=T.__watcherHandles||(T.__watcherHandles=[])}else return Pe;let O=m?new Array(e.length).fill(yn):yn;const z=()=>{if(I.active)if(t){const T=I.run();(r||d||(m?T.some((B,le)=>ht(B,O[le])):ht(T,O)))&&(p&&p(),Ce(t,l,3,[T,O===yn?void 0:m&&O[0]===yn?[]:O,w]),O=T)}else I.run()};z.allowRecurse=!!t;let A;a==="sync"?A=z:a==="post"?A=()=>ge(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),A=()=>oa(z));const I=new Qr(c,A);t?n?z():O=I.run():a==="post"?ge(I.run.bind(I),l&&l.suspense):I.run();const L=()=>{I.stop(),l&&l.scope&&Xr(l.scope.effects,I)};return y&&y.push(L),L}function pl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?uo(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=oe;Nt(this);const s=co(a,i.bind(r),n);return o?Nt(o):mt(),s}function uo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))wt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(Fi(e)||Ot(e))e.forEach(n=>{wt(n,t)});else if(Di(e))for(const n in e)wt(e[n],t);return e}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ft(),Ce(l,n,8,[e.el,s,e,t]),Lt())}}/*! #__NO_SIDE_EFFECTS__ */function gl(e,t){return D(e)?(()=>se({name:e.name},t,{setup:e}))():e}const Tn=e=>!!e.type.__asyncLoader,mo=e=>e.type.__isKeepAlive;function vl(e,t){ho(e,"a",t)}function bl(e,t){ho(e,"da",t)}function ho(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)mo(a.parent.vnode)&&yl(r,t,n,a),a=a.parent}}function yl(e,t,n,r){const a=Qn(t,e,r,!0);go(()=>{Xr(r[t],a)},n)}function Qn(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Nt(n);const s=Ce(t,n,e,o);return mt(),Lt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=oe)=>(!en||e==="sp")&&Qn(e,(...r)=>t(...r),n),xl=We("bm"),po=We("m"),_l=We("bu"),wl=We("u"),kl=We("bum"),go=We("um"),Al=We("sp"),El=We("rtg"),Ol=We("rtc");function Il(e,t=oe){Qn("ec",e,t)}function Xe(e,t,n,r){let a;const i=n&&n[r];if(F(e)||re(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ir=e=>e?Io(e)?ua(e)||e.proxy:Ir(e.parent):null,Kt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=Qs.bind(e.proxy)),$watch:e=>pl.bind(e)}),dr=(e,t)=>e!==Z&&!e.__isScriptSetup&&U(e,t),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return o[t]=1,r[t];if(a!==Z&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==Z&&U(n,t))return o[t]=4,n[t];Pr&&(o[t]=0)}}const d=Kt[t];let m,p;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==Z&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&U(e,o)||dr(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Kt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ha(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Pr=!0;function Cl(e){const t=sa(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:p,beforeUpdate:w,updated:y,activated:O,deactivated:z,beforeDestroy:A,beforeUnmount:I,destroyed:L,unmounted:T,render:B,renderTracked:le,renderTriggered:fe,errorCaptured:_e,serverPrefetch:xe,expose:je,inheritAttrs:Dt,components:cn,directives:un,filters:or}=t;if(c&&Sl(c,r,null),o)for(const ee in o){const K=o[ee];D(K)&&(r[ee]=K.bind(n))}if(a){const ee=a.call(n,n);G(ee)&&(e.data=na(ee))}if(Pr=!0,i)for(const ee in i){const K=i[ee],rt=D(K)?K.bind(n,n):D(K.get)?K.get.bind(n,n):Pe,dn=!D(K)&&D(K.set)?K.set.bind(n):Pe,at=st({get:rt,set:dn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>at.value,set:Se=>at.value=Se})}if(s)for(const ee in s)vo(s[ee],r,n,ee);if(l){const ee=D(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(K=>{Ll(K,ee[K])})}d&&Ba(d,e,"c");function me(ee,K){F(K)?K.forEach(rt=>ee(rt.bind(n))):K&&ee(K.bind(n))}if(me(xl,m),me(po,p),me(_l,w),me(wl,y),me(vl,O),me(bl,z),me(Il,_e),me(Ol,le),me(El,fe),me(kl,I),me(go,T),me(Al,xe),F(je))if(je.length){const ee=e.exposed||(e.exposed={});je.forEach(K=>{Object.defineProperty(ee,K,{get:()=>n[K],set:rt=>n[K]=rt})})}else e.exposed||(e.exposed={});B&&e.render===Pe&&(e.render=B),Dt!=null&&(e.inheritAttrs=Dt),cn&&(e.components=cn),un&&(e.directives=un)}function Sl(e,t,n=Pe){F(e)&&(e=Cr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Nn(a.from||r,a.default,!0):i=Nn(a.from||r):i=Nn(a),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ba(e,t,n){Ce(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const a=r.includes(".")?uo(n,r):()=>n[r];if(re(e)){const i=t[e];D(i)&&Sn(a,i)}else if(D(e))Sn(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>vo(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Sn(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),G(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Tl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Tl={data:Ya,props:Wa,emits:Wa,methods:Bt,computed:Bt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Bt,directives:Bt,watch:Ml,provide:Ya,inject:Nl};function Ya(e,t){return t?e?function(){return se(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Nl(e,t){return Bt(Cr(e),Cr(t))}function Cr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?se(Object.create(null),e,t):t}function Wa(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:se(Object.create(null),Ha(e),Ha(t??{})):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function bo(){return{app:null,config:{isNativeTag:fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function Fl(e,t){return function(r,a=null){D(r)||(r=se({},r)),a!=null&&!G(a)&&(a=null);const i=bo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const p=de(r,a);return p.appContext=i,d&&t?t(p,c):e(p,c,m),s=!0,l._container=c,c.__vue_app__=l,ua(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function Ll(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){const r=oe||Ee;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function jl(e,t,n,r=!1){const a={},i={};Ln(i,tr,1),e.propsDefaults=Object.create(null),yo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ws(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(Gn(e.emitsOptions,p))continue;const w=t[p];if(l)if(U(i,p))w!==i[p]&&(i[p]=w,c=!0);else{const y=Le(p);a[y]=Sr(l,s,y,w,e,!1)}else w!==i[p]&&(i[p]=w,c=!0)}}}else{yo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=Rt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Sr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function yo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&U(a,d=Le(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Gn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||Z;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Sr(a,l,m,c[m],e,!U(c,m))}}return o}function Sr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Nt(a),r=c[n]=l.call(null,t),mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function xo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[p,w]=xo(m,t,!0);se(o,p),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,Et),Et;if(F(i))for(let d=0;d<i.length;d++){const m=Le(i[d]);Ka(m)&&(o[m]=Z)}else if(i)for(const d in i){const m=Le(d);if(Ka(m)){const p=i[d],w=o[m]=F(p)||D(p)?{type:p}:se({},p);if(w){const y=Va(Boolean,w.type),O=Va(String,w.type);w[0]=y>-1,w[1]=O<0||y<O,(y>-1||U(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Xa(e,t){return qa(e)===qa(t)}function Va(e,t){return F(t)?t.findIndex(n=>Xa(n,e)):D(t)&&Xa(t,e)?0:-1}const _o=e=>e[0]==="_"||e==="$stable",la=e=>F(e)?e.map(Me):[Me(e)],zl=(e,t,n)=>{if(t._n)return t;const r=il((...a)=>la(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_o(a))continue;const i=e[a];if(D(i))t[a]=zl(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},ko=(e,t)=>{const n=la(t);e.slots.default=()=>n},$l=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Ln(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&ko(e,t);Ln(e.slots,tr,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(ko(e,t),o={default:1});if(i)for(const s in a)!_o(s)&&o[s]==null&&delete a[s]};function Tr(e,t,n,r,a=!1){if(F(e)){e.forEach((p,w)=>Tr(p,t&&(F(t)?t[w]:t),n,r,a));return}if(Tn(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,U(m,c)&&(m[c]=null)):ue(c)&&(c.value=null)),D(l))Ge(l,s,12,[o,d]);else{const p=re(l),w=ue(l);if(p||w){const y=()=>{if(e.f){const O=p?U(m,l)?m[l]:d[l]:l.value;a?F(O)&&Xr(O,i):F(O)?O.includes(i)||O.push(i):p?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=o,U(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(y.id=-1,ge(y,n)):y()}}}const ge=hl;function Hl(e){return Bl(e)}function Bl(e,t){const n=_r();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:p,setScopeId:w=Pe,insertStaticContent:y}=e,O=(f,u,h,g=null,v=null,_=null,E=!1,x=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ut(f,u)&&(g=mn(f),Se(f,v,_,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=u;switch(b){case er:z(f,u,h,g);break;case pt:A(f,u,h,g);break;case mr:f==null&&I(u,h,g,E);break;case ie:cn(f,u,h,g,v,_,E,x,k);break;default:C&1?B(f,u,h,g,v,_,E,x,k):C&6?un(f,u,h,g,v,_,E,x,k):(C&64||C&128)&&b.process(f,u,h,g,v,_,E,x,k,bt)}N!=null&&v&&Tr(N,f&&f.ref,_,u||f,!u)},z=(f,u,h,g)=>{if(f==null)r(u.el=s(u.children),h,g);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},A=(f,u,h,g)=>{f==null?r(u.el=l(u.children||""),h,g):u.el=f.el},I=(f,u,h,g)=>{[f.el,f.anchor]=y(f.children,u,h,g,f.el,f.anchor)},L=({el:f,anchor:u},h,g)=>{let v;for(;f&&f!==u;)v=p(f),r(f,h,g),f=v;r(u,h,g)},T=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=p(f),a(f),f=h;a(u)},B=(f,u,h,g,v,_,E,x,k)=>{E=E||u.type==="svg",f==null?le(u,h,g,v,_,E,x,k):xe(f,u,v,_,E,x,k)},le=(f,u,h,g,v,_,E,x)=>{let k,b;const{type:N,props:C,shapeFlag:M,transition:j,dirs:$}=f;if(k=f.el=o(f.type,_,C&&C.is,C),M&8?d(k,f.children):M&16&&_e(f.children,k,null,g,v,_&&N!=="foreignObject",E,x),$&&it(f,null,g,"created"),fe(k,f,f.scopeId,E,g),C){for(const Y in C)Y!=="value"&&!Cn(Y)&&i(k,Y,null,C[Y],_,f.children,g,v,De);"value"in C&&i(k,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,g,f)}$&&it(f,null,g,"beforeMount");const q=Yl(v,j);q&&j.beforeEnter(k),r(k,u,h),((b=C&&C.onVnodeMounted)||q||$)&&ge(()=>{b&&Ne(b,g,f),q&&j.enter(k),$&&it(f,null,g,"mounted")},v)},fe=(f,u,h,g,v)=>{if(h&&w(f,h),g)for(let _=0;_<g.length;_++)w(f,g[_]);if(v){let _=v.subTree;if(u===_){const E=v.vnode;fe(f,E,E.scopeId,E.slotScopeIds,v.parent)}}},_e=(f,u,h,g,v,_,E,x,k=0)=>{for(let b=k;b<f.length;b++){const N=f[b]=x?Je(f[b]):Me(f[b]);O(null,N,u,h,g,v,_,E,x)}},xe=(f,u,h,g,v,_,E)=>{const x=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=u;k|=f.patchFlag&16;const C=f.props||Z,M=u.props||Z;let j;h&&ot(h,!1),(j=M.onVnodeBeforeUpdate)&&Ne(j,h,u,f),N&&it(u,f,h,"beforeUpdate"),h&&ot(h,!0);const $=v&&u.type!=="foreignObject";if(b?je(f.dynamicChildren,b,x,h,g,$,_):E||K(f,u,x,null,h,g,$,_,!1),k>0){if(k&16)Dt(x,u,C,M,h,g,v);else if(k&2&&C.class!==M.class&&i(x,"class",null,M.class,v),k&4&&i(x,"style",C.style,M.style,v),k&8){const q=u.dynamicProps;for(let Y=0;Y<q.length;Y++){const ne=q[Y],we=C[ne],yt=M[ne];(yt!==we||ne==="value")&&i(x,ne,we,yt,v,f.children,h,g,De)}}k&1&&f.children!==u.children&&d(x,u.children)}else!E&&b==null&&Dt(x,u,C,M,h,g,v);((j=M.onVnodeUpdated)||N)&&ge(()=>{j&&Ne(j,h,u,f),N&&it(u,f,h,"updated")},g)},je=(f,u,h,g,v,_,E)=>{for(let x=0;x<u.length;x++){const k=f[x],b=u[x],N=k.el&&(k.type===ie||!Ut(k,b)||k.shapeFlag&70)?m(k.el):h;O(k,b,N,null,g,v,_,E,!0)}},Dt=(f,u,h,g,v,_,E)=>{if(h!==g){if(h!==Z)for(const x in h)!Cn(x)&&!(x in g)&&i(f,x,h[x],null,E,u.children,v,_,De);for(const x in g){if(Cn(x))continue;const k=g[x],b=h[x];k!==b&&x!=="value"&&i(f,x,b,k,E,u.children,v,_,De)}"value"in g&&i(f,"value",h.value,g.value)}},cn=(f,u,h,g,v,_,E,x,k)=>{const b=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:j}=u;j&&(x=x?x.concat(j):j),f==null?(r(b,h,g),r(N,h,g),_e(u.children,h,N,v,_,E,x,k)):C>0&&C&64&&M&&f.dynamicChildren?(je(f.dynamicChildren,M,h,v,_,E,x),(u.key!=null||v&&u===v.subTree)&&Ao(f,u,!0)):K(f,u,h,N,v,_,E,x,k)},un=(f,u,h,g,v,_,E,x,k)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?v.ctx.activate(u,h,g,E,k):or(u,h,g,v,_,E,k):Ea(f,u,k)},or=(f,u,h,g,v,_,E)=>{const x=f.component=ef(f,g,v);if(mo(f)&&(x.ctx.renderer=bt),tf(x),x.asyncDep){if(v&&v.registerDep(x,me),!f.el){const k=x.subTree=de(pt);A(null,k,u,h)}return}me(x,f,u,h,v,_,E)},Ea=(f,u,h)=>{const g=u.component=f.component;if(ll(f,u,h))if(g.asyncDep&&!g.asyncResolved){ee(g,u,h);return}else g.next=u,tl(g.update),g.update();else u.el=f.el,g.vnode=u},me=(f,u,h,g,v,_,E)=>{const x=()=>{if(f.isMounted){let{next:N,bu:C,u:M,parent:j,vnode:$}=f,q=N,Y;ot(f,!1),N?(N.el=$.el,ee(f,N,E)):N=$,C&&cr(C),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Ne(Y,j,N,$),ot(f,!0);const ne=ur(f),we=f.subTree;f.subTree=ne,O(we,ne,m(we.el),mn(we),f,v,_),N.el=ne.el,q===null&&fl(f,ne.el),M&&ge(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&ge(()=>Ne(Y,j,N,$),v)}else{let N;const{el:C,props:M}=u,{bm:j,m:$,parent:q}=f,Y=Tn(u);if(ot(f,!1),j&&cr(j),!Y&&(N=M&&M.onVnodeBeforeMount)&&Ne(N,q,u),ot(f,!0),C&&lr){const ne=()=>{f.subTree=ur(f),lr(C,f.subTree,f,v,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=ur(f);O(null,ne,h,g,f,v,_),u.el=ne.el}if($&&ge($,v),!Y&&(N=M&&M.onVnodeMounted)){const ne=u;ge(()=>Ne(N,q,ne),v)}(u.shapeFlag&256||q&&Tn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&ge(f.a,v),f.isMounted=!0,u=h=g=null}},k=f.effect=new Qr(x,()=>oa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,ot(f,!0),b()},ee=(f,u,h)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Dl(f,u.props,g,h),Ul(f,u.children,h),Ft(),za(),Lt()},K=(f,u,h,g,v,_,E,x,k=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,C=u.children,{patchFlag:M,shapeFlag:j}=u;if(M>0){if(M&128){dn(b,C,h,g,v,_,E,x,k);return}else if(M&256){rt(b,C,h,g,v,_,E,x,k);return}}j&8?(N&16&&De(b,v,_),C!==b&&d(h,C)):N&16?j&16?dn(b,C,h,g,v,_,E,x,k):De(b,v,_,!0):(N&8&&d(h,""),j&16&&_e(C,h,g,v,_,E,x,k))},rt=(f,u,h,g,v,_,E,x,k)=>{f=f||Et,u=u||Et;const b=f.length,N=u.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const j=u[M]=k?Je(u[M]):Me(u[M]);O(f[M],j,h,null,v,_,E,x,k)}b>N?De(f,v,_,!0,!1,C):_e(u,h,g,v,_,E,x,k,C)},dn=(f,u,h,g,v,_,E,x,k)=>{let b=0;const N=u.length;let C=f.length-1,M=N-1;for(;b<=C&&b<=M;){const j=f[b],$=u[b]=k?Je(u[b]):Me(u[b]);if(Ut(j,$))O(j,$,h,null,v,_,E,x,k);else break;b++}for(;b<=C&&b<=M;){const j=f[C],$=u[M]=k?Je(u[M]):Me(u[M]);if(Ut(j,$))O(j,$,h,null,v,_,E,x,k);else break;C--,M--}if(b>C){if(b<=M){const j=M+1,$=j<N?u[j].el:g;for(;b<=M;)O(null,u[b]=k?Je(u[b]):Me(u[b]),h,$,v,_,E,x,k),b++}}else if(b>M)for(;b<=C;)Se(f[b],v,_,!0),b++;else{const j=b,$=b,q=new Map;for(b=$;b<=M;b++){const be=u[b]=k?Je(u[b]):Me(u[b]);be.key!=null&&q.set(be.key,b)}let Y,ne=0;const we=M-$+1;let yt=!1,Pa=0;const zt=new Array(we);for(b=0;b<we;b++)zt[b]=0;for(b=j;b<=C;b++){const be=f[b];if(ne>=we){Se(be,v,_,!0);continue}let Te;if(be.key!=null)Te=q.get(be.key);else for(Y=$;Y<=M;Y++)if(zt[Y-$]===0&&Ut(be,u[Y])){Te=Y;break}Te===void 0?Se(be,v,_,!0):(zt[Te-$]=b+1,Te>=Pa?Pa=Te:yt=!0,O(be,u[Te],h,null,v,_,E,x,k),ne++)}const Ca=yt?Wl(zt):Et;for(Y=Ca.length-1,b=we-1;b>=0;b--){const be=$+b,Te=u[be],Sa=be+1<N?u[be+1].el:g;zt[b]===0?O(null,Te,h,Sa,v,_,E,x,k):yt&&(Y<0||b!==Ca[Y]?at(Te,h,Sa,2):Y--)}}},at=(f,u,h,g,v=null)=>{const{el:_,type:E,transition:x,children:k,shapeFlag:b}=f;if(b&6){at(f.component.subTree,u,h,g);return}if(b&128){f.suspense.move(u,h,g);return}if(b&64){E.move(f,u,h,bt);return}if(E===ie){r(_,u,h);for(let C=0;C<k.length;C++)at(k[C],u,h,g);r(f.anchor,u,h);return}if(E===mr){L(f,u,h);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(_),r(_,u,h),ge(()=>x.enter(_),v);else{const{leave:C,delayLeave:M,afterLeave:j}=x,$=()=>r(_,u,h),q=()=>{C(_,()=>{$(),j&&j()})};M?M(_,$,q):q()}else r(_,u,h)},Se=(f,u,h,g=!1,v=!1)=>{const{type:_,props:E,ref:x,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=f;if(x!=null&&Tr(x,null,h,f,!0),N&256){u.ctx.deactivate(f);return}const j=N&1&&M,$=!Tn(f);let q;if($&&(q=E&&E.onVnodeBeforeUnmount)&&Ne(q,u,f),N&6)ls(f.component,h,g);else{if(N&128){f.suspense.unmount(h,g);return}j&&it(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,h,v,bt,g):b&&(_!==ie||C>0&&C&64)?De(b,u,h,!1,!0):(_===ie&&C&384||!v&&N&16)&&De(k,u,h),g&&Oa(f)}($&&(q=E&&E.onVnodeUnmounted)||j)&&ge(()=>{q&&Ne(q,u,f),j&&it(f,null,u,"unmounted")},h)},Oa=f=>{const{type:u,el:h,anchor:g,transition:v}=f;if(u===ie){ss(h,g);return}if(u===mr){T(f);return}const _=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:x}=v,k=()=>E(h,_);x?x(f.el,_,k):k()}else _()},ss=(f,u)=>{let h;for(;f!==u;)h=p(f),a(f),f=h;a(u)},ls=(f,u,h)=>{const{bum:g,scope:v,update:_,subTree:E,um:x}=f;g&&cr(g),v.stop(),_&&(_.active=!1,Se(E,f,u,h)),x&&ge(x,u),ge(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(f,u,h,g=!1,v=!1,_=0)=>{for(let E=_;E<f.length;E++)Se(f[E],u,h,g,v)},mn=f=>f.shapeFlag&6?mn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Ia=(f,u,h)=>{f==null?u._vnode&&Se(u._vnode,null,null,!0):O(u._vnode||null,f,u,null,null,null,h),za(),io(),u._vnode=f},bt={p:O,um:Se,m:at,r:Oa,mt:or,mc:_e,pc:K,pbc:je,n:mn,o:e};let sr,lr;return t&&([sr,lr]=t(bt)),{render:Ia,hydrate:sr,createApp:Fl(Ia,sr)}}function ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ao(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Je(a[i]),s.el=o.el),n||Ao(o,s)),s.type===er&&(s.el=o.el)}}function Wl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Kl=e=>e.__isTeleport,ie=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),qt=[];let Oe=null;function W(e=!1){qt.push(Oe=e?null:[])}function ql(){qt.pop(),Oe=qt[qt.length-1]||null}let Qt=1;function Ja(e){Qt+=e}function Eo(e){return e.dynamicChildren=Qt>0?Oe||Et:null,ql(),Qt>0&&Oe&&Oe.push(e),e}function X(e,t,n,r,a,i){return Eo(R(e,t,n,r,a,i,!0))}function Xl(e,t,n,r,a){return Eo(de(e,t,n,r,a,!0))}function Nr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Oo=({key:e})=>e??null,Mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ue(e)||D(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function R(e,t=null,n=null,r=0,a=null,i=e===ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oo(t),ref:t&&Mn(t),scopeId:lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Qt>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const de=Vl;function Vl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ul)&&(e=pt),Nr(e)){const s=Tt(e,t,!0);return n&&fa(s,n),Qt>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(sf(e)&&(e=e.__vccOpts),t){t=Jl(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Zr(s)),G(l)&&(Gi(l)&&!F(l)&&(l=se({},l)),t.style=Jr(l))}const o=re(e)?1:ml(e)?128:Kl(e)?64:G(e)?4:D(e)?2:0;return R(e,t,n,r,a,o,i,!0)}function Jl(e){return e?Gi(e)||tr in e?se({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Oo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Mn(t)):[a,Mn(t)]:Mn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Yt(e=" ",t=0){return de(er,null,e,t)}function xt(e="",t=!1){return t?(W(),Xl(pt,null,e)):de(pt,null,e)}function Me(e){return e==null||typeof e=="boolean"?de(pt):F(e)?de(ie,null,e.slice()):typeof e=="object"?Je(e):de(er,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Yt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Zr([t.class,r.class]));else if(a==="style")t.style=Jr([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Ce(e,t,7,[n,r])}const Gl=bo();let Ql=0;function ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Gl,i={uid:Ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(r,a),emitsOptions:so(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=al.bind(null,i),e.ce&&e.ce(i),i}let oe=null,ca,_t,Za="__VUE_INSTANCE_SETTERS__";(_t=_r()[Za])||(_t=_r()[Za]=[]),_t.push(e=>oe=e),ca=e=>{_t.length>1?_t.forEach(t=>t(e)):_t[0](e)};const Nt=e=>{ca(e),e.scope.on()},mt=()=>{oe&&oe.scope.off(),ca(null)};function Io(e){return e.vnode.shapeFlag&4}let en=!1;function tf(e,t=!1){en=t;const{props:n,children:r}=e.vnode,a=Io(e);jl(e,n,a,t),$l(e,r);const i=a?nf(e,t):void 0;return en=!1,i}function nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?af(e):null;Nt(e),Ft();const i=Ge(r,e,0,[e.props,a]);if(Lt(),mt(),Li(i)){if(i.then(mt,mt),t)return i.then(o=>{Ga(e,o,t)}).catch(o=>{Zn(o,e,0)});e.asyncDep=i}else Ga(e,i,t)}else Po(e,t)}function Ga(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=no(t)),Po(e,n)}let Qa;function Po(e,t,n){const r=e.type;if(!e.render){if(!t&&Qa&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=se(se({isCustomElement:i,delimiters:s},o),l);r.render=Qa(a,c)}}e.render=r.render||Pe}{Nt(e),Ft();try{Cl(e)}finally{Lt(),mt()}}}function rf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function af(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return rf(e)},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(no(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}}))}function of(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function sf(e){return D(e)&&"__vccOpts"in e}const st=(e,t)=>Zs(e,t,en);function lf(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?Nr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),de(e,t,n))}const ff=Symbol.for("v-scx"),cf=()=>Nn(ff),uf="3.3.8",df="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,ei=ft&&ft.createElement("template"),mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(df,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},hf=Symbol("_vtc");function pf(e,t,n){const r=e[hf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gf=Symbol("_vod");function vf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Mr(r,i,"");for(const i in n)Mr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),gf in e&&(r.display=i)}}const ti=/\s*!important$/;function Mr(e,t,n){if(F(n))n.forEach(r=>Mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);ti.test(n)?e.setProperty(Rt(r),n.replace(ti,""),"important"):e[r]=n}}const ni=["Webkit","Moz","ms"],hr={};function bf(e,t){const n=hr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return hr[t]=r;r=Vn(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in e)return hr[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n);else{const i=_s(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=zi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}const ai=Symbol("_vei");function kf(e,t,n,r,a=null){const i=e[ai]||(e[ai]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const c=i[t]=If(r,a);_f(e,s,c,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),t]}let pr=0;const Ef=Promise.resolve(),Of=()=>pr||(Ef.then(()=>pr=0),pr=Date.now());function If(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Pf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const oi=/^on[a-z]/,Cf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pf(e,r,a):t==="style"?vf(e,n,r):Wn(t)?qr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oi.test(t)&&re(n)?!1:t in e}const Tf=se({patchProp:Cf},mf);let si;function Nf(){return si||(si=Hl(Tf))}const Co=(...e)=>{const t=Nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mf(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mf(e){return re(e)?document.querySelector(e):e}const Rf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Ff="/API-SIT/assets/logo2-5197be61.png",Lf=R("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"},null,-1),jf={class:"fonddown text-bolded2 bg-gradient-to-r from-blue-200 to-blue-500"},Df={class:"text-center"},zf={class:"flex flex-col items-center justify-center"},$f=R("div",{class:"w-full md:w-2/3 lg:w-1/3 flex justify-center items-center animate-pulse hover:animate-none"},[R("img",{class:"w-2/3 h-auto mt-2 rotating-logo",src:Ff,alt:"Logo"})],-1),Uf={class:"text-center mt-4"},Hf=R("h1",{class:"text-4xl font-semibold"},"SITMOTUL",-1),Bf=R("br",null,null,-1),Yf={class:"mb-4 text-2xl"},Wf={class:"mb-4 text-xl"},Kf={key:0,class:"text-lg"},qf={class:"flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-10 mt-6"},Xf={class:"w-3/2 bg-gradient-to-r from-slate-300 to-gray-200 p-3 rounded-lg"},Vf={class:"text-center animate-bounce hover:animate-none"},Jf={class:"mb-2 px-3 text-cyan-50 font-bold text-3xl"},Zf=R("i",{class:"fas fa-hourglass"},null,-1),Gf=R("p",{class:"mb-2 px-3 text-center text-black font-semibold"},"PARA FINALIZAR",-1),Qf={class:"mb-2 px-3 text-cyan-50 font-bold text-3xl"},ec=R("i",{class:"fas fa-calendar-day"},null,-1),tc=R("p",{class:"mb-2 px-3 text-center text-black font-semibold"},"PARA CERRAR",-1),nc={class:"w-full md:w-2/6 grid grid-cols-1 gap-2"},rc={class:"bg-green-300 p-4 shadow-md rounded-md"},ac={class:"mb-2 px-3 text-white font-bold text-3xl"},ic={class:"font-semibold text-gray-800"},oc={class:"bg-red-400 p-4 shadow-md rounded-md"},sc={class:"b-2 px-3 text-white font-bold text-3xl"},lc={class:"font-semibold text-gray-800"},fc={key:0,class:"m-auto w-11/12 mb-5"},cc={class:"w-full md:w-12/12 h-auto rounded-lg bg-gradient-to-r from-blue-300 to-blue-600 dark:bg-gray-600 rounded-lg py-8 px-7 mt-10 mb-10"},uc={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 bg-transparent"},dc={class:"w-full mt-2 bg-gradient-to-r from-rose-100 to-rose-200 p-3 rounded-full mt-2"},mc=R("h1",{class:"text-2xl text-center font-bold text-black mb-4"},"Ingeniería Electromecánica",-1),hc={key:0},pc={class:"w-full mt-2 bg-gradient-to-r from-rose-100 to-rose-200 p-3 rounded-full mt-2"},gc=R("h1",{class:"text-2xl text-center font-bold text-black"},"Ingeniería en Energías Renovables",-1),vc={key:0},bc={class:"w-full mt-2 bg-gradient-to-r from-rose-100 to-rose-200 p-3 rounded-full mt-2"},yc=R("h1",{class:"text-2xl text-center font-bold text-black"},"Ingeniería Industrial",-1),xc={key:0},_c={class:"w-full mt-2 bg-gradient-to-r from-rose-100 to-rose-200 p-3 rounded-full mt-2"},wc=R("h1",{class:"text-2xl text-center font-bold text-black"},"Ingeniería en Sistemas Computacionales",-1),kc={key:0},Ac={class:"w-full mt-2 bg-gradient-to-r from-rose-100 to-rose-200 p-3 rounded-full mt-2"},Ec=R("h1",{class:"text-2xl text-center font-bold text-black"},"Ingeniería Electrónica",-1),Oc={key:0},Ic={key:1},Pc=R("p",null,"No hay datos de alumnos evaluados disponibles.",-1),Cc=[Pc],Sc={__name:"Api",setup(e){const t=$t([]),n=$t([]),r=$t(0),a=$t(0),i=$t("");async function o(m,p){try{const y=await(await fetch(m)).json();p.value.push(y),r.value+=y.alEvaluados||0,a.value+=y.alTotal||0,i.value||(i.value=y.periodo||""),console.log("Datos recibidos:",y),y.ObjectIE&&console.log("ObjectIE:",y.ObjectIE),y.IEM&&console.log("IEM:",y.IEM),y.IER&&console.log("IER:",y.IER),y.II&&console.log("II:",y.II),y.ISC&&console.log("ISC:",y.ISC),y.IE&&console.log("IE:",y.IE)}catch(w){console.error("Error al obtener datos:",w)}}po(async()=>{await o("https://sitmotul.com.mx/api/statusEval",t),await o("https://sitmotul.com.mx/api/statusEvalIng",n)});const s=m=>{const p=new Date,y=new Date(m)-p,O=Math.floor(y/(1e3*60*60*24)),z=Math.floor(y/(1e3*60*60));return{dias:O>=0?O:0,horas:z>=0?z:0}},l=(m,p)=>p===0?0:(m/p*100).toFixed(2),c=(m,p)=>{const w=p-m;return p===0||w<=0?0:(w/p*100).toFixed(2)},d=()=>{const m={weekday:"long",day:"numeric",month:"long",year:"numeric"};return new Date().toLocaleDateString("es-MX",m)};return(m,p)=>{const w=cl("font-awesome-icon");return W(),X(ie,null,[Lf,R("body",jf,[R("div",Df,[R("div",zf,[$f,R("div",Uf,[Hf,Bf,R("h2",Yf," Estado de la evaluación tutor del periodo "+Q(i.value)+" al "+Q(d()),1),R("h2",Wf,Q(r.value)+" Alumnos que han resuelto la evaluación docente de un total de "+Q(a.value)+" alumnos",1),i.value?(W(),X("p",Kf,"Periodo: "+Q(i.value),1)):xt("",!0)])]),R("div",qf,[R("div",Xf,[(W(!0),X(ie,null,Xe(t.value,(y,O)=>(W(),X("div",{key:O,class:"bg-red-300 h-full p-4 shadow-md rounded-md mb-5 flex items-center justify-center"},[R("div",Vf,[R("p",Jf,[Yt(" Horas restantes: "+Q(s(y.fin).horas)+"h ",1),Zf]),Gf,R("p",Qf,[Yt(" Días restantes: "+Q(s(y.fin).dias)+"d ",1),ec]),tc])]))),128))]),R("div",nc,[(W(!0),X(ie,null,Xe(t.value,(y,O)=>(W(),X("div",{key:O,class:"bg-gradient-to-r from-white to-white p-3 rounded-lg mb-5 hover:translate-x-2 hover:translate-y-2 transition-transform"},[R("div",rc,[R("p",ac,[Yt(Q(l(y.alEvaluados,y.alTotal))+"% ",1),de(w,{icon:["fas","check-circle"]})]),R("p",ic,"Hay "+Q(r.value)+" alumnos que han contestado la evaluación docente de un total de "+Q(a.value)+" alumnos",1)])]))),128)),(W(!0),X(ie,null,Xe(t.value,(y,O)=>(W(),X("div",{key:O,class:"bg-gradient-to-r from-white to-white p-3 rounded-lg mb-5 hover:translate-x-2 hover:translate-y-2 transition-transform"},[R("div",oc,[R("p",sc,[Yt(Q(c(y.alEvaluados,y.alTotal))+"% ",1),de(w,{icon:["fas","exclamation-circle"]})]),R("p",lc," Alumnos que faltan por evaluar: "+Q(y.alTotal-y.alEvaluados)+" de "+Q(y.alTotal),1)])]))),128))])]),t.value.length>0&&n.value.length>0?(W(),X("div",fc,[R("div",cc,[R("div",uc,[R("div",dc,[mc,(W(!0),X(ie,null,Xe(n.value,(y,O)=>(W(),X("div",{key:O,class:"bg-white p-4 shadow-md rounded-full mt-2"},[y.IEM?(W(),X("div",hc,[R("p",null,"Se han realizado: "+Q(y.IEM.listas)+", Faltantes: "+Q(y.IEM.faltantes),1)])):xt("",!0)]))),128))]),R("div",pc,[gc,(W(!0),X(ie,null,Xe(n.value,(y,O)=>(W(),X("div",{key:O,class:"bg-white p-4 shadow-md rounded-full mt-2"},[y.IER?(W(),X("div",vc,[R("p",null,"Se han realizado: "+Q(y.IER.listas)+", Faltantes: "+Q(y.IER.faltantes),1)])):xt("",!0)]))),128))]),R("div",bc,[yc,(W(!0),X(ie,null,Xe(n.value,(y,O)=>(W(),X("div",{key:O,class:"bg-white p-4 shadow-md rounded-full mt-2"},[y.II?(W(),X("div",xc,[R("p",null,"Se han realizado: "+Q(y.II.listas)+", Faltantes: "+Q(y.II.faltantes),1)])):xt("",!0)]))),128))]),R("div",_c,[wc,(W(!0),X(ie,null,Xe(n.value,(y,O)=>(W(),X("div",{key:O,class:"bg-white p-4 shadow-md rounded-full mt-2"},[y.ISC?(W(),X("div",kc,[R("p",null,"Se han realizado: "+Q(y.ISC.listas)+", Faltantes: "+Q(y.ISC.faltantes),1)])):xt("",!0)]))),128))]),R("div",Ac,[Ec,(W(!0),X(ie,null,Xe(n.value,(y,O)=>(W(),X("div",{key:O,class:"bg-white p-4 shadow-md rounded-full mt-2"},[y.ISC?(W(),X("div",Oc,[R("p",null,"Se han realizado: "+Q(y.IE.listas)+", Faltantes: "+Q(y.IE.faltantes),1)])):xt("",!0)]))),128))])])])])):(W(),X("div",Ic,Cc))])])],64)}}};const Tc={class:"bg-sky-300"},Nc={__name:"App",setup(e){return(t,n)=>(W(),X("div",Tc,[de(Sc)]))}},So=Rf(Nc,[["__scopeId","data-v-0d93f267"]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Rc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return Lc(e)||Dc(e,t)||To(e,t)||$c()}function sn(e){return Fc(e)||jc(e)||To(e)||zc()}function Fc(e){if(Array.isArray(e))return Rr(e)}function Lc(e){if(Array.isArray(e))return e}function jc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function To(e,t){if(e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},No={},Mo=null,Ro={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(No=document),typeof MutationObserver<"u"&&(Mo=MutationObserver),typeof performance<"u"&&(Ro=performance)}catch{}var Uc=ma.navigator||{},ui=Uc.userAgent,di=ui===void 0?"":ui,et=ma,J=No,mi=Mo,xn=Ro;et.document;var Ke=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Fo=~di.indexOf("MSIE")||~di.indexOf("Trident/"),_n,wn,kn,An,En,He="___FONT_AWESOME___",Fr=16,Lo="fa",jo="svg-inline--fa",gt="data-fa-i2svg",Lr="data-fa-pseudo-element",Hc="data-fa-pseudo-element-pending",ha="data-prefix",pa="data-icon",hi="fontawesome-i2svg",Bc="async",Yc=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),V="classic",te="sharp",ga=[V,te];function ln(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var tn=ln((_n={},ae(_n,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ae(_n,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_n)),nn=ln((wn={},ae(wn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(wn,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wn)),rn=ln((kn={},ae(kn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(kn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),kn)),Wc=ln((An={},ae(An,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(An,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),An)),Kc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zo="fa-layers-text",qc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xc=ln((En={},ae(En,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(En,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),En)),$o=[1,2,3,4,5,6,7,8,9,10],Vc=$o.concat([11,12,13,14,15,16,17,18,19,20]),Jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[V]).map(an.add.bind(an));Object.keys(nn[te]).map(an.add.bind(an));var Zc=[].concat(ga,sn(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat($o.map(function(e){return"".concat(e,"x")})).concat(Vc.map(function(e){return"w-".concat(e)})),Xt=et.FontAwesomeConfig||{};function Gc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var eu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eu.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=Qc(Gc(n));a!=null&&(Xt[r]=a)})}var Uo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lo,replacementClass:jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var Mt=P(P({},Uo),Xt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var S={};Object.keys(Uo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Mt[e]=n,Vt.forEach(function(r){return r(S)})},get:function(){return Mt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,Vt.forEach(function(n){return n(S)})},get:function(){return Mt.cssPrefix}});et.FontAwesomeConfig=S;var Vt=[];function tu(e){return Vt.push(e),function(){Vt.splice(Vt.indexOf(e),1)}}var Ve=Fr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nu(e){if(!(!e||!Ke)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var ru="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var e=12,t="";e-- >0;)t+=ru[Math.random()*62|0];return t}function jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function nr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function iu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ou(e){var t=e.transform,n=e.width,r=n===void 0?Fr:n,a=e.height,i=a===void 0?Fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fo?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var su=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bo(){var e=Lo,t=jo,n=S.cssPrefix,r=S.replacementClass,a=su;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var pi=!1;function gr(){S.autoAddCss&&!pi&&(nu(Bo()),pi=!0)}var lu={mixout:function(){return{dom:{css:Bo,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},Be=et||{};Be[He]||(Be[He]={});Be[He].styles||(Be[He].styles={});Be[He].hooks||(Be[He].hooks={});Be[He].shims||(Be[He].shims=[]);var Ie=Be[He],Yo=[],fu=function e(){J.removeEventListener("DOMContentLoaded",e),Hn=1,Yo.map(function(t){return t()})},Hn=!1;Ke&&(Hn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Hn||J.addEventListener("DOMContentLoaded",fu));function cu(e){Ke&&(Hn?setTimeout(e,0):Yo.push(e))}function fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(au(r),">").concat(i.map(fn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},vr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?uu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function du(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function jr(e){var t=du(e);return t.length===1?t[0].toString(16):null}function mu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,vi(t)):Ie.styles[e]=P(P({},Ie.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var On,In,Pn,kt=Ie.styles,hu=Ie.shims,pu=(On={},ae(On,V,Object.values(rn[V])),ae(On,te,Object.values(rn[te])),On),ya=null,Wo={},Ko={},qo={},Xo={},Vo={},gu=(In={},ae(In,V,Object.keys(tn[V])),ae(In,te,Object.keys(tn[te])),In);function vu(e){return~Zc.indexOf(e)}function bu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vu(a)?a:null}var Jo=function(){var t=function(i){return vr(kt,function(o,s,l){return o[l]=vr(s,i,{}),o},{})};Wo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Vo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in kt||S.autoFetchSvg,r=vr(hu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});qo=r.names,Xo=r.unicodes,ya=rr(S.styleDefault,{family:S.familyDefault})};tu(function(e){ya=rr(e.styleDefault,{family:S.familyDefault})});Jo();function xa(e,t){return(Wo[e]||{})[t]}function yu(e,t){return(Ko[e]||{})[t]}function ut(e,t){return(Vo[e]||{})[t]}function Zo(e){return qo[e]||{prefix:null,iconName:null}}function xu(e){var t=Xo[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return ya}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=tn[r][e],i=nn[r][e]||nn[r][a],o=e in Ie.styles?e:null;return i||o||null}var bi=(Pn={},ae(Pn,V,Object.keys(rn[V])),ae(Pn,te,Object.keys(rn[te])),Pn);function ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,V,"".concat(S.cssPrefix,"-").concat(V)),ae(t,te,"".concat(S.cssPrefix,"-").concat(te)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return bi[V].includes(c)}))&&(s=V),(e.includes(i[te])||e.some(function(c){return bi[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,d){var m=bu(S.cssPrefix,d);if(kt[d]?(d=pu[s].includes(d)?Wc[s][d]:d,o=d,c.prefix=d):gu[s].indexOf(d)>-1?(o=d,c.prefix=rr(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[V]&&d!==i[te]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var p=o==="fa"?Zo(c.iconName):{},w=ut(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||w||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!kt.far&&kt.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(kt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tt()||"fas"),l}var _u=function(){function e(){Mc(this,e),this.definitions={}}return Rc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=rn[V][s];l&&Dr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],At={},Ct={},wu=Object.keys(Ct);function ku(e,t){var n=t.mixoutsTo;return yi=e,At={},Object.keys(Ct).forEach(function(r){wu.indexOf(r)===-1&&delete Ct[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Un(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){At[o]||(At[o]=[]),At[o].push(i[o])})}r.provides&&r.provides(Ct)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=At[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=At[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ct[e]?Ct[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(t)return t=ut(n,t)||t,gi(Go.definitions,n,t)||gi(Ie.styles,n,t)}var Go=new _u,Au=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,vt("noAuto")},Eu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(vt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,cu(function(){Iu({autoReplaceSvgRoot:n}),vt("watch",t)})}},Ou={icon:function(t){if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rr(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Kc))){var a=ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:ut(i,t)||t}}}},ye={noAuto:Au,config:S,dom:Eu,parse:Ou,library:Go,findIconDefinition:$r,toHtml:fn},Iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ie.styles).length>0||S.autoFetchSvg)&&Ke&&S.autoReplaceSvg&&ye.dom.i2svg({node:r})};function ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=nr(P(P({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,p=e.watchable,w=p===void 0?!1:p,y=r.found?r:n,O=y.width,z=y.height,A=a==="fak",I=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(xe){return m.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(m.classes).join(" "),L={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:I,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(z)})},T=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/z*16*.0625,"em")}:{};w&&(L.attributes[gt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||on())},children:[l]}),delete L.attributes.title);var B=P(P({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P(P({},T),m.styles)}),le=r.found&&n.found?Ye("generateAbstractMask",B)||{children:[],attributes:{}}:Ye("generateAbstractIcon",B)||{children:[],attributes:{}},fe=le.children,_e=le.attributes;return B.children=fe,B.attributes=_e,s?Cu(B):Pu(B)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var d=P({},o.styles);ba(a)&&(d.transform=ou({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=nr(d);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Su(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var br=Ie.styles;function Ur(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Tu={found:!1,width:512,height:512};function Nu(e,t){!Do&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Zo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&br[t]&&br[t][e]){var o=br[t][e];return r(Ur(o))}Nu(e,t),r(P(P({},Tu),{},{icon:S.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var _i=function(){},Br=S.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:_i,measure:_i},Wt='FA "6.5.1"',Mu=function(t){return Br.mark("".concat(Wt," ").concat(t," begins")),function(){return Qo(t)}},Qo=function(t){Br.mark("".concat(Wt," ").concat(t," ends")),Br.measure("".concat(Wt," ").concat(t),"".concat(Wt," ").concat(t," begins"),"".concat(Wt," ").concat(t," ends"))},ka={begin:Mu,end:Qo},Rn=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function Ru(e){var t=e.getAttribute?e.getAttribute(ha):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function Fu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Lu(){if(S.autoReplaceSvg===!0)return Fn.replace;var e=Fn[S.autoReplaceSvg];return e||Fn.replace}function ju(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Du(e){return J.createElement(e)}function es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ju:Du:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(es(o,{ceFn:r}))}),a}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(es(a),n)}),n.getAttribute(gt)===null&&S.keepOriginalSource){var r=J.createComment(zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(S.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return fn(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function ki(e){e()}function ts(e,t){var n=typeof t=="function"?t:Rn;if(e.length===0)n();else{var r=ki;S.mutateApproach===Bc&&(r=et.requestAnimationFrame||ki),r(function(){var a=Lu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function ns(){Aa=!0}function Yr(){Aa=!1}var Bn=null;function Ai(e){if(mi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Rn:t,r=e.nodeCallback,a=r===void 0?Rn:r,i=e.pseudoElementsCallback,o=i===void 0?Rn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Bn=new mi(function(c){if(!Aa){var d=tt();jt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~Jc.indexOf(m.attributeName))if(m.attributeName==="class"&&Ru(m.target)){var p=ar(va(m.target)),w=p.prefix,y=p.iconName;m.target.setAttribute(ha,w||d),y&&m.target.setAttribute(pa,y)}else Fu(m.target)&&a(m.target)})}}),Ke&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $u(){Bn&&Bn.disconnect()}function Uu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Hu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ar(va(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yu(a.prefix,e.innerText)||xa(a.prefix,jr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Bu(e){var t=jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Bu(e),s=zr("parseNodeAttributes",{},e),l=t.styleParser?Uu(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wu=Ie.styles;function rs(e){var t=S.autoReplaceSvg==="nest"?Ei(e,{styleParser:!1}):Ei(e);return~t.extra.classes.indexOf(zo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var nt=new Set;ga.map(function(e){nt.add("fa-".concat(e))});Object.keys(tn[V]).map(nt.add.bind(nt));Object.keys(tn[te]).map(nt.add.bind(nt));nt=sn(nt);function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(hi,"-").concat(m))},a=function(m){return n.remove("".concat(hi,"-").concat(m))},i=S.autoFetchSvg?nt:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Wu));i.includes("fa")||i.push("fa");var o=[".".concat(zo,":not([").concat(gt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(d,m){try{var p=rs(m);p&&d.push(p)}catch(w){Do||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(p){ts(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(p){l(),m(p)})})}function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rs(e).then(function(n){n&&ts([n],t)})}function qu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,P(P({},n),{},{mask:a}))}}var Xu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,p=m===void 0?null:m,w=n.titleId,y=w===void 0?null:w,O=n.classes,z=O===void 0?[]:O,A=n.attributes,I=A===void 0?{}:A,L=n.styles,T=L===void 0?{}:L;if(t){var B=t.prefix,le=t.iconName,fe=t.icon;return ir(P({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(p?I["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(y||on()):(I["aria-hidden"]="true",I.focusable="false")),wa({icons:{main:Ur(fe),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:le,transform:P(P({},Fe),a),symbol:o,title:p,maskId:d,titleId:y,extra:{attributes:I,styles:T,classes:z}})})}},Vu={mixout:function(){return{icon:qu(Xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oi,n.nodeCallback=Ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,p=r.extra;return new Promise(function(w,y){Promise.all([Hr(a,s),d.iconName?Hr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var z=da(O,2),A=z[0],I=z[1];w([n,wa({icons:{main:A,mask:I},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nr(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:o}]})}}}},Zu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ir({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Su({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(sn(s))}})})}}}},Gu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,p=r.styles,w=p===void 0?{}:p;return ir({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:P(P({},Fe),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(S.cssPrefix,"-layers-text")].concat(sn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qu=new RegExp('"',"ug"),Ii=[1105920,1112319];function ed(e){var t=e.replace(Qu,""),n=mu(t,0),r=n>=Ii[0]&&n<=Ii[1],a=t.length===2?t[0]===t[1]:!1;return{value:jr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(Hc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=jt(e.children),o=i.filter(function(fe){return fe.getAttribute(Lr)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?te:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nn[p][l[2].toLowerCase()]:Xc[p][c],y=ed(m),O=y.value,z=y.isSecondary,A=l[0].startsWith("FontAwesome"),I=xa(w,O),L=I;if(A){var T=xu(O);T.iconName&&T.prefix&&(I=T.iconName,w=T.prefix)}if(I&&!z&&(!o||o.getAttribute(ha)!==w||o.getAttribute(pa)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var B=Yu(),le=B.extra;le.attributes[Lr]=t,Hr(I,w).then(function(fe){var _e=wa(P(P({},B),{},{icons:{main:fe,mask:_a()},prefix:w,iconName:L,extra:le,watchable:!0})),xe=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=_e.map(function(je){return fn(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function td(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function nd(e){return e.parentNode!==document.head&&!~Yc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ci(e){if(Ke)return new Promise(function(t,n){var r=jt(e.querySelectorAll("*")).filter(nd).map(td),a=ka.begin("searchPseudoElements");ns(),Promise.all(r).then(function(){a(),Yr(),t()}).catch(function(){a(),Yr(),n()})})}var rd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ci,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&Ci(a)}}},Si=!1,ad={mixout:function(){return{dom:{unwatch:function(){ns(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ai(zr("mutationObserverCallbacks",{}))},noAuto:function(){$u()},watch:function(n){var r=n.observeMutationsRoot;Si?Yr():Ai(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},id={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:p};return{tag:"g",attributes:P({},w.outer),children:[{tag:"g",attributes:P({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),w.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function od(e){return e.tag==="g"?e.children:[e]}var sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,p=o.icon,w=iu({transform:l,containerWidth:m,iconWidth:c}),y={tag:"rect",attributes:P(P({},yr),{},{fill:"white"})},O=d.children?{children:d.children.map(Ni)}:{},z={tag:"g",attributes:P({},w.inner),children:[Ni(P({tag:d.tag,attributes:P(P({},d.attributes),w.path)},O))]},A={tag:"g",attributes:P({},w.outer),children:[z]},I="mask-".concat(s||on()),L="clip-".concat(s||on()),T={tag:"mask",attributes:P(P({},yr),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,A]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:od(p)},T]};return r.push(B,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(I,")")},yr)}),{children:r,attributes:a}}}},ld={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cd=[lu,Vu,Ju,Zu,Gu,rd,ad,id,sd,ld,fd];ku(cd,{mixoutsTo:ye});ye.noAuto;ye.config;var ud=ye.library;ye.dom;var Wr=ye.parse;ye.findIconDefinition;ye.toHtml;var dd=ye.icon;ye.layer;ye.text;ye.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function pe(e,t,n){return t=gd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function md(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hd(e,t){if(e==null)return{};var n=md(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gd(e){var t=pd(e,"string");return typeof t=="symbol"?t:String(t)}var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};(function(e){(function(t){var n=function(A,I,L){if(!c(I)||m(I)||p(I)||w(I)||l(I))return I;var T,B=0,le=0;if(d(I))for(T=[],le=I.length;B<le;B++)T.push(n(A,I[B],L));else{T={};for(var fe in I)Object.prototype.hasOwnProperty.call(I,fe)&&(T[A(fe,L)]=n(A,I[fe],L))}return T},r=function(A,I){I=I||{};var L=I.separator||"_",T=I.split||/(?=[A-Z])/;return A.split(T).join(L)},a=function(A){return y(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(I,L){return L?L.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var I=a(A);return I.substr(0,1).toUpperCase()+I.substr(1)},o=function(A,I){return r(A,I).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},d=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},p=function(A){return s.call(A)=="[object RegExp]"},w=function(A){return s.call(A)=="[object Boolean]"},y=function(A){return A=A-0,A===A},O=function(A,I){var L=I&&"process"in I?I.process:I;return typeof L!="function"?A:function(T,B){return L(T,A,B)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(A,I){return n(O(a,I),A)},decamelizeKeys:function(A,I){return n(O(o,I),A,I)},pascalizeKeys:function(A,I){return n(O(i,I),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(vd)})(as);var bd=as.exports,yd=["class","style"];function xd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=bd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _d(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return is(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=_d(d);break;case"style":l.style=xd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=hd(n,yd);return lf(e.tag,$e($e($e({},t),{},{class:a.class,style:$e($e({},a.style),o)},a.attrs),s),r)}var os=!1;try{os=!0}catch{}function wd(){if(!os&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function kd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ri(e){if(e&&Yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wr.icon)return Wr.icon(e);if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ad=gl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Ri(t.icon)}),i=st(function(){return xr("classes",kd(t))}),o=st(function(){return xr("transform",typeof t.transform=="string"?Wr.transform(t.transform):t.transform)}),s=st(function(){return xr("mask",Ri(t.mask))}),l=st(function(){return dd(a.value,$e($e($e($e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Sn(l,function(d){if(!d)return wd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=st(function(){return l.value?is(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ed={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Od=Ed,Id={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Pd=Id;ud.add(Pd,Od);const Cd=Co(So);Cd.component("font-awesome-icon",Ad);Co(So).mount("#app");
