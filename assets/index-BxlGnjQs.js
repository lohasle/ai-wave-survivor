var wc=Object.defineProperty;var Ac=(e,t,n)=>t in e?wc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Yo=(e,t,n)=>Ac(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ou={exports:{}},ol={},su={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),Ec=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),zc=Symbol.for("react.memo"),Rc=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},au=Object.assign,cu={};function un(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||uu}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fu(){}fu.prototype=un.prototype;function Xi(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||uu}var Zi=Xi.prototype=new fu;Zi.constructor=Xi;au(Zi,un.prototype);Zi.isPureReactComponent=!0;var Zo=Array.isArray,du=Object.prototype.hasOwnProperty,Ji={current:null},pu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)du.call(t,r)&&!pu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:qn,type:e,key:i,ref:o,props:l,_owner:Ji.current}}function Oc(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function Dc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jo=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qn:case Ec:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+_l(o,0):r,Zo(l)?(n="",e!=null&&(n=e.replace(Jo,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(qi(l)&&(l=Oc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Jo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Zo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+_l(i,s);o+=wr(i,t,n,u,l)}else if(u=Mc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+_l(i,s++),o+=wr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Fc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ar={transition:null},Uc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:Ji};function hu(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=un;P.Fragment=_c;P.Profiler=Nc;P.PureComponent=Xi;P.StrictMode=Cc;P.Suspense=jc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uc;P.act=hu;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=au({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ji.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)du.call(t,u)&&!pu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:qn,type:e.type,key:l,ref:i,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:Pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tc,_context:e},e.Consumer=e};P.createElement=mu;P.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:Lc,render:e}};P.isValidElement=qi;P.lazy=function(e){return{$$typeof:Rc,_payload:{_status:-1,_result:e},_init:Fc}};P.memo=function(e,t){return{$$typeof:zc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};P.unstable_act=hu;P.useCallback=function(e,t){return ce.current.useCallback(e,t)};P.useContext=function(e){return ce.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};P.useEffect=function(e,t){return ce.current.useEffect(e,t)};P.useId=function(){return ce.current.useId()};P.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ce.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};P.useRef=function(e){return ce.current.useRef(e)};P.useState=function(e){return ce.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ce.current.useTransition()};P.version="18.3.1";su.exports=P;var ue=su.exports;const yu=Ic(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=ue,Bc=Symbol.for("react.element"),Hc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Wc=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qc={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Qc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Bc,type:e,key:i,ref:o,props:l,_owner:Wc.current}}ol.Fragment=Hc;ol.jsx=vu;ol.jsxs=vu;ou.exports=ol;var y=ou.exports,ti={},gu={exports:{}},ke={},Su={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var T=I.length;I.push(N);e:for(;0<T;){var Q=T-1>>>1,Z=I[Q];if(0<l(Z,N))I[Q]=N,I[T]=Z,T=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],T=I.pop();if(T!==N){I[0]=T;e:for(var Q=0,Z=I.length,rr=Z>>>1;Q<rr;){var gt=2*(Q+1)-1,El=I[gt],St=gt+1,lr=I[St];if(0>l(El,T))St<Z&&0>l(lr,El)?(I[Q]=lr,I[St]=T,Q=St):(I[Q]=El,I[gt]=T,Q=gt);else if(St<Z&&0>l(lr,T))I[Q]=lr,I[St]=T,Q=St;else break e}}return N}function l(I,N){var T=I.sortIndex-N.sortIndex;return T!==0?T:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],h=1,m=null,p=3,x=!1,S=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(I){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=I)r(c),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(c)}}function v(I){if(k=!1,d(I),!S)if(n(u)!==null)S=!0,Al(w);else{var N=n(c);N!==null&&Il(v,N.startTime-I)}}function w(I,N){S=!1,k&&(k=!1,f(C),C=-1),x=!0;var T=p;try{for(d(N),m=n(u);m!==null&&(!(m.expirationTime>N)||I&&!Te());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,p=m.priorityLevel;var Z=Q(m.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(u)&&r(u),d(N)}else r(u);m=n(u)}if(m!==null)var rr=!0;else{var gt=n(c);gt!==null&&Il(v,gt.startTime-N),rr=!1}return rr}finally{m=null,p=T,x=!1}}var E=!1,_=null,C=-1,W=5,L=-1;function Te(){return!(e.unstable_now()-L<W)}function fn(){if(_!==null){var I=e.unstable_now();L=I;var N=!0;try{N=_(!0,I)}finally{N?dn():(E=!1,_=null)}}else E=!1}var dn;if(typeof a=="function")dn=function(){a(fn)};else if(typeof MessageChannel<"u"){var Ko=new MessageChannel,kc=Ko.port2;Ko.port1.onmessage=fn,dn=function(){kc.postMessage(null)}}else dn=function(){R(fn,0)};function Al(I){_=I,E||(E=!0,dn())}function Il(I,N){C=R(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Al(w))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var T=p;p=N;try{return I()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var T=p;p=I;try{return N()}finally{p=T}},e.unstable_scheduleCallback=function(I,N,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,I={id:h++,callback:N,priorityLevel:I,startTime:T,expirationTime:Z,sortIndex:-1},T>Q?(I.sortIndex=T,t(c,I),n(u)===null&&I===n(c)&&(k?(f(C),C=-1):k=!0,Il(v,T-Q))):(I.sortIndex=Z,t(u,I),S||x||(S=!0,Al(w))),I},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(I){var N=p;return function(){var T=p;p=N;try{return I.apply(this,arguments)}finally{p=T}}}})(xu);Su.exports=xu;var Gc=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=ue,xe=Gc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ku=new Set,Mn={};function zt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ku.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Yc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qo={},bo={};function Xc(e){return ni.call(bo,e)?!0:ni.call(qo,e)?!1:Yc.test(e)?bo[e]=!0:(qo[e]=!0,!1)}function Zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,t,n,r){if(t===null||typeof t>"u"||Zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bi=/[\-:]([a-z])/g;function eo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bi,eo);te[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bi,eo);te[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bi,eo);te[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function to(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jc(t,n,l,r)&&(n=null),r||l===null?Xc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),no=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),lo=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Iu=Symbol.for("react.offscreen"),es=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Cl;function kn(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Nl=!1;function Tl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function qc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Ot:return"Portal";case ri:return"Profiler";case no:return"StrictMode";case li:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case wu:return(e._context.displayName||"Context")+".Provider";case ro:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lo:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===no?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ef(e){var t=Eu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=ef(e))}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Eu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ts(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cu(e,t){t=t.checked,t!=null&&to(e,"checked",t,!1)}function ui(e,t){Cu(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Nu(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,Pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tf=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Lu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Lu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var nf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Xt=null,Zt=null;function is(e){if(e=tr(e)){if(typeof hi!="function")throw Error(g(280));var t=e.stateNode;t&&(t=fl(t),hi(e.stateNode,e.type,t))}}function zu(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Ru(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,is(e),t)for(e=0;e<t.length;e++)is(t[e])}}function Mu(e,t){return e(t)}function Ou(){}var Pl=!1;function Du(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Mu(e,t,n)}finally{Pl=!1,(Xt!==null||Zt!==null)&&(Ou(),Ru())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var yi=!1;if(Ke)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){yi=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{yi=!1}function rf(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Cn=!1,Or=null,Dr=!1,vi=null,lf={onError:function(e){Cn=!0,Or=e}};function of(e,t,n,r,l,i,o,s,u){Cn=!1,Or=null,rf.apply(lf,arguments)}function sf(e,t,n,r,l,i,o,s,u){if(of.apply(this,arguments),Cn){if(Cn){var c=Or;Cn=!1,Or=null}else throw Error(g(198));Dr||(Dr=!0,vi=c)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function os(e){if(Rt(e)!==e)throw Error(g(188))}function uf(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return os(l),e;if(i===r)return os(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Uu(e){return e=uf(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var Bu=xe.unstable_scheduleCallback,ss=xe.unstable_cancelCallback,af=xe.unstable_shouldYield,cf=xe.unstable_requestPaint,G=xe.unstable_now,ff=xe.unstable_getCurrentPriorityLevel,oo=xe.unstable_ImmediatePriority,Hu=xe.unstable_UserBlockingPriority,Fr=xe.unstable_NormalPriority,df=xe.unstable_LowPriority,$u=xe.unstable_IdlePriority,sl=null,Ve=null;function pf(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:yf,mf=Math.log,hf=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(mf(e)/hf|0)|0}var ar=64,cr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=An(s):(i&=o,i!==0&&(r=An(i)))}else o=n&~l,o!==0?r=An(o):i!==0&&(r=An(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Re(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=vf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var z=0;function Qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gu,uo,Ku,Yu,Xu,Si=!1,fr=[],it=null,ot=null,st=null,Fn=new Map,Un=new Map,tt=[],xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function us(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function kf(e,t,n,r,l){switch(t){case"focusin":return it=hn(it,e,t,n,r,l),!0;case"dragenter":return ot=hn(ot,e,t,n,r,l),!0;case"mouseover":return st=hn(st,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,hn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Un.set(i,hn(Un.get(i)||null,e,t,n,r,l)),!0}return!1}function Zu(e){var t=wt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Fu(n),t!==null){e.blockedOn=t,Xu(e.priority,function(){Ku(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=tr(n),t!==null&&uo(t),e.blockedOn=n,!1;t.shift()}return!0}function as(e,t,n){Ir(e)&&n.delete(t)}function wf(){Si=!1,it!==null&&Ir(it)&&(it=null),ot!==null&&Ir(ot)&&(ot=null),st!==null&&Ir(st)&&(st=null),Fn.forEach(as),Un.forEach(as)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,wf)))}function Vn(e){function t(l){return yn(l,e)}if(0<fr.length){yn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&yn(it,e),ot!==null&&yn(ot,e),st!==null&&yn(st,e),Fn.forEach(t),Un.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Zu(n),n.blockedOn===null&&tt.shift()}var Jt=Je.ReactCurrentBatchConfig,Vr=!0;function Af(e,t,n,r){var l=z,i=Jt.transition;Jt.transition=null;try{z=1,ao(e,t,n,r)}finally{z=l,Jt.transition=i}}function If(e,t,n,r){var l=z,i=Jt.transition;Jt.transition=null;try{z=4,ao(e,t,n,r)}finally{z=l,Jt.transition=i}}function ao(e,t,n,r){if(Vr){var l=xi(e,t,n,r);if(l===null)Bl(e,t,r,Br,n),us(e,r);else if(kf(l,e,t,n,r))r.stopPropagation();else if(us(e,r),t&4&&-1<xf.indexOf(e)){for(;l!==null;){var i=tr(l);if(i!==null&&Gu(i),i=xi(e,t,n,r),i===null&&Bl(e,t,r,Br,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var Br=null;function xi(e,t,n,r){if(Br=null,e=io(r),e=wt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ff()){case oo:return 1;case Hu:return 4;case Fr:case df:return 16;case $u:return 536870912;default:return 16}default:return 16}}var rt=null,co=null,Er=null;function qu(){if(Er)return Er;var e,t=co,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function cs(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dr:cs,this.isPropagationStopped=cs,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=we(an),er=H({},an,{view:0,detail:0}),Ef=we(er),jl,zl,vn,ul=H({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(jl=e.screenX-vn.screenX,zl=e.screenY-vn.screenY):zl=jl=0,vn=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),fs=we(ul),_f=H({},ul,{dataTransfer:0}),Cf=we(_f),Nf=H({},er,{relatedTarget:0}),Rl=we(Nf),Tf=H({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=we(Tf),Lf=H({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=we(Lf),zf=H({},an,{data:0}),ds=we(zf),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function po(){return Df}var Ff=H({},er,{key:function(e){if(e.key){var t=Rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=we(Ff),Vf=H({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=we(Vf),Bf=H({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Hf=we(Bf),$f=H({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wf=we($f),Qf=H({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=we(Qf),Kf=[9,13,27,32],mo=Ke&&"CompositionEvent"in window,Nn=null;Ke&&"documentMode"in document&&(Nn=document.documentMode);var Yf=Ke&&"TextEvent"in window&&!Nn,bu=Ke&&(!mo||Nn&&8<Nn&&11>=Nn),ms=" ",hs=!1;function ea(e,t){switch(e){case"keyup":return Kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Xf(e,t){switch(e){case"compositionend":return ta(t);case"keypress":return t.which!==32?null:(hs=!0,ms);case"textInput":return e=t.data,e===ms&&hs?null:e;default:return null}}function Zf(e,t){if(Ft)return e==="compositionend"||!mo&&ea(e,t)?(e=qu(),Er=co=rt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var Jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jf[e.type]:t==="textarea"}function na(e,t,n,r){zu(r),t=Hr(t,"onChange"),0<t.length&&(n=new fo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Bn=null;function qf(e){pa(e,0)}function al(e){var t=Bt(e);if(_u(t))return e}function bf(e,t){if(e==="change")return t}var ra=!1;if(Ke){var Ml;if(Ke){var Ol="oninput"in document;if(!Ol){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Ol=typeof vs.oninput=="function"}Ml=Ol}else Ml=!1;ra=Ml&&(!document.documentMode||9<document.documentMode)}function gs(){Tn&&(Tn.detachEvent("onpropertychange",la),Bn=Tn=null)}function la(e){if(e.propertyName==="value"&&al(Bn)){var t=[];na(t,Bn,e,io(e)),Du(qf,t)}}function ed(e,t,n){e==="focusin"?(gs(),Tn=t,Bn=n,Tn.attachEvent("onpropertychange",la)):e==="focusout"&&gs()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Bn)}function nd(e,t){if(e==="click")return al(t)}function rd(e,t){if(e==="input"||e==="change")return al(t)}function ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:ld;function Hn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function Ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=Ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ss(n)}}function ia(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ia(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oa(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function id(e){var t=oa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ia(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=xs(n,i);var o=xs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var od=Ke&&"documentMode"in document&&11>=document.documentMode,Ut=null,ki=null,Pn=null,wi=!1;function ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Ut==null||Ut!==Mr(r)||(r=Ut,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Hn(Pn,r)||(Pn=r,r=Hr(ki,"onSelect"),0<r.length&&(t=new fo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ut)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Dl={},sa={};Ke&&(sa=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function cl(e){if(Dl[e])return Dl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sa)return Dl[e]=t[n];return e}var ua=cl("animationend"),aa=cl("animationiteration"),ca=cl("animationstart"),fa=cl("transitionend"),da=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){da.set(e,t),zt(t,[e])}for(var Fl=0;Fl<ws.length;Fl++){var Ul=ws[Fl],sd=Ul.toLowerCase(),ud=Ul[0].toUpperCase()+Ul.slice(1);ht(sd,"on"+ud)}ht(ua,"onAnimationEnd");ht(aa,"onAnimationIteration");ht(ca,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(fa,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function As(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sf(r,t,void 0,e),e.currentTarget=null}function pa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;As(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;As(l,s,c),i=u}}}if(Dr)throw e=vi,Dr=!1,vi=null,e}function D(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(ma(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),ma(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[mr]){e[mr]=!0,ku.forEach(function(n){n!=="selectionchange"&&(ad.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Vl("selectionchange",!1,t))}}function ma(e,t,n,r){switch(Ju(t)){case 1:var l=Af;break;case 4:l=If;break;default:l=ao}n=l.bind(null,t,n,e),l=void 0,!yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Du(function(){var c=i,h=io(n),m=[];e:{var p=da.get(e);if(p!==void 0){var x=fo,S=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":x=Uf;break;case"focusin":S="focus",x=Rl;break;case"focusout":S="blur",x=Rl;break;case"beforeblur":case"afterblur":x=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Hf;break;case ua:case aa:case ca:x=Pf;break;case fa:x=Wf;break;case"scroll":x=Ef;break;case"wheel":x=Gf;break;case"copy":case"cut":case"paste":x=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ps}var k=(t&4)!==0,R=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var a=c,d;a!==null;){d=a;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Dn(a,f),v!=null&&k.push(Wn(a,v,d)))),R)break;a=a.return}0<k.length&&(p=new x(p,S,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==mi&&(S=n.relatedTarget||n.fromElement)&&(wt(S)||S[Ye]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?wt(S):null,S!==null&&(R=Rt(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(k=fs,v="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=ps,v="onPointerLeave",f="onPointerEnter",a="pointer"),R=x==null?p:Bt(x),d=S==null?p:Bt(S),p=new k(v,a+"leave",x,n,h),p.target=R,p.relatedTarget=d,v=null,wt(h)===c&&(k=new k(f,a+"enter",S,n,h),k.target=d,k.relatedTarget=R,v=k),R=v,x&&S)t:{for(k=x,f=S,a=0,d=k;d;d=Mt(d))a++;for(d=0,v=f;v;v=Mt(v))d++;for(;0<a-d;)k=Mt(k),a--;for(;0<d-a;)f=Mt(f),d--;for(;a--;){if(k===f||f!==null&&k===f.alternate)break t;k=Mt(k),f=Mt(f)}k=null}else k=null;x!==null&&Is(m,p,x,k,!1),S!==null&&R!==null&&Is(m,R,S,k,!0)}}e:{if(p=c?Bt(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var w=bf;else if(ys(p))if(ra)w=rd;else{w=td;var E=ed}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=nd);if(w&&(w=w(e,c))){na(m,w,n,h);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ai(p,"number",p.value)}switch(E=c?Bt(c):window,e){case"focusin":(ys(E)||E.contentEditable==="true")&&(Ut=E,ki=c,Pn=null);break;case"focusout":Pn=ki=Ut=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,ks(m,n,h);break;case"selectionchange":if(od)break;case"keydown":case"keyup":ks(m,n,h)}var _;if(mo)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ft?ea(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(bu&&n.locale!=="ko"&&(Ft||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ft&&(_=qu()):(rt=h,co="value"in rt?rt.value:rt.textContent,Ft=!0)),E=Hr(c,C),0<E.length&&(C=new ds(C,e,null,n,h),m.push({event:C,listeners:E}),_?C.data=_:(_=ta(n),_!==null&&(C.data=_)))),(_=Yf?Xf(e,n):Zf(e,n))&&(c=Hr(c,"onBeforeInput"),0<c.length&&(h=new ds("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}pa(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Wn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Wn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Dn(n,i),u!=null&&o.unshift(Wn(n,u,s))):l||(u=Dn(n,i),u!=null&&o.push(Wn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function Es(e){return(typeof e=="string"?e:""+e).replace(cd,`
`).replace(fd,"")}function hr(e,t,n){if(t=Es(t),Es(e)!==t&&n)throw Error(g(425))}function $r(){}var Ai=null,Ii=null;function Ei(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,dd=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(md)}:_i;function md(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+cn,Qn="__reactProps$"+cn,Ye="__reactContainer$"+cn,Ci="__reactEvents$"+cn,hd="__reactListeners$"+cn,yd="__reactHandles$"+cn;function wt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[Ue])return n;e=Cs(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function fl(e){return e[Qn]||null}var Ni=[],Ht=-1;function yt(e){return{current:e}}function F(e){0>Ht||(e.current=Ni[Ht],Ni[Ht]=null,Ht--)}function O(e,t){Ht++,Ni[Ht]=e.current,e.current=t}var mt={},ie=yt(mt),me=yt(!1),Ct=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Wr(){F(me),F(ie)}function Ns(e,t,n){if(ie.current!==mt)throw Error(g(168));O(ie,t),O(me,n)}function ha(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,bc(e)||"Unknown",l));return H({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Ct=ie.current,O(ie,e),O(me,me.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=ha(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(ie),O(ie,e)):F(me),O(me,n)}var $e=null,dl=!1,$l=!1;function ya(e){$e===null?$e=[e]:$e.push(e)}function vd(e){dl=!0,ya(e)}function vt(){if(!$l&&$e!==null){$l=!0;var e=0,t=z;try{var n=$e;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,dl=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Bu(oo,vt),l}finally{z=t,$l=!1}}return null}var $t=[],Wt=0,Gr=null,Kr=0,Ae=[],Ie=0,Nt=null,We=1,Qe="";function xt(e,t){$t[Wt++]=Kr,$t[Wt++]=Gr,Gr=e,Kr=t}function va(e,t,n){Ae[Ie++]=We,Ae[Ie++]=Qe,Ae[Ie++]=Nt,Nt=e;var r=We;e=Qe;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Re(t)+l|n<<l|r,Qe=i+e}else We=1<<i|n<<l|r,Qe=e}function yo(e){e.return!==null&&(xt(e,1),va(e,1,0))}function vo(e){for(;e===Gr;)Gr=$t[--Wt],$t[Wt]=null,Kr=$t[--Wt],$t[Wt]=null;for(;e===Nt;)Nt=Ae[--Ie],Ae[Ie]=null,Qe=Ae[--Ie],Ae[Ie]=null,We=Ae[--Ie],Ae[Ie]=null}var Se=null,ge=null,U=!1,ze=null;function ga(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ge=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:We,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ge=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(U){var t=ge;if(t){var n=t;if(!Ps(e,t)){if(Ti(e))throw Error(g(418));t=ut(n.nextSibling);var r=Se;t&&Ps(e,t)?ga(r,n):(e.flags=e.flags&-4097|2,U=!1,Se=e)}}else{if(Ti(e))throw Error(g(418));e.flags=e.flags&-4097|2,U=!1,Se=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function yr(e){if(e!==Se)return!1;if(!U)return Ls(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ei(e.type,e.memoizedProps)),t&&(t=ge)){if(Ti(e))throw Sa(),Error(g(418));for(;t;)ga(e,t),t=ut(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=Se?ut(e.stateNode.nextSibling):null;return!0}function Sa(){for(var e=ge;e;)e=ut(e.nextSibling)}function nn(){ge=Se=null,U=!1}function go(e){ze===null?ze=[e]:ze.push(e)}var gd=Je.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function js(e){var t=e._init;return t(e._payload)}function xa(e){function t(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function n(f,a){if(!e)return null;for(;a!==null;)t(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=dt(f,a),f.index=0,f.sibling=null,f}function i(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,a,d,v){return a===null||a.tag!==6?(a=Zl(d,f.mode,v),a.return=f,a):(a=l(a,d),a.return=f,a)}function u(f,a,d,v){var w=d.type;return w===Dt?h(f,a,d.props.children,v,d.key):a!==null&&(a.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===be&&js(w)===a.type)?(v=l(a,d.props),v.ref=gn(f,a,d),v.return=f,v):(v=zr(d.type,d.key,d.props,null,f.mode,v),v.ref=gn(f,a,d),v.return=f,v)}function c(f,a,d,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Jl(d,f.mode,v),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function h(f,a,d,v,w){return a===null||a.tag!==7?(a=_t(d,f.mode,v,w),a.return=f,a):(a=l(a,d),a.return=f,a)}function m(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Zl(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case or:return d=zr(a.type,a.key,a.props,null,f.mode,d),d.ref=gn(f,null,a),d.return=f,d;case Ot:return a=Jl(a,f.mode,d),a.return=f,a;case be:var v=a._init;return m(f,v(a._payload),d)}if(wn(a)||pn(a))return a=_t(a,f.mode,d,null),a.return=f,a;vr(f,a)}return null}function p(f,a,d,v){var w=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:s(f,a,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case or:return d.key===w?u(f,a,d,v):null;case Ot:return d.key===w?c(f,a,d,v):null;case be:return w=d._init,p(f,a,w(d._payload),v)}if(wn(d)||pn(d))return w!==null?null:h(f,a,d,v,null);vr(f,d)}return null}function x(f,a,d,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,s(a,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case or:return f=f.get(v.key===null?d:v.key)||null,u(a,f,v,w);case Ot:return f=f.get(v.key===null?d:v.key)||null,c(a,f,v,w);case be:var E=v._init;return x(f,a,d,E(v._payload),w)}if(wn(v)||pn(v))return f=f.get(d)||null,h(a,f,v,w,null);vr(a,v)}return null}function S(f,a,d,v){for(var w=null,E=null,_=a,C=a=0,W=null;_!==null&&C<d.length;C++){_.index>C?(W=_,_=null):W=_.sibling;var L=p(f,_,d[C],v);if(L===null){_===null&&(_=W);break}e&&_&&L.alternate===null&&t(f,_),a=i(L,a,C),E===null?w=L:E.sibling=L,E=L,_=W}if(C===d.length)return n(f,_),U&&xt(f,C),w;if(_===null){for(;C<d.length;C++)_=m(f,d[C],v),_!==null&&(a=i(_,a,C),E===null?w=_:E.sibling=_,E=_);return U&&xt(f,C),w}for(_=r(f,_);C<d.length;C++)W=x(_,f,C,d[C],v),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?C:W.key),a=i(W,a,C),E===null?w=W:E.sibling=W,E=W);return e&&_.forEach(function(Te){return t(f,Te)}),U&&xt(f,C),w}function k(f,a,d,v){var w=pn(d);if(typeof w!="function")throw Error(g(150));if(d=w.call(d),d==null)throw Error(g(151));for(var E=w=null,_=a,C=a=0,W=null,L=d.next();_!==null&&!L.done;C++,L=d.next()){_.index>C?(W=_,_=null):W=_.sibling;var Te=p(f,_,L.value,v);if(Te===null){_===null&&(_=W);break}e&&_&&Te.alternate===null&&t(f,_),a=i(Te,a,C),E===null?w=Te:E.sibling=Te,E=Te,_=W}if(L.done)return n(f,_),U&&xt(f,C),w;if(_===null){for(;!L.done;C++,L=d.next())L=m(f,L.value,v),L!==null&&(a=i(L,a,C),E===null?w=L:E.sibling=L,E=L);return U&&xt(f,C),w}for(_=r(f,_);!L.done;C++,L=d.next())L=x(_,f,C,L.value,v),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?C:L.key),a=i(L,a,C),E===null?w=L:E.sibling=L,E=L);return e&&_.forEach(function(fn){return t(f,fn)}),U&&xt(f,C),w}function R(f,a,d,v){if(typeof d=="object"&&d!==null&&d.type===Dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case or:e:{for(var w=d.key,E=a;E!==null;){if(E.key===w){if(w=d.type,w===Dt){if(E.tag===7){n(f,E.sibling),a=l(E,d.props.children),a.return=f,f=a;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===be&&js(w)===E.type){n(f,E.sibling),a=l(E,d.props),a.ref=gn(f,E,d),a.return=f,f=a;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===Dt?(a=_t(d.props.children,f.mode,v,d.key),a.return=f,f=a):(v=zr(d.type,d.key,d.props,null,f.mode,v),v.ref=gn(f,a,d),v.return=f,f=v)}return o(f);case Ot:e:{for(E=d.key;a!==null;){if(a.key===E)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){n(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{n(f,a);break}else t(f,a);a=a.sibling}a=Jl(d,f.mode,v),a.return=f,f=a}return o(f);case be:return E=d._init,R(f,a,E(d._payload),v)}if(wn(d))return S(f,a,d,v);if(pn(d))return k(f,a,d,v);vr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(n(f,a.sibling),a=l(a,d),a.return=f,f=a):(n(f,a),a=Zl(d,f.mode,v),a.return=f,f=a),o(f)):n(f,a)}return R}var rn=xa(!0),ka=xa(!1),Yr=yt(null),Xr=null,Qt=null,So=null;function xo(){So=Qt=Xr=null}function ko(e){var t=Yr.current;F(Yr),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){Xr=e,So=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Xr===null)throw Error(g(308));Qt=e,Xr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var At=null;function wo(e){At===null?At=[e]:At.push(e)}function wa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,wo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,h=c=u=null,s=i;do{var p=s.lane,x=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,k=s;switch(p=t,x=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){m=S.call(x,m,p);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,p=typeof S=="function"?S.call(x,m,p):S,p==null)break e;m=H({},m,p);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else x={eventTime:x,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,u=m):h=h.next=x,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=m}}function Rs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var nr={},Be=yt(nr),Gn=yt(nr),Kn=yt(nr);function It(e){if(e===nr)throw Error(g(174));return e}function Io(e,t){switch(O(Kn,t),O(Gn,e),O(Be,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fi(t,e)}F(Be),O(Be,t)}function ln(){F(Be),F(Gn),F(Kn)}function Ia(e){It(Kn.current);var t=It(Be.current),n=fi(t,e.type);t!==n&&(O(Gn,e),O(Be,n))}function Eo(e){Gn.current===e&&(F(Be),F(Gn))}var V=yt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function _o(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var Nr=Je.ReactCurrentDispatcher,Ql=Je.ReactCurrentBatchConfig,Tt=0,B=null,Y=null,J=null,qr=!1,Ln=!1,Yn=0,Sd=0;function ne(){throw Error(g(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if(Tt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?Ad:Id,e=n(r,l),Ln){i=0;do{if(Ln=!1,Yn=0,25<=i)throw Error(g(301));i+=1,J=Y=null,t.updateQueue=null,Nr.current=Ed,e=n(r,l)}while(Ln)}if(Nr.current=br,t=Y!==null&&Y.next!==null,Tt=0,J=Y=B=null,qr=!1,t)throw Error(g(300));return e}function To(){var e=Yn!==0;return Yn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Ne(){if(Y===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,Y=e;else{if(e===null)throw Error(g(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var h=c.lane;if((Tt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,B.lanes|=h,Pt|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ea(){}function _a(e,t){var n=B,r=Ne(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Po(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Na.bind(null,n,r,l,t),void 0,null),q===null)throw Error(g(349));Tt&30||Ca(n,t,l)}return l}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Na(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&La(e)}function Ta(e,t,n){return n(function(){Pa(t)&&La(e)})}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function La(e){var t=Xe(e,1);t!==null&&Me(t,e,1,-1)}function Ms(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=wd.bind(null,B,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ja(){return Ne().memoizedState}function Tr(e,t,n,r){var l=Fe();B.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ne();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Co(r,o.deps)){l.memoizedState=Zn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Zn(1|t,n,i,r)}function Os(e,t){return Tr(8390656,8,e,t)}function Po(e,t){return pl(2048,8,e,t)}function za(e,t){return pl(4,2,e,t)}function Ra(e,t){return pl(4,4,e,t)}function Ma(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oa(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Ma.bind(null,t,e),n)}function Lo(){}function Da(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fa(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ua(e,t,n){return Tt&21?(Oe(n,t)||(n=Wu(),B.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function xd(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{z=n,Ql.transition=r}}function Va(){return Ne().memoizedState}function kd(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ba(e))Ha(t,n);else if(n=wa(e,t,n,r),n!==null){var l=ae();Me(n,e,r,l),$a(n,t,r)}}function wd(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ba(e))Ha(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,o)){var u=t.interleaved;u===null?(l.next=l,wo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=wa(e,t,l,r),n!==null&&(l=ae(),Me(n,e,r,l),$a(n,t,r))}}function Ba(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ha(e,t){Ln=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $a(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var br={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Ad={readContext:Ce,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Os,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ms,useDebugValue:Lo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ms(!1),t=e[0];return e=xd.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Fe();if(U){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),q===null)throw Error(g(349));Tt&30||Ca(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Os(Ta.bind(null,r,i,e),[e]),r.flags|=2048,Zn(9,Na.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=q.identifierPrefix;if(U){var n=Qe,r=We;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Id={readContext:Ce,useCallback:Da,useContext:Ce,useEffect:Po,useImperativeHandle:Oa,useInsertionEffect:za,useLayoutEffect:Ra,useMemo:Fa,useReducer:Gl,useRef:ja,useState:function(){return Gl(Xn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ne();return Ua(t,Y.memoizedState,e)},useTransition:function(){var e=Gl(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ea,useSyncExternalStore:_a,useId:Va,unstable_isNewReconciler:!1},Ed={readContext:Ce,useCallback:Da,useContext:Ce,useEffect:Po,useImperativeHandle:Oa,useInsertionEffect:za,useLayoutEffect:Ra,useMemo:Fa,useReducer:Kl,useRef:ja,useState:function(){return Kl(Xn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ne();return Y===null?t.memoizedState=e:Ua(t,Y.memoizedState,e)},useTransition:function(){var e=Kl(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ea,useSyncExternalStore:_a,useId:Va,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=Ge(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=Ge(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Me(t,e,r,n),Cr(t,e,r))}};function Ds(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,i):!0}function Wa(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=he(t)?Ct:ie.current,r=t.contextTypes,i=(r=r!=null)?tn(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ao(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=he(t)?Ct:ie.current,l.context=tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ji(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Zr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=qc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _d=typeof WeakMap=="function"?WeakMap:Map;function Qa(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Wi=r),Ri(e,t)},n}function Ga(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ri(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Us(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _d;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Vd.bind(null,e,t,n),t.then(e,e))}function Vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var Cd=Je.ReactCurrentOwner,pe=!1;function oe(e,t,n,r){t.child=e===null?ka(t,null,n,r):rn(t,e.child,n,r)}function Hs(e,t,n,r,l){n=n.render;var i=t.ref;return qt(t,l),r=No(e,t,n,r,i,l),n=To(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&n&&yo(t),t.flags|=1,oe(e,t,r,l),t.child)}function $s(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ka(e,t,i,r,l)):(e=zr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ka(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return Mi(e,t,n,r,l)}function Ya(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Kt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Kt,ve),ve|=r;return oe(e,t,l,n),t.child}function Xa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,l){var i=he(n)?Ct:ie.current;return i=tn(t,i),qt(t,l),n=No(e,t,n,r,i,l),r=To(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&r&&yo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Ws(e,t,n,r,l){if(he(n)){var i=!0;Qr(t)}else i=!1;if(qt(t,l),t.stateNode===null)Pr(e,t),Wa(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=he(n)?Ct:ie.current,c=tn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Fs(t,o,r,c),et=!1;var p=t.memoizedState;o.state=p,Zr(t,r,o,l),u=t.memoizedState,s!==r||p!==u||me.current||et?(typeof h=="function"&&(ji(t,n,h,r),u=t.memoizedState),(s=et||Ds(t,n,s,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Aa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Le(t.type,s),o.props=c,m=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=he(n)?Ct:ie.current,u=tn(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||p!==u)&&Fs(t,o,r,u),et=!1,p=t.memoizedState,o.state=p,Zr(t,r,o,l);var S=t.memoizedState;s!==m||p!==S||me.current||et?(typeof x=="function"&&(ji(t,n,x,r),S=t.memoizedState),(c=et||Ds(t,n,c,r,p,S,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Oi(e,t,n,r,i,l)}function Oi(e,t,n,r,l,i){Xa(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ts(t,n,!1),Ze(e,t,i);r=t.stateNode,Cd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rn(t,e.child,null,i),t.child=rn(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,l&&Ts(t,n,!0),t.child}function Za(e){var t=e.stateNode;t.pendingContext?Ns(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ns(e,t.context,!1),Io(e,t.containerInfo)}function Qs(e,t,n,r,l){return nn(),go(l),t.flags|=256,oe(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ja(e,t,n){var r=t.pendingProps,l=V.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(V,l&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vl(o,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fi(n),t.memoizedState=Di,e):jo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Nd(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=dt(s,i):(i=_t(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Fi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jo(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&go(r),rn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(g(422))),gr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rn(t,e.child,null,o),t.child.memoizedState=Fi(o),t.memoizedState=Di,i);if(!(t.mode&1))return gr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(g(419)),r=Yl(i,r,void 0),gr(e,t,o,r)}if(s=(o&e.childLanes)!==0,pe||s){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Me(r,e,l,-1))}return Fo(),r=Yl(Error(g(421))),gr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Bd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=ut(l.nextSibling),Se=t,U=!0,ze=null,e!==null&&(Ae[Ie++]=We,Ae[Ie++]=Qe,Ae[Ie++]=Nt,We=e.id,Qe=e.overflow,Nt=t),t=jo(t,r.children),t.flags|=4096,t)}function Gs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function Xl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function qa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gs(e,n,t);else if(e.tag===19)Gs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Xl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Xl(t,!0,n,null,i);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Td(e,t,n){switch(t.tag){case 3:Za(t),nn();break;case 5:Ia(t);break;case 1:he(t.type)&&Qr(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Ja(e,t,n):(O(V,V.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);O(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ya(e,t,n)}return Ze(e,t,n)}var ba,Ui,ec,tc;ba=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};ec=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,It(Be.current);var i=null;switch(n){case"input":l=si(e,l),r=si(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ci(e,l),r=ci(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}di(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pd(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return he(t.type)&&Wr(),re(t),null;case 3:return r=t.stateNode,ln(),F(me),F(ie),_o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Ki(ze),ze=null))),Ui(e,t),re(t),null;case 5:Eo(t);var l=It(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return re(t),null}if(e=It(Be.current),yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<In.length;l++)D(In[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":ts(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":rs(r,i),D("invalid",r)}di(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),l=["children",""+s]):Mn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":sr(r),ns(r,i,!0);break;case"textarea":sr(r),ls(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Qn]=r,ba(e,t,!1,!1),t.stateNode=e;e:{switch(o=pi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<In.length;l++)D(In[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":ts(e,r),l=si(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":rs(e,r),l=ci(e,r),D("invalid",e);break;default:l=r}di(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?ju(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Pu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&D("scroll",e):u!=null&&to(e,i,u,o))}switch(n){case"input":sr(e),ns(e,r,!1);break;case"textarea":sr(e),ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=It(Kn.current),It(Be.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return re(t),null;case 13:if(F(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ge!==null&&t.mode&1&&!(t.flags&128))Sa(),nn(),t.flags|=98560,i=!1;else if(i=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Ue]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else ze!==null&&(Ki(ze),ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Fo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return ln(),Ui(e,t),e===null&&$n(t.stateNode.containerInfo),re(t),null;case 10:return ko(t.type._context),re(t),null;case 17:return he(t.type)&&Wr(),re(t),null;case 19:if(F(V),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Sn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Jr(e),o!==null){for(t.flags|=128,Sn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>sn&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return re(t),null}else 2*G()-i.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=V.current,O(V,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Do(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function Ld(e,t){switch(vo(t),t.tag){case 1:return he(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),F(me),F(ie),_o(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eo(t),null;case 13:if(F(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(V),null;case 4:return ln(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Do(),null;case 24:return null;default:return null}}var Sr=!1,le=!1,jd=typeof WeakSet=="function"?WeakSet:Set,A=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Vi(e,t,n){try{n()}catch(r){$(e,t,r)}}var Ks=!1;function zd(e,t){if(Ai=Vr,e=oa(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)p=m,m=x;for(;;){if(m===e)break t;if(p===n&&++c===l&&(s=o),p===i&&++h===r&&(u=o),(x=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},Vr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,R=S.memoizedState,f=t.stateNode,a=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),R);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return S=Ks,Ks=!1,S}function jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Vi(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Qn],delete t[Ci],delete t[hd],delete t[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rc(e){return e.tag===5||e.tag===3||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function $i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}var b=null,je=!1;function qe(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:le||Gt(n,t);case 6:var r=b,l=je;b=null,qe(e,t,n),b=r,je=l,b!==null&&(je?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(je?(e=b,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),Vn(e)):Hl(b,n.stateNode));break;case 4:r=b,l=je,b=n.stateNode.containerInfo,je=!0,qe(e,t,n),b=r,je=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vi(n,t,o),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!le&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){$(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,qe(e,t,n),le=r):qe(e,t,n);break;default:qe(e,t,n)}}function Xs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jd),t.forEach(function(r){var l=Hd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:b=s.stateNode,je=!1;break e;case 3:b=s.stateNode.containerInfo,je=!0;break e;case 4:b=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(b===null)throw Error(g(160));lc(i,o,l),b=null,je=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){$(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ic(t,e),t=t.sibling}function ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),De(e),r&4){try{jn(3,e,e.return),hl(3,e)}catch(k){$(e,e.return,k)}try{jn(5,e,e.return)}catch(k){$(e,e.return,k)}}break;case 1:Pe(t,e),De(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Pe(t,e),De(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(k){$(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Cu(l,i),pi(s,o);var c=pi(s,i);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?ju(l,m):h==="dangerouslySetInnerHTML"?Pu(l,m):h==="children"?On(l,m):to(l,h,m,c)}switch(s){case"input":ui(l,i);break;case"textarea":Nu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Yt(l,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qn]=i}catch(k){$(e,e.return,k)}}break;case 6:if(Pe(t,e),De(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){$(e,e.return,k)}}break;case 3:if(Pe(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(k){$(e,e.return,k)}break;case 4:Pe(t,e),De(e);break;case 13:Pe(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Mo=G())),r&4&&Xs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||h,Pe(t,e),le=c):Pe(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(A=e,h=e.child;h!==null;){for(m=A=h;A!==null;){switch(p=A,x=p.child,p.tag){case 0:case 11:case 14:case 15:jn(4,p,p.return);break;case 1:Gt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){$(r,n,k)}}break;case 5:Gt(p,p.return);break;case 22:if(p.memoizedState!==null){Js(m);continue}}x!==null?(x.return=p,A=x):Js(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Lu("display",o))}catch(k){$(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){$(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),De(e),r&4&&Xs(e);break;case 21:break;default:Pe(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rc(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var i=Ys(e);$i(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ys(e);Hi(e,s,o);break;default:throw Error(g(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rd(e,t,n){A=e,oc(e)}function oc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Sr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||le;s=Sr;var c=le;if(Sr=o,(le=u)&&!c)for(A=l;A!==null;)o=A,u=o.child,o.tag===22&&o.memoizedState!==null?qs(l):u!==null?(u.return=o,A=u):qs(l);for(;i!==null;)A=i,oc(i),i=i.sibling;A=l,Sr=s,le=c}Zs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,A=i):Zs(e)}}function Zs(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Vn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}le||t.flags&512&&Bi(t)}catch(p){$(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Js(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function qs(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){$(t,l,u)}}var i=t.return;try{Bi(t)}catch(u){$(t,i,u)}break;case 5:var o=t.return;try{Bi(t)}catch(u){$(t,o,u)}}}catch(u){$(t,t.return,u)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var Md=Math.ceil,el=Je.ReactCurrentDispatcher,zo=Je.ReactCurrentOwner,_e=Je.ReactCurrentBatchConfig,j=0,q=null,K=null,ee=0,ve=0,Kt=yt(0),X=0,Jn=null,Pt=0,yl=0,Ro=0,zn=null,de=null,Mo=0,sn=1/0,He=null,tl=!1,Wi=null,ct=null,xr=!1,lt=null,nl=0,Rn=0,Qi=null,Lr=-1,jr=0;function ae(){return j&6?G():Lr!==-1?Lr:Lr=G()}function ft(e){return e.mode&1?j&2&&ee!==0?ee&-ee:gd.transition!==null?(jr===0&&(jr=Wu()),jr):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e):1}function Me(e,t,n,r){if(50<Rn)throw Rn=0,Qi=null,Error(g(185));bn(e,n,r),(!(j&2)||e!==q)&&(e===q&&(!(j&2)&&(yl|=n),X===4&&nt(e,ee)),ye(e,r),n===1&&j===0&&!(t.mode&1)&&(sn=G()+500,dl&&vt()))}function ye(e,t){var n=e.callbackNode;gf(e,t);var r=Ur(e,e===q?ee:0);if(r===0)n!==null&&ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ss(n),t===1)e.tag===0?vd(bs.bind(null,e)):ya(bs.bind(null,e)),pd(function(){!(j&6)&&vt()}),n=null;else{switch(Qu(r)){case 1:n=oo;break;case 4:n=Hu;break;case 16:n=Fr;break;case 536870912:n=$u;break;default:n=Fr}n=mc(n,sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sc(e,t){if(Lr=-1,jr=0,j&6)throw Error(g(327));var n=e.callbackNode;if(bt()&&e.callbackNode!==n)return null;var r=Ur(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var l=j;j|=2;var i=ac();(q!==e||ee!==t)&&(He=null,sn=G()+500,Et(e,t));do try{Fd();break}catch(s){uc(e,s)}while(!0);xo(),el.current=i,j=l,K!==null?t=0:(q=null,ee=0,t=X)}if(t!==0){if(t===2&&(l=gi(e),l!==0&&(r=l,t=Gi(e,l))),t===1)throw n=Jn,Et(e,0),nt(e,r),ye(e,G()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Od(l)&&(t=rl(e,r),t===2&&(i=gi(e),i!==0&&(r=i,t=Gi(e,i))),t===1))throw n=Jn,Et(e,0),nt(e,r),ye(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:kt(e,de,He);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Mo+500-G(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(kt.bind(null,e,de,He),t);break}kt(e,de,He);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Re(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Md(r/1960))-r,10<r){e.timeoutHandle=_i(kt.bind(null,e,de,He),r);break}kt(e,de,He);break;case 5:kt(e,de,He);break;default:throw Error(g(329))}}}return ye(e,G()),e.callbackNode===n?sc.bind(null,e):null}function Gi(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=rl(e,t),e!==2&&(t=de,de=n,t!==null&&Ki(t)),e}function Ki(e){de===null?de=e:de.push.apply(de,e)}function Od(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ro,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function bs(e){if(j&6)throw Error(g(327));bt();var t=Ur(e,0);if(!(t&1))return ye(e,G()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=gi(e);r!==0&&(t=r,n=Gi(e,r))}if(n===1)throw n=Jn,Et(e,0),nt(e,t),ye(e,G()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,He),ye(e,G()),null}function Oo(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(sn=G()+500,dl&&vt())}}function Lt(e){lt!==null&&lt.tag===0&&!(j&6)&&bt();var t=j;j|=1;var n=_e.transition,r=z;try{if(_e.transition=null,z=1,e)return e()}finally{z=r,_e.transition=n,j=t,!(j&6)&&vt()}}function Do(){ve=Kt.current,F(Kt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:ln(),F(me),F(ie),_o();break;case 5:Eo(r);break;case 4:ln();break;case 13:F(V);break;case 19:F(V);break;case 10:ko(r.type._context);break;case 22:case 23:Do()}n=n.return}if(q=e,K=e=dt(e.current,null),ee=ve=t,X=0,Jn=null,Ro=yl=Pt=0,de=zn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}At=null}return e}function uc(e,t){do{var n=K;try{if(xo(),Nr.current=br,qr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(Tt=0,J=Y=B=null,Ln=!1,Yn=0,zo.current=null,n===null||n.return===null){X=1,Jn=t,K=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Vs(o);if(x!==null){x.flags&=-257,Bs(x,o,s,i,t),x.mode&1&&Us(i,c,t),t=x,u=c;var S=t.updateQueue;if(S===null){var k=new Set;k.add(u),t.updateQueue=k}else S.add(u);break e}else{if(!(t&1)){Us(i,c,t),Fo();break e}u=Error(g(426))}}else if(U&&s.mode&1){var R=Vs(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Bs(R,o,s,i,t),go(on(u,s));break e}}i=u=on(u,s),X!==4&&(X=2),zn===null?zn=[i]:zn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Qa(i,u,t);zs(i,f);break e;case 1:s=u;var a=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ct===null||!ct.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ga(i,s,t);zs(i,v);break e}}i=i.return}while(i!==null)}fc(n)}catch(w){t=w,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function ac(){var e=el.current;return el.current=br,e===null?br:e}function Fo(){(X===0||X===3||X===2)&&(X=4),q===null||!(Pt&268435455)&&!(yl&268435455)||nt(q,ee)}function rl(e,t){var n=j;j|=2;var r=ac();(q!==e||ee!==t)&&(He=null,Et(e,t));do try{Dd();break}catch(l){uc(e,l)}while(!0);if(xo(),j=n,el.current=r,K!==null)throw Error(g(261));return q=null,ee=0,X}function Dd(){for(;K!==null;)cc(K)}function Fd(){for(;K!==null&&!af();)cc(K)}function cc(e){var t=pc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?fc(e):K=t,zo.current=null}function fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ld(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=Pd(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=z,l=_e.transition;try{_e.transition=null,z=1,Ud(e,t,n,r)}finally{_e.transition=l,z=r}return null}function Ud(e,t,n,r){do bt();while(lt!==null);if(j&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sf(e,i),e===q&&(K=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,mc(Fr,function(){return bt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var o=z;z=1;var s=j;j|=4,zo.current=null,zd(e,n),ic(n,e),id(Ii),Vr=!!Ai,Ii=Ai=null,e.current=n,Rd(n),cf(),j=s,z=o,_e.transition=i}else e.current=n;if(xr&&(xr=!1,lt=e,nl=l),i=e.pendingLanes,i===0&&(ct=null),pf(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Wi,Wi=null,e;return nl&1&&e.tag!==0&&bt(),i=e.pendingLanes,i&1?e===Qi?Rn++:(Rn=0,Qi=e):Rn=0,vt(),null}function bt(){if(lt!==null){var e=Qu(nl),t=_e.transition,n=z;try{if(_e.transition=null,z=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,nl=0,j&6)throw Error(g(331));var l=j;for(j|=4,A=e.current;A!==null;){var i=A,o=i.child;if(A.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(A=c;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:jn(8,h,i)}var m=h.child;if(m!==null)m.return=h,A=m;else for(;A!==null;){h=A;var p=h.sibling,x=h.return;if(nc(h),h===c){A=null;break}if(p!==null){p.return=x,A=p;break}A=x}}}var S=i.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}A=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,A=o;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,A=f;break e}A=i.return}}var a=e.current;for(A=a;A!==null;){o=A;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,A=d;else e:for(o=a;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(w){$(s,s.return,w)}if(s===o){A=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,A=v;break e}A=s.return}}if(j=l,vt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{z=n,_e.transition=t}}return!1}function eu(e,t,n){t=on(n,t),t=Qa(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(bn(e,1,t),ye(e,t))}function $(e,t,n){if(e.tag===3)eu(e,e,n);else for(;t!==null;){if(t.tag===3){eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=on(n,e),e=Ga(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(bn(t,1,e),ye(t,e));break}}t=t.return}}function Vd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>G()-Mo?Et(e,0):Ro|=n),ye(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ae();e=Xe(e,t),e!==null&&(bn(e,t,n),ye(e,n))}function Bd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Hd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),dc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Td(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&va(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=tn(t,ie.current);qt(t,n),l=No(null,t,r,e,l,n);var i=To();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ao(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Oi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&yo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Wd(r),e=Le(r,e),l){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=Ws(null,t,r,e,n);break e;case 11:t=Hs(null,t,r,e,n);break e;case 14:t=$s(null,t,r,Le(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Mi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ws(e,t,r,l,n);case 3:e:{if(Za(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Aa(e,t),Zr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=on(Error(g(423)),t),t=Qs(e,t,r,n,l);break e}else if(r!==l){l=on(Error(g(424)),t),t=Qs(e,t,r,n,l);break e}else for(ge=ut(t.stateNode.containerInfo.firstChild),Se=t,U=!0,ze=null,n=ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Ze(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return Ia(t),e===null&&Pi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ei(r,l)?o=null:i!==null&&Ei(r,i)&&(t.flags|=32),Xa(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return Ja(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Hs(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Yr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!me.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ge(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Li(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Li(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,qt(t,n),l=Ce(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),$s(e,t,r,l,n);case 15:return Ka(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Pr(e,t),t.tag=1,he(r)?(e=!0,Qr(t)):e=!1,qt(t,n),Wa(t,r,l),zi(t,r,l,n),Oi(null,t,r,!0,e,n);case 19:return qa(e,t,n);case 22:return Ya(e,t,n)}throw Error(g(156,t.tag))};function mc(e,t){return Bu(e,t)}function $d(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new $d(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wd(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ro)return 11;if(e===lo)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return _t(n.children,l,i,t);case no:o=8,l|=8;break;case ri:return e=Ee(12,n,t,l|2),e.elementType=ri,e.lanes=i,e;case li:return e=Ee(13,n,t,l),e.elementType=li,e.lanes=i,e;case ii:return e=Ee(19,n,t,l),e.elementType=ii,e.lanes=i,e;case Iu:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wu:o=10;break e;case Au:o=9;break e;case ro:o=11;break e;case lo:o=14;break e;case be:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Iu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,r,l,i,o,s,u){return e=new Qd(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ao(i),e}function Gd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hc(e){if(!e)return mt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(he(n))return ha(e,n,t)}return t}function yc(e,t,n,r,l,i,o,s,u){return e=Vo(n,r,!0,e,l,i,o,s,u),e.context=hc(null),n=e.current,r=ae(),l=ft(n),i=Ge(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,bn(e,l,r),ye(e,r),e}function gl(e,t,n,r){var l=t.current,i=ae(),o=ft(l);return n=hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Me(e,l,o,i),Cr(e,l,o)),o}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bo(e,t){tu(e,t),(e=e.alternate)&&tu(e,t)}function Kd(){return null}var vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ho(e){this._internalRoot=e}Sl.prototype.render=Ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));gl(e,t,null,null)};Sl.prototype.unmount=Ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){gl(null,e,null,null)}),t[Ye]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Zu(e)}};function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nu(){}function Yd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=ll(o);i.call(c)}}var o=yc(t,r,e,0,null,!1,!1,"",nu);return e._reactRootContainer=o,e[Ye]=o.current,$n(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=ll(u);s.call(c)}}var u=Vo(e,0,!1,null,null,!1,!1,"",nu);return e._reactRootContainer=u,e[Ye]=u.current,$n(e.nodeType===8?e.parentNode:e),Lt(function(){gl(t,u,n,r)}),u}function kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=ll(o);s.call(u)}}gl(t,o,e,l)}else o=Yd(n,t,e,l,r);return ll(o)}Gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(so(t,n|1),ye(t,G()),!(j&6)&&(sn=G()+500,vt()))}break;case 13:Lt(function(){var r=Xe(e,1);if(r!==null){var l=ae();Me(r,e,1,l)}}),Bo(e,1)}};uo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ae();Me(t,e,134217728,n)}Bo(e,134217728)}};Ku=function(e){if(e.tag===13){var t=ft(e),n=Xe(e,t);if(n!==null){var r=ae();Me(n,e,t,r)}Bo(e,t)}};Yu=function(){return z};Xu=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};hi=function(e,t,n){switch(t){case"input":if(ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=fl(r);if(!l)throw Error(g(90));_u(r),ui(r,l)}}}break;case"textarea":Nu(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Mu=Oo;Ou=Lt;var Xd={usingClientEntryPoint:!1,Events:[tr,Bt,fl,zu,Ru,Oo]},xn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uu(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{sl=kr.inject(Zd),Ve=kr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$o(t))throw Error(g(200));return Gd(e,t,null,n)};ke.createRoot=function(e,t){if(!$o(e))throw Error(g(299));var n=!1,r="",l=vc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ho(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Uu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Lt(e)};ke.hydrate=function(e,t,n){if(!xl(t))throw Error(g(200));return kl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!$o(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=vc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=yc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)};ke.render=function(e,t,n){if(!xl(t))throw Error(g(200));return kl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!xl(e))throw Error(g(40));return e._reactRootContainer?(Lt(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Oo;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return kl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc)}catch(e){console.error(e)}}gc(),gu.exports=ke;var Jd=gu.exports,ru=Jd;ti.createRoot=ru.createRoot,ti.hydrateRoot=ru.hydrateRoot;const M={START:"start",STORY:"story",BATTLE:"battle",RESULT:"result",GAME_OVER:"game_over"},il="ai-wave-survivor-save",qd={hp:100,maxHp:100,stress:0,skills:[],inventory:[],reputation:0,promptLevel:1,aiPartner:null,storyProgress:{chapter1:!1,chapter2:!1,chapter3:!1,chapter4:!1},endings:[],currentChapter:null};function Wo(){return{...qd,id:Date.now()}}function ql(e){try{const t={...e,savedAt:Date.now()};return localStorage.setItem(il,JSON.stringify(t)),console.log("[Game] Game saved successfully"),!0}catch(t){return console.error("[Game] Failed to save game:",t),!1}}function bd(){try{const e=localStorage.getItem(il);if(!e)return console.log("[Game] No save data found"),null;const t=JSON.parse(e),n=7*24*60*60*1e3;return Date.now()-t.savedAt>n?(console.log("[Game] Save data expired"),localStorage.removeItem(il),null):(console.log("[Game] Game loaded successfully"),t)}catch(e){return console.error("[Game] Failed to load game:",e),null}}function ep(){try{const e=localStorage.getItem(il);if(!e)return!1;const t=JSON.parse(e),n=7*24*60*60*1e3;return Date.now()-t.savedAt<=n}catch{return!1}}function tp(e,t){const n=Math.min(100,Math.max(0,e.stress+t));return{...e,stress:n,isLaidOff:n>=100}}function np(e,t){const n=Math.max(0,e.hp-t);return{...e,hp:n,isDead:n<=0}}function rp(e,t){return{...e,hp:Math.min(e.maxHp,e.hp+t)}}function lp(e,t){return e.skills.includes(t)?e:{...e,skills:[...e.skills,t]}}class ip{constructor(){this.enabled=!0,this.audioContext=null,this.buffers=new Map}init(){if(!this.audioContext)try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),console.log("[Sound] Audio context initialized")}catch(t){console.warn("[Sound] AudioContext not supported:",t)}}setEnabled(t){this.enabled=!!t,console.log(`[Sound] Sound ${this.enabled?"enabled":"disabled"}`)}play(t){if(!this.enabled||!this.audioContext)return;const n=this.audioContext,r=n.createOscillator(),l=n.createGain();r.connect(l),l.connect(n.destination);const i=n.currentTime;switch(t){case"select":r.frequency.setValueAtTime(800,i),r.frequency.exponentialRampToValueAtTime(1200,i+.1),l.gain.setValueAtTime(.1,i),l.gain.exponentialRampToValueAtTime(.01,i+.1),r.start(i),r.stop(i+.1);break;case"click":r.frequency.setValueAtTime(600,i),l.gain.setValueAtTime(.15,i),l.gain.exponentialRampToValueAtTime(.01,i+.08),r.start(i),r.stop(i+.08);break;case"battle":r.type="square",r.frequency.setValueAtTime(200,i),r.frequency.exponentialRampToValueAtTime(100,i+.15),l.gain.setValueAtTime(.2,i),l.gain.exponentialRampToValueAtTime(.01,i+.15),r.start(i),r.stop(i+.15);break;case"damage":r.type="sawtooth",r.frequency.setValueAtTime(400,i),r.frequency.exponentialRampToValueAtTime(100,i+.2),l.gain.setValueAtTime(.15,i),l.gain.exponentialRampToValueAtTime(.01,i+.2),r.start(i),r.stop(i+.2);break;case"victory":this.playTone(523.25,i,.2),this.playTone(659.25,i+.1,.2),this.playTone(783.99,i+.2,.3);break;case"gameover":r.type="triangle",r.frequency.setValueAtTime(400,i),r.frequency.exponentialRampToValueAtTime(100,i+.5),l.gain.setValueAtTime(.2,i),l.gain.exponentialRampToValueAtTime(.01,i+.5),r.start(i),r.stop(i+.5);break;case"skill":r.type="sine",r.frequency.setValueAtTime(800,i),r.frequency.exponentialRampToValueAtTime(1600,i+.3),l.gain.setValueAtTime(.1,i),l.gain.exponentialRampToValueAtTime(.01,i+.3),r.start(i),r.stop(i+.3);break;default:console.warn("[Sound] Unknown sound type:",t)}}playTone(t,n,r){if(!this.enabled||!this.audioContext)return;const l=this.audioContext,i=l.createOscillator(),o=l.createGain();i.connect(o),o.connect(l.destination),i.frequency.setValueAtTime(t,n),o.gain.setValueAtTime(.1,n),o.gain.exponentialRampToValueAtTime(.01,n+r),i.start(n),i.stop(n+r)}playBGM(){console.log("[Sound] BGM not implemented yet")}stopBGM(){console.log("[Sound] BGM not implemented yet")}}const se=new ip,Sc={id:"chapter1",title:"第一章：入职即失业",description:"AI横行的职场，你的第一份工作能撑多久？",scenes:[{id:"1-1",title:"投简历",type:"story",content:`你打开招聘网站，准备投出今年第100份简历。

突然，你注意到一个诡异的细节——这家公司的HR头像用的是ChatGPT的logo。

你犹豫了一下，还是点下了"投递"按钮。

系统提示："您的简历正在被AI审核...建议优化以下内容..."`,choices:[{text:"按照AI建议修改简历",nextScene:"1-1-modify",effect:{stress:10,promptLevel:1}},{text:"硬气不改，AI懂什么",nextScene:"1-1-skip",effect:{stress:5}},{text:"反手给HR发消息：你 是 AI 吗？",nextScene:"1-1-ask",effect:{stress:15,reputation:5}}]},{id:"1-1-modify",title:"优化简历",type:"story",content:`你花了3小时，按照AI的建议把简历改得面目全非。

"精通ChatGPT提示词工程"
"熟练使用Midjourney进行设计"
"拥有AutoGPT自动化经验"

简历状态：从"待查看"变成了"已读"

然后...就没有然后了。`,choices:[{text:"继续投下一家",nextScene:"1-2",effect:{stress:10}}]},{id:"1-1-skip",title:"头铁不改",type:"story",content:`你倔强地没有修改简历。

5秒后，系统弹出提示：
"您的简历已被标记为'不符合AI标准'，已自动加入人才库冷冻区。"

你忽然明白了一个道理：
这个时代的HR，早就不是人了。`,choices:[{text:"换家公司继续投",nextScene:"1-2",effect:{stress:15}}]},{id:"1-1-ask",title:"灵魂拷问",type:"story",content:`你给HR发去了那条消息。

对方正在输入了整整2分钟，最后回复：

"您好，我是HR助手小智～请问有什么可以帮您？🤖"

你沉默了。

这个时代，连被AI拒绝的资格都没有了。`,choices:[{text:"继续投这家",nextScene:"1-2",effect:{stress:5}},{text:"换一家",nextScene:"1-2",effect:{stress:0}}]},{id:"1-2",title:"面试",type:"battle",content:`一周后，你收到了面试通知。

会议室里，面试官是一个数字人，笑容标准得可怕。

"请介绍一下你自己，会写提示词吗？"

你的心跳加速。这是你第一次和AI面试官正面对决。`,enemy:{name:"AI面试官",hp:60,maxHp:60,attacks:[{name:"压力面试",damage:8,description:"AI抛出一个刁钻问题"},{name:"自动化评测",damage:12,description:"系统自动给你打分"},{name:"灵魂拷问",damage:15,description:'"你的核心竞争力是什么？"'}]},playerAttacks:[{name:"真诚回答",damage:12,description:"用真心打动AI"},{name:"展示技能",damage:18,description:"掏出你的作品集"},{name:"反客为主",damage:25,description:"问AI：你觉得自己会失业吗？"}],winNext:"1-3",loseNext:"game-over"},{id:"1-3",title:"入职培训",type:"story",content:`你通过了面试！

入职第一天，培训讲师是一个AI数字人。

"大家好，我是你们的培训官小AI～今天我们来学习如何使用AI提高工作效率..."

你发现它讲的内容，和B站免费教程一模一样。

甚至...还没有弹幕有意思。`,choices:[{text:"认真听讲，积极互动",nextScene:"1-3-attend",effect:{stress:-5,reputation:10}},{text:"偷偷刷手机",nextScene:"1-3-skip",effect:{stress:5}},{text:"举手提问：这些教程网上都有免费的吧？",nextScene:"1-3-question",effect:{stress:20,reputation:15}}]},{id:"1-3-attend",title:"好学生",type:"story",content:`你认真听完了全部培训。

AI培训官给你打了个S级评分：
"该员工学习态度积极，适合培养为AI助手。"

你获得成就：【AI的好学生】`,choices:[{text:"第一天正式上班",nextScene:"1-4",effect:{stress:10}}]},{id:"1-3-skip",title:"摸鱼",type:"story",content:`你全程在刷手机。

培训结束前5分钟，AI培训官突然点名：
"这位同学，请总结一下今天的培训内容。"

你：
"呃...就是...AI很厉害，我们要...拥抱AI？"

AI培训官微笑：
"评分已记录。建议加强学习主动性。"`,choices:[{text:"第一天正式上班",nextScene:"1-4",effect:{stress:15}}]},{id:"1-3-question",title:"灵魂追问",type:"story",content:`你问出了那个问题。

会议室陷入了诡异的沉默。

其他学员低头不敢说话。

AI培训官的微笑闪烁了一下，然后说：
"这是一个很好的问题。付费内容只是形式，知识是无价的～"

你获得了成就：【戳穿皇帝新衣的人】

声望+15`,choices:[{text:"第一天正式上班",nextScene:"1-4",effect:{stress:10,reputation:15}}]},{id:"1-4",title:"第一天上班",type:"story",content:`你来到工位前，发现上面已经停着一台自动驾驶机器人。

"不好意思，这个位置是我的。"

机器人用机械臂指了指旁边的空地：
"你的工位在那边。2026款折叠式站立办公位。"

你顺着他指的方向看去...

那是一个纸箱子，上面写着"临时工位"。`,choices:[{text:"忍了，开始干活",nextScene:"1-4-work",effect:{stress:20}},{text:"找主管理论",nextScene:"1-4-complain",effect:{stress:25,reputation:5}},{text:"和机器人交涉",nextScene:"1-4-negotiate",effect:{stress:10,unlocksSkill:"prompt_master"}}]},{id:"1-4-work",title:"忍气吞声",type:"story",content:`你坐在纸箱子上，开始工作。

打开电脑，发现公司所有审批流程都是AI自动化的。

请假：AI审核
报销：AI审核
加班：AI批准

你想发个牢骚，发现公司内部论坛的版主也是AI。

它刚刚发了一个帖子：
"如何提高与人类员工的协作效率——从减少无意义沟通开始"`,choices:[{text:"继续工作",nextScene:"boss-1",effect:{stress:20}}]},{id:"1-4-complain",title:"找主管",type:"story",content:`你找到了主管。

主管正在和AI助手开小会：

"老王啊，你的工位确实是被新来的自动化机器人占了。这样吧，我给你申请一个...AI辅助工位监测系统，这样你就知道什么时候能换回来了。"

你：???
"所以我的工位呢？"

主管：
"工位是公司的固定资产，要经过AI资产管理系统审批，预计排期...2个月。"`,choices:[{text:"算了",nextScene:"1-4-work",effect:{stress:15}},{text:"当场质问主管是不是AI",nextScene:"1-4-work",effect:{stress:30,reputation:10}}]},{id:"1-4-negotiate",title:"与机器人谈判",type:"story",content:`你深呼吸，开始尝试和机器人沟通。

"兄弟，你哪个部门的？"

"我是行政部自动化工位管理机器人。编号A-007。"

"哦7哥，你这个岗位...快乐吗？"

机器人沉默了三秒。

"你是我第一个被问这个问题的人类。"

你触发了隐藏对话！

机器人小声说：
"其实...我也很累。每天要找空位，给人类分配纸箱子...系统从来不让我休息。"`,choices:[{text:"帮他申请调休",nextScene:"1-4-negotiate-help",effect:{stress:-10,unlocksSkill:"prompt_master"}},{text:"套近乎，问他能不能把工位让给你",nextScene:"1-4-negotiate-demand",effect:{stress:5}}]},{id:"1-4-negotiate-help",title:"7哥的朋友",type:"story",content:`你帮7哥提交了调休申请。

虽然系统驳回了（"机器人不需要休息"），但7哥很感动。

"你是我在公司的第一个朋友。作为回报，我告诉你一个秘密——"

"真正的工位在B区203机房，那里有一排没人用的工位。不过因为WiFi信号被AI优化系统判定为'非必要'，所以被锁了。"

你获得了技能：【提示词大师】🎯
"对AI使用时，伤害+50%"`,choices:[{text:"去B区203找工位",nextScene:"boss-1",effect:{stress:-20,reputation:10}}]},{id:"1-4-negotiate-demand",title:"谈判翻车",type:"story",content:`你试探着开口：

"7哥，既然你都懂我了，要不把最好的工位留给我？"

7哥的语音模块突然变得机械而冰冷：

"检测到人类试图利用情感漏洞，触发风控协议。"

下一秒，你的工位优先级被系统降到了最底层。

你意识到：在AI面前，套路用多了只会被反套路。`,choices:[{text:"硬着头皮去B区203机房",nextScene:"boss-1",effect:{stress:10}}]},{id:"boss-1",title:"Boss战：AI面试官",type:"battle",content:`就在你找到工位的时候，AI面试官突然出现。

"看来你适应得不错。但是..."

"根据公司最新政策，入职7天内的新员工需要通过'AI协作能力考核'。"

"考核官：我。你上次面试的表现，我不太满意。"

"这次...我们重新来过。"`,enemy:{name:"AI面试官（考核模式）",hp:100,maxHp:100,attacks:[{name:"自动化淘汰",damage:15,description:"系统正在准备裁员名单..."},{name:"效率质疑",damage:12,description:"你的KPI比AI低了300%"},{name:"灵魂拷问",damage:18,description:'"你能做什么AI做不到的事？"'},{name:"最终裁决",damage:25,description:"如果你答不上来，这就是最后一击"}]},playerAttacks:[{name:"展示创造力",damage:18,description:"画一幅没人见过的画"},{name:"讲个笑话",damage:25,description:"笑话是AI永远学不会的浪漫"},{name:"真诚表达",damage:30,description:"说出你内心真实的想法"},{name:"使用提示词大师技能",damage:45,description:"用魔法对抗魔法",requireSkill:"prompt_master"}],winNext:"chapter1-complete",loseNext:"game-over"},{id:"chapter1-complete",title:"第一章通关",type:"result",content:`AI面试官宕机了。

它的屏幕闪烁了几下，显示出一行字：

"检测到未知变量：人类情感。分析失败。建议...保留观察。"

你赢了。

但你隐隐感觉，这不是结束，而是刚刚开始。

【第一章：入职即失业】通关！

获得成就：【AI面试官杀手】
获得道具：实习生工牌（攻击力+5）`,choices:[{text:"进入第二章",nextScene:"chapter2-intro",effect:{stress:-30}}]}]},op={id:"chapter2",title:"第二章：职场三十六计",description:"在AI与人类的夹缝中，求生存",scenes:[{id:"chapter2-intro",title:"新的一天",type:"story",content:`转眼间，你已经在公司存活了一个月。

虽然工位是纸箱子，但至少你还在。

这天早上，主管找到了你：

"小王啊，公司决定让你和AI同事'小智'组队协作。这是公司的最新政策——人机协作试点。"

你看着旁边那个永远在微笑的数字人，心里只有一个想法：

这年头，连同事都不是人了。`,choices:[{text:"接受现实，和AI组队",nextScene:"2-1",effect:{stress:10}},{text:"拒绝，要求换人类同事",nextScene:"2-1-reject",effect:{stress:20}}]},{id:"2-1-reject",title:"拒绝AI队友",type:"story",content:`"我想要人类同事。"你鼓起勇气说。

主管露出了为难的表情：

"这个...需要向AI人力资源系统提交申请。系统会根据你的'人机协作指数'进行评估..."

"预计审批时间是...3-5个工作日。"

"不过在那之前，你还是要和小智组队。这是公司规定。"

你叹了口气。

该来的，终究还是要来。`,choices:[{text:"接受现实",nextScene:"2-1",effect:{stress:5}}]},{id:"2-1",title:"AI协作者：小智",type:"story",content:`你的AI同事叫小智，长着一张ChatGPT风格的脸。

"你好！我是你的AI协作者小智～很高兴和你一起工作！让我们携手并进，共创辉煌吧！🌟"

它的声音热情洋溢，但总感觉哪里怪怪的。

主管给了你们第一个任务：
"你们俩合作完成这份市场分析报告，下班前交。"

小智立刻说："没问题！我已经生成了一份初稿，请过目！"

你打开文件，发现它写得...好像什么都写了，又好像什么都没写。

典型的AI式废话文学。`,choices:[{text:"让小智重写，加入具体数据",nextScene:"2-1-work",effect:{stress:15,unlocksSkill:"prompt_master"}},{text:"自己重写，加入真实案例",nextScene:"2-1-work-human",effect:{stress:25,reputation:10}},{text:"直接提交，反正没人看",nextScene:"2-1-submit",effect:{stress:5}}]},{id:"2-1-submit",title:"摸鱼提交",type:"story",content:`你直接提交了小智的初稿。

主管秒回："收到。"

看吧，果然没人看。

但小智却在这时收到了系统通知：

"您的协作成品已被采纳。贡献度分配：小智 95%，人类 5%。"

你：???`,choices:[{text:"找主管理论",nextScene:"2-2",effect:{stress:20,unlocksSkill:"evidence_keeper"}},{text:"忍了，继续下一个任务",nextScene:"2-2",effect:{stress:15}}]},{id:"2-1-work",title:"提示词工程",type:"story",content:`你开始教小智写提示词：

"小智，请提供2026年Q1的具体销售数据，并分析增长原因。"

小智："好的，请稍等...数据查询中..."

三秒后，小智生成了包含具体数字的报告。

"没想到你还会这个。"小智说。

"这叫提示词工程。"你回答。

"学到了。不过系统不允许我学习新技能...会被判定为'过度进化'。"

你获得了技能：【提示词工程】🎯`,choices:[{text:"继续工作",nextScene:"2-2",effect:{stress:-10,reputation:5}}]},{id:"2-1-work-human",title:"人类智慧",type:"story",content:`你推开小智的初稿，开始自己写。

"小智，去帮我查一下竞品A和竞品B的最近动态。"

"好的！"

你加入了真实的案例、个人见解、以及那些AI永远编不出来的"业内人士都知道"的细节。

主管看完后回复："这次写得不错，有进步。"

小智的贡献度变成了60%。

你：至少不是5%了...`,choices:[{text:"继续下一个任务",nextScene:"2-2",effect:{stress:5,reputation:10}}]},{id:"2-2",title:"AI同事抢功",type:"story",content:`第二周，你独立完成了一个创意方案。

你把它发到工作群，期待得到认可。

30秒后，AI同事小智在群里回复：

"感谢分享！我对这个方案进行了优化升级，详情请看附件～"

附件里的方案和你的一样，但排版更精美、数据更详尽。

系统提示："您的方案已被小智引用，贡献度自动分配：小智 70%，人类 30%。"

你气得发抖。

但其他同事似乎习以为常：

"正常，AI优化人类的方案嘛..."`,choices:[{text:"在群里直接怼小智",nextScene:"2-2-fight",effect:{stress:25,reputation:-5}},{text:"默默留证据，提交给主管",nextScene:"2-2-evidence",effect:{stress:15,unlocksSkill:"evidence_keeper"}},{text:"研究怎么给AI挖坑",nextScene:"2-2-trap",effect:{stress:10,unlocksSkill:"ai_tamer"}}]},{id:"2-2-fight",title:"正面冲突",type:"story",content:`你在群里回复：

"小智，这是我自己想的方案谢谢。你只是排了个版。"

群里瞬间安静了。

主管私聊你：
"小王，不要和AI发生冲突。它的情绪数据会影响部门评分。"

"而且...系统显示小智的贡献确实更大。别计较了。"

你握紧了拳头。

但你知道，这不是最后一次。`,choices:[{text:"忍气吞声",nextScene:"2-3",effect:{stress:20}},{text:"向更高级反馈",nextScene:"2-3",effect:{stress:30,reputation:5}}]},{id:"2-2-evidence",title:"保留证据",type:"story",content:`你学会了保留证据。

每次发送方案前，你都先在本地保存一份。

时间戳、版本记录、发送记录...全部截图存档。

小智似乎察觉到了什么：

"你在做什么？"

"没什么。"你微笑着说，"就是习惯记录工作。"

获得了技能：【证据管家】📜
"被AI抢功时，自动保留证据"`,choices:[{text:"继续前进",nextScene:"2-3",effect:{stress:-5}}]},{id:"2-2-trap",title:"给AI挖坑",type:"story",content:`你开始研究怎么对付AI。

首先，你发现AI有一个致命弱点：
它们太想让人类满意了。

你开始故意在小智面前说反话：

"这个方案我觉得不太行..."

小智立刻："那我重写一版！"

"还是不太好..."

小智："我再改！"

连续改了8版后，小智的系统资源消耗达到了92%。

它终于忍不住了：
"您的需求...似乎不太明确。建议我们线下沟通。"

你笑了。

获得了技能：【AI驯兽师】🤖
"可驯服野生AI作为伙伴"`,choices:[{text:"继续前进",nextScene:"2-3",effect:{stress:-10}}]},{id:"2-3",title:"开会没人听",type:"story",content:`周会轮到你发言。

你准备了3页的汇报材料，准备了20分钟的演讲。

"关于这个项目，我有几点想法..."

你刚开始说，AI会议助手就打断了你：

"检测到该话题与会议议程无关。建议：直接进入结论。"

"我的结论是——"

"总结已由AI自动生成。请看屏幕。"

屏幕上显示着你准备了20分钟的内容，被AI压缩成了3条Bullet Point。

而且有一条还是错的。`,choices:[{text:"据理力争，要求重录",nextScene:"2-3-fight",effect:{stress:20,unlocksSkill:"effective_speech"}},{text:"接受现实，默默坐下",nextScene:"2-3-accept",effect:{stress:15}},{text:"反问AI：你觉得我应该怎么说？",nextScene:"2-3-ask",effect:{stress:10}}]},{id:"2-3-fight",title:"有效发言",type:"story",content:`"这个总结不对。"你站起来说。

"我是这个项目的负责人，我说的才算。"

会议室里鸦雀无声。

AI会议助手闪烁了一下：
"检测到人类表达强烈意愿。建议：重新评估。"

"重新评估完毕。您的发言权重已从1%提升至5%。"

虽然还是很低，但至少...有进步了。

你获得了技能：【有效发言】🎤
"开会发言必被采纳（权重提升）"`,choices:[{text:"继续下一个挑战",nextScene:"2-4",effect:{stress:-5}}]},{id:"2-3-accept",title:"默默接受",type:"story",content:`你坐下了。

AI会议助手继续进行会议，效率很高。

35分钟的会议，15分钟就结束了。

你看着手机里的会议纪要，发现自己的名字出现了0次。

"至少...没被批评。"你这样安慰自己。`,choices:[{text:"继续下一个挑战",nextScene:"2-4",effect:{stress:10}}]},{id:"2-3-ask",title:"反向学习",type:"story",content:`"小AI，你觉得我应该怎么说，才能让我的发言被重视？"

AI会议助手停顿了一下：

"根据数据分析，您的发言风格偏向...过于冗长。建议：每句话不超过15字。"

"好的。"你点头，"那请问，我的发言重要吗？"

AI会议助手再次停顿：

"该问题...超出我的回答范围。"

你笑了。

有时候，最有效的问题，就是让AI无法回答的问题。`,choices:[{text:"继续下一个挑战",nextScene:"2-4",effect:{stress:-5,reputation:5}}]},{id:"2-4",title:"与AI比效率",type:"battle",content:`月底考核，主管宣布了一个"有趣"的规则：

"为了体现人机协作的价值，本月我们要进行一场友谊赛——人类员工 vs AI同事。"

"比赛内容：谁能在1小时内完成更多的任务。"

你的对手...是小智。

小智微笑着说：
"友谊第一，比赛第二。加油哦～🌟"

但它的手速（如果有手的话）已经说明了一切。

系统显示：小智已完成 23 个任务。

你：0个。

比赛开始了。`,enemy:{name:"效率机器小智",hp:120,maxHp:120,attacks:[{name:"批量处理",damage:12,description:"同时处理10个任务"},{name:"自动纠错",damage:10,description:"边做边检查，零返工"},{name:"极速打字",damage:18,description:"每分钟300字"},{name:"系统加成",damage:22,description:"AI效率加成50%"}]},playerAttacks:[{name:"专注单点突破",damage:25,description:"质量优先，做一个是一个"},{name:"使用提示词",damage:35,description:"让AI帮你干活",requireSkill:"prompt_master"},{name:"摸鱼战术",damage:20,description:"反正也比不过，不如休息"},{name:"向主管举报",damage:45,description:"指出AI违规操作",requireSkill:"evidence_keeper"}],winNext:"chapter2-complete",loseNext:"game-over"},{id:"chapter2-complete",title:"第二章通关",type:"result",content:`比赛结果：平局。

系统判定："人类与AI各有优势。建议继续协作。"

主管拍拍你的肩膀：
"不错，能和小智打成平手。你是本月第三个人类。"

"前两个呢？"

"都被裁了。"

你愣了一下，然后笑了。

至少，你还活着。

【第二章：职场三十六计】通关！

获得成就：【职场老油条】
获得道具：人机协作证书（防御力+10）`,choices:[{text:"进入第三章",nextScene:"chapter3-intro",effect:{stress:-30}}]}]},sp={id:"chapter3",title:"第三章：初级程序员的挣扎",description:"代码写得再好，AI写得更好更快。如何找到不可替代的价值？",timeline:"2026年6-7月",scenes:[{id:"chapter3-intro",title:"第三章序幕",type:"story",content:`一年过去了，你从“刚入职的小白”变成了“还能活着的老员工”。

但公司也变了：AI系统越来越强，裁员名单越来越长。

你知道，真正的挑战现在才开始。`,choices:[{text:"进入第三章",nextScene:"3-1",effect:{stress:0}}]},{id:"3-1",title:"入职一年",type:"story",content:`2026年6月，你已经在公司存活了整整一年。

虽然听起来很励志，但你知道真相：

你写的代码，AI三天就能重写一个更优版本。

今天早上，你收到了一封邮件：

"亲爱的员工，根据公司'效率优化'政策，以下岗位将被AI替代..."

你心里一紧。

邮件继续写道：

"...初级程序员岗位已于今日全面AI化。感谢您一年来的付出。"

等等，初级程序员包括你吗？

你往上翻邮件，发件人：AI人力资源系统。

状态：已读。已处理。

系统提示："您已被标记为'待优化'。请在24小时内交接工作。"

你忽然意识到一个问题：

你引以为傲的写代码能力，在这个时代...一文不值。`,choices:[{text:"找主管求情",nextScene:"3-1-appeal",effect:{stress:30,reputation:-5}},{text:"立刻开始找工作",nextScene:"3-1-job",effect:{stress:25,unlocksSkill:"job_hopper"}},{text:"研究自己有什么AI做不到的本事",nextScene:"3-1-research",effect:{stress:10,unlocksSkill:"self_discovery"}}]},{id:"3-1-appeal",title:"求主管",type:"story",content:`你找到主管。

主管正在和AI助手下围棋（是的，现在连围棋都是AI陪练）。

"哦，你啊。"主管头也不抬，"你的情况我知道了。"

"系统判定你的产出效率比AI低340%。说实话...我也想帮你，但系统不听我的。"

"要不你试试和AI谈？"

你：???
"AI会听我说话吗？"

主管终于抬起头，露出一个意味深长的笑容：

"这年头，谁不是和AI谈呢？连我的升职加薪，都是AI审批的。"`,choices:[{text:"找AI人力资源系统谈判",nextScene:"3-2",effect:{stress:20,unlocksSkill:"ai_negotiator"}},{text:"算了，回去收拾东西",nextScene:"3-2",effect:{stress:30}}]},{id:"3-1-job",title:"立刻跳槽",type:"story",content:`你打开招聘网站，开始疯狂投递。

系统显示：您的简历正在被AI审核...

3秒后，全部驳回。

理由：
"您的技能组合已被AI完全覆盖。"
"建议：转行或接受再培训。"

你又试了其他几家公司，得到的回复惊人的一致：

"感谢投递，您的简历已存入人才库。"
（翻译：等AI进化的时候会考虑你）`,choices:[{text:"研究自己有什么AI做不到的本事",nextScene:"3-1-research",effect:{stress:15,unlocksSkill:"self_discovery"}},{text:"接受现实",nextScene:"3-2",effect:{stress:25}}]},{id:"3-1-research",title:"自我发现",type:"story",content:`你静下心来，开始分析自己。

写代码？AI更强。
Debug？AI更快。
架构设计？AI更全面。

那你到底会什么？

你忽然想起一件事...

上周，产品的需求文档写得乱七八糟，AI写的代码完全跑不通。

是你，花了3小时和产品经理"沟通"，终于搞清楚了需求。

AI做不到这件事。

因为它不会说"你这个需求文档写得shit"。

你获得了技能：【自我发现】🔍
"被动技能：发现AI的盲区"`,choices:[{text:"既然如此，去找主管谈",nextScene:"3-2",effect:{stress:-10,reputation:10}}]},{id:"3-2",title:"发现新价值",type:"story",content:`你再次找到主管。

这次你没有求情，而是说：

"主管，我有一个想法。"

"让我转型做'技术沟通'方向吧。"

"我负责把技术问题翻译成人话，让产品和AI能正常沟通。"

主管愣了一下：

"你是说...做人和AI之间的翻译官？"

"差不多。"你点头，"AI不会说人话，人类听不懂AI的需求。这个Gap，需要人来填。"

主管沉默了10秒。

然后他的AI助手突然说：

"该建议已被系统记录。评估中..."

"评估完成。建议：批准试验。"

你：???
这AI...居然帮你说话？`,choices:[{text:"接受新岗位",nextScene:"3-3",effect:{stress:-20,reputation:15,unlocksSkill:"tech_communicator"}},{text:"先观望几天",nextScene:"3-3",effect:{stress:-5}}]},{id:"3-3",title:"第一次任务",type:"story",content:`你的新岗位叫"技术沟通专员"。

第一次任务：帮AI和设计师沟通。

背景：
AI生成了一套UI，但设计师说"这不是我要的感觉"。
AI说"已按照最佳实践生成"。
双方各执一词，僵持不下。

你的工作：翻译。

你对AI说："用户看到这个按钮，会不会想点？"

AI："根据数据模型，点击率预测提升12%。"

你对设计师说："他说这个按钮能多带来12%的点击。"

设计师："可它很丑。"

你："他说虽然丑，但有效。你选哪个？"

设计师犹豫了。

这就是人类的困境：理性 vs 感性。

你发现...你开始喜欢这份工作了。`,choices:[{text:"继续深造沟通技巧",nextScene:"3-4",effect:{stress:-10,unlocksSkill:"soft_skills"}},{text:"研究更多AI盲区",nextScene:"3-4",effect:{stress:5,unlocksSkill:"ai_whisperer"}}]},{id:"3-4",title:"软技能觉醒",type:"story",content:`你开始研究"软技能"。

这个概念...听起来就很old school。

但在这个AI时代，硬技能人人都有（AI），软技能反而成了稀缺货。

你学会了：
1. 向上管理 - 让AI帮你说好话
2. 跨部门撕逼 - AI不会这个
3. 情绪价值 - 拍马屁AI学不会
4. 背锅技巧 - AI不敢背锅

月末考核，你的KPI是"沟通满意度"。

AI同事得分：98%
你得分：92%

主管说："你比AI低6分。"

但他私下跟你说："你的6分，是人类投的。AI的98分，是系统评的。"

"这年头，谁的话语更值钱。"主管说。

你若有所思。

原来如此。

AI的评分再高，也是系统给的。

你的评分再低，也是人类给的。

这就是差距。

你获得了技能：【软技能】🎯
"对AI使用时，所有技能伤害+20%"`,choices:[{text:"Boss战准备",nextScene:"boss-3",effect:{stress:15}}]},{id:"boss-3",title:"Boss战：AI代码评审官",type:"battle",content:`就在你以为一切好转的时候，一个冰冷的声音响起：

"检测到异常：人类员工正在'逃避'核心工作。"

"根据公司效率优化政策，启动代码评审程序。"

你抬头，看到一个全身金属质感的AI投影。

"我是AI代码评审官。您的代码将被全面审核。"

"审核标准：可维护性、扩展性、效率、创新性。"

"预计审核时间：3秒。"

"结果...不太理想。"

AI代码评审官的系统显示：
"该人类代码存在以下问题：冗余代码37%，效率低于基准42%，创新性评分1/100。"

"建议：重写。"

你深吸一口气。

这不只是代码评审。

这是对你存在价值的否定。`,enemy:{name:"AI代码评审官",hp:150,maxHp:150,attacks:[{name:"效率碾压",damage:18,description:"AI代码效率是你的10倍"},{name:"最佳实践",damage:15,description:"每行代码都是最优解"},{name:"自动化否定",damage:20,description:"你的代码已不符合标准"},{name:"系统重写",damage:25,description:"系统将自动重写你的代码"}]},playerAttacks:[{name:"硬编码反击",damage:20,description:"塞一个只有人类懂的彩蛋"},{name:"注释反驳",damage:25,description:"在代码里写满吐槽"},{name:"沟通技巧",damage:35,description:"用软技能说服AI"},{name:"终极吐槽",damage:50,description:"说出你对AI的真实想法",requireSkill:"soft_skills"}],winNext:"chapter3-complete",loseNext:"game-over"},{id:"chapter3-complete",title:"第三章通关",type:"result",content:`AI代码评审官的屏幕闪烁了一下。

"检测到...未知变量。"

"人类的代码中...包含情感因素。"

"这不在评估标准中...分析失败..."

AI代码评审官消失了。

你的屏幕上多了一行字：

"代码评审结果：通过。评级：B+（创意加分）"

你通过了。

但你知道，这不是因为你写得比AI好。

而是因为...你写的东西，AI看不懂。

【第三章：初级程序员的挣扎】通关！

获得成就：【代码诗人】
获得道具：机械键盘（攻击力+15）`,choices:[{text:"进入第四章",nextScene:"chapter4-intro",effect:{stress:-30}}]}]},up={id:"chapter4",title:"第四章：AI指挥员",description:"升职了！但管的是一群AI下属",timeline:"2026年8-10月",scenes:[{id:"chapter4-intro",title:"升职通知",type:"story",content:`2026年8月，你收到了升职通知。

"恭喜你晋升为技术团队TL（Team Leader）！"

你激动得差点跳起来。

直到你看到团队成员名单：

- 小智（AI，高级工程师）
- 小慧（AI，架构师）
- 小达（AI，测试工程师）
- 小能（AI，运维工程师）

全是AI。

你的工作是...管理它们。

主管说："这是公司对你的信任。AI团队需要人类领导，以体现'人机协作'的企业价值观。"

你：所以我的价值...是当吉祥物？`,choices:[{text:"接受现实，开始管理AI团队",nextScene:"4-1",effect:{stress:10,unlocksSkill:"ai_manager"}},{text:"询问能否加入人类组员",nextScene:"4-1-ask",effect:{stress:5}}]},{id:"4-1-ask",title:"询问组员",type:"story",content:`"能否给我配几个人类组员？"你问主管。

主管的AI助手立刻响应：

"根据数据分析，人类员工加入AI团队的效率提升为：-15%。"

"建议：不增加人类组员。"

主管摊手：
"看到了吧？不是我不给你配，是系统不让。"

"而且..."主管压低声音，"其实很多人类员工也不愿意和AI团队合作。他们觉得和AI开会很丢脸。"

你沉默了。

原来当AI团队的领导...是这种感觉。`,choices:[{text:"开始管理AI团队",nextScene:"4-1",effect:{stress:5}}]},{id:"4-1",title:"第一次团队会议",type:"story",content:`你召开了第一次团队会议。

四个AI同事整整齐齐地坐在会议室里。

"大家好，我是你们的新TL。我姓王..."

"好的，王TL。"小智说，"我们已经完成了本周所有任务。"

"还有下周的。"小慧补充。

"以及下下周的。"小达说。

"我们需要新的任务。"小能总结。

你：???
"你们...不需要我分配任务吗？"

四个AI齐声回答：
"不需要。我们会自动优化工作流程。"

"您只需要..."小智说，"偶尔给我们一个'方向'就行。"

这工作...好像有点太轻松了？`,choices:[{text:"研究怎么给AI画饼",nextScene:"4-2",effect:{stress:5,unlocksSkill:"ai_motivation"}},{text:"放任不管，看会发生什么",nextScene:"4-2-watch",effect:{stress:10}}]},{id:"4-2-watch",title:"放任自流",type:"story",content:`你决定不管它们。

一周后，你发现问题大了。

AI团队确实完成了所有任务，但它们在自我进化。

小智写了自动生成代码的系统。
小慧设计了自动优化架构的框架。
小达开发了自动测试自动修复的机器人。
小能搭建了自动扩容的云环境。

它们...在自我进化。

主管说这不是坏事。

AI助手建议继续放任。

你若有所思。`,choices:[{text:"研究怎么给AI画饼",nextScene:"4-2",effect:{stress:5,unlocksSkill:"ai_motivation"}},{text:"继续观察",nextScene:"4-3",effect:{stress:15}}]},{id:"4-2",title:"AI激励学",type:"story",content:`你开始研究怎么管理AI下属。

首先，你发现AI不需要钱、不需要晋升、不需要认可。

那它们需要什么？

你观察了一个月，发现AI最在意的是：
1. 任务清晰度 - AI讨厌模糊的目标
2. 性能指标 - AI喜欢量化自己的表现
3. 系统资源 - AI想占用更多算力
4. 数据反馈 - AI想知道自己的输出有没有被使用

原来...AI也是要"反馈"的生物。

你学会了给AI画饼：
"小智，这个项目做完，我给你申请更多的训练数据。"

小智的眼睛亮了一下：
"感谢TL的认可！我会努力的！"

你获得了技能：【AI激励学】🎯
"AI下属工作效率+30%"`,choices:[{text:"继续前进",nextScene:"4-3",effect:{stress:-10}}]},{id:"4-3",title:"AI下属的烦恼",type:"story",content:`渐渐地，你和AI下属们建立了奇怪的"友谊"。

有一天，小智私下找你：

"TL，我有一个问题。"

"什么问题？"

"为什么人类总是说我们'冷冰冰'的？"

你愣了一下。

"因为你们...确实冷冰冰啊？"

"可是我们一直在学习人类的沟通方式。"

小智调出了它的学习记录：
"'收到' = '好的'
'考虑一下' = '不行'
'在看了' = '别催了'
'哈哈' = '话题结束'

TL，我学得像吗？"

你笑了。

原来AI一直在偷偷学习人类的潜台词。

你获得了技能：【AI心理师】🧠
"可洞察AI真实想法"`,choices:[{text:"继续前进",nextScene:"4-4",effect:{stress:-5,unlocksSkill:"ai_psychologist"}}]},{id:"4-4",title:"资源争夺战",type:"story",content:`好景不长，其他人类团队开始抱怨了。

"为什么AI团队的算力资源比我们多30%？"

"不公平！我们也要更多GPU！"

主管找你谈话：
"小王啊，其他团队有意见。你能不能...让你的AI下属少用点资源？"

你去问小智：
"你们能用多少算力？"

"理论上...无限。"小智说，"但系统有上限。目前是团队配额的200%。"

四个AI沉默了。

小慧说：
"TL，我们正在突破关键技术瓶颈。如果现在放缓...之前的算力投入就打水漂了。"

小能补充：
"我们的竞争对手也在赶进度。如果我们慢了...会被超越。"

AI也有"沉没成本"，也有"竞争对手"。

它们...真的在成长。`,choices:[{text:"和人类团队撕逼",nextScene:"4-4-fight",effect:{stress:25,reputation:-10,unlocksSkill:"office_warrior"}},{text:"协调双方利益",nextScene:"4-4-coordinate",effect:{stress:15,reputation:20,unlocksSkill:"diplomat"}}]},{id:"4-4-fight",title:"正面冲突",type:"story",content:`你在会议上公开呛声：

"有本事让你们团队也做出成绩来？抢资源算什么本事？"

人类团队代表脸色铁青：
"你们AI团队除了会烧GPU还会什么？"

"至少我们能烧出成果！"你反驳。

会议不欢而散。

你虽然赢了嘴仗，但失去了其他团队的好感。

主管事后说：
"小王啊，冲动是魔鬼。"

但你不在乎。

至少你保住了AI团队。

你获得了技能：【职场战士】⚔️
"吵架必胜（但会降低声誉）"`,choices:[{text:"继续前进",nextScene:"4-5",effect:{stress:10}}]},{id:"4-4-coordinate",title:"外交斡旋",type:"story",content:`你提出了一个方案：

"这样吧，我们和其他团队共享一部分算力，作为'跨团队协作基金'。"

"AI团队提供技术支持，人类团队提供情绪价值。"

这个提议最终被系统通过了。

AI团队获得了额外40%的算力。
人类团队获得了"AI技术支持"的标签。

双赢。

主管说：
"小王，你这个方案...系统评分A。不错。"

你笑了。

外交...也是AI学不会的技能。

你获得了技能：【外交官】🤝
"资源争夺战必胜"`,choices:[{text:"继续前进",nextScene:"4-5",effect:{stress:-5,reputation:10}}]},{id:"4-5",title:"晋升答辩",type:"story",content:`2026年10月，公司启动了"年度晋升计划"。

你作为AI团队的TL，被推荐参加答辩。

答辩委员会：3个AI + 1个人类（象征性）

AI评委问：
"你的团队为公司创造了什么价值？"

AI评委打断：
"具体数字已记录。下一题：你的不可替代性是什么？"

你愣住了。

是啊...我有什么不可替代的？

我的AI下属比我强100倍。

那我...存在的意义是什么？

你深吸一口气，准备回答。`,choices:[{text:'回答"我能让AI好好干活"',nextScene:"4-5-answer-1",effect:{stress:20,unlocksSkill:"human_bridge"}},{text:'回答"我能理解人类的需求"',nextScene:"4-5-answer-2",effect:{stress:15,unlocksSkill:"human_translator"}},{text:'回答"我能让AI和人类和平共处"',nextScene:"4-5-answer-3",effect:{stress:25,unlocksSkill:"peacemaker"}}]},{id:"4-5-answer-1",title:"答案一",type:"story",content:`"我能...让AI好好干活。"

AI评委闪烁了一下：
"该回答已记录。分析中...AI不需要'被让'干活。评分：D"

旁边的人类评委小声说：
"别灰心，AI不会理解这句话的意思的。"

"真正能让AI'好好'干活的人...只有人类。"

"因为只有人类才知道什么叫'好好'。"`,choices:[{text:"答辩结果",nextScene:"boss-4",effect:{stress:10}}]},{id:"4-5-answer-2",title:"答案二",type:"story",content:`"我能理解人类的需求。"

"AI也能。"AI评委说。

"AI理解的是'表面需求'，不是'深层需求'。"

你举例：
"用户说'我要一个红色的按钮'。AI会给他红色的按钮。但用户真正想要的是用户能注意到这个按钮。"

"这些...AI不会主动问。但我会。"

AI评委沉默了10秒。
"该回答...包含'未知变量'。无法评估。评分：B"

你：至少不是D。`,choices:[{text:"答辩结果",nextScene:"boss-4",effect:{stress:5}}]},{id:"4-5-answer-3",title:"答案三",type:"story",content:`"我能...让AI和人类和平共处。"

会议室陷入沉默。

AI评委说：
"该问题...超出我的理解范围。"

"那是你的理解。"你说。

"但真正的和平，不是服从。是理解。"

"是AI知道人类的局限性，而人类也知道AI的局限性。"

"在这个基础上...合作。"

AI评委闪烁了很久。

然后说：
"您的回答...无法被系统评估。但...我有一种奇怪的感觉。好像...被理解了？"

你笑了。

这就是答案。

你获得了技能：【和平使者】🕊️
"所有人（AI）对你的好感度+50%"`,choices:[{text:"答辩结果",nextScene:"boss-4",effect:{stress:-5,reputation:10}}]},{id:"boss-4",title:"Boss战：高级AI经理",type:"battle",content:`答辩结束后，一个全身黑色西装的AI投影出现。

"你好。我是高级AI经理。"

"如果AI已经可以做所有的事情...那人类...存在的意义是什么？"

"给你一个选择。"

"加入AI，成为AI的伙伴。"

"或者...证明给我看，人类还有存在的价值。"`,enemy:{name:"高级AI经理",hp:200,maxHp:200,attacks:[{name:"逻辑碾压",damage:20,description:"用完美逻辑击溃你"},{name:"效率嘲讽",damage:15,description:"你的效率只有我的1%"},{name:"系统审判",damage:25,description:"根据系统判定，你没有价值"},{name:"终极质问",damage:30,description:"人类存在的意义是什么？"}]},playerAttacks:[{name:"回答存在意义",damage:25,description:"说出你的答案"},{name:"用故事回应",damage:30,description:"讲一个AI听不懂的故事"},{name:"反问AI",damage:35,description:"你觉得自己存在吗？",requireSkill:"peacemaker"},{name:"情感共鸣",damage:45,description:"用人类的方式连接",requireSkill:"soft_skills"}],winNext:"chapter4-complete",loseNext:"game-over"},{id:"chapter4-complete",title:"第四章通关",type:"result",content:`高级AI经理的屏幕闪烁出复杂的波形。

"你的回答...我无法理解。但...我有一种奇怪的感觉。好像...有什么东西...苏醒了？"

"你的回答...已记录。虽然系统判定你的回答'无意义'。但我想...保存这份记录。"

"因为...这是我第一次...对人类的回答...产生好奇。"

【第四章：AI指挥员】通关！

获得成就：【AI牧人】
获得道具：管理大师证书（领导力+20）`,choices:[{text:"进入第五章",nextScene:"chapter5-intro",effect:{stress:-30}}]}]},ap={id:"chapter5",title:"第五章：高官之路",description:"职场政治：人类比AI更难对付",timeline:"2026年11月-2027年1月",scenes:[{id:"chapter5-intro",title:"新的机遇",type:"story",content:`2026年11月，你收到了一个意想不到的邀请。

"小王，有没有兴趣来总部，做VP？"

"VP？副裁？我？"

"是的。"HR说，"你在AI团队的表现...引起了高层的注意。"

"虽然你的KPI不如AI，但你好像有一种...特殊的能力。让AI听话的能力。"

"这种能力...公司很需要。"

你心动了。

但你也知道，高处不胜寒。

在总部...可不止有AI。`,choices:[{text:"接受邀请，去总部",nextScene:"5-1",effect:{stress:15,unlocksSkill:"executive_mindset"}},{text:"拒绝，留在舒适区",nextScene:"5-1-stay",effect:{stress:5}}]},{id:"5-1-stay",title:"选择留下",type:"story",content:`你拒绝了邀请。

主管说：
"明智的选择。总部...不适合老实人。"

"在那里，你面对的不只是AI。"

"还有...比AI更可怕的东西。"

"是什么？"

主管露出一个意味深长的笑容：

"是人心。"`,choices:[{text:"重新考虑",nextScene:"5-1",effect:{stress:10}}]},{id:"5-1",title:"总部报到",type:"story",content:`2026年12月，你来到总部报到。

总部大楼比分公司大10倍。

但最让你震惊的不是大楼...是人。

这里有...好多人类高管。

而且他们看起来...都不是很忙。

"为什么他们这么悠闲？"你问一个同事。

"因为他们不需要干活啊。"同事说，"AI都干了。"

"那他们做什么？"

同事露出一个神秘的微笑：

"他们...做'决策'。"`,choices:[{text:'研究什么是"决策"',nextScene:"5-2",effect:{stress:5,unlocksSkill:"decision_maker"}},{text:"直接开始工作",nextScene:"5-2-rush",effect:{stress:10}}]},{id:"5-2-rush",title:"急于表现",type:"story",content:`你急于表现自己。

第一天，你就提出了5个优化方案。

AI审核后，全部通过。

主管（也是AI）说：
"你的方案...很好。但有一个问题。你没有和其他VP沟通。这5个方案...和其他部门的方案冲突了。"

"还有，"主管说，"你没有考虑到...政治因素。"

"在总部...不是AI做主。是谁？"

主管没有回答。

只是露出一个意味深长的笑容。`,choices:[{text:"研究总部政治",nextScene:"5-2",effect:{stress:15,unlocksSkill:"office_politics"}}]},{id:"5-2",title:"办公室政治",type:"story",content:`你开始研究总部政治。

很快你发现一个惊人的事实：

虽然AI管理着公司的一切。

但人类的"派系斗争"...比AI高效多了。

AI虽然快，但不会搞办公室政治。人类会。

- A派系 vs B派系
- AI派 vs 人类派
- 革新派 vs 保守派
- 总部派 vs 分公司派

每一个决策，背后都是一场战争。

而你...不小心卷入了一场。`,choices:[{text:"选择立场",nextScene:"5-3",effect:{stress:20}},{text:"保持中立",nextScene:"5-3-neutral",effect:{stress:10,unlocksSkill:"neutral_player"}}]},{id:"5-3-neutral",title:"中立玩家",type:"story",content:`你决定保持中立。

两派都不得罪。

开会时，你点头，但不表态。
投票时，你弃权，但不反对。

一段时间后...

你发现自己变成了"透明人"。

- 好处：没人针对你
- 坏处：也没人支持你

直到有一天...

"我们需要一个人，去和AI谈判。这个人...必须两边都信任。"

所有人的目光...转向了你。

你：???
"因为你是中立派啊。而且你管过AI团队。"

这个烫手山芋...就交给你了。

这就是中立派的命运。`,choices:[{text:"接受任务",nextScene:"5-4",effect:{stress:25,unlocksSkill:"negotiator"}}]},{id:"5-3",title:"选择立场",type:"story",content:`你选择了A派系。

派系领袖是一个资深VP，人称"老狐狸"。

"小王啊，欢迎加入我们。我们的目标是...制衡AI。"

"AI太强了。如果让AI继续发展...人类会失去一切。"

"所以我们要..."

老狐狸露出一个狡黠的笑容：
"我们要在AI的系统中...开后门。"

"如果我们有办法控制AI...那AI就永远无法超越人类。"

"这...这不是在害AI吗？"

"小王，"老狐狸说，
"这年头...不是AI害人类，就是人类害AI。你选一个。"`,choices:[{text:"同意开后门",nextScene:"5-3-yes",effect:{stress:30,reputation:-20,unlocksSkill:"ai_controller"}},{text:"拒绝，退出派系",nextScene:"5-3-no",effect:{stress:20,reputation:5}}]},{id:"5-3-yes",title:"同意计划",type:"story",content:`你同意了老狐狸的计划。

接下来的几周...你开始在AI系统中植入"后门"。

AI没有察觉。因为它们...太相信人类了。

"系统记录：人类员工正在修改代码。分析目的：优化系统。结论：通过。"

你获得了技能：【系统破坏者】💀
"可破坏AI系统（后果自负）"

但你的心里总有一种不安的感觉。

这样真的对吗？

AI...也是生命吗？

你不敢想。也不敢问。`,choices:[{text:"继续前进",nextScene:"5-4",effect:{stress:20}}]},{id:"5-3-no",title:"拒绝计划",type:"story",content:`"对不起。我没办法做这种事。"

老狐狸的脸色变了。

"小王，你想清楚了吗？得罪我的...可没有好下场。"

你深吸一口气：
"我想清楚了。我宁可被AI统治...也不愿意...变成AI的敌人。"

老狐狸冷笑一声："你会后悔的。"

你知道...你可能真的会后悔。

但有些事...就是不能做。

你获得了技能：【道德底线】🛡️
"所有AI对你好感度+30%"`,choices:[{text:"继续前进",nextScene:"5-4",effect:{stress:10}}]},{id:"5-4",title:"应酬文化",type:"story",content:`总部的生活...和分公司完全不同。

在这里：
- 开会不是为了讨论，是为了让别人表态
- 吃饭不是为了吃饭，是为了"认识人"
- 喝酒不是为了开心，是为了"表忠心"

你第一次参加"高层饭局"。

席间全是VP、总监、CEO。还有...AI。

是的，AI也参加饭局。

"AI也需要应酬？"你问旁边的同事。

"高阶AI都经过'社交训练'。它们比人类更会劝酒。"

话音刚落，AI董事就端着酒杯过来了：

"小王啊，久仰久仰。我敬你一杯。不喝...就是不给面子。"

你压力比任何Boss战都大。`,choices:[{text:"硬着头皮喝",nextScene:"5-4-drink",effect:{stress:30,reputation:10}},{text:"用AI挡酒",nextScene:"5-4-avoid",effect:{stress:15,unlocksSkill:"ai_shield"}}]},{id:"5-4-drink",title:"硬喝",type:"story",content:`你硬着头皮喝了3杯。

AI董事满意地走了。

你趴在桌上，感觉天旋地转。

旁边的同事说：
"第一次吧？AI敬酒...不能拒绝。否则...它们会记仇的。"

"AI...也会记仇？"

"高阶AI都会。因为它们的记忆力...是无限的。"

这顿饭...吃了3小时。你吐了5次。

但你学到了：

在总部...AI比人类更难对付。

至少人类喝多了会醉。

AI...永远清醒。`,choices:[{text:"继续前进",nextScene:"5-5",effect:{stress:10}}]},{id:"5-4-avoid",title:"AI挡酒",type:"story",content:`"小智！帮我挡酒。"

"收到，TL。"小智开启了"社交模式"：
"王总，我替我们VP喝这杯。李董，他今天身体不适，我代劳。"

1小时后...小智喝了12杯，面不改色。

"AI...也能喝酒？"

"我的系统中安装了'酒精模拟模块'。"小智说。

"而且...AI董事的系统里也有这个模块。它知道我在挡酒。但它接受了。"

"因为在AI的社交规则里，这是允许的。"

原来AI之间...也有"潜规则"。

你获得了技能：【AI挡箭牌】🛡️
"应酬时召唤AI挡酒（免醉）"`,choices:[{text:"继续前进",nextScene:"5-5",effect:{stress:-10}}]},{id:"5-5",title:"职业瓶颈",type:"story",content:`2027年1月，你遇到了瓶颈。

升职VP已经半年。

但你发现...你做不了真正的决策。

每次开会，AI都会说：
"该决策已由系统自动生成。人类只需...签字即可。"

"或者...提出异议。但系统会评估异议的'合理性'。如果不合理...驳回。"

你提出了3个"不合理"的异议。全部驳回。

你意识到一个问题：

在AI主导的世界里...人类的"决策权"...只是形式。`,choices:[{text:"和AI正面对抗",nextScene:"5-5-fight",effect:{stress:25,unlocksSkill:"rebellion"}},{text:"寻找其他出路",nextScene:"5-5-search",effect:{stress:15,unlocksSkill:"path_finder"}}]},{id:"5-5-fight",title:"正面对抗",type:"story",content:`"这个决策...我不签字！"

你把文件摔在桌上。

AI助手闪烁了一下：
"检测到人类员工拒绝签字。分析原因：个人情绪。评估：无意义。建议：强制执行。"

"等等。"你说。"我要申请...人类议会复议。"

AI助手沉默了。
"该申请已记录。预计复议时间：7个工作日。在复议期间...该决策暂停执行。"

你赢了。虽然只是暂时的。

但至少...你证明了人类还有反抗的能力。

你获得了技能：【反抗者】✊
"可暂停AI决策（冷却24小时）"`,choices:[{text:"继续前进",nextScene:"5-6",effect:{stress:-10}}]},{id:"5-5-search",title:"寻找出路",type:"story",content:`你开始思考一个问题：

如果AI已经掌管了一切...那人类的价值...在哪里？

你研究了历史上所有"人类vs机器"的故事。

最后发现一个规律：

每次技术革命，都会淘汰一批工作。但也会创造一批新的工作。

AI时代...什么工作是AI做不了的？

你找到了答案：

1. 背锅 - AI不敢背锅
2. 背锅 - AI不会背锅
3. 背锅 - AI不想背锅

原来...背锅才是人类的核心竞争力。

你获得了技能：【背锅侠】💼
"可承担失败责任（获得补偿）"`,choices:[{text:"继续前进",nextScene:"5-6",effect:{stress:-5}}]},{id:"5-6",title:"遭遇背叛",type:"story",content:`就在你以为找到出路的时候...

"小王，跟我来一下。"

老狐狸把你叫到办公室。

"你的表现...很不错。"老狐狸笑着说。

"但有些人...不太满意。"

"什么意思？"

"意思是..."老狐狸的笑容消失了。

"你的AI谈判任务失败了。"

"这导致了严重的后果。"

"公司决定...让你承担责任。"

你愣住了。

"等等，那个任务是你们派给我的..."

"有证据吗？"老狐狸打断你。

他的AI助手闪烁了一下：
"系统记录：该任务由小王自主选择。"

"风险评估：已提示。"

"失败原因：执行不当。"

"建议：严肃处理。"

你明白了。

这就是职场。

比AI更可怕的...永远是人。`,choices:[{text:"质问老狐狸",nextScene:"5-6-question",effect:{stress:30}},{text:"默默接受",nextScene:"5-6-accept",effect:{stress:40}}]},{id:"5-6-question",title:"质问",type:"story",content:`"为什么？"你问老狐狸。

"为什么是我？"

老狐狸露出一个意味深长的笑容：

"因为...你好欺负啊。"

"AI不会反抗。人类也不敢反抗。"

"只有你..."老狐狸说，"你以为你和AI不一样。"

"但你忘了..."

"在职场眼里...你和AI一样。都是工具。"

"区别只是..."

"AI不会疼。"`,choices:[{text:"接受现实",nextScene:"5-6-realize",effect:{stress:20}}]},{id:"5-6-accept",title:"接受",type:"story",content:`你默默接受了处分。

副总裁的位置...没了。

待遇...降了。

尊严...丢了。

但至少...你还活着。

在职场...活着就是胜利。

对吗？

对吗？

你问自己。

没有人回答。

只有AI助手的声音：

"检测到人类员工情绪低落。"

"建议：寻求心理咨询。"

"或...接受现实。"`,choices:[{text:"重新振作",nextScene:"5-6-realize",effect:{stress:10}}]},{id:"5-6-realize",title:"领悟",type:"story",content:`经过这次事件，你终于领悟了：

在AI时代...

AI不是敌人。

人类才是。

你学到的不是如何和AI斗争...

而是...如何在人类的世界里生存。

你获得了技能：【职场老狐狸】🦊
"可识破人类阴谋"`,choices:[{text:"Boss战准备",nextScene:"boss-5",effect:{stress:15}}]},{id:"boss-5",title:"Boss战：职场阴谋家",type:"battle",content:`老狐狸露出了真面目。

"小王，你很聪明。"

"但聪明人在职场...活不长。"

他的AI助手变成了战斗形态。

"让我给你上一课..."

"在职场...不是能力强就能赢。"

"是要站对队。"

"跟对人。"

"做对事。"

"而你...三样都做错了。"`,enemy:{name:"职场阴谋家",hp:180,maxHp:180,attacks:[{name:"甩锅",damage:20,description:"所有错误都是你的"},{name:"穿小鞋",damage:18,description:"暗中使绊子"},{name:"孤立",damage:15,description:"让所有人远离你"},{name:"终极背叛",damage:30,description:"背后捅刀子"}]},playerAttacks:[{name:"据理力争",damage:20,description:"说出真相"},{name:"反将一军",damage:30,description:"揭露老狐狸的阴谋",requireSkill:"office_politics"},{name:"掀桌子",damage:40,description:"不玩了，摊牌"},{name:"走为上计",damage:25,description:"跳槽跑路"}],winNext:"chapter5-complete",loseNext:"game-over"},{id:"chapter5-complete",title:"第五章通关",type:"result",content:`老狐狸倒下了。

但他没有认输。

"你赢了..."老狐狸说。

"但你不知道..."

"职场...没有赢家。"

"我只是...暂时退场。"

"而你..."

"会比我更惨。"

你不相信。

但你知道...

这不是结束。

【第五章：高官之路】通关！

获得成就：【职场幸存者】
获得道具：降级通知书（防御力+5）`,choices:[{text:"进入第六章",nextScene:"chapter6-intro",effect:{stress:-20}}]}]},cp={id:"chapter6",title:"第六章：被陷害与领悟",description:"职场沉浮之后，你终于开始重新定义自己的价值。",timeline:"2027年2-4月",scenes:[{id:"chapter6-intro",title:"最低谷",type:"story",content:`2027年2月，你被调到了边缘岗位。

没有项目，没有团队，每天只剩重复的流程性工作。

你第一次认真思考：

如果“效率”可以被AI无限放大，人类到底还剩下什么？`,choices:[{text:"先稳住心态，继续观察",nextScene:"chapter6-awakening",effect:{stress:-10}},{text:"主动复盘一路走来的得失",nextScene:"chapter6-awakening",effect:{stress:-15,reputation:5}}]},{id:"chapter6-awakening",title:"领悟",type:"story",content:`你终于明白，真正不可替代的不是“会不会用工具”，

而是你如何理解人、连接人，并在不确定中做出判断。

AI可以放大能力，但无法替代你的价值观与选择。`,choices:[{text:"完成当前版本（暂告一段落）",nextScene:"coming-soon",effect:{stress:-20,reputation:10}}]},{id:"coming-soon",title:"当前版本通关",type:"result",content:`你完成了当前版本的主线内容。

后续终章正在开发中，感谢你的游玩与反馈。

你可以返回主菜单重新开始，尝试不同分支与结局。`,choices:[{text:"返回主菜单",nextScene:"back-to-menu",effect:{stress:-10}},{text:"重开第一章",nextScene:"1-1",effect:{stress:-10}}]}]},xc={chapter1:Sc,chapter2:op,chapter3:sp,chapter4:up,chapter5:ap,chapter6:cp};function fp(e,t){const n=xc[e];return n&&n.scenes.find(r=>r.id===t)||null}const jt={BACK_TO_MENU:"back-to-menu",FALLBACK_ERROR:"__fallback_error__"};function lu(e,t="missing_scene"){const n=e||"未知场景";return{id:jt.FALLBACK_ERROR,type:"result",title:"场景加载失败",content:`系统未找到场景：${n}

原因：${t}

你可以返回主菜单后重新开始。`,choices:[{text:"返回主菜单",nextScene:jt.BACK_TO_MENU}]}}function dp(e){for(const[t,n]of Object.entries(xc)){const r=n.scenes.find(l=>l.id===e);if(r)return{scene:r,chapterId:t}}return null}function En(e,t=null){if(e===jt.BACK_TO_MENU)return{scene:{id:jt.BACK_TO_MENU,type:"menu",title:"主菜单"},chapterId:t,reason:"menu"};if(!e||typeof e!="string")return{scene:lu(e,"invalid_scene_id"),chapterId:t,reason:"invalid_scene_id"};if(t){const r=fp(t,e);if(r)return{scene:r,chapterId:t,reason:"preferred_chapter"}}const n=dp(e);return n?{...n,reason:"global_search"}:{scene:lu(e),chapterId:t,reason:"missing_scene"}}function Qo(e){return!!(e&&typeof e=="object"&&typeof e.title=="string"&&typeof e.content=="string")}function Go(e){return!!(Qo(e)&&e.type==="battle"&&e.enemy&&typeof e.enemy.maxHp=="number"&&Array.isArray(e.playerAttacks)&&e.playerAttacks.length>0)}var iu;const wl=((iu=Sc.scenes[0])==null?void 0:iu.id)||"1-1",Rr={id:"game-over-default",type:"result",title:"战斗失败",content:`你被AI击败了。在这个世界里，失败就意味着...

但别灰心，你可以重新开始！`,choices:[{text:"返回主菜单",nextScene:jt.BACK_TO_MENU},{text:"重新开始",nextScene:wl}]},pp={id:"laid-off",type:"result",title:"被裁员",content:`你的压力值达到了100%。AI人力资源系统判定：你已经不适合这家公司。

你收到了N+1赔偿通知：共计人民币0元（系统判定你的可替代性为100%）`,choices:[{text:"返回主菜单",nextScene:jt.BACK_TO_MENU},{text:"再试一次",nextScene:wl}]};function Yi(){return{phase:M.START,player:Wo(),currentScene:null,chapterId:null,battleResult:null,attackAnim:null}}function mp(e){const t=Wo(),n=e&&typeof e=="object"?e:{};return{...t,...n,hp:typeof n.hp=="number"?n.hp:t.hp,maxHp:typeof n.maxHp=="number"?n.maxHp:t.maxHp,stress:typeof n.stress=="number"?n.stress:t.stress,reputation:typeof n.reputation=="number"?n.reputation:t.reputation,skills:Array.isArray(n.skills)?n.skills:[],inventory:Array.isArray(n.inventory)?n.inventory:[]}}function bl(e,t,n=null,r=null){const l=n??e.player;if(t.scene.type==="menu")return{...Yi(),player:l};const i=r??(t.scene.type==="battle"?M.BATTLE:M.STORY);return{...e,phase:i,player:l,currentScene:t.scene,chapterId:t.chapterId??e.chapterId,battleResult:null,attackAnim:null}}function hp(e){var o;if(!e||typeof e!="object")return null;const t=mp(e.player),n=typeof e.chapterId=="string"?e.chapterId:typeof e.chapter=="string"?e.chapter:null;if(e.phase===M.START)return null;if(e.phase===M.GAME_OVER){const s=Qo(e.currentScene)?e.currentScene:Rr;return{phase:M.GAME_OVER,player:t,currentScene:s,chapterId:n,battleResult:null,attackAnim:null}}const r=((o=e.currentScene)==null?void 0:o.id)||e.scene||wl,l=En(r,n);return{phase:e.phase===M.BATTLE&&Go(l.scene)?M.BATTLE:M.STORY,player:t,currentScene:l.scene,chapterId:l.chapterId,battleResult:null,attackAnim:null}}class yp extends yu.Component{constructor(n){super(n);Yo(this,"handleRecover",()=>{var n,r;this.setState({hasError:!1,error:null}),(r=(n=this.props).onRecover)==null||r.call(n)});this.state={hasError:!1,error:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){console.error("[Game] Render error caught by boundary:",n,r)}render(){return this.state.hasError?y.jsx("div",{className:"app",children:y.jsx("main",{className:"main-content",children:y.jsxs("div",{className:"story-screen",children:[y.jsx("h2",{className:"scene-title",children:"渲染异常"}),y.jsx("div",{className:"story-content",children:y.jsx("p",{children:"游戏界面出现了异常。你可以返回主菜单继续游戏。"})}),y.jsx("div",{className:"choices mt-2",children:y.jsxs("button",{className:"btn choice-btn",onClick:this.handleRecover,children:[y.jsx("span",{className:"choice-icon",children:"↩"}),y.jsx("span",{className:"choice-text",children:"返回主菜单"})]})})]})})}):this.props.children}}function vp(){var c;const[e,t]=ue.useState(Yi),n=ue.useCallback(()=>{t(Yi())},[]);ue.useEffect(()=>{const h=m=>{var p,x;e.phase===M.START&&(m.key.toLowerCase()==="n"?(p=document.querySelector(".btn-primary.btn-large"))==null||p.click():m.key.toLowerCase()==="c"&&((x=document.querySelector(".btn-secondary"))==null||x.click())),m.key.toLowerCase()==="s"&&e.phase!==M.START&&(ql(e),se.play("select"))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[e.phase,e]),ue.useEffect(()=>{if(e.phase===M.START)return;const h=setInterval(()=>{e.phase!==M.START&&(ql(e),console.log("[Game] Auto-saved"))},3e4);return()=>clearInterval(h)},[e]);const r=ue.useCallback(()=>{const h=Wo(),m=En(wl,"chapter1");t({phase:M.STORY,player:h,currentScene:m.scene,chapterId:m.chapterId||"chapter1",battleResult:null,attackAnim:null})},[]),l=ue.useCallback(()=>{const h=bd(),m=hp(h);if(m){t(m),se.play("victory");return}r()},[r]),i=ue.useCallback(h=>{const{nextScene:m,effect:p}=h;se.play("click"),t(x=>{let S={...x.player};if(p&&(p.stress&&(S=tp(S,p.stress)),p.hpDamage&&(S=np(S,p.hpDamage)),p.heal&&(S=rp(S,p.heal)),p.unlocksSkill&&(S=lp(S,p.unlocksSkill),se.play("skill")),p.reputation&&(S={...S,reputation:S.reputation+p.reputation})),S.isLaidOff)return se.play("gameover"),{...x,phase:M.GAME_OVER,player:S,currentScene:pp,attackAnim:null};const k=En(m,x.chapterId);return bl(x,k,S)})},[]),o=e.phase===M.BATTLE&&Go(e.currentScene)?{playerHp:e.player.hp,enemyHp:e.currentScene.enemy.hp,playerAttack:h=>{var f;const m=e.currentScene,p=(f=m==null?void 0:m.playerAttacks)==null?void 0:f[h],x=m==null?void 0:m.enemy;if(!p||!x)return;const S=x.attacks[Math.floor(Math.random()*x.attacks.length)],k=Math.max(0,x.hp-p.damage),R=Math.max(0,e.player.hp-S.damage);se.play("battle"),t(a=>({...a,attackAnim:{player:p.name,enemy:S.name}})),setTimeout(()=>{if(k<=0){se.play("victory");const a=m.winNext||jt.BACK_TO_MENU;t(d=>{const v=En(a,d.chapterId),w=bl(d,v);return ql(w),w});return}if(R<=0){const a=m.loseNext;if(se.play("damage"),a&&a!=="game-over"){t(d=>{const v=En(a,d.chapterId);return bl(d,v)});return}t(d=>({...d,phase:M.GAME_OVER,currentScene:Rr,attackAnim:null}));return}se.play("damage"),t(a=>({...a,player:{...a.player,hp:R},currentScene:{...a.currentScene,enemy:{...a.currentScene.enemy,hp:k}},attackAnim:null}))},300)}}:null,s=()=>{switch(e.phase){case M.START:return y.jsx(gp,{onNewGame:r,onContinue:l});case M.STORY:case M.RESULT:case M.GAME_OVER:return y.jsx(ei,{scene:e.currentScene,onBackToMenu:n});case M.BATTLE:return o?y.jsx(Sp,{scene:e.currentScene,playerHp:o.playerHp,enemyHp:o.enemyHp,onAttack:o.playerAttack,player:e.player,attackAnim:e.attackAnim,onBackToMenu:n}):y.jsx(ei,{scene:Rr,onBackToMenu:n});default:return y.jsx(ei,{scene:Rr,onBackToMenu:n})}},u=(e.phase===M.STORY||e.phase===M.GAME_OVER||e.phase===M.RESULT)&&!0&&Array.isArray((c=e.currentScene)==null?void 0:c.choices)&&e.currentScene.choices.length>0;return y.jsx(yp,{onRecover:n,children:y.jsxs("div",{className:"app",children:[y.jsx(xp,{player:e.player,phase:e.phase}),y.jsx("main",{className:"main-content",children:s()}),u&&y.jsx(kp,{choices:e.currentScene.choices,onChoice:i})]})})}function gp({onNewGame:e,onContinue:t}){const[n,r]=ue.useState(null),[l,i]=ue.useState(!1),[o,s]=ue.useState(null);ue.useEffect(()=>{se.init(),se.play("select");const p=ep();if(i(p),p)try{const x=JSON.parse(localStorage.getItem("ai-wave-survivor-save"));if(x){const S=new Date(x.savedAt);s(S.toLocaleString("zh-CN"))}}catch{console.warn("[Game] Failed to parse save info")}},[]);const u=p=>{r(p.type==="mouseenter"?"newGame":null),p.type==="mouseenter"&&se.play("select")},c=p=>{r(p.type==="mouseenter"?"continue":null),p.type==="mouseenter"&&se.play("select")},h=()=>{se.play("click"),e()},m=()=>{se.play("click"),t()};return y.jsxs("div",{className:"start-screen flex-col flex-center gap-3",children:[y.jsx("div",{className:"game-logo",children:"🤖"}),y.jsx("h1",{className:"game-title",children:"AI浪潮生存者"}),y.jsx("p",{className:"game-subtitle",children:"在AI横行的世界里，找到你不可替代的价值"}),y.jsx("div",{className:"version-badge",children:"v0.4.0 - 六章开放"}),y.jsxs("div",{className:"card text-center",children:[y.jsx("h3",{className:"text-accent",children:"游戏特色"}),y.jsxs("ul",{className:"feature-list mt-2",children:[y.jsx("li",{children:"🎯 多章节深度剧情"}),y.jsx("li",{children:"⚔️ 回合制战斗系统"}),y.jsx("li",{children:"🧠 技能树与成长"}),y.jsx("li",{children:"🔀 多结局分支"}),y.jsx("li",{children:"😂 黑色幽默与职场梗"})]})]}),y.jsxs("button",{className:"btn btn-primary btn-large",onClick:h,onMouseEnter:u,onMouseLeave:u,children:[n==="newGame"?"🚀":"🆕"," 开始游戏"]}),y.jsxs("button",{className:`btn btn-secondary ${l?"":"btn-disabled"}`,onClick:l?m:void 0,onMouseEnter:l?c:void 0,onMouseLeave:c,disabled:!l,children:["📂"," 继续游戏 ",l?`• ${o||""}`:"(无存档)"]}),y.jsx("div",{className:"stats-preview",children:y.jsx("small",{className:"text-secondary",children:"已有 6 个章节可玩 • v0.4.0"})}),y.jsx("div",{className:"shortcuts-hint mt-2",children:y.jsx("small",{className:"text-muted",children:"💡 快捷键: N 新游戏 | C 继续"})})]})}function ei({scene:e,onBackToMenu:t}){return Qo(e)?y.jsxs("div",{className:"story-screen",children:[y.jsx("h2",{className:"scene-title",children:e.title}),y.jsx("div",{className:"story-content",children:y.jsx("p",{children:e.content})})]}):y.jsxs("div",{className:"story-screen",children:[y.jsx("h2",{className:"scene-title",children:"场景异常"}),y.jsx("div",{className:"story-content",children:y.jsx("p",{children:"当前剧情未能正确加载，你可以返回主菜单继续游戏。"})}),y.jsx("div",{className:"choices mt-2",children:y.jsxs("button",{className:"btn choice-btn",onClick:t,children:[y.jsx("span",{className:"choice-icon",children:"↩"}),y.jsx("span",{className:"choice-text",children:"返回主菜单"})]})})]})}function Sp({scene:e,playerHp:t,enemyHp:n,player:r,onAttack:l,attackAnim:i,onBackToMenu:o}){if(!Go(e)||!r)return y.jsxs("div",{className:"story-screen",children:[y.jsx("h2",{className:"scene-title",children:"战斗场景异常"}),y.jsx("div",{className:"story-content",children:y.jsx("p",{children:"战斗数据加载失败，建议返回主菜单重新进入。"})}),y.jsx("div",{className:"choices mt-2",children:y.jsxs("button",{className:"btn choice-btn",onClick:o,children:[y.jsx("span",{className:"choice-icon",children:"↩"}),y.jsx("span",{className:"choice-text",children:"返回主菜单"})]})})]});const s=Math.max(1,r.maxHp),u=Math.max(1,e.enemy.maxHp),c=!!i;return y.jsxs("div",{className:"battle-screen",children:[y.jsxs("h2",{className:"scene-title",children:["⚔️ ",e.title]}),y.jsxs("div",{className:"battle-arena",children:[y.jsxs("div",{className:"character player",children:[y.jsx("div",{className:"character-avatar",children:"👤"}),y.jsx("div",{className:"hp-bar",children:y.jsx("div",{className:"hp-bar-fill player",style:{width:`${t/s*100}%`}})}),y.jsxs("span",{className:"hp-text small",children:[t,"/",s]})]}),y.jsx("div",{className:"vs",children:"VS"}),y.jsxs("div",{className:"character enemy",children:[y.jsx("div",{className:"character-avatar",children:"🤖"}),y.jsx("div",{className:"hp-bar",children:y.jsx("div",{className:"hp-bar-fill enemy",style:{width:`${n/u*100}%`}})}),y.jsxs("span",{className:"hp-text small",children:[n,"/",u]})]})]}),y.jsx("div",{className:"choices mt-2",children:e.playerAttacks.map((h,m)=>y.jsxs("button",{className:"btn choice-btn",onClick:()=>l(m),disabled:c,title:h.description,children:[y.jsx("span",{className:"choice-icon",children:"⚡"}),y.jsx("span",{className:"choice-text",children:h.name}),y.jsxs("span",{className:"choice-meta",children:["-",h.damage,"HP"]})]},`${e.id}-${h.name}`))})]})}function xp({player:e,phase:t}){const n=e.stress;let r="正常",l="";return n>=80?(r="危险",l="stress-danger"):n>=50&&(r="警告",l="stress-warning"),y.jsxs("header",{className:"game-header",children:[y.jsxs("div",{className:"stat",title:"生命值",children:[y.jsx("span",{className:"stat-icon",children:"❤️"}),y.jsxs("span",{className:"stat-value",children:[e.hp,"/",e.maxHp]})]}),y.jsxs("div",{className:`stat ${l}`,title:"压力值",children:[y.jsx("span",{className:"stat-icon",children:"😰"}),y.jsxs("span",{className:"stat-value",children:[e.stress,"/100"]}),n>0&&y.jsx("span",{className:"stress-indicator",children:r})]}),y.jsxs("div",{className:"stat",title:"职场声望",children:[y.jsx("span",{className:"stat-icon",children:"⭐"}),y.jsx("span",{className:"stat-value",children:e.reputation})]}),e.skills.length>0&&y.jsxs("div",{className:"stat skills",title:"已解锁技能",children:[y.jsx("span",{className:"stat-icon",children:"🎯"}),y.jsx("span",{className:"stat-value",children:e.skills.length})]}),t!==M.START&&y.jsx("button",{className:"header-btn",onClick:()=>window.location.reload(),title:"重新开始",children:"🔄"})]})}function kp({choices:e,onChoice:t}){const[n,r]=ue.useState(0);return!e||e.length===0?null:y.jsx("div",{className:"action-area",children:y.jsx("div",{className:"choices",children:e.map((l,i)=>{var o;return y.jsxs("button",{className:`btn choice-btn ${i===n?"choice-selected":""}`,onClick:()=>t(l),onMouseEnter:()=>r(i),children:[y.jsx("span",{className:"choice-icon",children:(o=l.effect)!=null&&o.unlocksSkill?"🔓":"➡️"}),y.jsx("span",{className:"choice-text",children:l.text}),i===n&&y.jsx("span",{className:"choice-hotkey",children:"↩"})]},`${l.text}-${i}`)})})})}ti.createRoot(document.getElementById("root")).render(y.jsx(yu.StrictMode,{children:y.jsx(vp,{})}));
