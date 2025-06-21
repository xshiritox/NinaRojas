(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},vr=[],gn=()=>{},Qv=()=>!1,Ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),du=t=>t.startsWith("onUpdate:"),et=Object.assign,fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yv=Object.prototype.hasOwnProperty,Oe=(t,e)=>Yv.call(t,e),oe=Array.isArray,Er=t=>so(t)==="[object Map]",jr=t=>so(t)==="[object Set]",yd=t=>so(t)==="[object Date]",ge=t=>typeof t=="function",ze=t=>typeof t=="string",rn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",fm=t=>(xe(t)||ge(t))&&ge(t.then)&&ge(t.catch),pm=Object.prototype.toString,so=t=>pm.call(t),Jv=t=>so(t).slice(8,-1),mm=t=>so(t)==="[object Object]",pu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xv=/-(\w)/g,Qt=Ga(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),Zv=/\B([A-Z])/g,Js=Ga(t=>t.replace(Zv,"-$1").toLowerCase()),Qa=Ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yo=Ga(t=>t?`on${Qa(t)}`:""),ms=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e},eE=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let vd;const Ya=()=>vd||(vd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?rE(s):Hs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ze(t)||xe(t))return t}const tE=/;(?![^(]*\))/g,nE=/:([^]+)/,sE=/\/\*[^]*?\*\//g;function rE(t){const e={};return t.replace(sE,"").split(tE).forEach(n=>{if(n){const s=n.split(nE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function on(t){let e="";if(ze(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=on(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oE=hu(iE);function gm(t){return!!t||t===""}function aE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ro(t[s],e[s]);return n}function ro(t,e){if(t===e)return!0;let n=yd(t),s=yd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rn(t),s=rn(e),n||s)return t===e;if(n=oe(t),s=oe(e),n||s)return n&&s?aE(t,e):!1;if(n=xe(t),s=xe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ro(t[o],e[o]))return!1}}return String(t)===String(e)}function mu(t,e){return t.findIndex(n=>ro(n,e))}const _m=t=>!!(t&&t.__v_isRef===!0),zt=t=>ze(t)?t:t==null?"":oe(t)||xe(t)&&(t.toString===pm||!ge(t.toString))?_m(t)?zt(t.value):JSON.stringify(t,ym,2):String(t),ym=(t,e)=>_m(e)?ym(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[zl(s,i)+" =>"]=r,n),{})}:jr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zl(n))}:rn(e)?zl(e):xe(e)&&!oe(e)&&!mm(e)?String(e):e,zl=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class lE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cE(){return Pt}let Le;const Kl=new WeakSet;class vm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kl.has(this)&&(Kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ed(this),wm(this);const e=Le,n=nn;Le=this,nn=!0;try{return this.fn()}finally{Im(this),Le=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yu(e);this.deps=this.depsTail=void 0,Ed(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wc(this)&&this.run()}get dirty(){return wc(this)}}let Em=0,Ti,wi;function Tm(t,e=!1){if(t.flags|=8,e){t.next=wi,wi=t;return}t.next=Ti,Ti=t}function gu(){Em++}function _u(){if(--Em>0)return;if(wi){let e=wi;for(wi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function wm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Im(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),yu(s),uE(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vi)||(t.globalVersion=Vi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wc(t))))return;t.flags|=2;const e=t.dep,n=Le,s=nn;Le=t,nn=!0;try{wm(t);const r=t.fn(t._value);(e.version===0||ms(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Le=n,nn=s,Im(t),t.flags&=-3}}function yu(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const Am=[];function qn(){Am.push(nn),nn=!1}function Hn(){const t=Am.pop();nn=t===void 0?!0:t}function Ed(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Vi=0;class hE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!nn||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new hE(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,Rm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=s)}return n}trigger(e){this.version++,Vi++,this.notify(e)}notify(e){gu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_u()}}}function Rm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Rm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ic=new WeakMap,$s=Symbol(""),bc=Symbol(""),Mi=Symbol("");function vt(t,e,n){if(nn&&Le){let s=Ic.get(t);s||Ic.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new vu),r.map=s,r.key=n),r.track()}}function Dn(t,e,n,s,r,i){const o=Ic.get(t);if(!o){Vi++;return}const l=c=>{c&&c.trigger()};if(gu(),e==="clear")o.forEach(l);else{const c=oe(t),u=c&&pu(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,g)=>{(g==="length"||g===Mi||!rn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Mi)),e){case"add":c?u&&l(o.get("length")):(l(o.get($s)),Er(t)&&l(o.get(bc)));break;case"delete":c||(l(o.get($s)),Er(t)&&l(o.get(bc)));break;case"set":Er(t)&&l(o.get($s));break}}_u()}function lr(t){const e=Ce(t);return e===t?e:(vt(e,"iterate",Mi),Kt(t)?e:e.map(lt))}function Ja(t){return vt(t=Ce(t),"iterate",Mi),t}const dE={__proto__:null,[Symbol.iterator](){return Gl(this,Symbol.iterator,lt)},concat(...t){return lr(this).concat(...t.map(e=>oe(e)?lr(e):e))},entries(){return Gl(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return kn(this,"every",t,e,void 0,arguments)},filter(t,e){return kn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return kn(this,"find",t,e,lt,arguments)},findIndex(t,e){return kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return kn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ql(this,"includes",t)},indexOf(...t){return Ql(this,"indexOf",t)},join(t){return lr(this).join(t)},lastIndexOf(...t){return Ql(this,"lastIndexOf",t)},map(t,e){return kn(this,"map",t,e,void 0,arguments)},pop(){return li(this,"pop")},push(...t){return li(this,"push",t)},reduce(t,...e){return Td(this,"reduce",t,e)},reduceRight(t,...e){return Td(this,"reduceRight",t,e)},shift(){return li(this,"shift")},some(t,e){return kn(this,"some",t,e,void 0,arguments)},splice(...t){return li(this,"splice",t)},toReversed(){return lr(this).toReversed()},toSorted(t){return lr(this).toSorted(t)},toSpliced(...t){return lr(this).toSpliced(...t)},unshift(...t){return li(this,"unshift",t)},values(){return Gl(this,"values",lt)}};function Gl(t,e,n){const s=Ja(t),r=s[e]();return s!==t&&!Kt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const fE=Array.prototype;function kn(t,e,n,s,r,i){const o=Ja(t),l=o!==t&&!Kt(t),c=o[e];if(c!==fE[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,s);return l&&r?r(d):d}function Td(t,e,n,s){const r=Ja(t);let i=n;return r!==t&&(Kt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),r[e](i,...s)}function Ql(t,e,n){const s=Ce(t);vt(s,"iterate",Mi);const r=s[e](...n);return(r===-1||r===!1)&&wu(n[0])?(n[0]=Ce(n[0]),s[e](...n)):r}function li(t,e,n=[]){qn(),gu();const s=Ce(t)[e].apply(t,n);return _u(),Hn(),s}const pE=hu("__proto__,__v_isRef,__isVue"),Sm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function mE(t){rn(t)||(t=String(t));const e=Ce(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Cm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?AE:Nm:i?Om:km).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=oe(e);if(!r){let c;if(o&&(c=dE[n]))return c;if(n==="hasOwnProperty")return mE}const l=Reflect.get(e,n,Tt(e)?e:s);return(rn(n)?Sm.has(n):pE(n))||(r||vt(e,"get",n),i)?l:Tt(l)?o&&pu(n)?l:l.value:xe(l)?r?Vm(l):Xa(l):l}}class Pm extends Cm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ts(i);if(!Kt(s)&&!Ts(s)&&(i=Ce(i),s=Ce(s)),!oe(e)&&Tt(i)&&!Tt(s))return c?!1:(i.value=s,!0)}const o=oe(e)&&pu(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,s,Tt(e)?e:r);return e===Ce(r)&&(o?ms(s,i)&&Dn(e,"set",n,s):Dn(e,"add",n,s)),l}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Dn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!rn(n)||!Sm.has(n))&&vt(e,"has",n),s}ownKeys(e){return vt(e,"iterate",oe(e)?"length":$s),Reflect.ownKeys(e)}}class gE extends Cm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _E=new Pm,yE=new gE,vE=new Pm(!0);const Ac=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function EE(t,e,n){return function(...s){const r=this.__v_raw,i=Ce(r),o=Er(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),d=n?Ac:e?_a:lt;return!e&&vt(i,"iterate",c?bc:$s),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function $o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function TE(t,e){const n={get(r){const i=this.__v_raw,o=Ce(i),l=Ce(r);t||(ms(r,l)&&vt(o,"get",r),vt(o,"get",l));const{has:c}=Fo(o),u=e?Ac:t?_a:lt;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&vt(Ce(r),"iterate",$s),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Ce(i),l=Ce(r);return t||(ms(r,l)&&vt(o,"has",r),vt(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Ce(l),u=e?Ac:t?_a:lt;return!t&&vt(c,"iterate",$s),l.forEach((d,p)=>r.call(i,u(d),u(p),o))}};return et(n,t?{add:$o("add"),set:$o("set"),delete:$o("delete"),clear:$o("clear")}:{add(r){!e&&!Kt(r)&&!Ts(r)&&(r=Ce(r));const i=Ce(this);return Fo(i).has.call(i,r)||(i.add(r),Dn(i,"add",r,r)),this},set(r,i){!e&&!Kt(i)&&!Ts(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=Fo(o);let u=l.call(o,r);u||(r=Ce(r),u=l.call(o,r));const d=c.call(o,r);return o.set(r,i),u?ms(i,d)&&Dn(o,"set",r,i):Dn(o,"add",r,i),this},delete(r){const i=Ce(this),{has:o,get:l}=Fo(i);let c=o.call(i,r);c||(r=Ce(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Dn(i,"delete",r,void 0),u},clear(){const r=Ce(this),i=r.size!==0,o=r.clear();return i&&Dn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=EE(r,t,e)}),n}function Eu(t,e){const n=TE(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const wE={get:Eu(!1,!1)},IE={get:Eu(!1,!0)},bE={get:Eu(!0,!1)};const km=new WeakMap,Om=new WeakMap,Nm=new WeakMap,AE=new WeakMap;function RE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function SE(t){return t.__v_skip||!Object.isExtensible(t)?0:RE(Jv(t))}function Xa(t){return Ts(t)?t:Tu(t,!1,_E,wE,km)}function Dm(t){return Tu(t,!1,vE,IE,Om)}function Vm(t){return Tu(t,!0,yE,bE,Nm)}function Tu(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=SE(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Tr(t){return Ts(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ts(t){return!!(t&&t.__v_isReadonly)}function Kt(t){return!!(t&&t.__v_isShallow)}function wu(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function CE(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Tc(t,"__v_skip",!0),t}const lt=t=>xe(t)?Xa(t):t,_a=t=>xe(t)?Vm(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Xe(t){return Mm(t,!1)}function PE(t){return Mm(t,!0)}function Mm(t,e){return Tt(t)?t:new kE(t,e)}class kE{constructor(e,n){this.dep=new vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Kt(e)||Ts(e);e=s?e:Ce(e),ms(e,n)&&(this._rawValue=e,this._value=s?e:lt(e),this.dep.trigger())}}function $e(t){return Tt(t)?t.value:t}const OE={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Tt(r)&&!Tt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function xm(t){return Tr(t)?t:new Proxy(t,OE)}class NE{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Tm(this,!0),!0}get value(){const e=this.dep.track();return bm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DE(t,e,n=!1){let s,r;return ge(t)?s=t:(s=t.get,r=t.set),new NE(s,r,n)}const Bo={},ya=new WeakMap;let Ms;function VE(t,e=!1,n=Ms){if(n){let s=ya.get(n);s||ya.set(n,s=[]),s.push(t)}}function ME(t,e,n=Me){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>r?$:Kt($)||r===!1||r===0?Vn($,1):Vn($);let d,p,g,E,C=!1,O=!1;if(Tt(t)?(p=()=>t.value,C=Kt(t)):Tr(t)?(p=()=>u(t),C=!0):oe(t)?(O=!0,C=t.some($=>Tr($)||Kt($)),p=()=>t.map($=>{if(Tt($))return $.value;if(Tr($))return u($);if(ge($))return c?c($,2):$()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){qn();try{g()}finally{Hn()}}const $=Ms;Ms=d;try{return c?c(t,3,[E]):t(E)}finally{Ms=$}}:p=gn,e&&r){const $=p,Z=r===!0?1/0:r;p=()=>Vn($(),Z)}const N=cE(),B=()=>{d.stop(),N&&N.active&&fu(N.effects,d)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),B()}}let q=O?new Array(t.length).fill(Bo):Bo;const H=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const Z=d.run();if(r||C||(O?Z.some((U,T)=>ms(U,q[T])):ms(Z,q))){g&&g();const U=Ms;Ms=d;try{const T=[Z,q===Bo?void 0:O&&q[0]===Bo?[]:q,E];q=Z,c?c(e,3,T):e(...T)}finally{Ms=U}}}else d.run()};return l&&l(H),d=new vm(p),d.scheduler=o?()=>o(H,!1):H,E=$=>VE($,!1,d),g=d.onStop=()=>{const $=ya.get(d);if($){if(c)c($,4);else for(const Z of $)Z();ya.delete(d)}},e?s?H(!0):q=d.run():o?o(H.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Vn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))Vn(t.value,e,n);else if(oe(t))for(let s=0;s<t.length;s++)Vn(t[s],e,n);else if(jr(t)||Er(t))t.forEach(s=>{Vn(s,e,n)});else if(mm(t)){for(const s in t)Vn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Vn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,s){try{return s?t(...s):t()}catch(r){Za(r,e,n)}}function an(t,e,n,s){if(ge(t)){const r=io(t,e,n,s);return r&&fm(r)&&r.catch(i=>{Za(i,e,n)}),r}if(oe(t)){const r=[];for(let i=0;i<t.length;i++)r.push(an(t[i],e,n,s));return r}}function Za(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){qn(),io(i,null,10,[t,c,u]),Hn();return}}xE(t,n,r,s,o)}function xE(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Rt=[];let pn=-1;const wr=[];let is=null,ur=0;const Lm=Promise.resolve();let va=null;function el(t){const e=va||Lm;return t?e.then(this?t.bind(this):t):e}function LE(t){let e=pn+1,n=Rt.length;for(;e<n;){const s=e+n>>>1,r=Rt[s],i=xi(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Iu(t){if(!(t.flags&1)){const e=xi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=xi(n)?Rt.push(t):Rt.splice(LE(e),0,t),t.flags|=1,Um()}}function Um(){va||(va=Lm.then($m))}function UE(t){oe(t)?wr.push(...t):is&&t.id===-1?is.splice(ur+1,0,t):t.flags&1||(wr.push(t),t.flags|=1),Um()}function wd(t,e,n=pn+1){for(;n<Rt.length;n++){const s=Rt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Rt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Fm(t){if(wr.length){const e=[...new Set(wr)].sort((n,s)=>xi(n)-xi(s));if(wr.length=0,is){is.push(...e);return}for(is=e,ur=0;ur<is.length;ur++){const n=is[ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}is=null,ur=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $m(t){try{for(pn=0;pn<Rt.length;pn++){const e=Rt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Rt.length;pn++){const e=Rt[pn];e&&(e.flags&=-2)}pn=-1,Rt.length=0,Fm(),va=null,(Rt.length||wr.length)&&$m()}}let nt=null,Bm=null;function Ea(t){const e=nt;return nt=t,Bm=t&&t.type.__scopeId||null,e}function Xs(t,e=nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Nd(-1);const i=Ea(e);let o;try{o=t(...r)}finally{Ea(i),s._d&&Nd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mt(t,e){if(nt===null)return t;const n=ol(nt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Me]=e[r];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ns(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(qn(),an(c,n,8,[t.el,l,t,e]),Hn())}}const FE=Symbol("_vte"),$E=t=>t.__isTeleport,cr=Symbol("_leaveCb"),jo=Symbol("_enterCb");function BE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oo(()=>{t.isMounted=!0}),Km(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],jE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt};function qE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rc(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:C,onLeaveCancelled:O,onBeforeAppear:N,onAppear:B,onAfterAppear:q,onAppearCancelled:H}=e,$=String(t.key),Z=qE(n,t),U=(y,A)=>{y&&an(y,s,9,A)},T=(y,A)=>{const R=A[1];U(y,A),oe(y)?y.every(w=>w.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let A=c;if(!n.isMounted)if(i)A=N||c;else return;y[cr]&&y[cr](!0);const R=Z[$];R&&hr(t,R)&&R.el[cr]&&R.el[cr](),U(A,[y])},enter(y){let A=u,R=d,w=p;if(!n.isMounted)if(i)A=B||u,R=q||d,w=H||p;else return;let m=!1;const le=y[jo]=J=>{m||(m=!0,J?U(w,[y]):U(R,[y]),v.delayedLeave&&v.delayedLeave(),y[jo]=void 0)};A?T(A,[y,le]):le()},leave(y,A){const R=String(t.key);if(y[jo]&&y[jo](!0),n.isUnmounting)return A();U(g,[y]);let w=!1;const m=y[cr]=le=>{w||(w=!0,A(),le?U(O,[y]):U(C,[y]),y[cr]=void 0,Z[R]===t&&delete Z[R])};Z[R]=t,E?T(E,[y,m]):m()},clone(y){return Rc(y,e,n,s)}};return v}function Li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jm(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Be?(o.patchFlag&128&&r++,s=s.concat(jm(o.children,e,l))):(e||o.type!==In)&&s.push(l!=null?Ws(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Bt(t,e){return ge(t)?et({name:t.name},e,{setup:t}):t}function qm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ii(t,e,n,s,r=!1){if(oe(t)){t.forEach((C,O)=>Ii(C,e&&(oe(e)?e[O]:e),n,s,r));return}if(Ir(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ii(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?ol(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,p=l.setupState,g=Ce(p),E=p===Me?()=>!1:C=>Oe(g,C);if(u!=null&&u!==c&&(ze(u)?(d[u]=null,E(u)&&(p[u]=null)):Tt(u)&&(u.value=null)),ge(c))io(c,l,12,[o,d]);else{const C=ze(c),O=Tt(c);if(C||O){const N=()=>{if(t.f){const B=C?E(c)?p[c]:d[c]:c.value;r?oe(B)&&fu(B,i):oe(B)?B.includes(i)||B.push(i):C?(d[c]=[i],E(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,E(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(N.id=-1,Vt(N,n)):N()}}}Ya().requestIdleCallback;Ya().cancelIdleCallback;const Ir=t=>!!t.type.__asyncLoader,Hm=t=>t.type.__isKeepAlive;function HE(t,e){Wm(t,"a",e)}function WE(t,e){Wm(t,"da",e)}function Wm(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(tl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Hm(r.parent.vnode)&&zE(s,e,n,r),r=r.parent}}function zE(t,e,n,s){const r=tl(e,t,s,!0);nl(()=>{fu(s[e],r)},n)}function tl(t,e,n=ct,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{qn();const l=lo(n),c=an(e,n,t,o);return l(),Hn(),c});return s?r.unshift(i):r.push(i),i}}const Qn=t=>(e,n=ct)=>{(!$i||t==="sp")&&tl(t,(...s)=>e(...s),n)},KE=Qn("bm"),oo=Qn("m"),GE=Qn("bu"),zm=Qn("u"),Km=Qn("bum"),nl=Qn("um"),QE=Qn("sp"),YE=Qn("rtg"),JE=Qn("rtc");function XE(t,e=ct){tl("ec",t,e)}const Gm="components";function gs(t,e){return Ym(Gm,t,!0,e)||t}const Qm=Symbol.for("v-ndc");function ao(t){return ze(t)?Ym(Gm,t,!1)||t:t||Qm}function Ym(t,e,n=!0,s=!1){const r=nt||ct;if(r){const i=r.type;{const l=FT(i,!1);if(l&&(l===e||l===Qt(e)||l===Qa(Qt(e))))return i}const o=Id(r[t]||i[t],e)||Id(r.appContext[t],e);return!o&&s?i:o}}function Id(t,e){return t&&(t[e]||t[Qt(e)]||t[Qa(Qt(e))])}function Mn(t,e,n,s){let r;const i=n,o=oe(t);if(o||ze(t)){const l=o&&Tr(t);let c=!1,u=!1;l&&(c=!Kt(t),u=Ts(t),t=Ja(t)),r=new Array(t.length);for(let d=0,p=t.length;d<p;d++)r[d]=e(c?u?_a(lt(t[d])):lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=e(t[d],d,c,i)}}else r=[];return r}function ZE(t,e,n={},s,r){if(nt.ce||nt.parent&&Ir(nt.parent)&&nt.parent.ce)return he(),St(Be,null,[Ae("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Jm(i(n)),l=n.key||o&&o.key,c=St(Be,{key:(l&&!rn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Jm(t){return t.some(e=>Fi(e)?!(e.type===In||e.type===Be&&!Jm(e.children)):!0)?t:null}function eT(t,e){const n={};for(const s in t)n[Yo(s)]=t[s];return n}const Sc=t=>t?yg(t)?ol(t):Sc(t.parent):null,bi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sc(t.parent),$root:t=>Sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zm(t),$forceUpdate:t=>t.f||(t.f=()=>{Iu(t.update)}),$nextTick:t=>t.n||(t.n=el.bind(t.proxy)),$watch:t=>TT.bind(t)}),Yl=(t,e)=>t!==Me&&!t.__isScriptSetup&&Oe(t,e),tT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Yl(s,e))return o[e]=1,s[e];if(r!==Me&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Me&&Oe(n,e))return o[e]=4,n[e];Cc&&(o[e]=0)}}const d=bi[e];let p,g;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Yl(r,e)?(r[e]=n,!0):s!==Me&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&Oe(t,o)||Yl(e,o)||(l=i[0])&&Oe(l,o)||Oe(s,o)||Oe(bi,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cc=!0;function nT(t){const e=Zm(t),n=t.proxy,s=t.ctx;Cc=!1,e.beforeCreate&&Ad(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:C,activated:O,deactivated:N,beforeDestroy:B,beforeUnmount:q,destroyed:H,unmounted:$,render:Z,renderTracked:U,renderTriggered:T,errorCaptured:v,serverPrefetch:y,expose:A,inheritAttrs:R,components:w,directives:m,filters:le}=e;if(u&&sT(u,s,null),o)for(const Te in o){const ye=o[Te];ge(ye)&&(s[Te]=ye.bind(n))}if(r){const Te=r.call(n,n);xe(Te)&&(t.data=Xa(Te))}if(Cc=!0,i)for(const Te in i){const ye=i[Te],Nt=ge(ye)?ye.bind(n,n):ge(ye.get)?ye.get.bind(n,n):gn,Yt=!ge(ye)&&ge(ye.set)?ye.set.bind(n):gn,jt=kt({get:Nt,set:Yt});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>jt.value,set:je=>jt.value=je})}if(l)for(const Te in l)Xm(l[Te],s,n,Te);if(c){const Te=ge(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{Xo(ye,Te[ye])})}d&&Ad(d,t,"c");function De(Te,ye){oe(ye)?ye.forEach(Nt=>Te(Nt.bind(n))):ye&&Te(ye.bind(n))}if(De(KE,p),De(oo,g),De(GE,E),De(zm,C),De(HE,O),De(WE,N),De(XE,v),De(JE,U),De(YE,T),De(Km,q),De(nl,$),De(QE,y),oe(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:Nt=>n[ye]=Nt})})}else t.exposed||(t.exposed={});Z&&t.render===gn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),w&&(t.components=w),m&&(t.directives=m),y&&qm(t)}function sT(t,e,n=gn){oe(t)&&(t=Pc(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=sn(r.from||s,r.default,!0):i=sn(r.from||s):i=sn(r),Tt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ad(t,e,n){an(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xm(t,e,n,s){let r=s.includes(".")?dg(n,s):()=>n[s];if(ze(t)){const i=e[t];ge(i)&&Zo(r,i)}else if(ge(t))Zo(r,t.bind(n));else if(xe(t))if(oe(t))t.forEach(i=>Xm(i,e,n,s));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Zo(r,i,t)}}function Zm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Ta(c,u,o,!0)),Ta(c,e,o)),xe(e)&&i.set(e,c),c}function Ta(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ta(t,i,n,!0),r&&r.forEach(o=>Ta(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=rT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const rT={data:Rd,props:Sd,emits:Sd,methods:fi,computed:fi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:fi,directives:fi,watch:oT,provide:Rd,inject:iT};function Rd(t,e){return e?t?function(){return et(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function iT(t,e){return fi(Pc(t),Pc(e))}function Pc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?et(Object.create(null),t,e):e}function Sd(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),bd(t),bd(e??{})):e}function oT(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function eg(){return{app:null,config:{isNativeTag:Qv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aT=0;function lT(t,e){return function(s,r=null){ge(s)||(s=et({},s)),r!=null&&!xe(r)&&(r=null);const i=eg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:aT++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:BT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const E=u._ceVNode||Ae(s,r);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,d,g),c=!0,u._container=d,d.__vue_app__=u,ol(E.component)}},onUnmount(d){l.push(d)},unmount(){c&&(an(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=br;br=u;try{return d()}finally{br=p}}};return u}}let br=null;function Xo(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function sn(t,e,n=!1){const s=ct||nt;if(s||br){let r=br?br._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ge(e)?e.call(s&&s.proxy):e}}const tg={},ng=()=>Object.create(tg),sg=t=>Object.getPrototypeOf(t)===tg;function cT(t,e,n,s=!1){const r={},i=ng();t.propsDefaults=Object.create(null),rg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Dm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function uT(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(sl(t.emitsOptions,g))continue;const E=e[g];if(c)if(Oe(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const C=Qt(g);r[C]=kc(c,l,C,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{rg(t,e,r,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=Js(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=kc(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function rg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let d;r&&Oe(r,d=Qt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:sl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ce(n),u=l||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=kc(r,c,p,u[p],t,!Oe(u,p))}}return o}function kc(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=lo(r);s=u[n]=c.call(null,e),d()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Js(n))&&(s=!0))}return s}const hT=new WeakMap;function ig(t,e,n=!1){const s=n?hT:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[g,E]=ig(p,e,!0);et(o,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return xe(t)&&s.set(t,vr),vr;if(oe(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);Cd(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Qt(d);if(Cd(p)){const g=i[d],E=o[p]=oe(g)||ge(g)?{type:g}:et({},g),C=E.type;let O=!1,N=!0;if(oe(C))for(let B=0;B<C.length;++B){const q=C[B],H=ge(q)&&q.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(N=!1)}else O=ge(C)&&C.name==="Boolean";E[0]=O,E[1]=N,(O||Oe(E,"default"))&&l.push(p)}}const u=[o,l];return xe(t)&&s.set(t,u),u}function Cd(t){return t[0]!=="$"&&!Ei(t)}const bu=t=>t[0]==="_"||t==="$stable",Au=t=>oe(t)?t.map(mn):[mn(t)],dT=(t,e,n)=>{if(e._n)return e;const s=Xs((...r)=>Au(e(...r)),n);return s._c=!1,s},og=(t,e,n)=>{const s=t._ctx;for(const r in t){if(bu(r))continue;const i=t[r];if(ge(i))e[r]=dT(r,i,s);else if(i!=null){const o=Au(i);e[r]=()=>o}}},ag=(t,e)=>{const n=Au(e);t.slots.default=()=>n},lg=(t,e,n)=>{for(const s in e)(n||!bu(s))&&(t[s]=e[s])},fT=(t,e,n)=>{const s=t.slots=ng();if(t.vnode.shapeFlag&32){const r=e.__;r&&Tc(s,"__",r,!0);const i=e._;i?(lg(s,e,n),n&&Tc(s,"_",i,!0)):og(e,s)}else e&&ag(t,e)},pT=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Me;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:lg(r,e,n):(i=!e.$stable,og(e,r)),o=e}else e&&(ag(t,e),o={default:1});if(i)for(const l in r)!bu(l)&&o[l]==null&&delete r[l]},Vt=CT;function mT(t){return gT(t)}function gT(t,e){const n=Ya();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=gn,insertStaticContent:C}=t,O=(I,b,P,M=null,F=null,x=null,Y=void 0,K=null,z=!!b.dynamicChildren)=>{if(I===b)return;I&&!hr(I,b)&&(M=V(I),je(I,F,x,!0),I=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:Q}=b;switch(W){case rl:N(I,b,P,M);break;case In:B(I,b,P,M);break;case ea:I==null&&q(b,P,M,Y);break;case Be:w(I,b,P,M,F,x,Y,K,z);break;default:Q&1?Z(I,b,P,M,F,x,Y,K,z):Q&6?m(I,b,P,M,F,x,Y,K,z):(Q&64||Q&128)&&W.process(I,b,P,M,F,x,Y,K,z,ne)}ie!=null&&F?Ii(ie,I&&I.ref,x,b||I,!b):ie==null&&I&&I.ref!=null&&Ii(I.ref,null,x,I,!0)},N=(I,b,P,M)=>{if(I==null)s(b.el=l(b.children),P,M);else{const F=b.el=I.el;b.children!==I.children&&u(F,b.children)}},B=(I,b,P,M)=>{I==null?s(b.el=c(b.children||""),P,M):b.el=I.el},q=(I,b,P,M)=>{[I.el,I.anchor]=C(I.children,b,P,M,I.el,I.anchor)},H=({el:I,anchor:b},P,M)=>{let F;for(;I&&I!==b;)F=g(I),s(I,P,M),I=F;s(b,P,M)},$=({el:I,anchor:b})=>{let P;for(;I&&I!==b;)P=g(I),r(I),I=P;r(b)},Z=(I,b,P,M,F,x,Y,K,z)=>{b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),I==null?U(b,P,M,F,x,Y,K,z):y(I,b,F,x,Y,K,z)},U=(I,b,P,M,F,x,Y,K)=>{let z,W;const{props:ie,shapeFlag:Q,transition:re,dirs:ue}=I;if(z=I.el=o(I.type,x,ie&&ie.is,ie),Q&8?d(z,I.children):Q&16&&v(I.children,z,null,M,F,Jl(I,x),Y,K),ue&&Ns(I,null,M,"created"),T(z,I,I.scopeId,Y,M),ie){for(const _e in ie)_e!=="value"&&!Ei(_e)&&i(z,_e,null,ie[_e],x,M);"value"in ie&&i(z,"value",null,ie.value,x),(W=ie.onVnodeBeforeMount)&&dn(W,M,I)}ue&&Ns(I,null,M,"beforeMount");const ce=_T(F,re);ce&&re.beforeEnter(z),s(z,b,P),((W=ie&&ie.onVnodeMounted)||ce||ue)&&Vt(()=>{W&&dn(W,M,I),ce&&re.enter(z),ue&&Ns(I,null,M,"mounted")},F)},T=(I,b,P,M,F)=>{if(P&&E(I,P),M)for(let x=0;x<M.length;x++)E(I,M[x]);if(F){let x=F.subTree;if(b===x||pg(x.type)&&(x.ssContent===b||x.ssFallback===b)){const Y=F.vnode;T(I,Y,Y.scopeId,Y.slotScopeIds,F.parent)}}},v=(I,b,P,M,F,x,Y,K,z=0)=>{for(let W=z;W<I.length;W++){const ie=I[W]=K?os(I[W]):mn(I[W]);O(null,ie,b,P,M,F,x,Y,K)}},y=(I,b,P,M,F,x,Y)=>{const K=b.el=I.el;let{patchFlag:z,dynamicChildren:W,dirs:ie}=b;z|=I.patchFlag&16;const Q=I.props||Me,re=b.props||Me;let ue;if(P&&Ds(P,!1),(ue=re.onVnodeBeforeUpdate)&&dn(ue,P,b,I),ie&&Ns(b,I,P,"beforeUpdate"),P&&Ds(P,!0),(Q.innerHTML&&re.innerHTML==null||Q.textContent&&re.textContent==null)&&d(K,""),W?A(I.dynamicChildren,W,K,P,M,Jl(b,F),x):Y||ye(I,b,K,null,P,M,Jl(b,F),x,!1),z>0){if(z&16)R(K,Q,re,P,F);else if(z&2&&Q.class!==re.class&&i(K,"class",null,re.class,F),z&4&&i(K,"style",Q.style,re.style,F),z&8){const ce=b.dynamicProps;for(let _e=0;_e<ce.length;_e++){const we=ce[_e],st=Q[we],rt=re[we];(rt!==st||we==="value")&&i(K,we,st,rt,F,P)}}z&1&&I.children!==b.children&&d(K,b.children)}else!Y&&W==null&&R(K,Q,re,P,F);((ue=re.onVnodeUpdated)||ie)&&Vt(()=>{ue&&dn(ue,P,b,I),ie&&Ns(b,I,P,"updated")},M)},A=(I,b,P,M,F,x,Y)=>{for(let K=0;K<b.length;K++){const z=I[K],W=b[K],ie=z.el&&(z.type===Be||!hr(z,W)||z.shapeFlag&198)?p(z.el):P;O(z,W,ie,null,M,F,x,Y,!0)}},R=(I,b,P,M,F)=>{if(b!==P){if(b!==Me)for(const x in b)!Ei(x)&&!(x in P)&&i(I,x,b[x],null,F,M);for(const x in P){if(Ei(x))continue;const Y=P[x],K=b[x];Y!==K&&x!=="value"&&i(I,x,K,Y,F,M)}"value"in P&&i(I,"value",b.value,P.value,F)}},w=(I,b,P,M,F,x,Y,K,z)=>{const W=b.el=I?I.el:l(""),ie=b.anchor=I?I.anchor:l("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:ue}=b;ue&&(K=K?K.concat(ue):ue),I==null?(s(W,P,M),s(ie,P,M),v(b.children||[],P,ie,F,x,Y,K,z)):Q>0&&Q&64&&re&&I.dynamicChildren?(A(I.dynamicChildren,re,P,F,x,Y,K),(b.key!=null||F&&b===F.subTree)&&cg(I,b,!0)):ye(I,b,P,ie,F,x,Y,K,z)},m=(I,b,P,M,F,x,Y,K,z)=>{b.slotScopeIds=K,I==null?b.shapeFlag&512?F.ctx.activate(b,P,M,Y,z):le(b,P,M,F,x,Y,z):J(I,b,z)},le=(I,b,P,M,F,x,Y)=>{const K=I.component=VT(I,M,F);if(Hm(I)&&(K.ctx.renderer=ne),MT(K,!1,Y),K.asyncDep){if(F&&F.registerDep(K,De,Y),!I.el){const z=K.subTree=Ae(In);B(null,z,b,P)}}else De(K,I,b,P,F,x,Y)},J=(I,b,P)=>{const M=b.component=I.component;if(RT(I,b,P))if(M.asyncDep&&!M.asyncResolved){Te(M,b,P);return}else M.next=b,M.update();else b.el=I.el,M.vnode=b},De=(I,b,P,M,F,x,Y)=>{const K=()=>{if(I.isMounted){let{next:Q,bu:re,u:ue,parent:ce,vnode:_e}=I;{const ft=ug(I);if(ft){Q&&(Q.el=_e.el,Te(I,Q,Y)),ft.asyncDep.then(()=>{I.isUnmounted||K()});return}}let we=Q,st;Ds(I,!1),Q?(Q.el=_e.el,Te(I,Q,Y)):Q=_e,re&&Jo(re),(st=Q.props&&Q.props.onVnodeBeforeUpdate)&&dn(st,ce,Q,_e),Ds(I,!0);const rt=kd(I),qt=I.subTree;I.subTree=rt,O(qt,rt,p(qt.el),V(qt),I,F,x),Q.el=rt.el,we===null&&ST(I,rt.el),ue&&Vt(ue,F),(st=Q.props&&Q.props.onVnodeUpdated)&&Vt(()=>dn(st,ce,Q,_e),F)}else{let Q;const{el:re,props:ue}=b,{bm:ce,m:_e,parent:we,root:st,type:rt}=I,qt=Ir(b);Ds(I,!1),ce&&Jo(ce),!qt&&(Q=ue&&ue.onVnodeBeforeMount)&&dn(Q,we,b),Ds(I,!0);{st.ce&&st.ce._def.shadowRoot!==!1&&st.ce._injectChildStyle(rt);const ft=I.subTree=kd(I);O(null,ft,P,M,I,F,x),b.el=ft.el}if(_e&&Vt(_e,F),!qt&&(Q=ue&&ue.onVnodeMounted)){const ft=b;Vt(()=>dn(Q,we,ft),F)}(b.shapeFlag&256||we&&Ir(we.vnode)&&we.vnode.shapeFlag&256)&&I.a&&Vt(I.a,F),I.isMounted=!0,b=P=M=null}};I.scope.on();const z=I.effect=new vm(K);I.scope.off();const W=I.update=z.run.bind(z),ie=I.job=z.runIfDirty.bind(z);ie.i=I,ie.id=I.uid,z.scheduler=()=>Iu(ie),Ds(I,!0),W()},Te=(I,b,P)=>{b.component=I;const M=I.vnode.props;I.vnode=b,I.next=null,uT(I,b.props,M,P),pT(I,b.children,P),qn(),wd(I),Hn()},ye=(I,b,P,M,F,x,Y,K,z=!1)=>{const W=I&&I.children,ie=I?I.shapeFlag:0,Q=b.children,{patchFlag:re,shapeFlag:ue}=b;if(re>0){if(re&128){Yt(W,Q,P,M,F,x,Y,K,z);return}else if(re&256){Nt(W,Q,P,M,F,x,Y,K,z);return}}ue&8?(ie&16&&Ct(W,F,x),Q!==W&&d(P,Q)):ie&16?ue&16?Yt(W,Q,P,M,F,x,Y,K,z):Ct(W,F,x,!0):(ie&8&&d(P,""),ue&16&&v(Q,P,M,F,x,Y,K,z))},Nt=(I,b,P,M,F,x,Y,K,z)=>{I=I||vr,b=b||vr;const W=I.length,ie=b.length,Q=Math.min(W,ie);let re;for(re=0;re<Q;re++){const ue=b[re]=z?os(b[re]):mn(b[re]);O(I[re],ue,P,null,F,x,Y,K,z)}W>ie?Ct(I,F,x,!0,!1,Q):v(b,P,M,F,x,Y,K,z,Q)},Yt=(I,b,P,M,F,x,Y,K,z)=>{let W=0;const ie=b.length;let Q=I.length-1,re=ie-1;for(;W<=Q&&W<=re;){const ue=I[W],ce=b[W]=z?os(b[W]):mn(b[W]);if(hr(ue,ce))O(ue,ce,P,null,F,x,Y,K,z);else break;W++}for(;W<=Q&&W<=re;){const ue=I[Q],ce=b[re]=z?os(b[re]):mn(b[re]);if(hr(ue,ce))O(ue,ce,P,null,F,x,Y,K,z);else break;Q--,re--}if(W>Q){if(W<=re){const ue=re+1,ce=ue<ie?b[ue].el:M;for(;W<=re;)O(null,b[W]=z?os(b[W]):mn(b[W]),P,ce,F,x,Y,K,z),W++}}else if(W>re)for(;W<=Q;)je(I[W],F,x,!0),W++;else{const ue=W,ce=W,_e=new Map;for(W=ce;W<=re;W++){const it=b[W]=z?os(b[W]):mn(b[W]);it.key!=null&&_e.set(it.key,W)}let we,st=0;const rt=re-ce+1;let qt=!1,ft=0;const Jn=new Array(rt);for(W=0;W<rt;W++)Jn[W]=0;for(W=ue;W<=Q;W++){const it=I[W];if(st>=rt){je(it,F,x,!0);continue}let Ht;if(it.key!=null)Ht=_e.get(it.key);else for(we=ce;we<=re;we++)if(Jn[we-ce]===0&&hr(it,b[we])){Ht=we;break}Ht===void 0?je(it,F,x,!0):(Jn[Ht-ce]=W+1,Ht>=ft?ft=Ht:qt=!0,O(it,b[Ht],P,null,F,x,Y,K,z),st++)}const Qr=qt?yT(Jn):vr;for(we=Qr.length-1,W=rt-1;W>=0;W--){const it=ce+W,Ht=b[it],Io=it+1<ie?b[it+1].el:M;Jn[W]===0?O(null,Ht,P,Io,F,x,Y,K,z):qt&&(we<0||W!==Qr[we]?jt(Ht,P,Io,2):we--)}}},jt=(I,b,P,M,F=null)=>{const{el:x,type:Y,transition:K,children:z,shapeFlag:W}=I;if(W&6){jt(I.component.subTree,b,P,M);return}if(W&128){I.suspense.move(b,P,M);return}if(W&64){Y.move(I,b,P,ne);return}if(Y===Be){s(x,b,P);for(let Q=0;Q<z.length;Q++)jt(z[Q],b,P,M);s(I.anchor,b,P);return}if(Y===ea){H(I,b,P);return}if(M!==2&&W&1&&K)if(M===0)K.beforeEnter(x),s(x,b,P),Vt(()=>K.enter(x),F);else{const{leave:Q,delayLeave:re,afterLeave:ue}=K,ce=()=>{I.ctx.isUnmounted?r(x):s(x,b,P)},_e=()=>{Q(x,()=>{ce(),ue&&ue()})};re?re(x,ce,_e):_e()}else s(x,b,P)},je=(I,b,P,M=!1,F=!1)=>{const{type:x,props:Y,ref:K,children:z,dynamicChildren:W,shapeFlag:ie,patchFlag:Q,dirs:re,cacheIndex:ue}=I;if(Q===-2&&(F=!1),K!=null&&(qn(),Ii(K,null,P,I,!0),Hn()),ue!=null&&(b.renderCache[ue]=void 0),ie&256){b.ctx.deactivate(I);return}const ce=ie&1&&re,_e=!Ir(I);let we;if(_e&&(we=Y&&Y.onVnodeBeforeUnmount)&&dn(we,b,I),ie&6)hn(I.component,P,M);else{if(ie&128){I.suspense.unmount(P,M);return}ce&&Ns(I,null,b,"beforeUnmount"),ie&64?I.type.remove(I,b,P,ne,M):W&&!W.hasOnce&&(x!==Be||Q>0&&Q&64)?Ct(W,b,P,!1,!0):(x===Be&&Q&384||!F&&ie&16)&&Ct(z,b,P),M&&qe(I)}(_e&&(we=Y&&Y.onVnodeUnmounted)||ce)&&Vt(()=>{we&&dn(we,b,I),ce&&Ns(I,null,b,"unmounted")},P)},qe=I=>{const{type:b,el:P,anchor:M,transition:F}=I;if(b===Be){Yn(P,M);return}if(b===ea){$(I);return}const x=()=>{r(P),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:K}=F,z=()=>Y(P,x);K?K(I.el,x,z):z()}else x()},Yn=(I,b)=>{let P;for(;I!==b;)P=g(I),r(I),I=P;r(b)},hn=(I,b,P)=>{const{bum:M,scope:F,job:x,subTree:Y,um:K,m:z,a:W,parent:ie,slots:{__:Q}}=I;Pd(z),Pd(W),M&&Jo(M),ie&&oe(Q)&&Q.forEach(re=>{ie.renderCache[re]=void 0}),F.stop(),x&&(x.flags|=8,je(Y,I,b,P)),K&&Vt(K,b),Vt(()=>{I.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ct=(I,b,P,M=!1,F=!1,x=0)=>{for(let Y=x;Y<I.length;Y++)je(I[Y],b,P,M,F)},V=I=>{if(I.shapeFlag&6)return V(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=g(I.anchor||I.el),P=b&&b[FE];return P?g(P):b};let ee=!1;const X=(I,b,P)=>{I==null?b._vnode&&je(b._vnode,null,null,!0):O(b._vnode||null,I,b,null,null,null,P),b._vnode=I,ee||(ee=!0,wd(),Fm(),ee=!1)},ne={p:O,um:je,m:jt,r:qe,mt:le,mc:v,pc:ye,pbc:A,n:V,o:t};return{render:X,hydrate:void 0,createApp:lT(X)}}function Jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _T(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cg(t,e,n=!1){const s=t.children,r=e.children;if(oe(s)&&oe(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=os(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&cg(o,l)),l.type===rl&&(l.el=o.el),l.type===In&&!l.el&&(l.el=o.el)}}function yT(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ug(e)}function Pd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vT=Symbol.for("v-scx"),ET=()=>sn(vT);function Zo(t,e,n){return hg(t,e,n)}function hg(t,e,n=Me){const{immediate:s,deep:r,flush:i,once:o}=n,l=et({},n),c=e&&s||!e&&i!=="post";let u;if($i){if(i==="sync"){const E=ET();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=gn,E.resume=gn,E.pause=gn,E}}const d=ct;l.call=(E,C,O)=>an(E,d,C,O);let p=!1;i==="post"?l.scheduler=E=>{Vt(E,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,C)=>{C?E():Iu(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,d&&(E.id=d.uid,E.i=d))};const g=ME(t,e,l);return $i&&(u?u.push(g):c&&g()),g}function TT(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?dg(s,t):()=>s[t]:t.bind(s,s);let i;ge(e)?i=e:(i=e.handler,n=e);const o=lo(this),l=hg(r,i.bind(s),n);return o(),l}function dg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const wT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${Js(e)}Modifiers`];function IT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let r=n;const i=e.startsWith("update:"),o=i&&wT(s,e.slice(7));o&&(o.trim&&(r=n.map(d=>ze(d)?d.trim():d)),o.number&&(r=n.map(ga)));let l,c=s[l=Yo(e)]||s[l=Yo(Qt(e))];!c&&i&&(c=s[l=Yo(Js(e))]),c&&an(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,an(u,t,6,r)}}function fg(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const d=fg(u,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&s.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):et(o,i),xe(t)&&s.set(t,o),o)}function sl(t,e){return!t||!Ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Js(e))||Oe(t,e))}function kd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:E,ctx:C,inheritAttrs:O}=t,N=Ea(t);let B,q;try{if(n.shapeFlag&4){const $=r||s,Z=$;B=mn(u.call(Z,$,d,p,E,g,C)),q=l}else{const $=e;B=mn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),q=e.props?l:bT(l)}}catch($){Ai.length=0,Za($,t,1),B=Ae(In)}let H=B;if(q&&O!==!1){const $=Object.keys(q),{shapeFlag:Z}=H;$.length&&Z&7&&(i&&$.some(du)&&(q=AT(q,i)),H=Ws(H,q,!1,!0))}return n.dirs&&(H=Ws(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Li(H,n.transition),B=H,Ea(N),B}const bT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ka(n))&&((e||(e={}))[n]=t[n]);return e},AT=(t,e)=>{const n={};for(const s in t)(!du(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function RT(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Od(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==s[g]&&!sl(u,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Od(s,o,u):!0:!!o;return!1}function Od(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!sl(n,i))return!0}return!1}function ST({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const pg=t=>t.__isSuspense;function CT(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):UE(t)}const Be=Symbol.for("v-fgt"),rl=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Ai=[];let Ut=null;function he(t=!1){Ai.push(Ut=t?null:[])}function PT(){Ai.pop(),Ut=Ai[Ai.length-1]||null}let Ui=1;function Nd(t,e=!1){Ui+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function mg(t){return t.dynamicChildren=Ui>0?Ut||vr:null,PT(),Ui>0&&Ut&&Ut.push(t),t}function be(t,e,n,s,r,i){return mg(S(t,e,n,s,r,i,!0))}function St(t,e,n,s,r){return mg(Ae(t,e,n,s,r,!0))}function Fi(t){return t?t.__v_isVNode===!0:!1}function hr(t,e){return t.type===e.type&&t.key===e.key}const gg=({key:t})=>t??null,ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Tt(t)||ge(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,s=0,r=null,i=t===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gg(e),ref:e&&ta(e),scopeId:Bm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nt};return l?(Ru(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Ui>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const Ae=kT;function kT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Qm)&&(t=In),Fi(t)){const l=Ws(t,e,!0);return n&&Ru(l,n),Ui>0&&!i&&Ut&&(l.shapeFlag&6?Ut[Ut.indexOf(t)]=l:Ut.push(l)),l.patchFlag=-2,l}if($T(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=on(l)),xe(c)&&(wu(c)&&!oe(c)&&(c=et({},c)),e.style=Hs(c))}const o=ze(t)?1:pg(t)?128:$E(t)?64:xe(t)?4:ge(t)?2:0;return S(t,e,n,s,r,o,i,!0)}function OT(t){return t?wu(t)||sg(t)?et({},t):t:null}function Ws(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?il(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&gg(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ws(t.ssContent),ssFallback:t.ssFallback&&Ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Li(d,c.clone(d)),d}function yt(t=" ",e=0){return Ae(rl,null,t,e)}function na(t,e){const n=Ae(ea,null,t);return n.staticCount=e,n}function Bs(t="",e=!1){return e?(he(),St(In,null,t)):Ae(In,null,t)}function mn(t){return t==null||typeof t=="boolean"?Ae(In):oe(t)?Ae(Be,null,t.slice()):Fi(t)?os(t):Ae(rl,null,String(t))}function os(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ws(t)}function Ru(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!sg(e)?e._ctx=nt:r===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function il(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=on([e.class,s.class]));else if(r==="style")e.style=Hs([e.style,s.style]);else if(Ka(r)){const i=e[r],o=s[r];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function dn(t,e,n,s=null){an(t,e,7,[n,s])}const NT=eg();let DT=0;function VT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||NT,i={uid:DT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ig(s,r),emitsOptions:fg(s,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=IT.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const _g=()=>ct||nt;let wa,Oc;{const t=Ya(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};wa=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Oc=e("__VUE_SSR_SETTERS__",n=>$i=n)}const lo=t=>{const e=ct;return wa(t),t.scope.on(),()=>{t.scope.off(),wa(e)}},Dd=()=>{ct&&ct.scope.off(),wa(null)};function yg(t){return t.vnode.shapeFlag&4}let $i=!1;function MT(t,e=!1,n=!1){e&&Oc(e);const{props:s,children:r}=t.vnode,i=yg(t);cT(t,s,i,e),fT(t,r,n||e);const o=i?xT(t,e):void 0;return e&&Oc(!1),o}function xT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tT);const{setup:s}=n;if(s){qn();const r=t.setupContext=s.length>1?UT(t):null,i=lo(t),o=io(s,t,0,[t.props,r]),l=fm(o);if(Hn(),i(),(l||t.sp)&&!Ir(t)&&qm(t),l){if(o.then(Dd,Dd),e)return o.then(c=>{Vd(t,c)}).catch(c=>{Za(c,t,0)});t.asyncDep=o}else Vd(t,o)}else vg(t)}function Vd(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=xm(e)),vg(t)}function vg(t,e,n){const s=t.type;t.render||(t.render=s.render||gn);{const r=lo(t);qn();try{nT(t)}finally{Hn(),r()}}}const LT={get(t,e){return vt(t,"get",""),t[e]}};function UT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,LT),slots:t.slots,emit:t.emit,expose:e}}function ol(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xm(CE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function FT(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function $T(t){return ge(t)&&"__vccOpts"in t}const kt=(t,e)=>DE(t,e,$i);function Ia(t,e,n){const s=arguments.length;return s===2?xe(e)&&!oe(e)?Fi(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fi(n)&&(n=[n]),Ae(t,e,n))}const BT="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Md=typeof window<"u"&&window.trustedTypes;if(Md)try{Nc=Md.createPolicy("vue",{createHTML:t=>t})}catch{}const Eg=Nc?t=>Nc.createHTML(t):t=>t,jT="http://www.w3.org/2000/svg",qT="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,xd=Nn&&Nn.createElement("template"),HT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Nn.createElementNS(jT,t):e==="mathml"?Nn.createElementNS(qT,t):n?Nn.createElement(t,{is:n}):Nn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{xd.innerHTML=Eg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=xd.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ts="transition",ci="animation",kr=Symbol("_vtc"),Tg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WT=et({},jE,Tg),Vs=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ld=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function zT(t){const e={};for(const w in t)w in Tg||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,C=KT(r),O=C&&C[0],N=C&&C[1],{onBeforeEnter:B,onEnter:q,onEnterCancelled:H,onLeave:$,onLeaveCancelled:Z,onBeforeAppear:U=B,onAppear:T=q,onAppearCancelled:v=H}=e,y=(w,m,le,J)=>{w._enterCancelled=J,rs(w,m?d:l),rs(w,m?u:o),le&&le()},A=(w,m)=>{w._isLeaving=!1,rs(w,p),rs(w,E),rs(w,g),m&&m()},R=w=>(m,le)=>{const J=w?T:q,De=()=>y(m,w,le);Vs(J,[m,De]),Ud(()=>{rs(m,w?c:i),fn(m,w?d:l),Ld(J)||Fd(m,s,O,De)})};return et(e,{onBeforeEnter(w){Vs(B,[w]),fn(w,i),fn(w,o)},onBeforeAppear(w){Vs(U,[w]),fn(w,c),fn(w,u)},onEnter:R(!1),onAppear:R(!0),onLeave(w,m){w._isLeaving=!0;const le=()=>A(w,m);fn(w,p),w._enterCancelled?(fn(w,g),Dc()):(Dc(),fn(w,g)),Ud(()=>{w._isLeaving&&(rs(w,p),fn(w,E),Ld($)||Fd(w,s,N,le))}),Vs($,[w,le])},onEnterCancelled(w){y(w,!1,void 0,!0),Vs(H,[w])},onAppearCancelled(w){y(w,!0,void 0,!0),Vs(v,[w])},onLeaveCancelled(w){A(w),Vs(Z,[w])}})}function KT(t){if(t==null)return null;if(xe(t))return[Xl(t.enter),Xl(t.leave)];{const e=Xl(t);return[e,e]}}function Xl(t){return eE(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[kr]||(t[kr]=new Set)).add(e)}function rs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[kr];n&&(n.delete(e),n.size||(t[kr]=void 0))}function Ud(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let GT=0;function Fd(t,e,n,s){const r=t._endId=++GT,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=wg(t,e);if(!o)return s();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function wg(t,e){const n=window.getComputedStyle(t),s=C=>(n[C]||"").split(", "),r=s(`${ts}Delay`),i=s(`${ts}Duration`),o=$d(r,i),l=s(`${ci}Delay`),c=s(`${ci}Duration`),u=$d(l,c);let d=null,p=0,g=0;e===ts?o>0&&(d=ts,p=o,g=i.length):e===ci?u>0&&(d=ci,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?ts:ci:null,g=d?d===ts?i.length:c.length:0);const E=d===ts&&/\b(transform|all)(,|$)/.test(s(`${ts}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:E}}function $d(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Bd(n)+Bd(t[s])))}function Bd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Dc(){return document.body.offsetHeight}function QT(t,e,n){const s=t[kr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jd=Symbol("_vod"),YT=Symbol("_vsh"),JT=Symbol(""),XT=/(^|;)\s*display\s*:/;function ZT(t,e,n){const s=t.style,r=ze(n);let i=!1;if(n&&!r){if(e)if(ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&sa(s,l,"")}else for(const o in e)n[o]==null&&sa(s,o,"");for(const o in n)o==="display"&&(i=!0),sa(s,o,n[o])}else if(r){if(e!==n){const o=s[JT];o&&(n+=";"+o),s.cssText=n,i=XT.test(n)}}else e&&t.removeAttribute("style");jd in t&&(t[jd]=i?s.display:"",t[YT]&&(s.display="none"))}const qd=/\s*!important$/;function sa(t,e,n){if(oe(n))n.forEach(s=>sa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ew(t,e);qd.test(n)?t.setProperty(Js(s),n.replace(qd,""),"important"):t[s]=n}}const Hd=["Webkit","Moz","ms"],Zl={};function ew(t,e){const n=Zl[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return Zl[e]=s;s=Qa(s);for(let r=0;r<Hd.length;r++){const i=Hd[r]+s;if(i in t)return Zl[e]=i}return e}const Wd="http://www.w3.org/1999/xlink";function zd(t,e,n,s,r,i=oE(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wd,e.slice(6,e.length)):t.setAttributeNS(Wd,e,n):n==null||i&&!gm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function Kd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Eg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function cs(t,e,n,s){t.addEventListener(e,n,s)}function tw(t,e,n,s){t.removeEventListener(e,n,s)}const Gd=Symbol("_vei");function nw(t,e,n,s,r=null){const i=t[Gd]||(t[Gd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=sw(e);if(s){const u=i[e]=ow(s,r);cs(t,l,u,c)}else o&&(tw(t,l,o,c),i[e]=void 0)}}const Qd=/(?:Once|Passive|Capture)$/;function sw(t){let e;if(Qd.test(t)){e={};let s;for(;s=t.match(Qd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Js(t.slice(2)),e]}let ec=0;const rw=Promise.resolve(),iw=()=>ec||(rw.then(()=>ec=0),ec=Date.now());function ow(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;an(aw(s,n.value),e,5,[s])};return n.value=t,n.attached=iw(),n}function aw(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?QT(t,s,o):e==="style"?ZT(t,n,s):Ka(e)?du(e)||nw(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cw(t,e,s,o))?(Kd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zd(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(s))?Kd(t,Qt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zd(t,e,s,o))};function cw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yd(e)&&ze(n)?!1:e in t}const Ig=new WeakMap,bg=new WeakMap,ba=Symbol("_moveCb"),Jd=Symbol("_enterCb"),uw=t=>(delete t.props.mode,t),hw=uw({name:"TransitionGroup",props:et({},WT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=_g(),s=BE();let r,i;return zm(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!gw(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(fw),r.forEach(pw);const l=r.filter(mw);Dc(),l.forEach(c=>{const u=c.el,d=u.style;fn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[ba]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[ba]=null,rs(u,o))};u.addEventListener("transitionend",p)}),r=[]}),()=>{const o=Ce(t),l=zT(o);let c=o.tag||Be;if(r=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(r.push(d),Li(d,Rc(d,l,s,n)),Ig.set(d,d.el.getBoundingClientRect()))}i=e.default?jm(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Li(d,Rc(d,l,s,n))}return Ae(c,null,i)}}}),dw=hw;function fw(t){const e=t.el;e[ba]&&e[ba](),e[Jd]&&e[Jd]()}function pw(t){bg.set(t,t.el.getBoundingClientRect())}function mw(t){const e=Ig.get(t),n=bg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function gw(t,e,n){const s=t.cloneNode(),r=t[kr];r&&r.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=wg(s);return i.removeChild(s),o}const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Jo(e,n):e};function _w(t){t.target.composing=!0}function Xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),Xt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[$n]=Or(r);const i=s||r.props&&r.props.type==="number";cs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ga(l)),t[$n](l)}),n&&cs(t,"change",()=>{t.value=t.value.trim()}),e||(cs(t,"compositionstart",_w),cs(t,"compositionend",Xd),cs(t,"change",Xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[$n]=Or(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ga(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},yw={deep:!0,created(t,e,n){t[$n]=Or(n),cs(t,"change",()=>{const s=t._modelValue,r=Bi(t),i=t.checked,o=t[$n];if(oe(s)){const l=mu(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(jr(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(Ag(t,i))})},mounted:Zd,beforeUpdate(t,e,n){t[$n]=Or(n),Zd(t,e,n)}};function Zd(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(oe(e))r=mu(e,s.props.value)>-1;else if(jr(e))r=e.has(s.props.value);else{if(e===n)return;r=ro(e,Ag(t,!0))}t.checked!==r&&(t.checked=r)}const vw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=jr(e);cs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ga(Bi(o)):Bi(o));t[$n](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,el(()=>{t._assigning=!1})}),t[$n]=Or(s)},mounted(t,{value:e}){ef(t,e)},beforeUpdate(t,e,n){t[$n]=Or(n)},updated(t,{value:e}){t._assigning||ef(t,e)}};function ef(t,e){const n=t.multiple,s=oe(e);if(!(n&&!s&&!jr(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=Bi(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=mu(e,l)>-1}else o.selected=e.has(l);else if(ro(Bi(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bi(t){return"_value"in t?t._value:t.value}function Ag(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ew=["ctrl","shift","alt","meta"],Tw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ew.some(n=>t[`${n}Key`]&&!e.includes(n))},Su=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=Tw[e[o]];if(l&&l(r,e))return}return t(r,...i)})},ww=et({patchProp:lw},HT);let tf;function Iw(){return tf||(tf=mT(ww))}const Rg=(...t)=>{const e=Iw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Aw(s);if(!r)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,bw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function bw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Aw(t){return ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const dr=typeof document<"u";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const ke=Object.assign;function tc(t,e){const n={};for(const s in e){const r=e[s];n[s]=ln(r)?r.map(t):t(r)}return n}const Ri=()=>{},ln=Array.isArray,Cg=/#/g,Sw=/&/g,Cw=/\//g,Pw=/=/g,kw=/\?/g,Pg=/\+/g,Ow=/%5B/g,Nw=/%5D/g,kg=/%5E/g,Dw=/%60/g,Og=/%7B/g,Vw=/%7C/g,Ng=/%7D/g,Mw=/%20/g;function Cu(t){return encodeURI(""+t).replace(Vw,"|").replace(Ow,"[").replace(Nw,"]")}function xw(t){return Cu(t).replace(Og,"{").replace(Ng,"}").replace(kg,"^")}function Vc(t){return Cu(t).replace(Pg,"%2B").replace(Mw,"+").replace(Cg,"%23").replace(Sw,"%26").replace(Dw,"`").replace(Og,"{").replace(Ng,"}").replace(kg,"^")}function Lw(t){return Vc(t).replace(Pw,"%3D")}function Uw(t){return Cu(t).replace(Cg,"%23").replace(kw,"%3F")}function Fw(t){return t==null?"":Uw(t).replace(Cw,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $w=/\/$/,Bw=t=>t.replace($w,"");function nc(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Ww(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ji(o)}}function jw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Nr(e.matched[s],n.matched[r])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Hw(t[n],e[n]))return!1;return!0}function Hw(t,e){return ln(t)?sf(t,e):ln(e)?sf(e,t):t===e}function sf(t,e){return ln(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ww(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ns={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qi;(function(t){t.pop="pop",t.push="push"})(qi||(qi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function zw(t){if(!t)if(dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Bw(t)}const Kw=/^[^#]+#/;function Gw(t,e){return t.replace(Kw,"#")+e}function Qw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const al=()=>({left:window.scrollX,top:window.scrollY});function Yw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Qw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(t,e){return(history.state?history.state.position-e:-1)+t}const Mc=new Map;function Jw(t,e){Mc.set(t,e)}function Xw(t){const e=Mc.get(t);return Mc.delete(t),e}let Zw=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),nf(c,"")}return nf(n,t)+s+r}function eI(t,e,n,s){let r=[],i=[],o=null;const l=({state:g})=>{const E=Vg(t,location),C=n.value,O=e.value;let N=0;if(g){if(n.value=E,e.value=g,o&&o===C){o=null;return}N=O?g.position-O.position:0}else s(E);r.forEach(B=>{B(n.value,C,{delta:N,type:qi.pop,direction:N?N>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function u(g){r.push(g);const E=()=>{const C=r.indexOf(g);C>-1&&r.splice(C,1)};return i.push(E),E}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:al()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function of(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?al():null}}function tI(t){const{history:e,location:n}=window,s={value:Vg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Zw()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),r.value=u}catch(E){console.error(E),n[d?"replace":"assign"](g)}}function o(c,u){const d=ke({},e.state,of(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function l(c,u){const d=ke({},r.value,e.state,{forward:c,scroll:al()});i(d.current,d,!0);const p=ke({},of(s.value,c,null),{position:d.position+1},u);i(c,p,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function nI(t){t=zw(t);const e=tI(t),n=eI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ke({location:"",base:t,go:s,createHref:Gw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function sI(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const xg=Symbol("");var af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(af||(af={}));function Dr(t,e){return ke(new Error,{type:t,[xg]:!0},e)}function On(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const lf="[^/]+?",rI={sensitive:!1,strict:!1,start:!0,end:!0},iI=/[.+*?^${}()[\]/\\]/g;function oI(t,e){const n=ke({},rI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(r+="/"),r+=g.value.replace(iI,"\\$&"),E+=40;else if(g.type===1){const{value:C,repeatable:O,optional:N,regexp:B}=g;i.push({name:C,repeatable:O,optional:N});const q=B||lf;if(q!==lf){E+=10;try{new RegExp(`(${q})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${q}): `+$.message)}}let H=O?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(H=N&&u.length<2?`(?:/${H})`:"/"+H),N&&(H+="?"),r+=H,E+=20,N&&(E+=-8),O&&(E+=-20),q===".*"&&(E+=-50)}d.push(E)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",C=i[g-1];p[C.name]=E&&C.repeatable?E.split("/"):E}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===0)d+=E.value;else if(E.type===1){const{value:C,repeatable:O,optional:N}=E,B=C in u?u[C]:"";if(ln(B)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const q=ln(B)?B.join("/"):B;if(!q)if(N)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=q}}return d||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function aI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=aI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(cf(s))return 1;if(cf(r))return-1}return r.length-s.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lI={type:0,value:""},cI=/[a-zA-Z0-9_]/;function uI(t){if(!t)return[[]];if(t==="/")return[[lI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:cI.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function hI(t,e,n){const s=oI(uI(t.path),n),r=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function dI(t,e){const n=[],s=new Map;e=ff({strict:!1,end:!0,sensitive:!1},e);function r(p){return s.get(p)}function i(p,g,E){const C=!E,O=hf(p);O.aliasOf=E&&E.record;const N=ff(e,p),B=[O];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of $)B.push(hf(ke({},O,{components:E?E.record.components:O.components,path:Z,aliasOf:E?E.record:O})))}let q,H;for(const $ of B){const{path:Z}=$;if(g&&Z[0]!=="/"){const U=g.record.path,T=U[U.length-1]==="/"?"":"/";$.path=g.record.path+(Z&&T+Z)}if(q=hI($,g,N),E?E.alias.push(q):(H=H||q,H!==q&&H.alias.push(q),C&&p.name&&!df(q)&&o(p.name)),Ug(q)&&c(q),O.children){const U=O.children;for(let T=0;T<U.length;T++)i(U[T],q,E&&E.children[T])}E=E||q}return H?()=>{o(H)}:Ri}function o(p){if(Mg(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=mI(p,n);n.splice(g,0,p),p.record.name&&!df(p)&&s.set(p.record.name,p)}function u(p,g){let E,C={},O,N;if("name"in p&&p.name){if(E=s.get(p.name),!E)throw Dr(1,{location:p});N=E.record.name,C=ke(uf(g.params,E.keys.filter(H=>!H.optional).concat(E.parent?E.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&uf(p.params,E.keys.map(H=>H.name))),O=E.stringify(C)}else if(p.path!=null)O=p.path,E=n.find(H=>H.re.test(O)),E&&(C=E.parse(O),N=E.record.name);else{if(E=g.name?s.get(g.name):n.find(H=>H.re.test(g.path)),!E)throw Dr(1,{location:p,currentLocation:g});N=E.record.name,C=ke({},g.params,p.params),O=E.stringify(C)}const B=[];let q=E;for(;q;)B.unshift(q.record),q=q.parent;return{name:N,path:O,params:C,matched:B,meta:pI(B)}}t.forEach(p=>i(p));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function uf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function hf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function ff(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mI(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Lg(t,e[i])<0?s=i:n=i+1}const r=gI(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function gI(t){let e=t;for(;e=e.parent;)if(Ug(e)&&Lg(t,e)===0)return e}function Ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _I(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Pg," "),o=i.indexOf("="),l=ji(o<0?i:i.slice(0,o)),c=o<0?null:ji(i.slice(o+1));if(l in e){let u=e[l];ln(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function pf(t){let e="";for(let n in t){const s=t[n];if(n=Lw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(s)?s.map(i=>i&&Vc(i)):[s&&Vc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ln(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const vI=Symbol(""),mf=Symbol(""),ll=Symbol(""),Fg=Symbol(""),xc=Symbol("");function ui(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function as(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Dr(4,{from:n,to:e})):g instanceof Error?c(g):sI(g)?c(Dr(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function sc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(as(d,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Rw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&as(E,n,s,o,l,r)()}))}}return i}function gf(t){const e=sn(ll),n=sn(Fg),s=kt(()=>{const c=$e(t.to);return e.resolve(c)}),r=kt(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Nr.bind(null,d));if(g>-1)return g;const E=_f(c[u-2]);return u>1&&_f(d)===E&&p[p.length-1].path!==E?p.findIndex(Nr.bind(null,c[u-2])):g}),i=kt(()=>r.value>-1&&bI(n.params,s.value.params)),o=kt(()=>r.value>-1&&r.value===n.matched.length-1&&Dg(n.params,s.value.params));function l(c={}){if(II(c)){const u=e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function EI(t){return t.length===1?t[0]:t}const TI=Bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gf,setup(t,{slots:e}){const n=Xa(gf(t)),{options:s}=sn(ll),r=kt(()=>({[yf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&EI(e.default(n));return t.custom?i:Ia("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),wI=TI;function II(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ln(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function _f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t??e??n,AI=Bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=sn(xc),r=kt(()=>t.route||s.value),i=sn(mf,0),o=kt(()=>{let u=$e(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=kt(()=>r.value.matched[o.value]);Xo(mf,kt(()=>o.value+1)),Xo(vI,l),Xo(xc,r);const c=Xe();return Zo(()=>[c.value,l.value,t.name],([u,d,p],[g,E,C])=>{d&&(d.instances[p]=u,E&&E!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),u&&d&&(!E||!Nr(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=r.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return vf(n.default,{Component:g,route:u});const E=p.props[d],C=E?E===!0?u.params:typeof E=="function"?E(u):E:null,N=Ia(g,ke({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return vf(n.default,{Component:N,route:u})||N}}});function vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const RI=AI;function SI(t){const e=dI(t.routes,t),n=t.parseQuery||_I,s=t.stringifyQuery||pf,r=t.history,i=ui(),o=ui(),l=ui(),c=PE(ns);let u=ns;dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=tc.bind(null,V=>""+V),p=tc.bind(null,Fw),g=tc.bind(null,ji);function E(V,ee){let X,ne;return Mg(V)?(X=e.getRecordMatcher(V),ne=ee):ne=V,e.addRoute(ne,X)}function C(V){const ee=e.getRecordMatcher(V);ee&&e.removeRoute(ee)}function O(){return e.getRoutes().map(V=>V.record)}function N(V){return!!e.getRecordMatcher(V)}function B(V,ee){if(ee=ke({},ee||c.value),typeof V=="string"){const P=nc(n,V,ee.path),M=e.resolve({path:P.path},ee),F=r.createHref(P.fullPath);return ke(P,M,{params:g(M.params),hash:ji(P.hash),redirectedFrom:void 0,href:F})}let X;if(V.path!=null)X=ke({},V,{path:nc(n,V.path,ee.path).path});else{const P=ke({},V.params);for(const M in P)P[M]==null&&delete P[M];X=ke({},V,{params:p(P)}),ee.params=p(ee.params)}const ne=e.resolve(X,ee),Re=V.hash||"";ne.params=d(g(ne.params));const I=jw(s,ke({},V,{hash:xw(Re),path:ne.path})),b=r.createHref(I);return ke({fullPath:I,hash:Re,query:s===pf?yI(V.query):V.query||{}},ne,{redirectedFrom:void 0,href:b})}function q(V){return typeof V=="string"?nc(n,V,c.value.path):ke({},V)}function H(V,ee){if(u!==V)return Dr(8,{from:ee,to:V})}function $(V){return T(V)}function Z(V){return $(ke(q(V),{replace:!0}))}function U(V){const ee=V.matched[V.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let ne=typeof X=="function"?X(V):X;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=q(ne):{path:ne},ne.params={}),ke({query:V.query,hash:V.hash,params:ne.path!=null?{}:V.params},ne)}}function T(V,ee){const X=u=B(V),ne=c.value,Re=V.state,I=V.force,b=V.replace===!0,P=U(X);if(P)return T(ke(q(P),{state:typeof P=="object"?ke({},Re,P.state):Re,force:I,replace:b}),ee||X);const M=X;M.redirectedFrom=ee;let F;return!I&&qw(s,ne,X)&&(F=Dr(16,{to:M,from:ne}),jt(ne,ne,!0,!1)),(F?Promise.resolve(F):A(M,ne)).catch(x=>On(x)?On(x,2)?x:Yt(x):ye(x,M,ne)).then(x=>{if(x){if(On(x,2))return T(ke({replace:b},q(x.to),{state:typeof x.to=="object"?ke({},Re,x.to.state):Re,force:I}),ee||M)}else x=w(M,ne,!0,b,Re);return R(M,ne,x),x})}function v(V,ee){const X=H(V,ee);return X?Promise.reject(X):Promise.resolve()}function y(V){const ee=Yn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(V):V()}function A(V,ee){let X;const[ne,Re,I]=CI(V,ee);X=sc(ne.reverse(),"beforeRouteLeave",V,ee);for(const P of ne)P.leaveGuards.forEach(M=>{X.push(as(M,V,ee))});const b=v.bind(null,V,ee);return X.push(b),Ct(X).then(()=>{X=[];for(const P of i.list())X.push(as(P,V,ee));return X.push(b),Ct(X)}).then(()=>{X=sc(Re,"beforeRouteUpdate",V,ee);for(const P of Re)P.updateGuards.forEach(M=>{X.push(as(M,V,ee))});return X.push(b),Ct(X)}).then(()=>{X=[];for(const P of I)if(P.beforeEnter)if(ln(P.beforeEnter))for(const M of P.beforeEnter)X.push(as(M,V,ee));else X.push(as(P.beforeEnter,V,ee));return X.push(b),Ct(X)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),X=sc(I,"beforeRouteEnter",V,ee,y),X.push(b),Ct(X))).then(()=>{X=[];for(const P of o.list())X.push(as(P,V,ee));return X.push(b),Ct(X)}).catch(P=>On(P,8)?P:Promise.reject(P))}function R(V,ee,X){l.list().forEach(ne=>y(()=>ne(V,ee,X)))}function w(V,ee,X,ne,Re){const I=H(V,ee);if(I)return I;const b=ee===ns,P=dr?history.state:{};X&&(ne||b?r.replace(V.fullPath,ke({scroll:b&&P&&P.scroll},Re)):r.push(V.fullPath,Re)),c.value=V,jt(V,ee,X,b),Yt()}let m;function le(){m||(m=r.listen((V,ee,X)=>{if(!hn.listening)return;const ne=B(V),Re=U(ne);if(Re){T(ke(Re,{replace:!0,force:!0}),ne).catch(Ri);return}u=ne;const I=c.value;dr&&Jw(rf(I.fullPath,X.delta),al()),A(ne,I).catch(b=>On(b,12)?b:On(b,2)?(T(ke(q(b.to),{force:!0}),ne).then(P=>{On(P,20)&&!X.delta&&X.type===qi.pop&&r.go(-1,!1)}).catch(Ri),Promise.reject()):(X.delta&&r.go(-X.delta,!1),ye(b,ne,I))).then(b=>{b=b||w(ne,I,!1),b&&(X.delta&&!On(b,8)?r.go(-X.delta,!1):X.type===qi.pop&&On(b,20)&&r.go(-1,!1)),R(ne,I,b)}).catch(Ri)}))}let J=ui(),De=ui(),Te;function ye(V,ee,X){Yt(V);const ne=De.list();return ne.length?ne.forEach(Re=>Re(V,ee,X)):console.error(V),Promise.reject(V)}function Nt(){return Te&&c.value!==ns?Promise.resolve():new Promise((V,ee)=>{J.add([V,ee])})}function Yt(V){return Te||(Te=!V,le(),J.list().forEach(([ee,X])=>V?X(V):ee()),J.reset()),V}function jt(V,ee,X,ne){const{scrollBehavior:Re}=t;if(!dr||!Re)return Promise.resolve();const I=!X&&Xw(rf(V.fullPath,0))||(ne||!X)&&history.state&&history.state.scroll||null;return el().then(()=>Re(V,ee,I)).then(b=>b&&Yw(b)).catch(b=>ye(b,V,ee))}const je=V=>r.go(V);let qe;const Yn=new Set,hn={currentRoute:c,listening:!0,addRoute:E,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:B,options:t,push:$,replace:Z,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:De.add,isReady:Nt,install(V){const ee=this;V.component("RouterLink",wI),V.component("RouterView",RI),V.config.globalProperties.$router=ee,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),dr&&!qe&&c.value===ns&&(qe=!0,$(r.location).catch(Re=>{}));const X={};for(const Re in ns)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});V.provide(ll,ee),V.provide(Fg,Dm(X)),V.provide(xc,c);const ne=V.unmount;Yn.add(V),V.unmount=function(){Yn.delete(V),Yn.size<1&&(u=ns,m&&m(),m=null,c.value=ns,qe=!1,Te=!1),ne()}}};function Ct(V){return V.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return hn}function CI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Nr(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Nr(u,c))||r.push(c))}return[n,s,r]}function Pu(){return sn(ll)}var PI=Object.defineProperty,Ef=Object.getOwnPropertySymbols,kI=Object.prototype.hasOwnProperty,OI=Object.prototype.propertyIsEnumerable,Tf=(t,e,n)=>e in t?PI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$g=(t,e)=>{for(var n in e||(e={}))kI.call(e,n)&&Tf(t,n,e[n]);if(Ef)for(var n of Ef(e))OI.call(e,n)&&Tf(t,n,e[n]);return t},cl=t=>typeof t=="function",ul=t=>typeof t=="string",Bg=t=>ul(t)&&t.trim().length>0,NI=t=>typeof t=="number",Ls=t=>typeof t>"u",Hi=t=>typeof t=="object"&&t!==null,DI=t=>_n(t,"tag")&&Bg(t.tag),jg=t=>window.TouchEvent&&t instanceof TouchEvent,qg=t=>_n(t,"component")&&Hg(t.component),VI=t=>cl(t)||Hi(t),Hg=t=>!Ls(t)&&(ul(t)||VI(t)||qg(t)),wf=t=>Hi(t)&&["height","width","right","left","top","bottom"].every(e=>NI(t[e])),_n=(t,e)=>(Hi(t)||cl(t))&&e in t,MI=(t=>()=>t++)(0);function rc(t){return jg(t)?t.targetTouches[0].clientX:t.clientX}function If(t){return jg(t)?t.targetTouches[0].clientY:t.clientY}var xI=t=>{Ls(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},co=t=>qg(t)?co(t.component):DI(t)?Bt({render(){return t}}):typeof t=="string"?t:Ce($e(t)),LI=t=>{if(typeof t=="string")return t;const e=_n(t,"props")&&Hi(t.props)?t.props:{},n=_n(t,"listeners")&&Hi(t.listeners)?t.listeners:{};return{component:co(t),props:e,listeners:n}},UI=()=>typeof window<"u",ku=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},FI=t=>["on","off","emit"].every(e=>_n(t,e)&&cl(t[e])),xt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(xt||(xt={}));var Wi;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Wi||(Wi={}));var Lt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Lt||(Lt={}));var en="Vue-Toastification",Zt={type:{type:String,default:xt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Wg={type:Zt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ra={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Zt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Lc={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},zg={transition:{type:[Object,String],default:`${en}__bounce`}},$I={position:{type:String,default:Wi.TOP_RIGHT},draggable:Zt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Zt.trueBoolean,pauseOnHover:Zt.trueBoolean,closeOnClick:Zt.trueBoolean,timeout:Lc.timeout,hideProgressBar:Lc.hideProgressBar,toastClassName:Zt.classNames,bodyClassName:Zt.classNames,icon:Wg.customIcon,closeButton:ra.component,closeButtonClassName:ra.classNames,showCloseButtonOnHover:ra.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new ku}},BI={id:{type:[String,Number],required:!0,default:0},type:Zt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},jI={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Zt.trueBoolean,maxToasts:{type:Number,default:20},transition:zg.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Zt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Bn={CORE_TOAST:$I,TOAST:BI,CONTAINER:jI,PROGRESS_BAR:Lc,ICON:Wg,TRANSITION:zg,CLOSE_BUTTON:ra},Kg=Bt({name:"VtProgressBar",props:Bn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${en}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function qI(t,e){return he(),be("div",{style:Hs(t.style),class:on(t.cpClass)},null,6)}Kg.render=qI;var HI=Kg,Gg=Bt({name:"VtCloseButton",props:Bn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?co(this.component):"button"},classes(){const t=[`${en}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),WI=yt(" × ");function zI(t,e){return he(),St(ao(t.buttonComponent),il({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Xs(()=>[WI]),_:1},16,["aria-label","class"])}Gg.render=zI;var KI=Gg,Qg={},GI={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},QI=S("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),YI=[QI];function JI(t,e){return he(),be("svg",GI,YI)}Qg.render=JI;var XI=Qg,Yg={},ZI={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e0=S("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),t0=[e0];function n0(t,e){return he(),be("svg",ZI,t0)}Yg.render=n0;var bf=Yg,Jg={},s0={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r0=S("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),i0=[r0];function o0(t,e){return he(),be("svg",s0,i0)}Jg.render=o0;var a0=Jg,Xg={},l0={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},c0=S("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),u0=[c0];function h0(t,e){return he(),be("svg",l0,u0)}Xg.render=h0;var d0=Xg,Zg=Bt({name:"VtIcon",props:Bn.ICON,computed:{customIconChildren(){return _n(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return ul(this.customIcon)?this.trimValue(this.customIcon):_n(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return _n(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Hg(this.customIcon)?co(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[xt.DEFAULT]:bf,[xt.INFO]:bf,[xt.SUCCESS]:XI,[xt.ERROR]:d0,[xt.WARNING]:a0}[this.type]},iconClasses(){const t=[`${en}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Bg(t)?t.trim():e}}});function f0(t,e){return he(),St(ao(t.component),{class:on(t.iconClasses)},{default:Xs(()=>[yt(zt(t.customIconChildren),1)]),_:1},8,["class"])}Zg.render=f0;var p0=Zg,e_=Bt({name:"VtToast",components:{ProgressBar:HI,CloseButton:KI,Icon:p0},inheritAttrs:!1,props:Object.assign({},Bn.CORE_TOAST,Bn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${en}__toast`,`${en}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${en}__toast--rtl`),t},bodyClasses(){return[`${en}__toast-${ul(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return wf(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:_n,getVueComponentFromObj:co,closeToast(){this.eventBus.emit(Lt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:rc(t),y:If(t)},this.dragStart=rc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:rc(t),y:If(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,wf(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),m0=["role"];function g0(t,e){const n=gs("Icon"),s=gs("CloseButton"),r=gs("ProgressBar");return he(),be("div",{class:on(t.classes),style:Hs(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(he(),St(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Bs("v-if",!0),S("div",{role:t.accessibility.toastRole||"alert",class:on(t.bodyClasses)},[typeof t.content=="string"?(he(),be(Be,{key:0},[yt(zt(t.content),1)],2112)):(he(),St(ao(t.getVueComponentFromObj(t.content)),il({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},eT(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,m0),t.closeButton?(he(),St(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:Su(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Bs("v-if",!0),t.timeout?(he(),St(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Bs("v-if",!0)],38)}e_.render=g0;var _0=e_,t_=Bt({name:"VtTransition",props:Bn.TRANSITION,emits:["leave"],methods:{hasProp:_n,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function y0(t,e){return he(),St(dw,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Xs(()=>[ZE(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}t_.render=y0;var v0=t_,n_=Bt({name:"VueToastification",devtools:{hide:!0},components:{Toast:_0,VtTransition:v0},props:Object.assign({},Bn.CORE_TOAST,Bn.CONTAINER,Bn.TRANSITION),data(){return{count:0,positions:Object.values(Wi),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Lt.ADD,this.addToast),t.on(Lt.CLEAR,this.clearToasts),t.on(Lt.DISMISS,this.dismissToast),t.on(Lt.UPDATE,this.updateToast),t.on(Lt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){cl(t)&&(t=await t()),xI(this.$el),t.appendChild(this.$el)},setToast(t){Ls(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=LI(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Ls(e)&&!Ls(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Ls(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${en}__container`,t].concat(this.defaults.containerClassName)}}});function E0(t,e){const n=gs("Toast"),s=gs("VtTransition");return he(),be("div",null,[(he(!0),be(Be,null,Mn(t.positions,r=>(he(),be("div",{key:r},[Ae(s,{transition:t.defaults.transition,class:on(t.getClasses(r))},{default:Xs(()=>[(he(!0),be(Be,null,Mn(t.getPositionToasts(r),i=>(he(),St(n,il({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}n_.render=E0;var T0=n_,Af=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new ku;e&&el(()=>{const i=Rg(T0,$g({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(Ls(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${en}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const l=Object.assign({},{id:MI(),type:xt.DEFAULT},o,{content:i});return n.emit(Lt.ADD,l),l.id};s.clear=()=>n.emit(Lt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Lt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Lt.DISMISS,i)};function r(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(Lt.UPDATE,{id:i,options:u,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:xt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:xt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:xt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:xt.WARNING})),s},w0=()=>{const t=()=>console.warn(`[${en}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function s_(t){return UI()?FI(t)?Af({eventBus:t},!1):Af(t,!0):w0()}var r_=Symbol("VueToastification"),i_=new ku,I0=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=s_($g({eventBus:i_},e));t.provide(r_,n)},o_=t=>{const e=_g()?sn(r_,void 0):void 0;return e||s_(i_)},b0=I0;const A0={id:"app"},R0=Bt({__name:"App",setup(t){return(e,n)=>{const s=gs("router-view");return he(),be("div",A0,[Ae(s)])}}}),ic="/logo.png";var Rf={};/**
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
 */const a_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},S0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),s.push(n[d],n[p],n[g],n[E])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new C0;const g=i<<2|l>>4;if(s.push(g),u!==64){const E=l<<4&240|u>>2;if(s.push(E),p!==64){const C=u<<6&192|p;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class C0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=a_(t);return l_.encodeByteArray(e,!0)},Aa=function(t){return P0(t).replace(/\./g,"")},c_=function(t){try{return l_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O0=()=>k0().__FIREBASE_DEFAULTS__,N0=()=>{if(typeof process>"u"||typeof Rf>"u")return;const t=Rf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&c_(t[1]);return e&&JSON.parse(e)},hl=()=>{try{return O0()||N0()||D0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u_=t=>{var e,n;return(n=(e=hl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},h_=t=>{const e=u_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},d_=()=>{var t;return(t=hl())===null||t===void 0?void 0:t.config},f_=t=>{var e;return(e=hl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function p_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Aa(JSON.stringify(n)),Aa(JSON.stringify(o)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function x0(){var t;const e=(t=hl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function U0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $0(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B0(){return!x0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function j0(){try{return typeof indexedDB=="object"}catch{return!1}}function q0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const H0="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=H0,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?W0(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Rn(r,l,s)}}function W0(t,e){return t.replace(z0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const z0=/\{\$([^}]+)}/g;function K0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Sf(i)&&Sf(o)){if(!Ra(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Sf(t){return t!==null&&typeof t=="object"}/**
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
 */function ho(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function G0(t,e){const n=new Q0(t,e);return n.subscribe.bind(n)}class Q0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Y0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=oc),r.error===void 0&&(r.error=oc),r.complete===void 0&&(r.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ws{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xs="[DEFAULT]";/**
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
 */class J0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new V0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:X0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X0(t){return t===xs?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
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
 */class eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const tb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},nb=Ee.INFO,sb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},rb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=nb,this._logHandler=rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const ib=(t,e)=>e.some(n=>t instanceof n);let Cf,Pf;function ob(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ab(){return Pf||(Pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Uc=new WeakMap,g_=new WeakMap,ac=new WeakMap,Nu=new WeakMap;function lb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_s(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Nu.set(e,t),e}function cb(t){if(Uc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _s(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ub(t){Fc=t(Fc)}function hb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lc(this),e,...n);return g_.set(s,e.sort?e.sort():[e]),_s(s)}:ab().includes(t)?function(...e){return t.apply(lc(this),e),_s(m_.get(this))}:function(...e){return _s(t.apply(lc(this),e))}}function db(t){return typeof t=="function"?hb(t):(t instanceof IDBTransaction&&cb(t),ib(t,ob())?new Proxy(t,Fc):t)}function _s(t){if(t instanceof IDBRequest)return lb(t);if(ac.has(t))return ac.get(t);const e=db(t);return e!==t&&(ac.set(t,e),Nu.set(e,t)),e}const lc=t=>Nu.get(t);function fb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=_s(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_s(o.result),c.oldVersion,c.newVersion,_s(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const pb=["get","getKey","getAll","getAllKeys","count"],mb=["put","add","delete","clear"],cc=new Map;function kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=mb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return cc.set(e,i),i}ub(t=>({...t,get:(e,n,s)=>kf(e,n)||t.get(e,n,s),has:(e,n)=>!!kf(e,n)||t.has(e,n)}));/**
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
 */class gb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_b(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _b(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",Of="0.10.13";/**
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
 */const Wn=new Ou("@firebase/app"),yb="@firebase/app-compat",vb="@firebase/analytics-compat",Eb="@firebase/analytics",Tb="@firebase/app-check-compat",wb="@firebase/app-check",Ib="@firebase/auth",bb="@firebase/auth-compat",Ab="@firebase/database",Rb="@firebase/data-connect",Sb="@firebase/database-compat",Cb="@firebase/functions",Pb="@firebase/functions-compat",kb="@firebase/installations",Ob="@firebase/installations-compat",Nb="@firebase/messaging",Db="@firebase/messaging-compat",Vb="@firebase/performance",Mb="@firebase/performance-compat",xb="@firebase/remote-config",Lb="@firebase/remote-config-compat",Ub="@firebase/storage",Fb="@firebase/storage-compat",$b="@firebase/firestore",Bb="@firebase/vertexai-preview",jb="@firebase/firestore-compat",qb="firebase",Hb="10.14.1";/**
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
 */const Bc="[DEFAULT]",Wb={[$c]:"fire-core",[yb]:"fire-core-compat",[Eb]:"fire-analytics",[vb]:"fire-analytics-compat",[wb]:"fire-app-check",[Tb]:"fire-app-check-compat",[Ib]:"fire-auth",[bb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Rb]:"fire-data-connect",[Sb]:"fire-rtdb-compat",[Cb]:"fire-fn",[Pb]:"fire-fn-compat",[kb]:"fire-iid",[Ob]:"fire-iid-compat",[Nb]:"fire-fcm",[Db]:"fire-fcm-compat",[Vb]:"fire-perf",[Mb]:"fire-perf-compat",[xb]:"fire-rc",[Lb]:"fire-rc-compat",[Ub]:"fire-gcs",[Fb]:"fire-gcs-compat",[$b]:"fire-fst",[jb]:"fire-fst-compat",[Bb]:"fire-vertex","fire-js":"fire-js",[qb]:"fire-js-all"};/**
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
 */const Sa=new Map,zb=new Map,jc=new Map;function Nf(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(jc.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of Sa.values())Nf(n,t);for(const n of zb.values())Nf(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const Kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ys=new uo("app","Firebase",Kb);/**
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
 */class Gb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ys.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=Hb;function __(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ys.create("bad-app-name",{appName:String(r)});if(n||(n=d_()),!n)throw ys.create("no-options");const i=Sa.get(r);if(i){if(Ra(n,i.options)&&Ra(s,i.config))return i;throw ys.create("duplicate-app",{appName:r})}const o=new eb(r);for(const c of jc.values())o.addComponent(c);const l=new Gb(n,s,o);return Sa.set(r,l),l}function Du(t=Bc){const e=Sa.get(t);if(!e&&t===Bc&&d_())return __();if(!e)throw ys.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=Wb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}zs(new ws(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Qb="firebase-heartbeat-database",Yb=1,zi="firebase-heartbeat-store";let uc=null;function y_(){return uc||(uc=fb(Qb,Yb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ys.create("idb-open",{originalErrorMessage:t.message})})),uc}async function Jb(t){try{const n=(await y_()).transaction(zi),s=await n.objectStore(zi).get(v_(t));return await n.done,s}catch(e){if(e instanceof Rn)Wn.warn(e.message);else{const n=ys.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Df(t,e){try{const s=(await y_()).transaction(zi,"readwrite");await s.objectStore(zi).put(e,v_(t)),await s.done}catch(n){if(n instanceof Rn)Wn.warn(n.message);else{const s=ys.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(s.message)}}}function v_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xb=1024,Zb=30*24*60*60*1e3;class eA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Zb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vf(),{heartbeatsToSend:s,unsentEntries:r}=tA(this._heartbeatsCache.heartbeats),i=Aa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function Vf(){return new Date().toISOString().substring(0,10)}function tA(t,e=Xb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Mf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j0()?q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mf(t){return Aa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sA(t){zs(new ws("platform-logger",e=>new gb(e),"PRIVATE")),zs(new ws("heartbeat",e=>new eA(e),"PRIVATE")),yn($c,Of,t),yn($c,Of,"esm2017"),yn("fire-js","")}sA("");var rA="firebase",iA="10.14.1";/**
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
 */yn(rA,iA,"app");function Vu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oA=E_,T_=new uo("auth","Firebase",E_());/**
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
 */const Ca=new Ou("@firebase/auth");function aA(t,...e){Ca.logLevel<=Ee.WARN&&Ca.warn(`Auth (${Zs}): ${t}`,...e)}function ia(t,...e){Ca.logLevel<=Ee.ERROR&&Ca.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Mu(t,...e)}function vn(t,...e){return Mu(t,...e)}function w_(t,e,n){const s=Object.assign(Object.assign({},oA()),{[e]:n});return new uo("auth","Firebase",s).create(e,{appName:t.name})}function vs(t){return w_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return T_.create(t,...e)}function de(t,e,...n){if(!t)throw Mu(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function zn(t,e){t||Ln(e)}/**
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
 */function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lA(){return xf()==="http:"||xf()==="https:"}function xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lA()||U0()||"connection"in navigator)?navigator.onLine:!0}function uA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=M0()||F0()}get(){return cA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xu(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class I_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dA=new fo(3e4,6e4);function er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rs(t,e,n,s,r={}){return b_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=ho(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return L0()||(u.referrerPolicy="no-referrer"),I_.fetch()(A_(t,t.config.apiHost,n,l),u)})}async function b_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hA),e);try{const r=new pA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw w_(t,d,u);cn(t,d)}}catch(r){if(r instanceof Rn)throw r;cn(t,"network-request-failed",{message:String(r)})}}async function fl(t,e,n,s,r={}){const i=await Rs(t,e,n,s,r);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function A_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?xu(t.config,r):`${t.config.apiScheme}://${r}`}function fA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(vn(this.auth,"network-request-failed")),dA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=vn(t,e,s);return r.customData._tokenResponse=n,r}function Lf(t){return t!==void 0&&t.enterprise!==void 0}class mA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gA(t,e){return Rs(t,"GET","/v2/recaptchaConfig",er(t,e))}/**
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
 */async function _A(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function R_(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yA(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=Lu(s);de(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ci(hc(r.auth_time)),issuedAtTime:Ci(hc(r.iat)),expirationTime:Ci(hc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function Lu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const r=c_(n);return r?JSON.parse(r):(ia("Failed to decode base64 JWT payload"),null)}catch(r){return ia("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Uf(t){const e=Lu(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&vA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ki(t,R_(n,{idToken:s}));de(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?S_(i.providerUserInfo):[],l=wA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function TA(t){const e=Ge(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function S_(t){return t.map(e=>{var{providerId:n}=e,s=Vu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function IA(t,e){const n=await b_(t,{},async()=>{const s=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=A_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bA(t,e){return Rs(t,"POST","/v2/accounts:revokeToken",er(t,e))}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await IA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ar;return s&&(de(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(de(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function ss(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yA(this,e)}reload(){return TA(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await Ki(this,_A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,d;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,q=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:$,isAnonymous:Z,providerData:U,stsTokenManager:T}=n;de(H&&T,e,"internal-error");const v=Ar.fromJSON(this.name,T);de(typeof H=="string",e,"internal-error"),ss(p,e.name),ss(g,e.name),de(typeof $=="boolean",e,"internal-error"),de(typeof Z=="boolean",e,"internal-error"),ss(E,e.name),ss(C,e.name),ss(O,e.name),ss(N,e.name),ss(B,e.name),ss(q,e.name);const y=new Un({uid:H,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:Z,photoURL:C,phoneNumber:E,tenantId:O,stsTokenManager:v,createdAt:B,lastLoginAt:q});return U&&Array.isArray(U)&&(y.providerData=U.map(A=>Object.assign({},A))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ar;r.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];de(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?S_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ar;l.updateFromIdToken(s);const c=new Un({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Hc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Ff=new Map;function Fn(t){zn(t instanceof Function,"Expected a class definition");let e=Ff.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ff.set(t,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C_.type="NONE";const $f=C_;/**
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
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=oa(this.userKey,r.apiKey,i),this.fullPersistenceKey=oa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rr(Fn($f),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Fn($f);const o=oa(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Un._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Rr(i,e,s))}}/**
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
 */function Bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(P_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V_(e))return"Blackberry";if(M_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||O_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function P_(t=wt()){return/firefox\//i.test(t)}function k_(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O_(t=wt()){return/crios\//i.test(t)}function N_(t=wt()){return/iemobile/i.test(t)}function D_(t=wt()){return/android/i.test(t)}function V_(t=wt()){return/blackberry/i.test(t)}function M_(t=wt()){return/webos/i.test(t)}function Uu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AA(t=wt()){var e;return Uu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RA(){return $0()&&document.documentMode===10}function x_(t=wt()){return Uu(t)||D_(t)||M_(t)||V_(t)||/windows phone/i.test(t)||N_(t)}/**
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
 */function L_(t,e=[]){let n;switch(t){case"Browser":n=Bf(wt());break;case"Worker":n=`${Bf(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${s}`}/**
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
 */class SA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function CA(t,e={}){return Rs(t,"GET","/v2/passwordPolicy",er(t,e))}/**
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
 */const PA=6;class kA{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class OA{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jf(this),this.idTokenSubscription=new jf(this),this.beforeStateQueue=new SA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await R_(this,{idToken:e}),s=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(vs(this));const n=e?Ge(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CA(this),n=new kA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return Ge(t)}class jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=G0(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NA(t){pl=t}function U_(t){return pl.loadJS(t)}function DA(){return pl.recaptchaEnterpriseScript}function VA(){return pl.gapiScript}function MA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xA="recaptcha-enterprise",LA="NO_RECAPTCHA";class UA{constructor(e){this.type=xA,this.auth=qr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{gA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new mA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Lf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(LA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Lf(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=DA();c.length!==0&&(c+=l),U_(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function qf(t,e,n,s=!1){const r=new UA(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hf(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qf(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function FA(t,e){const n=dl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ra(i,e??{}))return r;cn(r,"already-initialized")}return n.initialize({options:e})}function $A(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BA(t,e,n){const s=qr(t);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=F_(e),{host:o,port:l}=jA(e),c=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),qA()}function F_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jA(t){const e=F_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Wf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Wf(o)}}}function Wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function HA(t,e){return Rs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WA(t,e){return fl(t,"POST","/v1/accounts:signInWithPassword",er(t,e))}/**
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
 */async function zA(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}async function KA(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}/**
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
 */class Gi extends Fu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,n,"signInWithPassword",WA);case"emailLink":return zA(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,s,"signUpPassword",HA);case"emailLink":return KA(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sr(t,e){return fl(t,"POST","/v1/accounts:signInWithIdp",er(t,e))}/**
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
 */const GA="http://localhost";class Ks extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Vu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ks(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Sr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:GA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
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
 */function QA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YA(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,s=pi(mi(t)).deep_link_id;return(s?pi(mi(s)).link:null)||s||n||e||t}class $u{constructor(e){var n,s,r,i,o,l;const c=pi(mi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,p=QA((r=c.mode)!==null&&r!==void 0?r:null);de(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=YA(e);try{return new $u(n)}catch{return null}}}/**
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
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=$u.parseLink(n);return de(s,"argument-error"),Gi._fromEmailAndCode(e,s.code,s.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends $_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class us extends po{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
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
 */class hs extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
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
 */class ds extends po{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.GITHUB_SIGN_IN_METHOD="github.com";ds.PROVIDER_ID="github.com";/**
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
 */class fs extends po{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fs.credential(n,s)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Un._fromIdTokenResponse(e,s,r),o=zf(s);return new Vr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=zf(s);return new Vr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends Rn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ka(e,n,s,r)}}function B_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,i,e,s):i})}async function JA(t,e,n=!1){const s=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",s)}/**
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
 */async function XA(t,e,n=!1){const{auth:s}=t;if(xn(s.app))return Promise.reject(vs(s));const r="reauthenticate";try{const i=await Ki(t,B_(s,r,e,t),n);de(i.idToken,s,"internal-error");const o=Lu(i.idToken);de(o,s,"internal-error");const{sub:l}=o;return de(t.uid===l,s,"user-mismatch"),Vr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),i}}/**
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
 */async function j_(t,e,n=!1){if(xn(t.app))return Promise.reject(vs(t));const s="signIn",r=await B_(t,s,e),i=await Vr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ZA(t,e){return j_(qr(t),e)}/**
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
 */async function eR(t){const e=qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function tR(t,e,n){return xn(t.app)?Promise.reject(vs(t)):ZA(Ge(t),Hr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&eR(t),s})}function nR(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function sR(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function rR(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function iR(t){return Ge(t).signOut()}const Oa="__sak";/**
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
 */class q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oR=1e3,aR=10;class H_ extends q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);RA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,aR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H_.type="LOCAL";const lR=H_;/**
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
 */class W_ extends q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}W_.type="SESSION";const z_=W_;/**
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
 */function cR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await cR(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
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
 */function Bu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Bu("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function hR(t){En().location.href=t}/**
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
 */function K_(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return K_()?self:null}/**
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
 */const G_="firebaseLocalStorageDb",mR=1,Na="firebaseLocalStorage",Q_="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function gR(){const t=indexedDB.deleteDatabase(G_);return new mo(t).toPromise()}function Wc(){const t=indexedDB.open(G_,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Na,{keyPath:Q_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Na)?e(s):(s.close(),await gR(),e(await Wc()))})})}async function Kf(t,e,n){const s=gl(t,!0).put({[Q_]:e,value:n});return new mo(s).toPromise()}async function _R(t,e){const n=gl(t,!1).get(e),s=await new mo(n).toPromise();return s===void 0?null:s.value}function Gf(t,e){const n=gl(t,!0).delete(e);return new mo(n).toPromise()}const yR=800,vR=3;class Y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new uR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await Kf(e,Oa,"1"),await Gf(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_R(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=gl(r,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y_.type="LOCAL";const ER=Y_;new fo(3e4,6e4);/**
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
 */function TR(t,e){return e?Fn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ju extends Fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wR(t){return j_(t.auth,new ju(t),t.bypassAuthState)}function IR(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),XA(n,new ju(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),JA(n,new ju(t),t.bypassAuthState)}/**
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
 */class J_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wR;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:cn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AR=new fo(2e3,1e4);class gr extends J_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AR.get())};e()}}gr.currentPopupAction=null;/**
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
 */const RR="pendingRedirect",aa=new Map;class SR extends J_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const s=await CR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CR(t,e){const n=OR(e),s=kR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function PR(t,e){aa.set(t._key(),e)}function kR(t){return Fn(t._redirectPersistence)}function OR(t){return oa(RR,t.config.apiKey,t.name)}async function NR(t,e,n=!1){if(xn(t.app))return Promise.reject(vs(t));const s=qr(t),r=TR(s,e),o=await new SR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const DR=10*60*1e3;class VR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!X_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X_(t);default:return!1}}/**
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
 */async function xR(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
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
 */const LR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UR=/^https?/;async function FR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if($R(n))return}catch{}cn(t,"unauthorized-domain")}function $R(t){const e=qc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!UR.test(n))return!1;if(LR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const BR=new fo(3e4,6e4);function Yf(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jR(t){return new Promise((e,n)=>{var s,r,i;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(vn(t,"network-request-failed"))},timeout:BR.get()})}if(!((r=(s=En().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=En().gapi)===null||i===void 0)&&i.load)o();else{const l=MA("iframefcb");return En()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},U_(`${VA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw la=null,e})}let la=null;function qR(t){return la=la||jR(t),la}/**
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
 */const HR=new fo(5e3,15e3),WR="__/auth/iframe",zR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,zR):`https://${t.config.authDomain}/${WR}`,s={apiKey:e.apiKey,appName:t.name,v:Zs},r=GR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ho(s).slice(1)}`}async function YR(t){const e=await qR(t),n=En().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:QR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=En().setTimeout(()=>{i(o)},HR.get());function c(){En().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XR=500,ZR=600,eS="_blank",tS="http://localhost";class Jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nS(t,e,n,s=XR,r=ZR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},JR),{width:s.toString(),height:r.toString(),top:i,left:o}),u=wt().toLowerCase();n&&(l=O_(u)?eS:n),P_(u)&&(e=e||tS,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(AA(u)&&l!=="_self")return sS(e||"",l),new Jf(null);const p=window.open(e||"",l,d);de(p,t,"popup-blocked");try{p.focus()}catch{}return new Jf(p)}function sS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const rS="__/auth/handler",iS="emulator/auth/handler",oS=encodeURIComponent("fac");async function Xf(t,e,n,s,r,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zs,eventId:r};if(e instanceof $_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",K0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof po){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${oS}=${encodeURIComponent(c)}`:"";return`${aS(t)}?${ho(l).slice(1)}${u}`}function aS({config:t}){return t.emulator?xu(t,iS):`https://${t.authDomain}/${rS}`}/**
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
 */const dc="webStorageSupport";class lS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=NR,this._overrideRedirectResult=PR}async _openPopup(e,n,s,r){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xf(e,n,s,qc(),r);return nS(e,o,Bu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Xf(e,n,s,qc(),r);return hR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(zn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YR(e),s=new VR(e);return n.register("authEvent",r=>(de(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[dc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x_()||k_()||Uu()}}const cS=lS;var Zf="@firebase/auth",ep="1.7.9";/**
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
 */class uS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dS(t){zs(new ws("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(t)},u=new OA(s,r,i,c);return $A(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new ws("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(s=>new uS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Zf,ep,hS(t)),yn(Zf,ep,"esm2017")}/**
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
 */const fS=5*60,pS=f_("authIdTokenMaxAge")||fS;let tp=null;const mS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pS)return;const r=n==null?void 0:n.token;tp!==r&&(tp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gS(t=Du()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FA(t,{popupRedirectResolver:cS,persistence:[ER,lR,z_]}),s=f_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=mS(i.toString());sR(n,o,()=>o(n.currentUser)),nR(n,l=>o(l))}}const r=u_("auth");return r&&BA(n,`http://${r}`),n}function _S(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=vn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",_S().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dS("Browser");var np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,Z_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function y(){}y.prototype=v.prototype,T.D=v.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(A,R,w){for(var m=Array(arguments.length-2),le=2;le<arguments.length;le++)m[le-2]=arguments[le];return v.prototype[R].apply(A,m)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,v,y){y||(y=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)A[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=T.g[0],y=T.g[1],R=T.g[2];var w=T.g[3],m=v+(w^y&(R^w))+A[0]+3614090360&4294967295;v=y+(m<<7&4294967295|m>>>25),m=w+(R^v&(y^R))+A[1]+3905402710&4294967295,w=v+(m<<12&4294967295|m>>>20),m=R+(y^w&(v^y))+A[2]+606105819&4294967295,R=w+(m<<17&4294967295|m>>>15),m=y+(v^R&(w^v))+A[3]+3250441966&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(w^y&(R^w))+A[4]+4118548399&4294967295,v=y+(m<<7&4294967295|m>>>25),m=w+(R^v&(y^R))+A[5]+1200080426&4294967295,w=v+(m<<12&4294967295|m>>>20),m=R+(y^w&(v^y))+A[6]+2821735955&4294967295,R=w+(m<<17&4294967295|m>>>15),m=y+(v^R&(w^v))+A[7]+4249261313&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(w^y&(R^w))+A[8]+1770035416&4294967295,v=y+(m<<7&4294967295|m>>>25),m=w+(R^v&(y^R))+A[9]+2336552879&4294967295,w=v+(m<<12&4294967295|m>>>20),m=R+(y^w&(v^y))+A[10]+4294925233&4294967295,R=w+(m<<17&4294967295|m>>>15),m=y+(v^R&(w^v))+A[11]+2304563134&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(w^y&(R^w))+A[12]+1804603682&4294967295,v=y+(m<<7&4294967295|m>>>25),m=w+(R^v&(y^R))+A[13]+4254626195&4294967295,w=v+(m<<12&4294967295|m>>>20),m=R+(y^w&(v^y))+A[14]+2792965006&4294967295,R=w+(m<<17&4294967295|m>>>15),m=y+(v^R&(w^v))+A[15]+1236535329&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(R^w&(y^R))+A[1]+4129170786&4294967295,v=y+(m<<5&4294967295|m>>>27),m=w+(y^R&(v^y))+A[6]+3225465664&4294967295,w=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(w^v))+A[11]+643717713&4294967295,R=w+(m<<14&4294967295|m>>>18),m=y+(w^v&(R^w))+A[0]+3921069994&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^w&(y^R))+A[5]+3593408605&4294967295,v=y+(m<<5&4294967295|m>>>27),m=w+(y^R&(v^y))+A[10]+38016083&4294967295,w=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(w^v))+A[15]+3634488961&4294967295,R=w+(m<<14&4294967295|m>>>18),m=y+(w^v&(R^w))+A[4]+3889429448&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^w&(y^R))+A[9]+568446438&4294967295,v=y+(m<<5&4294967295|m>>>27),m=w+(y^R&(v^y))+A[14]+3275163606&4294967295,w=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(w^v))+A[3]+4107603335&4294967295,R=w+(m<<14&4294967295|m>>>18),m=y+(w^v&(R^w))+A[8]+1163531501&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^w&(y^R))+A[13]+2850285829&4294967295,v=y+(m<<5&4294967295|m>>>27),m=w+(y^R&(v^y))+A[2]+4243563512&4294967295,w=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(w^v))+A[7]+1735328473&4294967295,R=w+(m<<14&4294967295|m>>>18),m=y+(w^v&(R^w))+A[12]+2368359562&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(y^R^w)+A[5]+4294588738&4294967295,v=y+(m<<4&4294967295|m>>>28),m=w+(v^y^R)+A[8]+2272392833&4294967295,w=v+(m<<11&4294967295|m>>>21),m=R+(w^v^y)+A[11]+1839030562&4294967295,R=w+(m<<16&4294967295|m>>>16),m=y+(R^w^v)+A[14]+4259657740&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^w)+A[1]+2763975236&4294967295,v=y+(m<<4&4294967295|m>>>28),m=w+(v^y^R)+A[4]+1272893353&4294967295,w=v+(m<<11&4294967295|m>>>21),m=R+(w^v^y)+A[7]+4139469664&4294967295,R=w+(m<<16&4294967295|m>>>16),m=y+(R^w^v)+A[10]+3200236656&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^w)+A[13]+681279174&4294967295,v=y+(m<<4&4294967295|m>>>28),m=w+(v^y^R)+A[0]+3936430074&4294967295,w=v+(m<<11&4294967295|m>>>21),m=R+(w^v^y)+A[3]+3572445317&4294967295,R=w+(m<<16&4294967295|m>>>16),m=y+(R^w^v)+A[6]+76029189&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^w)+A[9]+3654602809&4294967295,v=y+(m<<4&4294967295|m>>>28),m=w+(v^y^R)+A[12]+3873151461&4294967295,w=v+(m<<11&4294967295|m>>>21),m=R+(w^v^y)+A[15]+530742520&4294967295,R=w+(m<<16&4294967295|m>>>16),m=y+(R^w^v)+A[2]+3299628645&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(R^(y|~w))+A[0]+4096336452&4294967295,v=y+(m<<6&4294967295|m>>>26),m=w+(y^(v|~R))+A[7]+1126891415&4294967295,w=v+(m<<10&4294967295|m>>>22),m=R+(v^(w|~y))+A[14]+2878612391&4294967295,R=w+(m<<15&4294967295|m>>>17),m=y+(w^(R|~v))+A[5]+4237533241&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~w))+A[12]+1700485571&4294967295,v=y+(m<<6&4294967295|m>>>26),m=w+(y^(v|~R))+A[3]+2399980690&4294967295,w=v+(m<<10&4294967295|m>>>22),m=R+(v^(w|~y))+A[10]+4293915773&4294967295,R=w+(m<<15&4294967295|m>>>17),m=y+(w^(R|~v))+A[1]+2240044497&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~w))+A[8]+1873313359&4294967295,v=y+(m<<6&4294967295|m>>>26),m=w+(y^(v|~R))+A[15]+4264355552&4294967295,w=v+(m<<10&4294967295|m>>>22),m=R+(v^(w|~y))+A[6]+2734768916&4294967295,R=w+(m<<15&4294967295|m>>>17),m=y+(w^(R|~v))+A[13]+1309151649&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~w))+A[4]+4149444226&4294967295,v=y+(m<<6&4294967295|m>>>26),m=w+(y^(v|~R))+A[11]+3174756917&4294967295,w=v+(m<<10&4294967295|m>>>22),m=R+(v^(w|~y))+A[2]+718787259&4294967295,R=w+(m<<15&4294967295|m>>>17),m=y+(w^(R|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(R+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+w&4294967295}s.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var y=v-this.blockSize,A=this.B,R=this.h,w=0;w<v;){if(R==0)for(;w<=y;)r(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<v;)if(A[R++]=T.charCodeAt(w++),R==this.blockSize){r(this,A),R=0;break}}else for(;w<v;)if(A[R++]=T[w++],R==this.blockSize){r(this,A),R=0;break}}this.h=R,this.o+=v},s.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var y=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=y&255,y/=256;for(this.u(T),T=Array(16),v=y=0;4>v;++v)for(var A=0;32>A;A+=8)T[y++]=this.g[v]>>>A&255;return T};function i(T,v){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=v(T)}function o(T,v){this.h=v;for(var y=[],A=!0,R=T.length-1;0<=R;R--){var w=T[R]|0;A&&w==v||(y[R]=w,A=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return N(u(-T));for(var v=[],y=1,A=0;T>=y;A++)v[A]=T/y|0,y*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return N(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),A=p,R=0;R<T.length;R+=8){var w=Math.min(8,T.length-R),m=parseInt(T.substring(R,R+w),v);8>w?(w=u(Math.pow(v,w)),A=A.j(w).add(u(m))):(A=A.j(y),A=A.add(u(m)))}return A}var p=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var T=0,v=1,y=0;y<this.g.length;y++){var A=this.i(y);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(O(this))return"-"+N(this).toString(T);for(var v=u(Math.pow(T,6)),y=this,A="";;){var R=$(y,v).g;y=B(y,R.j(v));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=R,C(y))return w+A;for(;6>w.length;)w="0"+w;A=w+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function O(T){return T.h==-1}t.l=function(T){return T=B(this,T),O(T)?-1:C(T)?0:1};function N(T){for(var v=T.g.length,y=[],A=0;A<v;A++)y[A]=~T.g[A];return new o(y,~T.h).add(g)}t.abs=function(){return O(this)?N(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],A=0,R=0;R<=v;R++){var w=A+(this.i(R)&65535)+(T.i(R)&65535),m=(w>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);A=m>>>16,w&=65535,m&=65535,y[R]=m<<16|w}return new o(y,y[y.length-1]&-2147483648?-1:0)};function B(T,v){return T.add(N(v))}t.j=function(T){if(C(this)||C(T))return p;if(O(this))return O(T)?N(this).j(N(T)):N(N(this).j(T));if(O(T))return N(this.j(N(T)));if(0>this.l(E)&&0>T.l(E))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,y=[],A=0;A<2*v;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<T.g.length;R++){var w=this.i(A)>>>16,m=this.i(A)&65535,le=T.i(R)>>>16,J=T.i(R)&65535;y[2*A+2*R]+=m*J,q(y,2*A+2*R),y[2*A+2*R+1]+=w*J,q(y,2*A+2*R+1),y[2*A+2*R+1]+=m*le,q(y,2*A+2*R+1),y[2*A+2*R+2]+=w*le,q(y,2*A+2*R+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function q(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function H(T,v){this.g=T,this.h=v}function $(T,v){if(C(v))throw Error("division by zero");if(C(T))return new H(p,p);if(O(T))return v=$(N(T),v),new H(N(v.g),N(v.h));if(O(v))return v=$(T,N(v)),new H(N(v.g),v.h);if(30<T.g.length){if(O(T)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,A=v;0>=A.l(T);)y=Z(y),A=Z(A);var R=U(y,1),w=U(A,1);for(A=U(A,2),y=U(y,2);!C(A);){var m=w.add(A);0>=m.l(T)&&(R=R.add(y),w=m),A=U(A,1),y=U(y,1)}return v=B(T,R.j(v)),new H(R,v)}for(R=p;0<=T.l(v);){for(y=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),w=u(y),m=w.j(v);O(m)||0<m.l(T);)y-=A,w=u(y),m=w.j(v);C(w)&&(w=g),R=R.add(w),T=B(T,m)}return new H(R,T)}t.A=function(T){return $(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)&T.i(A);return new o(y,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)|T.i(A);return new o(y,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)^T.i(A);return new o(y,this.h^T.h)};function Z(T){for(var v=T.g.length+1,y=[],A=0;A<v;A++)y[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(y,T.h)}function U(T,v){var y=v>>5;v%=32;for(var A=T.g.length-y,R=[],w=0;w<A;w++)R[w]=0<v?T.i(w+y)>>>v|T.i(w+y+1)<<32-v:T.i(w+y);return new o(R,T.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Z_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,js=o}).apply(typeof np<"u"?np:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ey,gi,ty,ca,zc,ny,sy,ry;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var f=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,D){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[k].apply(_,G)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,D=_.length||0;a.length=k+D;for(let G=0;G<D;G++)a[k+G]=_[G]}else a.push(_)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Z=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function U(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function w(a){l.setTimeout(()=>{throw a},0)}function m(){var a=Nt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class le{constructor(){this.h=this.g=null}add(h,f){const _=J.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var J=new B(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ye=!1,Nt=new le,Yt=()=>{const a=l.Promise.resolve(void 0);Te=()=>{a.then(jt)}};var jt=()=>{for(var a;a=m();){try{a.h.call(a.g)}catch(f){w(f)}var h=J;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function hn(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{$(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}C(hn,qe);var Ct={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++ee,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,_,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var G=b(a,h,_,k);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new X(h,this.src,D,!!_,k),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(ne(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,h,f,_){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),M={};function F(a,h,f,_,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)F(a,h[D],f,_,k);return null}return f=ue(f),a&&a[V]?a.K(h,f,u(_)?!!_.capture:!1,k):x(a,h,f,!1,_,k)}function x(a,h,f,_,k,D){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Ve=Q(a);if(Ve||(a[P]=Ve=new Re(a)),f=Ve.add(h,f,_,G,D),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Yn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(W(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=ie;return a}function K(a,h,f,_,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],f,_,k);else _=u(_)?!!_.capture:!!_,f=ue(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=b(D,f,_,k),-1<f&&(ne(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,f,_,k)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])I(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(W(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=Q(h))?(I(f,a),f.h==0&&(f.src=null,h[P]=null)):ne(a)}}}function W(a){return a in M?M[a]:M[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new hn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&z(a),a=f.call(_,h)}return a}function Q(a){return a=a[P],a instanceof Re?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ce(){je.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ce,je),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(a,h,f,_){K(this,a,h,f,_)};function _e(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var k=h;h=new qe(_,a),A(h,k)}if(k=!0,f)for(var D=f.length-1;0<=D;D--){var G=h.g=f[D];k=we(G,_,!0,h)&&k}if(G=h.g=a,k=we(G,_,!0,h)&&k,k=we(G,_,!1,h)&&k,f)for(D=0;D<f.length;D++)G=h.g=f[D],k=we(G,_,!1,h)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ne(f[_]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ce.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function we(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var G=h[D];if(G&&!G.da&&G.capture==f){var Ve=G.listener,ot=G.ha||G.src;G.fa&&I(a.i,G),k=Ve.call(ot,_)!==!1&&k}}return k&&!_.defaultPrevented}function st(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rt(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qt extends je{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){je.call(this),this.h=a,this.g={}}C(ft,je);var Jn=[];function Qr(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Qr(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,Ht=l.JSON.parse,Io=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ol(){}Ol.prototype.h=null;function Sh(a){return a.h||(a.h=a.i())}function Ch(){}var Yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nl(){qe.call(this,"d")}C(Nl,qe);function Dl(){qe.call(this,"c")}C(Dl,qe);var Cs={},Ph=null;function bo(){return Ph=Ph||new ce}Cs.La="serverreachability";function kh(a){qe.call(this,Cs.La,a)}C(kh,qe);function Jr(a){const h=bo();_e(h,new kh(h))}Cs.STAT_EVENT="statevent";function Oh(a,h){qe.call(this,Cs.STAT_EVENT,a),this.stat=h}C(Oh,qe);function It(a){const h=bo();_e(h,new Oh(h,a))}Cs.Ma="timingevent";function Nh(a,h){qe.call(this,Cs.Ma,a),this.size=h}C(Nh,qe);function Xr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zr(){this.g=!0}Zr.prototype.xa=function(){this.g=!1};function Rv(a,h,f,_,k,D){a.info(function(){if(a.g)if(D)for(var G="",Ve=D.split("&"),ot=0;ot<Ve.length;ot++){var Se=Ve[ot].split("=");if(1<Se.length){var pt=Se[0];Se=Se[1];var mt=pt.split("_");G=2<=mt.length&&mt[1]=="type"?G+(pt+"="+Se+"&"):G+(pt+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+G})}function Sv(a,h,f,_,k,D,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+D+" "+G})}function rr(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Pv(a,f)+(_?" "+_:"")})}function Cv(a,h){a.info(function(){return"TIMEOUT: "+h})}Zr.prototype.info=function(){};function Pv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return it(f)}catch{return h}}var Ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vl;function Ro(){}C(Ro,Ol),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},Vl=new Ro;function Xn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Mh={},Ml={};function xl(a,h,f){a.L=1,a.v=ko(Cn(h)),a.m=f,a.P=!0,xh(a,null)}function xh(a,h){a.F=Date.now(),So(a),a.A=Cn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Yh(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Vh,a.g=pd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Jn[0]=k.toString()),k=Jn);for(var D=0;D<k.length;D++){var G=F(f,k[D],_||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Jr(),Rv(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Pn(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Pn(this.g);var h=this.g.Ba();const ar=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||sd(this.g)))){this.J||mt!=4||h==7||(h==8||0>=ar?Jr(3):Jr(2)),Ll(this);var f=this.g.Z();this.X=f;t:if(Lh(this)){var _=sd(this.g);a="";var k=_.length,D=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),ei(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Sv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ot=this.g;if((Ve=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Ve)){var Se=Ve;break t}}Se=null}if(f=Se)rr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,f);else{this.o=!1,this.s=3,It(12),Ps(this),ei(this);break e}}if(this.P){f=!0;let Jt;for(;!this.J&&this.C<G.length;)if(Jt=kv(this,G),Jt==Ml){mt==4&&(this.s=4,It(14),f=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Mh){this.s=4,It(15),rr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else rr(this.i,this.l,Jt,null),Ul(this,Jt);if(Lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||G.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)rr(this.i,this.l,G,"[Invalid Chunked Response]"),Ps(this),ei(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Hl(pt),pt.M=!0,It(11))}}else rr(this.i,this.l,G,null),Ul(this,G);mt==4&&Ps(this),this.o&&!this.J&&(mt==4?ud(this.j,this):(this.o=!1,So(this)))}else Kv(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Ps(this),ei(this)}}}catch{}finally{}};function Lh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Ml:(f=Number(h.substring(f,_)),isNaN(f)?Mh:(_+=1,_+f>h.length?Ml:(h=h.slice(_,_+f),a.C=_+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Ps(this)};function So(a){a.S=Date.now()+a.I,Uh(a,a.I)}function Uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xr(g(a.ba,a),h)}function Ll(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Cv(this.i,this.A),this.L!=2&&(Jr(),It(17)),Ps(this),this.s=2,ei(this)):Uh(this,this.S-a)};function ei(a){a.j.G==0||a.J||ud(a.j,a)}function Ps(a){Ll(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qr(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ul(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Fl(f.h,a))){if(!a.K&&Fl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)xo(f),Vo(f);else break e;ql(f),It(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xr(g(f.Za,f),6e3));if(1>=Bh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Os(f,11)}else if((a.K||f.g==a)&&xo(f),!q(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const pt=Se[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const mt=Se[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const ar=Se[5];ar!=null&&typeof ar=="number"&&0<ar&&(_=1.5*ar,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Jt=a.g;if(Jt){const Uo=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var D=_.h;D.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&($l(D,D.h),D.h=null))}if(_.D){const Wl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wl&&(_.ya=Wl,Ue(_.I,_.D,Wl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var G=a;if(_.qa=fd(_,_.J?_.ia:null,_.W),G.K){jh(_.h,G);var Ve=G,ot=_.L;ot&&(Ve.I=ot),Ve.B&&(Ll(Ve),So(Ve)),_.g=G}else ld(_);0<f.i.length&&Mo(f)}else Se[0]!="stop"&&Se[0]!="close"||Os(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Os(f,7):jl(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Jr(4)}catch{}}var Ov=class{constructor(a,h){this.g=a,this.map=h}};function Fh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bh(a){return a.h?1:a.g?a.g.size:0}function Fl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $l(a,h){a.g?a.g.add(h):a.h=h}function jh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fh.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function Nv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function Dv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Hh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Dv(a),_=Nv(a),k=_.length,D=0;D<k;D++)h.call(void 0,_[D],f&&f[D],a)}var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var D=a[f].substring(0,_);k=a[f].substring(_+1)}else D=a[f];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ks(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ks){this.h=a.h,Co(this,a.j),this.o=a.o,this.g=a.g,Po(this,a.s),this.l=a.l;var h=a.i,f=new si;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),zh(this,f),this.m=a.m}else a&&(h=String(a).match(Wh))?(this.h=!1,Co(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),Po(this,h[4]),this.l=ti(h[5]||"",!0),zh(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new si(null,this.h))}ks.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,Kh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,Kh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?Lv:xv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,Fv)),a.join("")};function Cn(a){return new ks(a)}function Co(a,h,f){a.j=f?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Po(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function zh(a,h,f){h instanceof si?(a.i=h,$v(a.i,a.h)):(f||(h=ni(h,Uv)),a.i=new si(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function ko(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Mv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kh=/[#\/\?@]/g,xv=/[#\?:]/g,Lv=/[#\?]/g,Uv=/[#\?@]/g,Fv=/#/g;function si(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Vv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=si.prototype,t.add=function(a,h){Zn(this),this.i=null,a=ir(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Gh(a,h){Zn(a),h=ir(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Qh(a,h){return Zn(a),h=ir(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let D=0;D<k.length;D++)f.push(h[_])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")Qh(this,a)&&(h=h.concat(this.g.get(ir(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=ir(this,a),Qh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Yh(a,h,f){Gh(a,h),0<f.length&&(a.i=null,a.g.set(ir(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const D=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var k=D;G[_]!==""&&(k+="="+encodeURIComponent(String(G[_]))),a.push(k)}}return this.i=a.join("&")};function ir(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $v(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(Gh(this,_),Yh(this,k,f))},a)),a.j=h}function Bv(a,h){const f=new Zr;if(l.Image){const _=new Image;_.onload=E(es,f,"TestLoadImage: loaded",!0,h,_),_.onerror=E(es,f,"TestLoadImage: error",!1,h,_),_.onabort=E(es,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(es,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function jv(a,h){const f=new Zr,_=new AbortController,k=setTimeout(()=>{_.abort(),es(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?es(f,"TestPingServer: ok",!0,h):es(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),es(f,"TestPingServer: error",!1,h)})}function es(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function qv(){this.g=new Io}function Hv(a,h,f){const _=f||"";try{Hh(a,function(k,D){let G=k;u(k)&&(G=it(k)),h.push(_+D+"="+encodeURIComponent(G))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function Oo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Oo,Ol),Oo.prototype.g=function(){return new No(this.l,this.j)},Oo.prototype.i=function(a){return function(){return a}}({});function No(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(No,ce),t=No.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ri(this):ii(this),this.readyState==3&&Jh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Qa=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xh(a){let h="";return U(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Bl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Xh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function We(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(We,ce);var Wv=/^https?$/i,zv=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vl.g(),this.v=this.o?Sh(this.o):Sh(Vl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Zh(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zv,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of f)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nd(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Zh(this,D)}};function Zh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ed(a),Do(a)}function ed(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?td(this):this.bb())},t.bb=function(){td(this)};function td(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)st(a.Ea,0,a);else if(_e(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=G===0){var k=String(a.D).match(Wh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!Wv.test(k?k.toLowerCase():"")}f=_}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var D=2<Pn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",ed(a)}}finally{Do(a)}}}}function Do(a,h){if(a.g){nd(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=_}catch{}}}function nd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function sd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kv(a){const h={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(q(a[_]))continue;var f=R(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[k]||[];h[k]=D,D.push(f)}T(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function rd(a){this.Aa=0,this.i=[],this.j=new Zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fh(a&&a.concurrentRequestLimit),this.Da=new qv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){It(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=fd(this,null,this.W),Mo(this)};function jl(a){if(id(a),a.G==3){var h=a.U++,f=Cn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),ai(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=ko(Cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=pd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),So(h)}dd(a)}function Vo(a){a.g&&(Hl(a),a.g.cancel(),a.g=null)}function id(a){Vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Mo(a){if(!$h(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||Yt(),ye||(Te(),ye=!0),Nt.add(h,a),a.B=0}}function Gv(a,h){return Bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xr(g(a.Ga,a,h),hd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ad(this,k,h),f=Cn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),ai(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Xh(D)))+"&"+h:this.m&&Bl(f,this.m,D)),$l(this.h,k),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),k.T=!0,xl(k,f,null)):xl(k,f,h),this.G=2}}else this.G==3&&(a?od(this,a):this.i.length==0||$h(this.h)||od(this))};function od(a,h){var f;h?f=h.l:f=a.U++;const _=Cn(a.I);Ue(_,"SID",a.K),Ue(_,"RID",f),Ue(_,"AID",a.T),ai(a,_),a.m&&a.o&&Bl(_,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ad(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$l(a.h,f),xl(f,_,h)}function ai(a,h){a.H&&U(a.H,function(f,_){Ue(h,_,f)}),a.l&&Hh({},function(f,_){Ue(h,_,f)})}function ad(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const G=["count="+f];D==-1?0<f?(D=k[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Ve=!0;for(let ot=0;ot<f;ot++){let Se=k[ot].g;const pt=k[ot].map;if(Se-=D,0>Se)D=Math.max(0,k[ot].g-100),Ve=!1;else try{Hv(pt,G,"req"+Se+"_")}catch{_&&_(pt)}}if(Ve){_=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function ld(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||Yt(),ye||(Te(),ye=!0),Nt.add(h,a),a.v=0}}function ql(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xr(g(a.Fa,a),hd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xr(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Vo(this),cd(this))};function Hl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cd(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&Bl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ko(Cn(h)),f.m=null,f.P=!0,xh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),ql(this),It(19))};function xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ud(a,h){var f=null;if(a.g==h){xo(a),Hl(a),a.g=null;var _=2}else if(Fl(a.h,h))f=h.D,jh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=bo(),_e(_,new Nh(_,f)),Mo(a)}else ld(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&Gv(a,h)||_==2&&ql(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Os(a,5);break;case 4:Os(a,10);break;case 3:Os(a,6);break;default:Os(a,2)}}}function hd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Os(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const k=!_;_=new ks(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Co(_,"https"),ko(_),k?Bv(_.toString(),f):jv(_.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(h),dd(a),id(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function dd(a){if(a.G=0,a.ka=[],a.l){const h=qh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function fd(a,h,f){var _=f instanceof ks?Cn(f):new ks(f);if(_.g!="")h&&(_.g=h+"."+_.g),Po(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new ks(null);_&&Co(D,_),h&&(D.g=h),k&&Po(D,k),f&&(D.l=f),_=D}return f=a.D,h=a.ya,f&&h&&Ue(_,f,h),Ue(_,"VER",a.la),ai(a,_),_}function pd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Oo({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}t=md.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ce.call(this),this.g=new rd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new or(this)}C(Dt,ce),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){jl(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=it(a),a=f);h.i.push(new Ov(h.Ya++,a)),h.G==3&&Mo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,jl(this.g),delete this.g,Dt.aa.N.call(this)};function gd(a){Nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(gd,Nl);function _d(){Dl.call(this),this.status=1}C(_d,Dl);function or(a){this.g=a}C(or,md),or.prototype.ua=function(){_e(this.g,"a")},or.prototype.ta=function(a){_e(this.g,new gd(a))},or.prototype.sa=function(a){_e(this.g,new _d)},or.prototype.ra=function(){_e(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,ry=function(){return new Lo},sy=function(){return bo()},ny=Cs,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ao.NO_ERROR=0,Ao.TIMEOUT=8,Ao.HTTP_ERROR=6,ca=Ao,Dh.COMPLETE="complete",ty=Dh,Ch.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",ce.prototype.listen=ce.prototype.K,gi=Ch,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,ey=We}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const sp="@firebase/firestore";/**
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
 */let Wr="10.14.0";/**
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
 */const Gs=new Ou("@firebase/firestore");function hi(){return Gs.logLevel}function se(t,...e){if(Gs.logLevel<=Ee.DEBUG){const n=e.map(qu);Gs.debug(`Firestore (${Wr}): ${t}`,...n)}}function Kn(t,...e){if(Gs.logLevel<=Ee.ERROR){const n=e.map(qu);Gs.error(`Firestore (${Wr}): ${t}`,...n)}}function Mr(t,...e){if(Gs.logLevel<=Ee.WARN){const n=e.map(qu);Gs.warn(`Firestore (${Wr}): ${t}`,...n)}}function qu(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function Ne(t,e){t||fe()}function me(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class iy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class vS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ES{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new iy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new _t(e)}}class TS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new TS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const s=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new IS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class oy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=AS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Pe(t,e){return t<e?-1:t>e?1:0}function xr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ze(0,0))}static max(){return new pe(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qi{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(),s===void 0?s=e.length-n:s>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Qi{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const RS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Qi{construct(e,n,s){return new ut(e,n,s)}static isValidIdentifier(e){return RS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new te(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new te(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Fe.fromString(e))}static fromName(e){return new ae(Fe.fromString(e).popFirst(5))}static empty(){return new ae(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Fe(e.slice()))}}function SS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=pe.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new Is(r,ae.empty(),e)}function CS(t){return new Is(t.readTime,t.key,-1)}class Is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Is(pe.min(),ae.empty(),-1)}static max(){return new Is(pe.max(),ae.empty(),-1)}}function PS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const kS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function go(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==kS)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,s)=>{n(e)})}static reject(e){return new j((n,s)=>{s(e)})}static waitFor(e){return new j((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next(r=>r?j.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new j((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(e,n){return new j((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function NS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hu.oe=-1;function _l(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function DS(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ay(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??at.RED,this.left=r??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new at(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,s,r,i){return this}insert(e,n,s){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ip(this.data.getIterator())}getIteratorFrom(e){return new ip(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class ip{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ht(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ly("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const VS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=VS.exec(t);if(Ne(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?zu(e):e}function Yi(t){const e=bs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class MS{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zo={mapValue:{}};function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:LS(t)?9007199254740991:xS(t)?10:11:fe()}function bn(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=bs(r.timestampValue),l=bs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ke(r.doubleValue),l=Ke(i.doubleValue);return o===l?Da(o)===Da(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xr(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(rp(o)!==rp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function Xi(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Lr(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return op(t.timestampValue,e.timestampValue);case 4:return op(Yi(t),Yi(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Qs(i),c=Qs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Pe(l[u],c[u]);if(d!==0)return d}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(Ke(i.latitude),Ke(o.latitude));return l!==0?l:Pe(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ap(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,O=Pe(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:ap(E,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===zo.mapValue&&o===zo.mapValue)return 0;if(i===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Pe(c[p],d[p]);if(g!==0)return g;const E=Lr(l[c[p]],u[d[p]]);if(E!==0)return E}return Pe(c.length,d.length)}(t.mapValue,e.mapValue);default:throw fe()}}function op(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=bs(t),s=bs(e),r=Pe(n.seconds,s.seconds);return r!==0?r:Pe(n.nanos,s.nanos)}function ap(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Lr(n[r],s[r]);if(i)return i}return Pe(n.length,s.length)}function Ur(t){return Kc(t)}function Kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=bs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Kc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Kc(n.fields[o])}`;return r+"}"}(t.mapValue):fe()}function lp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gc(t){return!!t&&"integerValue"in t}function Ku(t){return!!t&&"arrayValue"in t}function cp(t){return!!t&&"nullValue"in t}function up(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ua(t){return!!t&&"mapValue"in t}function xS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(n)}setAll(e){let n=ut.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Pi(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ua(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){tr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ot(Pi(this.value))}}function cy(t){const e=[];return tr(t.fields,(n,s)=>{const r=new ut([n]);if(ua(s)){const i=cy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ft(e)}/**
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
 */class Et{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,pe.min(),pe.min(),pe.min(),Ot.empty(),0)}static newFoundDocument(e,n,s,r){return new Et(e,1,n,pe.min(),s,r,0)}static newNoDocument(e,n){return new Et(e,2,n,pe.min(),pe.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,pe.min(),pe.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function hp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),n.key):s=Lr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function dp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function US(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class uy{}class Ye extends uy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new $S(e,n,s):n==="array-contains"?new qS(e,s):n==="in"?new HS(e,s):n==="not-in"?new WS(e,s):n==="array-contains-any"?new zS(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new BS(e,s):new jS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lr(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(Lr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return hy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hy(t){return t.op==="and"}function dy(t){return FS(t)&&hy(t)}function FS(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Qc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ur(t.value);if(dy(t))return t.filters.map(e=>Qc(e)).join(",");{const e=t.filters.map(n=>Qc(n)).join(",");return`${t.op}(${e})`}}function fy(t,e){return t instanceof Ye?function(s,r){return r instanceof Ye&&s.op===r.op&&s.field.isEqual(r.field)&&bn(s.value,r.value)}(t,e):t instanceof un?function(s,r){return r instanceof un&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&fy(o,r.filters[l]),!0):!1}(t,e):void fe()}function py(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ur(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(py).join(" ,")+"}"}(t):"Filter"}class $S extends Ye{constructor(e,n,s){super(e,n,s),this.key=ae.fromName(s.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class BS extends Ye{constructor(e,n){super(e,"in",n),this.keys=my("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jS extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=my("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function my(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ae.fromName(s.referenceValue))}class qS extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ku(n)&&Xi(n.arrayValue,this.value)}}class HS extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class WS extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xi(this.value.arrayValue,n)}}class zS extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Xi(this.value.arrayValue,s))}}/**
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
 */class KS{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function fp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new KS(t,e,n,s,r,i,o)}function Gu(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),_l(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ur(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ur(s)).join(",")),e.ue=n}return e.ue}function Qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!US(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dp(t.startAt,e.startAt)&&dp(t.endAt,e.endAt)}function Yc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zr{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GS(t,e,n,s,r,i,o,l){return new zr(t,e,n,s,r,i,o,l)}function Yu(t){return new zr(t)}function pp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gy(t){return t.collectionGroup!==null}function ki(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Zi(i,s))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Zi(ut.keyField(),s))}return e.ce}function Tn(t){const e=me(t);return e.le||(e.le=QS(e,ki(t))),e.le}function QS(t,e){if(t.limitType==="F")return fp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Zi(r.field,i)});const n=t.endAt?new Va(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Va(t.startAt.position,t.startAt.inclusive):null;return fp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Jc(t,e){const n=t.filters.concat([e]);return new zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yl(t,e){return Qu(Tn(t),Tn(e))&&t.limitType===e.limitType}function _y(t){return`${Gu(Tn(t))}|lt:${t.limitType}`}function fr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>py(r)).join(", ")}]`),_l(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Ur(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Ur(r)).join(",")),`Target(${s})`}(Tn(t))}; limitType=${t.limitType})`}function vl(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ae.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of ki(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=hp(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,ki(s),r)||s.endAt&&!function(o,l,c){const u=hp(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,ki(s),r))}(t,e)}function YS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yy(t){return(e,n)=>{let s=!1;for(const r of ki(t)){const i=JS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function JS(t,e,n){const s=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Lr(c,u):fe()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe()}}/**
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
 */class Kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ay(this.inner)}size(){return this.innerSize}}/**
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
 */const XS=new He(ae.comparator);function Gn(){return XS}const vy=new He(ae.comparator);function _i(...t){let e=vy;for(const n of t)e=e.insert(n.key,n);return e}function Ey(t){let e=vy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Us(){return Oi()}function Ty(){return Oi()}function Oi(){return new Kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZS=new He(ae.comparator),eC=new ht(ae.comparator);function ve(...t){let e=eC;for(const n of t)e=e.add(n);return e}const tC=new ht(Pe);function nC(){return tC}/**
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
 */function Ju(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function wy(t){return{integerValue:""+t}}function sC(t,e){return DS(e)?wy(e):Ju(t,e)}/**
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
 */class El{constructor(){this._=void 0}}function rC(t,e,n){return t instanceof Ma?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wu(i)&&(i=zu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof eo?by(t,e):t instanceof to?Ay(t,e):function(r,i){const o=Iy(r,i),l=mp(o)+mp(r.Pe);return Gc(o)&&Gc(r.Pe)?wy(l):Ju(r.serializer,l)}(t,e)}function iC(t,e,n){return t instanceof eo?by(t,e):t instanceof to?Ay(t,e):n}function Iy(t,e){return t instanceof xa?function(s){return Gc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ma extends El{}class eo extends El{constructor(e){super(),this.elements=e}}function by(t,e){const n=Ry(e);for(const s of t.elements)n.some(r=>bn(r,s))||n.push(s);return{arrayValue:{values:n}}}class to extends El{constructor(e){super(),this.elements=e}}function Ay(t,e){let n=Ry(e);for(const s of t.elements)n=n.filter(r=>!bn(r,s));return{arrayValue:{values:n}}}class xa extends El{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mp(t){return Ke(t.integerValue||t.doubleValue)}function Ry(t){return Ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof eo&&r instanceof eo||s instanceof to&&r instanceof to?xr(s.elements,r.elements,bn):s instanceof xa&&r instanceof xa?bn(s.Pe,r.Pe):s instanceof Ma&&r instanceof Ma}(t.transform,e.transform)}class aC{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tl{}function Sy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wl(t.key,Gt.none()):new yo(t.key,t.data,Gt.none());{const n=t.data,s=Ot.empty();let r=new ht(ut.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ss(t.key,s,new Ft(r.toArray()),Gt.none())}}function lC(t,e,n){t instanceof yo?function(r,i,o){const l=r.value.clone(),c=_p(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(r,i,o){if(!ha(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=_p(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Cy(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ni(t,e,n,s){return t instanceof yo?function(i,o,l,c){if(!ha(i.precondition,o))return l;const u=i.value.clone(),d=yp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,o,l,c){if(!ha(i.precondition,o))return l;const u=yp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Cy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(i,o,l){return ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Iy(s.transform,r||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(s.field,i))}return n||null}function gp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&xr(s,r,(i,o)=>oC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yo extends Tl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ss extends Tl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function _p(t,e,n){const s=new Map;Ne(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,iC(o,l,n[r]))}return s}function yp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,rC(i,o,e))}return s}class wl extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends Tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&lC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ni(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ni(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ty();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Sy(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(n,s)=>gp(n,s))&&xr(this.baseMutations,e.baseMutations,(n,s)=>gp(n,s))}}class Xu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ne(e.mutations.length===s.length);let r=function(){return ZS}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Xu(e,n,s,r)}}/**
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
 */class dC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Ie;function pC(t){switch(t){default:return fe();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Py(t){if(t===void 0)return Kn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Qe.OK:return L.OK;case Qe.CANCELLED:return L.CANCELLED;case Qe.UNKNOWN:return L.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return L.INTERNAL;case Qe.UNAVAILABLE:return L.UNAVAILABLE;case Qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Qe.NOT_FOUND:return L.NOT_FOUND;case Qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Qe.ABORTED:return L.ABORTED;case Qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Qe.DATA_LOSS:return L.DATA_LOSS;default:return fe()}}(Ie=Qe||(Qe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mC(){return new TextEncoder}/**
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
 */const gC=new js([4294967295,4294967295],0);function vp(t){const e=mC().encode(t),n=new Z_;return n.update(e),new Uint8Array(n.digest())}function Ep(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new js([n,s],0),new js([r,i],0)]}class Zu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(s<0)throw new yi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=js.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(js.fromNumber(s)));return r.compare(gC)===1&&(r=new js([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vp(e),[s,r]=Ep(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zu(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vp(e),[s,r]=Ep(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Il{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Il(pe.min(),r,new He(Pe),Gn(),ve())}}class vo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new vo(s,n,ve(),ve(),ve())}}/**
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
 */class da{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class ky{constructor(e,n){this.targetId=e,this.me=n}}class Oy{constructor(e,n,s=dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Tp{constructor(){this.fe=0,this.ge=Ip(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),s=ve();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:fe()}}),new vo(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Ip()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _C{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=wp(),this.Qe=new He(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Yc(i))if(s===0){const o=new ae(i.path);this.Ue(n,o,Et.newNoDocument(o,pe.min()))}else Ne(s===1);else{const o=this.Ye(n);if(o!==s){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof ly)return Mr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Zu(o,r,i)}catch(c){return Mr(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Yc(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Et.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Il(e,n,this.Qe,this.ke,s);return this.ke=Gn(),this.qe=wp(),this.Qe=new He(Pe),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Tp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Tp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wp(){return new He(ae.comparator)}function Ip(){return new He(ae.comparator)}const yC={asc:"ASCENDING",desc:"DESCENDING"},vC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EC={and:"AND",or:"OR"};class TC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zc(t,e){return t.useProto3Json||_l(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ny(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wC(t,e){return La(t,e.toTimestamp())}function wn(t){return Ne(!!t),pe.fromTimestamp(function(n){const s=bs(n);return new Ze(s.seconds,s.nanos)}(t))}function eh(t,e){return eu(t,e).canonicalString()}function eu(t,e){const n=function(r){return new Fe(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dy(t){const e=Fe.fromString(t);return Ne(Uy(e)),e}function tu(t,e){return eh(t.databaseId,e.path)}function fc(t,e){const n=Dy(e);if(n.get(1)!==t.databaseId.projectId)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(My(n))}function Vy(t,e){return eh(t.databaseId,e)}function IC(t){const e=Dy(t);return e.length===4?Fe.emptyPath():My(e)}function nu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function My(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bp(t,e,n){return{name:tu(t,e),fields:n.value.mapValue.fields}}function bC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?L.UNKNOWN:Py(u.code);return new te(d,u.message||"")}(o);n=new Oy(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=fc(t,s.document.name),i=wn(s.document.updateTime),o=s.document.createTime?wn(s.document.createTime):pe.min(),l=new Ot({mapValue:{fields:s.document.fields}}),c=Et.newFoundDocument(r,i,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new da(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=fc(t,s.document),i=s.readTime?wn(s.readTime):pe.min(),o=Et.newNoDocument(r,i),l=s.removedTargetIds||[];n=new da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=fc(t,s.document),i=s.removedTargetIds||[];n=new da([],i,r,null)}else{if(!("filter"in e))return fe();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new fC(r,i),l=s.targetId;n=new ky(l,o)}}return n}function AC(t,e){let n;if(e instanceof yo)n={update:bp(t,e.key,e.value)};else if(e instanceof wl)n={delete:tu(t,e.key)};else if(e instanceof Ss)n={update:bp(t,e.key,e.data),updateMask:VC(e.fieldMask)};else{if(!(e instanceof uC))return fe();n={verify:tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof to)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw fe()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:wC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function RC(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?wn(r.updateTime):wn(i);return o.isEqual(pe.min())&&(o=wn(i)),new aC(o,r.transformResults||[])}(n,e))):[]}function SC(t,e){return{documents:[Vy(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Vy(t,r);const i=function(u){if(u.length!==0)return Ly(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:pr(g.field),direction:OC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:r}}function PC(t){let e=IC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ne(s===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=xy(p);return g instanceof un&&dy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new Zi(mr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,_l(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Va(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new Va(E,g)}(n.endAt)),GS(e,r,o,i,l,"F",c,u)}function kC(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=mr(n.unaryFilter.field);return Ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=mr(n.unaryFilter.field);return Ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(mr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(s=>xy(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function OC(t){return yC[t]}function NC(t){return vC[t]}function DC(t){return EC[t]}function pr(t){return{fieldPath:t.canonicalString()}}function mr(t){return ut.fromServerFormat(t.fieldPath)}function Ly(t){return t instanceof Ye?function(n){if(n.op==="=="){if(up(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NAN"}};if(cp(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(up(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NAN"}};if(cp(n.value))return{unaryFilter:{field:pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(n.field),op:NC(n.op),value:n.value}}}(t):t instanceof un?function(n){const s=n.getFilters().map(r=>Ly(r));return s.length===1?s[0]:{compositeFilter:{op:DC(n.op),filters:s}}}(t):fe()}function VC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ps{constructor(e,n,s,r,i=pe.min(),o=pe.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ps(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MC{constructor(e){this.ct=e}}function xC(t){const e=PC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
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
 */class LC{constructor(){this.un=new UC}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Is.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Is.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class UC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ht(Fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ht(Fe.comparator)).toArray()}}/**
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
 */class FC{constructor(){this.changes=new Kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ni(s.mutation,r,Ft.empty(),Ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ve()){const r=Us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=_i();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ve()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Gn();const o=Oi(),l=function(){return Oi()}();return n.forEach((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof Ss)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ni(d.mutation,u,d.mutation.getFieldMask(),Ze.now())):o.set(u.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new $C(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Oi();let r=new He((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||Ft.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(r.get(l.batchId)||ve()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Ty();d.forEach(g=>{if(!i.has(g)){const E=Sy(n.get(g),s.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):j.resolve(Us());let l=-1,c=i;return o.next(u=>j.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(d=>({batchId:l,changes:Ey(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(s=>{let r=_i();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,g){return new zr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let l=_i();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ni(d.mutation,u,Ft.empty(),Ze.now()),vl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class jC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:wn(r.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:xC(r.bundledQuery),readTime:wn(r.readTime)}}(n)),j.resolve()}}/**
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
 */class qC{constructor(){this.overlays=new He(ae.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Us();return j.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const r=Us(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return j.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new He((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=Us(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Us(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=r)););return j.resolve(l)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dC(n,s));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
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
 */class HC{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class th{constructor(){this.Tr=new ht(tt.Er),this.dr=new ht(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new tt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new ae(new Fe([])),s=new tt(n,e),r=new tt(n,e+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new Fe([])),s=new tt(n,e),r=new tt(n,e+1);let i=ve();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||Pe(e.wr,n.wr)}static Ar(e,n){return Pe(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
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
 */class WC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(tt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hC(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),r=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(Pe);return n.forEach(r=>{const i=new tt(r,0),o=new tt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{s=s.add(l.wr)})}),j.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ae.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ae(i),0);let l=new ht(Pe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return j.forEach(n.mutations,r=>{const i=new tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new tt(n,0),r=this.br.firstAfterOrEqual(s);return j.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zC{constructor(e){this.Mr=e,this.docs=function(){return new He(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let s=Gn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Et.newInvalidDocument(r))}),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Gn();const o=n.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PS(CS(d),s)<=0||(r.has(d.key)||vl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,s,r){fe()}Or(e,n){return j.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new KC(this)}getSize(e){return j.resolve(this.size)}}class KC extends FC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class GC{constructor(e){this.persistence=e,this.Nr=new Kr(n=>Gu(n),Qu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new th,this.targetCount=0,this.kr=Fr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),j.waitFor(i).next(()=>r)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class QC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hu(0),this.Kr=!1,this.Kr=!0,this.$r=new HC,this.referenceDelegate=e(this),this.Ur=new GC(this),this.indexManager=new LC,this.remoteDocumentCache=function(r){return new zC(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new MC(n),this.Gr=new jC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new WC(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const r=new YC(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class YC extends OS{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Jr=new th,this.Yr=null}static Zr(e){return new nh(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,s=>{const r=ae.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class sh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=ve(),r=ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sh(e,n.fromCache,s,r)}}/**
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
 */class JC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return B0()?8:NS(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JC;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(hi()<=Ee.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(hi()<=Ee.DEBUG&&se("QueryEngine","Query:",fr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(hi()<=Ee.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):j.resolve())}Yi(e,n){if(pp(n))return j.resolve(null);let s=Tn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Xc(n,null,"F"),s=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Xc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,r){return pp(n)||r.isEqual(pe.min())?j.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const o=this.ts(n,i);return this.ns(n,o,s,r)?j.resolve(null):(hi()<=Ee.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fr(n)),this.rs(e,o,n,SS(r,-1)).next(l=>l))})}ts(e,n){let s=new ht(yy(e));return n.forEach((r,i)=>{vl(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return hi()<=Ee.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",fr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Is.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ZC{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new He(Pe),this._s=new Kr(i=>Gu(i),Qu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eP(t,e,n,s){return new ZC(t,e,n,s)}async function Fy(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=ve();for(const u of r){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function tP(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let E=j.resolve();return g.forEach(C=>{E=E.next(()=>d.getEntry(c,C)).next(O=>{const N=u.docVersions.get(C);Ne(N!==null),O.version.compareTo(N)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function $y(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nP(t,e){const n=me(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=r.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,s)),r=r.insert(p,E),function(O,N,B){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,E,d)&&l.push(n.Ur.updateTargetData(i,E))});let c=Gn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(sP(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!s.isEqual(pe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=r,i))}function sP(t,e,n){let s=ve(),r=ve();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Gn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function rP(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function iP(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,j.resolve(r)):n.Ur.allocateTargetId(s).next(o=>(r=new ps(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function su(t,e,n){const s=me(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!_o(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function Ap(t,e,n){const s=me(t);let r=pe.min(),i=ve();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=me(c),g=p._s.get(d);return g!==void 0?j.resolve(p.os.get(g)):p.Ur.getTargetData(u,d)}(s,o,Tn(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?r:pe.min(),n?i:ve())).next(l=>(oP(s,YS(e),l),{documents:l,Ts:i})))}function oP(t,e,n){let s=t.us.get(e)||pe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class Rp{constructor(){this.activeTargetIds=nC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.so=new Rp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lP{_o(e){}shutdown(){}}/**
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
 */class Sp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ko=null;function pc(){return Ko===null?Ko=function(){return 268435456+Math.round(2147483648*Math.random())}():Ko++,"0x"+Ko.toString(16)}/**
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
 */const cP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class hP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,o){const l=pc(),c=this.xo(n,s.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,r).then(d=>(se("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Mr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(n,s,r,i,o,l){return this.Mo(n,s,r,i,o)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}xo(n,s){const r=cP[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=pc();return new Promise((o,l)=>{const c=new ey;c.setWithCredentials(!0),c.listenOnce(ty.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ca.NO_ERROR:const d=c.getResponseJson();se(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ca.TIMEOUT:se(gt,`RPC '${e}' ${i} timed out`),l(new te(L.DEADLINE_EXCEEDED,"Request time out"));break;case ca.HTTP_ERROR:const p=c.getStatus();if(se(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=function(N){const B=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN}(E.status);l(new te(C,E.message))}else l(new te(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(L.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{se(gt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);se(gt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const r=pc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ry(),l=sy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=i.join("");se(gt,`Creating RPC '${e}' stream ${r}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,E=!1;const C=new uP({Io:N=>{E?se(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(g||(se(gt,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),se(gt,`RPC '${e}' stream ${r} sending:`,N),p.send(N))},To:()=>p.close()}),O=(N,B,q)=>{N.listen(B,H=>{try{q(H)}catch($){setTimeout(()=>{throw $},0)}})};return O(p,gi.EventType.OPEN,()=>{E||(se(gt,`RPC '${e}' stream ${r} transport opened.`),C.yo())}),O(p,gi.EventType.CLOSE,()=>{E||(E=!0,se(gt,`RPC '${e}' stream ${r} transport closed`),C.So())}),O(p,gi.EventType.ERROR,N=>{E||(E=!0,Mr(gt,`RPC '${e}' stream ${r} transport errored:`,N),C.So(new te(L.UNAVAILABLE,"The operation could not be completed")))}),O(p,gi.EventType.MESSAGE,N=>{var B;if(!E){const q=N.data[0];Ne(!!q);const H=q,$=H.error||((B=H[0])===null||B===void 0?void 0:B.error);if($){se(gt,`RPC '${e}' stream ${r} received error:`,$);const Z=$.status;let U=function(y){const A=Qe[y];if(A!==void 0)return Py(A)}(Z),T=$.message;U===void 0&&(U=L.INTERNAL,T="Unknown error status: "+Z+" with message "+$.message),E=!0,C.So(new te(U,T)),p.close()}else se(gt,`RPC '${e}' stream ${r} received:`,q),C.bo(q)}}),O(l,ny.STAT_EVENT,N=>{N.stat===zc.PROXY?se(gt,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===zc.NOPROXY&&se(gt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function mc(){return typeof document<"u"?document:null}/**
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
 */function bl(t){return new TC(t,!0)}/**
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
 */class By{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&se("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jy{constructor(e,n,s,r,i,o,l,c){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new By(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new te(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dP extends jy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=bC(this.serializer,e),s=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?wn(o.readTime):pe.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=nu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Yc(c)?{documents:SC(i,c)}:{query:CC(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ny(i,o.resumeToken);const u=Zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=La(i,o.snapshotVersion.toTimestamp());const u=Zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=kC(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=nu(this.serializer),n.removeTarget=e,this.a_(n)}}class fP extends jy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RC(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=nu(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>AC(this.serializer,s))};this.a_(n)}}/**
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
 */class pP extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,eu(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(L.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,eu(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kn(n),this.D_=!1):se("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{nr(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.L_.add(4),await Eo(u),u.q_.set("Unknown"),u.L_.delete(4),await Al(u)}(this))})}),this.q_=new mP(s,r)}}async function Al(t){if(nr(t))for(const e of t.B_)await e(!0)}async function Eo(t){for(const e of t.B_)await e(!1)}function qy(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ah(n)?oh(n):Gr(n).r_()&&ih(n,e))}function rh(t,e){const n=me(t),s=Gr(n);n.N_.delete(e),s.r_()&&Hy(n,e),n.N_.size===0&&(s.r_()?s.o_():nr(n)&&n.q_.set("Unknown"))}function ih(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gr(t).A_(e)}function Hy(t,e){t.Q_.xe(e),Gr(t).R_(e)}function oh(t){t.Q_=new _C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gr(t).start(),t.q_.v_()}function ah(t){return nr(t)&&!Gr(t).n_()&&t.N_.size>0}function nr(t){return me(t).L_.size===0}function Wy(t){t.Q_=void 0}async function _P(t){t.q_.set("Online")}async function yP(t){t.N_.forEach((e,n)=>{ih(t,e)})}async function vP(t,e){Wy(t),ah(t)?(t.q_.M_(e),oh(t)):t.q_.set("Unknown")}async function EP(t,e,n){if(t.q_.set("Online"),e instanceof Oy&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(t,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ua(t,s)}else if(e instanceof da?t.Q_.Ke(e):e instanceof ky?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const s=await $y(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),Hy(i,c);const p=new ps(d.target,c,u,d.sequenceNumber);ih(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await Ua(t,s)}}async function Ua(t,e,n){if(!_o(e))throw e;t.L_.add(1),await Eo(t),t.q_.set("Offline"),n||(n=()=>$y(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Al(t)})}function zy(t,e){return e().catch(n=>Ua(t,n,e))}async function Rl(t){const e=me(t),n=As(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;TP(e);)try{const r=await rP(e.localStore,s);if(r===null){e.O_.length===0&&n.o_();break}s=r.batchId,wP(e,r)}catch(r){await Ua(e,r)}Ky(e)&&Gy(e)}function TP(t){return nr(t)&&t.O_.length<10}function wP(t,e){t.O_.push(e);const n=As(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ky(t){return nr(t)&&!As(t).n_()&&t.O_.length>0}function Gy(t){As(t).start()}async function IP(t){As(t).p_()}async function bP(t){const e=As(t);for(const n of t.O_)e.m_(n.mutations)}async function AP(t,e,n){const s=t.O_.shift(),r=Xu.from(s,e,n);await zy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Rl(t)}async function RP(t,e){e&&As(t).V_&&await async function(s,r){if(function(o){return pC(o)&&o!==L.ABORTED}(r.code)){const i=s.O_.shift();As(s).s_(),await zy(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Rl(s)}}(t,e),Ky(t)&&Gy(t)}async function Cp(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=nr(n);n.L_.add(3),await Eo(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Al(n)}async function SP(t,e){const n=me(t);e?(n.L_.delete(2),await Al(n)):e||(n.L_.add(2),await Eo(n),n.q_.set("Unknown"))}function Gr(t){return t.K_||(t.K_=function(n,s,r){const i=me(n);return i.w_(),new dP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:_P.bind(null,t),Ro:yP.bind(null,t),mo:vP.bind(null,t),d_:EP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ah(t)?oh(t):t.q_.set("Unknown")):(await t.K_.stop(),Wy(t))})),t.K_}function As(t){return t.U_||(t.U_=function(n,s,r){const i=me(n);return i.w_(),new fP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IP.bind(null,t),mo:RP.bind(null,t),f_:bP.bind(null,t),g_:AP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Rl(t)):(await t.U_.stop(),t.O_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class lh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new lh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),_o(t))return new te(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ae.comparator(n.key,s.key):(n,s)=>ae.comparator(n.key,s.key),this.keyedMap=_i(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Pp{constructor(){this.W_=new He(ae.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class $r{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new $r(e,n,Cr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class CP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PP{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=me(n),i=r.queries;r.queries=kp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(s)})})(this,new te(L.ABORTED,"Firestore shutting down"))}}function kp(){return new Kr(t=>_y(t),yl)}async function kP(t,e){const n=me(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new CP,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=ch(o,`Initialization of query '${fr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&uh(n)}async function OP(t,e){const n=me(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function NP(t,e){const n=me(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(r)&&(s=!0);o.z_=r}}s&&uh(n)}function DP(t,e,n){const s=me(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function uh(t){t.Y_.forEach(e=>{e.next()})}var ru,Op;(Op=ru||(ru={})).ea="default",Op.Cache="cache";class VP{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $r(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ru.Cache}}/**
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
 */class Qy{constructor(e){this.key=e}}class Yy{constructor(e){this.key=e}}class MP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=yy(e),this.Ra=new Cr(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Pp,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,p)=>{const g=r.get(d),E=vl(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),O=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let N=!1;g&&E?g.data.isEqual(E.data)?C!==O&&(s.track({type:3,doc:E}),N=!0):this.ga(g,E)||(s.track({type:2,doc:E}),N=!0,(c&&this.Aa(E,c)>0||u&&this.Aa(E,u)<0)&&(l=!0)):!g&&E?(s.track({type:0,doc:E}),N=!0):g&&!E&&(s.track({type:1,doc:g}),N=!0,(c||u)&&(l=!0)),N&&(E?(o=o.add(E),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,C){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return O(E)-O(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(s),r=r!=null&&r;const l=n&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new $r(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Yy(s))}),this.da.forEach(s=>{e.has(s)||n.push(new Qy(s))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return $r.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class LP{constructor(e){this.key=e,this.va=!1}}class UP{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Kr(l=>_y(l),yl),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ae.comparator),this.Na=new Map,this.La=new th,this.Ba={},this.ka=new Map,this.qa=Fr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FP(t,e,n=!0){const s=nv(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await Jy(s,e,n,!0),r}async function $P(t,e){const n=nv(t);await Jy(n,e,!0,!1)}async function Jy(t,e,n,s){const r=await iP(t.localStore,Tn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await BP(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&qy(t.remoteStore,r),l}async function BP(t,e,n,s,r){t.Ka=(p,g,E)=>async function(O,N,B,q){let H=N.view.ma(B);H.ns&&(H=await Ap(O.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,H)));const $=q&&q.targetChanges.get(N.targetId),Z=q&&q.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(H,O.isPrimaryClient,$,Z);return Dp(O,N.targetId,U.wa),U.snapshot}(t,p,g,E);const i=await Ap(t.localStore,e,!0),o=new MP(e,i.Ts),l=o.ma(i.documents),c=vo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);Dp(t,n,u.wa);const d=new xP(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function jP(t,e,n){const s=me(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!yl(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await su(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&rh(s.remoteStore,r.targetId),iu(s,r.targetId)}).catch(go)):(iu(s,r.targetId),await su(s.localStore,r.targetId,!0))}async function qP(t,e){const n=me(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),rh(n.remoteStore,s.targetId))}async function HP(t,e,n){const s=JP(t);try{const r=await function(o,l){const c=me(o),u=Ze.now(),d=l.reduce((E,C)=>E.add(C.key),ve());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Gn(),O=ve();return c.cs.getEntries(E,d).next(N=>{C=N,C.forEach((B,q)=>{q.isValidDocument()||(O=O.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,C)).next(N=>{p=N;const B=[];for(const q of l){const H=cC(q,p.get(q.key).overlayedDocument);H!=null&&B.push(new Ss(q.key,H,cy(H.value.mapValue),Gt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,B,l)}).next(N=>{g=N;const B=N.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(E,N.batchId,B)})}).then(()=>({batchId:g.batchId,changes:Ey(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new He(Pe)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(s,r.batchId,n),await To(s,r.changes),await Rl(s.remoteStore)}catch(r){const i=ch(r,"Failed to persist write");n.reject(i)}}async function Xy(t,e){const n=me(t);try{const s=await nP(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Na.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?Ne(o.va):r.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await To(n,s,e)}catch(s){await go(s)}}function Np(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&uh(c)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WP(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let o=new He(ae.comparator);o=o.insert(i,Et.newNoDocument(i,pe.min()));const l=ve().add(i),c=new Il(pe.min(),new Map,new He(Pe),o,l);await Xy(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(e),hh(s)}else await su(s.localStore,e,!1).then(()=>iu(s,e,n)).catch(go)}async function zP(t,e){const n=me(t),s=e.batch.batchId;try{const r=await tP(n.localStore,e);ev(n,s,null),Zy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await To(n,r)}catch(r){await go(r)}}async function KP(t,e,n){const s=me(t);try{const r=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);ev(s,e,n),Zy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await To(s,r)}catch(r){await go(r)}}function Zy(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ev(t,e,n){const s=me(t);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||tv(t,s)})}function tv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(rh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),hh(t))}function Dp(t,e,n){for(const s of n)s instanceof Qy?(t.La.addReference(s.key,e),GP(t,s)):s instanceof Yy?(se("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||tv(t,s.key)):fe()}function GP(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(se("SyncEngine","New document in limbo: "+n),t.xa.add(s),hh(t))}function hh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(Fe.fromString(e)),s=t.qa.next();t.Na.set(s,new LP(n)),t.Oa=t.Oa.insert(n,s),qy(t.remoteStore,new ps(Tn(Yu(n.path)),s,"TargetPurposeLimboResolution",Hu.oe))}}async function To(t,e,n){const s=me(t),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((l,c)=>{o.push(s.Ka(c,e,n).then(u=>{var d;if((u||n)&&s.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){r.push(u);const p=sh.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,g=>j.forEach(g.$i,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>j.forEach(g.Ui,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!_o(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=d.os.get(g),C=E.snapshotVersion,O=E.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(g,O)}}}(s.localStore,i))}async function QP(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await Fy(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new te(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await To(n,s.hs)}}function YP(t,e){const n=me(t),s=n.Na.get(e);if(s&&s.va)return ve().add(s.key);{let r=ve();const i=n.Ma.get(e);if(!i)return r;for(const o of i){const l=n.Fa.get(o);r=r.unionWith(l.view.Va)}return r}}function nv(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WP.bind(null,e),e.Ca.d_=NP.bind(null,e.eventManager),e.Ca.$a=DP.bind(null,e.eventManager),e}function JP(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}class Fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eP(this.persistence,new XC,e.initialUser,this.serializer)}Ga(e){return new QC(nh.Zr,this.serializer)}Wa(e){return new aP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fa.provider={build:()=>new Fa};class ou{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Np(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QP.bind(null,this.syncEngine),await SP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PP}()}createDatastore(e){const n=bl(e.databaseInfo.databaseId),s=function(i){return new hP(i)}(e.databaseInfo);return function(i,o,l,c){return new pP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new gP(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Np(this.syncEngine,n,0),function(){return Sp.D()?new Sp:new lP}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,d){const p=new UP(r,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=me(r);se("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Eo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ou.provider={build:()=>new ou};/**
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
 */class XP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZP{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=oy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{se("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(se("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ch(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await e1(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Cp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Cp(e.remoteStore,r)),t._onlineComponents=e}async function e1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Fa)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new Fa);return t._offlineComponents}async function sv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Vp(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Vp(t,new ou))),t._onlineComponents}function t1(t){return sv(t).then(e=>e.syncEngine)}async function Mp(t){const e=await sv(t),n=e.eventManager;return n.onListen=FP.bind(null,e.syncEngine),n.onUnlisten=jP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$P.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qP.bind(null,e.syncEngine),n}/**
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
 */function rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xp=new Map;/**
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
 */function iv(t,e,n){if(!n)throw new te(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n1(t,e,n,s){if(e===!0&&s===!0)throw new te(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lp(t){if(!ae.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Up(t){if(ae.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sl(t);throw new te(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Fp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new yS;switch(s.type){case"firstParty":return new wS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=xp.get(n);s&&(se("ComponentProvider","Removing Datastore"),xp.delete(n),s.terminate())}(this),Promise.resolve()}}function s1(t,e,n,s={}){var r;const i=(t=Pr(t,Cl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=_t.MOCK_USER;else{l=p_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new te(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(u)}t._authCredentials=new vS(new iy(l,c))}}/**
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
 */class sr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class $t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Es extends sr{constructor(e,n,s){super(e,n,Yu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new ae(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function $a(t,e,...n){if(t=Ge(t),iv("collection","path",e),t instanceof Cl){const s=Fe.fromString(e,...n);return Up(s),new Es(t,null,s)}{if(!(t instanceof $t||t instanceof Es))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return Up(s),new Es(t.firestore,null,s)}}function _r(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=oy.newId()),iv("doc","path",e),t instanceof Cl){const s=Fe.fromString(e,...n);return Lp(s),new $t(t,null,new ae(s))}{if(!(t instanceof $t||t instanceof Es))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return Lp(s),new $t(t.firestore,t instanceof Es?t.converter:null,new ae(s))}}/**
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
 */class $p{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new By(this,"async_queue_retry"),this.Vu=()=>{const s=mc();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new qs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_o(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Kn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=lh.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&fe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Bp(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class no extends Cl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $p,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $p(e),this._firestoreClient=void 0,await e}}}function r1(t,e){const n=typeof t=="object"?t:Du(),s=typeof t=="string"?t:"(default)",r=dl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=h_("firestore");i&&s1(r,...i)}return r}function dh(t){if(t._terminated)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||i1(t),t._firestoreClient}function i1(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,d){return new MS(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,rv(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(dt.fromBase64String(e))}catch(n){throw new te(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Br(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fh{constructor(e){this._methodName=e}}/**
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
 */class ph{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class mh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const o1=/^__.*__$/;class a1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new yo(e,this.data,n,this.fieldTransforms)}}class ov{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function av(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class gh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.Ou(e),r}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ba(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(av(this.Cu)&&o1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||bl(e)}Qu(e,n,s,r=!1){return new gh({Cu:e,methodName:n,qu:s,path:ut.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lv(t){const e=t._freezeSettings(),n=bl(t._databaseId);return new l1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function c1(t,e,n,s,r,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,r);_h("Data must be an object, but it was:",o,s);const l=cv(s,o);let c,u;if(i.merge)c=new Ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=au(e,p,n);if(!o.contains(g))throw new te(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hv(d,g)||d.push(g)}c=new Ft(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new a1(new Ot(l),c,u)}class kl extends fh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kl}}function u1(t,e,n,s){const r=t.Qu(1,e,n);_h("Data must be an object, but it was:",r,s);const i=[],o=Ot.empty();tr(s,(c,u)=>{const d=yh(e,c,n);u=Ge(u);const p=r.Nu(d);if(u instanceof kl)i.push(d);else{const g=wo(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ft(i);return new ov(o,l,r.fieldTransforms)}function h1(t,e,n,s,r,i){const o=t.Qu(1,e,n),l=[au(e,s,n)],c=[r];if(i.length%2!=0)throw new te(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(au(e,i[g])),c.push(i[g+1]);const u=[],d=Ot.empty();for(let g=l.length-1;g>=0;--g)if(!hv(u,l[g])){const E=l[g];let C=c[g];C=Ge(C);const O=o.Nu(E);if(C instanceof kl)u.push(E);else{const N=wo(C,O);N!=null&&(u.push(E),d.set(E,N))}}const p=new Ft(u);return new ov(d,p,o.fieldTransforms)}function d1(t,e,n,s=!1){return wo(n,t.Qu(s?4:3,e))}function wo(t,e){if(uv(t=Ge(t)))return _h("Unsupported field value:",e,t),cv(t,e);if(t instanceof fh)return function(s,r){if(!av(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=wo(l,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Ge(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ze.fromDate(s);return{timestampValue:La(r.serializer,i)}}if(s instanceof Ze){const i=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:La(r.serializer,i)}}if(s instanceof ph)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Br)return{bytesValue:Ny(r.serializer,s._byteString)};if(s instanceof $t){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eh(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof mh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ju(l.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Sl(s)}`)}(t,e)}function cv(t,e){const n={};return ay(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,(s,r)=>{const i=wo(r,e.Mu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function uv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof ph||t instanceof Br||t instanceof $t||t instanceof fh||t instanceof mh)}function _h(t,e,n){if(!uv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Sl(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function au(t,e,n){if((e=Ge(e))instanceof Pl)return e._internalPath;if(typeof e=="string")return yh(t,e);throw Ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const f1=new RegExp("[~\\*/\\[\\]]");function yh(t,e,n){if(e.search(f1)>=0)throw Ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pl(...e.split("."))._internalPath}catch{throw Ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ba(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new te(L.INVALID_ARGUMENT,l+t+c)}function hv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p1 extends dv{data(){return super.data()}}function vh(t,e){return typeof e=="string"?yh(t,e):e instanceof Pl?e._internalPath:e._delegate._internalPath}/**
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
 */function m1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eh{}class fv extends Eh{}function ja(t,e,...n){let s=[];e instanceof Eh&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof wh).length,l=i.filter(c=>c instanceof Th).length;if(o>1||o>0&&l>0)throw new te(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Th extends fv{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Th(e,n,s)}_apply(e){const n=this._parse(e);return pv(e._query,n),new sr(e.firestore,e.converter,Jc(e._query,n))}_parse(e){const n=lv(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new te(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){qp(p,d);const E=[];for(const C of p)E.push(jp(c,i,C));g={arrayValue:{values:E}}}else g=jp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||qp(p,d),g=d1(l,o,p,d==="in"||d==="not-in");return Ye.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wh extends Eh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)pv(o,c),o=Jc(o,c)}(e._query,n),new sr(e.firestore,e.converter,Jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ih extends fv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ih(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new te(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new te(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zi(i,o)}(e._query,this._field,this._direction);return new sr(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new zr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function qa(t,e="asc"){const n=e,s=vh("orderBy",t);return Ih._create(s,n)}function jp(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new te(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gy(e)&&n.indexOf("/")!==-1)throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Fe.fromString(n));if(!ae.isDocumentKey(s))throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lp(t,new ae(s))}if(n instanceof $t)return lp(t,n._key);throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sl(n)}.`)}function qp(t,e){if(!Array.isArray(t)||t.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pv(t,e){const n=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g1{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return tr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ke(o.doubleValue));return new mh(i)}convertGeoPoint(e){return new ph(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=bs(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);Ne(Uy(s));const r=new Ji(s.get(1),s.get(3)),i=new ae(s.popFirst(5));return r.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mv extends dv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fa extends mv{data(e={}){return super.data(e)}}class y1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new vi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fa(this._firestore,this._userDataWriter,s.key,s,new vi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new vi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new vi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:v1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class gv extends g1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Hp(t){return _v(Pr(t.firestore,no),[new wl(t._key,Gt.none())])}function yr(t,...e){var n,s,r;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Bp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let c,u,d;if(t instanceof $t)u=Pr(t.firestore,no),d=Yu(t._key.path),c={next:p=>{e[o]&&e[o](E1(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Pr(t,sr);u=Pr(p.firestore,no),d=p._query;const g=new gv(u);c={next:E=>{e[o]&&e[o](new y1(u,g,p,E))},error:e[o+1],complete:e[o+2]},m1(t._query)}return function(g,E,C,O){const N=new XP(O),B=new VP(E,N,C);return g.asyncQueue.enqueueAndForget(async()=>kP(await Mp(g),B)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>OP(await Mp(g),B))}}(dh(u),d,l,c)}function _v(t,e){return function(s,r){const i=new qs;return s.asyncQueue.enqueueAndForget(async()=>HP(await t1(s),r,i)),i.promise}(dh(t),e)}function E1(t,e,n){const s=n.docs.get(e._key),r=new gv(t);return new mv(t,r,e._key,s,new vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class T1{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=lv(e)}set(e,n,s){this._verifyNotCommitted();const r=_c(e,this._firestore),i=_1(r.converter,n,s),o=c1(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,Gt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=_c(e,this._firestore);let o;return o=typeof(n=Ge(n))=="string"||n instanceof Pl?h1(this._dataReader,"WriteBatch.update",i._key,n,s,r):u1(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_c(e,this._firestore);return this._mutations=this._mutations.concat(new wl(n._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _c(t,e){if((t=Ge(t)).firestore!==e)throw new te(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function w1(t){return dh(t=Pr(t,no)),new T1(t,e=>_v(t,e))}(function(e,n=!0){(function(r){Wr=r})(Zs),zs(new ws("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new no(new ES(s.getProvider("auth-internal")),new bS(s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),yn(sp,"4.7.3",e),yn(sp,"4.7.3","esm2017")})();/**
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
 */const yv="firebasestorage.googleapis.com",I1="storageBucket",b1=2*60*1e3,A1=10*60*1e3;/**
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
 */class Sn extends Rn{constructor(e,n,s=0){super(yc(e),`Firebase Storage: ${n} (${yc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function yc(t){return"storage/"+t}function R1(){const t="An unknown error occurred, please check the error payload for server response.";return new Sn(An.UNKNOWN,t)}function S1(){return new Sn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C1(){return new Sn(An.CANCELED,"User canceled the upload/download.")}function P1(t){return new Sn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function k1(t){return new Sn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Wp(t){return new Sn(An.INVALID_ARGUMENT,t)}function vv(){return new Sn(An.APP_DELETED,"The Firebase app was deleted.")}function O1(t){return new Sn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(s.path==="")return s;throw k1(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${d}/b/${r}/o${g}`,"i"),C={bucket:1,path:3},O=n===yv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",B=new RegExp(`^https?://${O}/${r}/${N}`,"i"),H=[{regex:l,indices:c,postModify:i},{regex:E,indices:C,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<H.length;$++){const Z=H[$],U=Z.regex.exec(e);if(U){const T=U[Z.indices.bucket];let v=U[Z.indices.path];v||(v=""),s=new tn(T,v),Z.postModify(s);break}}if(s==null)throw P1(e);return s}}class N1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function D1(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...N){u||(u=!0,e.apply(null,N))}function p(N){r=setTimeout(()=>{r=null,t(E,c())},N)}function g(){i&&clearTimeout(i)}function E(N,...B){if(u){g();return}if(N){g(),d.call(null,N,...B);return}if(c()||o){g(),d.call(null,N,...B);return}s<64&&(s*=2);let H;l===1?(l=2,H=0):H=(s+Math.random())*1e3,p(H)}let C=!1;function O(N){C||(C=!0,g(),!u&&(r!==null?(N||(l=2),clearTimeout(r),p(0)):N||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function V1(t){t(!1)}/**
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
 */function M1(t){return t!==void 0}function zp(t,e,n,s){if(s<e)throw Wp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Wp(`Invalid value for '${t}'. Expected ${n} or less.`)}function x1(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Ha;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ha||(Ha={}));/**
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
 */function L1(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class U1{constructor(e,n,s,r,i,o,l,c,u,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Go(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ha.NO_ERROR,c=i.getStatus();if(!l||L1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Ha.ABORT;s(!1,new Go(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Go(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());M1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=R1();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?vv():C1();o(c)}else{const c=S1();o(c)}};this.canceled_?n(!1,new Go(!1,null,!0)):this.backoffId_=D1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Go{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function F1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function B1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function j1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function q1(t,e,n,s,r,i,o=!0){const l=x1(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return B1(u,e),F1(u,n),$1(u,i),j1(u,s),new U1(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function H1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function W1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Wa{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wa(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W1(this._location.path)}get storage(){return this._service}get parent(){const e=H1(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Wa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw O1(e)}}function Kp(t,e){const n=e==null?void 0:e[I1];return n==null?null:tn.makeFromBucketSpec(n,t)}function z1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:p_(r,t.app.options.projectId))}class K1{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=yv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b1,this._maxUploadRetryTime=A1,this._requests=new Set,r!=null?this._bucket=tn.makeFromBucketSpec(r,this._host):this._bucket=Kp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=Kp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wa(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new N1(vv());{const o=q1(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Gp="@firebase/storage",Qp="0.13.2";/**
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
 */const Ev="storage";function G1(t=Du(),e){t=Ge(t);const s=dl(t,Ev).getImmediate({identifier:e}),r=h_("storage");return r&&Q1(s,...r),s}function Q1(t,e,n,s={}){z1(t,e,n,s)}function Y1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new K1(n,s,r,e,Zs)}function J1(){zs(new ws(Ev,Y1,"PUBLIC").setMultipleInstances(!0)),yn(Gp,Qp,""),yn(Gp,Qp,"esm2017")}J1();const X1={apiKey:"AIzaSyDgxx86TgNTKdl7EwevQTK4IDTl20MEnGY",authDomain:"ninarojasmp.firebaseapp.com",projectId:"ninarojasmp",storageBucket:"ninarojasmp.appspot.com",messagingSenderId:"818909449234",appId:"1:818909449234:web:c38311031eb326e0c3dccb"},bh=__(X1),Di=gS(bh),Fs=r1(bh);G1(bh);var Qo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Z1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Je=(t,e)=>({size:n,color:s,...r},{attrs:i,slots:o})=>Ia("svg",{...Qo,width:n||Qo.width,height:n||Qo.height,stroke:s||Qo.stroke,...i,class:["lucide",`lucide-${Z1(t)}`,(i==null?void 0:i.class)||""],...r},[...e.map(l=>Ia(...l)),...o.default?[o.default()]:[]]),ek=Je("AwardIcon",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),tk=Je("BookOpenIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),nk=Je("BriefcaseIcon",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),sk=Je("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),rk=Je("FileTextIcon",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),ik=Je("HeadphonesIcon",[["path",{d:"M3 18v-6a9 9 0 0 1 18 0v6",key:"e2ovd"}],["path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",key:"110y4r"}]]),ok=Je("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Yp=Je("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ak=Je("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Jp=Je("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),lk=Je("MusicIcon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),ck=Je("PauseIcon",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),uk=Je("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),hk=Je("PlayIcon",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),Xp=Je("PlusIcon",[["line",{x1:"12",x2:"12",y1:"5",y2:"19",key:"pwfkuu"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}]]),dk=Je("RadioIcon",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M4.93 19.07a10 10 0 0 1 0-14.14",key:"r41b39"}],["path",{d:"M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95",key:"1pc8et"}],["path",{d:"M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95",key:"8dzjga"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),fk=Je("SaveIcon",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),pk=Je("SendIcon",[["line",{x1:"22",x2:"11",y1:"2",y2:"13",key:"2qtwb"}],["polygon",{points:"22 2 15 22 11 13 2 9 22 2",key:"12uapv"}]]),Zp=Je("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),mk=Je("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),gk={class:"home"},_k={class:"navbar"},yk={class:"container"},vk={class:"nav-content"},Ek={class:"nav-links"},Tk={class:"mobile-nav-links"},wk={id:"inicio",class:"hero"},Ik={class:"container"},bk={class:"hero-content"},Ak={class:"hero-actions"},Rk={class:"hero-visual"},Sk={class:"sound-wave"},Ck={id:"servicios",class:"services section-padding"},Pk={class:"container"},kk={class:"services-grid"},Ok={class:"service-icon"},Nk={key:0,class:"service-price"},Dk={key:1,class:"service-badge"},Vk={id:"portfolio",class:"portfolio section-padding"},Mk={class:"container"},xk={class:"portfolio-tabs"},Lk=["onClick"],Uk={class:"portfolio-grid"},Fk={class:"demo-header"},$k=["onClick"],Bk={class:"audio-progress"},jk=["src","onEnded"],qk={id:"contacto",class:"contact section-padding"},Hk={class:"container"},Wk={class:"contact-content"},zk={class:"contact-info"},Kk={class:"contact-item"},Gk={class:"contact-item"},Qk={class:"contact-item"},Yk={class:"contact-item"},Jk={class:"form-group"},Xk={class:"form-group"},Zk={class:"form-group full-width"},eO=["disabled"],tO={class:"footer"},nO={class:"container"},sO={class:"footer-content"},rO={class:"footer-links"},iO={class:"footer-section"},oO={class:"footer-bottom"},aO={class:"admin-link"},lO=Bt({__name:"Home",setup(t){const e=o_(),n=Xe([]),s=Xe([]),r=Xe({title:"Nina Rojas",subtitle:"Voz Profesional"}),i=Xe({email:"",phone:"",address:"",schedule:""}),o=Xe(!1),l=Xe("Todos"),c=Xe(new Set),u=Xe({name:"",email:"",message:""}),d=Xe(!1),p=kt(()=>["Todos",...new Set(s.value.map(m=>m.category))]),g=kt(()=>l.value==="Todos"?s.value:s.value.filter(w=>w.category===l.value)),E=()=>{o.value=!o.value},C=w=>{const m=document.getElementById(w);m&&m.scrollIntoView({behavior:"smooth"})},O=w=>{C(w),o.value=!1},N=w=>({Comerciales:dk,Documentales:rk,"E-learning":mk,Audiolibros:tk,Corporativo:ek,IVR:ik})[w]||Jp,B=async w=>{const m=document.querySelector(`audio[src*="${w}"]`);m&&(c.value.has(w)?(m.pause(),c.value.delete(w)):(c.value.forEach(le=>{const J=document.querySelector(`audio[src*="${le}"]`);J&&J.pause()}),c.value.clear(),m.play(),c.value.add(w)))},q=w=>c.value.has(w),H=w=>{c.value.delete(w)},$=w=>{},Z=w=>{const m=document.querySelector(`audio[src*="${w}"]`);return m&&m.duration?m.currentTime/m.duration*100:0},U=async()=>{d.value=!0;try{await new Promise(w=>setTimeout(w,1e3)),e.success("Mensaje enviado exitosamente. Te contactaré pronto."),u.value={name:"",email:"",message:""}}catch{e.error("Error al enviar el mensaje. Inténtalo de nuevo.")}finally{d.value=!1}};let T=null,v=null,y=null,A=null;const R=()=>{const w=ja($a(Fs,"services"),qa("title"));T=yr(w,le=>{n.value=le.docs.map(J=>({id:J.id,...J.data()}))},le=>{console.error("Error al cargar servicios:",le)});const m=ja($a(Fs,"portfolio"),qa("title"));v=yr(m,le=>{s.value=le.docs.map(J=>({id:J.id,...J.data()}))},le=>{console.error("Error al cargar el portfolio:",le)}),y=yr(_r(Fs,"content","hero"),le=>{le.exists()&&(r.value={id:le.id,...le.data()})},le=>{console.error("Error en suscripción a hero:",le)}),A=yr(_r(Fs,"content","contact"),le=>{le.exists()&&(i.value={id:le.id,...le.data()})},le=>{console.error("Error en suscripción a contacto:",le)})};return oo(()=>{R()}),nl(()=>{T&&T(),v&&v(),y&&y(),A&&A()}),(w,m)=>{const le=gs("router-link");return he(),be("div",gk,[S("nav",_k,[S("div",yk,[S("div",vk,[m[19]||(m[19]=na('<div class="logo" data-v-e81f3d44><div class="logo-image" data-v-e81f3d44><img src="'+ic+'" alt="Nina Rojas Logo" class="logo-img" data-v-e81f3d44></div><div class="logo-text-container" data-v-e81f3d44><span class="logo-text" data-v-e81f3d44>Nina Rojas</span><span class="logo-subtitle" data-v-e81f3d44>Voz Profesional</span></div></div>',1)),S("div",Ek,[S("a",{href:"#inicio",onClick:m[0]||(m[0]=J=>C("inicio"))},"Inicio"),S("a",{href:"#servicios",onClick:m[1]||(m[1]=J=>C("servicios"))},"Servicios"),S("a",{href:"#portfolio",onClick:m[2]||(m[2]=J=>C("portfolio"))},"Portfolio"),S("a",{href:"#contacto",onClick:m[3]||(m[3]=J=>C("contacto"))},"Contacto")]),S("button",{class:"menu-toggle",onClick:E},m[18]||(m[18]=[S("span",null,null,-1),S("span",null,null,-1),S("span",null,null,-1)]))])])]),S("div",{class:on(["mobile-menu",{active:o.value}])},[S("div",Tk,[S("a",{href:"#inicio",onClick:m[4]||(m[4]=J=>O("inicio"))},"Inicio"),S("a",{href:"#servicios",onClick:m[5]||(m[5]=J=>O("servicios"))},"Servicios"),S("a",{href:"#portfolio",onClick:m[6]||(m[6]=J=>O("portfolio"))},"Portfolio"),S("a",{href:"#contacto",onClick:m[7]||(m[7]=J=>O("contacto"))},"Contacto")])],2),S("section",wk,[m[23]||(m[23]=S("div",{class:"hero-background"},null,-1)),S("div",Ik,[S("div",bk,[m[22]||(m[22]=na('<div class="hero-logo" data-v-e81f3d44><img src="'+ic+'" alt="Nina Rojas Logo" class="hero-logo-img" data-v-e81f3d44></div><h1 class="hero-title" data-v-e81f3d44><span class="highlight" data-v-e81f3d44>Nina Rojas</span><span class="subtitle" data-v-e81f3d44>Locutora Profesional</span></h1><p class="hero-description" data-v-e81f3d44> NR Max publicidad el arte de comunicar a un solo click. </p><div class="hero-stats" data-v-e81f3d44><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>500+</span><span class="stat-label" data-v-e81f3d44>Proyectos</span></div><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>5</span><span class="stat-label" data-v-e81f3d44>Años</span></div><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>100%</span><span class="stat-label" data-v-e81f3d44>Satisfacción</span></div></div>',4)),S("div",Ak,[S("a",{href:"#portfolio",onClick:m[8]||(m[8]=J=>C("portfolio")),class:"btn btn-primary"},[Ae($e(Jp),{class:"btn-icon"}),m[20]||(m[20]=yt(" Escuchar "))]),S("a",{href:"#contacto",onClick:m[9]||(m[9]=J=>C("contacto")),class:"btn btn-secondary"},[Ae($e(Yp),{class:"btn-icon"}),m[21]||(m[21]=yt(" Contactar "))])])]),S("div",Rk,[S("div",Sk,[(he(),be(Be,null,Mn(5,J=>S("div",{class:"wave",key:J,style:Hs({animationDelay:J*.1+"s"})},null,4)),64))])])])]),S("section",Ck,[S("div",Pk,[m[24]||(m[24]=S("div",{class:"section-header"},[S("h2",{class:"section-title"},"Servicios"),S("div",{class:"section-divider"}),S("p",{class:"section-subtitle"},"Soluciones profesionales de voz para cada necesidad")],-1)),S("div",kk,[(he(!0),be(Be,null,Mn(n.value,J=>(he(),be("div",{class:"service-card",key:J.id},[S("div",Ok,[(he(),St(ao(N(J.title))))]),S("h3",null,zt(J.title),1),S("p",null,zt(J.description),1),J.price?(he(),be("div",Nk,zt(J.price),1)):Bs("",!0),J.featured?(he(),be("div",Dk,"Más Solicitado")):Bs("",!0)]))),128))])])]),S("section",Vk,[S("div",Mk,[m[25]||(m[25]=S("div",{class:"section-header"},[S("h2",{class:"section-title"},"Portfolio"),S("div",{class:"section-divider"}),S("p",{class:"section-subtitle"},"Escucha algunos de mis trabajos más destacados")],-1)),S("div",xk,[(he(!0),be(Be,null,Mn(p.value,J=>(he(),be("button",{key:J,onClick:De=>l.value=J,class:on([{active:l.value===J},"tab-button"])},zt(J),11,Lk))),128))]),S("div",Uk,[(he(!0),be(Be,null,Mn(g.value,J=>(he(),be("div",{key:J.id,class:"demo-card"},[S("div",Fk,[S("h4",null,zt(J.title),1),S("button",{onClick:De=>B(J.id),class:"play-button"},[q(J.id)?(he(),St($e(ck),{key:1})):(he(),St($e(hk),{key:0}))],8,$k)]),S("p",null,zt(J.description),1),S("div",Bk,[S("div",{class:"progress-bar",style:Hs({width:Z(J.id)+"%"})},null,4)]),S("audio",{ref_for:!0,ref:"audio-"+J.id,src:J.audioUrl,onTimeupdate:m[10]||(m[10]=De=>$()),onEnded:De=>H(J.id)},null,40,jk)]))),128))])])]),S("section",qk,[S("div",Hk,[m[34]||(m[34]=S("div",{class:"section-header"},[S("h2",{class:"section-title"},"Contacto"),S("div",{class:"section-divider"}),S("p",{class:"section-subtitle"},"¿Tienes un proyecto en mente? Hablemos")],-1)),S("div",Wk,[S("div",zk,[m[30]||(m[30]=S("h3",null,"Información de Contacto",-1)),S("div",Kk,[Ae($e(Yp),{class:"contact-icon"}),m[26]||(m[26]=S("div",null,[S("span",{class:"contact-label"},"Email"),S("span",{class:"contact-value"},"ninaymarco3@gmail.com")],-1))]),S("div",Gk,[Ae($e(uk),{class:"contact-icon"}),m[27]||(m[27]=S("div",null,[S("span",{class:"contact-label"},"Teléfono"),S("span",{class:"contact-value"},"+57 310 6035384")],-1))]),S("div",Qk,[Ae($e(ak),{class:"contact-icon"}),m[28]||(m[28]=S("div",null,[S("span",{class:"contact-label"},"Ubicación"),S("span",{class:"contact-value"},"Colombia")],-1))]),S("div",Yk,[Ae($e(sk),{class:"contact-icon"}),m[29]||(m[29]=S("div",null,[S("span",{class:"contact-label"},"Horario"),S("span",{class:"contact-value"},"Lun - Vie: 9:00 AM - 6:00 PM")],-1))])]),S("form",{onSubmit:Su(U,["prevent"]),class:"contact-form"},[S("div",Jk,[m[31]||(m[31]=S("label",{for:"name"},"Nombre *",-1)),Mt(S("input",{type:"text",id:"name","onUpdate:modelValue":m[11]||(m[11]=J=>u.value.name=J),required:""},null,512),[[Xt,u.value.name]])]),S("div",Xk,[m[32]||(m[32]=S("label",{for:"email"},"Email *",-1)),Mt(S("input",{type:"email",id:"email","onUpdate:modelValue":m[12]||(m[12]=J=>u.value.email=J),required:""},null,512),[[Xt,u.value.email]])]),S("div",Zk,[m[33]||(m[33]=S("label",{for:"message"},"Mensaje *",-1)),Mt(S("textarea",{id:"message","onUpdate:modelValue":m[13]||(m[13]=J=>u.value.message=J),rows:"5",required:""},null,512),[[Xt,u.value.message]])]),S("button",{type:"submit",class:"btn btn-primary",disabled:d.value},[Ae($e(pk),{class:"btn-icon"}),yt(" "+zt(d.value?"Enviando...":"Enviar Mensaje"),1)],8,eO)],32)])])]),S("footer",tO,[S("div",nO,[S("div",sO,[m[37]||(m[37]=na('<div class="footer-brand" data-v-e81f3d44><div class="logo" data-v-e81f3d44><div class="logo-image" data-v-e81f3d44><img src="'+ic+'" alt="Nina Rojas Logo" class="logo-img" data-v-e81f3d44></div><div class="logo-text-container" data-v-e81f3d44><span class="logo-text" data-v-e81f3d44>Nina Rojas</span><span class="logo-subtitle" data-v-e81f3d44>Voz Profesional</span></div></div><p data-v-e81f3d44>NR Max publicidad el arte de comunicar a un solo click.</p></div>',1)),S("div",rO,[S("div",iO,[m[35]||(m[35]=S("h4",null,"Navegación",-1)),S("ul",null,[S("li",null,[S("a",{href:"#inicio",onClick:m[14]||(m[14]=J=>C("inicio"))},"Inicio")]),S("li",null,[S("a",{href:"#servicios",onClick:m[15]||(m[15]=J=>C("servicios"))},"Servicios")]),S("li",null,[S("a",{href:"#portfolio",onClick:m[16]||(m[16]=J=>C("portfolio"))},"Portfolio")]),S("li",null,[S("a",{href:"#contacto",onClick:m[17]||(m[17]=J=>C("contacto"))},"Contacto")])])]),m[36]||(m[36]=S("div",{class:"footer-section"},[S("h4",null,"Contacto"),S("ul",null,[S("li",null,"ninaymarco3@gmail.com"),S("li",null,"+57 310 6035384"),S("li",null,"Colombia")])],-1))])]),S("div",oO,[m[39]||(m[39]=S("p",null,"© 2025 Nina Rojas. Todos los derechos reservados.",-1)),S("div",aO,[Ae(le,{to:"/admin/login",class:"admin-link-text"},{default:Xs(()=>m[38]||(m[38]=[yt("Admin")])),_:1,__:[38]})])])])])])}}}),Ah=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},cO=Ah(lO,[["__scopeId","data-v-e81f3d44"]]),di=Xe(null),em=Xe(!0),Tv=()=>{const t=Pu(),e=o_(),n=kt(()=>!!di.value);return{user:di,loading:em,isAuthenticated:n,login:async(o,l)=>{try{const c=await tR(Di,o,l);di.value=c.user,e.success("Inicio de sesión exitoso"),t.push("/admin")}catch(c){throw e.error("Error al iniciar sesión: "+c.message),c}},logout:async()=>{try{await iR(Di),di.value=null,e.success("Sesión cerrada"),t.push("/")}catch(o){e.error("Error al cerrar sesión: "+o.message)}},initAuth:()=>{rR(Di,o=>{di.value=o,em.value=!1})}}},uO={class:"admin-panel"},hO={class:"admin-header"},dO={class:"container"},fO={class:"header-content"},pO={class:"header-actions"},mO=["disabled"],gO={class:"admin-content"},_O={class:"container"},yO={class:"admin-tabs"},vO=["onClick"],EO={key:0,class:"admin-section"},TO={class:"section-header"},wO={class:"services-list"},IO={class:"service-editor"},bO={class:"form-row"},AO={class:"form-group"},RO=["onUpdate:modelValue"],SO={class:"form-group"},CO=["onUpdate:modelValue"],PO={class:"form-group"},kO=["onUpdate:modelValue"],OO={class:"form-row"},NO={class:"checkbox-group"},DO=["id","onUpdate:modelValue"],VO=["for"],MO=["onClick"],xO={key:1,class:"admin-section"},LO={class:"section-header"},UO={class:"demos-list"},FO={class:"demo-editor"},$O={class:"form-row"},BO={class:"form-group"},jO=["onUpdate:modelValue"],qO={class:"form-group"},HO=["onUpdate:modelValue"],WO={class:"form-group"},zO=["onUpdate:modelValue"],KO={class:"form-row"},GO={class:"form-group"},QO=["onUpdate:modelValue"],YO=["onClick"],JO=Bt({__name:"Admin",setup(t){const{logout:e,isAuthenticated:n,initAuth:s}=Tv(),r=Pu(),i=$a(Fs,"services"),o=$a(Fs,"portfolio");let l,c;const u=Xe("hero"),d=Xe(!1),p=[{id:"services",label:"Servicios",icon:nk},{id:"portfolio",label:"Portfolio",icon:lk}],g=Xe([]),E=Xe([]),C=()=>{const Z={id:Date.now().toString(),title:"",description:"",price:"",featured:!1};g.value.push(Z)},O=async Z=>{const U=g.value[Z];try{await Hp(_r(i,U.id)),g.value.splice(Z,1)}catch(T){console.error("Error al eliminar el servicio:",T)}},N=()=>{const Z={id:Date.now().toString(),title:"",description:"",audioUrl:"",category:""};E.value.push(Z)},B=async Z=>{const U=E.value[Z];try{await Hp(_r(o,U.id)),E.value.splice(Z,1)}catch(T){console.error("Error al eliminar el demo:",T)}},q=async()=>{d.value=!0;try{const Z=w1(Fs);g.value.forEach(U=>{const T=_r(i,U.id);Z.set(T,{title:U.title,description:U.description,price:U.price,featured:U.featured||!1},{merge:!0})}),E.value.forEach(U=>{const T=_r(o,U.id);Z.set(T,{title:U.title,description:U.description,audioUrl:U.audioUrl,category:U.category},{merge:!0})}),await Z.commit(),console.log("Cambios guardados exitosamente")}catch(Z){console.error("Error al guardar cambios:",Z)}finally{d.value=!1}},H=()=>{const Z=ja(i,qa("title"));l=yr(Z,T=>{g.value=T.docs.map(v=>({id:v.id,title:v.data().title||"",description:v.data().description||"",price:v.data().price||"",featured:v.data().featured||!1}))});const U=ja(o,qa("title"));c=yr(U,T=>{E.value=T.docs.map(v=>({id:v.id,title:v.data().title||"",description:v.data().description||"",audioUrl:v.data().audioUrl||"",category:v.data().category||""}))})},$=()=>{l&&l(),c&&c()};return oo(async()=>{await s(),n.value?H():r.push("/admin/login")}),nl(()=>{$()}),(Z,U)=>(he(),be("div",uO,[S("header",hO,[S("div",dO,[S("div",fO,[U[2]||(U[2]=S("div",{class:"admin-brand"},[S("h1",null,"Panel Administrativo"),S("span",null,"Nina Rojas - Gestión de Contenido")],-1)),S("div",pO,[S("button",{onClick:q,class:"btn btn-primary",disabled:d.value},[Ae($e(fk),{class:"btn-icon"}),yt(" "+zt(d.value?"Guardando...":"Guardar Cambios"),1)],8,mO),S("button",{onClick:U[0]||(U[0]=(...T)=>$e(e)&&$e(e)(...T)),class:"btn btn-secondary"},[Ae($e(ok),{class:"btn-icon"}),U[1]||(U[1]=yt(" Cerrar Sesión "))])])])])]),S("main",gO,[S("div",_O,[S("div",yO,[(he(),be(Be,null,Mn(p,T=>S("button",{key:T.id,onClick:v=>u.value=T.id,class:on([{active:u.value===T.id},"tab-button"])},[(he(),St(ao(T.icon),{class:"tab-icon"})),yt(" "+zt(T.label),1)],10,vO)),64))]),u.value==="services"?(he(),be("div",EO,[S("div",TO,[U[4]||(U[4]=S("h2",{class:"section-title"},"Gestión de Servicios",-1)),S("button",{onClick:C,class:"btn btn-primary"},[Ae($e(Xp),{class:"btn-icon"}),U[3]||(U[3]=yt(" Agregar Servicio "))])]),S("div",wO,[(he(!0),be(Be,null,Mn(g.value,(T,v)=>(he(),be("div",{key:T.id,class:"service-item"},[S("div",IO,[S("div",bO,[S("div",AO,[U[5]||(U[5]=S("label",null,"Título",-1)),Mt(S("input",{"onUpdate:modelValue":y=>T.title=y,type:"text"},null,8,RO),[[Xt,T.title]])]),S("div",SO,[U[6]||(U[6]=S("label",null,"Precio",-1)),Mt(S("input",{"onUpdate:modelValue":y=>T.price=y,type:"text"},null,8,CO),[[Xt,T.price]])])]),S("div",PO,[U[7]||(U[7]=S("label",null,"Descripción",-1)),Mt(S("textarea",{"onUpdate:modelValue":y=>T.description=y,rows:"3"},null,8,kO),[[Xt,T.description]])]),S("div",OO,[S("div",NO,[Mt(S("input",{type:"checkbox",id:"featured-"+T.id,"onUpdate:modelValue":y=>T.featured=y},null,8,DO),[[yw,T.featured]]),S("label",{for:"featured-"+T.id},"Servicio Destacado",8,VO)]),S("button",{onClick:y=>O(v),class:"btn btn-danger"},[Ae($e(Zp),{class:"btn-icon"}),U[8]||(U[8]=yt(" Eliminar "))],8,MO)])])]))),128))])])):Bs("",!0),u.value==="portfolio"?(he(),be("div",xO,[S("div",LO,[U[10]||(U[10]=S("h2",{class:"section-title"},"Gestión de Portfolio",-1)),S("button",{onClick:N,class:"btn btn-primary"},[Ae($e(Xp),{class:"btn-icon"}),U[9]||(U[9]=yt(" Agregar Demo "))])]),S("div",UO,[(he(!0),be(Be,null,Mn(E.value,(T,v)=>(he(),be("div",{key:T.id,class:"demo-item"},[S("div",FO,[S("div",$O,[S("div",BO,[U[11]||(U[11]=S("label",null,"Título",-1)),Mt(S("input",{"onUpdate:modelValue":y=>T.title=y,type:"text"},null,8,jO),[[Xt,T.title]])]),S("div",qO,[U[13]||(U[13]=S("label",null,"Categoría",-1)),Mt(S("select",{"onUpdate:modelValue":y=>T.category=y},U[12]||(U[12]=[na('<option value="Comerciales" data-v-8f1ce971>Comerciales</option><option value="Documentales" data-v-8f1ce971>Documentales</option><option value="E-learning" data-v-8f1ce971>E-learning</option><option value="Audiolibros" data-v-8f1ce971>Audiolibros</option><option value="Corporativo" data-v-8f1ce971>Corporativo</option>',5)]),8,HO),[[vw,T.category]])])]),S("div",WO,[U[14]||(U[14]=S("label",null,"Descripción",-1)),Mt(S("textarea",{"onUpdate:modelValue":y=>T.description=y,rows:"2"},null,8,zO),[[Xt,T.description]])]),S("div",KO,[S("div",GO,[U[15]||(U[15]=S("label",null,"URL del Audio",-1)),Mt(S("input",{"onUpdate:modelValue":y=>T.audioUrl=y,type:"url",placeholder:"https://ejemplo.com/audio.mp3"},null,8,QO),[[Xt,T.audioUrl]])]),S("button",{onClick:y=>B(v),class:"btn btn-danger"},[Ae($e(Zp),{class:"btn-icon"}),U[16]||(U[16]=yt(" Eliminar "))],8,YO)])])]))),128))])])):Bs("",!0)])])]))}}),XO=Ah(JO,[["__scopeId","data-v-8f1ce971"]]),ZO={class:"admin-login"},eN={class:"login-container"},tN={class:"login-card"},nN={class:"form-group"},sN=["disabled"],rN={class:"form-group"},iN=["disabled"],oN=["disabled"],aN={key:0},lN={key:1},cN={class:"login-footer"},uN=Bt({__name:"AdminLogin",setup(t){const{login:e,isAuthenticated:n,initAuth:s}=Tv(),r=Pu(),i=Xe(""),o=Xe(""),l=Xe(!1),c=async()=>{if(!(!i.value||!o.value)){l.value=!0;try{await e(i.value,o.value)}catch(u){console.error("Login error:",u)}finally{l.value=!1}}};return oo(()=>{s(),n.value&&r.push("/admin")}),(u,d)=>{const p=gs("router-link");return he(),be("div",ZO,[S("div",eN,[S("div",tN,[d[5]||(d[5]=S("div",{class:"login-header"},[S("h1",null,"Panel Administrativo"),S("p",null,"Nina Rojas - Administración del Sitio Web")],-1)),S("form",{onSubmit:Su(c,["prevent"]),class:"login-form"},[S("div",nN,[d[2]||(d[2]=S("label",{for:"email"},"Email",-1)),Mt(S("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=g=>i.value=g),required:"",disabled:l.value,placeholder:"Correo Electrónico"},null,8,sN),[[Xt,i.value]])]),S("div",rN,[d[3]||(d[3]=S("label",{for:"password"},"Contraseña",-1)),Mt(S("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=g=>o.value=g),required:"",disabled:l.value,placeholder:"••••••••"},null,8,iN),[[Xt,o.value]])]),S("button",{type:"submit",class:"btn btn-primary login-btn",disabled:l.value},[l.value?(he(),be("span",aN,"Iniciando sesión...")):(he(),be("span",lN,"Iniciar Sesión"))],8,oN)],32),S("div",cN,[Ae(p,{to:"/",class:"back-link"},{default:Xs(()=>d[4]||(d[4]=[yt("← Volver al sitio web")])),_:1,__:[4]})])])])])}}}),hN=Ah(uN,[["__scopeId","data-v-211e2032"]]),dN=[{path:"/",component:cO},{path:"/admin",component:XO,meta:{requiresAuth:!0}},{path:"/admin/login",component:hN}],wv=SI({history:nI(),routes:dN}),Rh=Rg(R0);Di.onAuthStateChanged(()=>{console.log("Estado de autenticación actualizado")});wv.beforeEach(async(t,e,n)=>{const s=t.matched.some(i=>i.meta.requiresAuth),r=Di.currentUser;if(t.path==="/admin/login"&&r){n("/admin");return}if(s&&!r){n("/admin/login");return}n()});Rh.use(wv);Rh.use(b0,{position:Wi.TOP_RIGHT,timeout:5e3,closeOnClick:!0,pauseOnHover:!0,filterBeforeCreate:t=>t.type==="error"?t:!1});Rh.mount("#app");const fN=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),tm=__DEFINES__;Object.keys(tm).forEach(t=>{const e=t.split(".");let n=fN;for(let s=0;s<e.length;s++){const r=e[s];s===e.length-1?n[r]=tm[t]:n=n[r]||(n[r]={})}});class pN{constructor(e){this.connection=e,this.queue=[]}send(e){this.queue.push(e),this.flush()}flush(){this.connection.isReady()&&(this.queue.forEach(e=>this.connection.send(e)),this.queue=[])}}class mN{constructor(e,n,s){this.logger=e,this.importUpdatedModule=s,this.hotModulesMap=new Map,this.disposeMap=new Map,this.pruneMap=new Map,this.dataMap=new Map,this.customListenersMap=new Map,this.ctxToListenersMap=new Map,this.updateQueue=[],this.pendingUpdateQueue=!1,this.messenger=new pN(n)}async notifyListeners(e,n){const s=this.customListenersMap.get(e);s&&await Promise.allSettled(s.map(r=>r(n)))}clear(){this.hotModulesMap.clear(),this.disposeMap.clear(),this.pruneMap.clear(),this.dataMap.clear(),this.customListenersMap.clear(),this.ctxToListenersMap.clear()}async prunePaths(e){await Promise.all(e.map(n=>{const s=this.disposeMap.get(n);if(s)return s(this.dataMap.get(n))})),e.forEach(n=>{const s=this.pruneMap.get(n);s&&s(this.dataMap.get(n))})}warnFailedUpdate(e,n){e.message.includes("fetch")||this.logger.error(e),this.logger.error(`[hmr] Failed to reload ${n}. This could be due to syntax errors or importing non-existent modules. (see errors above)`)}async queueUpdate(e){if(this.updateQueue.push(this.fetchUpdate(e)),!this.pendingUpdateQueue){this.pendingUpdateQueue=!0,await Promise.resolve(),this.pendingUpdateQueue=!1;const n=[...this.updateQueue];this.updateQueue=[],(await Promise.all(n)).forEach(s=>s&&s())}}async fetchUpdate(e){const{path:n,acceptedPath:s}=e,r=this.hotModulesMap.get(n);if(!r)return;let i;const o=n===s,l=r.callbacks.filter(({deps:c})=>c.includes(s));if(o||l.length>0){const c=this.disposeMap.get(s);c&&await c(this.dataMap.get(s));try{i=await this.importUpdatedModule(e)}catch(u){this.warnFailedUpdate(u,s)}}return()=>{for(const{deps:u,fn:d}of l)d(u.map(p=>p===s?i:void 0));const c=o?n:`${s} via ${n}`;this.logger.debug(`[vite] hot updated: ${c}`)}}}const gN=__HMR_CONFIG_NAME__,_N=__BASE__||"/";function bt(t,e={},...n){const s=document.createElement(t);for(const[r,i]of Object.entries(e))s.setAttribute(r,i);return s.append(...n),s}const yN=`
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  max-width: 80vw;
  color: var(--window-color);
  box-sizing: border-box;
  margin: 30px auto;
  padding: 2.5vh 4vw;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
`,vN=()=>bt("div",{class:"backdrop",part:"backdrop"},bt("div",{class:"window",part:"window"},bt("pre",{class:"message",part:"message"},bt("span",{class:"plugin",part:"plugin"}),bt("span",{class:"message-body",part:"message-body"})),bt("pre",{class:"file",part:"file"}),bt("pre",{class:"frame",part:"frame"}),bt("pre",{class:"stack",part:"stack"}),bt("div",{class:"tip",part:"tip"},"Click outside, press ",bt("kbd",{},"Esc")," key, or fix the code to dismiss.",bt("br"),"You can also disable this overlay by setting ",bt("code",{part:"config-option-name"},"server.hmr.overlay")," to ",bt("code",{part:"config-option-value"},"false")," in ",bt("code",{part:"config-file-name"},gN),".")),bt("style",{},yN)),nm=/(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g,vc=/^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm,{HTMLElement:EN=class{}}=globalThis;class Iv extends EN{constructor(e,n=!0){var o;super(),this.root=this.attachShadow({mode:"open"}),this.root.appendChild(vN()),vc.lastIndex=0;const s=e.frame&&vc.test(e.frame),r=s?e.message.replace(vc,""):e.message;e.plugin&&this.text(".plugin",`[plugin:${e.plugin}] `),this.text(".message-body",r.trim());const[i]=(((o=e.loc)==null?void 0:o.file)||e.id||"unknown file").split("?");e.loc?this.text(".file",`${i}:${e.loc.line}:${e.loc.column}`,n):e.id&&this.text(".file",i),s&&this.text(".frame",e.frame.trim()),this.text(".stack",e.stack,n),this.root.querySelector(".window").addEventListener("click",l=>{l.stopPropagation()}),this.addEventListener("click",()=>{this.close()}),this.closeOnEsc=l=>{(l.key==="Escape"||l.code==="Escape")&&this.close()},document.addEventListener("keydown",this.closeOnEsc)}text(e,n,s=!1){const r=this.root.querySelector(e);if(!s)r.textContent=n;else{let i=0,o;for(nm.lastIndex=0;o=nm.exec(n);){const{0:l,index:c}=o;if(c!=null){const u=n.slice(i,c);r.appendChild(document.createTextNode(u));const d=document.createElement("a");d.textContent=l,d.className="file-link",d.onclick=()=>{fetch(new URL(`${_N}__open-in-editor?file=${encodeURIComponent(l)}`,import.meta.url))},r.appendChild(d),i+=u.length+l.length}}}}close(){var e;(e=this.parentNode)==null||e.removeChild(this),document.removeEventListener("keydown",this.closeOnEsc)}}const za="vite-error-overlay",{customElements:Ec}=globalThis;Ec&&!Ec.get(za)&&Ec.define(za,Iv);console.debug("[vite] connecting...");const lu=new URL(import.meta.url),TN=__SERVER_HOST__,sm=__HMR_PROTOCOL__||(lu.protocol==="https:"?"wss":"ws"),bv=__HMR_PORT__,rm=`${__HMR_HOSTNAME__||lu.hostname}:${bv||lu.port}${__HMR_BASE__}`,im=__HMR_DIRECT_TARGET__,cu=__BASE__||"/",wN=__WS_TOKEN__;let jn;try{let t;bv||(t=()=>{jn=om(sm,im,()=>{const e=new URL(import.meta.url),n=e.host+e.pathname.replace(/@vite\/client$/,"");console.error(`[vite] failed to connect to websocket.
your current setup:
  (browser) ${n} <--[HTTP]--> ${TN} (server)
  (browser) ${rm} <--[WebSocket (failing)]--> ${im} (server)
Check out your Vite / network configuration and https://vite.dev/config/server-options.html#server-hmr .`)}),jn.addEventListener("open",()=>{console.info("[vite] Direct websocket connection fallback. Check out https://vite.dev/config/server-options.html#server-hmr to remove the previous connection error.")},{once:!0})}),jn=om(sm,rm,t)}catch(t){console.error(`[vite] failed to connect to websocket (${t}). `)}function om(t,e,n){const s=new WebSocket(`${t}://${e}?token=${wN}`,"vite-hmr");let r=!1;return s.addEventListener("open",()=>{r=!0,ls("vite:ws:connect",{webSocket:s})},{once:!0}),s.addEventListener("message",async({data:i})=>{bN(JSON.parse(i))}),s.addEventListener("close",async({wasClean:i})=>{if(!i){if(!r&&n){n();return}ls("vite:ws:disconnect",{webSocket:s}),ma&&(console.log("[vite] server connection lost. Polling for restart..."),await SN(t,e),location.reload())}}),s}function am(t){const e=new URL(t,"http://vite.dev");return e.searchParams.delete("direct"),e.pathname+e.search}let lm=!0;const cm=new WeakSet,IN=t=>{let e;return()=>{e&&(clearTimeout(e),e=null),e=setTimeout(()=>{location.reload()},t)}},uu=IN(50),pa=new mN(console,{isReady:()=>jn&&jn.readyState===1,send:t=>jn.send(t)},async function({acceptedPath:e,timestamp:n,explicitImportRequired:s,isWithinCircularImport:r}){const[i,o]=e.split("?"),l=import(cu+i.slice(1)+`?${s?"import&":""}t=${n}${o?`&${o}`:""}`);return r&&l.catch(()=>{console.info(`[hmr] ${e} failed to apply HMR as it's within a circular import. Reloading page to reset the execution order. To debug and break the circular import, you can run \`vite --debug hmr\` to log the circular dependency path if a file change triggered it.`),uu()}),await l});async function bN(t){switch(t.type){case"connected":console.debug("[vite] connected."),pa.messenger.flush(),setInterval(()=>{jn.readyState===jn.OPEN&&jn.send('{"type":"ping"}')},__HMR_TIMEOUT__);break;case"update":if(ls("vite:beforeUpdate",t),ma)if(lm&&RN()){location.reload();return}else um&&Av(),lm=!1;await Promise.all(t.updates.map(async e=>{if(e.type==="js-update")return pa.queueUpdate(e);const{path:n,timestamp:s}=e,r=am(n),i=Array.from(document.querySelectorAll("link")).find(l=>!cm.has(l)&&am(l.href).includes(r));if(!i)return;const o=`${cu}${r.slice(1)}${r.includes("?")?"&":"?"}t=${s}`;return new Promise(l=>{const c=i.cloneNode();c.href=new URL(o,i.href).href;const u=()=>{i.remove(),console.debug(`[vite] css hot updated: ${r}`),l()};c.addEventListener("load",u),c.addEventListener("error",u),cm.add(i),i.after(c)})})),ls("vite:afterUpdate",t);break;case"custom":{ls(t.event,t.data);break}case"full-reload":if(ls("vite:beforeFullReload",t),ma)if(t.path&&t.path.endsWith(".html")){const e=decodeURI(location.pathname),n=cu+t.path.slice(1);(e===n||t.path==="/index.html"||e.endsWith("/")&&e+"index.html"===n)&&uu();return}else uu();break;case"prune":ls("vite:beforePrune",t),await pa.prunePaths(t.paths);break;case"error":{if(ls("vite:error",t),ma){const e=t.err;um?AN(e):console.error(`[vite] Internal Server Error
${e.message}
${e.stack}`)}break}default:return t}}function ls(t,e){pa.notifyListeners(t,e)}const um=__HMR_ENABLE_OVERLAY__,ma="document"in globalThis;function AN(t){Av(),document.body.appendChild(new Iv(t))}function Av(){document.querySelectorAll(za).forEach(t=>t.close())}function RN(){return document.querySelectorAll(za).length}async function SN(t,e,n=1e3){const s=t==="wss"?"https":"http",r=async()=>{try{return await fetch(`${s}://${e}`,{mode:"no-cors",headers:{Accept:"text/x-vite-ping"}}),!0}catch{}return!1};if(!await r())for(await hm(n);;)if(document.visibilityState==="visible"){if(await r())break;await hm(n)}else await CN()}function hm(t){return new Promise(e=>setTimeout(e,t))}function CN(){return new Promise(t=>{const e=async()=>{document.visibilityState==="visible"&&(t(),document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)})}const PN=new Map;"document"in globalThis&&document.querySelectorAll("style[data-vite-dev-id]").forEach(t=>{PN.set(t.getAttribute("data-vite-dev-id"),t)});var dm;"document"in globalThis&&((dm=document.querySelector("meta[property=csp-nonce]"))==null||dm.nonce);
//# sourceMappingURL=index-DxPcDzCQ.js.map
