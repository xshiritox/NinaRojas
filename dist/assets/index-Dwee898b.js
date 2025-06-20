(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function su(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},vr=[],_n=()=>{},Ov=()=>!1,ja=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ru=t=>t.startsWith("onUpdate:"),et=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nv=Object.prototype.hasOwnProperty,Pe=(t,e)=>Nv.call(t,e),ie=Array.isArray,Er=t=>to(t)==="[object Map]",Br=t=>to(t)==="[object Set]",dd=t=>to(t)==="[object Date]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",on=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Gp=t=>(Ve(t)||pe(t))&&pe(t.then)&&pe(t.catch),Qp=Object.prototype.toString,to=t=>Qp.call(t),Vv=t=>to(t).slice(8,-1),Yp=t=>to(t)==="[object Object]",ou=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xv=/-(\w)/g,Qt=qa(t=>t.replace(xv,(e,n)=>n?n.toUpperCase():"")),Mv=/\B([A-Z])/g,Xs=qa(t=>t.replace(Mv,"-$1").toLowerCase()),Ha=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yo=qa(t=>t?`on${Ha(t)}`:""),ps=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Lv=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let fd;const za=()=>fd||(fd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?Bv(s):Hs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ze(t)||Ve(t))return t}const Fv=/;(?![^(]*\))/g,Uv=/:([^]+)/,$v=/\/\*[^]*?\*\//g;function Bv(t){const e={};return t.replace($v,"").split(Fv).forEach(n=>{if(n){const s=n.split(Uv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function an(t){let e="";if(ze(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=an(t[n]);s&&(e+=s+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=su(jv);function Jp(t){return!!t||t===""}function Hv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=no(t[s],e[s]);return n}function no(t,e){if(t===e)return!0;let n=dd(t),s=dd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=on(t),s=on(e),n||s)return t===e;if(n=ie(t),s=ie(e),n||s)return n&&s?Hv(t,e):!1;if(n=Ve(t),s=Ve(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!no(t[o],e[o]))return!1}}return String(t)===String(e)}function au(t,e){return t.findIndex(n=>no(n,e))}const Xp=t=>!!(t&&t.__v_isRef===!0),Wt=t=>ze(t)?t:t==null?"":ie(t)||Ve(t)&&(t.toString===Qp||!pe(t.toString))?Xp(t)?Wt(t.value):JSON.stringify(t,Zp,2):String(t),Zp=(t,e)=>Xp(e)?Zp(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[jl(s,i)+" =>"]=r,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jl(n))}:on(e)?jl(e):Ve(e)&&!ie(e)&&!Yp(e)?String(e):e,jl=(t,e="")=>{var n;return on(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class zv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Kv(){return Pt}let xe;const ql=new WeakSet;class em{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ql.has(this)&&(ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pd(this),sm(this);const e=xe,n=nn;xe=this,nn=!0;try{return this.fn()}finally{rm(this),xe=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let tm=0,vi,Ei;function nm(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function lu(){tm++}function cu(){if(--tm>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function sm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rm(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),uu(s),Wv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function gc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(im(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function im(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ni)||(t.globalVersion=Ni,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!gc(t))))return;t.flags|=2;const e=t.dep,n=xe,s=nn;xe=t,nn=!0;try{sm(t);const r=t.fn(t._value);(e.version===0||ps(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xe=n,nn=s,rm(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const om=[];function qn(){om.push(nn),nn=!1}function Hn(){const t=om.pop();nn=t===void 0?!0:t}function pd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Ni=0;class Gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!nn||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Gv(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,am(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=s)}return n}trigger(e){this.version++,Ni++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cu()}}}function am(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)am(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _c=new WeakMap,Bs=Symbol(""),yc=Symbol(""),Vi=Symbol("");function vt(t,e,n){if(nn&&xe){let s=_c.get(t);s||_c.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new hu),r.map=s,r.key=n),r.track()}}function Vn(t,e,n,s,r,i){const o=_c.get(t);if(!o){Ni++;return}const l=c=>{c&&c.trigger()};if(lu(),e==="clear")o.forEach(l);else{const c=ie(t),u=c&&ou(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,g)=>{(g==="length"||g===Vi||!on(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Bs)),Er(t)&&l(o.get(yc)));break;case"delete":c||(l(o.get(Bs)),Er(t)&&l(o.get(yc)));break;case"set":Er(t)&&l(o.get(Bs));break}}cu()}function cr(t){const e=Re(t);return e===t?e:(vt(e,"iterate",Vi),Gt(t)?e:e.map(lt))}function Ka(t){return vt(t=Re(t),"iterate",Vi),t}const Qv={__proto__:null,[Symbol.iterator](){return Hl(this,Symbol.iterator,lt)},concat(...t){return cr(this).concat(...t.map(e=>ie(e)?cr(e):e))},entries(){return Hl(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Dn(this,"find",t,e,lt,arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return zl(this,"includes",t)},indexOf(...t){return zl(this,"indexOf",t)},join(t){return cr(this).join(t)},lastIndexOf(...t){return zl(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return oi(this,"pop")},push(...t){return oi(this,"push",t)},reduce(t,...e){return md(this,"reduce",t,e)},reduceRight(t,...e){return md(this,"reduceRight",t,e)},shift(){return oi(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return oi(this,"splice",t)},toReversed(){return cr(this).toReversed()},toSorted(t){return cr(this).toSorted(t)},toSpliced(...t){return cr(this).toSpliced(...t)},unshift(...t){return oi(this,"unshift",t)},values(){return Hl(this,"values",lt)}};function Hl(t,e,n){const s=Ka(t),r=s[e]();return s!==t&&!Gt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Yv=Array.prototype;function Dn(t,e,n,s,r,i){const o=Ka(t),l=o!==t&&!Gt(t),c=o[e];if(c!==Yv[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,s);return l&&r?r(d):d}function md(t,e,n,s){const r=Ka(t);let i=n;return r!==t&&(Gt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),r[e](i,...s)}function zl(t,e,n){const s=Re(t);vt(s,"iterate",Vi);const r=s[e](...n);return(r===-1||r===!1)&&pu(n[0])?(n[0]=Re(n[0]),s[e](...n)):r}function oi(t,e,n=[]){qn(),lu();const s=Re(t)[e].apply(t,n);return cu(),Hn(),s}const Jv=su("__proto__,__v_isRef,__isVue"),lm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(on));function Xv(t){on(t)||(t=String(t));const e=Re(this);return vt(e,"has",t),e.hasOwnProperty(t)}class cm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?lE:fm:i?dm:hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ie(e);if(!r){let c;if(o&&(c=Qv[n]))return c;if(n==="hasOwnProperty")return Xv}const l=Reflect.get(e,n,Tt(e)?e:s);return(on(n)?lm.has(n):Jv(n))||(r||vt(e,"get",n),i)?l:Tt(l)?o&&ou(n)?l:l.value:Ve(l)?r?mm(l):Wa(l):l}}class um extends cm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ts(i);if(!Gt(s)&&!Ts(s)&&(i=Re(i),s=Re(s)),!ie(e)&&Tt(i)&&!Tt(s))return c?!1:(i.value=s,!0)}const o=ie(e)&&ou(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,s,Tt(e)?e:r);return e===Re(r)&&(o?ps(s,i)&&Vn(e,"set",n,s):Vn(e,"add",n,s)),l}deleteProperty(e,n){const s=Pe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Vn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!on(n)||!lm.has(n))&&vt(e,"has",n),s}ownKeys(e){return vt(e,"iterate",ie(e)?"length":Bs),Reflect.ownKeys(e)}}class Zv extends cm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eE=new um,tE=new Zv,nE=new um(!0);const vc=t=>t,Uo=t=>Reflect.getPrototypeOf(t);function sE(t,e,n){return function(...s){const r=this.__v_raw,i=Re(r),o=Er(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),d=n?vc:e?ma:lt;return!e&&vt(i,"iterate",c?yc:Bs),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function $o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rE(t,e){const n={get(r){const i=this.__v_raw,o=Re(i),l=Re(r);t||(ps(r,l)&&vt(o,"get",r),vt(o,"get",l));const{has:c}=Uo(o),u=e?vc:t?ma:lt;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&vt(Re(r),"iterate",Bs),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Re(i),l=Re(r);return t||(ps(r,l)&&vt(o,"has",r),vt(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Re(l),u=e?vc:t?ma:lt;return!t&&vt(c,"iterate",Bs),l.forEach((d,p)=>r.call(i,u(d),u(p),o))}};return et(n,t?{add:$o("add"),set:$o("set"),delete:$o("delete"),clear:$o("clear")}:{add(r){!e&&!Gt(r)&&!Ts(r)&&(r=Re(r));const i=Re(this);return Uo(i).has.call(i,r)||(i.add(r),Vn(i,"add",r,r)),this},set(r,i){!e&&!Gt(i)&&!Ts(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=Uo(o);let u=l.call(o,r);u||(r=Re(r),u=l.call(o,r));const d=c.call(o,r);return o.set(r,i),u?ps(i,d)&&Vn(o,"set",r,i):Vn(o,"add",r,i),this},delete(r){const i=Re(this),{has:o,get:l}=Uo(i);let c=o.call(i,r);c||(r=Re(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Vn(i,"delete",r,void 0),u},clear(){const r=Re(this),i=r.size!==0,o=r.clear();return i&&Vn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=sE(r,t,e)}),n}function du(t,e){const n=rE(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Pe(n,r)&&r in s?n:s,r,i)}const iE={get:du(!1,!1)},oE={get:du(!1,!0)},aE={get:du(!0,!1)};const hm=new WeakMap,dm=new WeakMap,fm=new WeakMap,lE=new WeakMap;function cE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uE(t){return t.__v_skip||!Object.isExtensible(t)?0:cE(Vv(t))}function Wa(t){return Ts(t)?t:fu(t,!1,eE,iE,hm)}function pm(t){return fu(t,!1,nE,oE,dm)}function mm(t){return fu(t,!0,tE,aE,fm)}function fu(t,e,n,s,r){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=uE(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Tr(t){return Ts(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ts(t){return!!(t&&t.__v_isReadonly)}function Gt(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function hE(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&mc(t,"__v_skip",!0),t}const lt=t=>Ve(t)?Wa(t):t,ma=t=>Ve(t)?mm(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function We(t){return gm(t,!1)}function dE(t){return gm(t,!0)}function gm(t,e){return Tt(t)?t:new fE(t,e)}class fE{constructor(e,n){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Gt(e)||Ts(e);e=s?e:Re(e),ps(e,n)&&(this._rawValue=e,this._value=s?e:lt(e),this.dep.trigger())}}function Fe(t){return Tt(t)?t.value:t}const pE={get:(t,e,n)=>e==="__v_raw"?t:Fe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Tt(r)&&!Tt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function _m(t){return Tr(t)?t:new Proxy(t,pE)}class mE{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return nm(this,!0),!0}get value(){const e=this.dep.track();return im(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gE(t,e,n=!1){let s,r;return pe(t)?s=t:(s=t.get,r=t.set),new mE(s,r,n)}const Bo={},ga=new WeakMap;let xs;function _E(t,e=!1,n=xs){if(n){let s=ga.get(n);s||ga.set(n,s=[]),s.push(t)}}function yE(t,e,n=Ne){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=M=>r?M:Gt(M)||r===!1||r===0?xn(M,1):xn(M);let d,p,g,y,S=!1,O=!1;if(Tt(t)?(p=()=>t.value,S=Gt(t)):Tr(t)?(p=()=>u(t),S=!0):ie(t)?(O=!0,S=t.some(M=>Tr(M)||Gt(M)),p=()=>t.map(M=>{if(Tt(M))return M.value;if(Tr(M))return u(M);if(pe(M))return c?c(M,2):M()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){qn();try{g()}finally{Hn()}}const M=xs;xs=d;try{return c?c(t,3,[y]):t(y)}finally{xs=M}}:p=_n,e&&r){const M=p,re=r===!0?1/0:r;p=()=>xn(M(),re)}const D=Kv(),N=()=>{d.stop(),D&&D.active&&iu(D.effects,d)};if(i&&e){const M=e;e=(...re)=>{M(...re),N()}}let x=O?new Array(t.length).fill(Bo):Bo;const j=M=>{if(!(!(d.flags&1)||!d.dirty&&!M))if(e){const re=d.run();if(r||S||(O?re.some((ne,w)=>ps(ne,x[w])):ps(re,x))){g&&g();const ne=xs;xs=d;try{const w=[re,x===Bo?void 0:O&&x[0]===Bo?[]:x,y];x=re,c?c(e,3,w):e(...w)}finally{xs=ne}}}else d.run()};return l&&l(j),d=new em(p),d.scheduler=o?()=>o(j,!1):j,y=M=>_E(M,!1,d),g=d.onStop=()=>{const M=ga.get(d);if(M){if(c)c(M,4);else for(const re of M)re();ga.delete(d)}},e?s?j(!0):x=d.run():o?o(j.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function xn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))xn(t.value,e,n);else if(ie(t))for(let s=0;s<t.length;s++)xn(t[s],e,n);else if(Br(t)||Er(t))t.forEach(s=>{xn(s,e,n)});else if(Yp(t)){for(const s in t)xn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&xn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(t,e,n,s){try{return s?t(...s):t()}catch(r){Ga(r,e,n)}}function ln(t,e,n,s){if(pe(t)){const r=so(t,e,n,s);return r&&Gp(r)&&r.catch(i=>{Ga(i,e,n)}),r}if(ie(t)){const r=[];for(let i=0;i<t.length;i++)r.push(ln(t[i],e,n,s));return r}}function Ga(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){qn(),so(i,null,10,[t,c,u]),Hn();return}}vE(t,n,r,s,o)}function vE(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const bt=[];let mn=-1;const Ir=[];let is=null,dr=0;const ym=Promise.resolve();let _a=null;function Qa(t){const e=_a||ym;return t?e.then(this?t.bind(this):t):e}function EE(t){let e=mn+1,n=bt.length;for(;e<n;){const s=e+n>>>1,r=bt[s],i=xi(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function mu(t){if(!(t.flags&1)){const e=xi(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=xi(n)?bt.push(t):bt.splice(EE(e),0,t),t.flags|=1,vm()}}function vm(){_a||(_a=ym.then(Tm))}function TE(t){ie(t)?Ir.push(...t):is&&t.id===-1?is.splice(dr+1,0,t):t.flags&1||(Ir.push(t),t.flags|=1),vm()}function gd(t,e,n=mn+1){for(;n<bt.length;n++){const s=bt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;bt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Em(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,s)=>xi(n)-xi(s));if(Ir.length=0,is){is.push(...e);return}for(is=e,dr=0;dr<is.length;dr++){const n=is[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}is=null,dr=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tm(t){try{for(mn=0;mn<bt.length;mn++){const e=bt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),so(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<bt.length;mn++){const e=bt[mn];e&&(e.flags&=-2)}mn=-1,bt.length=0,Em(),_a=null,(bt.length||Ir.length)&&Tm()}}let nt=null,Im=null;function ya(t){const e=nt;return nt=t,Im=t&&t.type.__scopeId||null,e}function Zs(t,e=nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Rd(-1);const i=ya(e);let o;try{o=t(...r)}finally{ya(i),s._d&&Rd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xt(t,e){if(nt===null)return t;const n=el(nt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Ne]=e[r];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Os(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(qn(),ln(c,n,8,[t.el,l,t,e]),Hn())}}const IE=Symbol("_vte"),wE=t=>t.__isTeleport,ur=Symbol("_leaveCb"),jo=Symbol("_enterCb");function AE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ro(()=>{t.isMounted=!0}),Sm(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],bE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt};function RE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ec(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:y,onAfterLeave:S,onLeaveCancelled:O,onBeforeAppear:D,onAppear:N,onAfterAppear:x,onAppearCancelled:j}=e,M=String(t.key),re=RE(n,t),ne=(E,v)=>{E&&ln(E,s,9,v)},w=(E,v)=>{const R=v[1];ne(E,v),ie(E)?E.every(b=>b.length<=1)&&R():E.length<=1&&R()},m={mode:o,persisted:l,beforeEnter(E){let v=c;if(!n.isMounted)if(i)v=D||c;else return;E[ur]&&E[ur](!0);const R=re[M];R&&fr(t,R)&&R.el[ur]&&R.el[ur](),ne(v,[E])},enter(E){let v=u,R=d,b=p;if(!n.isMounted)if(i)v=N||u,R=x||d,b=j||p;else return;let I=!1;const De=E[jo]=Xe=>{I||(I=!0,Xe?ne(b,[E]):ne(R,[E]),m.delayedLeave&&m.delayedLeave(),E[jo]=void 0)};v?w(v,[E,De]):De()},leave(E,v){const R=String(t.key);if(E[jo]&&E[jo](!0),n.isUnmounting)return v();ne(g,[E]);let b=!1;const I=E[ur]=De=>{b||(b=!0,v(),De?ne(O,[E]):ne(S,[E]),E[ur]=void 0,re[R]===t&&delete re[R])};re[R]=t,y?w(y,[E,I]):I()},clone(E){return Ec(E,e,n,s)}};return m}function Mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wm(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ue?(o.patchFlag&128&&r++,s=s.concat(wm(o.children,e,l))):(e||o.type!==An)&&s.push(l!=null?zs(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Bt(t,e){return pe(t)?et({name:t.name},e,{setup:t}):t}function Am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ti(t,e,n,s,r=!1){if(ie(t)){t.forEach((S,O)=>Ti(S,e&&(ie(e)?e[O]:e),n,s,r));return}if(wr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ti(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?el(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Re(p),y=p===Ne?()=>!1:S=>Pe(g,S);if(u!=null&&u!==c&&(ze(u)?(d[u]=null,y(u)&&(p[u]=null)):Tt(u)&&(u.value=null)),pe(c))so(c,l,12,[o,d]);else{const S=ze(c),O=Tt(c);if(S||O){const D=()=>{if(t.f){const N=S?y(c)?p[c]:d[c]:c.value;r?ie(N)&&iu(N,i):ie(N)?N.includes(i)||N.push(i):S?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,y(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Vt(D,n)):D()}}}za().requestIdleCallback;za().cancelIdleCallback;const wr=t=>!!t.type.__asyncLoader,bm=t=>t.type.__isKeepAlive;function CE(t,e){Rm(t,"a",e)}function SE(t,e){Rm(t,"da",e)}function Rm(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ya(e,s,n),n){let r=n.parent;for(;r&&r.parent;)bm(r.parent.vnode)&&PE(s,e,n,r),r=r.parent}}function PE(t,e,n,s){const r=Ya(e,t,s,!0);gu(()=>{iu(s[e],r)},n)}function Ya(t,e,n=ct,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{qn();const l=oo(n),c=ln(e,n,t,o);return l(),Hn(),c});return s?r.unshift(i):r.push(i),i}}const Qn=t=>(e,n=ct)=>{(!Ui||t==="sp")&&Ya(t,(...s)=>e(...s),n)},kE=Qn("bm"),ro=Qn("m"),DE=Qn("bu"),Cm=Qn("u"),Sm=Qn("bum"),gu=Qn("um"),OE=Qn("sp"),NE=Qn("rtg"),VE=Qn("rtc");function xE(t,e=ct){Ya("ec",t,e)}const Pm="components";function ms(t,e){return Dm(Pm,t,!0,e)||t}const km=Symbol.for("v-ndc");function io(t){return ze(t)?Dm(Pm,t,!1)||t:t||km}function Dm(t,e,n=!0,s=!1){const r=nt||ct;if(r){const i=r.type;{const l=IT(i,!1);if(l&&(l===e||l===Qt(e)||l===Ha(Qt(e))))return i}const o=_d(r[t]||i[t],e)||_d(r.appContext[t],e);return!o&&s?i:o}}function _d(t,e){return t&&(t[e]||t[Qt(e)]||t[Ha(Qt(e))])}function Mn(t,e,n,s){let r;const i=n,o=ie(t);if(o||ze(t)){const l=o&&Tr(t);let c=!1,u=!1;l&&(c=!Gt(t),u=Ts(t),t=Ka(t)),r=new Array(t.length);for(let d=0,p=t.length;d<p;d++)r[d]=e(c?u?ma(lt(t[d])):lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=e(t[d],d,c,i)}}else r=[];return r}function ME(t,e,n={},s,r){if(nt.ce||nt.parent&&wr(nt.parent)&&nt.parent.ce)return ce(),Rt(Ue,null,[we("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),ce();const o=i&&Om(i(n)),l=n.key||o&&o.key,c=Rt(Ue,{key:(l&&!on(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Om(t){return t.some(e=>Fi(e)?!(e.type===An||e.type===Ue&&!Om(e.children)):!0)?t:null}function LE(t,e){const n={};for(const s in t)n[Yo(s)]=t[s];return n}const Tc=t=>t?Zm(t)?el(t):Tc(t.parent):null,Ii=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tc(t.parent),$root:t=>Tc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vm(t),$forceUpdate:t=>t.f||(t.f=()=>{mu(t.update)}),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>rT.bind(t)}),Kl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Pe(t,e),FE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Kl(s,e))return o[e]=1,s[e];if(r!==Ne&&Pe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];Ic&&(o[e]=0)}}const d=Ii[e];let p,g;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Kl(r,e)?(r[e]=n,!0):s!==Ne&&Pe(s,e)?(s[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&Pe(t,o)||Kl(e,o)||(l=i[0])&&Pe(l,o)||Pe(s,o)||Pe(Ii,o)||Pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yd(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ic=!0;function UE(t){const e=Vm(t),n=t.proxy,s=t.ctx;Ic=!1,e.beforeCreate&&vd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:S,activated:O,deactivated:D,beforeDestroy:N,beforeUnmount:x,destroyed:j,unmounted:M,render:re,renderTracked:ne,renderTriggered:w,errorCaptured:m,serverPrefetch:E,expose:v,inheritAttrs:R,components:b,directives:I,filters:De}=e;if(u&&$E(u,s,null),o)for(const ve in o){const ge=o[ve];pe(ge)&&(s[ve]=ge.bind(n))}if(r){const ve=r.call(n,n);Ve(ve)&&(t.data=Wa(ve))}if(Ic=!0,i)for(const ve in i){const ge=i[ve],Ot=pe(ge)?ge.bind(n,n):pe(ge.get)?ge.get.bind(n,n):_n,Yt=!pe(ge)&&pe(ge.set)?ge.set.bind(n):_n,jt=kt({get:Ot,set:Yt});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Be=>jt.value=Be})}if(l)for(const ve in l)Nm(l[ve],s,n,ve);if(c){const ve=pe(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{Xo(ge,ve[ge])})}d&&vd(d,t,"c");function $e(ve,ge){ie(ge)?ge.forEach(Ot=>ve(Ot.bind(n))):ge&&ve(ge.bind(n))}if($e(kE,p),$e(ro,g),$e(DE,y),$e(Cm,S),$e(CE,O),$e(SE,D),$e(xE,m),$e(VE,ne),$e(NE,w),$e(Sm,x),$e(gu,M),$e(OE,E),ie(v))if(v.length){const ve=t.exposed||(t.exposed={});v.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:Ot=>n[ge]=Ot})})}else t.exposed||(t.exposed={});re&&t.render===_n&&(t.render=re),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),I&&(t.directives=I),E&&Am(t)}function $E(t,e,n=_n){ie(t)&&(t=wc(t));for(const s in t){const r=t[s];let i;Ve(r)?"default"in r?i=sn(r.from||s,r.default,!0):i=sn(r.from||s):i=sn(r),Tt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function vd(t,e,n){ln(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nm(t,e,n,s){let r=s.includes(".")?Wm(n,s):()=>n[s];if(ze(t)){const i=e[t];pe(i)&&Zo(r,i)}else if(pe(t))Zo(r,t.bind(n));else if(Ve(t))if(ie(t))t.forEach(i=>Nm(i,e,n,s));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Zo(r,i,t)}}function Vm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>va(c,u,o,!0)),va(c,e,o)),Ve(e)&&i.set(e,c),c}function va(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&va(t,i,n,!0),r&&r.forEach(o=>va(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=BE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const BE={data:Ed,props:Td,emits:Td,methods:hi,computed:hi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:hi,directives:hi,watch:qE,provide:Ed,inject:jE};function Ed(t,e){return e?t?function(){return et(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function jE(t,e){return hi(wc(t),wc(e))}function wc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?et(Object.create(null),t,e):e}function Td(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:et(Object.create(null),yd(t),yd(e??{})):e}function qE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function xm(){return{app:null,config:{isNativeTag:Ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HE=0;function zE(t,e){return function(s,r=null){pe(s)||(s=et({},s)),r!=null&&!Ve(r)&&(r=null);const i=xm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:HE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:AT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const y=u._ceVNode||we(s,r);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,d,g),c=!0,u._container=d,d.__vue_app__=u,el(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ln(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ar;Ar=u;try{return d()}finally{Ar=p}}};return u}}let Ar=null;function Xo(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function sn(t,e,n=!1){const s=ct||nt;if(s||Ar){let r=Ar?Ar._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const Mm={},Lm=()=>Object.create(Mm),Fm=t=>Object.getPrototypeOf(t)===Mm;function KE(t,e,n,s=!1){const r={},i=Lm();t.propsDefaults=Object.create(null),Um(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:pm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function WE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Re(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ja(t.emitsOptions,g))continue;const y=e[g];if(c)if(Pe(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const S=Qt(g);r[S]=Ac(c,l,S,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{Um(t,e,r,i)&&(u=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=Xs(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=Ac(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Vn(t.attrs,"set","")}function Um(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(yi(c))continue;const u=e[c];let d;r&&Pe(r,d=Qt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ja(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Re(n),u=l||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ac(r,c,p,u[p],t,!Pe(u,p))}}return o}function Ac(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=oo(r);s=u[n]=c.call(null,e),d()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Xs(n))&&(s=!0))}return s}const GE=new WeakMap;function $m(t,e,n=!1){const s=n?GE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,y]=$m(p,e,!0);et(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ve(t)&&s.set(t,vr),vr;if(ie(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);Id(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=Qt(d);if(Id(p)){const g=i[d],y=o[p]=ie(g)||pe(g)?{type:g}:et({},g),S=y.type;let O=!1,D=!0;if(ie(S))for(let N=0;N<S.length;++N){const x=S[N],j=pe(x)&&x.name;if(j==="Boolean"){O=!0;break}else j==="String"&&(D=!1)}else O=pe(S)&&S.name==="Boolean";y[0]=O,y[1]=D,(O||Pe(y,"default"))&&l.push(p)}}const u=[o,l];return Ve(t)&&s.set(t,u),u}function Id(t){return t[0]!=="$"&&!yi(t)}const _u=t=>t[0]==="_"||t==="$stable",yu=t=>ie(t)?t.map(gn):[gn(t)],QE=(t,e,n)=>{if(e._n)return e;const s=Zs((...r)=>yu(e(...r)),n);return s._c=!1,s},Bm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_u(r))continue;const i=t[r];if(pe(i))e[r]=QE(r,i,s);else if(i!=null){const o=yu(i);e[r]=()=>o}}},jm=(t,e)=>{const n=yu(e);t.slots.default=()=>n},qm=(t,e,n)=>{for(const s in e)(n||!_u(s))&&(t[s]=e[s])},YE=(t,e,n)=>{const s=t.slots=Lm();if(t.vnode.shapeFlag&32){const r=e.__;r&&mc(s,"__",r,!0);const i=e._;i?(qm(s,e,n),n&&mc(s,"_",i,!0)):Bm(e,s)}else e&&jm(t,e)},JE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:qm(r,e,n):(i=!e.$stable,Bm(e,r)),o=e}else e&&(jm(t,e),o={default:1});if(i)for(const l in r)!_u(l)&&o[l]==null&&delete r[l]},Vt=hT;function XE(t){return ZE(t)}function ZE(t,e){const n=za();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=_n,insertStaticContent:S}=t,O=(T,A,P,F=null,B=null,U=null,Q=void 0,K=null,z=!!A.dynamicChildren)=>{if(T===A)return;T&&!fr(T,A)&&(F=L(T),Be(T,B,U,!0),T=null),A.patchFlag===-2&&(z=!1,A.dynamicChildren=null);const{type:H,ref:se,shapeFlag:G}=A;switch(H){case Xa:D(T,A,P,F);break;case An:N(T,A,P,F);break;case ea:T==null&&x(A,P,F,Q);break;case Ue:b(T,A,P,F,B,U,Q,K,z);break;default:G&1?re(T,A,P,F,B,U,Q,K,z):G&6?I(T,A,P,F,B,U,Q,K,z):(G&64||G&128)&&H.process(T,A,P,F,B,U,Q,K,z,Z)}se!=null&&B?Ti(se,T&&T.ref,U,A||T,!A):se==null&&T&&T.ref!=null&&Ti(T.ref,null,U,T,!0)},D=(T,A,P,F)=>{if(T==null)s(A.el=l(A.children),P,F);else{const B=A.el=T.el;A.children!==T.children&&u(B,A.children)}},N=(T,A,P,F)=>{T==null?s(A.el=c(A.children||""),P,F):A.el=T.el},x=(T,A,P,F)=>{[T.el,T.anchor]=S(T.children,A,P,F,T.el,T.anchor)},j=({el:T,anchor:A},P,F)=>{let B;for(;T&&T!==A;)B=g(T),s(T,P,F),T=B;s(A,P,F)},M=({el:T,anchor:A})=>{let P;for(;T&&T!==A;)P=g(T),r(T),T=P;r(A)},re=(T,A,P,F,B,U,Q,K,z)=>{A.type==="svg"?Q="svg":A.type==="math"&&(Q="mathml"),T==null?ne(A,P,F,B,U,Q,K,z):E(T,A,B,U,Q,K,z)},ne=(T,A,P,F,B,U,Q,K)=>{let z,H;const{props:se,shapeFlag:G,transition:te,dirs:le}=T;if(z=T.el=o(T.type,U,se&&se.is,se),G&8?d(z,T.children):G&16&&m(T.children,z,null,F,B,Wl(T,U),Q,K),le&&Os(T,null,F,"created"),w(z,T,T.scopeId,Q,F),se){for(const me in se)me!=="value"&&!yi(me)&&i(z,me,null,se[me],U,F);"value"in se&&i(z,"value",null,se.value,U),(H=se.onVnodeBeforeMount)&&fn(H,F,T)}le&&Os(T,null,F,"beforeMount");const ae=eT(B,te);ae&&te.beforeEnter(z),s(z,A,P),((H=se&&se.onVnodeMounted)||ae||le)&&Vt(()=>{H&&fn(H,F,T),ae&&te.enter(z),le&&Os(T,null,F,"mounted")},B)},w=(T,A,P,F,B)=>{if(P&&y(T,P),F)for(let U=0;U<F.length;U++)y(T,F[U]);if(B){let U=B.subTree;if(A===U||Qm(U.type)&&(U.ssContent===A||U.ssFallback===A)){const Q=B.vnode;w(T,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},m=(T,A,P,F,B,U,Q,K,z=0)=>{for(let H=z;H<T.length;H++){const se=T[H]=K?os(T[H]):gn(T[H]);O(null,se,A,P,F,B,U,Q,K)}},E=(T,A,P,F,B,U,Q)=>{const K=A.el=T.el;let{patchFlag:z,dynamicChildren:H,dirs:se}=A;z|=T.patchFlag&16;const G=T.props||Ne,te=A.props||Ne;let le;if(P&&Ns(P,!1),(le=te.onVnodeBeforeUpdate)&&fn(le,P,A,T),se&&Os(A,T,P,"beforeUpdate"),P&&Ns(P,!0),(G.innerHTML&&te.innerHTML==null||G.textContent&&te.textContent==null)&&d(K,""),H?v(T.dynamicChildren,H,K,P,F,Wl(A,B),U):Q||ge(T,A,K,null,P,F,Wl(A,B),U,!1),z>0){if(z&16)R(K,G,te,P,B);else if(z&2&&G.class!==te.class&&i(K,"class",null,te.class,B),z&4&&i(K,"style",G.style,te.style,B),z&8){const ae=A.dynamicProps;for(let me=0;me<ae.length;me++){const Ee=ae[me],st=G[Ee],rt=te[Ee];(rt!==st||Ee==="value")&&i(K,Ee,st,rt,B,P)}}z&1&&T.children!==A.children&&d(K,A.children)}else!Q&&H==null&&R(K,G,te,P,B);((le=te.onVnodeUpdated)||se)&&Vt(()=>{le&&fn(le,P,A,T),se&&Os(A,T,P,"updated")},F)},v=(T,A,P,F,B,U,Q)=>{for(let K=0;K<A.length;K++){const z=T[K],H=A[K],se=z.el&&(z.type===Ue||!fr(z,H)||z.shapeFlag&198)?p(z.el):P;O(z,H,se,null,F,B,U,Q,!0)}},R=(T,A,P,F,B)=>{if(A!==P){if(A!==Ne)for(const U in A)!yi(U)&&!(U in P)&&i(T,U,A[U],null,B,F);for(const U in P){if(yi(U))continue;const Q=P[U],K=A[U];Q!==K&&U!=="value"&&i(T,U,K,Q,B,F)}"value"in P&&i(T,"value",A.value,P.value,B)}},b=(T,A,P,F,B,U,Q,K,z)=>{const H=A.el=T?T.el:l(""),se=A.anchor=T?T.anchor:l("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:le}=A;le&&(K=K?K.concat(le):le),T==null?(s(H,P,F),s(se,P,F),m(A.children||[],P,se,B,U,Q,K,z)):G>0&&G&64&&te&&T.dynamicChildren?(v(T.dynamicChildren,te,P,B,U,Q,K),(A.key!=null||B&&A===B.subTree)&&Hm(T,A,!0)):ge(T,A,P,se,B,U,Q,K,z)},I=(T,A,P,F,B,U,Q,K,z)=>{A.slotScopeIds=K,T==null?A.shapeFlag&512?B.ctx.activate(A,P,F,Q,z):De(A,P,F,B,U,Q,z):Xe(T,A,z)},De=(T,A,P,F,B,U,Q)=>{const K=T.component=_T(T,F,B);if(bm(T)&&(K.ctx.renderer=Z),yT(K,!1,Q),K.asyncDep){if(B&&B.registerDep(K,$e,Q),!T.el){const z=K.subTree=we(An);N(null,z,A,P)}}else $e(K,T,A,P,B,U,Q)},Xe=(T,A,P)=>{const F=A.component=T.component;if(cT(T,A,P))if(F.asyncDep&&!F.asyncResolved){ve(F,A,P);return}else F.next=A,F.update();else A.el=T.el,F.vnode=A},$e=(T,A,P,F,B,U,Q)=>{const K=()=>{if(T.isMounted){let{next:G,bu:te,u:le,parent:ae,vnode:me}=T;{const ft=zm(T);if(ft){G&&(G.el=me.el,ve(T,G,Q)),ft.asyncDep.then(()=>{T.isUnmounted||K()});return}}let Ee=G,st;Ns(T,!1),G?(G.el=me.el,ve(T,G,Q)):G=me,te&&Jo(te),(st=G.props&&G.props.onVnodeBeforeUpdate)&&fn(st,ae,G,me),Ns(T,!0);const rt=Ad(T),qt=T.subTree;T.subTree=rt,O(qt,rt,p(qt.el),L(qt),T,B,U),G.el=rt.el,Ee===null&&uT(T,rt.el),le&&Vt(le,B),(st=G.props&&G.props.onVnodeUpdated)&&Vt(()=>fn(st,ae,G,me),B)}else{let G;const{el:te,props:le}=A,{bm:ae,m:me,parent:Ee,root:st,type:rt}=T,qt=wr(A);Ns(T,!1),ae&&Jo(ae),!qt&&(G=le&&le.onVnodeBeforeMount)&&fn(G,Ee,A),Ns(T,!0);{st.ce&&st.ce._def.shadowRoot!==!1&&st.ce._injectChildStyle(rt);const ft=T.subTree=Ad(T);O(null,ft,P,F,T,B,U),A.el=ft.el}if(me&&Vt(me,B),!qt&&(G=le&&le.onVnodeMounted)){const ft=A;Vt(()=>fn(G,Ee,ft),B)}(A.shapeFlag&256||Ee&&wr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&T.a&&Vt(T.a,B),T.isMounted=!0,A=P=F=null}};T.scope.on();const z=T.effect=new em(K);T.scope.off();const H=T.update=z.run.bind(z),se=T.job=z.runIfDirty.bind(z);se.i=T,se.id=T.uid,z.scheduler=()=>mu(se),Ns(T,!0),H()},ve=(T,A,P)=>{A.component=T;const F=T.vnode.props;T.vnode=A,T.next=null,WE(T,A.props,F,P),JE(T,A.children,P),qn(),gd(T),Hn()},ge=(T,A,P,F,B,U,Q,K,z=!1)=>{const H=T&&T.children,se=T?T.shapeFlag:0,G=A.children,{patchFlag:te,shapeFlag:le}=A;if(te>0){if(te&128){Yt(H,G,P,F,B,U,Q,K,z);return}else if(te&256){Ot(H,G,P,F,B,U,Q,K,z);return}}le&8?(se&16&&St(H,B,U),G!==H&&d(P,G)):se&16?le&16?Yt(H,G,P,F,B,U,Q,K,z):St(H,B,U,!0):(se&8&&d(P,""),le&16&&m(G,P,F,B,U,Q,K,z))},Ot=(T,A,P,F,B,U,Q,K,z)=>{T=T||vr,A=A||vr;const H=T.length,se=A.length,G=Math.min(H,se);let te;for(te=0;te<G;te++){const le=A[te]=z?os(A[te]):gn(A[te]);O(T[te],le,P,null,B,U,Q,K,z)}H>se?St(T,B,U,!0,!1,G):m(A,P,F,B,U,Q,K,z,G)},Yt=(T,A,P,F,B,U,Q,K,z)=>{let H=0;const se=A.length;let G=T.length-1,te=se-1;for(;H<=G&&H<=te;){const le=T[H],ae=A[H]=z?os(A[H]):gn(A[H]);if(fr(le,ae))O(le,ae,P,null,B,U,Q,K,z);else break;H++}for(;H<=G&&H<=te;){const le=T[G],ae=A[te]=z?os(A[te]):gn(A[te]);if(fr(le,ae))O(le,ae,P,null,B,U,Q,K,z);else break;G--,te--}if(H>G){if(H<=te){const le=te+1,ae=le<se?A[le].el:F;for(;H<=te;)O(null,A[H]=z?os(A[H]):gn(A[H]),P,ae,B,U,Q,K,z),H++}}else if(H>te)for(;H<=G;)Be(T[H],B,U,!0),H++;else{const le=H,ae=H,me=new Map;for(H=ae;H<=te;H++){const it=A[H]=z?os(A[H]):gn(A[H]);it.key!=null&&me.set(it.key,H)}let Ee,st=0;const rt=te-ae+1;let qt=!1,ft=0;const Jn=new Array(rt);for(H=0;H<rt;H++)Jn[H]=0;for(H=le;H<=G;H++){const it=T[H];if(st>=rt){Be(it,B,U,!0);continue}let Ht;if(it.key!=null)Ht=me.get(it.key);else for(Ee=ae;Ee<=te;Ee++)if(Jn[Ee-ae]===0&&fr(it,A[Ee])){Ht=Ee;break}Ht===void 0?Be(it,B,U,!0):(Jn[Ht-ae]=H+1,Ht>=ft?ft=Ht:qt=!0,O(it,A[Ht],P,null,B,U,Q,K,z),st++)}const Wr=qt?tT(Jn):vr;for(Ee=Wr.length-1,H=rt-1;H>=0;H--){const it=ae+H,Ht=A[it],wo=it+1<se?A[it+1].el:F;Jn[H]===0?O(null,Ht,P,wo,B,U,Q,K,z):qt&&(Ee<0||H!==Wr[Ee]?jt(Ht,P,wo,2):Ee--)}}},jt=(T,A,P,F,B=null)=>{const{el:U,type:Q,transition:K,children:z,shapeFlag:H}=T;if(H&6){jt(T.component.subTree,A,P,F);return}if(H&128){T.suspense.move(A,P,F);return}if(H&64){Q.move(T,A,P,Z);return}if(Q===Ue){s(U,A,P);for(let G=0;G<z.length;G++)jt(z[G],A,P,F);s(T.anchor,A,P);return}if(Q===ea){j(T,A,P);return}if(F!==2&&H&1&&K)if(F===0)K.beforeEnter(U),s(U,A,P),Vt(()=>K.enter(U),B);else{const{leave:G,delayLeave:te,afterLeave:le}=K,ae=()=>{T.ctx.isUnmounted?r(U):s(U,A,P)},me=()=>{G(U,()=>{ae(),le&&le()})};te?te(U,ae,me):me()}else s(U,A,P)},Be=(T,A,P,F=!1,B=!1)=>{const{type:U,props:Q,ref:K,children:z,dynamicChildren:H,shapeFlag:se,patchFlag:G,dirs:te,cacheIndex:le}=T;if(G===-2&&(B=!1),K!=null&&(qn(),Ti(K,null,P,T,!0),Hn()),le!=null&&(A.renderCache[le]=void 0),se&256){A.ctx.deactivate(T);return}const ae=se&1&&te,me=!wr(T);let Ee;if(me&&(Ee=Q&&Q.onVnodeBeforeUnmount)&&fn(Ee,A,T),se&6)dn(T.component,P,F);else{if(se&128){T.suspense.unmount(P,F);return}ae&&Os(T,null,A,"beforeUnmount"),se&64?T.type.remove(T,A,P,Z,F):H&&!H.hasOnce&&(U!==Ue||G>0&&G&64)?St(H,A,P,!1,!0):(U===Ue&&G&384||!B&&se&16)&&St(z,A,P),F&&je(T)}(me&&(Ee=Q&&Q.onVnodeUnmounted)||ae)&&Vt(()=>{Ee&&fn(Ee,A,T),ae&&Os(T,null,A,"unmounted")},P)},je=T=>{const{type:A,el:P,anchor:F,transition:B}=T;if(A===Ue){Yn(P,F);return}if(A===ea){M(T);return}const U=()=>{r(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:K}=B,z=()=>Q(P,U);K?K(T.el,U,z):z()}else U()},Yn=(T,A)=>{let P;for(;T!==A;)P=g(T),r(T),T=P;r(A)},dn=(T,A,P)=>{const{bum:F,scope:B,job:U,subTree:Q,um:K,m:z,a:H,parent:se,slots:{__:G}}=T;wd(z),wd(H),F&&Jo(F),se&&ie(G)&&G.forEach(te=>{se.renderCache[te]=void 0}),B.stop(),U&&(U.flags|=8,Be(Q,T,A,P)),K&&Vt(K,A),Vt(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},St=(T,A,P,F=!1,B=!1,U=0)=>{for(let Q=U;Q<T.length;Q++)Be(T[Q],A,P,F,B)},L=T=>{if(T.shapeFlag&6)return L(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=g(T.anchor||T.el),P=A&&A[IE];return P?g(P):A};let J=!1;const Y=(T,A,P)=>{T==null?A._vnode&&Be(A._vnode,null,null,!0):O(A._vnode||null,T,A,null,null,null,P),A._vnode=T,J||(J=!0,gd(),Em(),J=!1)},Z={p:O,um:Be,m:jt,r:je,mt:De,mc:m,pc:ge,pbc:v,n:L,o:t};return{render:Y,hydrate:void 0,createApp:zE(Y)}}function Wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function eT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hm(t,e,n=!1){const s=t.children,r=e.children;if(ie(s)&&ie(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=os(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Hm(o,l)),l.type===Xa&&(l.el=o.el),l.type===An&&!l.el&&(l.el=o.el)}}function tT(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function zm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zm(e)}function wd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const nT=Symbol.for("v-scx"),sT=()=>sn(nT);function Zo(t,e,n){return Km(t,e,n)}function Km(t,e,n=Ne){const{immediate:s,deep:r,flush:i,once:o}=n,l=et({},n),c=e&&s||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const y=sT();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=_n,y.resume=_n,y.pause=_n,y}}const d=ct;l.call=(y,S,O)=>ln(y,d,S,O);let p=!1;i==="post"?l.scheduler=y=>{Vt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,S)=>{S?y():mu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=yE(t,e,l);return Ui&&(u?u.push(g):c&&g()),g}function rT(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?Wm(s,t):()=>s[t]:t.bind(s,s);let i;pe(e)?i=e:(i=e.handler,n=e);const o=oo(this),l=Km(r,i.bind(s),n);return o(),l}function Wm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const iT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${Xs(e)}Modifiers`];function oT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let r=n;const i=e.startsWith("update:"),o=i&&iT(s,e.slice(7));o&&(o.trim&&(r=n.map(d=>ze(d)?d.trim():d)),o.number&&(r=n.map(pa)));let l,c=s[l=Yo(e)]||s[l=Yo(Qt(e))];!c&&i&&(c=s[l=Yo(Xs(e))]),c&&ln(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ln(u,t,6,r)}}function Gm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=Gm(u,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&s.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):et(o,i),Ve(t)&&s.set(t,o),o)}function Ja(t,e){return!t||!ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Xs(e))||Pe(t,e))}function Ad(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:y,ctx:S,inheritAttrs:O}=t,D=ya(t);let N,x;try{if(n.shapeFlag&4){const M=r||s,re=M;N=gn(u.call(re,M,d,p,y,g,S)),x=l}else{const M=e;N=gn(M.length>1?M(p,{attrs:l,slots:o,emit:c}):M(p,null)),x=e.props?l:aT(l)}}catch(M){wi.length=0,Ga(M,t,1),N=we(An)}let j=N;if(x&&O!==!1){const M=Object.keys(x),{shapeFlag:re}=j;M.length&&re&7&&(i&&M.some(ru)&&(x=lT(x,i)),j=zs(j,x,!1,!0))}return n.dirs&&(j=zs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Mi(j,n.transition),N=j,ya(D),N}const aT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ja(n))&&((e||(e={}))[n]=t[n]);return e},lT=(t,e)=>{const n={};for(const s in t)(!ru(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cT(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bd(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==s[g]&&!Ja(u,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?bd(s,o,u):!0:!!o;return!1}function bd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ja(n,i))return!0}return!1}function uT({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qm=t=>t.__isSuspense;function hT(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):TE(t)}const Ue=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),wi=[];let Ft=null;function ce(t=!1){wi.push(Ft=t?null:[])}function dT(){wi.pop(),Ft=wi[wi.length-1]||null}let Li=1;function Rd(t,e=!1){Li+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function Ym(t){return t.dynamicChildren=Li>0?Ft||vr:null,dT(),Li>0&&Ft&&Ft.push(t),t}function Ie(t,e,n,s,r,i){return Ym(C(t,e,n,s,r,i,!0))}function Rt(t,e,n,s,r){return Ym(we(t,e,n,s,r,!0))}function Fi(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const Jm=({key:t})=>t??null,ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Tt(t)||pe(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,s=0,r=null,i=t===Ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jm(e),ref:e&&ta(e),scopeId:Im,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nt};return l?(vu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Li>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const we=fT;function fT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===km)&&(t=An),Fi(t)){const l=zs(t,e,!0);return n&&vu(l,n),Li>0&&!i&&Ft&&(l.shapeFlag&6?Ft[Ft.indexOf(t)]=l:Ft.push(l)),l.patchFlag=-2,l}if(wT(t)&&(t=t.__vccOpts),e){e=pT(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=an(l)),Ve(c)&&(pu(c)&&!ie(c)&&(c=et({},c)),e.style=Hs(c))}const o=ze(t)?1:Qm(t)?128:wE(t)?64:Ve(t)?4:pe(t)?2:0;return C(t,e,n,s,r,o,i,!0)}function pT(t){return t?pu(t)||Fm(t)?et({},t):t:null}function zs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Za(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Jm(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zs(t.ssContent),ssFallback:t.ssFallback&&zs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Mi(d,c.clone(d)),d}function yt(t=" ",e=0){return we(Xa,null,t,e)}function na(t,e){const n=we(ea,null,t);return n.staticCount=e,n}function js(t="",e=!1){return e?(ce(),Rt(An,null,t)):we(An,null,t)}function gn(t){return t==null||typeof t=="boolean"?we(An):ie(t)?we(Ue,null,t.slice()):Fi(t)?os(t):we(Xa,null,String(t))}function os(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zs(t)}function vu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),vu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Fm(e)?e._ctx=nt:r===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Za(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=an([e.class,s.class]));else if(r==="style")e.style=Hs([e.style,s.style]);else if(ja(r)){const i=e[r],o=s[r];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function fn(t,e,n,s=null){ln(t,e,7,[n,s])}const mT=xm();let gT=0;function _T(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||mT,i={uid:gT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$m(s,r),emitsOptions:Gm(s,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oT.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const Xm=()=>ct||nt;let Ea,bc;{const t=za(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ea=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),bc=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const oo=t=>{const e=ct;return Ea(t),t.scope.on(),()=>{t.scope.off(),Ea(e)}},Cd=()=>{ct&&ct.scope.off(),Ea(null)};function Zm(t){return t.vnode.shapeFlag&4}let Ui=!1;function yT(t,e=!1,n=!1){e&&bc(e);const{props:s,children:r}=t.vnode,i=Zm(t);KE(t,s,i,e),YE(t,r,n||e);const o=i?vT(t,e):void 0;return e&&bc(!1),o}function vT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,FE);const{setup:s}=n;if(s){qn();const r=t.setupContext=s.length>1?TT(t):null,i=oo(t),o=so(s,t,0,[t.props,r]),l=Gp(o);if(Hn(),i(),(l||t.sp)&&!wr(t)&&Am(t),l){if(o.then(Cd,Cd),e)return o.then(c=>{Sd(t,c)}).catch(c=>{Ga(c,t,0)});t.asyncDep=o}else Sd(t,o)}else eg(t)}function Sd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=_m(e)),eg(t)}function eg(t,e,n){const s=t.type;t.render||(t.render=s.render||_n);{const r=oo(t);qn();try{UE(t)}finally{Hn(),r()}}}const ET={get(t,e){return vt(t,"get",""),t[e]}};function TT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ET),slots:t.slots,emit:t.emit,expose:e}}function el(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_m(hE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function IT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function wT(t){return pe(t)&&"__vccOpts"in t}const kt=(t,e)=>gE(t,e,Ui);function Ta(t,e,n){const s=arguments.length;return s===2?Ve(e)&&!ie(e)?Fi(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fi(n)&&(n=[n]),we(t,e,n))}const AT="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const Pd=typeof window<"u"&&window.trustedTypes;if(Pd)try{Rc=Pd.createPolicy("vue",{createHTML:t=>t})}catch{}const tg=Rc?t=>Rc.createHTML(t):t=>t,bT="http://www.w3.org/2000/svg",RT="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,kd=Nn&&Nn.createElement("template"),CT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Nn.createElementNS(bT,t):e==="mathml"?Nn.createElementNS(RT,t):n?Nn.createElement(t,{is:n}):Nn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{kd.innerHTML=tg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=kd.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ts="transition",ai="animation",Pr=Symbol("_vtc"),ng={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ST=et({},bE,ng),Vs=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Dd=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function PT(t){const e={};for(const b in t)b in ng||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,S=kT(r),O=S&&S[0],D=S&&S[1],{onBeforeEnter:N,onEnter:x,onEnterCancelled:j,onLeave:M,onLeaveCancelled:re,onBeforeAppear:ne=N,onAppear:w=x,onAppearCancelled:m=j}=e,E=(b,I,De,Xe)=>{b._enterCancelled=Xe,rs(b,I?d:l),rs(b,I?u:o),De&&De()},v=(b,I)=>{b._isLeaving=!1,rs(b,p),rs(b,y),rs(b,g),I&&I()},R=b=>(I,De)=>{const Xe=b?w:x,$e=()=>E(I,b,De);Vs(Xe,[I,$e]),Od(()=>{rs(I,b?c:i),pn(I,b?d:l),Dd(Xe)||Nd(I,s,O,$e)})};return et(e,{onBeforeEnter(b){Vs(N,[b]),pn(b,i),pn(b,o)},onBeforeAppear(b){Vs(ne,[b]),pn(b,c),pn(b,u)},onEnter:R(!1),onAppear:R(!0),onLeave(b,I){b._isLeaving=!0;const De=()=>v(b,I);pn(b,p),b._enterCancelled?(pn(b,g),Cc()):(Cc(),pn(b,g)),Od(()=>{b._isLeaving&&(rs(b,p),pn(b,y),Dd(M)||Nd(b,s,D,De))}),Vs(M,[b,De])},onEnterCancelled(b){E(b,!1,void 0,!0),Vs(j,[b])},onAppearCancelled(b){E(b,!0,void 0,!0),Vs(m,[b])},onLeaveCancelled(b){v(b),Vs(re,[b])}})}function kT(t){if(t==null)return null;if(Ve(t))return[Gl(t.enter),Gl(t.leave)];{const e=Gl(t);return[e,e]}}function Gl(t){return Lv(t)}function pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Pr]||(t[Pr]=new Set)).add(e)}function rs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Pr];n&&(n.delete(e),n.size||(t[Pr]=void 0))}function Od(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let DT=0;function Nd(t,e,n,s){const r=t._endId=++DT,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=sg(t,e);if(!o)return s();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function sg(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${ts}Delay`),i=s(`${ts}Duration`),o=Vd(r,i),l=s(`${ai}Delay`),c=s(`${ai}Duration`),u=Vd(l,c);let d=null,p=0,g=0;e===ts?o>0&&(d=ts,p=o,g=i.length):e===ai?u>0&&(d=ai,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?ts:ai:null,g=d?d===ts?i.length:c.length:0);const y=d===ts&&/\b(transform|all)(,|$)/.test(s(`${ts}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:y}}function Vd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>xd(n)+xd(t[s])))}function xd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Cc(){return document.body.offsetHeight}function OT(t,e,n){const s=t[Pr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Md=Symbol("_vod"),NT=Symbol("_vsh"),VT=Symbol(""),xT=/(^|;)\s*display\s*:/;function MT(t,e,n){const s=t.style,r=ze(n);let i=!1;if(n&&!r){if(e)if(ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&sa(s,l,"")}else for(const o in e)n[o]==null&&sa(s,o,"");for(const o in n)o==="display"&&(i=!0),sa(s,o,n[o])}else if(r){if(e!==n){const o=s[VT];o&&(n+=";"+o),s.cssText=n,i=xT.test(n)}}else e&&t.removeAttribute("style");Md in t&&(t[Md]=i?s.display:"",t[NT]&&(s.display="none"))}const Ld=/\s*!important$/;function sa(t,e,n){if(ie(n))n.forEach(s=>sa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=LT(t,e);Ld.test(n)?t.setProperty(Xs(s),n.replace(Ld,""),"important"):t[s]=n}}const Fd=["Webkit","Moz","ms"],Ql={};function LT(t,e){const n=Ql[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return Ql[e]=s;s=Ha(s);for(let r=0;r<Fd.length;r++){const i=Fd[r]+s;if(i in t)return Ql[e]=i}return e}const Ud="http://www.w3.org/1999/xlink";function $d(t,e,n,s,r,i=qv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ud,e.slice(6,e.length)):t.setAttributeNS(Ud,e,n):n==null||i&&!Jp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":on(n)?String(n):n)}function Bd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Jp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ls(t,e,n,s){t.addEventListener(e,n,s)}function FT(t,e,n,s){t.removeEventListener(e,n,s)}const jd=Symbol("_vei");function UT(t,e,n,s,r=null){const i=t[jd]||(t[jd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=$T(e);if(s){const u=i[e]=qT(s,r);ls(t,l,u,c)}else o&&(FT(t,l,o,c),i[e]=void 0)}}const qd=/(?:Once|Passive|Capture)$/;function $T(t){let e;if(qd.test(t)){e={};let s;for(;s=t.match(qd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xs(t.slice(2)),e]}let Yl=0;const BT=Promise.resolve(),jT=()=>Yl||(BT.then(()=>Yl=0),Yl=Date.now());function qT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ln(HT(s,n.value),e,5,[s])};return n.value=t,n.attached=jT(),n}function HT(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?OT(t,s,o):e==="style"?MT(t,n,s):ja(e)?ru(e)||UT(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KT(t,e,s,o))?(Bd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(s))?Bd(t,Qt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$d(t,e,s,o))};function KT(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hd(e)&&ze(n)?!1:e in t}const rg=new WeakMap,ig=new WeakMap,Ia=Symbol("_moveCb"),zd=Symbol("_enterCb"),WT=t=>(delete t.props.mode,t),GT=WT({name:"TransitionGroup",props:et({},ST,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xm(),s=AE();let r,i;return Cm(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!ZT(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(YT),r.forEach(JT);const l=r.filter(XT);Cc(),l.forEach(c=>{const u=c.el,d=u.style;pn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ia]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ia]=null,rs(u,o))};u.addEventListener("transitionend",p)}),r=[]}),()=>{const o=Re(t),l=PT(o);let c=o.tag||Ue;if(r=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(r.push(d),Mi(d,Ec(d,l,s,n)),rg.set(d,d.el.getBoundingClientRect()))}i=e.default?wm(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Mi(d,Ec(d,l,s,n))}return we(c,null,i)}}}),QT=GT;function YT(t){const e=t.el;e[Ia]&&e[Ia](),e[zd]&&e[zd]()}function JT(t){ig.set(t,t.el.getBoundingClientRect())}function XT(t){const e=rg.get(t),n=ig.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function ZT(t,e,n){const s=t.cloneNode(),r=t[Pr];r&&r.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=sg(s);return i.removeChild(s),o}const kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Jo(e,n):e};function eI(t){t.target.composing=!0}function Kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign"),Xt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Bn]=kr(r);const i=s||r.props&&r.props.type==="number";ls(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=pa(l)),t[Bn](l)}),n&&ls(t,"change",()=>{t.value=t.value.trim()}),e||(ls(t,"compositionstart",eI),ls(t,"compositionend",Kd),ls(t,"change",Kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Bn]=kr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?pa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},tI={deep:!0,created(t,e,n){t[Bn]=kr(n),ls(t,"change",()=>{const s=t._modelValue,r=$i(t),i=t.checked,o=t[Bn];if(ie(s)){const l=au(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(Br(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(og(t,i))})},mounted:Wd,beforeUpdate(t,e,n){t[Bn]=kr(n),Wd(t,e,n)}};function Wd(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(ie(e))r=au(e,s.props.value)>-1;else if(Br(e))r=e.has(s.props.value);else{if(e===n)return;r=no(e,og(t,!0))}t.checked!==r&&(t.checked=r)}const nI={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Br(e);ls(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?pa($i(o)):$i(o));t[Bn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Qa(()=>{t._assigning=!1})}),t[Bn]=kr(s)},mounted(t,{value:e}){Gd(t,e)},beforeUpdate(t,e,n){t[Bn]=kr(n)},updated(t,{value:e}){t._assigning||Gd(t,e)}};function Gd(t,e){const n=t.multiple,s=ie(e);if(!(n&&!s&&!Br(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=$i(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=au(e,l)>-1}else o.selected=e.has(l);else if(no($i(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $i(t){return"_value"in t?t._value:t.value}function og(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const sI=["ctrl","shift","alt","meta"],rI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sI.some(n=>t[`${n}Key`]&&!e.includes(n))},Eu=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=rI[e[o]];if(l&&l(r,e))return}return t(r,...i)})},iI=et({patchProp:zT},CT);let Qd;function oI(){return Qd||(Qd=XE(iI))}const ag=(...t)=>{const e=oI().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=lI(s);if(!r)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,aI(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function aI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lI(t){return ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof document<"u";function lg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&lg(t.default)}const Se=Object.assign;function Jl(t,e){const n={};for(const s in e){const r=e[s];n[s]=cn(r)?r.map(t):t(r)}return n}const Ai=()=>{},cn=Array.isArray,cg=/#/g,uI=/&/g,hI=/\//g,dI=/=/g,fI=/\?/g,ug=/\+/g,pI=/%5B/g,mI=/%5D/g,hg=/%5E/g,gI=/%60/g,dg=/%7B/g,_I=/%7C/g,fg=/%7D/g,yI=/%20/g;function Tu(t){return encodeURI(""+t).replace(_I,"|").replace(pI,"[").replace(mI,"]")}function vI(t){return Tu(t).replace(dg,"{").replace(fg,"}").replace(hg,"^")}function Sc(t){return Tu(t).replace(ug,"%2B").replace(yI,"+").replace(cg,"%23").replace(uI,"%26").replace(gI,"`").replace(dg,"{").replace(fg,"}").replace(hg,"^")}function EI(t){return Sc(t).replace(dI,"%3D")}function TI(t){return Tu(t).replace(cg,"%23").replace(fI,"%3F")}function II(t){return t==null?"":TI(t).replace(hI,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wI=/\/$/,AI=t=>t.replace(wI,"");function Xl(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=SI(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Bi(o)}}function bI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Dr(e.matched[s],n.matched[r])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CI(t[n],e[n]))return!1;return!0}function CI(t,e){return cn(t)?Jd(t,e):cn(e)?Jd(e,t):t===e}function Jd(t,e){return cn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ns={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ji;(function(t){t.pop="pop",t.push="push"})(ji||(ji={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function PI(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AI(t)}const kI=/^[^#]+#/;function DI(t,e){return t.replace(kI,"#")+e}function OI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const tl=()=>({left:window.scrollX,top:window.scrollY});function NI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=OI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xd(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function VI(t,e){Pc.set(t,e)}function xI(t){const e=Pc.get(t);return Pc.delete(t),e}let MI=()=>location.protocol+"//"+location.host;function mg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Yd(c,"")}return Yd(n,t)+s+r}function LI(t,e,n,s){let r=[],i=[],o=null;const l=({state:g})=>{const y=mg(t,location),S=n.value,O=e.value;let D=0;if(g){if(n.value=y,e.value=g,o&&o===S){o=null;return}D=O?g.position-O.position:0}else s(y);r.forEach(N=>{N(n.value,S,{delta:D,type:ji.pop,direction:D?D>0?bi.forward:bi.back:bi.unknown})})};function c(){o=n.value}function u(g){r.push(g);const y=()=>{const S=r.indexOf(g);S>-1&&r.splice(S,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:tl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Zd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?tl():null}}function FI(t){const{history:e,location:n}=window,s={value:mg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:MI()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),r.value=u}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(c,u){const d=Se({},e.state,Zd(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function l(c,u){const d=Se({},r.value,e.state,{forward:c,scroll:tl()});i(d.current,d,!0);const p=Se({},Zd(s.value,c,null),{position:d.position+1},u);i(c,p,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function UI(t){t=PI(t);const e=FI(t),n=LI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Se({location:"",base:t,go:s,createHref:DI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $I(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}const _g=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function Or(t,e){return Se(new Error,{type:t,[_g]:!0},e)}function On(t,e){return t instanceof Error&&_g in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",BI={sensitive:!1,strict:!1,start:!0,end:!0},jI=/[.+*?^${}()[\]/\\]/g;function qI(t,e){const n=Se({},BI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(r+="/"),r+=g.value.replace(jI,"\\$&"),y+=40;else if(g.type===1){const{value:S,repeatable:O,optional:D,regexp:N}=g;i.push({name:S,repeatable:O,optional:D});const x=N||tf;if(x!==tf){y+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+M.message)}}let j=O?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(j=D&&u.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),r+=j,y+=20,D&&(y+=-8),O&&(y+=-20),x===".*"&&(y+=-50)}d.push(y)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",S=i[g-1];p[S.name]=y&&S.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:S,repeatable:O,optional:D}=y,N=S in u?u[S]:"";if(cn(N)&&!O)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=cn(N)?N.join("/"):N;if(!x)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=x}}return d||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function HI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yg(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=HI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(nf(s))return 1;if(nf(r))return-1}return r.length-s.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zI={type:0,value:""},KI=/[a-zA-Z0-9_]/;function WI(t){if(!t)return[[]];if(t==="/")return[[zI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:KI.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function GI(t,e,n){const s=qI(WI(t.path),n),r=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function QI(t,e){const n=[],s=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function r(p){return s.get(p)}function i(p,g,y){const S=!y,O=rf(p);O.aliasOf=y&&y.record;const D=af(e,p),N=[O];if("alias"in p){const M=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of M)N.push(rf(Se({},O,{components:y?y.record.components:O.components,path:re,aliasOf:y?y.record:O})))}let x,j;for(const M of N){const{path:re}=M;if(g&&re[0]!=="/"){const ne=g.record.path,w=ne[ne.length-1]==="/"?"":"/";M.path=g.record.path+(re&&w+re)}if(x=GI(M,g,D),y?y.alias.push(x):(j=j||x,j!==x&&j.alias.push(x),S&&p.name&&!of(x)&&o(p.name)),vg(x)&&c(x),O.children){const ne=O.children;for(let w=0;w<ne.length;w++)i(ne[w],x,y&&y.children[w])}y=y||x}return j?()=>{o(j)}:Ai}function o(p){if(gg(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=XI(p,n);n.splice(g,0,p),p.record.name&&!of(p)&&s.set(p.record.name,p)}function u(p,g){let y,S={},O,D;if("name"in p&&p.name){if(y=s.get(p.name),!y)throw Or(1,{location:p});D=y.record.name,S=Se(sf(g.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&sf(p.params,y.keys.map(j=>j.name))),O=y.stringify(S)}else if(p.path!=null)O=p.path,y=n.find(j=>j.re.test(O)),y&&(S=y.parse(O),D=y.record.name);else{if(y=g.name?s.get(g.name):n.find(j=>j.re.test(g.path)),!y)throw Or(1,{location:p,currentLocation:g});D=y.record.name,S=Se({},g.params,p.params),O=y.stringify(S)}const N=[];let x=y;for(;x;)N.unshift(x.record),x=x.parent;return{name:D,path:O,params:S,matched:N,meta:JI(N)}}t.forEach(p=>i(p));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function sf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:YI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function YI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JI(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function af(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function XI(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;yg(t,e[i])<0?s=i:n=i+1}const r=ZI(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function ZI(t){let e=t;for(;e=e.parent;)if(vg(e)&&yg(t,e)===0)return e}function vg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ew(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ug," "),o=i.indexOf("="),l=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(l in e){let u=e[l];cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function lf(t){let e="";for(let n in t){const s=t[n];if(n=EI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(s)?s.map(i=>i&&Sc(i)):[s&&Sc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=cn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const nw=Symbol(""),cf=Symbol(""),nl=Symbol(""),Eg=Symbol(""),kc=Symbol("");function li(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function as(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Or(4,{from:n,to:e})):g instanceof Error?c(g):$I(g)?c(Or(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Zl(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(lg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(as(d,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=cI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&as(y,n,s,o,l,r)()}))}}return i}function uf(t){const e=sn(nl),n=sn(Eg),s=kt(()=>{const c=Fe(t.to);return e.resolve(c)}),r=kt(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Dr.bind(null,d));if(g>-1)return g;const y=hf(c[u-2]);return u>1&&hf(d)===y&&p[p.length-1].path!==y?p.findIndex(Dr.bind(null,c[u-2])):g}),i=kt(()=>r.value>-1&&aw(n.params,s.value.params)),o=kt(()=>r.value>-1&&r.value===n.matched.length-1&&pg(n.params,s.value.params));function l(c={}){if(ow(c)){const u=e[Fe(t.replace)?"replace":"push"](Fe(t.to)).catch(Ai);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function sw(t){return t.length===1?t[0]:t}const rw=Bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:uf,setup(t,{slots:e}){const n=Wa(uf(t)),{options:s}=sn(nl),r=kt(()=>({[df(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[df(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&sw(e.default(n));return t.custom?i:Ta("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),iw=rw;function ow(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!cn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const df=(t,e,n)=>t??e??n,lw=Bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=sn(kc),r=kt(()=>t.route||s.value),i=sn(cf,0),o=kt(()=>{let u=Fe(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=kt(()=>r.value.matched[o.value]);Xo(cf,kt(()=>o.value+1)),Xo(nw,l),Xo(kc,r);const c=We();return Zo(()=>[c.value,l.value,t.name],([u,d,p],[g,y,S])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Dr(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=r.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return ff(n.default,{Component:g,route:u});const y=p.props[d],S=y?y===!0?u.params:typeof y=="function"?y(u):y:null,D=Ta(g,Se({},S,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return ff(n.default,{Component:D,route:u})||D}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cw=lw;function uw(t){const e=QI(t.routes,t),n=t.parseQuery||ew,s=t.stringifyQuery||lf,r=t.history,i=li(),o=li(),l=li(),c=dE(ns);let u=ns;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Jl.bind(null,L=>""+L),p=Jl.bind(null,II),g=Jl.bind(null,Bi);function y(L,J){let Y,Z;return gg(L)?(Y=e.getRecordMatcher(L),Z=J):Z=L,e.addRoute(Z,Y)}function S(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(L=>L.record)}function D(L){return!!e.getRecordMatcher(L)}function N(L,J){if(J=Se({},J||c.value),typeof L=="string"){const P=Xl(n,L,J.path),F=e.resolve({path:P.path},J),B=r.createHref(P.fullPath);return Se(P,F,{params:g(F.params),hash:Bi(P.hash),redirectedFrom:void 0,href:B})}let Y;if(L.path!=null)Y=Se({},L,{path:Xl(n,L.path,J.path).path});else{const P=Se({},L.params);for(const F in P)P[F]==null&&delete P[F];Y=Se({},L,{params:p(P)}),J.params=p(J.params)}const Z=e.resolve(Y,J),Ae=L.hash||"";Z.params=d(g(Z.params));const T=bI(s,Se({},L,{hash:vI(Ae),path:Z.path})),A=r.createHref(T);return Se({fullPath:T,hash:Ae,query:s===lf?tw(L.query):L.query||{}},Z,{redirectedFrom:void 0,href:A})}function x(L){return typeof L=="string"?Xl(n,L,c.value.path):Se({},L)}function j(L,J){if(u!==L)return Or(8,{from:J,to:L})}function M(L){return w(L)}function re(L){return M(Se(x(L),{replace:!0}))}function ne(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let Z=typeof Y=="function"?Y(L):Y;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),Se({query:L.query,hash:L.hash,params:Z.path!=null?{}:L.params},Z)}}function w(L,J){const Y=u=N(L),Z=c.value,Ae=L.state,T=L.force,A=L.replace===!0,P=ne(Y);if(P)return w(Se(x(P),{state:typeof P=="object"?Se({},Ae,P.state):Ae,force:T,replace:A}),J||Y);const F=Y;F.redirectedFrom=J;let B;return!T&&RI(s,Z,Y)&&(B=Or(16,{to:F,from:Z}),jt(Z,Z,!0,!1)),(B?Promise.resolve(B):v(F,Z)).catch(U=>On(U)?On(U,2)?U:Yt(U):ge(U,F,Z)).then(U=>{if(U){if(On(U,2))return w(Se({replace:A},x(U.to),{state:typeof U.to=="object"?Se({},Ae,U.to.state):Ae,force:T}),J||F)}else U=b(F,Z,!0,A,Ae);return R(F,Z,U),U})}function m(L,J){const Y=j(L,J);return Y?Promise.reject(Y):Promise.resolve()}function E(L){const J=Yn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function v(L,J){let Y;const[Z,Ae,T]=hw(L,J);Y=Zl(Z.reverse(),"beforeRouteLeave",L,J);for(const P of Z)P.leaveGuards.forEach(F=>{Y.push(as(F,L,J))});const A=m.bind(null,L,J);return Y.push(A),St(Y).then(()=>{Y=[];for(const P of i.list())Y.push(as(P,L,J));return Y.push(A),St(Y)}).then(()=>{Y=Zl(Ae,"beforeRouteUpdate",L,J);for(const P of Ae)P.updateGuards.forEach(F=>{Y.push(as(F,L,J))});return Y.push(A),St(Y)}).then(()=>{Y=[];for(const P of T)if(P.beforeEnter)if(cn(P.beforeEnter))for(const F of P.beforeEnter)Y.push(as(F,L,J));else Y.push(as(P.beforeEnter,L,J));return Y.push(A),St(Y)}).then(()=>(L.matched.forEach(P=>P.enterCallbacks={}),Y=Zl(T,"beforeRouteEnter",L,J,E),Y.push(A),St(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(as(P,L,J));return Y.push(A),St(Y)}).catch(P=>On(P,8)?P:Promise.reject(P))}function R(L,J,Y){l.list().forEach(Z=>E(()=>Z(L,J,Y)))}function b(L,J,Y,Z,Ae){const T=j(L,J);if(T)return T;const A=J===ns,P=pr?history.state:{};Y&&(Z||A?r.replace(L.fullPath,Se({scroll:A&&P&&P.scroll},Ae)):r.push(L.fullPath,Ae)),c.value=L,jt(L,J,Y,A),Yt()}let I;function De(){I||(I=r.listen((L,J,Y)=>{if(!dn.listening)return;const Z=N(L),Ae=ne(Z);if(Ae){w(Se(Ae,{replace:!0,force:!0}),Z).catch(Ai);return}u=Z;const T=c.value;pr&&VI(Xd(T.fullPath,Y.delta),tl()),v(Z,T).catch(A=>On(A,12)?A:On(A,2)?(w(Se(x(A.to),{force:!0}),Z).then(P=>{On(P,20)&&!Y.delta&&Y.type===ji.pop&&r.go(-1,!1)}).catch(Ai),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),ge(A,Z,T))).then(A=>{A=A||b(Z,T,!1),A&&(Y.delta&&!On(A,8)?r.go(-Y.delta,!1):Y.type===ji.pop&&On(A,20)&&r.go(-1,!1)),R(Z,T,A)}).catch(Ai)}))}let Xe=li(),$e=li(),ve;function ge(L,J,Y){Yt(L);const Z=$e.list();return Z.length?Z.forEach(Ae=>Ae(L,J,Y)):console.error(L),Promise.reject(L)}function Ot(){return ve&&c.value!==ns?Promise.resolve():new Promise((L,J)=>{Xe.add([L,J])})}function Yt(L){return ve||(ve=!L,De(),Xe.list().forEach(([J,Y])=>L?Y(L):J()),Xe.reset()),L}function jt(L,J,Y,Z){const{scrollBehavior:Ae}=t;if(!pr||!Ae)return Promise.resolve();const T=!Y&&xI(Xd(L.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return Qa().then(()=>Ae(L,J,T)).then(A=>A&&NI(A)).catch(A=>ge(A,L,J))}const Be=L=>r.go(L);let je;const Yn=new Set,dn={currentRoute:c,listening:!0,addRoute:y,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:O,resolve:N,options:t,push:M,replace:re,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:$e.add,isReady:Ot,install(L){const J=this;L.component("RouterLink",iw),L.component("RouterView",cw),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(c)}),pr&&!je&&c.value===ns&&(je=!0,M(r.location).catch(Ae=>{}));const Y={};for(const Ae in ns)Object.defineProperty(Y,Ae,{get:()=>c.value[Ae],enumerable:!0});L.provide(nl,J),L.provide(Eg,pm(Y)),L.provide(kc,c);const Z=L.unmount;Yn.add(L),L.unmount=function(){Yn.delete(L),Yn.size<1&&(u=ns,I&&I(),I=null,c.value=ns,je=!1,ve=!1),Z()}}};function St(L){return L.reduce((J,Y)=>J.then(()=>E(Y)),Promise.resolve())}return dn}function hw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Dr(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Dr(u,c))||r.push(c))}return[n,s,r]}function Iu(){return sn(nl)}var dw=Object.defineProperty,pf=Object.getOwnPropertySymbols,fw=Object.prototype.hasOwnProperty,pw=Object.prototype.propertyIsEnumerable,mf=(t,e,n)=>e in t?dw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Tg=(t,e)=>{for(var n in e||(e={}))fw.call(e,n)&&mf(t,n,e[n]);if(pf)for(var n of pf(e))pw.call(e,n)&&mf(t,n,e[n]);return t},sl=t=>typeof t=="function",rl=t=>typeof t=="string",Ig=t=>rl(t)&&t.trim().length>0,mw=t=>typeof t=="number",Fs=t=>typeof t>"u",qi=t=>typeof t=="object"&&t!==null,gw=t=>yn(t,"tag")&&Ig(t.tag),wg=t=>window.TouchEvent&&t instanceof TouchEvent,Ag=t=>yn(t,"component")&&bg(t.component),_w=t=>sl(t)||qi(t),bg=t=>!Fs(t)&&(rl(t)||_w(t)||Ag(t)),gf=t=>qi(t)&&["height","width","right","left","top","bottom"].every(e=>mw(t[e])),yn=(t,e)=>(qi(t)||sl(t))&&e in t,yw=(t=>()=>t++)(0);function ec(t){return wg(t)?t.targetTouches[0].clientX:t.clientX}function _f(t){return wg(t)?t.targetTouches[0].clientY:t.clientY}var vw=t=>{Fs(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},ao=t=>Ag(t)?ao(t.component):gw(t)?Bt({render(){return t}}):typeof t=="string"?t:Re(Fe(t)),Ew=t=>{if(typeof t=="string")return t;const e=yn(t,"props")&&qi(t.props)?t.props:{},n=yn(t,"listeners")&&qi(t.listeners)?t.listeners:{};return{component:ao(t),props:e,listeners:n}},Tw=()=>typeof window<"u",wu=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},Iw=t=>["on","off","emit"].every(e=>yn(t,e)&&sl(t[e])),Mt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Mt||(Mt={}));var Hi;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Hi||(Hi={}));var Lt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Lt||(Lt={}));var en="Vue-Toastification",Zt={type:{type:String,default:Mt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Rg={type:Zt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ra={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Zt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Dc={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Cg={transition:{type:[Object,String],default:`${en}__bounce`}},ww={position:{type:String,default:Hi.TOP_RIGHT},draggable:Zt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Zt.trueBoolean,pauseOnHover:Zt.trueBoolean,closeOnClick:Zt.trueBoolean,timeout:Dc.timeout,hideProgressBar:Dc.hideProgressBar,toastClassName:Zt.classNames,bodyClassName:Zt.classNames,icon:Rg.customIcon,closeButton:ra.component,closeButtonClassName:ra.classNames,showCloseButtonOnHover:ra.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new wu}},Aw={id:{type:[String,Number],required:!0,default:0},type:Zt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},bw={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Zt.trueBoolean,maxToasts:{type:Number,default:20},transition:Cg.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Zt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},jn={CORE_TOAST:ww,TOAST:Aw,CONTAINER:bw,PROGRESS_BAR:Dc,ICON:Rg,TRANSITION:Cg,CLOSE_BUTTON:ra},Sg=Bt({name:"VtProgressBar",props:jn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${en}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function Rw(t,e){return ce(),Ie("div",{style:Hs(t.style),class:an(t.cpClass)},null,6)}Sg.render=Rw;var Cw=Sg,Pg=Bt({name:"VtCloseButton",props:jn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?ao(this.component):"button"},classes(){const t=[`${en}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),Sw=yt(" × ");function Pw(t,e){return ce(),Rt(io(t.buttonComponent),Za({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Zs(()=>[Sw]),_:1},16,["aria-label","class"])}Pg.render=Pw;var kw=Pg,kg={},Dw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ow=C("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),Nw=[Ow];function Vw(t,e){return ce(),Ie("svg",Dw,Nw)}kg.render=Vw;var xw=kg,Dg={},Mw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Lw=C("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Fw=[Lw];function Uw(t,e){return ce(),Ie("svg",Mw,Fw)}Dg.render=Uw;var yf=Dg,Og={},$w={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Bw=C("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),jw=[Bw];function qw(t,e){return ce(),Ie("svg",$w,jw)}Og.render=qw;var Hw=Og,Ng={},zw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Kw=C("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Ww=[Kw];function Gw(t,e){return ce(),Ie("svg",zw,Ww)}Ng.render=Gw;var Qw=Ng,Vg=Bt({name:"VtIcon",props:jn.ICON,computed:{customIconChildren(){return yn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return rl(this.customIcon)?this.trimValue(this.customIcon):yn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return yn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:bg(this.customIcon)?ao(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Mt.DEFAULT]:yf,[Mt.INFO]:yf,[Mt.SUCCESS]:xw,[Mt.ERROR]:Qw,[Mt.WARNING]:Hw}[this.type]},iconClasses(){const t=[`${en}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Ig(t)?t.trim():e}}});function Yw(t,e){return ce(),Rt(io(t.component),{class:an(t.iconClasses)},{default:Zs(()=>[yt(Wt(t.customIconChildren),1)]),_:1},8,["class"])}Vg.render=Yw;var Jw=Vg,xg=Bt({name:"VtToast",components:{ProgressBar:Cw,CloseButton:kw,Icon:Jw},inheritAttrs:!1,props:Object.assign({},jn.CORE_TOAST,jn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${en}__toast`,`${en}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${en}__toast--rtl`),t},bodyClasses(){return[`${en}__toast-${rl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return gf(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:yn,getVueComponentFromObj:ao,closeToast(){this.eventBus.emit(Lt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:ec(t),y:_f(t)},this.dragStart=ec(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:ec(t),y:_f(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,gf(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Xw=["role"];function Zw(t,e){const n=ms("Icon"),s=ms("CloseButton"),r=ms("ProgressBar");return ce(),Ie("div",{class:an(t.classes),style:Hs(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(ce(),Rt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):js("v-if",!0),C("div",{role:t.accessibility.toastRole||"alert",class:an(t.bodyClasses)},[typeof t.content=="string"?(ce(),Ie(Ue,{key:0},[yt(Wt(t.content),1)],2112)):(ce(),Rt(io(t.getVueComponentFromObj(t.content)),Za({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},LE(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Xw),t.closeButton?(ce(),Rt(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:Eu(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):js("v-if",!0),t.timeout?(ce(),Rt(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):js("v-if",!0)],38)}xg.render=Zw;var e0=xg,Mg=Bt({name:"VtTransition",props:jn.TRANSITION,emits:["leave"],methods:{hasProp:yn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function t0(t,e){return ce(),Rt(QT,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Zs(()=>[ME(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Mg.render=t0;var n0=Mg,Lg=Bt({name:"VueToastification",devtools:{hide:!0},components:{Toast:e0,VtTransition:n0},props:Object.assign({},jn.CORE_TOAST,jn.CONTAINER,jn.TRANSITION),data(){return{count:0,positions:Object.values(Hi),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Lt.ADD,this.addToast),t.on(Lt.CLEAR,this.clearToasts),t.on(Lt.DISMISS,this.dismissToast),t.on(Lt.UPDATE,this.updateToast),t.on(Lt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){sl(t)&&(t=await t()),vw(this.$el),t.appendChild(this.$el)},setToast(t){Fs(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=Ew(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Fs(e)&&!Fs(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Fs(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${en}__container`,t].concat(this.defaults.containerClassName)}}});function s0(t,e){const n=ms("Toast"),s=ms("VtTransition");return ce(),Ie("div",null,[(ce(!0),Ie(Ue,null,Mn(t.positions,r=>(ce(),Ie("div",{key:r},[we(s,{transition:t.defaults.transition,class:an(t.getClasses(r))},{default:Zs(()=>[(ce(!0),Ie(Ue,null,Mn(t.getPositionToasts(r),i=>(ce(),Rt(n,Za({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Lg.render=s0;var r0=Lg,vf=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new wu;e&&Qa(()=>{const i=ag(r0,Tg({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(Fs(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${en}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const l=Object.assign({},{id:yw(),type:Mt.DEFAULT},o,{content:i});return n.emit(Lt.ADD,l),l.id};s.clear=()=>n.emit(Lt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Lt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Lt.DISMISS,i)};function r(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(Lt.UPDATE,{id:i,options:u,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Mt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Mt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Mt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Mt.WARNING})),s},i0=()=>{const t=()=>console.warn(`[${en}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Fg(t){return Tw()?Iw(t)?vf({eventBus:t},!1):vf(t,!0):i0()}var Ug=Symbol("VueToastification"),$g=new wu,o0=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Fg(Tg({eventBus:$g},e));t.provide(Ug,n)},Au=t=>{const e=Xm()?sn(Ug,void 0):void 0;return e||Fg($g)},a0=o0;const l0={id:"app"},c0=Bt({__name:"App",setup(t){return(e,n)=>{const s=ms("router-view");return ce(),Ie("div",l0,[we(s)])}}}),tc="/logo.png";var Ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},u0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),s.push(n[d],n[p],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):u0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new h0;const g=i<<2|l>>4;if(s.push(g),u!==64){const y=l<<4&240|u>>2;if(s.push(y),p!==64){const S=u<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d0=function(t){const e=Bg(t);return jg.encodeByteArray(e,!0)},wa=function(t){return d0(t).replace(/\./g,"")},qg=function(t){try{return jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=()=>f0().__FIREBASE_DEFAULTS__,m0=()=>{if(typeof process>"u"||typeof Ef>"u")return;const t=Ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},g0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qg(t[1]);return e&&JSON.parse(e)},il=()=>{try{return p0()||m0()||g0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>{var e,n;return(n=(e=il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zg=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kg=()=>{var t;return(t=il())===null||t===void 0?void 0:t.config},Wg=t=>{var e;return(e=il())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function v0(){var t;const e=(t=il())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function E0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function T0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w0(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A0(){return!v0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b0(){try{return typeof indexedDB=="object"}catch{return!1}}function R0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=C0,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?S0(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,l,s)}}function S0(t,e){return t.replace(P0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const P0=/\{\$([^}]+)}/g;function k0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Tf(i)&&Tf(o)){if(!Aa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function D0(t,e){const n=new O0(t,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");N0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=nc),r.error===void 0&&(r.error=nc),r.complete===void 0&&(r.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M0(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:x0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x0(t){return t===Ms?void 0:t}function M0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const F0={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},U0=ye.INFO,$0={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},B0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=U0,this._logHandler=B0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const j0=(t,e)=>e.some(n=>t instanceof n);let If,wf;function q0(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H0(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qg=new WeakMap,Oc=new WeakMap,Yg=new WeakMap,sc=new WeakMap,Ru=new WeakMap;function z0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qg.set(n,t)}).catch(()=>{}),Ru.set(e,t),e}function K0(t){if(Oc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let Nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W0(t){Nc=t(Nc)}function G0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rc(this),e,...n);return Yg.set(s,e.sort?e.sort():[e]),gs(s)}:H0().includes(t)?function(...e){return t.apply(rc(this),e),gs(Qg.get(this))}:function(...e){return gs(t.apply(rc(this),e))}}function Q0(t){return typeof t=="function"?G0(t):(t instanceof IDBTransaction&&K0(t),j0(t,q0())?new Proxy(t,Nc):t)}function gs(t){if(t instanceof IDBRequest)return z0(t);if(sc.has(t))return sc.get(t);const e=Q0(t);return e!==t&&(sc.set(t,e),Ru.set(e,t)),e}const rc=t=>Ru.get(t);function Y0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=gs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gs(o.result),c.oldVersion,c.newVersion,gs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const J0=["get","getKey","getAll","getAllKeys","count"],X0=["put","add","delete","clear"],ic=new Map;function Af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=X0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||J0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return ic.set(e,i),i}W0(t=>({...t,get:(e,n,s)=>Af(e,n)||t.get(e,n,s),has:(e,n)=>!!Af(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",bf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new bu("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",sA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",oA="@firebase/auth",aA="@firebase/auth-compat",lA="@firebase/database",cA="@firebase/data-connect",uA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",_A="@firebase/performance",yA="@firebase/performance-compat",vA="@firebase/remote-config",EA="@firebase/remote-config-compat",TA="@firebase/storage",IA="@firebase/storage-compat",wA="@firebase/firestore",AA="@firebase/vertexai-preview",bA="@firebase/firestore-compat",RA="firebase",CA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",SA={[Vc]:"fire-core",[tA]:"fire-core-compat",[sA]:"fire-analytics",[nA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[oA]:"fire-auth",[aA]:"fire-auth-compat",[lA]:"fire-rtdb",[cA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[_A]:"fire-perf",[yA]:"fire-perf-compat",[vA]:"fire-rc",[EA]:"fire-rc-compat",[TA]:"fire-gcs",[IA]:"fire-gcs-compat",[wA]:"fire-fst",[bA]:"fire-fst-compat",[AA]:"fire-vertex","fire-js":"fire-js",[RA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map,PA=new Map,Mc=new Map;function Rf(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Mc.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of ba.values())Rf(n,t);for(const n of PA.values())Rf(n,t);return!0}function ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_s=new lo("app","Firebase",kA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _s.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=CA;function Jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw _s.create("bad-app-name",{appName:String(r)});if(n||(n=Kg()),!n)throw _s.create("no-options");const i=ba.get(r);if(i){if(Aa(n,i.options)&&Aa(s,i.config))return i;throw _s.create("duplicate-app",{appName:r})}const o=new L0(r);for(const c of Mc.values())o.addComponent(c);const l=new DA(n,s,o);return ba.set(r,l),l}function Cu(t=xc){const e=ba.get(t);if(!e&&t===xc&&Kg())return Jg();if(!e)throw _s.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let r=(s=SA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}Ks(new Is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="firebase-heartbeat-database",NA=1,zi="firebase-heartbeat-store";let oc=null;function Xg(){return oc||(oc=Y0(OA,NA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw _s.create("idb-open",{originalErrorMessage:t.message})})),oc}async function VA(t){try{const n=(await Xg()).transaction(zi),s=await n.objectStore(zi).get(Zg(t));return await n.done,s}catch(e){if(e instanceof Cn)zn.warn(e.message);else{const n=_s.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Cf(t,e){try{const s=(await Xg()).transaction(zi,"readwrite");await s.objectStore(zi).put(e,Zg(t)),await s.done}catch(n){if(n instanceof Cn)zn.warn(n.message);else{const s=_s.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(s.message)}}}function Zg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1024,MA=30*24*60*60*1e3;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=MA}),this._storage.overwrite(this._heartbeatsCache))}catch(s){zn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sf(),{heartbeatsToSend:s,unsentEntries:r}=FA(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function Sf(){return new Date().toISOString().substring(0,10)}function FA(t,e=xA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class UA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b0()?R0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pf(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){Ks(new Is("platform-logger",e=>new Z0(e),"PRIVATE")),Ks(new Is("heartbeat",e=>new LA(e),"PRIVATE")),vn(Vc,bf,t),vn(Vc,bf,"esm2017"),vn("fire-js","")}$A("");var BA="firebase",jA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(BA,jA,"app");function Su(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=e_,t_=new lo("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new bu("@firebase/auth");function HA(t,...e){Ra.logLevel<=ye.WARN&&Ra.warn(`Auth (${er}): ${t}`,...e)}function ia(t,...e){Ra.logLevel<=ye.ERROR&&Ra.error(`Auth (${er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Pu(t,...e)}function En(t,...e){return Pu(t,...e)}function n_(t,e,n){const s=Object.assign(Object.assign({},qA()),{[e]:n});return new lo("auth","Firebase",s).create(e,{appName:t.name})}function ys(t){return n_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return t_.create(t,...e)}function ue(t,e,...n){if(!t)throw Pu(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function Kn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zA(){return kf()==="http:"||kf()==="https:"}function kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||T0()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=y0()||I0()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new uo(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rs(t,e,n,s,r={}){return r_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return E0()||(u.referrerPolicy="no-referrer"),s_.fetch()(i_(t,t.config.apiHost,n,l),u)})}async function r_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},GA),e);try{const r=new JA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw n_(t,d,u);un(t,d)}}catch(r){if(r instanceof Cn)throw r;un(t,"network-request-failed",{message:String(r)})}}async function al(t,e,n,s,r={}){const i=await Rs(t,e,n,s,r);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function i_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ku(t.config,r):`${t.config.apiScheme}://${r}`}function YA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(En(this.auth,"network-request-failed")),QA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=En(t,e,s);return r.customData._tokenResponse=n,r}function Df(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZA(t,e){return Rs(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function o_(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tb(t,e=!1){const n=Ke(t),s=await n.getIdToken(e),r=Du(s);ue(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ri(ac(r.auth_time)),issuedAtTime:Ri(ac(r.iat)),expirationTime:Ri(ac(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function Du(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const r=qg(n);return r?JSON.parse(r):(ia("Failed to decode base64 JWT payload"),null)}catch(r){return ia("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Of(t){const e=Du(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cn&&nb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ki(t,o_(n,{idToken:s}));ue(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?a_(i.providerUserInfo):[],l=ib(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function rb(t){const e=Ke(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ib(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function a_(t){return t.map(e=>{var{providerId:n}=e,s=Su(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){const n=await r_(t,{},async()=>{const s=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=i_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",s_.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ab(t,e){return Rs(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ob(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new br;return s&&(ue(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ue(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tb(this,e)}reload(){return rb(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ys(this.auth));const e=await this.getIdToken();return await Ki(this,eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,d;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:M,isAnonymous:re,providerData:ne,stsTokenManager:w}=n;ue(j&&w,e,"internal-error");const m=br.fromJSON(this.name,w);ue(typeof j=="string",e,"internal-error"),ss(p,e.name),ss(g,e.name),ue(typeof M=="boolean",e,"internal-error"),ue(typeof re=="boolean",e,"internal-error"),ss(y,e.name),ss(S,e.name),ss(O,e.name),ss(D,e.name),ss(N,e.name),ss(x,e.name);const E=new Un({uid:j,auth:e,email:g,emailVerified:M,displayName:p,isAnonymous:re,photoURL:S,phoneNumber:y,tenantId:O,stsTokenManager:m,createdAt:N,lastLoginAt:x});return ne&&Array.isArray(ne)&&(E.providerData=ne.map(v=>Object.assign({},v))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,s=!1){const r=new br;r.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ue(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?a_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new br;l.updateFromIdToken(s);const c=new Un({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Fc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;function $n(t){Kn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l_.type="NONE";const Vf=l_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=oa(this.userKey,r.apiKey,i),this.fullPersistenceKey=oa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rr($n(Vf),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||$n(Vf);const o=oa(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Un._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Rr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(u_(e))return"Safari";if((e.includes("chrome/")||h_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function c_(t=It()){return/firefox\//i.test(t)}function u_(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h_(t=It()){return/crios\//i.test(t)}function d_(t=It()){return/iemobile/i.test(t)}function f_(t=It()){return/android/i.test(t)}function p_(t=It()){return/blackberry/i.test(t)}function m_(t=It()){return/webos/i.test(t)}function Ou(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lb(t=It()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cb(){return w0()&&document.documentMode===10}function g_(t=It()){return Ou(t)||f_(t)||m_(t)||p_(t)||/windows phone/i.test(t)||d_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e=[]){let n;switch(t){case"Browser":n=xf(It());break;case"Worker":n=`${xf(It())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e={}){return Rs(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=6;class fb{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:db,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),s=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ys(this));const n=e?Ke(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ys(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ys(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hb(this),n=new fb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ab(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jr(t){return Ke(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=D0(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mb(t){ll=t}function y_(t){return ll.loadJS(t)}function gb(){return ll.recaptchaEnterpriseScript}function _b(){return ll.gapiScript}function yb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vb="recaptcha-enterprise",Eb="NO_RECAPTCHA";class Tb{constructor(e){this.type=vb,this.auth=jr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new XA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Df(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Eb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Df(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gb();c.length!==0&&(c+=l),y_(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Lf(t,e,n,s=!1){const r=new Tb(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ff(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Lf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Lf(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t,e){const n=ol(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Aa(i,e??{}))return r;un(r,"already-initialized")}return n.initialize({options:e})}function wb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ab(t,e,n){const s=jr(t);ue(s._canInitEmulator,s,"emulator-config-failed"),ue(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=v_(e),{host:o,port:l}=bb(e),c=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),Rb()}function v_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bb(t){const e=v_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Uf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Uf(o)}}}function Uf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function Cb(t,e){return Rs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){return al(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function kb(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Nu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ff(e,n,"signInWithPassword",Sb);case"emailLink":return Pb(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ff(e,s,"signUpPassword",Cb);case"emailLink":return kb(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="http://localhost";class Ws extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Su(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ws(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:Db,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nb(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,s=di(fi(t)).deep_link_id;return(s?di(fi(s)).link:null)||s||n||e||t}class Vu{constructor(e){var n,s,r,i,o,l;const c=di(fi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,p=Ob((r=c.mode)!==null&&r!==void 0?r:null);ue(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Nb(e);try{return new Vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vu.parseLink(n);return ue(s,"argument-error"),Wi._fromEmailAndCode(e,s.code,s.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends ho{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return us.credential(n,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends ho{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ho{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Un._fromIdTokenResponse(e,s,r),o=$f(s);return new Nr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=$f(s);return new Nr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Cn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Sa(e,n,s,r)}}function T_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,s):i})}async function Vb(t,e,n=!1){const s=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e,n=!1){const{auth:s}=t;if(Ln(s.app))return Promise.reject(ys(s));const r="reauthenticate";try{const i=await Ki(t,T_(s,r,e,t),n);ue(i.idToken,s,"internal-error");const o=Du(i.idToken);ue(o,s,"internal-error");const{sub:l}=o;return ue(t.uid===l,s,"user-mismatch"),Nr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e,n=!1){if(Ln(t.app))return Promise.reject(ys(t));const s="signIn",r=await T_(t,s,e),i=await Nr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Mb(t,e){return I_(jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(t){const e=jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Fb(t,e,n){return Ln(t.app)?Promise.reject(ys(t)):Mb(Ke(t),qr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Lb(t),s})}function Ub(t,e,n,s){return Ke(t).onIdTokenChanged(e,n,s)}function $b(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function Bb(t,e,n,s){return Ke(t).onAuthStateChanged(e,n,s)}function jb(t){return Ke(t).signOut()}const Pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=1e3,Hb=10;class A_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);cb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const zb=A_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const R_=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new cl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Kb(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=xu("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function Gb(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function Qb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jb(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebaseLocalStorageDb",Xb=1,ka="firebaseLocalStorage",P_="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function Zb(){const t=indexedDB.deleteDatabase(S_);return new fo(t).toPromise()}function Uc(){const t=indexedDB.open(S_,Xb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ka,{keyPath:P_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ka)?e(s):(s.close(),await Zb(),e(await Uc()))})})}async function Bf(t,e,n){const s=ul(t,!0).put({[P_]:e,value:n});return new fo(s).toPromise()}async function eR(t,e){const n=ul(t,!1).get(e),s=await new fo(n).toPromise();return s===void 0?null:s.value}function jf(t,e){const n=ul(t,!0).delete(e);return new fo(n).toPromise()}const tR=800,nR=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(Jb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qb(),!this.activeServiceWorker)return;this.sender=new Wb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await Bf(e,Pa,"1"),await jf(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ul(r,!1).getAll();return new fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const sR=k_;new uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e){return e?$n(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iR(t){return I_(t.auth,new Mu(t),t.bypassAuthState)}function oR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),xb(n,new Mu(t),t.bypassAuthState)}async function aR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Vb(n,new Mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:un(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new uo(2e3,1e4);class yr extends D_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="pendingRedirect",aa=new Map;class uR extends D_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const s=await hR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hR(t,e){const n=pR(e),s=fR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function dR(t,e){aa.set(t._key(),e)}function fR(t){return $n(t._redirectPersistence)}function pR(t){return oa(cR,t.config.apiKey,t.name)}async function mR(t,e,n=!1){if(Ln(t.app))return Promise.reject(ys(t));const s=jr(t),r=rR(s,e),o=await new uR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!O_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(En(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qf(e))}saveEventToCache(e){this.cachedEventUids.add(qf(e)),this.lastProcessedEventTime=Date.now()}}function qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function IR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vR(t);for(const n of e)try{if(wR(n))return}catch{}un(t,"unauthorized-domain")}function wR(t){const e=Lc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TR.test(n))return!1;if(ER.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new uo(3e4,6e4);function Hf(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var s,r,i;function o(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(En(t,"network-request-failed"))},timeout:AR.get()})}if(!((r=(s=Tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const l=yb("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},y_(`${_b()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw la=null,e})}let la=null;function RR(t){return la=la||bR(t),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new uo(5e3,15e3),SR="__/auth/iframe",PR="emulator/auth/iframe",kR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OR(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,PR):`https://${t.config.authDomain}/${SR}`,s={apiKey:e.apiKey,appName:t.name,v:er},r=DR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${co(s).slice(1)}`}async function NR(t){const e=await RR(t),n=Tn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:OR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},CR.get());function c(){Tn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xR=500,MR=600,LR="_blank",FR="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UR(t,e,n,s=xR,r=MR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},VR),{width:s.toString(),height:r.toString(),top:i,left:o}),u=It().toLowerCase();n&&(l=h_(u)?LR:n),c_(u)&&(e=e||FR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(lb(u)&&l!=="_self")return $R(e||"",l),new zf(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new zf(p)}function $R(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="__/auth/handler",jR="emulator/auth/handler",qR=encodeURIComponent("fac");async function Kf(t,e,n,s,r,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:er,eventId:r};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",k0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ho){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${qR}=${encodeURIComponent(c)}`:"";return`${HR(t)}?${co(l).slice(1)}${u}`}function HR({config:t}){return t.emulator?ku(t,jR):`https://${t.authDomain}/${BR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R_,this._completeRedirectFn=mR,this._overrideRedirectResult=dR}async _openPopup(e,n,s,r){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kf(e,n,s,Lc(),r);return UR(e,o,xu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Kf(e,n,s,Lc(),r);return Gb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NR(e),s=new _R(e);return n.register("authEvent",r=>(ue(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lc,{type:lc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[lc];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||u_()||Ou()}}const KR=zR;var Wf="@firebase/auth",Gf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QR(t){Ks(new Is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(t)},u=new pb(s,r,i,c);return wb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new Is("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(s=>new WR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Wf,Gf,GR(t)),vn(Wf,Gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=5*60,JR=Wg("authIdTokenMaxAge")||YR;let Qf=null;const XR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>JR)return;const r=n==null?void 0:n.token;Qf!==r&&(Qf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ZR(t=Cu()){const e=ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ib(t,{popupRedirectResolver:KR,persistence:[sR,zb,R_]}),s=Wg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=XR(i.toString());$b(n,o,()=>o(n.currentUser)),Ub(n,l=>o(l))}}const r=Hg("auth");return r&&Ab(n,`http://${r}`),n}function eC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=En("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",eC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QR("Browser");var Yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qs,N_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function E(){}E.prototype=m.prototype,w.D=m.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(v,R,b){for(var I=Array(arguments.length-2),De=2;De<arguments.length;De++)I[De-2]=arguments[De];return m.prototype[R].apply(v,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,m,E){E||(E=0);var v=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)v[R]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(R=0;16>R;++R)v[R]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=w.g[0],E=w.g[1],R=w.g[2];var b=w.g[3],I=m+(b^E&(R^b))+v[0]+3614090360&4294967295;m=E+(I<<7&4294967295|I>>>25),I=b+(R^m&(E^R))+v[1]+3905402710&4294967295,b=m+(I<<12&4294967295|I>>>20),I=R+(E^b&(m^E))+v[2]+606105819&4294967295,R=b+(I<<17&4294967295|I>>>15),I=E+(m^R&(b^m))+v[3]+3250441966&4294967295,E=R+(I<<22&4294967295|I>>>10),I=m+(b^E&(R^b))+v[4]+4118548399&4294967295,m=E+(I<<7&4294967295|I>>>25),I=b+(R^m&(E^R))+v[5]+1200080426&4294967295,b=m+(I<<12&4294967295|I>>>20),I=R+(E^b&(m^E))+v[6]+2821735955&4294967295,R=b+(I<<17&4294967295|I>>>15),I=E+(m^R&(b^m))+v[7]+4249261313&4294967295,E=R+(I<<22&4294967295|I>>>10),I=m+(b^E&(R^b))+v[8]+1770035416&4294967295,m=E+(I<<7&4294967295|I>>>25),I=b+(R^m&(E^R))+v[9]+2336552879&4294967295,b=m+(I<<12&4294967295|I>>>20),I=R+(E^b&(m^E))+v[10]+4294925233&4294967295,R=b+(I<<17&4294967295|I>>>15),I=E+(m^R&(b^m))+v[11]+2304563134&4294967295,E=R+(I<<22&4294967295|I>>>10),I=m+(b^E&(R^b))+v[12]+1804603682&4294967295,m=E+(I<<7&4294967295|I>>>25),I=b+(R^m&(E^R))+v[13]+4254626195&4294967295,b=m+(I<<12&4294967295|I>>>20),I=R+(E^b&(m^E))+v[14]+2792965006&4294967295,R=b+(I<<17&4294967295|I>>>15),I=E+(m^R&(b^m))+v[15]+1236535329&4294967295,E=R+(I<<22&4294967295|I>>>10),I=m+(R^b&(E^R))+v[1]+4129170786&4294967295,m=E+(I<<5&4294967295|I>>>27),I=b+(E^R&(m^E))+v[6]+3225465664&4294967295,b=m+(I<<9&4294967295|I>>>23),I=R+(m^E&(b^m))+v[11]+643717713&4294967295,R=b+(I<<14&4294967295|I>>>18),I=E+(b^m&(R^b))+v[0]+3921069994&4294967295,E=R+(I<<20&4294967295|I>>>12),I=m+(R^b&(E^R))+v[5]+3593408605&4294967295,m=E+(I<<5&4294967295|I>>>27),I=b+(E^R&(m^E))+v[10]+38016083&4294967295,b=m+(I<<9&4294967295|I>>>23),I=R+(m^E&(b^m))+v[15]+3634488961&4294967295,R=b+(I<<14&4294967295|I>>>18),I=E+(b^m&(R^b))+v[4]+3889429448&4294967295,E=R+(I<<20&4294967295|I>>>12),I=m+(R^b&(E^R))+v[9]+568446438&4294967295,m=E+(I<<5&4294967295|I>>>27),I=b+(E^R&(m^E))+v[14]+3275163606&4294967295,b=m+(I<<9&4294967295|I>>>23),I=R+(m^E&(b^m))+v[3]+4107603335&4294967295,R=b+(I<<14&4294967295|I>>>18),I=E+(b^m&(R^b))+v[8]+1163531501&4294967295,E=R+(I<<20&4294967295|I>>>12),I=m+(R^b&(E^R))+v[13]+2850285829&4294967295,m=E+(I<<5&4294967295|I>>>27),I=b+(E^R&(m^E))+v[2]+4243563512&4294967295,b=m+(I<<9&4294967295|I>>>23),I=R+(m^E&(b^m))+v[7]+1735328473&4294967295,R=b+(I<<14&4294967295|I>>>18),I=E+(b^m&(R^b))+v[12]+2368359562&4294967295,E=R+(I<<20&4294967295|I>>>12),I=m+(E^R^b)+v[5]+4294588738&4294967295,m=E+(I<<4&4294967295|I>>>28),I=b+(m^E^R)+v[8]+2272392833&4294967295,b=m+(I<<11&4294967295|I>>>21),I=R+(b^m^E)+v[11]+1839030562&4294967295,R=b+(I<<16&4294967295|I>>>16),I=E+(R^b^m)+v[14]+4259657740&4294967295,E=R+(I<<23&4294967295|I>>>9),I=m+(E^R^b)+v[1]+2763975236&4294967295,m=E+(I<<4&4294967295|I>>>28),I=b+(m^E^R)+v[4]+1272893353&4294967295,b=m+(I<<11&4294967295|I>>>21),I=R+(b^m^E)+v[7]+4139469664&4294967295,R=b+(I<<16&4294967295|I>>>16),I=E+(R^b^m)+v[10]+3200236656&4294967295,E=R+(I<<23&4294967295|I>>>9),I=m+(E^R^b)+v[13]+681279174&4294967295,m=E+(I<<4&4294967295|I>>>28),I=b+(m^E^R)+v[0]+3936430074&4294967295,b=m+(I<<11&4294967295|I>>>21),I=R+(b^m^E)+v[3]+3572445317&4294967295,R=b+(I<<16&4294967295|I>>>16),I=E+(R^b^m)+v[6]+76029189&4294967295,E=R+(I<<23&4294967295|I>>>9),I=m+(E^R^b)+v[9]+3654602809&4294967295,m=E+(I<<4&4294967295|I>>>28),I=b+(m^E^R)+v[12]+3873151461&4294967295,b=m+(I<<11&4294967295|I>>>21),I=R+(b^m^E)+v[15]+530742520&4294967295,R=b+(I<<16&4294967295|I>>>16),I=E+(R^b^m)+v[2]+3299628645&4294967295,E=R+(I<<23&4294967295|I>>>9),I=m+(R^(E|~b))+v[0]+4096336452&4294967295,m=E+(I<<6&4294967295|I>>>26),I=b+(E^(m|~R))+v[7]+1126891415&4294967295,b=m+(I<<10&4294967295|I>>>22),I=R+(m^(b|~E))+v[14]+2878612391&4294967295,R=b+(I<<15&4294967295|I>>>17),I=E+(b^(R|~m))+v[5]+4237533241&4294967295,E=R+(I<<21&4294967295|I>>>11),I=m+(R^(E|~b))+v[12]+1700485571&4294967295,m=E+(I<<6&4294967295|I>>>26),I=b+(E^(m|~R))+v[3]+2399980690&4294967295,b=m+(I<<10&4294967295|I>>>22),I=R+(m^(b|~E))+v[10]+4293915773&4294967295,R=b+(I<<15&4294967295|I>>>17),I=E+(b^(R|~m))+v[1]+2240044497&4294967295,E=R+(I<<21&4294967295|I>>>11),I=m+(R^(E|~b))+v[8]+1873313359&4294967295,m=E+(I<<6&4294967295|I>>>26),I=b+(E^(m|~R))+v[15]+4264355552&4294967295,b=m+(I<<10&4294967295|I>>>22),I=R+(m^(b|~E))+v[6]+2734768916&4294967295,R=b+(I<<15&4294967295|I>>>17),I=E+(b^(R|~m))+v[13]+1309151649&4294967295,E=R+(I<<21&4294967295|I>>>11),I=m+(R^(E|~b))+v[4]+4149444226&4294967295,m=E+(I<<6&4294967295|I>>>26),I=b+(E^(m|~R))+v[11]+3174756917&4294967295,b=m+(I<<10&4294967295|I>>>22),I=R+(m^(b|~E))+v[2]+718787259&4294967295,R=b+(I<<15&4294967295|I>>>17),I=E+(b^(R|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+b&4294967295}s.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var E=m-this.blockSize,v=this.B,R=this.h,b=0;b<m;){if(R==0)for(;b<=E;)r(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(v[R++]=w.charCodeAt(b++),R==this.blockSize){r(this,v),R=0;break}}else for(;b<m;)if(v[R++]=w[b++],R==this.blockSize){r(this,v),R=0;break}}this.h=R,this.o+=m},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var E=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=E&255,E/=256;for(this.u(w),w=Array(16),m=E=0;4>m;++m)for(var v=0;32>v;v+=8)w[E++]=this.g[m]>>>v&255;return w};function i(w,m){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=m(w)}function o(w,m){this.h=m;for(var E=[],v=!0,R=w.length-1;0<=R;R--){var b=w[R]|0;v&&b==m||(E[R]=b,v=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new o([m|0],0>m?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(u(-w));for(var m=[],E=1,v=0;w>=E;v++)m[v]=w/E|0,E*=4294967296;return new o(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return D(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(m,8)),v=p,R=0;R<w.length;R+=8){var b=Math.min(8,w.length-R),I=parseInt(w.substring(R,R+b),m);8>b?(b=u(Math.pow(m,b)),v=v.j(b).add(u(I))):(v=v.j(E),v=v.add(u(I)))}return v}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var w=0,m=1,E=0;E<this.g.length;E++){var v=this.i(E);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(O(this))return"-"+D(this).toString(w);for(var m=u(Math.pow(w,6)),E=this,v="";;){var R=M(E,m).g;E=N(E,R.j(m));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,S(E))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=N(this,w),O(w)?-1:S(w)?0:1};function D(w){for(var m=w.g.length,E=[],v=0;v<m;v++)E[v]=~w.g[v];return new o(E,~w.h).add(g)}t.abs=function(){return O(this)?D(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],v=0,R=0;R<=m;R++){var b=v+(this.i(R)&65535)+(w.i(R)&65535),I=(b>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);v=I>>>16,b&=65535,I&=65535,E[R]=I<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function N(w,m){return w.add(D(m))}t.j=function(w){if(S(this)||S(w))return p;if(O(this))return O(w)?D(this).j(D(w)):D(D(this).j(w));if(O(w))return D(this.j(D(w)));if(0>this.l(y)&&0>w.l(y))return u(this.m()*w.m());for(var m=this.g.length+w.g.length,E=[],v=0;v<2*m;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(var R=0;R<w.g.length;R++){var b=this.i(v)>>>16,I=this.i(v)&65535,De=w.i(R)>>>16,Xe=w.i(R)&65535;E[2*v+2*R]+=I*Xe,x(E,2*v+2*R),E[2*v+2*R+1]+=b*Xe,x(E,2*v+2*R+1),E[2*v+2*R+1]+=I*De,x(E,2*v+2*R+1),E[2*v+2*R+2]+=b*De,x(E,2*v+2*R+2)}for(v=0;v<m;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=m;v<2*m;v++)E[v]=0;return new o(E,0)};function x(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function j(w,m){this.g=w,this.h=m}function M(w,m){if(S(m))throw Error("division by zero");if(S(w))return new j(p,p);if(O(w))return m=M(D(w),m),new j(D(m.g),D(m.h));if(O(m))return m=M(w,D(m)),new j(D(m.g),m.h);if(30<w.g.length){if(O(w)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var E=g,v=m;0>=v.l(w);)E=re(E),v=re(v);var R=ne(E,1),b=ne(v,1);for(v=ne(v,2),E=ne(E,2);!S(v);){var I=b.add(v);0>=I.l(w)&&(R=R.add(E),b=I),v=ne(v,1),E=ne(E,1)}return m=N(w,R.j(m)),new j(R,m)}for(R=p;0<=w.l(m);){for(E=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=u(E),I=b.j(m);O(I)||0<I.l(w);)E-=v,b=u(E),I=b.j(m);S(b)&&(b=g),R=R.add(b),w=N(w,I)}return new j(R,w)}t.A=function(w){return M(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],v=0;v<m;v++)E[v]=this.i(v)&w.i(v);return new o(E,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],v=0;v<m;v++)E[v]=this.i(v)|w.i(v);return new o(E,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],v=0;v<m;v++)E[v]=this.i(v)^w.i(v);return new o(E,this.h^w.h)};function re(w){for(var m=w.g.length+1,E=[],v=0;v<m;v++)E[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(E,w.h)}function ne(w,m){var E=m>>5;m%=32;for(var v=w.g.length-E,R=[],b=0;b<v;b++)R[b]=0<m?w.i(b+E)>>>m|w.i(b+E+1)<<32-m:w.i(b+E);return new o(R,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,N_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,qs=o}).apply(typeof Yf<"u"?Yf:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,pi,x_,ca,$c,M_,L_,F_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var f=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,V){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[k].apply(_,W)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,V=_.length||0;a.length=k+V;for(let W=0;W<V;W++)a[k+W]=_[W]}else a.push(_)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var re=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ne(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class De{constructor(){this.h=this.g=null}add(h,f){const _=Xe.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Xe=new N(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,Ot=new De,Yt=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(jt)}};var jt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){b(f)}var h=Xe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function dn(a,h){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(re){e:{try{M(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}S(dn,je);var St={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,h,f,_,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var W=A(a,h,_,k);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new Y(h,this.src,V,!!_,k),h.fa=f,a.push(h)),h};function T(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(_,k,1),V&&(Z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,_){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function B(a,h,f,_,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],f,_,k);return null}return f=le(f),a&&a[L]?a.K(h,f,u(_)?!!_.capture:!1,k):U(a,h,f,!1,_,k)}function U(a,h,f,_,k,V){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,Oe=G(a);if(Oe||(a[P]=Oe=new Ae(a)),f=Oe.add(h,f,_,W,V),f.proxy)return f;if(_=Q(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Yn||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(H(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function a(f){return h.call(a.src,a.listener,f)}const h=se;return a}function K(a,h,f,_,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],f,_,k);else _=u(_)?!!_.capture:!!_,f=le(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=A(V,f,_,k),-1<f&&(Z(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=G(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,_,k)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])T(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(H(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=G(h))?(T(f,a),f.h==0&&(f.src=null,h[P]=null)):Z(a)}}}function H(a){return a in F?F[a]:F[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new dn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&z(a),a=f.call(_,h)}return a}function G(a){return a=a[P],a instanceof Ae?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){Be.call(this),this.i=new Ae(this),this.M=this,this.F=null}S(ae,Be),ae.prototype[L]=!0,ae.prototype.removeEventListener=function(a,h,f,_){K(this,a,h,f,_)};function me(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new je(h,a);else if(h instanceof je)h.target=h.target||a;else{var k=h;h=new je(_,a),v(h,k)}if(k=!0,f)for(var V=f.length-1;0<=V;V--){var W=h.g=f[V];k=Ee(W,_,!0,h)&&k}if(W=h.g=a,k=Ee(W,_,!0,h)&&k,k=Ee(W,_,!1,h)&&k,f)for(V=0;V<f.length;V++)W=h.g=f[V],k=Ee(W,_,!1,h)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)Z(f[_]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ae.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Ee(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var W=h[V];if(W&&!W.da&&W.capture==f){var Oe=W.listener,ot=W.ha||W.src;W.fa&&T(a.i,W),k=Oe.call(ot,_)!==!1&&k}}return k&&!_.defaultPrevented}function st(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rt(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qt extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Be.call(this),this.h=a,this.g={}}S(ft,Be);var Jn=[];function Wr(a){ne(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Wr(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,Ht=l.JSON.parse,wo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Cl(){}Cl.prototype.h=null;function Th(a){return a.h||(a.h=a.i())}function Ih(){}var Gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sl(){je.call(this,"d")}S(Sl,je);function Pl(){je.call(this,"c")}S(Pl,je);var Ss={},wh=null;function Ao(){return wh=wh||new ae}Ss.La="serverreachability";function Ah(a){je.call(this,Ss.La,a)}S(Ah,je);function Qr(a){const h=Ao();me(h,new Ah(h))}Ss.STAT_EVENT="statevent";function bh(a,h){je.call(this,Ss.STAT_EVENT,a),this.stat=h}S(bh,je);function wt(a){const h=Ao();me(h,new bh(h,a))}Ss.Ma="timingevent";function Rh(a,h){je.call(this,Ss.Ma,a),this.size=h}S(Rh,je);function Yr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Jr(){this.g=!0}Jr.prototype.xa=function(){this.g=!1};function cv(a,h,f,_,k,V){a.info(function(){if(a.g)if(V)for(var W="",Oe=V.split("&"),ot=0;ot<Oe.length;ot++){var be=Oe[ot].split("=");if(1<be.length){var pt=be[0];be=be[1];var mt=pt.split("_");W=2<=mt.length&&mt[1]=="type"?W+(pt+"="+be+"&"):W+(pt+"=redacted&")}}else W=null;else W=V;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+W})}function uv(a,h,f,_,k,V,W){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+V+" "+W})}function ir(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dv(a,f)+(_?" "+_:"")})}function hv(a,h){a.info(function(){return"TIMEOUT: "+h})}Jr.prototype.info=function(){};function dv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return it(f)}catch{return h}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kl;function Ro(){}S(Ro,Cl),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},kl=new Ro;function Xn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sh}function Sh(){this.i=null,this.g="",this.h=!1}var Ph={},Dl={};function Ol(a,h,f){a.L=1,a.v=ko(Pn(h)),a.m=f,a.P=!0,kh(a,null)}function kh(a,h){a.F=Date.now(),Co(a),a.A=Pn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Hh(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Sh,a.g=ld(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Jn[0]=k.toString()),k=Jn);for(var V=0;V<k.length;V++){var W=B(f,k[V],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Qr(),cv(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=kn(this.g);var h=this.g.Ba();const lr=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Jh(this.g)))){this.J||mt!=4||h==7||(h==8||0>=lr?Qr(3):Qr(2)),Nl(this);var f=this.g.Z();this.X=f;t:if(Dh(this)){var _=Jh(this.g);a="";var k=_.length,V=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),Xr(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,uv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ot=this.g;if((Oe=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Oe)){var be=Oe;break t}}be=null}if(f=be)ir(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vl(this,f);else{this.o=!1,this.s=3,wt(12),Ps(this),Xr(this);break e}}if(this.P){f=!0;let Jt;for(;!this.J&&this.C<W.length;)if(Jt=fv(this,W),Jt==Dl){mt==4&&(this.s=4,wt(14),f=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Ph){this.s=4,wt(15),ir(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else ir(this.i,this.l,Jt,null),Vl(this,Jt);if(Dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||W.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)ir(this.i,this.l,W,"[Invalid Chunked Response]"),Ps(this),Xr(this);else if(0<W.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),$l(pt),pt.M=!0,wt(11))}}else ir(this.i,this.l,W,null),Vl(this,W);mt==4&&Ps(this),this.o&&!this.J&&(mt==4?rd(this.j,this):(this.o=!1,Co(this)))}else kv(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Ps(this),Xr(this)}}}catch{}finally{}};function Dh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function fv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Dl:(f=Number(h.substring(f,_)),isNaN(f)?Ph:(_+=1,_+f>h.length?Dl:(h=h.slice(_,_+f),a.C=_+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Ps(this)};function Co(a){a.S=Date.now()+a.I,Oh(a,a.I)}function Oh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yr(g(a.ba,a),h)}function Nl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hv(this.i,this.A),this.L!=2&&(Qr(),wt(17)),Ps(this),this.s=2,Xr(this)):Oh(this,this.S-a)};function Xr(a){a.j.G==0||a.J||rd(a.j,a)}function Ps(a){Nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wr(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||xl(f.h,a))){if(!a.K&&xl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Mo(f),Vo(f);else break e;Ul(f),wt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Yr(g(f.Za,f),6e3));if(1>=xh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ds(f,11)}else if((a.K||f.g==a)&&Mo(f),!x(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let be=k[h];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const pt=be[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const mt=be[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const lr=be[5];lr!=null&&typeof lr=="number"&&0<lr&&(_=1.5*lr,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Jt=a.g;if(Jt){const Fo=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fo){var V=_.h;V.g||Fo.indexOf("spdy")==-1&&Fo.indexOf("quic")==-1&&Fo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ml(V,V.h),V.h=null))}if(_.D){const Bl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bl&&(_.ya=Bl,Me(_.I,_.D,Bl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var W=a;if(_.qa=ad(_,_.J?_.ia:null,_.W),W.K){Mh(_.h,W);var Oe=W,ot=_.L;ot&&(Oe.I=ot),Oe.B&&(Nl(Oe),Co(Oe)),_.g=W}else nd(_);0<f.i.length&&xo(f)}else be[0]!="stop"&&be[0]!="close"||Ds(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Ds(f,7):Fl(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Qr(4)}catch{}}var pv=class{constructor(a,h){this.g=a,this.map=h}};function Nh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xh(a){return a.h?1:a.g?a.g.size:0}function xl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ml(a,h){a.g?a.g.add(h):a.h=h}function Mh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Nh.prototype.cancel=function(){if(this.i=Lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function mv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function gv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Fh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=gv(a),_=mv(a),k=_.length,V=0;V<k;V++)h.call(void 0,_[V],f&&f[V],a)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _v(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var V=a[f].substring(0,_);k=a[f].substring(_+1)}else V=a[f];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ks(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ks){this.h=a.h,So(this,a.j),this.o=a.o,this.g=a.g,Po(this,a.s),this.l=a.l;var h=a.i,f=new ti;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),$h(this,f),this.m=a.m}else a&&(h=String(a).match(Uh))?(this.h=!1,So(this,h[1]||"",!0),this.o=Zr(h[2]||""),this.g=Zr(h[3]||"",!0),Po(this,h[4]),this.l=Zr(h[5]||"",!0),$h(this,h[6]||"",!0),this.m=Zr(h[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}ks.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ei(h,Bh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ei(h,Bh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ei(f,f.charAt(0)=="/"?Ev:vv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ei(f,Iv)),a.join("")};function Pn(a){return new ks(a)}function So(a,h,f){a.j=f?Zr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Po(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $h(a,h,f){h instanceof ti?(a.i=h,wv(a.i,a.h)):(f||(h=ei(h,Tv)),a.i=new ti(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function ko(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,yv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bh=/[#\/\?@]/g,vv=/[#\?:]/g,Ev=/[#\?]/g,Tv=/[#\?@]/g,Iv=/#/g;function ti(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&_v(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ti.prototype,t.add=function(a,h){Zn(this),this.i=null,a=or(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function jh(a,h){Zn(a),h=or(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qh(a,h){return Zn(a),h=or(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let V=0;V<k.length;V++)f.push(h[_])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")qh(this,a)&&(h=h.concat(this.g.get(or(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=or(this,a),qh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Hh(a,h,f){jh(a,h),0<f.length&&(a.i=null,a.g.set(or(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const V=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var k=V;W[_]!==""&&(k+="="+encodeURIComponent(String(W[_]))),a.push(k)}}return this.i=a.join("&")};function or(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wv(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(jh(this,_),Hh(this,k,f))},a)),a.j=h}function Av(a,h){const f=new Jr;if(l.Image){const _=new Image;_.onload=y(es,f,"TestLoadImage: loaded",!0,h,_),_.onerror=y(es,f,"TestLoadImage: error",!1,h,_),_.onabort=y(es,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=y(es,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function bv(a,h){const f=new Jr,_=new AbortController,k=setTimeout(()=>{_.abort(),es(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(k),V.ok?es(f,"TestPingServer: ok",!0,h):es(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),es(f,"TestPingServer: error",!1,h)})}function es(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function Rv(){this.g=new wo}function Cv(a,h,f){const _=f||"";try{Fh(a,function(k,V){let W=k;u(k)&&(W=it(k)),h.push(_+V+"="+encodeURIComponent(W))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function Do(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Do,Cl),Do.prototype.g=function(){return new Oo(this.l,this.j)},Do.prototype.i=function(a){return function(){return a}}({});function Oo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Oo,ae),t=Oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ni(this):si(this),this.readyState==3&&zh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Qa=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,si(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kh(a){let h="";return ne(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Ll(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Kh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function He(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(He,ae);var Sv=/^https?$/i,Pv=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kl.g(),this.v=this.o?Th(this.o):Th(kl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Wh(this,V);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())f.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pv,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of f)this.g.setRequestHeader(V,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Wh(this,V)}};function Wh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Gh(a),No(a)}function Gh(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),No(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qh(this):this.bb())},t.bb=function(){Qh(this)};function Qh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)st(a.Ea,0,a);else if(me(a,"readystatechange"),kn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=W===0){var k=String(a.D).match(Uh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!Sv.test(k?k.toLowerCase():"")}f=_}if(f)me(a,"complete"),me(a,"success");else{a.m=6;try{var V=2<kn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Gh(a)}}finally{No(a)}}}}function No(a,h){if(a.g){Yh(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||me(a,"ready");try{f.onreadystatechange=_}catch{}}}function Yh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function Jh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kv(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var f=R(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[k]||[];h[k]=V,V.push(f)}w(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Xh(a){this.Aa=0,this.i=[],this.j=new Jr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,a),this.cb=ri("retryDelaySeedMs",1e4,a),this.Wa=ri("forwardChannelMaxRetries",2,a),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nh(a&&a.concurrentRequestLimit),this.Da=new Rv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){wt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=ad(this,null,this.W),xo(this)};function Fl(a){if(Zh(a),a.G==3){var h=a.U++,f=Pn(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),ii(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=ko(Pn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=ld(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Co(h)}od(a)}function Vo(a){a.g&&($l(a),a.g.cancel(),a.g=null)}function Zh(a){Vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xo(a){if(!Vh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ve||Yt(),ge||(ve(),ge=!0),Ot.add(h,a),a.B=0}}function Dv(a,h){return xh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yr(g(a.Ga,a,h),id(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),v(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=td(this,k,h),f=Pn(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),ii(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Kh(V)))+"&"+h:this.m&&Ll(f,this.m,V)),Ml(this.h,k),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),k.T=!0,Ol(k,f,null)):Ol(k,f,h),this.G=2}}else this.G==3&&(a?ed(this,a):this.i.length==0||Vh(this.h)||ed(this))};function ed(a,h){var f;h?f=h.l:f=a.U++;const _=Pn(a.I);Me(_,"SID",a.K),Me(_,"RID",f),Me(_,"AID",a.T),ii(a,_),a.m&&a.o&&Ll(_,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=td(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ml(a.h,f),Ol(f,_,h)}function ii(a,h){a.H&&ne(a.H,function(f,_){Me(h,_,f)}),a.l&&Fh({},function(f,_){Me(h,_,f)})}function td(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const W=["count="+f];V==-1?0<f?(V=k[0].g,W.push("ofs="+V)):V=0:W.push("ofs="+V);let Oe=!0;for(let ot=0;ot<f;ot++){let be=k[ot].g;const pt=k[ot].map;if(be-=V,0>be)V=Math.max(0,k[ot].g-100),Oe=!1;else try{Cv(pt,W,"req"+be+"_")}catch{_&&_(pt)}}if(Oe){_=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function nd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ve||Yt(),ge||(ve(),ge=!0),Ot.add(h,a),a.v=0}}function Ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yr(g(a.Fa,a),id(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yr(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Vo(this),sd(this))};function $l(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sd(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),ii(a,h),a.m&&a.o&&Ll(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ko(Pn(h)),f.m=null,f.P=!0,kh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),Ul(this),wt(19))};function Mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function rd(a,h){var f=null;if(a.g==h){Mo(a),$l(a),a.g=null;var _=2}else if(xl(a.h,h))f=h.D,Mh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=Ao(),me(_,new Rh(_,f)),xo(a)}else nd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&Dv(a,h)||_==2&&Ul(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Ds(a,5);break;case 4:Ds(a,10);break;case 3:Ds(a,6);break;default:Ds(a,2)}}}function id(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Ds(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const k=!_;_=new ks(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||So(_,"https"),ko(_),k?Av(_.toString(),f):bv(_.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(h),od(a),Zh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function od(a){if(a.G=0,a.ka=[],a.l){const h=Lh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function ad(a,h,f){var _=f instanceof ks?Pn(f):new ks(f);if(_.g!="")h&&(_.g=h+"."+_.g),Po(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new ks(null);_&&So(V,_),h&&(V.g=h),k&&Po(V,k),f&&(V.l=f),_=V}return f=a.D,h=a.ya,f&&h&&Me(_,f,h),Me(_,"VER",a.la),ii(a,_),_}function ld(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new Do({eb:f})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cd(){}t=cd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){ae.call(this),this.g=new Xh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ar(this)}S(Nt,ae),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Fl(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=it(a),a=f);h.i.push(new pv(h.Ya++,a)),h.G==3&&xo(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,Nt.aa.N.call(this)};function ud(a){Sl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ud,Sl);function hd(){Pl.call(this),this.status=1}S(hd,Pl);function ar(a){this.g=a}S(ar,cd),ar.prototype.ua=function(){me(this.g,"a")},ar.prototype.ta=function(a){me(this.g,new ud(a))},ar.prototype.sa=function(a){me(this.g,new hd)},ar.prototype.ra=function(){me(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,F_=function(){return new Lo},L_=function(){return Ao()},M_=Ss,$c={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,ca=bo,Ch.COMPLETE="complete",x_=Ch,Ih.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",ae.prototype.listen=ae.prototype.K,pi=Ih,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,V_=He}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const Jf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new bu("@firebase/firestore");function ci(){return Gs.logLevel}function ee(t,...e){if(Gs.logLevel<=ye.DEBUG){const n=e.map(Lu);Gs.debug(`Firestore (${Hr}): ${t}`,...n)}}function Wn(t,...e){if(Gs.logLevel<=ye.ERROR){const n=e.map(Lu);Gs.error(`Firestore (${Hr}): ${t}`,...n)}}function Vr(t,...e){if(Gs.logLevel<=ye.WARN){const n=e.map(Lu);Gs.warn(`Firestore (${Hr}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function ke(t,e){t||he()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class nC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new U_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new _t(e)}}class rC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iC{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new rC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new oC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=lC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ce(t,e){return t<e?-1:t>e?1:0}function xr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Ze(0,0))}static max(){return new de(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Gi{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const cC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Gi{construct(e,n,s){return new ut(e,n,s)}static isValidIdentifier(e){return cC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Le.fromString(e))}static fromName(e){return new oe(Le.fromString(e).popFirst(5))}static empty(){return new oe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Le(e.slice()))}}function uC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new ws(r,oe.empty(),e)}function hC(t){return new ws(t.readTime,t.key,-1)}class ws{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ws(de.min(),oe.empty(),-1)}static max(){return new ws(de.max(),oe.empty(),-1)}}function dC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==fC)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,s)=>{n(e)})}static reject(e){return new q((n,s)=>{s(e)})}static waitFor(e){return new q((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=q.resolve(!1);for(const s of e)n=n.next(r=>r?q.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new q((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(e,n){return new q((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function mC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fu.oe=-1;function hl(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function gC(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??at.RED,this.left=r??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new at(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,s,r,i){return this}insert(e,n,s){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new ht(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new j_("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(t){if(ke(!!t),typeof t=="string"){let e=0;const n=_C.exec(t);if(ke(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $u(t){const e=t.mapValue.fields.__previous_value__;return Uu(e)?$u(e):e}function Qi(t){const e=As(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{}};function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:EC(t)?9007199254740991:vC(t)?10:11:he()}function bn(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=As(r.timestampValue),l=As(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ge(r.doubleValue),l=Ge(i.doubleValue);return o===l?Da(o)===Da(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xr(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Xf(o)!==Xf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Ji(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Mr(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return Ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ep(t.timestampValue,e.timestampValue);case 4:return ep(Qi(t),Qi(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Qs(i),c=Qs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ce(l[u],c[u]);if(d!==0)return d}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ce(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Ce(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,O=Ce(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:tp(y,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ce(c[p],d[p]);if(g!==0)return g;const y=Mr(l[c[p]],u[d[p]]);if(y!==0)return y}return Ce(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function ep(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=As(t),s=As(e),r=Ce(n.seconds,s.seconds);return r!==0?r:Ce(n.nanos,s.nanos)}function tp(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Mr(n[r],s[r]);if(i)return i}return Ce(n.length,s.length)}function Lr(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=As(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Bc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Bc(n.fields[o])}`;return r+"}"}(t.mapValue):he()}function np(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jc(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function sp(t){return!!t&&"nullValue"in t}function rp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ua(t){return!!t&&"mapValue"in t}function vC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ci(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=ut.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Ci(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ua(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){nr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Dt(Ci(this.value))}}function q_(t){const e=[];return nr(t.fields,(n,s)=>{const r=new ut([n]);if(ua(s)){const i=q_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,de.min(),de.min(),de.min(),Dt.empty(),0)}static newFoundDocument(e,n,s,r){return new Et(e,1,n,de.min(),s,r,0)}static newNoDocument(e,n){return new Et(e,2,n,de.min(),de.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,de.min(),de.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.position=e,this.inclusive=n}}function ip(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=Mr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function op(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n="asc"){this.field=e,this.dir=n}}function TC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{}class Ye extends H_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wC(e,n,s):n==="array-contains"?new RC(e,s):n==="in"?new CC(e,s):n==="not-in"?new SC(e,s):n==="array-contains-any"?new PC(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new AC(e,s):new bC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mr(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(Mr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends H_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return z_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function z_(t){return t.op==="and"}function K_(t){return IC(t)&&z_(t)}function IC(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function qc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Lr(t.value);if(K_(t))return t.filters.map(e=>qc(e)).join(",");{const e=t.filters.map(n=>qc(n)).join(",");return`${t.op}(${e})`}}function W_(t,e){return t instanceof Ye?function(s,r){return r instanceof Ye&&s.op===r.op&&s.field.isEqual(r.field)&&bn(s.value,r.value)}(t,e):t instanceof hn?function(s,r){return r instanceof hn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&W_(o,r.filters[l]),!0):!1}(t,e):void he()}function G_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Lr(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(G_).join(" ,")+"}"}(t):"Filter"}class wC extends Ye{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class AC extends Ye{constructor(e,n){super(e,"in",n),this.keys=Q_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bC extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Q_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Q_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>oe.fromName(s.referenceValue))}class RC extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&Ji(n.arrayValue,this.value)}}class CC extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class SC extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class PC extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ji(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function ap(t,e=null,n=[],s=[],r=null,i=null,o=null){return new kC(t,e,n,s,r,i,o)}function ju(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>qc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Lr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Lr(s)).join(",")),e.ue=n}return e.ue}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!W_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!op(t.startAt,e.startAt)&&op(t.endAt,e.endAt)}function Hc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function DC(t,e,n,s,r,i,o,l){return new go(t,e,n,s,r,i,o,l)}function Hu(t){return new go(t)}function lp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Y_(t){return t.collectionGroup!==null}function Si(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Na(i,s))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Na(ut.keyField(),s))}return e.ce}function In(t){const e=fe(t);return e.le||(e.le=OC(e,Si(t))),e.le}function OC(t,e){if(t.limitType==="F")return ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Na(r.field,i)});const n=t.endAt?new Oa(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Oa(t.startAt.position,t.startAt.inclusive):null;return ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function zc(t,e){const n=t.filters.concat([e]);return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kc(t,e,n){return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dl(t,e){return qu(In(t),In(e))&&t.limitType===e.limitType}function J_(t){return`${ju(In(t))}|lt:${t.limitType}`}function mr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>G_(r)).join(", ")}]`),hl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Lr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Lr(r)).join(",")),`Target(${s})`}(In(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):oe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Si(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=ip(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Si(s),r)||s.endAt&&!function(o,l,c){const u=ip(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Si(s),r))}(t,e)}function NC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X_(t){return(e,n)=>{let s=!1;for(const r of Si(t)){const i=VC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function VC(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Mr(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new qe(oe.comparator);function Gn(){return xC}const Z_=new qe(oe.comparator);function mi(...t){let e=Z_;for(const n of t)e=e.insert(n.key,n);return e}function ey(t){let e=Z_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Us(){return Pi()}function ty(){return Pi()}function Pi(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const MC=new qe(oe.comparator),LC=new ht(oe.comparator);function _e(...t){let e=LC;for(const n of t)e=e.add(n);return e}const FC=new ht(Ce);function UC(){return FC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function ny(t){return{integerValue:""+t}}function $C(t,e){return gC(e)?ny(e):zu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this._=void 0}}function BC(t,e,n){return t instanceof Xi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Uu(i)&&(i=$u(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?ry(t,e):t instanceof eo?iy(t,e):function(r,i){const o=sy(r,i),l=cp(o)+cp(r.Pe);return jc(o)&&jc(r.Pe)?ny(l):zu(r.serializer,l)}(t,e)}function jC(t,e,n){return t instanceof Zi?ry(t,e):t instanceof eo?iy(t,e):n}function sy(t,e){return t instanceof Va?function(s){return jc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Xi extends pl{}class Zi extends pl{constructor(e){super(),this.elements=e}}function ry(t,e){const n=oy(e);for(const s of t.elements)n.some(r=>bn(r,s))||n.push(s);return{arrayValue:{values:n}}}class eo extends pl{constructor(e){super(),this.elements=e}}function iy(t,e){let n=oy(e);for(const s of t.elements)n=n.filter(r=>!bn(r,s));return{arrayValue:{values:n}}}class Va extends pl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cp(t){return Ge(t.integerValue||t.doubleValue)}function oy(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.field=e,this.transform=n}}function HC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Zi&&r instanceof Zi||s instanceof eo&&r instanceof eo?xr(s.elements,r.elements,bn):s instanceof Va&&r instanceof Va?bn(s.Pe,r.Pe):s instanceof Xi&&r instanceof Xi}(t.transform,e.transform)}class zC{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ml{}function ay(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ku(t.key,$t.none()):new _o(t.key,t.data,$t.none());{const n=t.data,s=Dt.empty();let r=new ht(ut.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Cs(t.key,s,new Ut(r.toArray()),$t.none())}}function KC(t,e,n){t instanceof _o?function(r,i,o){const l=r.value.clone(),c=hp(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(r,i,o){if(!ha(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=hp(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ly(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,s){return t instanceof _o?function(i,o,l,c){if(!ha(i.precondition,o))return l;const u=i.value.clone(),d=dp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Cs?function(i,o,l,c){if(!ha(i.precondition,o))return l;const u=dp(i.fieldTransforms,c,o),d=o.data;return d.setAll(ly(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(i,o,l){return ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function WC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=sy(s.transform,r||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(s.field,i))}return n||null}function up(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&xr(s,r,(i,o)=>HC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends ml{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cs extends ml{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ly(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hp(t,e,n){const s=new Map;ke(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,jC(o,l,n[r]))}return s}function dp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,BC(i,o,e))}return s}class Ku extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&KC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ki(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ki(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ty();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=ay(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(n,s)=>up(n,s))&&xr(this.baseMutations,e.baseMutations,(n,s)=>up(n,s))}}class Wu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ke(e.mutations.length===s.length);let r=function(){return MC}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Wu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Te;function XC(t){switch(t){default:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function cy(t){if(t===void 0)return Wn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Qe.OK:return $.OK;case Qe.CANCELLED:return $.CANCELLED;case Qe.UNKNOWN:return $.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return $.INTERNAL;case Qe.UNAVAILABLE:return $.UNAVAILABLE;case Qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Qe.NOT_FOUND:return $.NOT_FOUND;case Qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Qe.ABORTED:return $.ABORTED;case Qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Qe.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(Te=Qe||(Qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new qs([4294967295,4294967295],0);function fp(t){const e=ZC().encode(t),n=new N_;return n.update(e),new Uint8Array(n.digest())}function pp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qs([n,s],0),new qs([r,i],0)]}class Gu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(s<0)throw new gi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qs.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(qs.fromNumber(s)));return r.compare(eS)===1&&(r=new qs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fp(e),[s,r]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gu(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=fp(e),[s,r]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,yo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new gl(de.min(),r,new qe(Ce),Gn(),_e())}}class yo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new yo(s,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class uy{constructor(e,n){this.targetId=e,this.me=n}}class hy{constructor(e,n,s=dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class mp{constructor(){this.fe=0,this.ge=_p(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),s=_e();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:he()}}),new yo(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=_p()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=gp(),this.Qe=new qe(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Hc(i))if(s===0){const o=new oe(i.path);this.Ue(n,o,Et.newNoDocument(o,de.min()))}else ke(s===1);else{const o=this.Ye(n);if(o!==s){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof j_)return Vr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Gu(o,r,i)}catch(c){return Vr(c instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Hc(l.target)){const c=new oe(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Et.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=_e();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new gl(e,n,this.Qe,this.ke,s);return this.ke=Gn(),this.qe=gp(),this.Qe=new qe(Ce),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gp(){return new qe(oe.comparator)}function _p(){return new qe(oe.comparator)}const nS={asc:"ASCENDING",desc:"DESCENDING"},sS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rS={and:"AND",or:"OR"};class iS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wc(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oS(t,e){return xa(t,e.toTimestamp())}function wn(t){return ke(!!t),de.fromTimestamp(function(n){const s=As(n);return new Ze(s.seconds,s.nanos)}(t))}function Qu(t,e){return Gc(t,e).canonicalString()}function Gc(t,e){const n=function(r){return new Le(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fy(t){const e=Le.fromString(t);return ke(yy(e)),e}function Qc(t,e){return Qu(t.databaseId,e.path)}function cc(t,e){const n=fy(e);if(n.get(1)!==t.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(my(n))}function py(t,e){return Qu(t.databaseId,e)}function aS(t){const e=fy(t);return e.length===4?Le.emptyPath():my(e)}function Yc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function my(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yp(t,e,n){return{name:Qc(t,e),fields:n.value.mapValue.fields}}function lS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ke(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:cy(u.code);return new X(d,u.message||"")}(o);n=new hy(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=cc(t,s.document.name),i=wn(s.document.updateTime),o=s.document.createTime?wn(s.document.createTime):de.min(),l=new Dt({mapValue:{fields:s.document.fields}}),c=Et.newFoundDocument(r,i,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new da(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=cc(t,s.document),i=s.readTime?wn(s.readTime):de.min(),o=Et.newNoDocument(r,i),l=s.removedTargetIds||[];n=new da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=cc(t,s.document),i=s.removedTargetIds||[];n=new da([],i,r,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new JC(r,i),l=s.targetId;n=new uy(l,o)}}return n}function cS(t,e){let n;if(e instanceof _o)n={update:yp(t,e.key,e.value)};else if(e instanceof Ku)n={delete:Qc(t,e.key)};else if(e instanceof Cs)n={update:yp(t,e.key,e.data),updateMask:yS(e.fieldMask)};else{if(!(e instanceof GC))return he();n={verify:Qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Va)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:oS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function uS(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?wn(r.updateTime):wn(i);return o.isEqual(de.min())&&(o=wn(i)),new zC(o,r.transformResults||[])}(n,e))):[]}function hS(t,e){return{documents:[py(t,e.path)]}}function dS(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=py(t,r);const i=function(u){if(u.length!==0)return _y(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:gr(g.field),direction:mS(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:r}}function fS(t){let e=aS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ke(s===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=gy(p);return g instanceof hn&&K_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Na(_r(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,hl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new Oa(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new Oa(y,g)}(n.endAt)),DC(e,r,o,i,l,"F",c,u)}function pS(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=_r(n.unaryFilter.field);return Ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=_r(n.unaryFilter.field);return Ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_r(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_r(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(_r(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(s=>gy(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function mS(t){return nS[t]}function gS(t){return sS[t]}function _S(t){return rS[t]}function gr(t){return{fieldPath:t.canonicalString()}}function _r(t){return ut.fromServerFormat(t.fieldPath)}function _y(t){return t instanceof Ye?function(n){if(n.op==="=="){if(rp(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NAN"}};if(sp(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rp(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NAN"}};if(sp(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(n.field),op:gS(n.op),value:n.value}}}(t):t instanceof hn?function(n){const s=n.getFilters().map(r=>_y(r));return s.length===1?s[0]:{compositeFilter:{op:_S(n.op),filters:s}}}(t):he()}function yS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s,r,i=de.min(),o=de.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.ct=e}}function ES(t){const e=fS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.un=new IS}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(ws.min())}updateCollectionGroup(e,n,s){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class IS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ht(Le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ht(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fr(0)}static kn(){return new Fr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ki(s.mutation,r,Ut.empty(),Ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const r=Us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Gn();const o=Pi(),l=function(){return Pi()}();return n.forEach((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof Cs)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ki(d.mutation,u,d.mutation.getFieldMask(),Ze.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new AS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Pi();let r=new qe((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||Ut.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(r.get(l.batchId)||_e()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=ty();d.forEach(g=>{if(!i.has(g)){const y=ay(n.get(g),s.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Y_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):q.resolve(Us());let l=-1,c=i;return o.next(u=>q.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_e())).next(d=>({batchId:l,changes:ey(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(s=>{let r=mi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,g){return new go(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let l=mi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&ki(d.mutation,u,Ut.empty(),Ze.now()),fl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:wn(r.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:ES(r.bundledQuery),readTime:wn(r.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.overlays=new qe(oe.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Us();return q.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),q.resolve()}getOverlaysForCollection(e,n,s){const r=Us(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return q.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=Us(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Us(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=r)););return q.resolve(l)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YC(n,s));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Tr=new ht(tt.Er),this.dr=new ht(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new tt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new oe(new Le([])),s=new tt(n,e),r=new tt(n,e+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new Le([])),s=new tt(n,e),r=new tt(n,e+1);let i=_e();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(tt.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QC(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),r=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const l=this.Dr(o.wr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(Ce);return n.forEach(r=>{const i=new tt(r,0),o=new tt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{s=s.add(l.wr)})}),q.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;oe.isDocumentKey(i)||(i=i.child(""));const o=new tt(new oe(i),0);let l=new ht(Ce);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.wr)),!0)},o),q.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return q.forEach(n.mutations,r=>{const i=new tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new tt(n,0),r=this.br.firstAfterOrEqual(s);return q.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.Mr=e,this.docs=function(){return new qe(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return q.resolve(s?s.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let s=Gn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Et.newInvalidDocument(r))}),q.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Gn();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dC(hC(d),s)<=0||(r.has(d.key)||fl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,s,r){he()}Or(e,n){return q.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new DS(this)}getSize(e){return q.resolve(this.size)}}class DS extends wS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.persistence=e,this.Nr=new zr(n=>ju(n),qu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yu,this.targetCount=0,this.kr=Fr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),q.waitFor(i).next(()=>r)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return q.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),q.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return q.resolve(s)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Fu(0),this.Kr=!1,this.Kr=!0,this.$r=new SS,this.referenceDelegate=e(this),this.Ur=new OS(this),this.indexManager=new TS,this.remoteDocumentCache=function(r){return new kS(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new vS(n),this.Gr=new RS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new PS(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new VS(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return q.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class VS extends pC{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Jr=new Yu,this.Yr=null}static Zr(e){return new Ju(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),q.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,s=>{const r=oe.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=_e(),r=_e();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return A0()?8:mC(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(ci()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(ci()<=ye.DEBUG&&ee("QueryEngine","Query:",mr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(ci()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):q.resolve())}Yi(e,n){if(lp(n))return q.resolve(null);let s=In(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Kc(n,null,"F"),s=In(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Kc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,r){return lp(n)||r.isEqual(de.min())?q.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const o=this.ts(n,i);return this.ns(n,o,s,r)?q.resolve(null):(ci()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mr(n)),this.rs(e,o,n,uC(r,-1)).next(l=>l))})}ts(e,n){let s=new ht(X_(e));return n.forEach((r,i)=>{fl(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return ci()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",mr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ws.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new qe(Ce),this._s=new zr(i=>ju(i),qu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function FS(t,e,n,s){return new LS(t,e,n,s)}async function vy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=_e();for(const u of r){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function US(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let y=q.resolve();return g.forEach(S=>{y=y.next(()=>d.getEntry(c,S)).next(O=>{const D=u.docVersions.get(S);ke(D!==null),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ey(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $S(t,e){const n=fe(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=r.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,s)),r=r.insert(p,y),function(O,D,N){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,y,d)&&l.push(n.Ur.updateTargetData(i,y))});let c=Gn(),u=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(BS(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!s.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=r,i))}function BS(t,e,n){let s=_e(),r=_e();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Gn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function jS(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function qS(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,q.resolve(r)):n.Ur.allocateTargetId(s).next(o=>(r=new fs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Jc(t,e,n){const s=fe(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mo(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function vp(t,e,n){const s=fe(t);let r=de.min(),i=_e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=fe(c),g=p._s.get(d);return g!==void 0?q.resolve(p.os.get(g)):p.Ur.getTargetData(u,d)}(s,o,In(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?i:_e())).next(l=>(HS(s,NC(e),l),{documents:l,Ts:i})))}function HS(t,e,n){let s=t.us.get(e)||de.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class Ep{constructor(){this.activeTargetIds=UC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zS{constructor(){this.so=new Ep,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ep,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function uc(){return Wo===null?Wo=function(){return 268435456+Math.round(2147483648*Math.random())}():Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class QS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,o){const l=uc(),c=this.xo(n,s.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,r).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Vr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(n,s,r,i,o,l){return this.Mo(n,s,r,i,o)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}xo(n,s){const r=WS[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=uc();return new Promise((o,l)=>{const c=new V_;c.setWithCredentials(!0),c.listenOnce(x_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ca.NO_ERROR:const d=c.getResponseJson();ee(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ca.TIMEOUT:ee(gt,`RPC '${e}' ${i} timed out`),l(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case ca.HTTP_ERROR:const p=c.getStatus();if(ee(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const S=function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(y.status);l(new X(S,y.message))}else l(new X($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(gt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);ee(gt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const r=uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=F_(),l=L_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(gt,`Creating RPC '${e}' stream ${r}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,y=!1;const S=new GS({Io:D=>{y?ee(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,D):(g||(ee(gt,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),ee(gt,`RPC '${e}' stream ${r} sending:`,D),p.send(D))},To:()=>p.close()}),O=(D,N,x)=>{D.listen(N,j=>{try{x(j)}catch(M){setTimeout(()=>{throw M},0)}})};return O(p,pi.EventType.OPEN,()=>{y||(ee(gt,`RPC '${e}' stream ${r} transport opened.`),S.yo())}),O(p,pi.EventType.CLOSE,()=>{y||(y=!0,ee(gt,`RPC '${e}' stream ${r} transport closed`),S.So())}),O(p,pi.EventType.ERROR,D=>{y||(y=!0,Vr(gt,`RPC '${e}' stream ${r} transport errored:`,D),S.So(new X($.UNAVAILABLE,"The operation could not be completed")))}),O(p,pi.EventType.MESSAGE,D=>{var N;if(!y){const x=D.data[0];ke(!!x);const j=x,M=j.error||((N=j[0])===null||N===void 0?void 0:N.error);if(M){ee(gt,`RPC '${e}' stream ${r} received error:`,M);const re=M.status;let ne=function(E){const v=Qe[E];if(v!==void 0)return cy(v)}(re),w=M.message;ne===void 0&&(ne=$.INTERNAL,w="Unknown error status: "+re+" with message "+M.message),y=!0,S.So(new X(ne,w)),p.close()}else ee(gt,`RPC '${e}' stream ${r} received:`,x),S.bo(x)}}),O(l,M_.STAT_EVENT,D=>{D.stat===$c.PROXY?ee(gt,`RPC '${e}' stream ${r} detected buffering proxy`):D.stat===$c.NOPROXY&&ee(gt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){return new iS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,s,r,i,o,l,c){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ty(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new X($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YS extends Iy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lS(this.serializer,e),s=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?wn(o.readTime):de.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Yc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Hc(c)?{documents:hS(i,c)}:{query:dS(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=dy(i,o.resumeToken);const u=Wc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=xa(i,o.snapshotVersion.toTimestamp());const u=Wc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=pS(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Yc(this.serializer),n.removeTarget=e,this.a_(n)}}class JS extends Iy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=uS(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=Yc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cS(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Gc(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X($.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Gc(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ZS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{sr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.L_.add(4),await vo(u),u.q_.set("Unknown"),u.L_.delete(4),await yl(u)}(this))})}),this.q_=new ZS(s,r)}}async function yl(t){if(sr(t))for(const e of t.B_)await e(!0)}async function vo(t){for(const e of t.B_)await e(!1)}function wy(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),nh(n)?th(n):Kr(n).r_()&&eh(n,e))}function Zu(t,e){const n=fe(t),s=Kr(n);n.N_.delete(e),s.r_()&&Ay(n,e),n.N_.size===0&&(s.r_()?s.o_():sr(n)&&n.q_.set("Unknown"))}function eh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Kr(t).A_(e)}function Ay(t,e){t.Q_.xe(e),Kr(t).R_(e)}function th(t){t.Q_=new tS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Kr(t).start(),t.q_.v_()}function nh(t){return sr(t)&&!Kr(t).n_()&&t.N_.size>0}function sr(t){return fe(t).L_.size===0}function by(t){t.Q_=void 0}async function tP(t){t.q_.set("Online")}async function nP(t){t.N_.forEach((e,n)=>{eh(t,e)})}async function sP(t,e){by(t),nh(t)?(t.q_.M_(e),th(t)):t.q_.set("Unknown")}async function rP(t,e,n){if(t.q_.set("Online"),e instanceof hy&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(t,e)}catch(s){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ma(t,s)}else if(e instanceof da?t.Q_.Ke(e):e instanceof uy?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const s=await Ey(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ay(i,c);const p=new fs(d.target,c,u,d.sequenceNumber);eh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){ee("RemoteStore","Failed to raise snapshot:",s),await Ma(t,s)}}async function Ma(t,e,n){if(!mo(e))throw e;t.L_.add(1),await vo(t),t.q_.set("Offline"),n||(n=()=>Ey(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yl(t)})}function Ry(t,e){return e().catch(n=>Ma(t,n,e))}async function vl(t){const e=fe(t),n=bs(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;iP(e);)try{const r=await jS(e.localStore,s);if(r===null){e.O_.length===0&&n.o_();break}s=r.batchId,oP(e,r)}catch(r){await Ma(e,r)}Cy(e)&&Sy(e)}function iP(t){return sr(t)&&t.O_.length<10}function oP(t,e){t.O_.push(e);const n=bs(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Cy(t){return sr(t)&&!bs(t).n_()&&t.O_.length>0}function Sy(t){bs(t).start()}async function aP(t){bs(t).p_()}async function lP(t){const e=bs(t);for(const n of t.O_)e.m_(n.mutations)}async function cP(t,e,n){const s=t.O_.shift(),r=Wu.from(s,e,n);await Ry(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await vl(t)}async function uP(t,e){e&&bs(t).V_&&await async function(s,r){if(function(o){return XC(o)&&o!==$.ABORTED}(r.code)){const i=s.O_.shift();bs(s).s_(),await Ry(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await vl(s)}}(t,e),Cy(t)&&Sy(t)}async function Ip(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const s=sr(n);n.L_.add(3),await vo(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yl(n)}async function hP(t,e){const n=fe(t);e?(n.L_.delete(2),await yl(n)):e||(n.L_.add(2),await vo(n),n.q_.set("Unknown"))}function Kr(t){return t.K_||(t.K_=function(n,s,r){const i=fe(n);return i.w_(),new YS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:tP.bind(null,t),Ro:nP.bind(null,t),mo:sP.bind(null,t),d_:rP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),nh(t)?th(t):t.q_.set("Unknown")):(await t.K_.stop(),by(t))})),t.K_}function bs(t){return t.U_||(t.U_=function(n,s,r){const i=fe(n);return i.w_(),new JS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:aP.bind(null,t),mo:uP.bind(null,t),f_:lP.bind(null,t),g_:cP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vl(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new sh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),mo(t))return new X($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=mi(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Sr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.W_=new qe(oe.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ur{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ur(e,n,Sr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fP{constructor(){this.queries=Ap(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=fe(n),i=r.queries;r.queries=Ap(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(s)})})(this,new X($.ABORTED,"Firestore shutting down"))}}function Ap(){return new zr(t=>J_(t),dl)}async function Py(t,e){const n=fe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new dP,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=rh(o,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ih(n)}async function ky(t,e){const n=fe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function pP(t,e){const n=fe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(r)&&(s=!0);o.z_=r}}s&&ih(n)}function mP(t,e,n){const s=fe(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function ih(t){t.Y_.forEach(e=>{e.next()})}var Xc,bp;(bp=Xc||(Xc={})).ea="default",bp.Cache="cache";class Dy{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ur(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.key=e}}class Ny{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=X_(e),this.Ra=new Sr(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new wp,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,p)=>{const g=r.get(d),y=fl(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),O=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;g&&y?g.data.isEqual(y.data)?S!==O&&(s.track({type:3,doc:y}),D=!0):this.ga(g,y)||(s.track({type:2,doc:y}),D=!0,(c&&this.Aa(y,c)>0||u&&this.Aa(y,u)<0)&&(l=!0)):!g&&y?(s.track({type:0,doc:y}),D=!0):g&&!y&&(s.track({type:1,doc:g}),D=!0,(c||u)&&(l=!0)),D&&(y?(o=o.add(y),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(y,S){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return O(y)-O(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(s),r=r!=null&&r;const l=n&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ur(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Ny(s))}),this.da.forEach(s=>{e.has(s)||n.push(new Oy(s))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ur.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _P{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yP{constructor(e){this.key=e,this.va=!1}}class vP{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new zr(l=>J_(l),dl),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(oe.comparator),this.Na=new Map,this.La=new Yu,this.Ba={},this.ka=new Map,this.qa=Fr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function EP(t,e,n=!0){const s=Uy(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await Vy(s,e,n,!0),r}async function TP(t,e){const n=Uy(t);await Vy(n,e,!0,!1)}async function Vy(t,e,n,s){const r=await qS(t.localStore,In(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await IP(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&wy(t.remoteStore,r),l}async function IP(t,e,n,s,r){t.Ka=(p,g,y)=>async function(O,D,N,x){let j=D.view.ma(N);j.ns&&(j=await vp(O.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,j)));const M=x&&x.targetChanges.get(D.targetId),re=x&&x.targetMismatches.get(D.targetId)!=null,ne=D.view.applyChanges(j,O.isPrimaryClient,M,re);return Cp(O,D.targetId,ne.wa),ne.snapshot}(t,p,g,y);const i=await vp(t.localStore,e,!0),o=new gP(e,i.Ts),l=o.ma(i.documents),c=yo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);Cp(t,n,u.wa);const d=new _P(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function wP(t,e,n){const s=fe(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!dl(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Jc(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Zu(s.remoteStore,r.targetId),Zc(s,r.targetId)}).catch(po)):(Zc(s,r.targetId),await Jc(s.localStore,r.targetId,!0))}async function AP(t,e){const n=fe(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Zu(n.remoteStore,s.targetId))}async function bP(t,e,n){const s=OP(t);try{const r=await function(o,l){const c=fe(o),u=Ze.now(),d=l.reduce((y,S)=>y.add(S.key),_e());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=Gn(),O=_e();return c.cs.getEntries(y,d).next(D=>{S=D,S.forEach((N,x)=>{x.isValidDocument()||(O=O.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,S)).next(D=>{p=D;const N=[];for(const x of l){const j=WC(x,p.get(x.key).overlayedDocument);j!=null&&N.push(new Cs(x.key,j,q_(j.value.mapValue),$t.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,N,l)}).next(D=>{g=D;const N=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(y,D.batchId,N)})}).then(()=>({batchId:g.batchId,changes:ey(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new qe(Ce)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(s,r.batchId,n),await Eo(s,r.changes),await vl(s.remoteStore)}catch(r){const i=rh(r,"Failed to persist write");n.reject(i)}}async function xy(t,e){const n=fe(t);try{const s=await $S(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Na.get(i);o&&(ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?ke(o.va):r.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await Eo(n,s,e)}catch(s){await po(s)}}function Rp(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&ih(c)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let o=new qe(oe.comparator);o=o.insert(i,Et.newNoDocument(i,de.min()));const l=_e().add(i),c=new gl(de.min(),new Map,new qe(Ce),o,l);await xy(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(e),oh(s)}else await Jc(s.localStore,e,!1).then(()=>Zc(s,e,n)).catch(po)}async function CP(t,e){const n=fe(t),s=e.batch.batchId;try{const r=await US(n.localStore,e);Ly(n,s,null),My(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Eo(n,r)}catch(r){await po(r)}}async function SP(t,e,n){const s=fe(t);try{const r=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ke(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);Ly(s,e,n),My(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Eo(s,r)}catch(r){await po(r)}}function My(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Ly(t,e,n){const s=fe(t);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function Zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||Fy(t,s)})}function Fy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),oh(t))}function Cp(t,e,n){for(const s of n)s instanceof Oy?(t.La.addReference(s.key,e),PP(t,s)):s instanceof Ny?(ee("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||Fy(t,s.key)):he()}function PP(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(s),oh(t))}function oh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new oe(Le.fromString(e)),s=t.qa.next();t.Na.set(s,new yP(n)),t.Oa=t.Oa.insert(n,s),wy(t.remoteStore,new fs(In(Hu(n.path)),s,"TargetPurposeLimboResolution",Fu.oe))}}async function Eo(t,e,n){const s=fe(t),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((l,c)=>{o.push(s.Ka(c,e,n).then(u=>{var d;if((u||n)&&s.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){r.push(u);const p=Xu.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,u){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,g=>q.forEach(g.$i,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>q.forEach(g.Ui,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!mo(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=d.os.get(g),S=y.snapshotVersion,O=y.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(g,O)}}}(s.localStore,i))}async function kP(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const s=await vy(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new X($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Eo(n,s.hs)}}function DP(t,e){const n=fe(t),s=n.Na.get(e);if(s&&s.va)return _e().add(s.key);{let r=_e();const i=n.Ma.get(e);if(!i)return r;for(const o of i){const l=n.Fa.get(o);r=r.unionWith(l.view.Va)}return r}}function Uy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.Ca.d_=pP.bind(null,e.eventManager),e.Ca.$a=mP.bind(null,e.eventManager),e}function OP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SP.bind(null,e),e}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_l(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return FS(this.persistence,new MS,e.initialUser,this.serializer)}Ga(e){return new NS(Ju.Zr,this.serializer)}Wa(e){return new zS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kP.bind(null,this.syncEngine),await hP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fP}()}createDatastore(e){const n=_l(e.databaseInfo.databaseId),s=function(i){return new QS(i)}(e.databaseInfo);return function(i,o,l,c){return new XS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new eP(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rp(this.syncEngine,n,0),function(){return Tp.D()?new Tp:new KS}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,d){const p=new vP(r,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=fe(r);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await vo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}eu.provider={build:()=>new eu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=$_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await vy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VP(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Ip(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Ip(e.remoteStore,r)),t._onlineComponents=e}async function VP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Vr("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new La)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await dc(t,new La);return t._offlineComponents}async function By(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Sp(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Sp(t,new eu))),t._onlineComponents}function xP(t){return By(t).then(e=>e.syncEngine)}async function tu(t){const e=await By(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=wP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AP.bind(null,e.syncEngine),n}function MP(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new $y({next:g=>{d.Za(),o.enqueueAndForget(()=>ky(i,p)),g.fromCache&&c.source==="server"?u.reject(new X($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Dy(l,d,{includeMetadataChanges:!0,_a:!0});return Py(i,p)}(await tu(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e,n){if(!n)throw new X($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LP(t,e,n,s){if(e===!0&&s===!0)throw new X($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kp(t){if(!oe.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dp(t){if(oe.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function El(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=El(t);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new tC;switch(s.type){case"firstParty":return new iC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Pp.get(n);s&&(ee("ComponentProvider","Removing Datastore"),Pp.delete(n),s.terminate())}(this),Promise.resolve()}}function FP(t,e,n,s={}){var r;const i=(t=rn(t,Tl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=_t.MOCK_USER;else{l=Gg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(u)}t._authCredentials=new nC(new U_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Es extends rr{constructor(e,n,s){super(e,n,Hu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new oe(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function Di(t,e,...n){if(t=Ke(t),qy("collection","path",e),t instanceof Tl){const s=Le.fromString(e,...n);return Dp(s),new Es(t,null,s)}{if(!(t instanceof Ct||t instanceof Es))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Dp(s),new Es(t.firestore,null,s)}}function Ls(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=$_.newId()),qy("doc","path",e),t instanceof Tl){const s=Le.fromString(e,...n);return kp(s),new Ct(t,null,new oe(s))}{if(!(t instanceof Ct||t instanceof Es))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return kp(s),new Ct(t.firestore,t instanceof Es?t.converter:null,new oe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ty(this,"async_queue_retry"),this.Vu=()=>{const s=hc();s&&ee("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!mo(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=sh.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Vp(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Js extends Tl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Np,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Np(e),this._firestoreClient=void 0,await e}}}function UP(t,e){const n=typeof t=="object"?t:Cu(),s=typeof t=="string"?t:"(default)",r=ol(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=zg("firestore");i&&FP(r,...i)}return r}function Il(t){if(t._terminated)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$P(t),t._firestoreClient}function $P(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,d){return new yC(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new NP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r(dt.fromBase64String(e))}catch(n){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $r(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=/^__.*__$/;class jP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}class Hy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class ch{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.Ou(e),r}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(zy(this.Cu)&&BP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||_l(e)}Qu(e,n,s,r=!1){return new ch({Cu:e,methodName:n,qu:s,path:ut.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Al(t){const e=t._freezeSettings(),n=_l(t._databaseId);return new qP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ky(t,e,n,s,r,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,r);hh("Data must be an object, but it was:",o,s);const l=Qy(s,o);let c,u;if(i.merge)c=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=nu(e,p,n);if(!o.contains(g))throw new X($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Jy(d,g)||d.push(g)}c=new Ut(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new jP(new Dt(l),c,u)}class bl extends wl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}class uh extends wl{_toFieldTransform(e){return new qC(e.path,new Xi)}isEqual(e){return e instanceof uh}}function Wy(t,e,n,s){const r=t.Qu(1,e,n);hh("Data must be an object, but it was:",r,s);const i=[],o=Dt.empty();nr(s,(c,u)=>{const d=dh(e,c,n);u=Ke(u);const p=r.Nu(d);if(u instanceof bl)i.push(d);else{const g=Io(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ut(i);return new Hy(o,l,r.fieldTransforms)}function Gy(t,e,n,s,r,i){const o=t.Qu(1,e,n),l=[nu(e,s,n)],c=[r];if(i.length%2!=0)throw new X($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(nu(e,i[g])),c.push(i[g+1]);const u=[],d=Dt.empty();for(let g=l.length-1;g>=0;--g)if(!Jy(u,l[g])){const y=l[g];let S=c[g];S=Ke(S);const O=o.Nu(y);if(S instanceof bl)u.push(y);else{const D=Io(S,O);D!=null&&(u.push(y),d.set(y,D))}}const p=new Ut(u);return new Hy(d,p,o.fieldTransforms)}function HP(t,e,n,s=!1){return Io(n,t.Qu(s?4:3,e))}function Io(t,e){if(Yy(t=Ke(t)))return hh("Unsupported field value:",e,t),Qy(t,e);if(t instanceof wl)return function(s,r){if(!zy(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=Io(l,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Ke(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $C(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ze.fromDate(s);return{timestampValue:xa(r.serializer,i)}}if(s instanceof Ze){const i=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xa(r.serializer,i)}}if(s instanceof ah)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $r)return{bytesValue:dy(r.serializer,s._byteString)};if(s instanceof Ct){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof lh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return zu(l.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${El(s)}`)}(t,e)}function Qy(t,e){const n={};return B_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(t,(s,r)=>{const i=Io(r,e.Mu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Yy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof ah||t instanceof $r||t instanceof Ct||t instanceof wl||t instanceof lh)}function hh(t,e,n){if(!Yy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=El(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function nu(t,e,n){if((e=Ke(e))instanceof To)return e._internalPath;if(typeof e=="string")return dh(t,e);throw Fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const zP=new RegExp("[~\\*/\\[\\]]");function dh(t,e,n){if(e.search(zP)>=0)throw Fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new To(...e.split("."))._internalPath}catch{throw Fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new X($.INVALID_ARGUMENT,l+t+c)}function Jy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KP extends Xy{data(){return super.data()}}function fh(t,e){return typeof e=="string"?dh(t,e):e instanceof To?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ph{}class WP extends ph{}function Ua(t,e,...n){let s=[];e instanceof ph&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof mh).length,l=i.filter(c=>c instanceof Rl).length;if(o>1||o>0&&l>0)throw new X($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Rl extends WP{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Rl(e,n,s)}_apply(e){const n=this._parse(e);return ev(e._query,n),new rr(e.firestore,e.converter,zc(e._query,n))}_parse(e){const n=Al(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mp(p,d);const y=[];for(const S of p)y.push(xp(c,i,S));g={arrayValue:{values:y}}}else g=xp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mp(p,d),g=HP(l,o,p,d==="in"||d==="not-in");return Ye.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function GP(t,e,n){const s=e,r=fh("where",t);return Rl._create(r,s,n)}class mh extends ph{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)ev(o,c),o=zc(o,c)}(e._query,n),new rr(e.firestore,e.converter,zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xp(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new X($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Y_(e)&&n.indexOf("/")!==-1)throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Le.fromString(n));if(!oe.isDocumentKey(s))throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return np(t,new oe(s))}if(n instanceof Ct)return np(t,n._key);throw new X($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${El(n)}.`)}function Mp(t,e){if(!Array.isArray(t)||t.length===0)throw new X($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ev(t,e){const n=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class QP{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return nr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ge(o.doubleValue));return new lh(i)}convertGeoPoint(e){return new ah(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$u(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=As(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);ke(yy(s));const r=new Yi(s.get(1),s.get(3)),i=new oe(s.popFirst(5));return r.isEqual(n)||Wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nv extends Xy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fa extends nv{data(e={}){return super.data(e)}}class sv{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new _i(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fa(this._firestore,this._userDataWriter,s.key,s,new _i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:YP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class gh extends QP{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function JP(t){t=rn(t,rr);const e=rn(t.firestore,Js),n=Il(e),s=new gh(e);return Zy(t._query),MP(n,t._query).then(r=>new sv(e,s,t,r))}function XP(t,e,n){t=rn(t,Ct);const s=rn(t.firestore,Js),r=tv(t.converter,e,n);return _h(s,[Ky(Al(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,$t.none())])}function Lp(t,e,n,...s){t=rn(t,Ct);const r=rn(t.firestore,Js),i=Al(r);let o;return o=typeof(e=Ke(e))=="string"||e instanceof To?Gy(i,"updateDoc",t._key,e,n,s):Wy(i,"updateDoc",t._key,e),_h(r,[o.toMutation(t._key,$t.exists(!0))])}function $s(t,...e){var n,s,r;t=Ke(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Vp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Vp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let c,u,d;if(t instanceof Ct)u=rn(t.firestore,Js),d=Hu(t._key.path),c={next:p=>{e[o]&&e[o](ZP(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=rn(t,rr);u=rn(p.firestore,Js),d=p._query;const g=new gh(u);c={next:y=>{e[o]&&e[o](new sv(u,g,p,y))},error:e[o+1],complete:e[o+2]},Zy(t._query)}return function(g,y,S,O){const D=new $y(O),N=new Dy(y,D,S);return g.asyncQueue.enqueueAndForget(async()=>Py(await tu(g),N)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>ky(await tu(g),N))}}(Il(u),d,l,c)}function _h(t,e){return function(s,r){const i=new vs;return s.asyncQueue.enqueueAndForget(async()=>bP(await xP(s),r,i)),i.promise}(Il(t),e)}function ZP(t,e,n){const s=n.docs.get(e._key),r=new gh(t);return new nv(t,r,e._key,s,new _i(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Al(e)}set(e,n,s){this._verifyNotCommitted();const r=fc(e,this._firestore),i=tv(r.converter,n,s),o=Ky(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,$t.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=fc(e,this._firestore);let o;return o=typeof(n=Ke(n))=="string"||n instanceof To?Gy(this._dataReader,"WriteBatch.update",i._key,n,s,r):Wy(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,$t.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fc(e,this._firestore);return this._mutations=this._mutations.concat(new Ku(n._key,$t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fc(t,e){if((t=Ke(t)).firestore!==e)throw new X($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function hr(){return new uh("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){return Il(t=rn(t,Js)),new e1(t,e=>_h(t,e))}(function(e,n=!0){(function(r){Hr=r})(er),Ks(new Is("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Js(new sC(s.getProvider("auth-internal")),new aC(s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),vn(Jf,"4.7.3",e),vn(Jf,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebasestorage.googleapis.com",n1="storageBucket",s1=2*60*1e3,r1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Cn{constructor(e,n,s=0){super(pc(e),`Firebase Storage: ${n} (${pc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Rn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Rn||(Rn={}));function pc(t){return"storage/"+t}function i1(){const t="An unknown error occurred, please check the error payload for server response.";return new Sn(Rn.UNKNOWN,t)}function o1(){return new Sn(Rn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function a1(){return new Sn(Rn.CANCELED,"User canceled the upload/download.")}function l1(t){return new Sn(Rn.INVALID_URL,"Invalid URL '"+t+"'.")}function c1(t){return new Sn(Rn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Fp(t){return new Sn(Rn.INVALID_ARGUMENT,t)}function iv(){return new Sn(Rn.APP_DELETED,"The Firebase app was deleted.")}function u1(t){return new Sn(Rn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(s.path==="")return s;throw c1(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${r}/o${g}`,"i"),S={bucket:1,path:3},O=n===rv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",N=new RegExp(`^https?://${O}/${r}/${D}`,"i"),j=[{regex:l,indices:c,postModify:i},{regex:y,indices:S,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<j.length;M++){const re=j[M],ne=re.regex.exec(e);if(ne){const w=ne[re.indices.bucket];let m=ne[re.indices.path];m||(m=""),s=new tn(w,m),re.postModify(s);break}}if(s==null)throw l1(e);return s}}class h1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...D){u||(u=!0,e.apply(null,D))}function p(D){r=setTimeout(()=>{r=null,t(y,c())},D)}function g(){i&&clearTimeout(i)}function y(D,...N){if(u){g();return}if(D){g(),d.call(null,D,...N);return}if(c()||o){g(),d.call(null,D,...N);return}s<64&&(s*=2);let j;l===1?(l=2,j=0):j=(s+Math.random())*1e3,p(j)}let S=!1;function O(D){S||(S=!0,g(),!u&&(r!==null?(D||(l=2),clearTimeout(r),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function f1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){return t!==void 0}function Up(t,e,n,s){if(s<e)throw Fp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fp(`Invalid value for '${t}'. Expected ${n} or less.`)}function m1(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var $a;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($a||($a={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,s,r,i,o,l,c,u,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,S)=>{this.resolve_=y,this.reject_=S,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Go(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===$a.NO_ERROR,c=i.getStatus();if(!l||g1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===$a.ABORT;s(!1,new Go(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Go(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());p1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=i1();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?iv():a1();o(c)}else{const c=o1();o(c)}};this.canceled_?n(!1,new Go(!1,null,!0)):this.backoffId_=d1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&f1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Go{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function y1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function E1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function T1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function I1(t,e,n,s,r,i,o=!0){const l=m1(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return E1(u,e),y1(u,n),v1(u,i),T1(u,s),new _1(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function A1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ba(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A1(this._location.path)}get storage(){return this._service}get parent(){const e=w1(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Ba(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw u1(e)}}function $p(t,e){const n=e==null?void 0:e[n1];return n==null?null:tn.makeFromBucketSpec(n,t)}function b1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Gg(r,t.app.options.projectId))}class R1{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=rv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=s1,this._maxUploadRetryTime=r1,this._requests=new Set,r!=null?this._bucket=tn.makeFromBucketSpec(r,this._host):this._bucket=$p(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=$p(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Up("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Up("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ba(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new h1(iv());{const o=I1(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Bp="@firebase/storage",jp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="storage";function C1(t=Cu(),e){t=Ke(t);const s=ol(t,ov).getImmediate({identifier:e}),r=zg("storage");return r&&S1(s,...r),s}function S1(t,e,n,s={}){b1(t,e,n,s)}function P1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new R1(n,s,r,e,er)}function k1(){Ks(new Is(ov,P1,"PUBLIC").setMultipleInstances(!0)),vn(Bp,jp,""),vn(Bp,jp,"esm2017")}k1();const D1={apiKey:"AIzaSyDgxx86TgNTKdl7EwevQTK4IDTl20MEnGY",authDomain:"ninarojasmp.firebaseapp.com",projectId:"ninarojasmp",storageBucket:"ninarojasmp.appspot.com",messagingSenderId:"818909449234",appId:"1:818909449234:web:c38311031eb326e0c3dccb"},yh=Jg(D1),Oi=ZR(yh),Kt=UP(yh);C1(yh);var Qo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const O1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Je=(t,e)=>({size:n,strokeWidth:s=2,absoluteStrokeWidth:r,color:i,...o},{attrs:l,slots:c})=>Ta("svg",{...Qo,width:n||Qo.width,height:n||Qo.height,stroke:i||Qo.stroke,"stroke-width":r?Number(s)*24/Number(n):s,...l,class:["lucide",`lucide-${O1(t)}`,(l==null?void 0:l.class)||""],...o},[...e.map(u=>Ta(...u)),...c.default?[c.default()]:[]]),N1=Je("AwardIcon",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),V1=Je("BookOpenIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),x1=Je("BriefcaseIcon",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),M1=Je("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),L1=Je("FileTextIcon",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),F1=Je("HeadphonesIcon",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]),U1=Je("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),qp=Je("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),$1=Je("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Hp=Je("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),B1=Je("MusicIcon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),j1=Je("PauseIcon",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),q1=Je("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),H1=Je("PlayIcon",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),zp=Je("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),z1=Je("RadioIcon",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]),K1=Je("SaveIcon",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),W1=Je("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Kp=Je("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),G1=Je("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Q1={class:"home"},Y1={class:"navbar"},J1={class:"container"},X1={class:"nav-content"},Z1={class:"nav-links"},ek={class:"mobile-nav-links"},tk={id:"inicio",class:"hero"},nk={class:"container"},sk={class:"hero-content"},rk={class:"hero-actions"},ik={class:"hero-visual"},ok={class:"sound-wave"},ak={id:"servicios",class:"services section-padding"},lk={class:"container"},ck={class:"services-grid"},uk={class:"service-icon"},hk={key:0,class:"service-price"},dk={key:1,class:"service-badge"},fk={id:"portfolio",class:"portfolio section-padding"},pk={class:"container"},mk={class:"portfolio-tabs"},gk=["onClick"],_k={class:"portfolio-grid"},yk={class:"demo-header"},vk=["onClick"],Ek={class:"audio-progress"},Tk=["src","onEnded"],Ik={id:"contacto",class:"contact section-padding"},wk={class:"container"},Ak={class:"contact-content"},bk={class:"contact-info"},Rk={class:"contact-item"},Ck={class:"contact-item"},Sk={class:"contact-item"},Pk={class:"contact-item"},kk={class:"form-group"},Dk={class:"form-group"},Ok={class:"form-group full-width"},Nk=["disabled"],Vk={class:"footer"},xk={class:"container"},Mk={class:"footer-content"},Lk={class:"footer-links"},Fk={class:"footer-section"},Uk={class:"footer-bottom"},$k={class:"admin-link"},Bk=Bt({__name:"Home",setup(t){const e=Au(),n=We([]),s=We([]),r=We({title:"Nina Rojas",subtitle:"Voz Profesional"}),i=We({email:"",phone:"",address:"",schedule:""}),o=We(!1),l=We("Todos"),c=We(new Set),u=We({name:"",email:"",message:""}),d=We(!1),p=kt(()=>["Todos",...new Set(s.value.map(m=>m.category))]),g=kt(()=>l.value==="Todos"?s.value:s.value.filter(w=>w.category===l.value)),y=()=>{o.value=!o.value},S=w=>{const m=document.getElementById(w);m&&m.scrollIntoView({behavior:"smooth"})},O=w=>{S(w),o.value=!1},D=w=>({Comerciales:z1,Documentales:L1,"E-learning":G1,Audiolibros:V1,Corporativo:N1,IVR:F1})[w]||Hp,N=async w=>{const m=document.querySelector(`audio[src*="${w}"]`);m&&(c.value.has(w)?(m.pause(),c.value.delete(w)):(c.value.forEach(E=>{const v=document.querySelector(`audio[src*="${E}"]`);v&&v.pause()}),c.value.clear(),m.play(),c.value.add(w)))},x=w=>c.value.has(w),j=w=>{c.value.delete(w)},M=w=>{},re=w=>{const m=document.querySelector(`audio[src*="${w}"]`);return m&&m.duration?m.currentTime/m.duration*100:0},ne=async()=>{d.value=!0;try{await new Promise(w=>setTimeout(w,1e3)),e.success("Mensaje enviado exitosamente. Te contactaré pronto."),u.value={name:"",email:"",message:""}}catch{e.error("Error al enviar el mensaje. Inténtalo de nuevo.")}finally{d.value=!1}};return ro(()=>{const w=$s(Ua(Di(Kt,"services")),R=>{n.value=R.docs.map(b=>({id:b.id,...b.data()}))},R=>{console.error("Error en suscripción a servicios:",R)}),m=$s(Ua(Di(Kt,"audioDemos")),R=>{s.value=R.docs.map(b=>({id:b.id,...b.data()}))},R=>{console.error("Error en suscripción a demos:",R)}),E=$s(Ls(Kt,"content","hero"),R=>{R.exists()&&(r.value={id:R.id,...R.data()})},R=>{console.error("Error en suscripción a hero:",R)}),v=$s(Ls(Kt,"content","contact"),R=>{R.exists()&&(i.value={id:R.id,...R.data()})},R=>{console.error("Error en suscripción a contacto:",R)});gu(()=>{w(),m(),E(),v()})}),(w,m)=>{const E=ms("router-link");return ce(),Ie("div",Q1,[C("nav",Y1,[C("div",J1,[C("div",X1,[m[19]||(m[19]=na('<div class="logo" data-v-d409c041><div class="logo-image" data-v-d409c041><img src="'+tc+'" alt="Nina Rojas Logo" class="logo-img" data-v-d409c041></div><div class="logo-text-container" data-v-d409c041><span class="logo-text" data-v-d409c041>Nina Rojas</span><span class="logo-subtitle" data-v-d409c041>Voz Profesional</span></div></div>',1)),C("div",Z1,[C("a",{href:"#inicio",onClick:m[0]||(m[0]=v=>S("inicio"))},"Inicio"),C("a",{href:"#servicios",onClick:m[1]||(m[1]=v=>S("servicios"))},"Servicios"),C("a",{href:"#portfolio",onClick:m[2]||(m[2]=v=>S("portfolio"))},"Portfolio"),C("a",{href:"#contacto",onClick:m[3]||(m[3]=v=>S("contacto"))},"Contacto")]),C("button",{class:"menu-toggle",onClick:y},m[18]||(m[18]=[C("span",null,null,-1),C("span",null,null,-1),C("span",null,null,-1)]))])])]),C("div",{class:an(["mobile-menu",{active:o.value}])},[C("div",ek,[C("a",{href:"#inicio",onClick:m[4]||(m[4]=v=>O("inicio"))},"Inicio"),C("a",{href:"#servicios",onClick:m[5]||(m[5]=v=>O("servicios"))},"Servicios"),C("a",{href:"#portfolio",onClick:m[6]||(m[6]=v=>O("portfolio"))},"Portfolio"),C("a",{href:"#contacto",onClick:m[7]||(m[7]=v=>O("contacto"))},"Contacto")])],2),C("section",tk,[m[23]||(m[23]=C("div",{class:"hero-background"},null,-1)),C("div",nk,[C("div",sk,[m[22]||(m[22]=na('<div class="hero-logo" data-v-d409c041><img src="'+tc+'" alt="Nina Rojas Logo" class="hero-logo-img" data-v-d409c041></div><h1 class="hero-title" data-v-d409c041><span class="highlight" data-v-d409c041>Nina Rojas</span><span class="subtitle" data-v-d409c041>Locutora Profesional</span></h1><p class="hero-description" data-v-d409c041> NR Max publicidad el arte de comunicar a un solo click. </p><div class="hero-stats" data-v-d409c041><div class="hero-stat" data-v-d409c041><span class="stat-number" data-v-d409c041>500+</span><span class="stat-label" data-v-d409c041>Proyectos</span></div><div class="hero-stat" data-v-d409c041><span class="stat-number" data-v-d409c041>5</span><span class="stat-label" data-v-d409c041>Años</span></div><div class="hero-stat" data-v-d409c041><span class="stat-number" data-v-d409c041>100%</span><span class="stat-label" data-v-d409c041>Satisfacción</span></div></div>',4)),C("div",rk,[C("a",{href:"#portfolio",onClick:m[8]||(m[8]=v=>S("portfolio")),class:"btn btn-primary"},[we(Fe(Hp),{class:"btn-icon"}),m[20]||(m[20]=yt(" Escuchar "))]),C("a",{href:"#contacto",onClick:m[9]||(m[9]=v=>S("contacto")),class:"btn btn-secondary"},[we(Fe(qp),{class:"btn-icon"}),m[21]||(m[21]=yt(" Contactar "))])])]),C("div",ik,[C("div",ok,[(ce(),Ie(Ue,null,Mn(5,v=>C("div",{class:"wave",key:v,style:Hs({animationDelay:v*.1+"s"})},null,4)),64))])])])]),C("section",ak,[C("div",lk,[m[24]||(m[24]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Servicios"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"Soluciones profesionales de voz para cada necesidad")],-1)),C("div",ck,[(ce(!0),Ie(Ue,null,Mn(n.value,v=>(ce(),Ie("div",{class:"service-card",key:v.id},[C("div",uk,[(ce(),Rt(io(D(v.title))))]),C("h3",null,Wt(v.title),1),C("p",null,Wt(v.description),1),v.price?(ce(),Ie("div",hk,Wt(v.price),1)):js("",!0),v.featured?(ce(),Ie("div",dk,"Más Solicitado")):js("",!0)]))),128))])])]),C("section",fk,[C("div",pk,[m[25]||(m[25]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Portfolio"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"Escucha algunos de mis trabajos más destacados")],-1)),C("div",mk,[(ce(!0),Ie(Ue,null,Mn(p.value,v=>(ce(),Ie("button",{key:v,onClick:R=>l.value=v,class:an([{active:l.value===v},"tab-button"])},Wt(v),11,gk))),128))]),C("div",_k,[(ce(!0),Ie(Ue,null,Mn(g.value,v=>(ce(),Ie("div",{key:v.id,class:"demo-card"},[C("div",yk,[C("h4",null,Wt(v.title),1),C("button",{onClick:R=>N(v.id),class:"play-button"},[x(v.id)?(ce(),Rt(Fe(j1),{key:1})):(ce(),Rt(Fe(H1),{key:0}))],8,vk)]),C("p",null,Wt(v.description),1),C("div",Ek,[C("div",{class:"progress-bar",style:Hs({width:re(v.id)+"%"})},null,4)]),C("audio",{ref_for:!0,ref:"audio-"+v.id,src:v.audioUrl,onTimeupdate:m[10]||(m[10]=R=>M()),onEnded:R=>j(v.id)},null,40,Tk)]))),128))])])]),C("section",Ik,[C("div",wk,[m[34]||(m[34]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Contacto"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"¿Tienes un proyecto en mente? Hablemos")],-1)),C("div",Ak,[C("div",bk,[m[30]||(m[30]=C("h3",null,"Información de Contacto",-1)),C("div",Rk,[we(Fe(qp),{class:"contact-icon"}),m[26]||(m[26]=C("div",null,[C("span",{class:"contact-label"},"Email"),C("span",{class:"contact-value"},"ninaymarco3@gmail.com")],-1))]),C("div",Ck,[we(Fe(q1),{class:"contact-icon"}),m[27]||(m[27]=C("div",null,[C("span",{class:"contact-label"},"Teléfono"),C("span",{class:"contact-value"},"+57 310 6035384")],-1))]),C("div",Sk,[we(Fe($1),{class:"contact-icon"}),m[28]||(m[28]=C("div",null,[C("span",{class:"contact-label"},"Ubicación"),C("span",{class:"contact-value"},"Colombia")],-1))]),C("div",Pk,[we(Fe(M1),{class:"contact-icon"}),m[29]||(m[29]=C("div",null,[C("span",{class:"contact-label"},"Horario"),C("span",{class:"contact-value"},"Lun - Vie: 9:00 AM - 6:00 PM")],-1))])]),C("form",{onSubmit:Eu(ne,["prevent"]),class:"contact-form"},[C("div",kk,[m[31]||(m[31]=C("label",{for:"name"},"Nombre *",-1)),xt(C("input",{type:"text",id:"name","onUpdate:modelValue":m[11]||(m[11]=v=>u.value.name=v),required:""},null,512),[[Xt,u.value.name]])]),C("div",Dk,[m[32]||(m[32]=C("label",{for:"email"},"Email *",-1)),xt(C("input",{type:"email",id:"email","onUpdate:modelValue":m[12]||(m[12]=v=>u.value.email=v),required:""},null,512),[[Xt,u.value.email]])]),C("div",Ok,[m[33]||(m[33]=C("label",{for:"message"},"Mensaje *",-1)),xt(C("textarea",{id:"message","onUpdate:modelValue":m[13]||(m[13]=v=>u.value.message=v),rows:"5",required:""},null,512),[[Xt,u.value.message]])]),C("button",{type:"submit",class:"btn btn-primary",disabled:d.value},[we(Fe(W1),{class:"btn-icon"}),yt(" "+Wt(d.value?"Enviando...":"Enviar Mensaje"),1)],8,Nk)],32)])])]),C("footer",Vk,[C("div",xk,[C("div",Mk,[m[37]||(m[37]=na('<div class="footer-brand" data-v-d409c041><div class="logo" data-v-d409c041><div class="logo-image" data-v-d409c041><img src="'+tc+'" alt="Nina Rojas Logo" class="logo-img" data-v-d409c041></div><div class="logo-text-container" data-v-d409c041><span class="logo-text" data-v-d409c041>Nina Rojas</span><span class="logo-subtitle" data-v-d409c041>Voz Profesional</span></div></div><p data-v-d409c041>NR Max publicidad el arte de comunicar a un solo click.</p></div>',1)),C("div",Lk,[C("div",Fk,[m[35]||(m[35]=C("h4",null,"Navegación",-1)),C("ul",null,[C("li",null,[C("a",{href:"#inicio",onClick:m[14]||(m[14]=v=>S("inicio"))},"Inicio")]),C("li",null,[C("a",{href:"#servicios",onClick:m[15]||(m[15]=v=>S("servicios"))},"Servicios")]),C("li",null,[C("a",{href:"#portfolio",onClick:m[16]||(m[16]=v=>S("portfolio"))},"Portfolio")]),C("li",null,[C("a",{href:"#contacto",onClick:m[17]||(m[17]=v=>S("contacto"))},"Contacto")])])]),m[36]||(m[36]=C("div",{class:"footer-section"},[C("h4",null,"Contacto"),C("ul",null,[C("li",null,"ninaymarco3@gmail.com"),C("li",null,"+57 310 6035384"),C("li",null,"Colombia")])],-1))])]),C("div",Uk,[m[39]||(m[39]=C("p",null,"© 2025 Nina Rojas. Todos los derechos reservados.",-1)),C("div",$k,[we(E,{to:"/admin/login",class:"admin-link-text"},{default:Zs(()=>m[38]||(m[38]=[yt("Admin")])),_:1,__:[38]})])])])])])}}}),vh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},jk=vh(Bk,[["__scopeId","data-v-d409c041"]]),ui=We(null),Wp=We(!0),av=()=>{const t=Iu(),e=Au(),n=kt(()=>!!ui.value);return{user:ui,loading:Wp,isAuthenticated:n,login:async(o,l)=>{try{const c=await Fb(Oi,o,l);ui.value=c.user,e.success("Inicio de sesión exitoso"),t.push("/admin")}catch(c){throw e.error("Error al iniciar sesión: "+c.message),c}},logout:async()=>{try{await jb(Oi),ui.value=null,e.success("Sesión cerrada"),t.push("/")}catch(o){e.error("Error al cerrar sesión: "+o.message)}},initAuth:()=>{Bb(Oi,o=>{ui.value=o,Wp.value=!1})}}},qk=()=>{const t=Au(),e=We(!1),n=We(null);return{getContent:(u,d)=>{const p=Ls(Kt,"content",u);return $s(p,g=>{g.exists()?d({id:g.id,...g.data()}):d(null)},g=>{n.value="Error en tiempo real: "+g.message,t.error(n.value)})},updateContent:async(u,d)=>{if(!Array.isArray(d))return n.value="Los datos deben ser un array",t.error(n.value),!1;e.value=!0,n.value=null;try{if(u==="hero"||u==="contact"){const p=Ls(Kt,"content",u);return await XP(p,{...d,updatedAt:hr()},{merge:!0}),!0}else if(u==="services"||u==="portfolio"){if(!d.every(D=>D&&typeof D=="object"))throw new Error("Todos los elementos deben ser objetos válidos");const p=Di(Kt,u),g=t1(Kt),y=await JP(p),S=new Map;y.forEach(D=>{S.set(D.id,D.ref)});const O=new Set;for(const D of d){if(!D)continue;const N={...D},x=N.id;if(delete N.id,x&&S.has(x)){const j=S.get(x);g.update(j,{...N,updatedAt:hr()}),O.add(x)}else{const j=Ls(p);g.set(j,{...N,createdAt:hr(),updatedAt:hr()})}}for(const[D,N]of S.entries())O.has(D)||g.delete(N);await g.commit()}return t.success("Datos actualizados exitosamente"),!0}catch(p){return console.error("Error en updateContent:",p),n.value=`Error al actualizar ${u}: ${p.message}`,t.error(n.value),!1}finally{e.value=!1}},getServices:u=>{const d=Ua(Di(Kt,"services"));return $s(d,p=>{const g=p.docs.map(y=>({id:y.id,...y.data()}));u(g)},p=>{n.value="Error en tiempo real (servicios): "+p.message,t.error(n.value)})},updateService:async(u,d)=>{try{const p=Ls(Kt,"services",u);return await Lp(p,{...d,updatedAt:hr()}),t.success("Servicio actualizado exitosamente"),!0}catch(p){return n.value="Error al actualizar servicio: "+p.message,t.error(n.value),!1}},getAudioDemos:(u,d)=>{const p=[];d&&d!=="Todos"&&p.push(GP("category","==",d));const g=Ua(Di(Kt,"audioDemos"),...p);return $s(g,y=>{const S=y.docs.map(O=>({id:O.id,...O.data()}));u(S)},y=>{n.value="Error en tiempo real (demos): "+y.message,t.error(n.value)})},updateAudioDemo:async(u,d)=>{try{const p=Ls(Kt,"audioDemos",u);return await Lp(p,{...d,updatedAt:hr()}),t.success("Demo actualizada exitosamente"),!0}catch(p){return n.value="Error al actualizar demo: "+p.message,t.error(n.value),!1}},loading:e,error:n}},Hk={class:"admin-panel"},zk={class:"admin-header"},Kk={class:"container"},Wk={class:"header-content"},Gk={class:"header-actions"},Qk=["disabled"],Yk={class:"admin-content"},Jk={class:"container"},Xk={class:"admin-tabs"},Zk=["onClick"],eD={key:0,class:"admin-section"},tD={class:"section-header"},nD={class:"services-list"},sD={class:"service-editor"},rD={class:"form-row"},iD={class:"form-group"},oD=["onUpdate:modelValue"],aD={class:"form-group"},lD=["onUpdate:modelValue"],cD={class:"form-group"},uD=["onUpdate:modelValue"],hD={class:"form-row"},dD={class:"checkbox-group"},fD=["id","onUpdate:modelValue"],pD=["for"],mD=["onClick"],gD={key:1,class:"admin-section"},_D={class:"section-header"},yD={class:"demos-list"},vD={class:"demo-editor"},ED={class:"form-row"},TD={class:"form-group"},ID=["onUpdate:modelValue"],wD={class:"form-group"},AD=["onUpdate:modelValue"],bD={class:"form-group"},RD=["onUpdate:modelValue"],CD={class:"form-row"},SD={class:"form-group"},PD=["onUpdate:modelValue"],kD=["onClick"],DD=Bt({__name:"Admin",setup(t){const{logout:e,isAuthenticated:n,initAuth:s}=av(),{updateContent:r}=qk(),i=Iu(),o=We("hero"),l=We(!1),c=[{id:"services",label:"Servicios",icon:x1},{id:"portfolio",label:"Portfolio",icon:B1}],u=We([]),d=We([]),p=()=>{const D={id:Date.now().toString(),title:"",description:"",price:"",featured:!1};u.value.push(D)},g=D=>{u.value.splice(D,1)},y=()=>{const D={id:Date.now().toString(),title:"",description:"",audioUrl:"",category:""};d.value.push(D)},S=D=>{d.value.splice(D,1)},O=async()=>{l.value=!0;try{await Promise.all([r("services",u.value),r("portfolio",d.value)]),console.log("Changes saved successfully")}catch(D){console.error("Error saving changes:",D)}finally{l.value=!1}};return ro(()=>{s(),n.value||i.push("/admin/login")}),(D,N)=>(ce(),Ie("div",Hk,[C("header",zk,[C("div",Kk,[C("div",Wk,[N[2]||(N[2]=C("div",{class:"admin-brand"},[C("h1",null,"Panel Administrativo"),C("span",null,"Nina Rojas - Gestión de Contenido")],-1)),C("div",Gk,[C("button",{onClick:O,class:"btn btn-primary",disabled:l.value},[we(Fe(K1),{class:"btn-icon"}),yt(" "+Wt(l.value?"Guardando...":"Guardar Cambios"),1)],8,Qk),C("button",{onClick:N[0]||(N[0]=(...x)=>Fe(e)&&Fe(e)(...x)),class:"btn btn-secondary"},[we(Fe(U1),{class:"btn-icon"}),N[1]||(N[1]=yt(" Cerrar Sesión "))])])])])]),C("main",Yk,[C("div",Jk,[C("div",Xk,[(ce(),Ie(Ue,null,Mn(c,x=>C("button",{key:x.id,onClick:j=>o.value=x.id,class:an([{active:o.value===x.id},"tab-button"])},[(ce(),Rt(io(x.icon),{class:"tab-icon"})),yt(" "+Wt(x.label),1)],10,Zk)),64))]),o.value==="services"?(ce(),Ie("div",eD,[C("div",tD,[N[4]||(N[4]=C("h2",{class:"section-title"},"Gestión de Servicios",-1)),C("button",{onClick:p,class:"btn btn-primary"},[we(Fe(zp),{class:"btn-icon"}),N[3]||(N[3]=yt(" Agregar Servicio "))])]),C("div",nD,[(ce(!0),Ie(Ue,null,Mn(u.value,(x,j)=>(ce(),Ie("div",{key:x.id,class:"service-item"},[C("div",sD,[C("div",rD,[C("div",iD,[N[5]||(N[5]=C("label",null,"Título",-1)),xt(C("input",{"onUpdate:modelValue":M=>x.title=M,type:"text"},null,8,oD),[[Xt,x.title]])]),C("div",aD,[N[6]||(N[6]=C("label",null,"Precio",-1)),xt(C("input",{"onUpdate:modelValue":M=>x.price=M,type:"text",placeholder:"Desde $150 USD"},null,8,lD),[[Xt,x.price]])])]),C("div",cD,[N[7]||(N[7]=C("label",null,"Descripción",-1)),xt(C("textarea",{"onUpdate:modelValue":M=>x.description=M,rows:"3"},null,8,uD),[[Xt,x.description]])]),C("div",hD,[C("div",dD,[xt(C("input",{type:"checkbox",id:"featured-"+x.id,"onUpdate:modelValue":M=>x.featured=M},null,8,fD),[[tI,x.featured]]),C("label",{for:"featured-"+x.id},"Servicio Destacado",8,pD)]),C("button",{onClick:M=>g(j),class:"btn btn-danger"},[we(Fe(Kp),{class:"btn-icon"}),N[8]||(N[8]=yt(" Eliminar "))],8,mD)])])]))),128))])])):js("",!0),o.value==="portfolio"?(ce(),Ie("div",gD,[C("div",_D,[N[10]||(N[10]=C("h2",{class:"section-title"},"Gestión de Portfolio",-1)),C("button",{onClick:y,class:"btn btn-primary"},[we(Fe(zp),{class:"btn-icon"}),N[9]||(N[9]=yt(" Agregar Demo "))])]),C("div",yD,[(ce(!0),Ie(Ue,null,Mn(d.value,(x,j)=>(ce(),Ie("div",{key:x.id,class:"demo-item"},[C("div",vD,[C("div",ED,[C("div",TD,[N[11]||(N[11]=C("label",null,"Título",-1)),xt(C("input",{"onUpdate:modelValue":M=>x.title=M,type:"text"},null,8,ID),[[Xt,x.title]])]),C("div",wD,[N[13]||(N[13]=C("label",null,"Categoría",-1)),xt(C("select",{"onUpdate:modelValue":M=>x.category=M},N[12]||(N[12]=[na('<option value="Comerciales" data-v-a98196bb>Comerciales</option><option value="Documentales" data-v-a98196bb>Documentales</option><option value="E-learning" data-v-a98196bb>E-learning</option><option value="Audiolibros" data-v-a98196bb>Audiolibros</option><option value="Corporativo" data-v-a98196bb>Corporativo</option>',5)]),8,AD),[[nI,x.category]])])]),C("div",bD,[N[14]||(N[14]=C("label",null,"Descripción",-1)),xt(C("textarea",{"onUpdate:modelValue":M=>x.description=M,rows:"2"},null,8,RD),[[Xt,x.description]])]),C("div",CD,[C("div",SD,[N[15]||(N[15]=C("label",null,"URL del Audio",-1)),xt(C("input",{"onUpdate:modelValue":M=>x.audioUrl=M,type:"url",placeholder:"https://ejemplo.com/audio.mp3"},null,8,PD),[[Xt,x.audioUrl]])]),C("button",{onClick:M=>S(j),class:"btn btn-danger"},[we(Fe(Kp),{class:"btn-icon"}),N[16]||(N[16]=yt(" Eliminar "))],8,kD)])])]))),128))])])):js("",!0)])])]))}}),OD=vh(DD,[["__scopeId","data-v-a98196bb"]]),ND={class:"admin-login"},VD={class:"login-container"},xD={class:"login-card"},MD={class:"form-group"},LD=["disabled"],FD={class:"form-group"},UD=["disabled"],$D=["disabled"],BD={key:0},jD={key:1},qD={class:"login-footer"},HD=Bt({__name:"AdminLogin",setup(t){const{login:e,isAuthenticated:n,initAuth:s}=av(),r=Iu(),i=We(""),o=We(""),l=We(!1),c=async()=>{if(!(!i.value||!o.value)){l.value=!0;try{await e(i.value,o.value)}catch(u){console.error("Login error:",u)}finally{l.value=!1}}};return ro(()=>{s(),n.value&&r.push("/admin")}),(u,d)=>{const p=ms("router-link");return ce(),Ie("div",ND,[C("div",VD,[C("div",xD,[d[5]||(d[5]=C("div",{class:"login-header"},[C("h1",null,"Panel Administrativo"),C("p",null,"Nina Rojas - Administración del Sitio Web")],-1)),C("form",{onSubmit:Eu(c,["prevent"]),class:"login-form"},[C("div",MD,[d[2]||(d[2]=C("label",{for:"email"},"Email",-1)),xt(C("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=g=>i.value=g),required:"",disabled:l.value,placeholder:"Correo Electrónico"},null,8,LD),[[Xt,i.value]])]),C("div",FD,[d[3]||(d[3]=C("label",{for:"password"},"Contraseña",-1)),xt(C("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=g=>o.value=g),required:"",disabled:l.value,placeholder:"••••••••"},null,8,UD),[[Xt,o.value]])]),C("button",{type:"submit",class:"btn btn-primary login-btn",disabled:l.value},[l.value?(ce(),Ie("span",BD,"Iniciando sesión...")):(ce(),Ie("span",jD,"Iniciar Sesión"))],8,$D)],32),C("div",qD,[we(p,{to:"/",class:"back-link"},{default:Zs(()=>d[4]||(d[4]=[yt("← Volver al sitio web")])),_:1,__:[4]})])])])])}}}),zD=vh(HD,[["__scopeId","data-v-bd65abcb"]]),KD=[{path:"/",component:jk},{path:"/admin",component:OD,meta:{requiresAuth:!0}},{path:"/admin/login",component:zD}],lv=uw({history:UI(),routes:KD}),Eh=ag(c0);Oi.onAuthStateChanged(()=>{console.log("Estado de autenticación actualizado")});lv.beforeEach(async(t,e,n)=>{const s=t.matched.some(i=>i.meta.requiresAuth),r=Oi.currentUser;if(t.path==="/admin/login"&&r){n("/admin");return}if(s&&!r){n("/admin/login");return}n()});Eh.use(lv);Eh.use(a0,{position:Hi.TOP_RIGHT,timeout:5e3,closeOnClick:!0,pauseOnHover:!0,filterBeforeCreate:t=>t.type==="error"?t:!1});Eh.mount("#app");
