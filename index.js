// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).sstdevtk={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,s,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||c.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,y="set"in e,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var l=e;function s(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y="function"==typeof Math.fround?Math.fround:null;var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)};var g=j,w="function"==typeof Float32Array;var h=Number.POSITIVE_INFINITY,m="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var t,r,e;if("function"!=typeof m)return!1;try{r=new m([1,3.14,-3.14,5e40]),e=r,t=(w&&e instanceof Float32Array||"[object Float32Array]"===g(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===h}catch(r){t=!1}return t}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof y?y:function(t){return E[0]=t,E[0]};function F(t){var r=function(t){return"/"===t.charAt(0)}(t),e="/"===T(t,-1);return(t=function(t,r){for(var e=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}(P(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&e&&(t+="/"),(r?"/":"")+t}function P(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}var T="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)},N=/./;function k(t){return"boolean"==typeof t}var B=Boolean.prototype.toString;var x=b();function I(t){return"object"==typeof t&&(t instanceof Boolean||(x?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function M(t){return k(t)||I(t)}function V(){return new Function("return this;")()}s(M,"isPrimitive",k),s(M,"isObject",I);var C="object"==typeof self?self:null,G="object"==typeof window?window:null,L="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof L?L:null;var J=function(t){if(arguments.length){if(!k(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return V()}if(C)return C;if(G)return G;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),R=J.document&&J.document.childNodes,U=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var Y,z=/^\s*function\s*([^(]*)/i;s(X,"REGEXP",z),Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var D=Y;function H(t){return null!==t&&"object"==typeof t}var K=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!D(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(H);function Q(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=z.exec(n.toString()))return r[1]}return H(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(H,"isObjectLikeArray",K);var W="function"==typeof N||"object"==typeof U||"function"==typeof R?function(t){return Q(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Q(t).toLowerCase():r};var Z,$,tt=Object.getPrototypeOf;$=Object.getPrototypeOf,Z="function"===W($)?tt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rt,et=Z;function nt(t){return null==t?null:(t=Object(t),et(t))}function ot(t,r,e,n){var o,u,i,f,a,c;if(a=t-r,t<=0||a<=0)return NaN;if(1===t||0===n)return 0;for(u=n<0?(1-t)*n:0,o=0,i=0,c=0;c<t;c++)f=e[u],o=S(o+S(f*f)),i=S(i+f),u+=n;return S(S(o-S(S(i/t)*i))/a)}s(ot,"ndarray",(function(t,r,e,n,o){var u,i,f,a,c,l;if(c=t-r,t<=0||c<=0)return NaN;if(1===t||0===n)return 0;for(i=o,u=0,f=0,l=0;l<t;l++)a=e[i],u=S(u+S(a*a)),f=S(f+a),i+=n;return S(S(u-S(S(f/t)*f))/c)}));var ut=function(t){try{return require(t)}catch(t){return function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===g(t))return!0;t=nt(t)}return!1}(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}(function(){var t=Array.prototype.slice.call(arguments,0);return F(P(t,(function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}("/home/runner/work/stats-base-sstdevtk/stats-base-sstdevtk/node_modules/@stdlib/stats-base-svariancetk/lib","./native.js")),it=rt=ut instanceof Error?ot:ut;const{ndarray:ft}=rt;var at=Math.sqrt;function ct(t,r,e,n){return S(at(it(t,r,e,n)))}function lt(t,r,e,n,o){return S(at(ft(t,r,e,n,o)))}s(ct,"ndarray",lt),t.default=ct,t.ndarray=lt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map