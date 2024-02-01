// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,A=isNaN,k=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,s,l,f,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(c(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function I(r){var e,t,n;if(!P(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var V,N=Object.prototype,$=N.toString,C=N.__defineGetter__,M=N.__defineSetter__,R=N.__lookupGetter__,B=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var L=V;function q(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G="function"==typeof Math.fround?Math.fround:null;var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var X,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";X=z()?function(r){var e,t,n,o,i;if(null==r)return W.call(r);t=r[J],i=J,e=null!=(o=r)&&U.call(o,i);try{r[J]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[J]=t:delete r[J],n}:function(r){return W.call(r)};var Y=X,H="function"==typeof Float32Array;var K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null;var rr,er="function"==typeof Float32Array?Float32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),t=e,r=(H&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=new rr(1);var nr="function"==typeof G?G:function(r){return tr[0]=r,tr[0]};function or(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function ir(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var ar=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,ur=function(r){return ar.exec(r).slice(1)};function cr(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=ir(hr(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function sr(r){var e=lr(r),t="/"===vr(r,-1);return(r=ir(hr(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function lr(r){return"/"===r.charAt(0)}function fr(){var r=Array.prototype.slice.call(arguments,0);return sr(hr(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function pr(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=cr(r).substr(1),e=cr(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")}function gr(r){var e=ur(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function yr(r,e){var t=ur(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function dr(r){return ur(r)[3]}var br={extname:dr,basename:yr,dirname:gr,sep:"/",delimiter:":",relative:pr,join:fr,isAbsolute:lr,normalize:sr,resolve:cr};function hr(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var vr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},wr=or(Object.freeze({__proto__:null,basename:yr,default:br,delimiter:":",dirname:gr,extname:dr,isAbsolute:lr,join:fr,normalize:sr,relative:pr,resolve:cr,sep:"/"}));var mr=Object,jr=/./;function _r(r){return"boolean"==typeof r}var Er=Boolean,Ar=Boolean.prototype.toString;var kr=z();function Or(r){return"object"==typeof r&&(r instanceof Er||(kr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function Sr(r){return _r(r)||Or(r)}function xr(){return new Function("return this;")()}q(Sr,"isPrimitive",_r),q(Sr,"isObject",Or);var Fr="object"==typeof self?self:null,Tr="object"==typeof window?window:null,Pr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ir="object"==typeof Pr?Pr:null,Vr="object"==typeof globalThis?globalThis:null;var Nr=function(r){if(arguments.length){if(!_r(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xr()}if(Vr)return Vr;if(Fr)return Fr;if(Tr)return Tr;if(Ir)return Ir;throw new Error("unexpected error. Unable to resolve global object.")}(),$r=Nr.document&&Nr.document.childNodes,Cr=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var Rr,Br=/^\s*function\s*([^(]*)/i;q(Mr,"REGEXP",Br),Rr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var Lr=Rr;function qr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(qr);function Zr(r){var e,t,n,o;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Br.exec(n.toString()))return e[1]}return qr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}q(qr,"isObjectLikeArray",Gr);var zr="function"==typeof jr||"object"==typeof Cr||"function"==typeof $r?function(r){return Zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Zr(r).toLowerCase():e};var Wr,Ur,Xr=Object.getPrototypeOf;Ur=Object.getPrototypeOf,Wr="function"===zr(Ur)?Xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Dr=Wr;function Jr(r){return null==r?null:(r=mr(r),Dr(r))}function Yr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=Jr(r)}return!1}function Hr(r,e,t,n){var o,i,a,u,c,s;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(i=n<0?(1-r)*n:0,o=0,a=0,s=0;s<r;s++)u=t[i],o=nr(o+nr(u*u)),a=nr(a+u),i+=n;return nr(nr(o-nr(nr(a/r)*a))/c)}q(Hr,"ndarray",(function(r,e,t,n,o){var i,a,u,c,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===n)return 0;for(a=o,i=0,u=0,l=0;l<r;l++)c=t[a],i=nr(i+nr(c*c)),u=nr(u+c),a+=n;return nr(nr(i-nr(nr(u/r)*u))/s)}));var Kr,Qr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Yr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,wr.join)("/home/runner/work/stats-base-sstdevtk/stats-base-sstdevtk/node_modules/@stdlib/stats-base-svariancetk/lib","./native.js")),re=Kr=Yr(Qr)?Hr:Qr;const{ndarray:ee}=Kr;var te=Math.sqrt;function ne(r,e,t,n){return nr(te(re(r,e,t,n)))}function oe(r,e,t,n,o){return nr(te(ee(r,e,t,n,o)))}q(ne,"ndarray",oe);export{ne as default,oe as ndarray};
//# sourceMappingURL=mod.js.map
