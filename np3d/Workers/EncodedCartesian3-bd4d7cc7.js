define(["exports","./defined-f727cca5","./Check-fad68dea","./Cartesian2-2029a73e"],function(e,a,n,i){"use strict";function h(){this.high=i.Cartesian3.clone(i.Cartesian3.ZERO),this.low=i.Cartesian3.clone(i.Cartesian3.ZERO)}h.encode=function(e,n){var i;return a.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var r={high:0,low:0};h.fromCartesian=function(e,n){a.defined(n)||(n=new h);var i=n.high,o=n.low;return h.encode(e.x,r),i.x=r.high,o.x=r.low,h.encode(e.y,r),i.y=r.high,o.y=r.low,h.encode(e.z,r),i.z=r.high,o.z=r.low,n};var t=new h;h.writeElements=function(e,n,i){h.fromCartesian(e,t);var o=t.high,a=t.low;n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=a.x,n[i+4]=a.y,n[i+5]=a.z},e.EncodedCartesian3=h});
