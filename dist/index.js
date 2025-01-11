"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(w,v){
var k=require('@stdlib/stats-base-svariancetk/dist').ndarray,p=require('@stdlib/math-base-special-sqrtf/dist');function x(e,r,a,t,y){return p(k(e,r,a,t,y))}v.exports=x
});var q=s(function(z,n){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=i();function l(e,r,a,t){return m(e,r,a,t,j(e,t))}n.exports=l
});var c=s(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=i();R(d,"ndarray",_);o.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,f=O(E(__dirname,"./native.js"));b(f)?u=g:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
