"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=u(function(f,n){
var s=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-sqrt/dist');function o(e,r){var t,i;return s(e)||s(r)||e<=0||r<=0?NaN:(t=e/r,i=1.5*t,e*(a(1+i*i)-i))}n.exports=o
});var q=v();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
