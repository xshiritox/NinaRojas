(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},gs=[],mn=()=>{},wv=()=>!1,$a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tu=t=>t.startsWith("onUpdate:"),et=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Av=Object.prototype.hasOwnProperty,Oe=(t,e)=>Av.call(t,e),oe=Array.isArray,_s=t=>eo(t)==="[object Map]",Us=t=>eo(t)==="[object Set]",ad=t=>eo(t)==="[object Date]",ge=t=>typeof t=="function",Ke=t=>typeof t=="string",rn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Hp=t=>(xe(t)||ge(t))&&ge(t.then)&&ge(t.catch),Wp=Object.prototype.toString,eo=t=>Wp.call(t),bv=t=>eo(t).slice(8,-1),Kp=t=>eo(t)==="[object Object]",ru=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rv=/-(\w)/g,Gt=ja(t=>t.replace(Rv,(e,n)=>n?n.toUpperCase():"")),Cv=/\B([A-Z])/g,Gr=ja(t=>t.replace(Cv,"-$1").toLowerCase()),qa=ja(t=>t.charAt(0).toUpperCase()+t.slice(1)),zo=ja(t=>t?`on${qa(t)}`:""),dr=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},fc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Sv=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let ld;const Ha=()=>ld||(ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $r(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?Dv(r):$r(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||xe(t))return t}const Pv=/;(?![^(]*\))/g,kv=/:([^]+)/,Ov=/\/\*[^]*?\*\//g;function Dv(t){const e={};return t.replace(Ov,"").split(Pv).forEach(n=>{if(n){const r=n.split(kv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sn(t){let e="";if(Ke(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=sn(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vv=eu(Nv);function zp(t){return!!t||t===""}function Mv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=to(t[r],e[r]);return n}function to(t,e){if(t===e)return!0;let n=ad(t),r=ad(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?Mv(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!to(t[o],e[o]))return!1}}return String(t)===String(e)}function su(t,e){return t.findIndex(n=>to(n,e))}const Gp=t=>!!(t&&t.__v_isRef===!0),Wt=t=>Ke(t)?t:t==null?"":oe(t)||xe(t)&&(t.toString===Wp||!ge(t.toString))?Gp(t)?Wt(t.value):JSON.stringify(t,Qp,2):String(t),Qp=(t,e)=>Gp(e)?Qp(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bl(r,i)+" =>"]=s,n),{})}:Us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bl(n))}:rn(e)?Bl(e):xe(e)&&!oe(e)&&!Kp(e)?String(e):e,Bl=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class xv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lv(){return St}let Le;const $l=new WeakSet;class Yp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$l.has(this)&&($l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cd(this),Zp(this);const e=Le,n=tn;Le=this,tn=!0;try{return this.fn()}finally{em(this),Le=e,tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)au(e);this.deps=this.depsTail=void 0,cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pc(this)&&this.run()}get dirty(){return pc(this)}}let Jp=0,yi,vi;function Xp(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=yi,yi=t}function iu(){Jp++}function ou(){if(--Jp>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Zp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function em(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),au(r),Fv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function tm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=tn;Le=t,tn=!0;try{Zp(t);const s=t.fn(t._value);(e.version===0||dr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,tn=r,em(t),t.flags&=-3}}function au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let tn=!0;const nm=[];function $n(){nm.push(tn),tn=!1}function jn(){const t=nm.pop();tn=t===void 0?!0:t}function cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Oi=0;class Uv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!tn||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Uv(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,rm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ou()}}}function rm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)rm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mc=new WeakMap,Lr=Symbol(""),gc=Symbol(""),Di=Symbol("");function vt(t,e,n){if(tn&&Le){let r=mc.get(t);r||mc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new lu),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=mc.get(t);if(!o){Oi++;return}const l=c=>{c&&c.trigger()};if(iu(),e==="clear")o.forEach(l);else{const c=oe(t),u=c&&ru(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Di||!rn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Di)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Lr)),_s(t)&&l(o.get(gc)));break;case"delete":c||(l(o.get(Lr)),_s(t)&&l(o.get(gc)));break;case"set":_s(t)&&l(o.get(Lr));break}}ou()}function is(t){const e=Se(t);return e===t?e:(vt(e,"iterate",Di),Kt(t)?e:e.map(lt))}function Wa(t){return vt(t=Se(t),"iterate",Di),t}const Bv={__proto__:null,[Symbol.iterator](){return jl(this,Symbol.iterator,lt)},concat(...t){return is(this).concat(...t.map(e=>oe(e)?is(e):e))},entries(){return jl(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Pn(this,"every",t,e,void 0,arguments)},filter(t,e){return Pn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Pn(this,"find",t,e,lt,arguments)},findIndex(t,e){return Pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ql(this,"includes",t)},indexOf(...t){return ql(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return ql(this,"lastIndexOf",t)},map(t,e){return Pn(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return ud(this,"reduce",t,e)},reduceRight(t,...e){return ud(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return Pn(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return jl(this,"values",lt)}};function jl(t,e,n){const r=Wa(t),s=r[e]();return r!==t&&!Kt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const $v=Array.prototype;function Pn(t,e,n,r,s,i){const o=Wa(t),l=o!==t&&!Kt(t),c=o[e];if(c!==$v[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function ud(t,e,n,r){const s=Wa(t);let i=n;return s!==t&&(Kt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),s[e](i,...r)}function ql(t,e,n){const r=Se(t);vt(r,"iterate",Di);const s=r[e](...n);return(s===-1||s===!1)&&hu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function ii(t,e,n=[]){$n(),iu();const r=Se(t)[e].apply(t,n);return ou(),jn(),r}const jv=eu("__proto__,__v_isRef,__isVue"),sm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function qv(t){rn(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class im{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zv:cm:i?lm:am).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=Bv[n]))return c;if(n==="hasOwnProperty")return qv}const l=Reflect.get(e,n,Tt(e)?e:r);return(rn(n)?sm.has(n):jv(n))||(s||vt(e,"get",n),i)?l:Tt(l)?o&&ru(n)?l:l.value:xe(l)?s?hm(l):Ka(l):l}}class om extends im{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=yr(i);if(!Kt(r)&&!yr(r)&&(i=Se(i),r=Se(r)),!oe(e)&&Tt(i)&&!Tt(r))return c?!1:(i.value=r,!0)}const o=oe(e)&&ru(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,Tt(e)?e:s);return e===Se(s)&&(o?dr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!sm.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",oe(e)?"length":Lr),Reflect.ownKeys(e)}}class Hv extends im{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Wv=new om,Kv=new Hv,zv=new om(!0);const _c=t=>t,xo=t=>Reflect.getPrototypeOf(t);function Gv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=_s(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?_c:e?da:lt;return!e&&vt(i,"iterate",c?gc:Lr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(dr(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=xo(o),u=e?_c:t?da:lt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",Lr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(dr(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?_c:t?da:lt;return!t&&vt(c,"iterate",Lr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return et(n,t?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){!e&&!Kt(s)&&!yr(s)&&(s=Se(s));const i=Se(this);return xo(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Kt(i)&&!yr(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=xo(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?dr(i,d)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=xo(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Dn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Gv(s,t,e)}),n}function cu(t,e){const n=Qv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const Yv={get:cu(!1,!1)},Jv={get:cu(!1,!0)},Xv={get:cu(!0,!1)};const am=new WeakMap,lm=new WeakMap,cm=new WeakMap,Zv=new WeakMap;function eE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tE(t){return t.__v_skip||!Object.isExtensible(t)?0:eE(bv(t))}function Ka(t){return yr(t)?t:uu(t,!1,Wv,Yv,am)}function um(t){return uu(t,!1,zv,Jv,lm)}function hm(t){return uu(t,!0,Kv,Xv,cm)}function uu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=tE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ys(t){return yr(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Kt(t){return!!(t&&t.__v_isShallow)}function hu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function nE(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&fc(t,"__v_skip",!0),t}const lt=t=>xe(t)?Ka(t):t,da=t=>xe(t)?hm(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Xe(t){return dm(t,!1)}function rE(t){return dm(t,!0)}function dm(t,e){return Tt(t)?t:new sE(t,e)}class sE{constructor(e,n){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Kt(e)||yr(e);e=r?e:Se(e),dr(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function Be(t){return Tt(t)?t.value:t}const iE={get:(t,e,n)=>e==="__v_raw"?t:Be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fm(t){return ys(t)?t:new Proxy(t,iE)}class oE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Xp(this,!0),!0}get value(){const e=this.dep.track();return tm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function aE(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new oE(r,s,n)}const Fo={},fa=new WeakMap;let Dr;function lE(t,e=!1,n=Dr){if(n){let r=fa.get(n);r||fa.set(n,r=[]),r.push(t)}}function cE(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=B=>s?B:Kt(B)||s===!1||s===0?Nn(B,1):Nn(B);let d,p,g,E,S=!1,O=!1;if(Tt(t)?(p=()=>t.value,S=Kt(t)):ys(t)?(p=()=>u(t),S=!0):oe(t)?(O=!0,S=t.some(B=>ys(B)||Kt(B)),p=()=>t.map(B=>{if(Tt(B))return B.value;if(ys(B))return u(B);if(ge(B))return c?c(B,2):B()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){$n();try{g()}finally{jn()}}const B=Dr;Dr=d;try{return c?c(t,3,[E]):t(E)}finally{Dr=B}}:p=mn,e&&s){const B=p,Z=s===!0?1/0:s;p=()=>Nn(B(),Z)}const D=Lv(),$=()=>{d.stop(),D&&D.active&&nu(D.effects,d)};if(i&&e){const B=e;e=(...Z)=>{B(...Z),$()}}let q=O?new Array(t.length).fill(Fo):Fo;const H=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const Z=d.run();if(s||S||(O?Z.some((F,T)=>dr(F,q[T])):dr(Z,q))){g&&g();const F=Dr;Dr=d;try{const T=[Z,q===Fo?void 0:O&&q[0]===Fo?[]:q,E];q=Z,c?c(e,3,T):e(...T)}finally{Dr=F}}}else d.run()};return l&&l(H),d=new Yp(p),d.scheduler=o?()=>o(H,!1):H,E=B=>lE(B,!1,d),g=d.onStop=()=>{const B=fa.get(d);if(B){if(c)c(B,4);else for(const Z of B)Z();fa.delete(d)}},e?r?H(!0):q=d.run():o?o(H.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function Nn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))Nn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Nn(t[r],e,n);else if(Us(t)||_s(t))t.forEach(r=>{Nn(r,e,n)});else if(Kp(t)){for(const r in t)Nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,r){try{return r?t(...r):t()}catch(s){za(s,e,n)}}function on(t,e,n,r){if(ge(t)){const s=no(t,e,n,r);return s&&Hp(s)&&s.catch(i=>{za(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function za(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){$n(),no(i,null,10,[t,c,u]),jn();return}}uE(t,n,s,r,o)}function uE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let fn=-1;const vs=[];let rr=null,as=0;const pm=Promise.resolve();let pa=null;function Ga(t){const e=pa||pm;return t?e.then(this?t.bind(this):t):e}function hE(t){let e=fn+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function du(t){if(!(t.flags&1)){const e=Ni(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Ni(n)?bt.push(t):bt.splice(hE(e),0,t),t.flags|=1,mm()}}function mm(){pa||(pa=pm.then(_m))}function dE(t){oe(t)?vs.push(...t):rr&&t.id===-1?rr.splice(as+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),mm()}function hd(t,e,n=fn+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gm(t){if(vs.length){const e=[...new Set(vs)].sort((n,r)=>Ni(n)-Ni(r));if(vs.length=0,rr){rr.push(...e);return}for(rr=e,as=0;as<rr.length;as++){const n=rr[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rr=null,as=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _m(t){try{for(fn=0;fn<bt.length;fn++){const e=bt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<bt.length;fn++){const e=bt[fn];e&&(e.flags&=-2)}fn=-1,bt.length=0,gm(),pa=null,(bt.length||vs.length)&&_m()}}let nt=null,ym=null;function ma(t){const e=nt;return nt=t,ym=t&&t.type.__scopeId||null,e}function Qr(t,e=nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Td(-1);const i=ma(e);let o;try{o=t(...s)}finally{ma(i),r._d&&Td(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vt(t,e){if(nt===null)return t;const n=el(nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&($n(),on(c,n,8,[t.el,l,t,e]),jn())}}const fE=Symbol("_vte"),pE=t=>t.__isTeleport,os=Symbol("_leaveCb"),Uo=Symbol("_enterCb");function mE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ro(()=>{t.isMounted=!0}),Am(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],gE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht};function _E(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:S,onLeaveCancelled:O,onBeforeAppear:D,onAppear:$,onAfterAppear:q,onAppearCancelled:H}=e,B=String(t.key),Z=_E(n,t),F=(y,b)=>{y&&on(y,r,9,b)},T=(y,b)=>{const R=b[1];F(y,b),oe(y)?y.every(I=>I.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let b=c;if(!n.isMounted)if(i)b=D||c;else return;y[os]&&y[os](!0);const R=Z[B];R&&ls(t,R)&&R.el[os]&&R.el[os](),F(b,[y])},enter(y){let b=u,R=d,I=p;if(!n.isMounted)if(i)b=$||u,R=q||d,I=H||p;else return;let m=!1;const le=y[Uo]=J=>{m||(m=!0,J?F(I,[y]):F(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Uo]=void 0)};b?T(b,[y,le]):le()},leave(y,b){const R=String(t.key);if(y[Uo]&&y[Uo](!0),n.isUnmounting)return b();F(g,[y]);let I=!1;const m=y[os]=le=>{I||(I=!0,b(),le?F(O,[y]):F(S,[y]),y[os]=void 0,Z[R]===t&&delete Z[R])};Z[R]=t,E?T(E,[y,m]):m()},clone(y){return yc(y,e,n,r)}};return v}function Vi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&s++,r=r.concat(vm(o.children,e,l))):(e||o.type!==In)&&r.push(l!=null?jr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Bt(t,e){return ge(t)?et({name:t.name},e,{setup:t}):t}function Em(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ei(t,e,n,r,s=!1){if(oe(t)){t.forEach((S,O)=>Ei(S,e&&(oe(e)?e[O]:e),n,r,s));return}if(Es(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?el(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,p=l.setupState,g=Se(p),E=p===Me?()=>!1:S=>Oe(g,S);if(u!=null&&u!==c&&(Ke(u)?(d[u]=null,E(u)&&(p[u]=null)):Tt(u)&&(u.value=null)),ge(c))no(c,l,12,[o,d]);else{const S=Ke(c),O=Tt(c);if(S||O){const D=()=>{if(t.f){const $=S?E(c)?p[c]:d[c]:c.value;s?oe($)&&nu($,i):oe($)?$.includes(i)||$.push(i):S?(d[c]=[i],E(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,E(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Nt(D,n)):D()}}}Ha().requestIdleCallback;Ha().cancelIdleCallback;const Es=t=>!!t.type.__asyncLoader,Tm=t=>t.type.__isKeepAlive;function yE(t,e){Im(t,"a",e)}function vE(t,e){Im(t,"da",e)}function Im(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tm(s.parent.vnode)&&EE(r,e,n,s),s=s.parent}}function EE(t,e,n,r){const s=Qa(e,t,r,!0);Ya(()=>{nu(r[e],s)},n)}function Qa(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{$n();const l=io(n),c=on(e,n,t,o);return l(),jn(),c});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=ct)=>{(!Li||t==="sp")&&Qa(t,(...r)=>e(...r),n)},TE=zn("bm"),ro=zn("m"),IE=zn("bu"),wm=zn("u"),Am=zn("bum"),Ya=zn("um"),wE=zn("sp"),AE=zn("rtg"),bE=zn("rtc");function RE(t,e=ct){Qa("ec",t,e)}const bm="components";function fr(t,e){return Cm(bm,t,!0,e)||t}const Rm=Symbol.for("v-ndc");function so(t){return Ke(t)?Cm(bm,t,!1)||t:t||Rm}function Cm(t,e,n=!0,r=!1){const s=nt||ct;if(s){const i=s.type;{const l=fT(i,!1);if(l&&(l===e||l===Gt(e)||l===qa(Gt(e))))return i}const o=dd(s[t]||i[t],e)||dd(s.appContext[t],e);return!o&&r?i:o}}function dd(t,e){return t&&(t[e]||t[Gt(e)]||t[qa(Gt(e))])}function Vn(t,e,n,r){let s;const i=n,o=oe(t);if(o||Ke(t)){const l=o&&ys(t);let c=!1,u=!1;l&&(c=!Kt(t),u=yr(t),t=Wa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?da(lt(t[d])):lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function CE(t,e,n={},r,s){if(nt.ce||nt.parent&&Es(nt.parent)&&nt.parent.ce)return he(),Rt($e,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Sm(i(n)),l=n.key||o&&o.key,c=Rt($e,{key:(l&&!rn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Sm(t){return t.some(e=>xi(e)?!(e.type===In||e.type===$e&&!Sm(e.children)):!0)?t:null}function SE(t,e){const n={};for(const r in t)n[zo(r)]=t[r];return n}const vc=t=>t?Qm(t)?el(t):vc(t.parent):null,Ti=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>km(t),$forceUpdate:t=>t.f||(t.f=()=>{du(t.update)}),$nextTick:t=>t.n||(t.n=Ga.bind(t.proxy)),$watch:t=>QE.bind(t)}),Hl=(t,e)=>t!==Me&&!t.__isScriptSetup&&Oe(t,e),PE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Hl(r,e))return o[e]=1,r[e];if(s!==Me&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Me&&Oe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const d=Ti[e];let p,g;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Hl(s,e)?(s[e]=n,!0):r!==Me&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&Oe(t,o)||Hl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(Ti,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fd(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function kE(t){const e=km(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:S,activated:O,deactivated:D,beforeDestroy:$,beforeUnmount:q,destroyed:H,unmounted:B,render:Z,renderTracked:F,renderTriggered:T,errorCaptured:v,serverPrefetch:y,expose:b,inheritAttrs:R,components:I,directives:m,filters:le}=e;if(u&&OE(u,r,null),o)for(const Te in o){const ye=o[Te];ge(ye)&&(r[Te]=ye.bind(n))}if(s){const Te=s.call(n,n);xe(Te)&&(t.data=Ka(Te))}if(Ec=!0,i)for(const Te in i){const ye=i[Te],Ot=ge(ye)?ye.bind(n,n):ge(ye.get)?ye.get.bind(n,n):mn,Qt=!ge(ye)&&ge(ye.set)?ye.set.bind(n):mn,$t=Pt({get:Ot,set:Qt});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>$t.value,set:je=>$t.value=je})}if(l)for(const Te in l)Pm(l[Te],r,n,Te);if(c){const Te=ge(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{Qo(ye,Te[ye])})}d&&pd(d,t,"c");function Ne(Te,ye){oe(ye)?ye.forEach(Ot=>Te(Ot.bind(n))):ye&&Te(ye.bind(n))}if(Ne(TE,p),Ne(ro,g),Ne(IE,E),Ne(wm,S),Ne(yE,O),Ne(vE,D),Ne(RE,v),Ne(bE,F),Ne(AE,T),Ne(Am,q),Ne(Ya,B),Ne(wE,y),oe(b))if(b.length){const Te=t.exposed||(t.exposed={});b.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:Ot=>n[ye]=Ot})})}else t.exposed||(t.exposed={});Z&&t.render===mn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),m&&(t.directives=m),y&&Em(t)}function OE(t,e,n=mn){oe(t)&&(t=Tc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pd(t,e,n){on(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pm(t,e,n,r){let s=r.includes(".")?qm(n,r):()=>n[r];if(Ke(t)){const i=e[t];ge(i)&&Yo(s,i)}else if(ge(t))Yo(s,t.bind(n));else if(xe(t))if(oe(t))t.forEach(i=>Pm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Yo(s,i,t)}}function km(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ga(c,u,o,!0)),ga(c,e,o)),xe(e)&&i.set(e,c),c}function ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ga(t,i,n,!0),s&&s.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=DE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const DE={data:md,props:gd,emits:gd,methods:ui,computed:ui,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:ui,directives:ui,watch:VE,provide:md,inject:NE};function md(t,e){return e?t?function(){return et(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function NE(t,e){return ui(Tc(t),Tc(e))}function Tc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?et(Object.create(null),t,e):e}function gd(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),fd(t),fd(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Om(){return{app:null,config:{isNativeTag:wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ME=0;function xE(t,e){return function(r,s=null){ge(r)||(r=et({},r)),s!=null&&!xe(s)&&(s=null);const i=Om(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:ME++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const E=u._ceVNode||be(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,d,g),c=!0,u._container=d,d.__vue_app__=u,el(E.component)}},onUnmount(d){l.push(d)},unmount(){c&&(on(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ts;Ts=u;try{return d()}finally{Ts=p}}};return u}}let Ts=null;function Qo(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=ct||nt;if(r||Ts){let s=Ts?Ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const Dm={},Nm=()=>Object.create(Dm),Vm=t=>Object.getPrototypeOf(t)===Dm;function LE(t,e,n,r=!1){const s={},i=Nm();t.propsDefaults=Object.create(null),Mm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:um(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ja(t.emitsOptions,g))continue;const E=e[g];if(c)if(Oe(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const S=Gt(g);s[S]=Ic(c,l,S,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{Mm(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=Gr(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ic(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function Mm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(_i(c))continue;const u=e[c];let d;s&&Oe(s,d=Gt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ja(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ic(s,c,p,u[p],t,!Oe(u,p))}}return o}function Ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=io(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Gr(n))&&(r=!0))}return r}const UE=new WeakMap;function xm(t,e,n=!1){const r=n?UE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[g,E]=xm(p,e,!0);et(o,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return xe(t)&&r.set(t,gs),gs;if(oe(i))for(let d=0;d<i.length;d++){const p=Gt(i[d]);_d(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Gt(d);if(_d(p)){const g=i[d],E=o[p]=oe(g)||ge(g)?{type:g}:et({},g),S=E.type;let O=!1,D=!0;if(oe(S))for(let $=0;$<S.length;++$){const q=S[$],H=ge(q)&&q.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(D=!1)}else O=ge(S)&&S.name==="Boolean";E[0]=O,E[1]=D,(O||Oe(E,"default"))&&l.push(p)}}const u=[o,l];return xe(t)&&r.set(t,u),u}function _d(t){return t[0]!=="$"&&!_i(t)}const fu=t=>t[0]==="_"||t==="$stable",pu=t=>oe(t)?t.map(pn):[pn(t)],BE=(t,e,n)=>{if(e._n)return e;const r=Qr((...s)=>pu(e(...s)),n);return r._c=!1,r},Lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fu(s))continue;const i=t[s];if(ge(i))e[s]=BE(s,i,r);else if(i!=null){const o=pu(i);e[s]=()=>o}}},Fm=(t,e)=>{const n=pu(e);t.slots.default=()=>n},Um=(t,e,n)=>{for(const r in e)(n||!fu(r))&&(t[r]=e[r])},$E=(t,e,n)=>{const r=t.slots=Nm();if(t.vnode.shapeFlag&32){const s=e.__;s&&fc(r,"__",s,!0);const i=e._;i?(Um(r,e,n),n&&fc(r,"_",i,!0)):Lm(e,r)}else e&&Fm(t,e)},jE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Um(s,e,n):(i=!e.$stable,Lm(e,s)),o=e}else e&&(Fm(t,e),o={default:1});if(i)for(const l in s)!fu(l)&&o[l]==null&&delete s[l]},Nt=nT;function qE(t){return HE(t)}function HE(t,e){const n=Ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=mn,insertStaticContent:S}=t,O=(w,A,P,M=null,U=null,x=null,Y=void 0,z=null,K=!!A.dynamicChildren)=>{if(w===A)return;w&&!ls(w,A)&&(M=V(w),je(w,U,x,!0),w=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:Q}=A;switch(W){case Xa:D(w,A,P,M);break;case In:$(w,A,P,M);break;case Jo:w==null&&q(A,P,M,Y);break;case $e:I(w,A,P,M,U,x,Y,z,K);break;default:Q&1?Z(w,A,P,M,U,x,Y,z,K):Q&6?m(w,A,P,M,U,x,Y,z,K):(Q&64||Q&128)&&W.process(w,A,P,M,U,x,Y,z,K,ne)}ie!=null&&U?Ei(ie,w&&w.ref,x,A||w,!A):ie==null&&w&&w.ref!=null&&Ei(w.ref,null,x,w,!0)},D=(w,A,P,M)=>{if(w==null)r(A.el=l(A.children),P,M);else{const U=A.el=w.el;A.children!==w.children&&u(U,A.children)}},$=(w,A,P,M)=>{w==null?r(A.el=c(A.children||""),P,M):A.el=w.el},q=(w,A,P,M)=>{[w.el,w.anchor]=S(w.children,A,P,M,w.el,w.anchor)},H=({el:w,anchor:A},P,M)=>{let U;for(;w&&w!==A;)U=g(w),r(w,P,M),w=U;r(A,P,M)},B=({el:w,anchor:A})=>{let P;for(;w&&w!==A;)P=g(w),s(w),w=P;s(A)},Z=(w,A,P,M,U,x,Y,z,K)=>{A.type==="svg"?Y="svg":A.type==="math"&&(Y="mathml"),w==null?F(A,P,M,U,x,Y,z,K):y(w,A,U,x,Y,z,K)},F=(w,A,P,M,U,x,Y,z)=>{let K,W;const{props:ie,shapeFlag:Q,transition:se,dirs:ue}=w;if(K=w.el=o(w.type,x,ie&&ie.is,ie),Q&8?d(K,w.children):Q&16&&v(w.children,K,null,M,U,Wl(w,x),Y,z),ue&&Pr(w,null,M,"created"),T(K,w,w.scopeId,Y,M),ie){for(const _e in ie)_e!=="value"&&!_i(_e)&&i(K,_e,null,ie[_e],x,M);"value"in ie&&i(K,"value",null,ie.value,x),(W=ie.onVnodeBeforeMount)&&hn(W,M,w)}ue&&Pr(w,null,M,"beforeMount");const ce=WE(U,se);ce&&se.beforeEnter(K),r(K,A,P),((W=ie&&ie.onVnodeMounted)||ce||ue)&&Nt(()=>{W&&hn(W,M,w),ce&&se.enter(K),ue&&Pr(w,null,M,"mounted")},U)},T=(w,A,P,M,U)=>{if(P&&E(w,P),M)for(let x=0;x<M.length;x++)E(w,M[x]);if(U){let x=U.subTree;if(A===x||Wm(x.type)&&(x.ssContent===A||x.ssFallback===A)){const Y=U.vnode;T(w,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},v=(w,A,P,M,U,x,Y,z,K=0)=>{for(let W=K;W<w.length;W++){const ie=w[W]=z?sr(w[W]):pn(w[W]);O(null,ie,A,P,M,U,x,Y,z)}},y=(w,A,P,M,U,x,Y)=>{const z=A.el=w.el;let{patchFlag:K,dynamicChildren:W,dirs:ie}=A;K|=w.patchFlag&16;const Q=w.props||Me,se=A.props||Me;let ue;if(P&&kr(P,!1),(ue=se.onVnodeBeforeUpdate)&&hn(ue,P,A,w),ie&&Pr(A,w,P,"beforeUpdate"),P&&kr(P,!0),(Q.innerHTML&&se.innerHTML==null||Q.textContent&&se.textContent==null)&&d(z,""),W?b(w.dynamicChildren,W,z,P,M,Wl(A,U),x):Y||ye(w,A,z,null,P,M,Wl(A,U),x,!1),K>0){if(K&16)R(z,Q,se,P,U);else if(K&2&&Q.class!==se.class&&i(z,"class",null,se.class,U),K&4&&i(z,"style",Q.style,se.style,U),K&8){const ce=A.dynamicProps;for(let _e=0;_e<ce.length;_e++){const Ie=ce[_e],rt=Q[Ie],st=se[Ie];(st!==rt||Ie==="value")&&i(z,Ie,rt,st,U,P)}}K&1&&w.children!==A.children&&d(z,A.children)}else!Y&&W==null&&R(z,Q,se,P,U);((ue=se.onVnodeUpdated)||ie)&&Nt(()=>{ue&&hn(ue,P,A,w),ie&&Pr(A,w,P,"updated")},M)},b=(w,A,P,M,U,x,Y)=>{for(let z=0;z<A.length;z++){const K=w[z],W=A[z],ie=K.el&&(K.type===$e||!ls(K,W)||K.shapeFlag&198)?p(K.el):P;O(K,W,ie,null,M,U,x,Y,!0)}},R=(w,A,P,M,U)=>{if(A!==P){if(A!==Me)for(const x in A)!_i(x)&&!(x in P)&&i(w,x,A[x],null,U,M);for(const x in P){if(_i(x))continue;const Y=P[x],z=A[x];Y!==z&&x!=="value"&&i(w,x,z,Y,U,M)}"value"in P&&i(w,"value",A.value,P.value,U)}},I=(w,A,P,M,U,x,Y,z,K)=>{const W=A.el=w?w.el:l(""),ie=A.anchor=w?w.anchor:l("");let{patchFlag:Q,dynamicChildren:se,slotScopeIds:ue}=A;ue&&(z=z?z.concat(ue):ue),w==null?(r(W,P,M),r(ie,P,M),v(A.children||[],P,ie,U,x,Y,z,K)):Q>0&&Q&64&&se&&w.dynamicChildren?(b(w.dynamicChildren,se,P,U,x,Y,z),(A.key!=null||U&&A===U.subTree)&&Bm(w,A,!0)):ye(w,A,P,ie,U,x,Y,z,K)},m=(w,A,P,M,U,x,Y,z,K)=>{A.slotScopeIds=z,w==null?A.shapeFlag&512?U.ctx.activate(A,P,M,Y,K):le(A,P,M,U,x,Y,K):J(w,A,K)},le=(w,A,P,M,U,x,Y)=>{const z=w.component=lT(w,M,U);if(Tm(w)&&(z.ctx.renderer=ne),cT(z,!1,Y),z.asyncDep){if(U&&U.registerDep(z,Ne,Y),!w.el){const K=z.subTree=be(In);$(null,K,A,P)}}else Ne(z,w,A,P,U,x,Y)},J=(w,A,P)=>{const M=A.component=w.component;if(eT(w,A,P))if(M.asyncDep&&!M.asyncResolved){Te(M,A,P);return}else M.next=A,M.update();else A.el=w.el,M.vnode=A},Ne=(w,A,P,M,U,x,Y)=>{const z=()=>{if(w.isMounted){let{next:Q,bu:se,u:ue,parent:ce,vnode:_e}=w;{const ft=$m(w);if(ft){Q&&(Q.el=_e.el,Te(w,Q,Y)),ft.asyncDep.then(()=>{w.isUnmounted||z()});return}}let Ie=Q,rt;kr(w,!1),Q?(Q.el=_e.el,Te(w,Q,Y)):Q=_e,se&&Go(se),(rt=Q.props&&Q.props.onVnodeBeforeUpdate)&&hn(rt,ce,Q,_e),kr(w,!0);const st=vd(w),jt=w.subTree;w.subTree=st,O(jt,st,p(jt.el),V(jt),w,U,x),Q.el=st.el,Ie===null&&tT(w,st.el),ue&&Nt(ue,U),(rt=Q.props&&Q.props.onVnodeUpdated)&&Nt(()=>hn(rt,ce,Q,_e),U)}else{let Q;const{el:se,props:ue}=A,{bm:ce,m:_e,parent:Ie,root:rt,type:st}=w,jt=Es(A);kr(w,!1),ce&&Go(ce),!jt&&(Q=ue&&ue.onVnodeBeforeMount)&&hn(Q,Ie,A),kr(w,!0);{rt.ce&&rt.ce._def.shadowRoot!==!1&&rt.ce._injectChildStyle(st);const ft=w.subTree=vd(w);O(null,ft,P,M,w,U,x),A.el=ft.el}if(_e&&Nt(_e,U),!jt&&(Q=ue&&ue.onVnodeMounted)){const ft=A;Nt(()=>hn(Q,Ie,ft),U)}(A.shapeFlag&256||Ie&&Es(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&w.a&&Nt(w.a,U),w.isMounted=!0,A=P=M=null}};w.scope.on();const K=w.effect=new Yp(z);w.scope.off();const W=w.update=K.run.bind(K),ie=w.job=K.runIfDirty.bind(K);ie.i=w,ie.id=w.uid,K.scheduler=()=>du(ie),kr(w,!0),W()},Te=(w,A,P)=>{A.component=w;const M=w.vnode.props;w.vnode=A,w.next=null,FE(w,A.props,M,P),jE(w,A.children,P),$n(),hd(w),jn()},ye=(w,A,P,M,U,x,Y,z,K=!1)=>{const W=w&&w.children,ie=w?w.shapeFlag:0,Q=A.children,{patchFlag:se,shapeFlag:ue}=A;if(se>0){if(se&128){Qt(W,Q,P,M,U,x,Y,z,K);return}else if(se&256){Ot(W,Q,P,M,U,x,Y,z,K);return}}ue&8?(ie&16&&Ct(W,U,x),Q!==W&&d(P,Q)):ie&16?ue&16?Qt(W,Q,P,M,U,x,Y,z,K):Ct(W,U,x,!0):(ie&8&&d(P,""),ue&16&&v(Q,P,M,U,x,Y,z,K))},Ot=(w,A,P,M,U,x,Y,z,K)=>{w=w||gs,A=A||gs;const W=w.length,ie=A.length,Q=Math.min(W,ie);let se;for(se=0;se<Q;se++){const ue=A[se]=K?sr(A[se]):pn(A[se]);O(w[se],ue,P,null,U,x,Y,z,K)}W>ie?Ct(w,U,x,!0,!1,Q):v(A,P,M,U,x,Y,z,K,Q)},Qt=(w,A,P,M,U,x,Y,z,K)=>{let W=0;const ie=A.length;let Q=w.length-1,se=ie-1;for(;W<=Q&&W<=se;){const ue=w[W],ce=A[W]=K?sr(A[W]):pn(A[W]);if(ls(ue,ce))O(ue,ce,P,null,U,x,Y,z,K);else break;W++}for(;W<=Q&&W<=se;){const ue=w[Q],ce=A[se]=K?sr(A[se]):pn(A[se]);if(ls(ue,ce))O(ue,ce,P,null,U,x,Y,z,K);else break;Q--,se--}if(W>Q){if(W<=se){const ue=se+1,ce=ue<ie?A[ue].el:M;for(;W<=se;)O(null,A[W]=K?sr(A[W]):pn(A[W]),P,ce,U,x,Y,z,K),W++}}else if(W>se)for(;W<=Q;)je(w[W],U,x,!0),W++;else{const ue=W,ce=W,_e=new Map;for(W=ce;W<=se;W++){const it=A[W]=K?sr(A[W]):pn(A[W]);it.key!=null&&_e.set(it.key,W)}let Ie,rt=0;const st=se-ce+1;let jt=!1,ft=0;const Qn=new Array(st);for(W=0;W<st;W++)Qn[W]=0;for(W=ue;W<=Q;W++){const it=w[W];if(rt>=st){je(it,U,x,!0);continue}let qt;if(it.key!=null)qt=_e.get(it.key);else for(Ie=ce;Ie<=se;Ie++)if(Qn[Ie-ce]===0&&ls(it,A[Ie])){qt=Ie;break}qt===void 0?je(it,U,x,!0):(Qn[qt-ce]=W+1,qt>=ft?ft=qt:jt=!0,O(it,A[qt],P,null,U,x,Y,z,K),rt++)}const Ks=jt?KE(Qn):gs;for(Ie=Ks.length-1,W=st-1;W>=0;W--){const it=ce+W,qt=A[it],Eo=it+1<ie?A[it+1].el:M;Qn[W]===0?O(null,qt,P,Eo,U,x,Y,z,K):jt&&(Ie<0||W!==Ks[Ie]?$t(qt,P,Eo,2):Ie--)}}},$t=(w,A,P,M,U=null)=>{const{el:x,type:Y,transition:z,children:K,shapeFlag:W}=w;if(W&6){$t(w.component.subTree,A,P,M);return}if(W&128){w.suspense.move(A,P,M);return}if(W&64){Y.move(w,A,P,ne);return}if(Y===$e){r(x,A,P);for(let Q=0;Q<K.length;Q++)$t(K[Q],A,P,M);r(w.anchor,A,P);return}if(Y===Jo){H(w,A,P);return}if(M!==2&&W&1&&z)if(M===0)z.beforeEnter(x),r(x,A,P),Nt(()=>z.enter(x),U);else{const{leave:Q,delayLeave:se,afterLeave:ue}=z,ce=()=>{w.ctx.isUnmounted?s(x):r(x,A,P)},_e=()=>{Q(x,()=>{ce(),ue&&ue()})};se?se(x,ce,_e):_e()}else r(x,A,P)},je=(w,A,P,M=!1,U=!1)=>{const{type:x,props:Y,ref:z,children:K,dynamicChildren:W,shapeFlag:ie,patchFlag:Q,dirs:se,cacheIndex:ue}=w;if(Q===-2&&(U=!1),z!=null&&($n(),Ei(z,null,P,w,!0),jn()),ue!=null&&(A.renderCache[ue]=void 0),ie&256){A.ctx.deactivate(w);return}const ce=ie&1&&se,_e=!Es(w);let Ie;if(_e&&(Ie=Y&&Y.onVnodeBeforeUnmount)&&hn(Ie,A,w),ie&6)un(w.component,P,M);else{if(ie&128){w.suspense.unmount(P,M);return}ce&&Pr(w,null,A,"beforeUnmount"),ie&64?w.type.remove(w,A,P,ne,M):W&&!W.hasOnce&&(x!==$e||Q>0&&Q&64)?Ct(W,A,P,!1,!0):(x===$e&&Q&384||!U&&ie&16)&&Ct(K,A,P),M&&qe(w)}(_e&&(Ie=Y&&Y.onVnodeUnmounted)||ce)&&Nt(()=>{Ie&&hn(Ie,A,w),ce&&Pr(w,null,A,"unmounted")},P)},qe=w=>{const{type:A,el:P,anchor:M,transition:U}=w;if(A===$e){Gn(P,M);return}if(A===Jo){B(w);return}const x=()=>{s(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:z}=U,K=()=>Y(P,x);z?z(w.el,x,K):K()}else x()},Gn=(w,A)=>{let P;for(;w!==A;)P=g(w),s(w),w=P;s(A)},un=(w,A,P)=>{const{bum:M,scope:U,job:x,subTree:Y,um:z,m:K,a:W,parent:ie,slots:{__:Q}}=w;yd(K),yd(W),M&&Go(M),ie&&oe(Q)&&Q.forEach(se=>{ie.renderCache[se]=void 0}),U.stop(),x&&(x.flags|=8,je(Y,w,A,P)),z&&Nt(z,A),Nt(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ct=(w,A,P,M=!1,U=!1,x=0)=>{for(let Y=x;Y<w.length;Y++)je(w[Y],A,P,M,U)},V=w=>{if(w.shapeFlag&6)return V(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=g(w.anchor||w.el),P=A&&A[fE];return P?g(P):A};let ee=!1;const X=(w,A,P)=>{w==null?A._vnode&&je(A._vnode,null,null,!0):O(A._vnode||null,w,A,null,null,null,P),A._vnode=w,ee||(ee=!0,hd(),gm(),ee=!1)},ne={p:O,um:je,m:$t,r:qe,mt:le,mc:v,pc:ye,pbc:b,n:V,o:t};return{render:X,hydrate:void 0,createApp:xE(X)}}function Wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function WE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bm(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=sr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Bm(o,l)),l.type===Xa&&(l.el=o.el),l.type===In&&!l.el&&(l.el=o.el)}}function KE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$m(e)}function yd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zE=Symbol.for("v-scx"),GE=()=>nn(zE);function Yo(t,e,n){return jm(t,e,n)}function jm(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let u;if(Li){if(i==="sync"){const E=GE();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=mn,E.resume=mn,E.pause=mn,E}}const d=ct;l.call=(E,S,O)=>on(E,d,S,O);let p=!1;i==="post"?l.scheduler=E=>{Nt(E,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,S)=>{S?E():du(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,d&&(E.id=d.uid,E.i=d))};const g=cE(t,e,l);return Li&&(u?u.push(g):c&&g()),g}function QE(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?qm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=io(this),l=jm(s,i.bind(r),n);return o(),l}function qm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const YE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Gr(e)}Modifiers`];function JE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&YE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ke(d)?d.trim():d)),o.number&&(s=n.map(ha)));let l,c=r[l=zo(e)]||r[l=zo(Gt(e))];!c&&i&&(c=r[l=zo(Gr(e))]),c&&on(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(u,t,6,s)}}function Hm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const d=Hm(u,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):et(o,i),xe(t)&&r.set(t,o),o)}function Ja(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Gr(e))||Oe(t,e))}function vd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:E,ctx:S,inheritAttrs:O}=t,D=ma(t);let $,q;try{if(n.shapeFlag&4){const B=s||r,Z=B;$=pn(u.call(Z,B,d,p,E,g,S)),q=l}else{const B=e;$=pn(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),q=e.props?l:XE(l)}}catch(B){Ii.length=0,za(B,t,1),$=be(In)}let H=$;if(q&&O!==!1){const B=Object.keys(q),{shapeFlag:Z}=H;B.length&&Z&7&&(i&&B.some(tu)&&(q=ZE(q,i)),H=jr(H,q,!1,!0))}return n.dirs&&(H=jr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Vi(H,n.transition),$=H,ma(D),$}const XE=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},ZE=(t,e)=>{const n={};for(const r in t)(!tu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ed(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Ja(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ed(r,o,u):!0:!!o;return!1}function Ed(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ja(n,i))return!0}return!1}function tT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wm=t=>t.__isSuspense;function nT(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):dE(t)}const $e=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),Ii=[];let Lt=null;function he(t=!1){Ii.push(Lt=t?null:[])}function rT(){Ii.pop(),Lt=Ii[Ii.length-1]||null}let Mi=1;function Td(t,e=!1){Mi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Km(t){return t.dynamicChildren=Mi>0?Lt||gs:null,rT(),Mi>0&&Lt&&Lt.push(t),t}function Ae(t,e,n,r,s,i){return Km(C(t,e,n,r,s,i,!0))}function Rt(t,e,n,r,s){return Km(be(t,e,n,r,s,!0))}function xi(t){return t?t.__v_isVNode===!0:!1}function ls(t,e){return t.type===e.type&&t.key===e.key}const zm=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Tt(t)||ge(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zm(e),ref:e&&Xo(e),scopeId:ym,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return l?(mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Mi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const be=sT;function sT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rm)&&(t=In),xi(t)){const l=jr(t,e,!0);return n&&mu(l,n),Mi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(pT(t)&&(t=t.__vccOpts),e){e=iT(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=sn(l)),xe(c)&&(hu(c)&&!oe(c)&&(c=et({},c)),e.style=$r(c))}const o=Ke(t)?1:Wm(t)?128:pE(t)?64:xe(t)?4:ge(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function iT(t){return t?hu(t)||Vm(t)?et({},t):t:null}function jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Za(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&zm(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(Xo(e)):[i,Xo(e)]:Xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Vi(d,c.clone(d)),d}function yt(t=" ",e=0){return be(Xa,null,t,e)}function Zo(t,e){const n=be(Jo,null,t);return n.staticCount=e,n}function Fr(t="",e=!1){return e?(he(),Rt(In,null,t)):be(In,null,t)}function pn(t){return t==null||typeof t=="boolean"?be(In):oe(t)?be($e,null,t.slice()):xi(t)?sr(t):be(Xa,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jr(t)}function mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vm(e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Za(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sn([e.class,r.class]));else if(s==="style")e.style=$r([e.style,r.style]);else if($a(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function hn(t,e,n,r=null){on(t,e,7,[n,r])}const oT=Om();let aT=0;function lT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||oT,i={uid:aT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xm(r,s),emitsOptions:Hm(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=JE.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const Gm=()=>ct||nt;let _a,wc;{const t=Ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_a=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),wc=e("__VUE_SSR_SETTERS__",n=>Li=n)}const io=t=>{const e=ct;return _a(t),t.scope.on(),()=>{t.scope.off(),_a(e)}},Id=()=>{ct&&ct.scope.off(),_a(null)};function Qm(t){return t.vnode.shapeFlag&4}let Li=!1;function cT(t,e=!1,n=!1){e&&wc(e);const{props:r,children:s}=t.vnode,i=Qm(t);LE(t,r,i,e),$E(t,s,n||e);const o=i?uT(t,e):void 0;return e&&wc(!1),o}function uT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,PE);const{setup:r}=n;if(r){$n();const s=t.setupContext=r.length>1?dT(t):null,i=io(t),o=no(r,t,0,[t.props,s]),l=Hp(o);if(jn(),i(),(l||t.sp)&&!Es(t)&&Em(t),l){if(o.then(Id,Id),e)return o.then(c=>{wd(t,c)}).catch(c=>{za(c,t,0)});t.asyncDep=o}else wd(t,o)}else Ym(t)}function wd(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=fm(e)),Ym(t)}function Ym(t,e,n){const r=t.type;t.render||(t.render=r.render||mn);{const s=io(t);$n();try{kE(t)}finally{jn(),s()}}}const hT={get(t,e){return vt(t,"get",""),t[e]}};function dT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hT),slots:t.slots,emit:t.emit,expose:e}}function el(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fm(nE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function fT(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function pT(t){return ge(t)&&"__vccOpts"in t}const Pt=(t,e)=>aE(t,e,Li);function ya(t,e,n){const r=arguments.length;return r===2?xe(e)&&!oe(e)?xi(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xi(n)&&(n=[n]),be(t,e,n))}const mT="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ac;const Ad=typeof window<"u"&&window.trustedTypes;if(Ad)try{Ac=Ad.createPolicy("vue",{createHTML:t=>t})}catch{}const Jm=Ac?t=>Ac.createHTML(t):t=>t,gT="http://www.w3.org/2000/svg",_T="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,bd=On&&On.createElement("template"),yT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(gT,t):e==="mathml"?On.createElementNS(_T,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bd.innerHTML=Jm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zn="transition",oi="animation",Cs=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vT=et({},gE,Xm),Or=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rd=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function ET(t){const e={};for(const I in t)I in Xm||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,S=TT(s),O=S&&S[0],D=S&&S[1],{onBeforeEnter:$,onEnter:q,onEnterCancelled:H,onLeave:B,onLeaveCancelled:Z,onBeforeAppear:F=$,onAppear:T=q,onAppearCancelled:v=H}=e,y=(I,m,le,J)=>{I._enterCancelled=J,nr(I,m?d:l),nr(I,m?u:o),le&&le()},b=(I,m)=>{I._isLeaving=!1,nr(I,p),nr(I,E),nr(I,g),m&&m()},R=I=>(m,le)=>{const J=I?T:q,Ne=()=>y(m,I,le);Or(J,[m,Ne]),Cd(()=>{nr(m,I?c:i),dn(m,I?d:l),Rd(J)||Sd(m,r,O,Ne)})};return et(e,{onBeforeEnter(I){Or($,[I]),dn(I,i),dn(I,o)},onBeforeAppear(I){Or(F,[I]),dn(I,c),dn(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,m){I._isLeaving=!0;const le=()=>b(I,m);dn(I,p),I._enterCancelled?(dn(I,g),bc()):(bc(),dn(I,g)),Cd(()=>{I._isLeaving&&(nr(I,p),dn(I,E),Rd(B)||Sd(I,r,D,le))}),Or(B,[I,le])},onEnterCancelled(I){y(I,!1,void 0,!0),Or(H,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Or(v,[I])},onLeaveCancelled(I){b(I),Or(Z,[I])}})}function TT(t){if(t==null)return null;if(xe(t))return[Kl(t.enter),Kl(t.leave)];{const e=Kl(t);return[e,e]}}function Kl(t){return Sv(t)}function dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Cs]||(t[Cs]=new Set)).add(e)}function nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Cs];n&&(n.delete(e),n.size||(t[Cs]=void 0))}function Cd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let IT=0;function Sd(t,e,n,r){const s=t._endId=++IT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Zm(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function Zm(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Zn}Delay`),i=r(`${Zn}Duration`),o=Pd(s,i),l=r(`${oi}Delay`),c=r(`${oi}Duration`),u=Pd(l,c);let d=null,p=0,g=0;e===Zn?o>0&&(d=Zn,p=o,g=i.length):e===oi?u>0&&(d=oi,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Zn:oi:null,g=d?d===Zn?i.length:c.length:0);const E=d===Zn&&/\b(transform|all)(,|$)/.test(r(`${Zn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:E}}function Pd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>kd(n)+kd(t[r])))}function kd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bc(){return document.body.offsetHeight}function wT(t,e,n){const r=t[Cs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Od=Symbol("_vod"),AT=Symbol("_vsh"),bT=Symbol(""),RT=/(^|;)\s*display\s*:/;function CT(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ea(r,l,"")}else for(const o in e)n[o]==null&&ea(r,o,"");for(const o in n)o==="display"&&(i=!0),ea(r,o,n[o])}else if(s){if(e!==n){const o=r[bT];o&&(n+=";"+o),r.cssText=n,i=RT.test(n)}}else e&&t.removeAttribute("style");Od in t&&(t[Od]=i?r.display:"",t[AT]&&(r.display="none"))}const Dd=/\s*!important$/;function ea(t,e,n){if(oe(n))n.forEach(r=>ea(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ST(t,e);Dd.test(n)?t.setProperty(Gr(r),n.replace(Dd,""),"important"):t[r]=n}}const Nd=["Webkit","Moz","ms"],zl={};function ST(t,e){const n=zl[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return zl[e]=r;r=qa(r);for(let s=0;s<Nd.length;s++){const i=Nd[s]+r;if(i in t)return zl[e]=i}return e}const Vd="http://www.w3.org/1999/xlink";function Md(t,e,n,r,s,i=Vv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vd,e.slice(6,e.length)):t.setAttributeNS(Vd,e,n):n==null||i&&!zp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function xd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function PT(t,e,n,r){t.removeEventListener(e,n,r)}const Ld=Symbol("_vei");function kT(t,e,n,r,s=null){const i=t[Ld]||(t[Ld]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=OT(e);if(r){const u=i[e]=VT(r,s);or(t,l,u,c)}else o&&(PT(t,l,o,c),i[e]=void 0)}}const Fd=/(?:Once|Passive|Capture)$/;function OT(t){let e;if(Fd.test(t)){e={};let r;for(;r=t.match(Fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gr(t.slice(2)),e]}let Gl=0;const DT=Promise.resolve(),NT=()=>Gl||(DT.then(()=>Gl=0),Gl=Date.now());function VT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(MT(r,n.value),e,5,[r])};return n.value=t,n.attached=NT(),n}function MT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wT(t,r,o):e==="style"?CT(t,n,r):$a(e)?tu(e)||kT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LT(t,e,r,o))?(xd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Md(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?xd(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Md(t,e,r,o))};function LT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ud(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ud(e)&&Ke(n)?!1:e in t}const eg=new WeakMap,tg=new WeakMap,va=Symbol("_moveCb"),Bd=Symbol("_enterCb"),FT=t=>(delete t.props.mode,t),UT=FT({name:"TransitionGroup",props:et({},vT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gm(),r=mE();let s,i;return wm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!HT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach($T),s.forEach(jT);const l=s.filter(qT);bc(),l.forEach(c=>{const u=c.el,d=u.style;dn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[va]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[va]=null,nr(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Se(t),l=ET(o);let c=o.tag||$e;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Vi(d,yc(d,l,r,n)),eg.set(d,d.el.getBoundingClientRect()))}i=e.default?vm(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Vi(d,yc(d,l,r,n))}return be(c,null,i)}}}),BT=UT;function $T(t){const e=t.el;e[va]&&e[va](),e[Bd]&&e[Bd]()}function jT(t){tg.set(t,t.el.getBoundingClientRect())}function qT(t){const e=eg.get(t),n=tg.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function HT(t,e,n){const r=t.cloneNode(),s=t[Cs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Zm(r);return i.removeChild(r),o}const Ss=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Go(e,n):e};function WT(t){t.target.composing=!0}function $d(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),Jt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Un]=Ss(s);const i=r||s.props&&s.props.type==="number";or(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ha(l)),t[Un](l)}),n&&or(t,"change",()=>{t.value=t.value.trim()}),e||(or(t,"compositionstart",WT),or(t,"compositionend",$d),or(t,"change",$d))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Un]=Ss(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ha(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},KT={deep:!0,created(t,e,n){t[Un]=Ss(n),or(t,"change",()=>{const r=t._modelValue,s=Fi(t),i=t.checked,o=t[Un];if(oe(r)){const l=su(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Us(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(ng(t,i))})},mounted:jd,beforeUpdate(t,e,n){t[Un]=Ss(n),jd(t,e,n)}};function jd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=su(e,r.props.value)>-1;else if(Us(e))s=e.has(r.props.value);else{if(e===n)return;s=to(e,ng(t,!0))}t.checked!==s&&(t.checked=s)}const zT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Us(e);or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ha(Fi(o)):Fi(o));t[Un](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ga(()=>{t._assigning=!1})}),t[Un]=Ss(r)},mounted(t,{value:e}){qd(t,e)},beforeUpdate(t,e,n){t[Un]=Ss(n)},updated(t,{value:e}){t._assigning||qd(t,e)}};function qd(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Us(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Fi(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=su(e,l)>-1}else o.selected=e.has(l);else if(to(Fi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fi(t){return"_value"in t?t._value:t.value}function ng(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const GT=["ctrl","shift","alt","meta"],QT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GT.some(n=>t[`${n}Key`]&&!e.includes(n))},gu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=QT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},YT=et({patchProp:xT},yT);let Hd;function JT(){return Hd||(Hd=qE(YT))}const rg=(...t)=>{const e=JT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ZT(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,XT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function XT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ZT(t){return Ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sg(t.default)}const ke=Object.assign;function Ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const wi=()=>{},an=Array.isArray,ig=/#/g,tI=/&/g,nI=/\//g,rI=/=/g,sI=/\?/g,og=/\+/g,iI=/%5B/g,oI=/%5D/g,ag=/%5E/g,aI=/%60/g,lg=/%7B/g,lI=/%7C/g,cg=/%7D/g,cI=/%20/g;function _u(t){return encodeURI(""+t).replace(lI,"|").replace(iI,"[").replace(oI,"]")}function uI(t){return _u(t).replace(lg,"{").replace(cg,"}").replace(ag,"^")}function Rc(t){return _u(t).replace(og,"%2B").replace(cI,"+").replace(ig,"%23").replace(tI,"%26").replace(aI,"`").replace(lg,"{").replace(cg,"}").replace(ag,"^")}function hI(t){return Rc(t).replace(rI,"%3D")}function dI(t){return _u(t).replace(ig,"%23").replace(sI,"%3F")}function fI(t){return t==null?"":dI(t).replace(nI,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const pI=/\/$/,mI=t=>t.replace(pI,"");function Yl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=vI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ui(o)}}function gI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _I(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&ug(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ug(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yI(t[n],e[n]))return!1;return!0}function yI(t,e){return an(t)?Kd(t,e):an(e)?Kd(e,t):t===e}function Kd(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function EI(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mI(t)}const TI=/^[^#]+#/;function II(t,e){return t.replace(TI,"#")+e}function wI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tl=()=>({left:window.scrollX,top:window.scrollY});function AI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zd(t,e){return(history.state?history.state.position-e:-1)+t}const Cc=new Map;function bI(t,e){Cc.set(t,e)}function RI(t){const e=Cc.get(t);return Cc.delete(t),e}let CI=()=>location.protocol+"//"+location.host;function hg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Wd(c,"")}return Wd(n,t)+r+s}function SI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const E=hg(t,location),S=n.value,O=e.value;let D=0;if(g){if(n.value=E,e.value=g,o&&o===S){o=null;return}D=O?g.position-O.position:0}else r(E);s.forEach($=>{$(n.value,S,{delta:D,type:Bi.pop,direction:D?D>0?Ai.forward:Ai.back:Ai.unknown})})};function c(){o=n.value}function u(g){s.push(g);const E=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(E),E}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:tl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Gd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?tl():null}}function PI(t){const{history:e,location:n}=window,r={value:hg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:CI()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(E){console.error(E),n[d?"replace":"assign"](g)}}function o(c,u){const d=ke({},e.state,Gd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ke({},s.value,e.state,{forward:c,scroll:tl()});i(d.current,d,!0);const p=ke({},Gd(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function kI(t){t=EI(t);const e=PI(t),n=SI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:II.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function OI(t){return typeof t=="string"||t&&typeof t=="object"}function dg(t){return typeof t=="string"||typeof t=="symbol"}const fg=Symbol("");var Qd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qd||(Qd={}));function ks(t,e){return ke(new Error,{type:t,[fg]:!0},e)}function kn(t,e){return t instanceof Error&&fg in t&&(e==null||!!(t.type&e))}const Yd="[^/]+?",DI={sensitive:!1,strict:!1,start:!0,end:!0},NI=/[.+*?^${}()[\]/\\]/g;function VI(t,e){const n=ke({},DI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(NI,"\\$&"),E+=40;else if(g.type===1){const{value:S,repeatable:O,optional:D,regexp:$}=g;i.push({name:S,repeatable:O,optional:D});const q=$||Yd;if(q!==Yd){E+=10;try{new RegExp(`(${q})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${S}" (${q}): `+B.message)}}let H=O?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(H=D&&u.length<2?`(?:/${H})`:"/"+H),D&&(H+="?"),s+=H,E+=20,D&&(E+=-8),O&&(E+=-20),q===".*"&&(E+=-50)}d.push(E)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",S=i[g-1];p[S.name]=E&&S.repeatable?E.split("/"):E}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===0)d+=E.value;else if(E.type===1){const{value:S,repeatable:O,optional:D}=E,$=S in u?u[S]:"";if(an($)&&!O)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const q=an($)?$.join("/"):$;if(!q)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=q}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function MI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function pg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=MI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jd(r))return 1;if(Jd(s))return-1}return s.length-r.length}function Jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xI={type:0,value:""},LI=/[a-zA-Z0-9_]/;function FI(t){if(!t)return[[]];if(t==="/")return[[xI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:LI.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function UI(t,e,n){const r=VI(FI(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function BI(t,e){const n=[],r=new Map;e=tf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const S=!E,O=Zd(p);O.aliasOf=E&&E.record;const D=tf(e,p),$=[O];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of B)$.push(Zd(ke({},O,{components:E?E.record.components:O.components,path:Z,aliasOf:E?E.record:O})))}let q,H;for(const B of $){const{path:Z}=B;if(g&&Z[0]!=="/"){const F=g.record.path,T=F[F.length-1]==="/"?"":"/";B.path=g.record.path+(Z&&T+Z)}if(q=UI(B,g,D),E?E.alias.push(q):(H=H||q,H!==q&&H.alias.push(q),S&&p.name&&!ef(q)&&o(p.name)),mg(q)&&c(q),O.children){const F=O.children;for(let T=0;T<F.length;T++)i(F[T],q,E&&E.children[T])}E=E||q}return H?()=>{o(H)}:wi}function o(p){if(dg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=qI(p,n);n.splice(g,0,p),p.record.name&&!ef(p)&&r.set(p.record.name,p)}function u(p,g){let E,S={},O,D;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw ks(1,{location:p});D=E.record.name,S=ke(Xd(g.params,E.keys.filter(H=>!H.optional).concat(E.parent?E.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Xd(p.params,E.keys.map(H=>H.name))),O=E.stringify(S)}else if(p.path!=null)O=p.path,E=n.find(H=>H.re.test(O)),E&&(S=E.parse(O),D=E.record.name);else{if(E=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!E)throw ks(1,{location:p,currentLocation:g});D=E.record.name,S=ke({},g.params,p.params),O=E.stringify(S)}const $=[];let q=E;for(;q;)$.unshift(q.record),q=q.parent;return{name:D,path:O,params:S,matched:$,meta:jI($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$I(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $I(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function tf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;pg(t,e[i])<0?r=i:n=i+1}const s=HI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HI(t){let e=t;for(;e=e.parent;)if(mg(e)&&pg(t,e)===0)return e}function mg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function WI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(og," "),o=i.indexOf("="),l=Ui(o<0?i:i.slice(0,o)),c=o<0?null:Ui(i.slice(o+1));if(l in e){let u=e[l];an(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function nf(t){let e="";for(let n in t){const r=t[n];if(n=hI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&Rc(i)):[r&&Rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zI=Symbol(""),rf=Symbol(""),nl=Symbol(""),gg=Symbol(""),Sc=Symbol("");function ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ir(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(ks(4,{from:n,to:e})):g instanceof Error?c(g):OI(g)?c(ks(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Jl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ir(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=eI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&ir(E,n,r,o,l,s)()}))}}return i}function sf(t){const e=nn(nl),n=nn(gg),r=Pt(()=>{const c=Be(t.to);return e.resolve(c)}),s=Pt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ps.bind(null,d));if(g>-1)return g;const E=of(c[u-2]);return u>1&&of(d)===E&&p[p.length-1].path!==E?p.findIndex(Ps.bind(null,c[u-2])):g}),i=Pt(()=>s.value>-1&&XI(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&ug(n.params,r.value.params));function l(c={}){if(JI(c)){const u=e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(wi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function GI(t){return t.length===1?t[0]:t}const QI=Bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sf,setup(t,{slots:e}){const n=Ka(sf(t)),{options:r}=nn(nl),s=Pt(()=>({[af(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[af(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&GI(e.default(n));return t.custom?i:ya("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YI=QI;function JI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function of(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const af=(t,e,n)=>t??e??n,ZI=Bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(Sc),s=Pt(()=>t.route||r.value),i=nn(rf,0),o=Pt(()=>{let u=Be(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Pt(()=>s.value.matched[o.value]);Qo(rf,Pt(()=>o.value+1)),Qo(zI,l),Qo(Sc,s);const c=Xe();return Yo(()=>[c.value,l.value,t.name],([u,d,p],[g,E,S])=>{d&&(d.instances[p]=u,E&&E!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),u&&d&&(!E||!Ps(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return lf(n.default,{Component:g,route:u});const E=p.props[d],S=E?E===!0?u.params:typeof E=="function"?E(u):E:null,D=ya(g,ke({},S,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return lf(n.default,{Component:D,route:u})||D}}});function lf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ew=ZI;function tw(t){const e=BI(t.routes,t),n=t.parseQuery||WI,r=t.stringifyQuery||nf,s=t.history,i=ai(),o=ai(),l=ai(),c=rE(er);let u=er;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ql.bind(null,V=>""+V),p=Ql.bind(null,fI),g=Ql.bind(null,Ui);function E(V,ee){let X,ne;return dg(V)?(X=e.getRecordMatcher(V),ne=ee):ne=V,e.addRoute(ne,X)}function S(V){const ee=e.getRecordMatcher(V);ee&&e.removeRoute(ee)}function O(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function $(V,ee){if(ee=ke({},ee||c.value),typeof V=="string"){const P=Yl(n,V,ee.path),M=e.resolve({path:P.path},ee),U=s.createHref(P.fullPath);return ke(P,M,{params:g(M.params),hash:Ui(P.hash),redirectedFrom:void 0,href:U})}let X;if(V.path!=null)X=ke({},V,{path:Yl(n,V.path,ee.path).path});else{const P=ke({},V.params);for(const M in P)P[M]==null&&delete P[M];X=ke({},V,{params:p(P)}),ee.params=p(ee.params)}const ne=e.resolve(X,ee),Re=V.hash||"";ne.params=d(g(ne.params));const w=gI(r,ke({},V,{hash:uI(Re),path:ne.path})),A=s.createHref(w);return ke({fullPath:w,hash:Re,query:r===nf?KI(V.query):V.query||{}},ne,{redirectedFrom:void 0,href:A})}function q(V){return typeof V=="string"?Yl(n,V,c.value.path):ke({},V)}function H(V,ee){if(u!==V)return ks(8,{from:ee,to:V})}function B(V){return T(V)}function Z(V){return B(ke(q(V),{replace:!0}))}function F(V){const ee=V.matched[V.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let ne=typeof X=="function"?X(V):X;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=q(ne):{path:ne},ne.params={}),ke({query:V.query,hash:V.hash,params:ne.path!=null?{}:V.params},ne)}}function T(V,ee){const X=u=$(V),ne=c.value,Re=V.state,w=V.force,A=V.replace===!0,P=F(X);if(P)return T(ke(q(P),{state:typeof P=="object"?ke({},Re,P.state):Re,force:w,replace:A}),ee||X);const M=X;M.redirectedFrom=ee;let U;return!w&&_I(r,ne,X)&&(U=ks(16,{to:M,from:ne}),$t(ne,ne,!0,!1)),(U?Promise.resolve(U):b(M,ne)).catch(x=>kn(x)?kn(x,2)?x:Qt(x):ye(x,M,ne)).then(x=>{if(x){if(kn(x,2))return T(ke({replace:A},q(x.to),{state:typeof x.to=="object"?ke({},Re,x.to.state):Re,force:w}),ee||M)}else x=I(M,ne,!0,A,Re);return R(M,ne,x),x})}function v(V,ee){const X=H(V,ee);return X?Promise.reject(X):Promise.resolve()}function y(V){const ee=Gn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(V):V()}function b(V,ee){let X;const[ne,Re,w]=nw(V,ee);X=Jl(ne.reverse(),"beforeRouteLeave",V,ee);for(const P of ne)P.leaveGuards.forEach(M=>{X.push(ir(M,V,ee))});const A=v.bind(null,V,ee);return X.push(A),Ct(X).then(()=>{X=[];for(const P of i.list())X.push(ir(P,V,ee));return X.push(A),Ct(X)}).then(()=>{X=Jl(Re,"beforeRouteUpdate",V,ee);for(const P of Re)P.updateGuards.forEach(M=>{X.push(ir(M,V,ee))});return X.push(A),Ct(X)}).then(()=>{X=[];for(const P of w)if(P.beforeEnter)if(an(P.beforeEnter))for(const M of P.beforeEnter)X.push(ir(M,V,ee));else X.push(ir(P.beforeEnter,V,ee));return X.push(A),Ct(X)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),X=Jl(w,"beforeRouteEnter",V,ee,y),X.push(A),Ct(X))).then(()=>{X=[];for(const P of o.list())X.push(ir(P,V,ee));return X.push(A),Ct(X)}).catch(P=>kn(P,8)?P:Promise.reject(P))}function R(V,ee,X){l.list().forEach(ne=>y(()=>ne(V,ee,X)))}function I(V,ee,X,ne,Re){const w=H(V,ee);if(w)return w;const A=ee===er,P=cs?history.state:{};X&&(ne||A?s.replace(V.fullPath,ke({scroll:A&&P&&P.scroll},Re)):s.push(V.fullPath,Re)),c.value=V,$t(V,ee,X,A),Qt()}let m;function le(){m||(m=s.listen((V,ee,X)=>{if(!un.listening)return;const ne=$(V),Re=F(ne);if(Re){T(ke(Re,{replace:!0,force:!0}),ne).catch(wi);return}u=ne;const w=c.value;cs&&bI(zd(w.fullPath,X.delta),tl()),b(ne,w).catch(A=>kn(A,12)?A:kn(A,2)?(T(ke(q(A.to),{force:!0}),ne).then(P=>{kn(P,20)&&!X.delta&&X.type===Bi.pop&&s.go(-1,!1)}).catch(wi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ye(A,ne,w))).then(A=>{A=A||I(ne,w,!1),A&&(X.delta&&!kn(A,8)?s.go(-X.delta,!1):X.type===Bi.pop&&kn(A,20)&&s.go(-1,!1)),R(ne,w,A)}).catch(wi)}))}let J=ai(),Ne=ai(),Te;function ye(V,ee,X){Qt(V);const ne=Ne.list();return ne.length?ne.forEach(Re=>Re(V,ee,X)):console.error(V),Promise.reject(V)}function Ot(){return Te&&c.value!==er?Promise.resolve():new Promise((V,ee)=>{J.add([V,ee])})}function Qt(V){return Te||(Te=!V,le(),J.list().forEach(([ee,X])=>V?X(V):ee()),J.reset()),V}function $t(V,ee,X,ne){const{scrollBehavior:Re}=t;if(!cs||!Re)return Promise.resolve();const w=!X&&RI(zd(V.fullPath,0))||(ne||!X)&&history.state&&history.state.scroll||null;return Ga().then(()=>Re(V,ee,w)).then(A=>A&&AI(A)).catch(A=>ye(A,V,ee))}const je=V=>s.go(V);let qe;const Gn=new Set,un={currentRoute:c,listening:!0,addRoute:E,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:O,resolve:$,options:t,push:B,replace:Z,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ne.add,isReady:Ot,install(V){const ee=this;V.component("RouterLink",YI),V.component("RouterView",ew),V.config.globalProperties.$router=ee,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),cs&&!qe&&c.value===er&&(qe=!0,B(s.location).catch(Re=>{}));const X={};for(const Re in er)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});V.provide(nl,ee),V.provide(gg,um(X)),V.provide(Sc,c);const ne=V.unmount;Gn.add(V),V.unmount=function(){Gn.delete(V),Gn.size<1&&(u=er,m&&m(),m=null,c.value=er,qe=!1,Te=!1),ne()}}};function Ct(V){return V.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return un}function nw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ps(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||s.push(c))}return[n,r,s]}function yu(){return nn(nl)}var rw=Object.defineProperty,cf=Object.getOwnPropertySymbols,sw=Object.prototype.hasOwnProperty,iw=Object.prototype.propertyIsEnumerable,uf=(t,e,n)=>e in t?rw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_g=(t,e)=>{for(var n in e||(e={}))sw.call(e,n)&&uf(t,n,e[n]);if(cf)for(var n of cf(e))iw.call(e,n)&&uf(t,n,e[n]);return t},rl=t=>typeof t=="function",sl=t=>typeof t=="string",yg=t=>sl(t)&&t.trim().length>0,ow=t=>typeof t=="number",Vr=t=>typeof t>"u",$i=t=>typeof t=="object"&&t!==null,aw=t=>gn(t,"tag")&&yg(t.tag),vg=t=>window.TouchEvent&&t instanceof TouchEvent,Eg=t=>gn(t,"component")&&Tg(t.component),lw=t=>rl(t)||$i(t),Tg=t=>!Vr(t)&&(sl(t)||lw(t)||Eg(t)),hf=t=>$i(t)&&["height","width","right","left","top","bottom"].every(e=>ow(t[e])),gn=(t,e)=>($i(t)||rl(t))&&e in t,cw=(t=>()=>t++)(0);function Xl(t){return vg(t)?t.targetTouches[0].clientX:t.clientX}function df(t){return vg(t)?t.targetTouches[0].clientY:t.clientY}var uw=t=>{Vr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},oo=t=>Eg(t)?oo(t.component):aw(t)?Bt({render(){return t}}):typeof t=="string"?t:Se(Be(t)),hw=t=>{if(typeof t=="string")return t;const e=gn(t,"props")&&$i(t.props)?t.props:{},n=gn(t,"listeners")&&$i(t.listeners)?t.listeners:{};return{component:oo(t),props:e,listeners:n}},dw=()=>typeof window<"u",vu=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},fw=t=>["on","off","emit"].every(e=>gn(t,e)&&rl(t[e])),Mt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Mt||(Mt={}));var ji;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(ji||(ji={}));var xt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(xt||(xt={}));var Zt="Vue-Toastification",Xt={type:{type:String,default:Mt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Ig={type:Xt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ta={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Xt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Pc={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},wg={transition:{type:[Object,String],default:`${Zt}__bounce`}},pw={position:{type:String,default:ji.TOP_RIGHT},draggable:Xt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Xt.trueBoolean,pauseOnHover:Xt.trueBoolean,closeOnClick:Xt.trueBoolean,timeout:Pc.timeout,hideProgressBar:Pc.hideProgressBar,toastClassName:Xt.classNames,bodyClassName:Xt.classNames,icon:Ig.customIcon,closeButton:ta.component,closeButtonClassName:ta.classNames,showCloseButtonOnHover:ta.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new vu}},mw={id:{type:[String,Number],required:!0,default:0},type:Xt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},gw={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Xt.trueBoolean,maxToasts:{type:Number,default:20},transition:wg.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Xt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Bn={CORE_TOAST:pw,TOAST:mw,CONTAINER:gw,PROGRESS_BAR:Pc,ICON:Ig,TRANSITION:wg,CLOSE_BUTTON:ta},Ag=Bt({name:"VtProgressBar",props:Bn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Zt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function _w(t,e){return he(),Ae("div",{style:$r(t.style),class:sn(t.cpClass)},null,6)}Ag.render=_w;var yw=Ag,bg=Bt({name:"VtCloseButton",props:Bn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?oo(this.component):"button"},classes(){const t=[`${Zt}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),vw=yt(" × ");function Ew(t,e){return he(),Rt(so(t.buttonComponent),Za({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Qr(()=>[vw]),_:1},16,["aria-label","class"])}bg.render=Ew;var Tw=bg,Rg={},Iw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ww=C("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),Aw=[ww];function bw(t,e){return he(),Ae("svg",Iw,Aw)}Rg.render=bw;var Rw=Rg,Cg={},Cw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Sw=C("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Pw=[Sw];function kw(t,e){return he(),Ae("svg",Cw,Pw)}Cg.render=kw;var ff=Cg,Sg={},Ow={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Dw=C("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Nw=[Dw];function Vw(t,e){return he(),Ae("svg",Ow,Nw)}Sg.render=Vw;var Mw=Sg,Pg={},xw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Lw=C("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Fw=[Lw];function Uw(t,e){return he(),Ae("svg",xw,Fw)}Pg.render=Uw;var Bw=Pg,kg=Bt({name:"VtIcon",props:Bn.ICON,computed:{customIconChildren(){return gn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return sl(this.customIcon)?this.trimValue(this.customIcon):gn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return gn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Tg(this.customIcon)?oo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Mt.DEFAULT]:ff,[Mt.INFO]:ff,[Mt.SUCCESS]:Rw,[Mt.ERROR]:Bw,[Mt.WARNING]:Mw}[this.type]},iconClasses(){const t=[`${Zt}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return yg(t)?t.trim():e}}});function $w(t,e){return he(),Rt(so(t.component),{class:sn(t.iconClasses)},{default:Qr(()=>[yt(Wt(t.customIconChildren),1)]),_:1},8,["class"])}kg.render=$w;var jw=kg,Og=Bt({name:"VtToast",components:{ProgressBar:yw,CloseButton:Tw,Icon:jw},inheritAttrs:!1,props:Object.assign({},Bn.CORE_TOAST,Bn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${Zt}__toast`,`${Zt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${Zt}__toast--rtl`),t},bodyClasses(){return[`${Zt}__toast-${sl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return hf(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:gn,getVueComponentFromObj:oo,closeToast(){this.eventBus.emit(xt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Xl(t),y:df(t)},this.dragStart=Xl(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Xl(t),y:df(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,hf(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),qw=["role"];function Hw(t,e){const n=fr("Icon"),r=fr("CloseButton"),s=fr("ProgressBar");return he(),Ae("div",{class:sn(t.classes),style:$r(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(he(),Rt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Fr("v-if",!0),C("div",{role:t.accessibility.toastRole||"alert",class:sn(t.bodyClasses)},[typeof t.content=="string"?(he(),Ae($e,{key:0},[yt(Wt(t.content),1)],2112)):(he(),Rt(so(t.getVueComponentFromObj(t.content)),Za({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},SE(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,qw),t.closeButton?(he(),Rt(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:gu(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Fr("v-if",!0),t.timeout?(he(),Rt(s,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Fr("v-if",!0)],38)}Og.render=Hw;var Ww=Og,Dg=Bt({name:"VtTransition",props:Bn.TRANSITION,emits:["leave"],methods:{hasProp:gn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function Kw(t,e){return he(),Rt(BT,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Qr(()=>[CE(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Dg.render=Kw;var zw=Dg,Ng=Bt({name:"VueToastification",devtools:{hide:!0},components:{Toast:Ww,VtTransition:zw},props:Object.assign({},Bn.CORE_TOAST,Bn.CONTAINER,Bn.TRANSITION),data(){return{count:0,positions:Object.values(ji),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(xt.ADD,this.addToast),t.on(xt.CLEAR,this.clearToasts),t.on(xt.DISMISS,this.dismissToast),t.on(xt.UPDATE,this.updateToast),t.on(xt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){rl(t)&&(t=await t()),uw(this.$el),t.appendChild(this.$el)},setToast(t){Vr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=hw(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Vr(e)&&!Vr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Vr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${Zt}__container`,t].concat(this.defaults.containerClassName)}}});function Gw(t,e){const n=fr("Toast"),r=fr("VtTransition");return he(),Ae("div",null,[(he(!0),Ae($e,null,Vn(t.positions,s=>(he(),Ae("div",{key:s},[be(r,{transition:t.defaults.transition,class:sn(t.getClasses(s))},{default:Qr(()=>[(he(!0),Ae($e,null,Vn(t.getPositionToasts(s),i=>(he(),Rt(n,Za({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Ng.render=Gw;var Qw=Ng,pf=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new vu;e&&Ga(()=>{const i=rg(Qw,_g({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(Vr(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${Zt}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const l=Object.assign({},{id:cw(),type:Mt.DEFAULT},o,{content:i});return n.emit(xt.ADD,l),l.id};r.clear=()=>n.emit(xt.CLEAR,void 0),r.updateDefaults=i=>{n.emit(xt.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(xt.DISMISS,i)};function s(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(xt.UPDATE,{id:i,options:u,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Mt.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Mt.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Mt.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Mt.WARNING})),r},Yw=()=>{const t=()=>console.warn(`[${Zt}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Vg(t){return dw()?fw(t)?pf({eventBus:t},!1):pf(t,!0):Yw()}var Mg=Symbol("VueToastification"),xg=new vu,Jw=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Vg(_g({eventBus:xg},e));t.provide(Mg,n)},Lg=t=>{const e=Gm()?nn(Mg,void 0):void 0;return e||Vg(xg)},Xw=Jw;const Zw={id:"app"},e0=Bt({__name:"App",setup(t){return(e,n)=>{const r=fr("router-view");return he(),Ae("div",Zw,[be(r)])}}}),Zl="/logo.png";var mf={};/**
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
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},t0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),r.push(n[d],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new n0;const g=i<<2|l>>4;if(r.push(g),u!==64){const E=l<<4&240|u>>2;if(r.push(E),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r0=function(t){const e=Fg(t);return Ug.encodeByteArray(e,!0)},Ea=function(t){return r0(t).replace(/\./g,"")},Bg=function(t){try{return Ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i0=()=>s0().__FIREBASE_DEFAULTS__,o0=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bg(t[1]);return e&&JSON.parse(e)},il=()=>{try{return i0()||o0()||a0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$g=t=>{var e,n;return(n=(e=il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jg=t=>{const e=$g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qg=()=>{var t;return(t=il())===null||t===void 0?void 0:t.config},Hg=t=>{var e;return(e=il())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class l0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),""].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function u0(){var t;const e=(t=il())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function h0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p0(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m0(){return!u0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g0(){try{return typeof indexedDB=="object"}catch{return!1}}function _0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const y0="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=y0,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?v0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function v0(t,e){return t.replace(E0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const E0=/\{\$([^}]+)}/g;function T0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gf(i)&&gf(o)){if(!Ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
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
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function I0(t,e){const n=new w0(t,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class b0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new l0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C0(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(t){return t===Nr?void 0:t}function C0(t){return t.instantiationMode==="EAGER"}/**
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
 */class S0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new b0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const P0={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},k0=Ee.INFO,O0={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},D0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=O0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=k0,this._logHandler=D0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const N0=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function V0(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M0(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kg=new WeakMap,kc=new WeakMap,zg=new WeakMap,tc=new WeakMap,Tu=new WeakMap;function x0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kg.set(n,t)}).catch(()=>{}),Tu.set(e,t),e}function L0(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function F0(t){Oc=t(Oc)}function U0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return zg.set(r,e.sort?e.sort():[e]),pr(r)}:M0().includes(t)?function(...e){return t.apply(nc(this),e),pr(Kg.get(this))}:function(...e){return pr(t.apply(nc(this),e))}}function B0(t){return typeof t=="function"?U0(t):(t instanceof IDBTransaction&&L0(t),N0(t,V0())?new Proxy(t,Oc):t)}function pr(t){if(t instanceof IDBRequest)return x0(t);if(tc.has(t))return tc.get(t);const e=B0(t);return e!==t&&(tc.set(t,e),Tu.set(e,t)),e}const nc=t=>Tu.get(t);function $0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pr(o.result),c.oldVersion,c.newVersion,pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const j0=["get","getKey","getAll","getAllKeys","count"],q0=["put","add","delete","clear"],rc=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=q0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||j0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return rc.set(e,i),i}F0(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
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
 */class H0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(W0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function W0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",Ef="0.10.13";/**
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
 */const qn=new Eu("@firebase/app"),K0="@firebase/app-compat",z0="@firebase/analytics-compat",G0="@firebase/analytics",Q0="@firebase/app-check-compat",Y0="@firebase/app-check",J0="@firebase/auth",X0="@firebase/auth-compat",Z0="@firebase/database",eA="@firebase/data-connect",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",sA="@firebase/installations",iA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",cA="@firebase/performance-compat",uA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/vertexai-preview",gA="@firebase/firestore-compat",_A="firebase",yA="10.14.1";/**
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
 */const Nc="[DEFAULT]",vA={[Dc]:"fire-core",[K0]:"fire-core-compat",[G0]:"fire-analytics",[z0]:"fire-analytics-compat",[Y0]:"fire-app-check",[Q0]:"fire-app-check-compat",[J0]:"fire-auth",[X0]:"fire-auth-compat",[Z0]:"fire-rtdb",[eA]:"fire-data-connect",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[sA]:"fire-iid",[iA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[cA]:"fire-perf-compat",[uA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[_A]:"fire-js-all"};/**
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
 */const Ia=new Map,EA=new Map,Vc=new Map;function Tf(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(Vc.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of Ia.values())Tf(n,t);for(const n of EA.values())Tf(n,t);return!0}function ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mn(t){return t.settings!==void 0}/**
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
 */const TA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new ao("app","Firebase",TA);/**
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
 */class IA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=yA;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=qg()),!n)throw mr.create("no-options");const i=Ia.get(s);if(i){if(Ta(n,i.options)&&Ta(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new S0(s);for(const c of Vc.values())o.addComponent(c);const l=new IA(n,r,o);return Ia.set(s,l),l}function Iu(t=Nc){const e=Ia.get(t);if(!e&&t===Nc&&qg())return Gg();if(!e)throw mr.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let s=(r=vA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}qr(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wA="firebase-heartbeat-database",AA=1,qi="firebase-heartbeat-store";let sc=null;function Qg(){return sc||(sc=$0(wA,AA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),sc}async function bA(t){try{const n=(await Qg()).transaction(qi),r=await n.objectStore(qi).get(Yg(t));return await n.done,r}catch(e){if(e instanceof bn)qn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function If(t,e){try{const r=(await Qg()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Yg(t)),await r.done}catch(n){if(n instanceof bn)qn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function Yg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RA=1024,CA=30*24*60*60*1e3;class SA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wf(),{heartbeatsToSend:r,unsentEntries:s}=PA(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function wf(){return new Date().toISOString().substring(0,10)}function PA(t,e=RA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Af(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g0()?_0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Af(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OA(t){qr(new vr("platform-logger",e=>new H0(e),"PRIVATE")),qr(new vr("heartbeat",e=>new SA(e),"PRIVATE")),_n(Dc,Ef,t),_n(Dc,Ef,"esm2017"),_n("fire-js","")}OA("");var DA="firebase",NA="10.14.1";/**
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
 */_n(DA,NA,"app");function wu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=Jg,Xg=new ao("auth","Firebase",Jg());/**
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
 */const wa=new Eu("@firebase/auth");function MA(t,...e){wa.logLevel<=Ee.WARN&&wa.warn(`Auth (${Yr}): ${t}`,...e)}function na(t,...e){wa.logLevel<=Ee.ERROR&&wa.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Au(t,...e)}function yn(t,...e){return Au(t,...e)}function Zg(t,e,n){const r=Object.assign(Object.assign({},VA()),{[e]:n});return new ao("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return Zg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xg.create(t,...e)}function de(t,e,...n){if(!t)throw Au(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function Hn(t,e){t||xn(e)}/**
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
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xA(){return bf()==="http:"||bf()==="https:"}function bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||d0()||"connection"in navigator)?navigator.onLine:!0}function FA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=c0()||f0()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bu(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class e_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BA=new co(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return t_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=lo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return h0()||(u.referrerPolicy="no-referrer"),e_.fetch()(n_(t,t.config.apiHost,n,l),u)})}async function t_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UA),e);try{const s=new jA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zg(t,d,u);ln(t,d)}}catch(s){if(s instanceof bn)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function al(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function n_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bu(t.config,s):`${t.config.apiScheme}://${s}`}function $A(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),BA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function Rf(t){return t!==void 0&&t.enterprise!==void 0}class qA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $A(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HA(t,e){return wr(t,"GET","/v2/recaptchaConfig",Jr(t,e))}/**
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
 */async function WA(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function r_(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=Ru(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bi(ic(s.auth_time)),issuedAtTime:bi(ic(s.iat)),expirationTime:bi(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function Ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bg(n);return s?JSON.parse(s):(na("Failed to decode base64 JWT payload"),null)}catch(s){return na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cf(t){const e=Ru(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&zA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hi(t,r_(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?s_(i.providerUserInfo):[],l=YA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function QA(t){const e=Ge(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function s_(t){return t.map(e=>{var{providerId:n}=e,r=wu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JA(t,e){const n=await t_(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=n_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",e_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XA(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Jr(t,e))}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Cf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Is;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function tr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Hi(this,WA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(u=n.createdAt)!==null&&u!==void 0?u:void 0,q=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:B,isAnonymous:Z,providerData:F,stsTokenManager:T}=n;de(H&&T,e,"internal-error");const v=Is.fromJSON(this.name,T);de(typeof H=="string",e,"internal-error"),tr(p,e.name),tr(g,e.name),de(typeof B=="boolean",e,"internal-error"),de(typeof Z=="boolean",e,"internal-error"),tr(E,e.name),tr(S,e.name),tr(O,e.name),tr(D,e.name),tr($,e.name),tr(q,e.name);const y=new Ln({uid:H,auth:e,email:g,emailVerified:B,displayName:p,isAnonymous:Z,photoURL:S,phoneNumber:E,tenantId:O,stsTokenManager:v,createdAt:$,lastLoginAt:q});return F&&Array.isArray(F)&&(y.providerData=F.map(b=>Object.assign({},b))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Is;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?s_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Is;l.updateFromIdToken(r);const c=new Ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Sf=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */class i_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i_.type="NONE";const Pf=i_;/**
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
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=ra("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Fn(Pf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(Pf);const o=ra(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Ln._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ws(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ws(i,e,r))}}/**
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
 */function kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(d_(e))return"Webos";if(a_(e))return"Safari";if((e.includes("chrome/")||l_(e))&&!e.includes("edge/"))return"Chrome";if(u_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o_(t=It()){return/firefox\//i.test(t)}function a_(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l_(t=It()){return/crios\//i.test(t)}function c_(t=It()){return/iemobile/i.test(t)}function u_(t=It()){return/android/i.test(t)}function h_(t=It()){return/blackberry/i.test(t)}function d_(t=It()){return/webos/i.test(t)}function Cu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZA(t=It()){var e;return Cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eb(){return p0()&&document.documentMode===10}function f_(t=It()){return Cu(t)||u_(t)||d_(t)||h_(t)||/windows phone/i.test(t)||c_(t)}/**
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
 */function p_(t,e=[]){let n;switch(t){case"Browser":n=kf(It());break;case"Worker":n=`${kf(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class tb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nb(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Jr(t,e))}/**
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
 */const rb=6;class sb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ib{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new tb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await r_(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(gr(this));const n=e?Ge(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nb(this),n=new sb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bs(t){return Ge(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=I0(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ob(t){ll=t}function m_(t){return ll.loadJS(t)}function ab(){return ll.recaptchaEnterpriseScript}function lb(){return ll.gapiScript}function cb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ub="recaptcha-enterprise",hb="NO_RECAPTCHA";class db{constructor(e){this.type=ub,this.auth=Bs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{HA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new qA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Rf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(hb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Rf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ab();c.length!==0&&(c+=l),m_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Df(t,e,n,r=!1){const s=new db(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Df(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Df(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function fb(t,e){const n=ol(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ta(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function pb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mb(t,e,n){const r=Bs(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=g_(e),{host:o,port:l}=gb(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),_b()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gb(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vf(o)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _b(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function yb(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vb(t,e){return al(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
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
 */async function Eb(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function Tb(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
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
 */class Wi extends Su{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,n,"signInWithPassword",vb);case"emailLink":return Eb(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,r,"signUpPassword",yb);case"emailLink":return Tb(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
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
 */const Ib="http://localhost";class Hr extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Hr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:Ib,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
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
 */function wb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ab(t){const e=hi(di(t)).link,n=e?hi(di(e)).deep_link_id:null,r=hi(di(t)).deep_link_id;return(r?hi(di(r)).link:null)||r||n||e||t}class Pu{constructor(e){var n,r,s,i,o,l;const c=hi(di(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=wb((s=c.mode)!==null&&s!==void 0?s:null);de(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ab(e);try{return new Pu(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pu.parseLink(n);return de(r,"argument-error"),Wi._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class __{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uo extends __{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends uo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class lr extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
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
 */class cr extends uo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class ur extends uo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=Mf(r);return new Os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new Os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ba extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function bb(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",r)}/**
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
 */async function Rb(t,e,n=!1){const{auth:r}=t;if(Mn(r.app))return Promise.reject(gr(r));const s="reauthenticate";try{const i=await Hi(t,y_(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Ru(i.idToken);de(o,r,"internal-error");const{sub:l}=o;return de(t.uid===l,r,"user-mismatch"),Os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
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
 */async function v_(t,e,n=!1){if(Mn(t.app))return Promise.reject(gr(t));const r="signIn",s=await y_(t,r,e),i=await Os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Cb(t,e){return v_(Bs(t),e)}/**
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
 */async function Sb(t){const e=Bs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Pb(t,e,n){return Mn(t.app)?Promise.reject(gr(t)):Cb(Ge(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sb(t),r})}function kb(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function Ob(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Db(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function Nb(t){return Ge(t).signOut()}const Ra="__sak";/**
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
 */class E_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vb=1e3,Mb=10;class T_ extends E_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=f_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const xb=T_;/**
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
 */class I_ extends E_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I_.type="SESSION";const w_=I_;/**
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
 */function Lb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Lb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
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
 */function ku(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=ku("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function Ub(t){vn().location.href=t}/**
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
 */function A_(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function Bb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $b(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jb(){return A_()?self:null}/**
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
 */const b_="firebaseLocalStorageDb",qb=1,Ca="firebaseLocalStorage",R_="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function Hb(){const t=indexedDB.deleteDatabase(b_);return new ho(t).toPromise()}function Lc(){const t=indexedDB.open(b_,qb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ca,{keyPath:R_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await Hb(),e(await Lc()))})})}async function xf(t,e,n){const r=ul(t,!0).put({[R_]:e,value:n});return new ho(r).toPromise()}async function Wb(t,e){const n=ul(t,!1).get(e),r=await new ho(n).toPromise();return r===void 0?null:r.value}function Lf(t,e){const n=ul(t,!0).delete(e);return new ho(n).toPromise()}const Kb=800,zb=3;class C_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(jb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bb(),!this.activeServiceWorker)return;this.sender=new Fb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await xf(e,Ra,"1"),await Lf(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ul(s,!1).getAll();return new ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C_.type="LOCAL";const Gb=C_;new co(3e4,6e4);/**
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
 */function Qb(t,e){return e?Fn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yb(t){return v_(t.auth,new Ou(t),t.bypassAuthState)}function Jb(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Rb(n,new Ou(t),t.bypassAuthState)}async function Xb(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),bb(n,new Ou(t),t.bypassAuthState)}/**
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
 */class S_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yb;case"linkViaPopup":case"linkViaRedirect":return Xb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:ln(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zb=new co(2e3,1e4);class fs extends S_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zb.get())};e()}}fs.currentPopupAction=null;/**
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
 */const eR="pendingRedirect",sa=new Map;class tR extends S_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await nR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nR(t,e){const n=iR(e),r=sR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rR(t,e){sa.set(t._key(),e)}function sR(t){return Fn(t._redirectPersistence)}function iR(t){return ra(eR,t.config.apiKey,t.name)}async function oR(t,e,n=!1){if(Mn(t.app))return Promise.reject(gr(t));const r=Bs(t),s=Qb(r,e),o=await new tR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aR=10*60*1e3;class lR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(t);default:return!1}}/**
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
 */async function uR(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const hR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dR=/^https?/;async function fR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uR(t);for(const n of e)try{if(pR(n))return}catch{}ln(t,"unauthorized-domain")}function pR(t){const e=Mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dR.test(n))return!1;if(hR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mR=new co(3e4,6e4);function Uf(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gR(t){return new Promise((e,n)=>{var r,s,i;function o(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(yn(t,"network-request-failed"))},timeout:mR.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=cb("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},m_(`${lb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ia=null,e})}let ia=null;function _R(t){return ia=ia||gR(t),ia}/**
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
 */const yR=new co(5e3,15e3),vR="__/auth/iframe",ER="emulator/auth/iframe",TR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bu(e,ER):`https://${t.config.authDomain}/${vR}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},s=IR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lo(r).slice(1)}`}async function AR(t){const e=await _R(t),n=vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},yR.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RR=500,CR=600,SR="_blank",PR="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kR(t,e,n,r=RR,s=CR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},bR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(l=l_(u)?SR:n),o_(u)&&(e=e||PR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[E,S])=>`${g}${E}=${S},`,"");if(ZA(u)&&l!=="_self")return OR(e||"",l),new Bf(null);const p=window.open(e||"",l,d);de(p,t,"popup-blocked");try{p.focus()}catch{}return new Bf(p)}function OR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DR="__/auth/handler",NR="emulator/auth/handler",VR=encodeURIComponent("fac");async function $f(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:s};if(e instanceof __){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",T0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof uo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${VR}=${encodeURIComponent(c)}`:"";return`${MR(t)}?${lo(l).slice(1)}${u}`}function MR({config:t}){return t.emulator?bu(t,NR):`https://${t.authDomain}/${DR}`}/**
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
 */const oc="webStorageSupport";class xR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=oR,this._overrideRedirectResult=rR}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $f(e,n,r,Mc(),s);return kR(e,o,ku())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $f(e,n,r,Mc(),s);return Ub(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new lR(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f_()||a_()||Cu()}}const LR=xR;var jf="@firebase/auth",qf="1.7.9";/**
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
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(t){qr(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p_(t)},u=new ib(r,s,i,c);return pb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new vr("auth-internal",e=>{const n=Bs(e.getProvider("auth").getImmediate());return(r=>new FR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(jf,qf,UR(t)),_n(jf,qf,"esm2017")}/**
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
 */const $R=5*60,jR=Hg("authIdTokenMaxAge")||$R;let Hf=null;const qR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jR)return;const s=n==null?void 0:n.token;Hf!==s&&(Hf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HR(t=Iu()){const e=ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fb(t,{popupRedirectResolver:LR,persistence:[Gb,xb,w_]}),r=Hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qR(i.toString());Ob(n,o,()=>o(n.currentUser)),kb(n,l=>o(l))}}const s=$g("auth");return s&&mb(n,`http://${s}`),n}function WR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ob({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BR("Browser");var Wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,k_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function y(){}y.prototype=v.prototype,T.D=v.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(b,R,I){for(var m=Array(arguments.length-2),le=2;le<arguments.length;le++)m[le-2]=arguments[le];return v.prototype[R].apply(b,m)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,y){y||(y=0);var b=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)b[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)b[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=T.g[0],y=T.g[1],R=T.g[2];var I=T.g[3],m=v+(I^y&(R^I))+b[0]+3614090360&4294967295;v=y+(m<<7&4294967295|m>>>25),m=I+(R^v&(y^R))+b[1]+3905402710&4294967295,I=v+(m<<12&4294967295|m>>>20),m=R+(y^I&(v^y))+b[2]+606105819&4294967295,R=I+(m<<17&4294967295|m>>>15),m=y+(v^R&(I^v))+b[3]+3250441966&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(I^y&(R^I))+b[4]+4118548399&4294967295,v=y+(m<<7&4294967295|m>>>25),m=I+(R^v&(y^R))+b[5]+1200080426&4294967295,I=v+(m<<12&4294967295|m>>>20),m=R+(y^I&(v^y))+b[6]+2821735955&4294967295,R=I+(m<<17&4294967295|m>>>15),m=y+(v^R&(I^v))+b[7]+4249261313&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(I^y&(R^I))+b[8]+1770035416&4294967295,v=y+(m<<7&4294967295|m>>>25),m=I+(R^v&(y^R))+b[9]+2336552879&4294967295,I=v+(m<<12&4294967295|m>>>20),m=R+(y^I&(v^y))+b[10]+4294925233&4294967295,R=I+(m<<17&4294967295|m>>>15),m=y+(v^R&(I^v))+b[11]+2304563134&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(I^y&(R^I))+b[12]+1804603682&4294967295,v=y+(m<<7&4294967295|m>>>25),m=I+(R^v&(y^R))+b[13]+4254626195&4294967295,I=v+(m<<12&4294967295|m>>>20),m=R+(y^I&(v^y))+b[14]+2792965006&4294967295,R=I+(m<<17&4294967295|m>>>15),m=y+(v^R&(I^v))+b[15]+1236535329&4294967295,y=R+(m<<22&4294967295|m>>>10),m=v+(R^I&(y^R))+b[1]+4129170786&4294967295,v=y+(m<<5&4294967295|m>>>27),m=I+(y^R&(v^y))+b[6]+3225465664&4294967295,I=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(I^v))+b[11]+643717713&4294967295,R=I+(m<<14&4294967295|m>>>18),m=y+(I^v&(R^I))+b[0]+3921069994&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^I&(y^R))+b[5]+3593408605&4294967295,v=y+(m<<5&4294967295|m>>>27),m=I+(y^R&(v^y))+b[10]+38016083&4294967295,I=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(I^v))+b[15]+3634488961&4294967295,R=I+(m<<14&4294967295|m>>>18),m=y+(I^v&(R^I))+b[4]+3889429448&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^I&(y^R))+b[9]+568446438&4294967295,v=y+(m<<5&4294967295|m>>>27),m=I+(y^R&(v^y))+b[14]+3275163606&4294967295,I=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(I^v))+b[3]+4107603335&4294967295,R=I+(m<<14&4294967295|m>>>18),m=y+(I^v&(R^I))+b[8]+1163531501&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(R^I&(y^R))+b[13]+2850285829&4294967295,v=y+(m<<5&4294967295|m>>>27),m=I+(y^R&(v^y))+b[2]+4243563512&4294967295,I=v+(m<<9&4294967295|m>>>23),m=R+(v^y&(I^v))+b[7]+1735328473&4294967295,R=I+(m<<14&4294967295|m>>>18),m=y+(I^v&(R^I))+b[12]+2368359562&4294967295,y=R+(m<<20&4294967295|m>>>12),m=v+(y^R^I)+b[5]+4294588738&4294967295,v=y+(m<<4&4294967295|m>>>28),m=I+(v^y^R)+b[8]+2272392833&4294967295,I=v+(m<<11&4294967295|m>>>21),m=R+(I^v^y)+b[11]+1839030562&4294967295,R=I+(m<<16&4294967295|m>>>16),m=y+(R^I^v)+b[14]+4259657740&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^I)+b[1]+2763975236&4294967295,v=y+(m<<4&4294967295|m>>>28),m=I+(v^y^R)+b[4]+1272893353&4294967295,I=v+(m<<11&4294967295|m>>>21),m=R+(I^v^y)+b[7]+4139469664&4294967295,R=I+(m<<16&4294967295|m>>>16),m=y+(R^I^v)+b[10]+3200236656&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^I)+b[13]+681279174&4294967295,v=y+(m<<4&4294967295|m>>>28),m=I+(v^y^R)+b[0]+3936430074&4294967295,I=v+(m<<11&4294967295|m>>>21),m=R+(I^v^y)+b[3]+3572445317&4294967295,R=I+(m<<16&4294967295|m>>>16),m=y+(R^I^v)+b[6]+76029189&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(y^R^I)+b[9]+3654602809&4294967295,v=y+(m<<4&4294967295|m>>>28),m=I+(v^y^R)+b[12]+3873151461&4294967295,I=v+(m<<11&4294967295|m>>>21),m=R+(I^v^y)+b[15]+530742520&4294967295,R=I+(m<<16&4294967295|m>>>16),m=y+(R^I^v)+b[2]+3299628645&4294967295,y=R+(m<<23&4294967295|m>>>9),m=v+(R^(y|~I))+b[0]+4096336452&4294967295,v=y+(m<<6&4294967295|m>>>26),m=I+(y^(v|~R))+b[7]+1126891415&4294967295,I=v+(m<<10&4294967295|m>>>22),m=R+(v^(I|~y))+b[14]+2878612391&4294967295,R=I+(m<<15&4294967295|m>>>17),m=y+(I^(R|~v))+b[5]+4237533241&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~I))+b[12]+1700485571&4294967295,v=y+(m<<6&4294967295|m>>>26),m=I+(y^(v|~R))+b[3]+2399980690&4294967295,I=v+(m<<10&4294967295|m>>>22),m=R+(v^(I|~y))+b[10]+4293915773&4294967295,R=I+(m<<15&4294967295|m>>>17),m=y+(I^(R|~v))+b[1]+2240044497&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~I))+b[8]+1873313359&4294967295,v=y+(m<<6&4294967295|m>>>26),m=I+(y^(v|~R))+b[15]+4264355552&4294967295,I=v+(m<<10&4294967295|m>>>22),m=R+(v^(I|~y))+b[6]+2734768916&4294967295,R=I+(m<<15&4294967295|m>>>17),m=y+(I^(R|~v))+b[13]+1309151649&4294967295,y=R+(m<<21&4294967295|m>>>11),m=v+(R^(y|~I))+b[4]+4149444226&4294967295,v=y+(m<<6&4294967295|m>>>26),m=I+(y^(v|~R))+b[11]+3174756917&4294967295,I=v+(m<<10&4294967295|m>>>22),m=R+(v^(I|~y))+b[2]+718787259&4294967295,R=I+(m<<15&4294967295|m>>>17),m=y+(I^(R|~v))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(R+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var y=v-this.blockSize,b=this.B,R=this.h,I=0;I<v;){if(R==0)for(;I<=y;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<v;)if(b[R++]=T.charCodeAt(I++),R==this.blockSize){s(this,b),R=0;break}}else for(;I<v;)if(b[R++]=T[I++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var y=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=y&255,y/=256;for(this.u(T),T=Array(16),v=y=0;4>v;++v)for(var b=0;32>b;b+=8)T[y++]=this.g[v]>>>b&255;return T};function i(T,v){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=v(T)}function o(T,v){this.h=v;for(var y=[],b=!0,R=T.length-1;0<=R;R--){var I=T[R]|0;b&&I==v||(y[R]=I,b=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return D(u(-T));for(var v=[],y=1,b=0;T>=y;b++)v[b]=T/y|0,y*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return D(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),b=p,R=0;R<T.length;R+=8){var I=Math.min(8,T.length-R),m=parseInt(T.substring(R,R+I),v);8>I?(I=u(Math.pow(v,I)),b=b.j(I).add(u(m))):(b=b.j(y),b=b.add(u(m)))}return b}var p=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var T=0,v=1,y=0;y<this.g.length;y++){var b=this.i(y);T+=(0<=b?b:4294967296+b)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(O(this))return"-"+D(this).toString(T);for(var v=u(Math.pow(T,6)),y=this,b="";;){var R=B(y,v).g;y=$(y,R.j(v));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=R,S(y))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function O(T){return T.h==-1}t.l=function(T){return T=$(this,T),O(T)?-1:S(T)?0:1};function D(T){for(var v=T.g.length,y=[],b=0;b<v;b++)y[b]=~T.g[b];return new o(y,~T.h).add(g)}t.abs=function(){return O(this)?D(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],b=0,R=0;R<=v;R++){var I=b+(this.i(R)&65535)+(T.i(R)&65535),m=(I>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);b=m>>>16,I&=65535,m&=65535,y[R]=m<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function $(T,v){return T.add(D(v))}t.j=function(T){if(S(this)||S(T))return p;if(O(this))return O(T)?D(this).j(D(T)):D(D(this).j(T));if(O(T))return D(this.j(D(T)));if(0>this.l(E)&&0>T.l(E))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,y=[],b=0;b<2*v;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<T.g.length;R++){var I=this.i(b)>>>16,m=this.i(b)&65535,le=T.i(R)>>>16,J=T.i(R)&65535;y[2*b+2*R]+=m*J,q(y,2*b+2*R),y[2*b+2*R+1]+=I*J,q(y,2*b+2*R+1),y[2*b+2*R+1]+=m*le,q(y,2*b+2*R+1),y[2*b+2*R+2]+=I*le,q(y,2*b+2*R+2)}for(b=0;b<v;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=v;b<2*v;b++)y[b]=0;return new o(y,0)};function q(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function H(T,v){this.g=T,this.h=v}function B(T,v){if(S(v))throw Error("division by zero");if(S(T))return new H(p,p);if(O(T))return v=B(D(T),v),new H(D(v.g),D(v.h));if(O(v))return v=B(T,D(v)),new H(D(v.g),v.h);if(30<T.g.length){if(O(T)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,b=v;0>=b.l(T);)y=Z(y),b=Z(b);var R=F(y,1),I=F(b,1);for(b=F(b,2),y=F(y,2);!S(b);){var m=I.add(b);0>=m.l(T)&&(R=R.add(y),I=m),b=F(b,1),y=F(y,1)}return v=$(T,R.j(v)),new H(R,v)}for(R=p;0<=T.l(v);){for(y=Math.max(1,Math.floor(T.m()/v.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=u(y),m=I.j(v);O(m)||0<m.l(T);)y-=b,I=u(y),m=I.j(v);S(I)&&(I=g),R=R.add(I),T=$(T,m)}return new H(R,T)}t.A=function(T){return B(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)&T.i(b);return new o(y,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)|T.i(b);return new o(y,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],b=0;b<v;b++)y[b]=this.i(b)^T.i(b);return new o(y,this.h^T.h)};function Z(T){for(var v=T.g.length+1,y=[],b=0;b<v;b++)y[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(y,T.h)}function F(T,v){var y=v>>5;v%=32;for(var b=T.g.length-y,R=[],I=0;I<b;I++)R[I]=0<v?T.i(I+y)>>>v|T.i(I+y+1)<<32-v:T.i(I+y);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,k_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ur=o}).apply(typeof Wf<"u"?Wf:typeof self<"u"?self:typeof window<"u"?window:{});var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O_,fi,D_,oa,Fc,N_,V_,M_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $o=="object"&&$o];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var N=f++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,N){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[k].apply(_,G)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,N=_.length||0;a.length=k+N;for(let G=0;G<N;G++)a[k+G]=_[G]}else a.push(_)}}class ${constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var Z=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function F(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let N=0;N<y.length;N++)f=y[N],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function I(a){l.setTimeout(()=>{throw a},0)}function m(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class le{constructor(){this.h=this.g=null}add(h,f){const _=J.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var J=new $(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ye=!1,Ot=new le,Qt=()=>{const a=l.Promise.resolve(void 0);Te=()=>{a.then($t)}};var $t=()=>{for(var a;a=m();){try{a.h.call(a.g)}catch(f){I(f)}var h=J;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function un(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{B(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}S(un,qe);var Ct={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++ee,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,_,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var G=A(a,h,_,k);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new X(h,this.src,N,!!_,k),h.fa=f,a.push(h)),h};function w(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(_,k,1),N&&(ne(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,_){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),M={};function U(a,h,f,_,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)U(a,h[N],f,_,k);return null}return f=ue(f),a&&a[V]?a.K(h,f,u(_)?!!_.capture:!1,k):x(a,h,f,!1,_,k)}function x(a,h,f,_,k,N){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Ve=Q(a);if(Ve||(a[P]=Ve=new Re(a)),f=Ve.add(h,f,_,G,N),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Gn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(W(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=ie;return a}function z(a,h,f,_,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)z(a,h[N],f,_,k);else _=u(_)?!!_.capture:!!_,f=ue(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],f=A(N,f,_,k),-1<f&&(ne(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,_,k)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])w(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(W(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=Q(h))?(w(f,a),f.h==0&&(f.src=null,h[P]=null)):ne(a)}}}function W(a){return a in M?M[a]:M[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new un(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&K(a),a=f.call(_,h)}return a}function Q(a){return a=a[P],a instanceof Re?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ce(){je.call(this),this.i=new Re(this),this.M=this,this.F=null}S(ce,je),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(a,h,f,_){z(this,a,h,f,_)};function _e(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var k=h;h=new qe(_,a),b(h,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var G=h.g=f[N];k=Ie(G,_,!0,h)&&k}if(G=h.g=a,k=Ie(G,_,!0,h)&&k,k=Ie(G,_,!1,h)&&k,f)for(N=0;N<f.length;N++)G=h.g=f[N],k=Ie(G,_,!1,h)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ne(f[_]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ce.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Ie(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var G=h[N];if(G&&!G.da&&G.capture==f){var Ve=G.listener,ot=G.ha||G.src;G.fa&&w(a.i,G),k=Ve.call(ot,_)!==!1&&k}}return k&&!_.defaultPrevented}function rt(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function st(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class jt extends je{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){je.call(this),this.h=a,this.g={}}S(ft,je);var Qn=[];function Ks(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Ks(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,qt=l.JSON.parse,Eo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bl(){}bl.prototype.h=null;function gh(a){return a.h||(a.h=a.i())}function _h(){}var zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rl(){qe.call(this,"d")}S(Rl,qe);function Cl(){qe.call(this,"c")}S(Cl,qe);var br={},yh=null;function To(){return yh=yh||new ce}br.La="serverreachability";function vh(a){qe.call(this,br.La,a)}S(vh,qe);function Gs(a){const h=To();_e(h,new vh(h))}br.STAT_EVENT="statevent";function Eh(a,h){qe.call(this,br.STAT_EVENT,a),this.stat=h}S(Eh,qe);function wt(a){const h=To();_e(h,new Eh(h,a))}br.Ma="timingevent";function Th(a,h){qe.call(this,br.Ma,a),this.size=h}S(Th,qe);function Qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function ev(a,h,f,_,k,N){a.info(function(){if(a.g)if(N)for(var G="",Ve=N.split("&"),ot=0;ot<Ve.length;ot++){var Ce=Ve[ot].split("=");if(1<Ce.length){var pt=Ce[0];Ce=Ce[1];var mt=pt.split("_");G=2<=mt.length&&mt[1]=="type"?G+(pt+"="+Ce+"&"):G+(pt+"=redacted&")}}else G=null;else G=N;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+G})}function tv(a,h,f,_,k,N,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+N+" "+G})}function ts(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+rv(a,f)+(_?" "+_:"")})}function nv(a,h){a.info(function(){return"TIMEOUT: "+h})}Ys.prototype.info=function(){};function rv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return it(f)}catch{return h}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sl;function wo(){}S(wo,bl),wo.prototype.g=function(){return new XMLHttpRequest},wo.prototype.i=function(){return{}},Sl=new wo;function Yn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var Ah={},Pl={};function kl(a,h,f){a.L=1,a.v=Co(Cn(h)),a.m=f,a.P=!0,bh(a,null)}function bh(a,h){a.F=Date.now(),Ao(a),a.A=Cn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Uh(f.i,"t",_),a.C=0,f=a.j.J,a.h=new wh,a.g=rd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new jt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Qn[0]=k.toString()),k=Qn);for(var N=0;N<k.length;N++){var G=U(f,k[N],_||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Gs(),ev(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Sn(this.g);var h=this.g.Ba();const ss=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Kh(this.g)))){this.J||mt!=4||h==7||(h==8||0>=ss?Gs(3):Gs(2)),Ol(this);var f=this.g.Z();this.X=f;t:if(Rh(this)){var _=Kh(this.g);a="";var k=_.length,N=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),Js(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,tv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ot=this.g;if((Ve=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Ve)){var Ce=Ve;break t}}Ce=null}if(f=Ce)ts(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,f);else{this.o=!1,this.s=3,wt(12),Rr(this),Js(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<G.length;)if(Yt=sv(this,G),Yt==Pl){mt==4&&(this.s=4,wt(14),f=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Ah){this.s=4,wt(15),ts(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else ts(this.i,this.l,Yt,null),Dl(this,Yt);if(Rh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||G.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)ts(this.i,this.l,G,"[Invalid Chunked Response]"),Rr(this),Js(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Fl(pt),pt.M=!0,wt(11))}}else ts(this.i,this.l,G,null),Dl(this,G);mt==4&&Rr(this),this.o&&!this.J&&(mt==4?Zh(this.j,this):(this.o=!1,Ao(this)))}else Tv(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Rr(this),Js(this)}}}catch{}finally{}};function Rh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Pl:(f=Number(h.substring(f,_)),isNaN(f)?Ah:(_+=1,_+f>h.length?Pl:(h=h.slice(_,_+f),a.C=_+f,h)))}Yn.prototype.cancel=function(){this.J=!0,Rr(this)};function Ao(a){a.S=Date.now()+a.I,Ch(a,a.I)}function Ch(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qs(g(a.ba,a),h)}function Ol(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(nv(this.i,this.A),this.L!=2&&(Gs(),wt(17)),Rr(this),this.s=2,Js(this)):Ch(this,this.S-a)};function Js(a){a.j.G==0||a.J||Zh(a.j,a)}function Rr(a){Ol(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ks(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Nl(f.h,a))){if(!a.K&&Nl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)No(f),Oo(f);else break e;Ll(f),wt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Qs(g(f.Za,f),6e3));if(1>=kh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Sr(f,11)}else if((a.K||f.g==a)&&No(f),!q(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Ce=k[h];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const pt=Ce[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const mt=Ce[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const ss=Ce[5];ss!=null&&typeof ss=="number"&&0<ss&&(_=1.5*ss,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Yt=a.g;if(Yt){const Mo=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var N=_.h;N.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Vl(N,N.h),N.h=null))}if(_.D){const Ul=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(_.ya=Ul,Fe(_.I,_.D,Ul))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var G=a;if(_.qa=nd(_,_.J?_.ia:null,_.W),G.K){Oh(_.h,G);var Ve=G,ot=_.L;ot&&(Ve.I=ot),Ve.B&&(Ol(Ve),Ao(Ve)),_.g=G}else Jh(_);0<f.i.length&&Do(f)}else Ce[0]!="stop"&&Ce[0]!="close"||Sr(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Sr(f,7):xl(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Gs(4)}catch{}}var iv=class{constructor(a,h){this.g=a,this.map=h}};function Sh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ph(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kh(a){return a.h?1:a.g?a.g.size:0}function Nl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vl(a,h){a.g?a.g.add(h):a.h=h}function Oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Sh.prototype.cancel=function(){if(this.i=Dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function ov(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function av(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Nh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=av(a),_=ov(a),k=_.length,N=0;N<k;N++)h.call(void 0,_[N],f&&f[N],a)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var N=a[f].substring(0,_);k=a[f].substring(_+1)}else N=a[f];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,bo(this,a.j),this.o=a.o,this.g=a.g,Ro(this,a.s),this.l=a.l;var h=a.i,f=new ei;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Mh(this,f),this.m=a.m}else a&&(h=String(a).match(Vh))?(this.h=!1,bo(this,h[1]||"",!0),this.o=Xs(h[2]||""),this.g=Xs(h[3]||"",!0),Ro(this,h[4]),this.l=Xs(h[5]||"",!0),Mh(this,h[6]||"",!0),this.m=Xs(h[7]||"")):(this.h=!1,this.i=new ei(null,this.h))}Cr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Zs(h,xh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zs(h,xh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Zs(f,f.charAt(0)=="/"?hv:uv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Zs(f,fv)),a.join("")};function Cn(a){return new Cr(a)}function bo(a,h,f){a.j=f?Xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ro(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mh(a,h,f){h instanceof ei?(a.i=h,pv(a.i,a.h)):(f||(h=Zs(h,dv)),a.i=new ei(h,a.h))}function Fe(a,h,f){a.i.set(h,f)}function Co(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,cv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xh=/[#\/\?@]/g,uv=/[#\?:]/g,hv=/[#\?]/g,dv=/[#\?@]/g,fv=/#/g;function ei(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&lv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ei.prototype,t.add=function(a,h){Jn(this),this.i=null,a=ns(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Lh(a,h){Jn(a),h=ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fh(a,h){return Jn(a),h=ns(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let N=0;N<k.length;N++)f.push(h[_])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")Fh(this,a)&&(h=h.concat(this.g.get(ns(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=ns(this,a),Fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Uh(a,h,f){Lh(a,h),0<f.length&&(a.i=null,a.g.set(ns(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const N=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var k=N;G[_]!==""&&(k+="="+encodeURIComponent(String(G[_]))),a.push(k)}}return this.i=a.join("&")};function ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pv(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(Lh(this,_),Uh(this,k,f))},a)),a.j=h}function mv(a,h){const f=new Ys;if(l.Image){const _=new Image;_.onload=E(Xn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Xn,f,"TestLoadImage: error",!1,h,_),_.onabort=E(Xn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Xn,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function gv(a,h){const f=new Ys,_=new AbortController,k=setTimeout(()=>{_.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(k),N.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function _v(){this.g=new Eo}function yv(a,h,f){const _=f||"";try{Nh(a,function(k,N){let G=k;u(k)&&(G=it(k)),h.push(_+N+"="+encodeURIComponent(G))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function So(a){this.l=a.Ub||null,this.j=a.eb||!1}S(So,bl),So.prototype.g=function(){return new Po(this.l,this.j)},So.prototype.i=function(a){return function(){return a}}({});function Po(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Po,ce),t=Po.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ti(this):ni(this),this.readyState==3&&Bh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Qa=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ni(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $h(a){let h="";return F(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Ml(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=$h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,h,f))}function We(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,ce);var vv=/^https?$/i,Ev=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sl.g(),this.v=this.o?gh(this.o):gh(Sl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){jh(this,N);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())f.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ev,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of f)this.g.setRequestHeader(N,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){jh(this,N)}};function jh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,qh(a),ko(a)}function qh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hh(this):this.bb())},t.bb=function(){Hh(this)};function Hh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)rt(a.Ea,0,a);else if(_e(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=G===0){var k=String(a.D).match(Vh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!vv.test(k?k.toLowerCase():"")}f=_}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var N=2<Sn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",qh(a)}}finally{ko(a)}}}}function ko(a,h){if(a.g){Wh(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=_}catch{}}}function Wh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qt(h)}};function Kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Tv(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(q(a[_]))continue;var f=R(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[k]||[];h[k]=N,N.push(f)}T(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function zh(a){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,a),this.cb=ri("retryDelaySeedMs",1e4,a),this.Wa=ri("forwardChannelMaxRetries",2,a),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Sh(a&&a.concurrentRequestLimit),this.Da=new _v,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){wt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=nd(this,null,this.W),Do(this)};function xl(a){if(Gh(a),a.G==3){var h=a.U++,f=Cn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),si(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Co(Cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=rd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ao(h)}td(a)}function Oo(a){a.g&&(Fl(a),a.g.cancel(),a.g=null)}function Gh(a){Oo(a),a.u&&(l.clearTimeout(a.u),a.u=null),No(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Do(a){if(!Ph(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||Qt(),ye||(Te(),ye=!0),Ot.add(h,a),a.B=0}}function Iv(a,h){return kh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qs(g(a.Ga,a,h),ed(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Yn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),b(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Yh(this,k,h),f=Cn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),si(this,f),N&&(this.O?h="headers="+encodeURIComponent(String($h(N)))+"&"+h:this.m&&Ml(f,this.m,N)),Vl(this.h,k),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),k.T=!0,kl(k,f,null)):kl(k,f,h),this.G=2}}else this.G==3&&(a?Qh(this,a):this.i.length==0||Ph(this.h)||Qh(this))};function Qh(a,h){var f;h?f=h.l:f=a.U++;const _=Cn(a.I);Fe(_,"SID",a.K),Fe(_,"RID",f),Fe(_,"AID",a.T),si(a,_),a.m&&a.o&&Ml(_,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vl(a.h,f),kl(f,_,h)}function si(a,h){a.H&&F(a.H,function(f,_){Fe(h,_,f)}),a.l&&Nh({},function(f,_){Fe(h,_,f)})}function Yh(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const G=["count="+f];N==-1?0<f?(N=k[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let Ve=!0;for(let ot=0;ot<f;ot++){let Ce=k[ot].g;const pt=k[ot].map;if(Ce-=N,0>Ce)N=Math.max(0,k[ot].g-100),Ve=!1;else try{yv(pt,G,"req"+Ce+"_")}catch{_&&_(pt)}}if(Ve){_=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Jh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||Qt(),ye||(Te(),ye=!0),Ot.add(h,a),a.v=0}}function Ll(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qs(g(a.Fa,a),ed(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Oo(this),Xh(this))};function Fl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xh(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),si(a,h),a.m&&a.o&&Ml(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Co(Cn(h)),f.m=null,f.P=!0,bh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Oo(this),Ll(this),wt(19))};function No(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zh(a,h){var f=null;if(a.g==h){No(a),Fl(a),a.g=null;var _=2}else if(Nl(a.h,h))f=h.D,Oh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=To(),_e(_,new Th(_,f)),Do(a)}else Jh(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&Iv(a,h)||_==2&&Ll(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function ed(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Sr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const k=!_;_=new Cr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bo(_,"https"),Co(_),k?mv(_.toString(),f):gv(_.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(h),td(a),Gh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function td(a){if(a.G=0,a.ka=[],a.l){const h=Dh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function nd(a,h,f){var _=f instanceof Cr?Cn(f):new Cr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ro(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new Cr(null);_&&bo(N,_),h&&(N.g=h),k&&Ro(N,k),f&&(N.l=f),_=N}return f=a.D,h=a.ya,f&&h&&Fe(_,f,h),Fe(_,"VER",a.la),si(a,_),_}function rd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new So({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sd(){}t=sd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vo(){}Vo.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ce.call(this),this.g=new zh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new rs(this)}S(Dt,ce),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){xl(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=it(a),a=f);h.i.push(new iv(h.Ya++,a)),h.G==3&&Do(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,Dt.aa.N.call(this)};function id(a){Rl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(id,Rl);function od(){Cl.call(this),this.status=1}S(od,Cl);function rs(a){this.g=a}S(rs,sd),rs.prototype.ua=function(){_e(this.g,"a")},rs.prototype.ta=function(a){_e(this.g,new id(a))},rs.prototype.sa=function(a){_e(this.g,new od)},rs.prototype.ra=function(){_e(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,M_=function(){return new Vo},V_=function(){return To()},N_=br,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,oa=Io,Ih.COMPLETE="complete",D_=Ih,_h.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",ce.prototype.listen=ce.prototype.K,fi=_h,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,O_=We}).apply(typeof $o<"u"?$o:typeof self<"u"?self:typeof window<"u"?window:{});const Kf="@firebase/firestore";/**
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
 */let js="10.14.0";/**
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
 */const Wr=new Eu("@firebase/firestore");function li(){return Wr.logLevel}function re(t,...e){if(Wr.logLevel<=Ee.DEBUG){const n=e.map(Du);Wr.debug(`Firestore (${js}): ${t}`,...n)}}function Wn(t,...e){if(Wr.logLevel<=Ee.ERROR){const n=e.map(Du);Wr.error(`Firestore (${js}): ${t}`,...n)}}function Ds(t,...e){if(Wr.logLevel<=Ee.WARN){const n=e.map(Du);Wr.warn(`Firestore (${js}): ${t}`,...n)}}function Du(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function De(t,e){t||fe()}function me(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class x_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class zR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GR{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new x_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new _t(e)}}class QR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new JR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class L_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Ki{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const eC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ki{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return eC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Ue.fromString(e))}static fromName(e){return new ae(Ue.fromString(e).popFirst(5))}static empty(){return new ae(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Ue(e.slice()))}}function tC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new Er(s,ae.empty(),e)}function nC(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(pe.min(),ae.empty(),-1)}static max(){return new Er(pe.max(),ae.empty(),-1)}}function rC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const sC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==sC)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function oC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nu.oe=-1;function hl(t){return t==null}function Sa(t){return t===0&&1/t==-1/0}function aC(t){return typeof t=="number"&&Number.isInteger(t)&&!Sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function zf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gf(this.data.getIterator())}getIteratorFrom(e){return new Gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ht(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class U_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new U_("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const lC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(De(!!t),typeof t=="string"){let e=0;const n=lC.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mu(t){const e=t.mapValue.fields.__previous_value__;return Vu(e)?Mu(e):e}function zi(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class cC{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qo={mapValue:{}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:hC(t)?9007199254740991:uC(t)?10:11:fe()}function wn(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),l=Tr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Kr(s.bytesValue).isEqual(Kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?Sa(o)===Sa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zf(o)!==zf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function Qi(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Qf(t.timestampValue,e.timestampValue);case 4:return Qf(zi(t),zi(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Kr(i),c=Kr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Pe(l[u],c[u]);if(d!==0)return d}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(ze(i.latitude),ze(o.latitude));return l!==0?l:Pe(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,O=Pe(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Yf(E,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qo.mapValue&&o===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Pe(c[p],d[p]);if(g!==0)return g;const E=Vs(l[c[p]],u[d[p]]);if(E!==0)return E}return Pe(c.length,d.length)}(t.mapValue,e.mapValue);default:throw fe()}}function Qf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Tr(t),r=Tr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Yf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Vs(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function Ms(t){return Uc(t)}function Uc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uc(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function Jf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bc(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Xf(t){return!!t&&"nullValue"in t}function Zf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function uC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ri(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ri(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ri(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Ri(this.value))}}function B_(t){const e=[];return Xr(t.fields,(n,r)=>{const s=new ut([n]);if(aa(r)){const i=B_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,pe.min(),pe.min(),pe.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,pe.min(),pe.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,pe.min(),pe.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pa{constructor(e,n){this.position=e,this.inclusive=n}}function ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function dC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $_{}class Ye extends $_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pC(e,n,r):n==="array-contains"?new _C(e,r):n==="in"?new yC(e,r):n==="not-in"?new vC(e,r):n==="array-contains-any"?new EC(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mC(e,r):new gC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends $_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return j_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function j_(t){return t.op==="and"}function q_(t){return fC(t)&&j_(t)}function fC(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function $c(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(q_(t))return t.filters.map(e=>$c(e)).join(",");{const e=t.filters.map(n=>$c(n)).join(",");return`${t.op}(${e})`}}function H_(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&H_(o,s.filters[l]),!0):!1}(t,e):void fe()}function W_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(W_).join(" ,")+"}"}(t):"Filter"}class pC extends Ye{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class mC extends Ye{constructor(e,n){super(e,"in",n),this.keys=K_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gC extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=K_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class _C extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&Qi(n.arrayValue,this.value)}}class yC extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class vC extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qi(this.value.arrayValue,n)}}class EC extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qi(this.value.arrayValue,r))}}/**
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
 */class TC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function np(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TC(t,e,n,r,s,i,o)}function Lu(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$c(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function Fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tp(t.startAt,e.startAt)&&tp(t.endAt,e.endAt)}function jc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IC(t,e,n,r,s,i,o,l){return new qs(t,e,n,r,s,i,o,l)}function Uu(t){return new qs(t)}function rp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function z_(t){return t.collectionGroup!==null}function Ci(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yi(i,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Yi(ut.keyField(),r))}return e.ce}function En(t){const e=me(t);return e.le||(e.le=wC(e,Ci(t))),e.le}function wC(t,e){if(t.limitType==="F")return np(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)});const n=t.endAt?new Pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pa(t.startAt.position,t.startAt.inclusive):null;return np(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qc(t,e){const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hc(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dl(t,e){return Fu(En(t),En(e))&&t.limitType===e.limitType}function G_(t){return`${Lu(En(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>W_(s)).join(", ")}]`),hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=ep(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,l,c){const u=ep(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ci(r),s))}(t,e)}function AC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q_(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=bC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bC(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Vs(c,u):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return F_(this.inner)}size(){return this.innerSize}}/**
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
 */const RC=new He(ae.comparator);function Kn(){return RC}const Y_=new He(ae.comparator);function pi(...t){let e=Y_;for(const n of t)e=e.insert(n.key,n);return e}function J_(t){let e=Y_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return Si()}function X_(){return Si()}function Si(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const CC=new He(ae.comparator),SC=new ht(ae.comparator);function ve(...t){let e=SC;for(const n of t)e=e.add(n);return e}const PC=new ht(Pe);function kC(){return PC}/**
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
 */function Bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function Z_(t){return{integerValue:""+t}}function OC(t,e){return aC(e)?Z_(e):Bu(t,e)}/**
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
 */class pl{constructor(){this._=void 0}}function DC(t,e,n){return t instanceof ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vu(i)&&(i=Mu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ji?ty(t,e):t instanceof Xi?ny(t,e):function(s,i){const o=ey(s,i),l=sp(o)+sp(s.Pe);return Bc(o)&&Bc(s.Pe)?Z_(l):Bu(s.serializer,l)}(t,e)}function NC(t,e,n){return t instanceof Ji?ty(t,e):t instanceof Xi?ny(t,e):n}function ey(t,e){return t instanceof Oa?function(r){return Bc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ka extends pl{}class Ji extends pl{constructor(e){super(),this.elements=e}}function ty(t,e){const n=ry(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xi extends pl{constructor(e){super(),this.elements=e}}function ny(t,e){let n=ry(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class Oa extends pl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sp(t){return ze(t.integerValue||t.doubleValue)}function ry(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ji&&s instanceof Ji||r instanceof Xi&&s instanceof Xi?Ns(r.elements,s.elements,wn):r instanceof Oa&&s instanceof Oa?wn(r.Pe,s.Pe):r instanceof ka&&s instanceof ka}(t.transform,e.transform)}class MC{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ml{}function sy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gl(t.key,zt.none()):new mo(t.key,t.data,zt.none());{const n=t.data,r=kt.empty();let s=new ht(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ar(t.key,r,new Ft(s.toArray()),zt.none())}}function xC(t,e,n){t instanceof mo?function(s,i,o){const l=s.value.clone(),c=op(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(s,i,o){if(!la(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=op(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(iy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,r){return t instanceof mo?function(i,o,l,c){if(!la(i.precondition,o))return l;const u=i.value.clone(),d=ap(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,o,l,c){if(!la(i.precondition,o))return l;const u=ap(i.fieldTransforms,c,o),d=o.data;return d.setAll(iy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return la(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ey(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>VC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mo extends ml{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends ml{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function op(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,NC(o,l,n[s]))}return r}function ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DC(i,o,e))}return r}class gl extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FC extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=X_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=sy(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>ip(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>ip(n,r))}}class $u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return CC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $u(e,n,r,s)}}/**
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
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,we;function jC(t){switch(t){default:return fe();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function oy(t){if(t===void 0)return Wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Qe.OK:return L.OK;case Qe.CANCELLED:return L.CANCELLED;case Qe.UNKNOWN:return L.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return L.INTERNAL;case Qe.UNAVAILABLE:return L.UNAVAILABLE;case Qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Qe.NOT_FOUND:return L.NOT_FOUND;case Qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Qe.ABORTED:return L.ABORTED;case Qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Qe.DATA_LOSS:return L.DATA_LOSS;default:return fe()}}(we=Qe||(Qe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qC(){return new TextEncoder}/**
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
 */const HC=new Ur([4294967295,4294967295],0);function lp(t){const e=qC().encode(t),n=new k_;return n.update(e),new Uint8Array(n.digest())}function cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(HC)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=lp(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ju(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=lp(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _l{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _l(pe.min(),s,new He(Pe),Kn(),ve())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,ve(),ve(),ve())}}/**
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
 */class ca{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ay{constructor(e,n){this.targetId=e,this.me=n}}class ly{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class up{constructor(){this.fe=0,this.ge=dp(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=dp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=hp(),this.Qe=new He(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jc(i))if(r===0){const o=new ae(i.path);this.Ue(n,o,Et.newNoDocument(o,pe.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Kr(r).toUint8Array()}catch(c){if(c instanceof U_)return Ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ju(o,s,i)}catch(c){return Ds(c instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&jc(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Et.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _l(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=hp(),this.Qe=new He(Pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new up,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new up),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hp(){return new He(ae.comparator)}function dp(){return new He(ae.comparator)}const KC={asc:"ASCENDING",desc:"DESCENDING"},zC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GC={and:"AND",or:"OR"};class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wc(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YC(t,e){return Da(t,e.toTimestamp())}function Tn(t){return De(!!t),pe.fromTimestamp(function(n){const r=Tr(n);return new Ze(r.seconds,r.nanos)}(t))}function qu(t,e){return Kc(t,e).canonicalString()}function Kc(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uy(t){const e=Ue.fromString(t);return De(my(e)),e}function zc(t,e){return qu(t.databaseId,e.path)}function ac(t,e){const n=uy(e);if(n.get(1)!==t.databaseId.projectId)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(dy(n))}function hy(t,e){return qu(t.databaseId,e)}function JC(t){const e=uy(t);return e.length===4?Ue.emptyPath():dy(e)}function Gc(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dy(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fp(t,e,n){return{name:zc(t,e),fields:n.value.mapValue.fields}}function XC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(De(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?L.UNKNOWN:oy(u.code);return new te(d,u.message||"")}(o);n=new ly(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):pe.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ca(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?Tn(r.readTime):pe.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ca([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new $C(s,i),l=r.targetId;n=new ay(l,o)}}return n}function ZC(t,e){let n;if(e instanceof mo)n={update:fp(t,e.key,e.value)};else if(e instanceof gl)n={delete:zc(t,e.key)};else if(e instanceof Ar)n={update:fp(t,e.key,e.data),updateMask:lS(e.fieldMask)};else{if(!(e instanceof FC))return fe();n={verify:zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function eS(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(pe.min())&&(o=Tn(i)),new MC(o,s.transformResults||[])}(n,e))):[]}function tS(t,e){return{documents:[hy(t,e.path)]}}function nS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hy(t,s);const i=function(u){if(u.length!==0)return py(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:hs(g.field),direction:iS(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function rS(t){let e=JC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=fy(p);return g instanceof cn&&q_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Yi(ds(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,hl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Pa(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new Pa(E,g)}(n.endAt)),IC(e,s,o,i,l,"F",c,u)}function sS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>fy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function iS(t){return KC[t]}function oS(t){return zC[t]}function aS(t){return GC[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return ut.fromServerFormat(t.fieldPath)}function py(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Zf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(Xf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(Xf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:oS(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>py(s));return r.length===1?r[0]:{compositeFilter:{op:aS(n.op),filters:r}}}(t):fe()}function lS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function my(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cS{constructor(e){this.ct=e}}function uS(t){const e=rS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hc(e,e.limit,"L"):e}/**
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
 */class hS{constructor(){this.un=new dS}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Er.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class dS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Ue.comparator)).toArray()}}/**
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
 */class xs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xs(0)}static kn(){return new xs(-1)}}/**
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
 */class fS{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pi(r.mutation,s,Ft.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=Si(),l=function(){return Si()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ar)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Pi(d.mutation,u,d.mutation.getFieldMask(),Ze.now())):o.set(u.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new pS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new He((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Ft.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=X_();d.forEach(g=>{if(!i.has(g)){const E=sy(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):z_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Mr());let l=-1,c=i;return o.next(u=>j.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(d=>({batchId:l,changes:J_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,g){return new qs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let l=pi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Pi(d.mutation,u,Ft.empty(),Ze.now()),fl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class gS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:uS(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class _S{constructor(){this.overlays=new He(ae.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Mr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class yS{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Hu{constructor(){this.Tr=new ht(tt.Er),this.dr=new ht(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new Ue([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new Ue([])),r=new tt(n,e),s=new tt(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||Pe(e.wr,n.wr)}static Ar(e,n){return Pe(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
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
 */class vS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(tt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Pe);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ae(i),0);let l=new ht(Pe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ES{constructor(e){this.Mr=e,this.docs=function(){return new He(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rC(nC(d),r)<=0||(s.has(d.key)||fl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TS(this)}getSize(e){return j.resolve(this.size)}}class TS extends fS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class IS{constructor(e){this.persistence=e,this.Nr=new Hs(n=>Lu(n),Fu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hu,this.targetCount=0,this.kr=xs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class wS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Nu(0),this.Kr=!1,this.Kr=!0,this.$r=new yS,this.referenceDelegate=e(this),this.Ur=new IS(this),this.indexManager=new hS,this.remoteDocumentCache=function(s){return new ES(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new cS(n),this.Gr=new gS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _S,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new vS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new AS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class AS extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Jr=new Hu,this.Yr=null}static Zr(e){return new Wu(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=ae.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ku(e,n.fromCache,r,s)}}/**
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
 */class bS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return m0()?8:oC(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(li()<=Ee.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(li()<=Ee.DEBUG&&re("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(li()<=Ee.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):j.resolve())}Yi(e,n){if(rp(n))return j.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hc(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Hc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return rp(n)||s.isEqual(pe.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(li()<=Ee.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),us(n)),this.rs(e,o,n,tC(s,-1)).next(l=>l))})}ts(e,n){let r=new ht(Q_(e));return n.forEach((s,i)=>{fl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return li()<=Ee.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",us(n)),this.Ji.getDocumentsMatchingQuery(e,n,Er.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class CS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new He(Pe),this._s=new Hs(i=>Lu(i),Fu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function SS(t,e,n,r){return new CS(t,e,n,r)}async function gy(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function PS(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let E=j.resolve();return g.forEach(S=>{E=E.next(()=>d.getEntry(c,S)).next(O=>{const D=u.docVersions.get(S);De(D!==null),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _y(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function kS(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(O,D,$){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,E,d)&&l.push(n.Ur.updateTargetData(i,E))});let c=Kn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(OS(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(pe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function OS(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):re("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function DS(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NS(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qc(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!po(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function pp(t,e,n){const r=me(t);let s=pe.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=me(c),g=p._s.get(d);return g!==void 0?j.resolve(p.os.get(g)):p.Ur.getTargetData(u,d)}(r,o,En(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:ve())).next(l=>(VS(r,AC(e),l),{documents:l,Ts:i})))}function VS(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class mp{constructor(){this.activeTargetIds=kC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MS{constructor(){this.so=new mp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xS{_o(e){}shutdown(){}}/**
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
 */class gp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function lc(){return Ho===null?Ho=function(){return 268435456+Math.round(2147483648*Math.random())}():Ho++,"0x"+Ho.toString(16)}/**
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
 */const LS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class FS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class US extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=lc(),c=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ds("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=LS[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=lc();return new Promise((o,l)=>{const c=new O_;c.setWithCredentials(!0),c.listenOnce(D_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oa.NO_ERROR:const d=c.getResponseJson();re(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case oa.TIMEOUT:re(gt,`RPC '${e}' ${i} timed out`),l(new te(L.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const p=c.getStatus();if(re(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const S=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf($)>=0?$:L.UNKNOWN}(E.status);l(new te(S,E.message))}else l(new te(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(L.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{re(gt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(gt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=lc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=M_(),l=V_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(gt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,E=!1;const S=new FS({Io:D=>{E?re(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(re(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),re(gt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),O=(D,$,q)=>{D.listen($,H=>{try{q(H)}catch(B){setTimeout(()=>{throw B},0)}})};return O(p,fi.EventType.OPEN,()=>{E||(re(gt,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),O(p,fi.EventType.CLOSE,()=>{E||(E=!0,re(gt,`RPC '${e}' stream ${s} transport closed`),S.So())}),O(p,fi.EventType.ERROR,D=>{E||(E=!0,Ds(gt,`RPC '${e}' stream ${s} transport errored:`,D),S.So(new te(L.UNAVAILABLE,"The operation could not be completed")))}),O(p,fi.EventType.MESSAGE,D=>{var $;if(!E){const q=D.data[0];De(!!q);const H=q,B=H.error||(($=H[0])===null||$===void 0?void 0:$.error);if(B){re(gt,`RPC '${e}' stream ${s} received error:`,B);const Z=B.status;let F=function(y){const b=Qe[y];if(b!==void 0)return oy(b)}(Z),T=B.message;F===void 0&&(F=L.INTERNAL,T="Unknown error status: "+Z+" with message "+B.message),E=!0,S.So(new te(F,T)),p.close()}else re(gt,`RPC '${e}' stream ${s} received:`,q),S.bo(q)}}),O(l,N_.STAT_EVENT,D=>{D.stat===Fc.PROXY?re(gt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Fc.NOPROXY&&re(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function cc(){return typeof document<"u"?document:null}/**
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
 */function yl(t){return new QC(t,!0)}/**
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
 */class yy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class vy{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new yy(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new te(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BS extends vy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=XC(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Tn(o.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=jc(c)?{documents:tS(i,c)}:{query:nS(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=cy(i,o.resumeToken);const u=Wc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Da(i,o.snapshotVersion.toTimestamp());const u=Wc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=sS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.a_(n)}}class $S extends vy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eS(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZC(this.serializer,r))};this.a_(n)}}/**
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
 */class jS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Kc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Kc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class HS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.L_.add(4),await _o(u),u.q_.set("Unknown"),u.L_.delete(4),await vl(u)}(this))})}),this.q_=new qS(r,s)}}async function vl(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function _o(t){for(const e of t.B_)await e(!1)}function Ey(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Yu(n)?Qu(n):Ws(n).r_()&&Gu(n,e))}function zu(t,e){const n=me(t),r=Ws(n);n.N_.delete(e),r.r_()&&Ty(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function Gu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).A_(e)}function Ty(t,e){t.Q_.xe(e),Ws(t).R_(e)}function Qu(t){t.Q_=new WC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.q_.v_()}function Yu(t){return Zr(t)&&!Ws(t).n_()&&t.N_.size>0}function Zr(t){return me(t).L_.size===0}function Iy(t){t.Q_=void 0}async function WS(t){t.q_.set("Online")}async function KS(t){t.N_.forEach((e,n)=>{Gu(t,e)})}async function zS(t,e){Iy(t),Yu(t)?(t.q_.M_(e),Qu(t)):t.q_.set("Unknown")}async function GS(t,e,n){if(t.q_.set("Online"),e instanceof ly&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Na(t,r)}else if(e instanceof ca?t.Q_.Ke(e):e instanceof ay?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await _y(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ty(i,c);const p=new hr(d.target,c,u,d.sequenceNumber);Gu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await Na(t,r)}}async function Na(t,e,n){if(!po(e))throw e;t.L_.add(1),await _o(t),t.q_.set("Offline"),n||(n=()=>_y(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vl(t)})}function wy(t,e){return e().catch(n=>Na(t,n,e))}async function El(t){const e=me(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;QS(e);)try{const s=await DS(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,YS(e,s)}catch(s){await Na(e,s)}Ay(e)&&by(e)}function QS(t){return Zr(t)&&t.O_.length<10}function YS(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ay(t){return Zr(t)&&!Ir(t).n_()&&t.O_.length>0}function by(t){Ir(t).start()}async function JS(t){Ir(t).p_()}async function XS(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function ZS(t,e,n){const r=t.O_.shift(),s=$u.from(r,e,n);await wy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await El(t)}async function eP(t,e){e&&Ir(t).V_&&await async function(r,s){if(function(o){return jC(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();Ir(r).s_(),await wy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await El(r)}}(t,e),Ay(t)&&by(t)}async function _p(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await _o(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vl(n)}async function tP(t,e){const n=me(t);e?(n.L_.delete(2),await vl(n)):e||(n.L_.add(2),await _o(n),n.q_.set("Unknown"))}function Ws(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new BS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:WS.bind(null,t),Ro:KS.bind(null,t),mo:zS.bind(null,t),d_:GS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Yu(t)?Qu(t):t.q_.set("Unknown")):(await t.K_.stop(),Iy(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new $S(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:JS.bind(null,t),mo:eP.bind(null,t),f_:XS.bind(null,t),g_:ZS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await El(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ju(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xu(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),po(t))return new te(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class yp{constructor(){this.W_=new He(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ls(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rP{constructor(){this.queries=vp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=vp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new te(L.ABORTED,"Firestore shutting down"))}}function vp(){return new Hs(t=>G_(t),dl)}async function sP(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new nP,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Xu(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Zu(n)}async function iP(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oP(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Zu(n)}function aP(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Zu(t){t.Y_.forEach(e=>{e.next()})}var Yc,Ep;(Ep=Yc||(Yc={})).ea="default",Ep.Cache="cache";class lP{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Yc.Cache}}/**
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
 */class Ry{constructor(e){this.key=e}}class Cy{constructor(e){this.key=e}}class cP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=Q_(e),this.Ra=new bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new yp,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),E=fl(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),O=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;g&&E?g.data.isEqual(E.data)?S!==O&&(r.track({type:3,doc:E}),D=!0):this.ga(g,E)||(r.track({type:2,doc:E}),D=!0,(c&&this.Aa(E,c)>0||u&&this.Aa(E,u)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),D=!0):g&&!E&&(r.track({type:1,doc:g}),D=!0,(c||u)&&(l=!0)),D&&(E?(o=o.add(E),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,S){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return O(E)-O(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ls(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Cy(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Ry(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hP{constructor(e){this.key=e,this.va=!1}}class dP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Hs(l=>G_(l),dl),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ae.comparator),this.Na=new Map,this.La=new Hu,this.Ba={},this.ka=new Map,this.qa=xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fP(t,e,n=!0){const r=Ny(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Sy(r,e,n,!0),s}async function pP(t,e){const n=Ny(t);await Sy(n,e,!0,!1)}async function Sy(t,e,n,r){const s=await NS(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await mP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ey(t.remoteStore,s),l}async function mP(t,e,n,r,s){t.Ka=(p,g,E)=>async function(O,D,$,q){let H=D.view.ma($);H.ns&&(H=await pp(O.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,H)));const B=q&&q.targetChanges.get(D.targetId),Z=q&&q.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(H,O.isPrimaryClient,B,Z);return Ip(O,D.targetId,F.wa),F.snapshot}(t,p,g,E);const i=await pp(t.localStore,e,!0),o=new cP(e,i.Ts),l=o.ma(i.documents),c=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Ip(t,n,u.wa);const d=new uP(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function gP(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!dl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&zu(r.remoteStore,s.targetId),Jc(r,s.targetId)}).catch(fo)):(Jc(r,s.targetId),await Qc(r.localStore,s.targetId,!0))}async function _P(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zu(n.remoteStore,r.targetId))}async function yP(t,e,n){const r=bP(t);try{const s=await function(o,l){const c=me(o),u=Ze.now(),d=l.reduce((E,S)=>E.add(S.key),ve());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=Kn(),O=ve();return c.cs.getEntries(E,d).next(D=>{S=D,S.forEach(($,q)=>{q.isValidDocument()||(O=O.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,S)).next(D=>{p=D;const $=[];for(const q of l){const H=LC(q,p.get(q.key).overlayedDocument);H!=null&&$.push(new Ar(q.key,H,B_(H.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,$,l)}).next(D=>{g=D;const $=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(E,D.batchId,$)})}).then(()=>({batchId:g.batchId,changes:J_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new He(Pe)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await yo(r,s.changes),await El(r.remoteStore)}catch(s){const i=Xu(s,"Failed to persist write");n.reject(i)}}async function Py(t,e){const n=me(t);try{const r=await kS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?De(o.va):s.removedDocuments.size>0&&(De(o.va),o.va=!1))}),await yo(n,r,e)}catch(r){await fo(r)}}function Tp(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&Zu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vP(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new He(ae.comparator);o=o.insert(i,Et.newNoDocument(i,pe.min()));const l=ve().add(i),c=new _l(pe.min(),new Map,new He(Pe),o,l);await Py(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),eh(r)}else await Qc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(fo)}async function EP(t,e){const n=me(t),r=e.batch.batchId;try{const s=await PS(n.localStore,e);Oy(n,r,null),ky(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,s)}catch(s){await fo(s)}}async function TP(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Oy(r,e,n),ky(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,s)}catch(s){await fo(s)}}function ky(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Oy(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Dy(t,r)})}function Dy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(zu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),eh(t))}function Ip(t,e,n){for(const r of n)r instanceof Ry?(t.La.addReference(r.key,e),IP(t,r)):r instanceof Cy?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Dy(t,r.key)):fe()}function IP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),eh(t))}function eh(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(Ue.fromString(e)),r=t.qa.next();t.Na.set(r,new hP(n)),t.Oa=t.Oa.insert(n,r),Ey(t.remoteStore,new hr(En(Uu(n.path)),r,"TargetPurposeLimboResolution",Nu.oe))}}async function yo(t,e,n){const r=me(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ku.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,g=>j.forEach(g.$i,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>j.forEach(g.Ui,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!po(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=d.os.get(g),S=E.snapshotVersion,O=E.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(g,O)}}}(r.localStore,i))}async function wP(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await gy(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new te(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.hs)}}function AP(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Ny(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vP.bind(null,e),e.Ca.d_=oP.bind(null,e.eventManager),e.Ca.$a=aP.bind(null,e.eventManager),e}function bP(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TP.bind(null,e),e}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return SS(this.persistence,new RS,e.initialUser,this.serializer)}Ga(e){return new wS(Wu.Zr,this.serializer)}Wa(e){return new MS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Va.provider={build:()=>new Va};class Xc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wP.bind(null,this.syncEngine),await tP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rP}()}createDatastore(e){const n=yl(e.databaseInfo.databaseId),r=function(i){return new US(i)}(e.databaseInfo);return function(i,o,l,c){return new jS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new HS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tp(this.syncEngine,n,0),function(){return gp.D()?new gp:new xS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new dP(s,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await _o(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xc.provider={build:()=>new Xc};/**
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
 */class RP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=L_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SP(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_p(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_p(e.remoteStore,s)),t._onlineComponents=e}async function SP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new Va)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await uc(t,new Va);return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await wp(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await wp(t,new Xc))),t._onlineComponents}function PP(t){return Vy(t).then(e=>e.syncEngine)}async function Ap(t){const e=await Vy(t),n=e.eventManager;return n.onListen=fP.bind(null,e.syncEngine),n.onUnlisten=gP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_P.bind(null,e.syncEngine),n}/**
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
 */function My(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bp=new Map;/**
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
 */function xy(t,e,n){if(!n)throw new te(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kP(t,e,n,r){if(e===!0&&r===!0)throw new te(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rp(t){if(!ae.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cp(t){if(ae.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tl(t);throw new te(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=My((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Il{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KR;switch(r.type){case"firstParty":return new YR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bp.get(n);r&&(re("ComponentProvider","Removing Datastore"),bp.delete(n),r.terminate())}(this),Promise.resolve()}}function OP(t,e,n,r={}){var s;const i=(t=Rs(t,Il))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_t.MOCK_USER;else{l=Wg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(u)}t._authCredentials=new zR(new x_(l,c))}}/**
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
 */class es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class _r extends es{constructor(e,n,r){super(e,n,Uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new ae(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function Ma(t,e,...n){if(t=Ge(t),xy("collection","path",e),t instanceof Il){const r=Ue.fromString(e,...n);return Cp(r),new _r(t,null,r)}{if(!(t instanceof Ut||t instanceof _r))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Cp(r),new _r(t.firestore,null,r)}}function ps(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=L_.newId()),xy("doc","path",e),t instanceof Il){const r=Ue.fromString(e,...n);return Rp(r),new Ut(t,null,new ae(r))}{if(!(t instanceof Ut||t instanceof _r))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Rp(r),new Ut(t.firestore,t instanceof _r?t.converter:null,new ae(r))}}/**
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
 */class Pp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new yy(this,"async_queue_retry"),this.Vu=()=>{const r=cc();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Br;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!po(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ju.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&fe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function kp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Zi extends Il{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Pp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pp(e),this._firestoreClient=void 0,await e}}}function DP(t,e){const n=typeof t=="object"?t:Iu(),r=typeof t=="string"?t:"(default)",s=ol(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jg("firestore");i&&OP(s,...i)}return s}function th(t){if(t._terminated)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NP(t),t._firestoreClient}function NP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new cC(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,My(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new CP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(dt.fromBase64String(e))}catch(n){throw new te(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nh{constructor(e){this._methodName=e}}/**
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
 */class rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class sh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const VP=/^__.*__$/;class MP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new mo(e,this.data,n,this.fieldTransforms)}}class Ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Fy(this.Cu)&&VP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yl(e)}Qu(e,n,r,s=!1){return new ih({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uy(t){const e=t._freezeSettings(),n=yl(t._databaseId);return new xP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LP(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);oh("Data must be an object, but it was:",o,r);const l=By(r,o);let c,u;if(i.merge)c=new Ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Zc(e,p,n);if(!o.contains(g))throw new te(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);jy(d,g)||d.push(g)}c=new Ft(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new MP(new kt(l),c,u)}class Al extends nh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Al}}function FP(t,e,n,r){const s=t.Qu(1,e,n);oh("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Xr(r,(c,u)=>{const d=ah(e,c,n);u=Ge(u);const p=s.Nu(d);if(u instanceof Al)i.push(d);else{const g=vo(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ft(i);return new Ly(o,l,s.fieldTransforms)}function UP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Zc(e,r,n)],c=[s];if(i.length%2!=0)throw new te(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Zc(e,i[g])),c.push(i[g+1]);const u=[],d=kt.empty();for(let g=l.length-1;g>=0;--g)if(!jy(u,l[g])){const E=l[g];let S=c[g];S=Ge(S);const O=o.Nu(E);if(S instanceof Al)u.push(E);else{const D=vo(S,O);D!=null&&(u.push(E),d.set(E,D))}}const p=new Ft(u);return new Ly(d,p,o.fieldTransforms)}function BP(t,e,n,r=!1){return vo(n,t.Qu(r?4:3,e))}function vo(t,e){if($y(t=Ge(t)))return oh("Unsupported field value:",e,t),By(t,e);if(t instanceof nh)return function(r,s){if(!Fy(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=vo(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:Da(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(r instanceof rh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fs)return{bytesValue:cy(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof sh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Tl(r)}`)}(t,e)}function By(t,e){const n={};return F_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,s)=>{const i=vo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof rh||t instanceof Fs||t instanceof Ut||t instanceof nh||t instanceof sh)}function oh(t,e,n){if(!$y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Tl(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zc(t,e,n){if((e=Ge(e))instanceof wl)return e._internalPath;if(typeof e=="string")return ah(t,e);throw xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const $P=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search($P)>=0)throw xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wl(...e.split("."))._internalPath}catch{throw xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(L.INVALID_ARGUMENT,l+t+c)}function jy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jP extends qy{data(){return super.data()}}function lh(t,e){return typeof e=="string"?ah(t,e):e instanceof wl?e._internalPath:e._delegate._internalPath}/**
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
 */function qP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ch{}class Hy extends ch{}function La(t,e,...n){let r=[];e instanceof ch&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof hh).length,l=i.filter(c=>c instanceof uh).length;if(o>1||o>0&&l>0)throw new te(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class uh extends Hy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uh(e,n,r)}_apply(e){const n=this._parse(e);return Wy(e._query,n),new es(e.firestore,e.converter,qc(e._query,n))}_parse(e){const n=Uy(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new te(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Dp(p,d);const E=[];for(const S of p)E.push(Op(c,i,S));g={arrayValue:{values:E}}}else g=Op(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Dp(p,d),g=BP(l,o,p,d==="in"||d==="not-in");return Ye.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hh extends ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Wy(o,c),o=qc(o,c)}(e._query,n),new es(e.firestore,e.converter,qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dh extends Hy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)}(e._query,this._field,this._direction);return new es(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new qs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Fa(t,e="asc"){const n=e,r=lh("orderBy",t);return dh._create(r,n)}function Op(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new te(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!z_(e)&&n.indexOf("/")!==-1)throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ae.isDocumentKey(r))throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jf(t,new ae(r))}if(n instanceof Ut)return Jf(t,n._key);throw new te(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tl(n)}.`)}function Dp(t,e){if(!Array.isArray(t)||t.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HP{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new sh(i)}convertGeoPoint(e){return new rh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);De(my(r));const s=new Gi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function WP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ky extends qy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends Ky{data(e={}){return super.data(e)}}class KP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:zP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class zy extends HP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function Np(t){return Gy(Rs(t.firestore,Zi),[new gl(t._key,zt.none())])}function ms(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||kp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(kp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Ut)u=Rs(t.firestore,Zi),d=Uu(t._key.path),c={next:p=>{e[o]&&e[o](GP(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Rs(t,es);u=Rs(p.firestore,Zi),d=p._query;const g=new zy(u);c={next:E=>{e[o]&&e[o](new KP(u,g,p,E))},error:e[o+1],complete:e[o+2]},qP(t._query)}return function(g,E,S,O){const D=new RP(O),$=new lP(E,D,S);return g.asyncQueue.enqueueAndForget(async()=>sP(await Ap(g),$)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>iP(await Ap(g),$))}}(th(u),d,l,c)}function Gy(t,e){return function(r,s){const i=new Br;return r.asyncQueue.enqueueAndForget(async()=>yP(await PP(r),s,i)),i.promise}(th(t),e)}function GP(t,e,n){const r=n.docs.get(e._key),s=new zy(t);return new Ky(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class QP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Uy(e)}set(e,n,r){this._verifyNotCommitted();const s=hc(e,this._firestore),i=WP(s.converter,n,r),o=LP(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,zt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=hc(e,this._firestore);let o;return o=typeof(n=Ge(n))=="string"||n instanceof wl?UP(this._dataReader,"WriteBatch.update",i._key,n,r,s):FP(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,zt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hc(e,this._firestore);return this._mutations=this._mutations.concat(new gl(n._key,zt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hc(t,e){if((t=Ge(t)).firestore!==e)throw new te(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function YP(t){return th(t=Rs(t,Zi)),new QP(t,e=>Gy(t,e))}(function(e,n=!0){(function(s){js=s})(Yr),qr(new vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Zi(new GR(r.getProvider("auth-internal")),new XR(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),_n(Kf,"4.7.3",e),_n(Kf,"4.7.3","esm2017")})();/**
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
 */const Qy="firebasestorage.googleapis.com",JP="storageBucket",XP=2*60*1e3,ZP=10*60*1e3;/**
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
 */class Rn extends bn{constructor(e,n,r=0){super(dc(e),`Firebase Storage: ${n} (${dc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function dc(t){return"storage/"+t}function e1(){const t="An unknown error occurred, please check the error payload for server response.";return new Rn(An.UNKNOWN,t)}function t1(){return new Rn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n1(){return new Rn(An.CANCELED,"User canceled the upload/download.")}function r1(t){return new Rn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function s1(t){return new Rn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Vp(t){return new Rn(An.INVALID_ARGUMENT,t)}function Yy(){return new Rn(An.APP_DELETED,"The Firebase app was deleted.")}function i1(t){return new Rn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw s1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},O=n===Qy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",$=new RegExp(`^https?://${O}/${s}/${D}`,"i"),H=[{regex:l,indices:c,postModify:i},{regex:E,indices:S,postModify:u},{regex:$,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<H.length;B++){const Z=H[B],F=Z.regex.exec(e);if(F){const T=F[Z.indices.bucket];let v=F[Z.indices.path];v||(v=""),r=new en(T,v),Z.postModify(r);break}}if(r==null)throw r1(e);return r}}class o1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function a1(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(E,c())},D)}function g(){i&&clearTimeout(i)}function E(D,...$){if(u){g();return}if(D){g(),d.call(null,D,...$);return}if(c()||o){g(),d.call(null,D,...$);return}r<64&&(r*=2);let H;l===1?(l=2,H=0):H=(r+Math.random())*1e3,p(H)}let S=!1;function O(D){S||(S=!0,g(),!u&&(s!==null?(D||(l=2),clearTimeout(s),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function l1(t){t(!1)}/**
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
 */function c1(t){return t!==void 0}function Mp(t,e,n,r){if(r<e)throw Vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vp(`Invalid value for '${t}'. Expected ${n} or less.`)}function u1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ua;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ua||(Ua={}));/**
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
 */function h1(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class d1{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,S)=>{this.resolve_=E,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ua.NO_ERROR,c=i.getStatus();if(!l||h1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Ua.ABORT;r(!1,new Wo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Wo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());c1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=e1();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Yy():n1();o(c)}else{const c=t1();o(c)}};this.canceled_?n(!1,new Wo(!1,null,!0)):this.backoffId_=a1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function f1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function m1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function g1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _1(t,e,n,r,s,i,o=!0){const l=u1(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return m1(u,e),f1(u,n),p1(u,i),g1(u,r),new d1(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function y1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ba{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ba(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v1(this._location.path)}get storage(){return this._service}get parent(){const e=y1(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Ba(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw i1(e)}}function xp(t,e){const n=e==null?void 0:e[JP];return n==null?null:en.makeFromBucketSpec(n,t)}function E1(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Wg(s,t.app.options.projectId))}class T1{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Qy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XP,this._maxUploadRetryTime=ZP,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ba(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new o1(Yy());{const o=_1(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Lp="@firebase/storage",Fp="0.13.2";/**
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
 */const Jy="storage";function I1(t=Iu(),e){t=Ge(t);const r=ol(t,Jy).getImmediate({identifier:e}),s=jg("storage");return s&&w1(r,...s),r}function w1(t,e,n,r={}){E1(t,e,n,r)}function A1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new T1(n,r,s,e,Yr)}function b1(){qr(new vr(Jy,A1,"PUBLIC").setMultipleInstances(!0)),_n(Lp,Fp,""),_n(Lp,Fp,"esm2017")}b1();const R1={apiKey:"AIzaSyDgxx86TgNTKdl7EwevQTK4IDTl20MEnGY",authDomain:"ninarojasmp.firebaseapp.com",projectId:"ninarojasmp",storageBucket:"ninarojasmp.appspot.com",messagingSenderId:"818909449234",appId:"1:818909449234:web:c38311031eb326e0c3dccb"},fh=Gg(R1),ki=HR(fh),xr=DP(fh);I1(fh);var Ko={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const C1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Je=(t,e)=>({size:n,strokeWidth:r=2,absoluteStrokeWidth:s,color:i,...o},{attrs:l,slots:c})=>ya("svg",{...Ko,width:n||Ko.width,height:n||Ko.height,stroke:i||Ko.stroke,"stroke-width":s?Number(r)*24/Number(n):r,...l,class:["lucide",`lucide-${C1(t)}`,(l==null?void 0:l.class)||""],...o},[...e.map(u=>ya(...u)),...c.default?[c.default()]:[]]),S1=Je("AwardIcon",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),P1=Je("BookOpenIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),k1=Je("BriefcaseIcon",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),O1=Je("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),D1=Je("FileTextIcon",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),N1=Je("HeadphonesIcon",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]),V1=Je("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Up=Je("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),M1=Je("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Bp=Je("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),x1=Je("MusicIcon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),L1=Je("PauseIcon",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),F1=Je("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),U1=Je("PlayIcon",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),$p=Je("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),B1=Je("RadioIcon",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]),$1=Je("SaveIcon",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),j1=Je("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),jp=Je("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),q1=Je("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),H1={class:"home"},W1={class:"navbar"},K1={class:"container"},z1={class:"nav-content"},G1={class:"nav-links"},Q1={class:"mobile-nav-links"},Y1={id:"inicio",class:"hero"},J1={class:"container"},X1={class:"hero-content"},Z1={class:"hero-actions"},ek={class:"hero-visual"},tk={class:"sound-wave"},nk={id:"servicios",class:"services section-padding"},rk={class:"container"},sk={class:"services-grid"},ik={class:"service-icon"},ok={key:0,class:"service-price"},ak={key:1,class:"service-badge"},lk={id:"portfolio",class:"portfolio section-padding"},ck={class:"container"},uk={class:"portfolio-tabs"},hk=["onClick"],dk={class:"portfolio-grid"},fk={class:"demo-header"},pk=["onClick"],mk={class:"audio-progress"},gk=["src","onEnded"],_k={id:"contacto",class:"contact section-padding"},yk={class:"container"},vk={class:"contact-content"},Ek={class:"contact-info"},Tk={class:"contact-item"},Ik={class:"contact-item"},wk={class:"contact-item"},Ak={class:"contact-item"},bk={class:"form-group"},Rk={class:"form-group"},Ck={class:"form-group full-width"},Sk=["disabled"],Pk={class:"footer"},kk={class:"container"},Ok={class:"footer-content"},Dk={class:"footer-links"},Nk={class:"footer-section"},Vk={class:"footer-bottom"},Mk={class:"admin-link"},xk=Bt({__name:"Home",setup(t){const e=Lg(),n=Xe([]),r=Xe([]),s=Xe({title:"Nina Rojas",subtitle:"Voz Profesional"}),i=Xe({email:"",phone:"",address:"",schedule:""}),o=Xe(!1),l=Xe("Todos"),c=Xe(new Set),u=Xe({name:"",email:"",message:""}),d=Xe(!1),p=Pt(()=>["Todos",...new Set(r.value.map(m=>m.category))]),g=Pt(()=>l.value==="Todos"?r.value:r.value.filter(I=>I.category===l.value)),E=()=>{o.value=!o.value},S=I=>{const m=document.getElementById(I);m&&m.scrollIntoView({behavior:"smooth"})},O=I=>{S(I),o.value=!1},D=I=>({Comerciales:B1,Documentales:D1,"E-learning":q1,Audiolibros:P1,Corporativo:S1,IVR:N1})[I]||Bp,$=async I=>{const m=document.querySelector(`audio[src*="${I}"]`);m&&(c.value.has(I)?(m.pause(),c.value.delete(I)):(c.value.forEach(le=>{const J=document.querySelector(`audio[src*="${le}"]`);J&&J.pause()}),c.value.clear(),m.play(),c.value.add(I)))},q=I=>c.value.has(I),H=I=>{c.value.delete(I)},B=I=>{},Z=I=>{const m=document.querySelector(`audio[src*="${I}"]`);return m&&m.duration?m.currentTime/m.duration*100:0},F=async()=>{d.value=!0;try{await new Promise(I=>setTimeout(I,1e3)),e.success("Mensaje enviado exitosamente. Te contactaré pronto."),u.value={name:"",email:"",message:""}}catch{e.error("Error al enviar el mensaje. Inténtalo de nuevo.")}finally{d.value=!1}};let T=null,v=null,y=null,b=null;const R=()=>{const I=La(Ma(xr,"services"),Fa("title"));T=ms(I,le=>{n.value=le.docs.map(J=>({id:J.id,...J.data()}))},le=>{console.error("Error al cargar servicios:",le)});const m=La(Ma(xr,"portfolio"),Fa("title"));v=ms(m,le=>{r.value=le.docs.map(J=>({id:J.id,...J.data()}))},le=>{console.error("Error al cargar el portfolio:",le)}),y=ms(ps(xr,"content","hero"),le=>{le.exists()&&(s.value={id:le.id,...le.data()})},le=>{console.error("Error en suscripción a hero:",le)}),b=ms(ps(xr,"content","contact"),le=>{le.exists()&&(i.value={id:le.id,...le.data()})},le=>{console.error("Error en suscripción a contacto:",le)})};return ro(()=>{R()}),Ya(()=>{T&&T(),v&&v(),y&&y(),b&&b()}),(I,m)=>{const le=fr("router-link");return he(),Ae("div",H1,[C("nav",W1,[C("div",K1,[C("div",z1,[m[19]||(m[19]=Zo('<div class="logo" data-v-e81f3d44><div class="logo-image" data-v-e81f3d44><img src="'+Zl+'" alt="Nina Rojas Logo" class="logo-img" data-v-e81f3d44></div><div class="logo-text-container" data-v-e81f3d44><span class="logo-text" data-v-e81f3d44>Nina Rojas</span><span class="logo-subtitle" data-v-e81f3d44>Voz Profesional</span></div></div>',1)),C("div",G1,[C("a",{href:"#inicio",onClick:m[0]||(m[0]=J=>S("inicio"))},"Inicio"),C("a",{href:"#servicios",onClick:m[1]||(m[1]=J=>S("servicios"))},"Servicios"),C("a",{href:"#portfolio",onClick:m[2]||(m[2]=J=>S("portfolio"))},"Portfolio"),C("a",{href:"#contacto",onClick:m[3]||(m[3]=J=>S("contacto"))},"Contacto")]),C("button",{class:"menu-toggle",onClick:E},m[18]||(m[18]=[C("span",null,null,-1),C("span",null,null,-1),C("span",null,null,-1)]))])])]),C("div",{class:sn(["mobile-menu",{active:o.value}])},[C("div",Q1,[C("a",{href:"#inicio",onClick:m[4]||(m[4]=J=>O("inicio"))},"Inicio"),C("a",{href:"#servicios",onClick:m[5]||(m[5]=J=>O("servicios"))},"Servicios"),C("a",{href:"#portfolio",onClick:m[6]||(m[6]=J=>O("portfolio"))},"Portfolio"),C("a",{href:"#contacto",onClick:m[7]||(m[7]=J=>O("contacto"))},"Contacto")])],2),C("section",Y1,[m[23]||(m[23]=C("div",{class:"hero-background"},null,-1)),C("div",J1,[C("div",X1,[m[22]||(m[22]=Zo('<div class="hero-logo" data-v-e81f3d44><img src="'+Zl+'" alt="Nina Rojas Logo" class="hero-logo-img" data-v-e81f3d44></div><h1 class="hero-title" data-v-e81f3d44><span class="highlight" data-v-e81f3d44>Nina Rojas</span><span class="subtitle" data-v-e81f3d44>Locutora Profesional</span></h1><p class="hero-description" data-v-e81f3d44> NR Max publicidad el arte de comunicar a un solo click. </p><div class="hero-stats" data-v-e81f3d44><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>500+</span><span class="stat-label" data-v-e81f3d44>Proyectos</span></div><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>5</span><span class="stat-label" data-v-e81f3d44>Años</span></div><div class="hero-stat" data-v-e81f3d44><span class="stat-number" data-v-e81f3d44>100%</span><span class="stat-label" data-v-e81f3d44>Satisfacción</span></div></div>',4)),C("div",Z1,[C("a",{href:"#portfolio",onClick:m[8]||(m[8]=J=>S("portfolio")),class:"btn btn-primary"},[be(Be(Bp),{class:"btn-icon"}),m[20]||(m[20]=yt(" Escuchar "))]),C("a",{href:"#contacto",onClick:m[9]||(m[9]=J=>S("contacto")),class:"btn btn-secondary"},[be(Be(Up),{class:"btn-icon"}),m[21]||(m[21]=yt(" Contactar "))])])]),C("div",ek,[C("div",tk,[(he(),Ae($e,null,Vn(5,J=>C("div",{class:"wave",key:J,style:$r({animationDelay:J*.1+"s"})},null,4)),64))])])])]),C("section",nk,[C("div",rk,[m[24]||(m[24]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Servicios"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"Soluciones profesionales de voz para cada necesidad")],-1)),C("div",sk,[(he(!0),Ae($e,null,Vn(n.value,J=>(he(),Ae("div",{class:"service-card",key:J.id},[C("div",ik,[(he(),Rt(so(D(J.title))))]),C("h3",null,Wt(J.title),1),C("p",null,Wt(J.description),1),J.price?(he(),Ae("div",ok,Wt(J.price),1)):Fr("",!0),J.featured?(he(),Ae("div",ak,"Más Solicitado")):Fr("",!0)]))),128))])])]),C("section",lk,[C("div",ck,[m[25]||(m[25]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Portfolio"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"Escucha algunos de mis trabajos más destacados")],-1)),C("div",uk,[(he(!0),Ae($e,null,Vn(p.value,J=>(he(),Ae("button",{key:J,onClick:Ne=>l.value=J,class:sn([{active:l.value===J},"tab-button"])},Wt(J),11,hk))),128))]),C("div",dk,[(he(!0),Ae($e,null,Vn(g.value,J=>(he(),Ae("div",{key:J.id,class:"demo-card"},[C("div",fk,[C("h4",null,Wt(J.title),1),C("button",{onClick:Ne=>$(J.id),class:"play-button"},[q(J.id)?(he(),Rt(Be(L1),{key:1})):(he(),Rt(Be(U1),{key:0}))],8,pk)]),C("p",null,Wt(J.description),1),C("div",mk,[C("div",{class:"progress-bar",style:$r({width:Z(J.id)+"%"})},null,4)]),C("audio",{ref_for:!0,ref:"audio-"+J.id,src:J.audioUrl,onTimeupdate:m[10]||(m[10]=Ne=>B()),onEnded:Ne=>H(J.id)},null,40,gk)]))),128))])])]),C("section",_k,[C("div",yk,[m[34]||(m[34]=C("div",{class:"section-header"},[C("h2",{class:"section-title"},"Contacto"),C("div",{class:"section-divider"}),C("p",{class:"section-subtitle"},"¿Tienes un proyecto en mente? Hablemos")],-1)),C("div",vk,[C("div",Ek,[m[30]||(m[30]=C("h3",null,"Información de Contacto",-1)),C("div",Tk,[be(Be(Up),{class:"contact-icon"}),m[26]||(m[26]=C("div",null,[C("span",{class:"contact-label"},"Email"),C("span",{class:"contact-value"},"ninaymarco3@gmail.com")],-1))]),C("div",Ik,[be(Be(F1),{class:"contact-icon"}),m[27]||(m[27]=C("div",null,[C("span",{class:"contact-label"},"Teléfono"),C("span",{class:"contact-value"},"+57 310 6035384")],-1))]),C("div",wk,[be(Be(M1),{class:"contact-icon"}),m[28]||(m[28]=C("div",null,[C("span",{class:"contact-label"},"Ubicación"),C("span",{class:"contact-value"},"Colombia")],-1))]),C("div",Ak,[be(Be(O1),{class:"contact-icon"}),m[29]||(m[29]=C("div",null,[C("span",{class:"contact-label"},"Horario"),C("span",{class:"contact-value"},"Lun - Vie: 9:00 AM - 6:00 PM")],-1))])]),C("form",{onSubmit:gu(F,["prevent"]),class:"contact-form"},[C("div",bk,[m[31]||(m[31]=C("label",{for:"name"},"Nombre *",-1)),Vt(C("input",{type:"text",id:"name","onUpdate:modelValue":m[11]||(m[11]=J=>u.value.name=J),required:""},null,512),[[Jt,u.value.name]])]),C("div",Rk,[m[32]||(m[32]=C("label",{for:"email"},"Email *",-1)),Vt(C("input",{type:"email",id:"email","onUpdate:modelValue":m[12]||(m[12]=J=>u.value.email=J),required:""},null,512),[[Jt,u.value.email]])]),C("div",Ck,[m[33]||(m[33]=C("label",{for:"message"},"Mensaje *",-1)),Vt(C("textarea",{id:"message","onUpdate:modelValue":m[13]||(m[13]=J=>u.value.message=J),rows:"5",required:""},null,512),[[Jt,u.value.message]])]),C("button",{type:"submit",class:"btn btn-primary",disabled:d.value},[be(Be(j1),{class:"btn-icon"}),yt(" "+Wt(d.value?"Enviando...":"Enviar Mensaje"),1)],8,Sk)],32)])])]),C("footer",Pk,[C("div",kk,[C("div",Ok,[m[37]||(m[37]=Zo('<div class="footer-brand" data-v-e81f3d44><div class="logo" data-v-e81f3d44><div class="logo-image" data-v-e81f3d44><img src="'+Zl+'" alt="Nina Rojas Logo" class="logo-img" data-v-e81f3d44></div><div class="logo-text-container" data-v-e81f3d44><span class="logo-text" data-v-e81f3d44>Nina Rojas</span><span class="logo-subtitle" data-v-e81f3d44>Voz Profesional</span></div></div><p data-v-e81f3d44>NR Max publicidad el arte de comunicar a un solo click.</p></div>',1)),C("div",Dk,[C("div",Nk,[m[35]||(m[35]=C("h4",null,"Navegación",-1)),C("ul",null,[C("li",null,[C("a",{href:"#inicio",onClick:m[14]||(m[14]=J=>S("inicio"))},"Inicio")]),C("li",null,[C("a",{href:"#servicios",onClick:m[15]||(m[15]=J=>S("servicios"))},"Servicios")]),C("li",null,[C("a",{href:"#portfolio",onClick:m[16]||(m[16]=J=>S("portfolio"))},"Portfolio")]),C("li",null,[C("a",{href:"#contacto",onClick:m[17]||(m[17]=J=>S("contacto"))},"Contacto")])])]),m[36]||(m[36]=C("div",{class:"footer-section"},[C("h4",null,"Contacto"),C("ul",null,[C("li",null,"ninaymarco3@gmail.com"),C("li",null,"+57 310 6035384"),C("li",null,"Colombia")])],-1))])]),C("div",Vk,[m[39]||(m[39]=C("p",null,"© 2025 Nina Rojas. Todos los derechos reservados.",-1)),C("div",Mk,[be(le,{to:"/admin/login",class:"admin-link-text"},{default:Qr(()=>m[38]||(m[38]=[yt("Admin")])),_:1,__:[38]})])])])])])}}}),ph=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Lk=ph(xk,[["__scopeId","data-v-e81f3d44"]]),ci=Xe(null),qp=Xe(!0),Xy=()=>{const t=yu(),e=Lg(),n=Pt(()=>!!ci.value);return{user:ci,loading:qp,isAuthenticated:n,login:async(o,l)=>{try{const c=await Pb(ki,o,l);ci.value=c.user,e.success("Inicio de sesión exitoso"),t.push("/admin")}catch(c){throw e.error("Error al iniciar sesión: "+c.message),c}},logout:async()=>{try{await Nb(ki),ci.value=null,e.success("Sesión cerrada"),t.push("/")}catch(o){e.error("Error al cerrar sesión: "+o.message)}},initAuth:()=>{Db(ki,o=>{ci.value=o,qp.value=!1})}}},Fk={class:"admin-panel"},Uk={class:"admin-header"},Bk={class:"container"},$k={class:"header-content"},jk={class:"header-actions"},qk=["disabled"],Hk={class:"admin-content"},Wk={class:"container"},Kk={class:"admin-tabs"},zk=["onClick"],Gk={key:0,class:"admin-section"},Qk={class:"section-header"},Yk={class:"services-list"},Jk={class:"service-editor"},Xk={class:"form-row"},Zk={class:"form-group"},eO=["onUpdate:modelValue"],tO={class:"form-group"},nO=["onUpdate:modelValue"],rO={class:"form-group"},sO=["onUpdate:modelValue"],iO={class:"form-row"},oO={class:"checkbox-group"},aO=["id","onUpdate:modelValue"],lO=["for"],cO=["onClick"],uO={key:1,class:"admin-section"},hO={class:"section-header"},dO={class:"demos-list"},fO={class:"demo-editor"},pO={class:"form-row"},mO={class:"form-group"},gO=["onUpdate:modelValue"],_O={class:"form-group"},yO=["onUpdate:modelValue"],vO={class:"form-group"},EO=["onUpdate:modelValue"],TO={class:"form-row"},IO={class:"form-group"},wO=["onUpdate:modelValue"],AO=["onClick"],bO=Bt({__name:"Admin",setup(t){const{logout:e,isAuthenticated:n,initAuth:r}=Xy(),s=yu(),i=Ma(xr,"services"),o=Ma(xr,"portfolio");let l,c;const u=Xe("hero"),d=Xe(!1),p=[{id:"services",label:"Servicios",icon:k1},{id:"portfolio",label:"Portfolio",icon:x1}],g=Xe([]),E=Xe([]),S=()=>{const Z={id:Date.now().toString(),title:"",description:"",price:"",featured:!1};g.value.push(Z)},O=async Z=>{const F=g.value[Z];try{await Np(ps(i,F.id)),g.value.splice(Z,1)}catch(T){console.error("Error al eliminar el servicio:",T)}},D=()=>{const Z={id:Date.now().toString(),title:"",description:"",audioUrl:"",category:""};E.value.push(Z)},$=async Z=>{const F=E.value[Z];try{await Np(ps(o,F.id)),E.value.splice(Z,1)}catch(T){console.error("Error al eliminar el demo:",T)}},q=async()=>{d.value=!0;try{const Z=YP(xr);g.value.forEach(F=>{const T=ps(i,F.id);Z.set(T,{title:F.title,description:F.description,price:F.price,featured:F.featured||!1},{merge:!0})}),E.value.forEach(F=>{const T=ps(o,F.id);Z.set(T,{title:F.title,description:F.description,audioUrl:F.audioUrl,category:F.category},{merge:!0})}),await Z.commit(),console.log("Cambios guardados exitosamente")}catch(Z){console.error("Error al guardar cambios:",Z)}finally{d.value=!1}},H=()=>{const Z=La(i,Fa("title"));l=ms(Z,T=>{g.value=T.docs.map(v=>({id:v.id,title:v.data().title||"",description:v.data().description||"",price:v.data().price||"",featured:v.data().featured||!1}))});const F=La(o,Fa("title"));c=ms(F,T=>{E.value=T.docs.map(v=>({id:v.id,title:v.data().title||"",description:v.data().description||"",audioUrl:v.data().audioUrl||"",category:v.data().category||""}))})},B=()=>{l&&l(),c&&c()};return ro(async()=>{await r(),n.value?H():s.push("/admin/login")}),Ya(()=>{B()}),(Z,F)=>(he(),Ae("div",Fk,[C("header",Uk,[C("div",Bk,[C("div",$k,[F[2]||(F[2]=C("div",{class:"admin-brand"},[C("h1",null,"Panel Administrativo"),C("span",null,"Nina Rojas - Gestión de Contenido")],-1)),C("div",jk,[C("button",{onClick:q,class:"btn btn-primary",disabled:d.value},[be(Be($1),{class:"btn-icon"}),yt(" "+Wt(d.value?"Guardando...":"Guardar Cambios"),1)],8,qk),C("button",{onClick:F[0]||(F[0]=(...T)=>Be(e)&&Be(e)(...T)),class:"btn btn-secondary"},[be(Be(V1),{class:"btn-icon"}),F[1]||(F[1]=yt(" Cerrar Sesión "))])])])])]),C("main",Hk,[C("div",Wk,[C("div",Kk,[(he(),Ae($e,null,Vn(p,T=>C("button",{key:T.id,onClick:v=>u.value=T.id,class:sn([{active:u.value===T.id},"tab-button"])},[(he(),Rt(so(T.icon),{class:"tab-icon"})),yt(" "+Wt(T.label),1)],10,zk)),64))]),u.value==="services"?(he(),Ae("div",Gk,[C("div",Qk,[F[4]||(F[4]=C("h2",{class:"section-title"},"Gestión de Servicios",-1)),C("button",{onClick:S,class:"btn btn-primary"},[be(Be($p),{class:"btn-icon"}),F[3]||(F[3]=yt(" Agregar Servicio "))])]),C("div",Yk,[(he(!0),Ae($e,null,Vn(g.value,(T,v)=>(he(),Ae("div",{key:T.id,class:"service-item"},[C("div",Jk,[C("div",Xk,[C("div",Zk,[F[5]||(F[5]=C("label",null,"Título",-1)),Vt(C("input",{"onUpdate:modelValue":y=>T.title=y,type:"text"},null,8,eO),[[Jt,T.title]])]),C("div",tO,[F[6]||(F[6]=C("label",null,"Precio",-1)),Vt(C("input",{"onUpdate:modelValue":y=>T.price=y,type:"text"},null,8,nO),[[Jt,T.price]])])]),C("div",rO,[F[7]||(F[7]=C("label",null,"Descripción",-1)),Vt(C("textarea",{"onUpdate:modelValue":y=>T.description=y,rows:"3"},null,8,sO),[[Jt,T.description]])]),C("div",iO,[C("div",oO,[Vt(C("input",{type:"checkbox",id:"featured-"+T.id,"onUpdate:modelValue":y=>T.featured=y},null,8,aO),[[KT,T.featured]]),C("label",{for:"featured-"+T.id},"Servicio Destacado",8,lO)]),C("button",{onClick:y=>O(v),class:"btn btn-danger"},[be(Be(jp),{class:"btn-icon"}),F[8]||(F[8]=yt(" Eliminar "))],8,cO)])])]))),128))])])):Fr("",!0),u.value==="portfolio"?(he(),Ae("div",uO,[C("div",hO,[F[10]||(F[10]=C("h2",{class:"section-title"},"Gestión de Portfolio",-1)),C("button",{onClick:D,class:"btn btn-primary"},[be(Be($p),{class:"btn-icon"}),F[9]||(F[9]=yt(" Agregar Demo "))])]),C("div",dO,[(he(!0),Ae($e,null,Vn(E.value,(T,v)=>(he(),Ae("div",{key:T.id,class:"demo-item"},[C("div",fO,[C("div",pO,[C("div",mO,[F[11]||(F[11]=C("label",null,"Título",-1)),Vt(C("input",{"onUpdate:modelValue":y=>T.title=y,type:"text"},null,8,gO),[[Jt,T.title]])]),C("div",_O,[F[13]||(F[13]=C("label",null,"Categoría",-1)),Vt(C("select",{"onUpdate:modelValue":y=>T.category=y},F[12]||(F[12]=[Zo('<option value="Comerciales" data-v-1082e4d9>Comerciales</option><option value="Documentales" data-v-1082e4d9>Documentales</option><option value="E-learning" data-v-1082e4d9>E-learning</option><option value="Audiolibros" data-v-1082e4d9>Audiolibros</option><option value="Corporativo" data-v-1082e4d9>Corporativo</option>',5)]),8,yO),[[zT,T.category]])])]),C("div",vO,[F[14]||(F[14]=C("label",null,"Descripción",-1)),Vt(C("textarea",{"onUpdate:modelValue":y=>T.description=y,rows:"2"},null,8,EO),[[Jt,T.description]])]),C("div",TO,[C("div",IO,[F[15]||(F[15]=C("label",null,"URL del Audio",-1)),Vt(C("input",{"onUpdate:modelValue":y=>T.audioUrl=y,type:"url",placeholder:"https://ejemplo.com/audio.mp3"},null,8,wO),[[Jt,T.audioUrl]])]),C("button",{onClick:y=>$(v),class:"btn btn-danger"},[be(Be(jp),{class:"btn-icon"}),F[16]||(F[16]=yt(" Eliminar "))],8,AO)])])]))),128))])])):Fr("",!0)])])]))}}),RO=ph(bO,[["__scopeId","data-v-1082e4d9"]]),CO={class:"admin-login"},SO={class:"login-container"},PO={class:"login-card"},kO={class:"form-group"},OO=["disabled"],DO={class:"form-group"},NO=["disabled"],VO=["disabled"],MO={key:0},xO={key:1},LO={class:"login-footer"},FO=Bt({__name:"AdminLogin",setup(t){const{login:e,isAuthenticated:n,initAuth:r}=Xy(),s=yu(),i=Xe(""),o=Xe(""),l=Xe(!1),c=async()=>{if(!(!i.value||!o.value)){l.value=!0;try{await e(i.value,o.value)}catch(u){console.error("Login error:",u)}finally{l.value=!1}}};return ro(()=>{r(),n.value&&s.push("/admin")}),(u,d)=>{const p=fr("router-link");return he(),Ae("div",CO,[C("div",SO,[C("div",PO,[d[5]||(d[5]=C("div",{class:"login-header"},[C("h1",null,"Panel Administrativo"),C("p",null,"Nina Rojas - Administración del Sitio Web")],-1)),C("form",{onSubmit:gu(c,["prevent"]),class:"login-form"},[C("div",kO,[d[2]||(d[2]=C("label",{for:"email"},"Email",-1)),Vt(C("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=g=>i.value=g),required:"",disabled:l.value,placeholder:"Correo Electrónico"},null,8,OO),[[Jt,i.value]])]),C("div",DO,[d[3]||(d[3]=C("label",{for:"password"},"Contraseña",-1)),Vt(C("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=g=>o.value=g),required:"",disabled:l.value,placeholder:"••••••••"},null,8,NO),[[Jt,o.value]])]),C("button",{type:"submit",class:"btn btn-primary login-btn",disabled:l.value},[l.value?(he(),Ae("span",MO,"Iniciando sesión...")):(he(),Ae("span",xO,"Iniciar Sesión"))],8,VO)],32),C("div",LO,[be(p,{to:"/",class:"back-link"},{default:Qr(()=>d[4]||(d[4]=[yt("← Volver al sitio web")])),_:1,__:[4]})])])])])}}}),UO=ph(FO,[["__scopeId","data-v-211e2032"]]),BO=[{path:"/",component:Lk},{path:"/admin",component:RO,meta:{requiresAuth:!0}},{path:"/admin/login",component:UO}],Zy=tw({history:kI(),routes:BO}),mh=rg(e0);ki.onAuthStateChanged(()=>{console.log("Estado de autenticación actualizado")});Zy.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=ki.currentUser;if(t.path==="/admin/login"&&s){n("/admin");return}if(r&&!s){n("/admin/login");return}n()});mh.use(Zy);mh.use(Xw,{position:ji.TOP_RIGHT,timeout:5e3,closeOnClick:!0,pauseOnHover:!0,filterBeforeCreate:t=>t.type==="error"?t:!1});mh.mount("#app");
