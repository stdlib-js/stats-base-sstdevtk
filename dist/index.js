"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(w,u){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-svariancetk/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return f(y(p(e,r,t,a)))}u.exports=x
});var q=i(function(z,n){
var j=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/stats-base-svariancetk/dist').ndarray,F=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,t,a,l){return j(F(m(e,r,t,a,l)))}n.exports=R
});var c=i(function(A,d){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),_=q();T(o,"ndarray",_);d.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,k=O(E(__dirname,"./native.js"));b(k)?s=g:s=k;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
