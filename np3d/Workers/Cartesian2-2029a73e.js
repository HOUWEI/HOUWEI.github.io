define(["exports","./defined-f727cca5","./Check-fad68dea","./defaultValue-14faef45","./Math-a357ad19"],function(e,R,i,c,V){"use strict";function b(e,t,n){this.x=c.defaultValue(e,0),this.y=c.defaultValue(t,0),this.z=c.defaultValue(n,0)}b.fromSpherical=function(e,t){R.defined(t)||(t=new b);var n=e.clock,a=e.cone,r=c.defaultValue(e.magnitude,1),i=r*Math.sin(a);return t.x=i*Math.cos(n),t.y=i*Math.sin(n),t.z=r*Math.cos(a),t},b.fromElements=function(e,t,n,a){return R.defined(a)?(a.x=e,a.y=t,a.z=n,a):new b(e,t,n)},b.fromCartesian4=b.clone=function(e,t){if(R.defined(e))return R.defined(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t):new b(e.x,e.y,e.z)},b.packedLength=3,b.pack=function(e,t,n){return n=c.defaultValue(n,0),t[n++]=e.x,t[n++]=e.y,t[n]=e.z,t},b.unpack=function(e,t,n){return t=c.defaultValue(t,0),R.defined(n)||(n=new b),n.x=e[t++],n.y=e[t++],n.z=e[t],n},b.packArray=function(e,t){var n=e.length,a=3*n;if(R.defined(t)){if(!Array.isArray(t)&&t.length!==a)throw new i.DeveloperError("If result is a typed array, it must have exactly array.length * 3 elements");t.length!==a&&(t.length=a)}else t=new Array(a);for(var r=0;r<n;++r)b.pack(e[r],t,3*r);return t},b.unpackArray=function(e,t){var n=e.length;R.defined(t)?t.length=n/3:t=new Array(n/3);for(var a=0;a<n;a+=3){var r=a/3;t[r]=b.unpack(e,a,t[r])}return t},b.fromArray=b.unpack,b.maximumComponent=function(e){return Math.max(e.x,e.y,e.z)},b.minimumComponent=function(e){return Math.min(e.x,e.y,e.z)},b.minimumByComponent=function(e,t,n){return n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n},b.maximumByComponent=function(e,t,n){return n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n},b.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y+e.z*e.z},b.magnitude=function(e){return Math.sqrt(b.magnitudeSquared(e))};var n=new b;b.distance=function(e,t){return b.subtract(e,t,n),b.magnitude(n)},b.distanceSquared=function(e,t){return b.subtract(e,t,n),b.magnitudeSquared(n)},b.normalize=function(e,t){var n=b.magnitude(e);return t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t},b.dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},b.multiplyComponents=function(e,t,n){return n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n},b.divideComponents=function(e,t,n){return n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n},b.add=function(e,t,n){return n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n},b.subtract=function(e,t,n){return n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n},b.multiplyByScalar=function(e,t,n){return n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n},b.divideByScalar=function(e,t,n){return n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n},b.negate=function(e,t){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t},b.abs=function(e,t){return t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t};var r=new b;b.lerp=function(e,t,n,a){return b.multiplyByScalar(t,n,r),a=b.multiplyByScalar(e,1-n,a),b.add(r,a,a)};var u=new b,o=new b;b.angleBetween=function(e,t){b.normalize(e,u),b.normalize(t,o);var n=b.dot(u,o),a=b.magnitude(b.cross(u,o,u));return Math.atan2(a,n)};var a=new b;b.mostOrthogonalAxis=function(e,t){var n=b.normalize(e,a);return b.abs(n,n),t=n.x<=n.y?n.x<=n.z?b.clone(b.UNIT_X,t):b.clone(b.UNIT_Z,t):n.y<=n.z?b.clone(b.UNIT_Y,t):b.clone(b.UNIT_Z,t)},b.projectVector=function(e,t,n){var a=b.dot(e,t)/b.dot(t,t);return b.multiplyByScalar(t,a,n)},b.equals=function(e,t){return e===t||R.defined(e)&&R.defined(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z},b.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]},b.equalsEpsilon=function(e,t,n,a){return e===t||R.defined(e)&&R.defined(t)&&V.CesiumMath.equalsEpsilon(e.x,t.x,n,a)&&V.CesiumMath.equalsEpsilon(e.y,t.y,n,a)&&V.CesiumMath.equalsEpsilon(e.z,t.z,n,a)},b.cross=function(e,t,n){var a=e.x,r=e.y,i=e.z,u=t.x,o=t.y,d=t.z,s=r*d-i*o,h=i*u-a*d,l=a*o-r*u;return n.x=s,n.y=h,n.z=l,n},b.midpoint=function(e,t,n){return n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y),n.z=.5*(e.z+t.z),n},b.fromDegrees=function(e,t,n,a,r){return e=V.CesiumMath.toRadians(e),t=V.CesiumMath.toRadians(t),b.fromRadians(e,t,n,a,r)};var d=new b,s=new b,h=new b(40680631590769,40680631590769,40408299984661.445);b.fromRadians=function(e,t,n,a,r){n=c.defaultValue(n,0);var i=R.defined(a)?a.radiiSquared:h,u=Math.cos(t);d.x=u*Math.cos(e),d.y=u*Math.sin(e),d.z=Math.sin(t),d=b.normalize(d,d),b.multiplyComponents(i,d,s);var o=Math.sqrt(b.dot(d,s));return s=b.divideByScalar(s,o,s),d=b.multiplyByScalar(d,n,d),R.defined(r)||(r=new b),b.add(s,d,r)},b.fromDegreesArray=function(e,t,n){var a=e.length;R.defined(n)?n.length=a/2:n=new Array(a/2);for(var r=0;r<a;r+=2){var i=e[r],u=e[r+1],o=r/2;n[o]=b.fromDegrees(i,u,0,t,n[o])}return n},b.fromRadiansArray=function(e,t,n){var a=e.length;R.defined(n)?n.length=a/2:n=new Array(a/2);for(var r=0;r<a;r+=2){var i=e[r],u=e[r+1],o=r/2;n[o]=b.fromRadians(i,u,0,t,n[o])}return n},b.fromDegreesArrayHeights=function(e,t,n){var a=e.length;R.defined(n)?n.length=a/3:n=new Array(a/3);for(var r=0;r<a;r+=3){var i=e[r],u=e[r+1],o=e[r+2],d=r/3;n[d]=b.fromDegrees(i,u,o,t,n[d])}return n},b.fromRadiansArrayHeights=function(e,t,n){var a=e.length;R.defined(n)?n.length=a/3:n=new Array(a/3);for(var r=0;r<a;r+=3){var i=e[r],u=e[r+1],o=e[r+2],d=r/3;n[d]=b.fromRadians(i,u,o,t,n[d])}return n},b.ZERO=Object.freeze(new b(0,0,0)),b.UNIT_X=Object.freeze(new b(1,0,0)),b.UNIT_Y=Object.freeze(new b(0,1,0)),b.UNIT_Z=Object.freeze(new b(0,0,1)),b.prototype.clone=function(e){return b.clone(this,e)},b.prototype.equals=function(e){return b.equals(this,e)},b.prototype.equalsEpsilon=function(e,t,n){return b.equalsEpsilon(this,e,t,n)},b.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"};var I=new b,E=new b;function l(e,t,n,a,r){var i=e.x,u=e.y,o=e.z,d=t.x,s=t.y,h=t.z,l=i*i*d*d,f=u*u*s*s,c=o*o*h*h,m=l+f+c,y=Math.sqrt(1/m),p=b.multiplyByScalar(e,y,I);if(m<a)return isFinite(y)?b.clone(p,r):void 0;var g=n.x,x=n.y,M=n.z,w=E;w.x=p.x*g*2,w.y=p.y*x*2,w.z=p.z*M*2;var v,_,C,z,S,q,O,T=(1-y)*b.magnitude(e)/(.5*b.magnitude(w)),A=0;do{A=(v=l*(S=(_=1/(1+(T-=A)*g))*_)+f*(q=(C=1/(1+T*x))*C)+c*(O=(z=1/(1+T*M))*z)-1)/(-2*(l*(S*_)*g+f*(q*C)*x+c*(O*z)*M))}while(Math.abs(v)>V.CesiumMath.EPSILON12);return R.defined(r)?(r.x=i*_,r.y=u*C,r.z=o*z,r):new b(i*_,u*C,o*z)}function f(e,t,n){this.longitude=c.defaultValue(e,0),this.latitude=c.defaultValue(t,0),this.height=c.defaultValue(n,0)}f.fromRadians=function(e,t,n,a){return n=c.defaultValue(n,0),R.defined(a)?(a.longitude=e,a.latitude=t,a.height=n,a):new f(e,t,n)},f.fromDegrees=function(e,t,n,a){return e=V.CesiumMath.toRadians(e),t=V.CesiumMath.toRadians(t),f.fromRadians(e,t,n,a)};var m=new b,y=new b,p=new b,g=new b(1/6378137,1/6378137,1/6356752.314245179),x=new b(1/40680631590769,1/40680631590769,1/40408299984661.445),M=V.CesiumMath.EPSILON1;function w(e,t,n,a){t=c.defaultValue(t,0),n=c.defaultValue(n,0),a=c.defaultValue(a,0),e._radii=new b(t,n,a),e._radiiSquared=new b(t*t,n*n,a*a),e._radiiToTheFourth=new b(t*t*t*t,n*n*n*n,a*a*a*a),e._oneOverRadii=new b(0===t?0:1/t,0===n?0:1/n,0===a?0:1/a),e._oneOverRadiiSquared=new b(0===t?0:1/(t*t),0===n?0:1/(n*n),0===a?0:1/(a*a)),e._minimumRadius=Math.min(t,n,a),e._maximumRadius=Math.max(t,n,a),e._centerToleranceSquared=V.CesiumMath.EPSILON1,0!==e._radiiSquared.z&&(e._squaredXOverSquaredZ=e._radiiSquared.x/e._radiiSquared.z)}function v(e,t,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,w(this,e,t,n)}f.fromCartesian=function(e,t,n){var a=R.defined(t)?t.oneOverRadii:g,r=R.defined(t)?t.oneOverRadiiSquared:x,i=l(e,a,r,R.defined(t)?t._centerToleranceSquared:M,y);if(R.defined(i)){var u=b.multiplyComponents(i,r,m);u=b.normalize(u,u);var o=b.subtract(e,i,p),d=Math.atan2(u.y,u.x),s=Math.asin(u.z),h=V.CesiumMath.sign(b.dot(o,e))*b.magnitude(o);return R.defined(n)?(n.longitude=d,n.latitude=s,n.height=h,n):new f(d,s,h)}},f.toCartesian=function(e,t,n){return b.fromRadians(e.longitude,e.latitude,e.height,t,n)},f.clone=function(e,t){if(R.defined(e))return R.defined(t)?(t.longitude=e.longitude,t.latitude=e.latitude,t.height=e.height,t):new f(e.longitude,e.latitude,e.height)},f.equals=function(e,t){return e===t||R.defined(e)&&R.defined(t)&&e.longitude===t.longitude&&e.latitude===t.latitude&&e.height===t.height},f.equalsEpsilon=function(e,t,n){return e===t||R.defined(e)&&R.defined(t)&&Math.abs(e.longitude-t.longitude)<=n&&Math.abs(e.latitude-t.latitude)<=n&&Math.abs(e.height-t.height)<=n},f.ZERO=Object.freeze(new f(0,0,0)),f.prototype.clone=function(e){return f.clone(this,e)},f.prototype.equals=function(e){return f.equals(this,e)},f.prototype.equalsEpsilon=function(e,t){return f.equalsEpsilon(this,e,t)},f.prototype.toString=function(){return"("+this.longitude+", "+this.latitude+", "+this.height+")"},Object.defineProperties(v.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}}),v.clone=function(e,t){if(R.defined(e)){var n=e._radii;return R.defined(t)?(b.clone(n,t._radii),b.clone(e._radiiSquared,t._radiiSquared),b.clone(e._radiiToTheFourth,t._radiiToTheFourth),b.clone(e._oneOverRadii,t._oneOverRadii),b.clone(e._oneOverRadiiSquared,t._oneOverRadiiSquared),t._minimumRadius=e._minimumRadius,t._maximumRadius=e._maximumRadius,t._centerToleranceSquared=e._centerToleranceSquared,t):new v(n.x,n.y,n.z)}},v.fromCartesian3=function(e,t){return R.defined(t)||(t=new v),R.defined(e)&&w(t,e.x,e.y,e.z),t},v.WGS84=Object.freeze(new v(6378137,6378137,6356752.314245179)),v.UNIT_SPHERE=Object.freeze(new v(1,1,1)),v.MOON=Object.freeze(new v(V.CesiumMath.LUNAR_RADIUS,V.CesiumMath.LUNAR_RADIUS,V.CesiumMath.LUNAR_RADIUS)),v.prototype.clone=function(e){return v.clone(this,e)},v.packedLength=b.packedLength,v.pack=function(e,t,n){return n=c.defaultValue(n,0),b.pack(e._radii,t,n),t},v.unpack=function(e,t,n){t=c.defaultValue(t,0);var a=b.unpack(e,t);return v.fromCartesian3(a,n)},v.prototype.geocentricSurfaceNormal=b.normalize,v.prototype.geodeticSurfaceNormalCartographic=function(e,t){var n=e.longitude,a=e.latitude,r=Math.cos(a),i=r*Math.cos(n),u=r*Math.sin(n),o=Math.sin(a);return R.defined(t)||(t=new b),t.x=i,t.y=u,t.z=o,b.normalize(t,t)},v.prototype.geodeticSurfaceNormal=function(e,t){return R.defined(t)||(t=new b),t=b.multiplyComponents(e,this._oneOverRadiiSquared,t),b.normalize(t,t)};var _=new b,C=new b;v.prototype.cartographicToCartesian=function(e,t){var n=_,a=C;this.geodeticSurfaceNormalCartographic(e,n),b.multiplyComponents(this._radiiSquared,n,a);var r=Math.sqrt(b.dot(n,a));return b.divideByScalar(a,r,a),b.multiplyByScalar(n,e.height,n),R.defined(t)||(t=new b),b.add(a,n,t)},v.prototype.cartographicArrayToCartesianArray=function(e,t){var n=e.length;R.defined(t)?t.length=n:t=new Array(n);for(var a=0;a<n;a++)t[a]=this.cartographicToCartesian(e[a],t[a]);return t};var z=new b,S=new b,q=new b;function O(e,t,n,a){this.west=c.defaultValue(e,0),this.south=c.defaultValue(t,0),this.east=c.defaultValue(n,0),this.north=c.defaultValue(a,0)}v.prototype.cartesianToCartographic=function(e,t){var n=this.scaleToGeodeticSurface(e,S);if(R.defined(n)){var a=this.geodeticSurfaceNormal(n,z),r=b.subtract(e,n,q),i=Math.atan2(a.y,a.x),u=Math.asin(a.z),o=V.CesiumMath.sign(b.dot(r,e))*b.magnitude(r);return R.defined(t)?(t.longitude=i,t.latitude=u,t.height=o,t):new f(i,u,o)}},v.prototype.cartesianArrayToCartographicArray=function(e,t){var n=e.length;R.defined(t)?t.length=n:t=new Array(n);for(var a=0;a<n;++a)t[a]=this.cartesianToCartographic(e[a],t[a]);return t},v.prototype.scaleToGeodeticSurface=function(e,t){return l(e,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,t)},v.prototype.scaleToGeocentricSurface=function(e,t){R.defined(t)||(t=new b);var n=e.x,a=e.y,r=e.z,i=this._oneOverRadiiSquared,u=1/Math.sqrt(n*n*i.x+a*a*i.y+r*r*i.z);return b.multiplyByScalar(e,u,t)},v.prototype.transformPositionToScaledSpace=function(e,t){return R.defined(t)||(t=new b),b.multiplyComponents(e,this._oneOverRadii,t)},v.prototype.transformPositionFromScaledSpace=function(e,t){return R.defined(t)||(t=new b),b.multiplyComponents(e,this._radii,t)},v.prototype.equals=function(e){return this===e||R.defined(e)&&b.equals(this._radii,e._radii)},v.prototype.toString=function(){return this._radii.toString()},v.prototype.getSurfaceNormalIntersectionWithZAxis=function(e,t,n){t=c.defaultValue(t,0);var a=this._squaredXOverSquaredZ;if(R.defined(n)||(n=new b),n.x=0,n.y=0,n.z=e.z*(1-a),!(Math.abs(n.z)>=this._radii.z-t))return n},Object.defineProperties(O.prototype,{width:{get:function(){return O.computeWidth(this)}},height:{get:function(){return O.computeHeight(this)}}}),O.packedLength=4,O.pack=function(e,t,n){return n=c.defaultValue(n,0),t[n++]=e.west,t[n++]=e.south,t[n++]=e.east,t[n]=e.north,t},O.unpack=function(e,t,n){return t=c.defaultValue(t,0),R.defined(n)||(n=new O),n.west=e[t++],n.south=e[t++],n.east=e[t++],n.north=e[t],n},O.computeWidth=function(e){var t=e.east,n=e.west;return t<n&&(t+=V.CesiumMath.TWO_PI),t-n},O.computeHeight=function(e){return e.north-e.south},O.fromDegrees=function(e,t,n,a,r){return e=V.CesiumMath.toRadians(c.defaultValue(e,0)),t=V.CesiumMath.toRadians(c.defaultValue(t,0)),n=V.CesiumMath.toRadians(c.defaultValue(n,0)),a=V.CesiumMath.toRadians(c.defaultValue(a,0)),R.defined(r)?(r.west=e,r.south=t,r.east=n,r.north=a,r):new O(e,t,n,a)},O.fromRadians=function(e,t,n,a,r){return R.defined(r)?(r.west=c.defaultValue(e,0),r.south=c.defaultValue(t,0),r.east=c.defaultValue(n,0),r.north=c.defaultValue(a,0),r):new O(e,t,n,a)},O.fromCartographicArray=function(e,t){for(var n=Number.MAX_VALUE,a=-Number.MAX_VALUE,r=Number.MAX_VALUE,i=-Number.MAX_VALUE,u=Number.MAX_VALUE,o=-Number.MAX_VALUE,d=0,s=e.length;d<s;d++){var h=e[d];n=Math.min(n,h.longitude),a=Math.max(a,h.longitude),u=Math.min(u,h.latitude),o=Math.max(o,h.latitude);var l=0<=h.longitude?h.longitude:h.longitude+V.CesiumMath.TWO_PI;r=Math.min(r,l),i=Math.max(i,l)}return i-r<a-n&&(n=r,(a=i)>V.CesiumMath.PI&&(a-=V.CesiumMath.TWO_PI),n>V.CesiumMath.PI&&(n-=V.CesiumMath.TWO_PI)),R.defined(t)?(t.west=n,t.south=u,t.east=a,t.north=o,t):new O(n,u,a,o)},O.fromCartesianArray=function(e,t,n){t=c.defaultValue(t,v.WGS84);for(var a=Number.MAX_VALUE,r=-Number.MAX_VALUE,i=Number.MAX_VALUE,u=-Number.MAX_VALUE,o=Number.MAX_VALUE,d=-Number.MAX_VALUE,s=0,h=e.length;s<h;s++){var l=t.cartesianToCartographic(e[s]);a=Math.min(a,l.longitude),r=Math.max(r,l.longitude),o=Math.min(o,l.latitude),d=Math.max(d,l.latitude);var f=0<=l.longitude?l.longitude:l.longitude+V.CesiumMath.TWO_PI;i=Math.min(i,f),u=Math.max(u,f)}return u-i<r-a&&(a=i,(r=u)>V.CesiumMath.PI&&(r-=V.CesiumMath.TWO_PI),a>V.CesiumMath.PI&&(a-=V.CesiumMath.TWO_PI)),R.defined(n)?(n.west=a,n.south=o,n.east=r,n.north=d,n):new O(a,o,r,d)},O.clone=function(e,t){if(R.defined(e))return R.defined(t)?(t.west=e.west,t.south=e.south,t.east=e.east,t.north=e.north,t):new O(e.west,e.south,e.east,e.north)},O.equalsEpsilon=function(e,t,n){return e===t||R.defined(e)&&R.defined(t)&&Math.abs(e.west-t.west)<=n&&Math.abs(e.south-t.south)<=n&&Math.abs(e.east-t.east)<=n&&Math.abs(e.north-t.north)<=n},O.prototype.clone=function(e){return O.clone(this,e)},O.prototype.equals=function(e){return O.equals(this,e)},O.equals=function(e,t){return e===t||R.defined(e)&&R.defined(t)&&e.west===t.west&&e.south===t.south&&e.east===t.east&&e.north===t.north},O.prototype.equalsEpsilon=function(e,t){return O.equalsEpsilon(this,e,t)},O.validate=function(e){},O.southwest=function(e,t){return R.defined(t)?(t.longitude=e.west,t.latitude=e.south,t.height=0,t):new f(e.west,e.south)},O.northwest=function(e,t){return R.defined(t)?(t.longitude=e.west,t.latitude=e.north,t.height=0,t):new f(e.west,e.north)},O.northeast=function(e,t){return R.defined(t)?(t.longitude=e.east,t.latitude=e.north,t.height=0,t):new f(e.east,e.north)},O.southeast=function(e,t){return R.defined(t)?(t.longitude=e.east,t.latitude=e.south,t.height=0,t):new f(e.east,e.south)},O.center=function(e,t){var n=e.east,a=e.west;n<a&&(n+=V.CesiumMath.TWO_PI);var r=V.CesiumMath.negativePiToPi(.5*(a+n)),i=.5*(e.south+e.north);return R.defined(t)?(t.longitude=r,t.latitude=i,t.height=0,t):new f(r,i)},O.intersection=function(e,t,n){var a=e.east,r=e.west,i=t.east,u=t.west;a<r&&0<i?a+=V.CesiumMath.TWO_PI:i<u&&0<a&&(i+=V.CesiumMath.TWO_PI),a<r&&u<0?u+=V.CesiumMath.TWO_PI:i<u&&r<0&&(r+=V.CesiumMath.TWO_PI);var o=V.CesiumMath.negativePiToPi(Math.max(r,u)),d=V.CesiumMath.negativePiToPi(Math.min(a,i));if(!((e.west<e.east||t.west<t.east)&&d<=o)){var s=Math.max(e.south,t.south),h=Math.min(e.north,t.north);if(!(h<=s))return R.defined(n)?(n.west=o,n.south=s,n.east=d,n.north=h,n):new O(o,s,d,h)}},O.simpleIntersection=function(e,t,n){var a=Math.max(e.west,t.west),r=Math.max(e.south,t.south),i=Math.min(e.east,t.east),u=Math.min(e.north,t.north);if(!(u<=r||i<=a))return R.defined(n)?(n.west=a,n.south=r,n.east=i,n.north=u,n):new O(a,r,i,u)},O.union=function(e,t,n){R.defined(n)||(n=new O);var a=e.east,r=e.west,i=t.east,u=t.west;a<r&&0<i?a+=V.CesiumMath.TWO_PI:i<u&&0<a&&(i+=V.CesiumMath.TWO_PI),a<r&&u<0?u+=V.CesiumMath.TWO_PI:i<u&&r<0&&(r+=V.CesiumMath.TWO_PI);var o=V.CesiumMath.convertLongitudeRange(Math.min(r,u)),d=V.CesiumMath.convertLongitudeRange(Math.max(a,i));return n.west=o,n.south=Math.min(e.south,t.south),n.east=d,n.north=Math.max(e.north,t.north),n},O.expand=function(e,t,n){return R.defined(n)||(n=new O),n.west=Math.min(e.west,t.longitude),n.south=Math.min(e.south,t.latitude),n.east=Math.max(e.east,t.longitude),n.north=Math.max(e.north,t.latitude),n},O.contains=function(e,t){var n=t.longitude,a=t.latitude,r=e.west,i=e.east;return i<r&&(i+=V.CesiumMath.TWO_PI,n<0&&(n+=V.CesiumMath.TWO_PI)),(r<n||V.CesiumMath.equalsEpsilon(n,r,V.CesiumMath.EPSILON14))&&(n<i||V.CesiumMath.equalsEpsilon(n,i,V.CesiumMath.EPSILON14))&&a>=e.south&&a<=e.north};var T=new f;function A(e,t){this.x=c.defaultValue(e,0),this.y=c.defaultValue(t,0)}O.subsample=function(e,t,n,a){t=c.defaultValue(t,v.WGS84),n=c.defaultValue(n,0),R.defined(a)||(a=[]);var r=0,i=e.north,u=e.south,o=e.east,d=e.west,s=T;s.height=n,s.longitude=d,s.latitude=i,a[r]=t.cartographicToCartesian(s,a[r]),r++,s.longitude=o,a[r]=t.cartographicToCartesian(s,a[r]),r++,s.latitude=u,a[r]=t.cartographicToCartesian(s,a[r]),r++,s.longitude=d,a[r]=t.cartographicToCartesian(s,a[r]),r++,s.latitude=i<0?i:0<u?u:0;for(var h=1;h<8;++h)s.longitude=-Math.PI+h*V.CesiumMath.PI_OVER_TWO,O.contains(e,s)&&(a[r]=t.cartographicToCartesian(s,a[r]),r++);return 0===s.latitude&&(s.longitude=d,a[r]=t.cartographicToCartesian(s,a[r]),r++,s.longitude=o,a[r]=t.cartographicToCartesian(s,a[r]),r++),a.length=r,a},O.MAX_VALUE=Object.freeze(new O(-Math.PI,-V.CesiumMath.PI_OVER_TWO,Math.PI,V.CesiumMath.PI_OVER_TWO)),A.fromElements=function(e,t,n){return R.defined(n)?(n.x=e,n.y=t,n):new A(e,t)},A.fromCartesian3=A.clone=function(e,t){if(R.defined(e))return R.defined(t)?(t.x=e.x,t.y=e.y,t):new A(e.x,e.y)},A.fromCartesian4=A.clone,A.packedLength=2,A.pack=function(e,t,n){return n=c.defaultValue(n,0),t[n++]=e.x,t[n]=e.y,t},A.unpack=function(e,t,n){return t=c.defaultValue(t,0),R.defined(n)||(n=new A),n.x=e[t++],n.y=e[t],n},A.packArray=function(e,t){var n=e.length,a=2*n;if(R.defined(t)){if(!Array.isArray(t)&&t.length!==a)throw new i.DeveloperError("If result is a typed array, it must have exactly array.length * 2 elements");t.length!==a&&(t.length=a)}else t=new Array(a);for(var r=0;r<n;++r)A.pack(e[r],t,2*r);return t},A.unpackArray=function(e,t){var n=e.length;R.defined(t)?t.length=n/2:t=new Array(n/2);for(var a=0;a<n;a+=2){var r=a/2;t[r]=A.unpack(e,a,t[r])}return t},A.fromArray=A.unpack,A.maximumComponent=function(e){return Math.max(e.x,e.y)},A.minimumComponent=function(e){return Math.min(e.x,e.y)},A.minimumByComponent=function(e,t,n){return n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n},A.maximumByComponent=function(e,t,n){return n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n},A.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},A.magnitude=function(e){return Math.sqrt(A.magnitudeSquared(e))};var P=new A;A.distance=function(e,t){return A.subtract(e,t,P),A.magnitude(P)},A.distanceSquared=function(e,t){return A.subtract(e,t,P),A.magnitudeSquared(P)},A.normalize=function(e,t){var n=A.magnitude(e);return t.x=e.x/n,t.y=e.y/n,t},A.dot=function(e,t){return e.x*t.x+e.y*t.y},A.multiplyComponents=function(e,t,n){return n.x=e.x*t.x,n.y=e.y*t.y,n},A.divideComponents=function(e,t,n){return n.x=e.x/t.x,n.y=e.y/t.y,n},A.add=function(e,t,n){return n.x=e.x+t.x,n.y=e.y+t.y,n},A.subtract=function(e,t,n){return n.x=e.x-t.x,n.y=e.y-t.y,n},A.multiplyByScalar=function(e,t,n){return n.x=e.x*t,n.y=e.y*t,n},A.divideByScalar=function(e,t,n){return n.x=e.x/t,n.y=e.y/t,n},A.negate=function(e,t){return t.x=-e.x,t.y=-e.y,t},A.abs=function(e,t){return t.x=Math.abs(e.x),t.y=Math.abs(e.y),t};var N=new A;A.lerp=function(e,t,n,a){return A.multiplyByScalar(t,n,N),a=A.multiplyByScalar(e,1-n,a),A.add(N,a,a)};var U=new A,L=new A;A.angleBetween=function(e,t){return A.normalize(e,U),A.normalize(t,L),V.CesiumMath.acosClamped(A.dot(U,L))};var k=new A;A.mostOrthogonalAxis=function(e,t){var n=A.normalize(e,k);return A.abs(n,n),t=n.x<=n.y?A.clone(A.UNIT_X,t):A.clone(A.UNIT_Y,t)},A.equals=function(e,t){return e===t||R.defined(e)&&R.defined(t)&&e.x===t.x&&e.y===t.y},A.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]},A.equalsEpsilon=function(e,t,n,a){return e===t||R.defined(e)&&R.defined(t)&&V.CesiumMath.equalsEpsilon(e.x,t.x,n,a)&&V.CesiumMath.equalsEpsilon(e.y,t.y,n,a)},A.ZERO=Object.freeze(new A(0,0)),A.UNIT_X=Object.freeze(new A(1,0)),A.UNIT_Y=Object.freeze(new A(0,1)),A.prototype.clone=function(e){return A.clone(this,e)},A.prototype.equals=function(e){return A.equals(this,e)},A.prototype.equalsEpsilon=function(e,t,n){return A.equalsEpsilon(this,e,t,n)},A.prototype.toString=function(){return"("+this.x+", "+this.y+")"},e.Cartesian2=A,e.Cartesian3=b,e.Cartographic=f,e.Ellipsoid=v,e.Rectangle=O});
