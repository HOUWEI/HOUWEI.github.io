define(["exports","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-1e0d318e","./EllipsoidTangentPlane-38fb6d5d","./PolylinePipeline-23ce1411"],function(a,L,j,p,m,Q){"use strict";var F=Object.freeze({ROUNDED:0,MITERED:1,BEVELED:2}),U=[new j.Cartesian3,new j.Cartesian3],_=new j.Cartesian3,q=new j.Cartesian3,Y=new j.Cartesian3,Z=new j.Cartesian3,k=new j.Cartesian3,H=new j.Cartesian3,J=new j.Cartesian3,K=new j.Cartesian3,W=new j.Cartesian3,X=new j.Cartesian3,g=new j.Cartesian3,$={},aa=new j.Cartographic;function ea(a,e,r,n){var t,i=a[0],s=a[1],o=j.Cartesian3.angleBetween(i,s),l=Math.ceil(o/n),C=new Array(l);if(e===r){for(t=0;t<l;t++)C[t]=e;return C.push(r),C}var c=(r-e)/l;for(t=1;t<l;t++){var u=e+t*c;C[t]=u}return C[0]=e,C.push(r),C}var f=new j.Cartesian3,w=new j.Cartesian3;var h=new j.Cartesian3(-1,0,0),v=new p.Matrix4,x=new p.Matrix4,P=new p.Matrix3,E=p.Matrix3.IDENTITY.clone(),M=new j.Cartesian3,T=new p.Cartesian4,B=new j.Cartesian3;function ra(a,e,r,n,t,i,s,o){var l=M,C=T;v=p.Transforms.eastNorthUpToFixedFrame(a,t,v),l=p.Matrix4.multiplyByPointAsVector(v,h,l);var c=function(a,e,r,n){var t=new m.EllipsoidTangentPlane(r,n),i=t.projectPointOntoPlane(j.Cartesian3.add(r,a,f),f),s=t.projectPointOntoPlane(j.Cartesian3.add(r,e,w),w),o=j.Cartesian2.angleBetween(i,s);return 0<=s.x*i.y-s.y*i.x?-o:o}(l=j.Cartesian3.normalize(l,l),e,a,t);P=p.Matrix3.fromRotationZ(c,P),B.z=i,v=p.Matrix4.multiplyTransformation(v,p.Matrix4.fromRotationTranslation(P,B,x),v);var u=E;u[0]=s;for(var y=0;y<o;y++)for(var d=0;d<r.length;d+=3)C=j.Cartesian3.fromArray(r,d,C),C=p.Matrix3.multiplyByVector(u,C,C),C=p.Matrix4.multiplyByPoint(v,C,C),n.push(C.x,C.y,C.z);return n}var l=new j.Cartesian3;function na(a,e,r,n,t,i,s){for(var o=0;o<a.length;o+=3){n=ra(j.Cartesian3.fromArray(a,o,l),e,r,n,t,i[o/3],s,1)}return n}function ta(a,e){for(var r=a.length,n=new Array(3*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=0;o<r;o++)n[t++]=a[o].x-i,n[t++]=0,n[t++]=a[o].y-s;return n}var z=new p.Quaternion,S=new j.Cartesian3,A=new p.Matrix3;function ia(a,e,r,n,t,i,s,o,l,C){var c,u,y=j.Cartesian3.angleBetween(j.Cartesian3.subtract(e,a,X),j.Cartesian3.subtract(r,a,g)),d=n===F.BEVELED?0:Math.ceil(y/L.CesiumMath.toRadians(5));if(c=t?p.Matrix3.fromQuaternion(p.Quaternion.fromAxisAngle(j.Cartesian3.negate(a,X),y/(d+1),z),A):p.Matrix3.fromQuaternion(p.Quaternion.fromAxisAngle(a,y/(d+1),z),A),e=j.Cartesian3.clone(e,S),0<d)for(var m=C?2:1,f=0;f<d;f++)e=p.Matrix3.multiplyByVector(c,e,e),u=j.Cartesian3.subtract(e,a,X),u=j.Cartesian3.normalize(u,u),t||(u=j.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(e,g),u,o,s,i,l,1,m);else u=j.Cartesian3.subtract(e,a,X),u=j.Cartesian3.normalize(u,u),t||(u=j.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(e,g),u,o,s,i,l,1,1),r=j.Cartesian3.clone(r,S),u=j.Cartesian3.subtract(r,a,X),u=j.Cartesian3.normalize(u,u),t||(u=j.Cartesian3.negate(u,u)),s=ra(i.scaleToGeodeticSurface(r,g),u,o,s,i,l,1,1);return s}$.removeDuplicatesFromShape=function(a){for(var e=a.length,r=[],n=e-1,t=0;t<e;n=t++){var i=a[n],s=a[t];j.Cartesian2.equals(i,s)||r.push(s)}return r},$.angleIsGreaterThanPi=function(a,e,r,n){var t=new m.EllipsoidTangentPlane(r,n),i=t.projectPointOntoPlane(j.Cartesian3.add(r,a,f),f),s=t.projectPointOntoPlane(j.Cartesian3.add(r,e,w),w);return 0<=s.x*i.y-s.y*i.x};var sa=new j.Cartesian3,oa=new j.Cartesian3;$.computePositions=function(a,e,r,n,t){var i=n._ellipsoid,s=function(a,e){for(var r=new Array(a.length),n=0;n<a.length;n++){var t=a[n];aa=e.cartesianToCartographic(t,aa),r[n]=aa.height,a[n]=e.scaleToGeodeticSurface(t,t)}return r}(a,i),o=n._granularity,l=n._cornerType,C=t?function(a,e){var r=a.length,n=new Array(6*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=a[0];n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s;for(var l=1;l<r;l++){var C=(o=a[l]).x-i,c=o.y-s;n[t++]=C,n[t++]=0,n[t++]=c,n[t++]=C,n[t++]=0,n[t++]=c}return o=a[0],n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s,n}(e,r):ta(e,r),c=t?ta(e,r):void 0,u=r.height/2,y=r.width/2,d=a.length,m=[],f=t?[]:void 0,p=_,g=q,w=Y,h=Z,v=k,x=H,P=J,E=K,M=W,T=a[0],B=a[1];h=i.geodeticSurfaceNormal(T,h),p=j.Cartesian3.subtract(B,T,p),p=j.Cartesian3.normalize(p,p),E=j.Cartesian3.cross(h,p,E),E=j.Cartesian3.normalize(E,E);var z,S=s[0],A=s[1];t&&(f=ra(T,E,c,f,i,S+u,1,1)),M=j.Cartesian3.clone(T,M),T=B,g=j.Cartesian3.negate(p,g);for(var b=1;b<d-1;b++){var D=t?2:1;B=a[b+1],p=j.Cartesian3.subtract(B,T,p),p=j.Cartesian3.normalize(p,p),w=j.Cartesian3.add(p,g,w),w=j.Cartesian3.normalize(w,w),h=i.geodeticSurfaceNormal(T,h);var O=j.Cartesian3.multiplyByScalar(h,j.Cartesian3.dot(p,h),sa);j.Cartesian3.subtract(p,O,O),j.Cartesian3.normalize(O,O);var N=j.Cartesian3.multiplyByScalar(h,j.Cartesian3.dot(g,h),oa);if(j.Cartesian3.subtract(g,N,N),j.Cartesian3.normalize(N,N),!L.CesiumMath.equalsEpsilon(Math.abs(j.Cartesian3.dot(O,N)),1,L.CesiumMath.EPSILON7)){w=j.Cartesian3.cross(w,h,w),w=j.Cartesian3.cross(h,w,w),w=j.Cartesian3.normalize(w,w);var V=1/Math.max(.25,j.Cartesian3.magnitude(j.Cartesian3.cross(w,g,X))),G=$.angleIsGreaterThanPi(p,g,T,i);M=(G?(v=j.Cartesian3.add(T,j.Cartesian3.multiplyByScalar(w,V*y,w),v),x=j.Cartesian3.add(v,j.Cartesian3.multiplyByScalar(E,y,x),x),U[0]=j.Cartesian3.clone(M,U[0]),U[1]=j.Cartesian3.clone(x,U[1]),z=ea(U,S+u,A+u,o),m=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,m,i,z,1),E=j.Cartesian3.cross(h,p,E),E=j.Cartesian3.normalize(E,E),P=j.Cartesian3.add(v,j.Cartesian3.multiplyByScalar(E,y,P),P),l===F.ROUNDED||l===F.BEVELED?ia(v,x,P,l,G,i,m,C,A+u,t):m=ra(T,w=j.Cartesian3.negate(w,w),C,m,i,A+u,V,D)):(v=j.Cartesian3.add(T,j.Cartesian3.multiplyByScalar(w,V*y,w),v),x=j.Cartesian3.add(v,j.Cartesian3.multiplyByScalar(E,-y,x),x),U[0]=j.Cartesian3.clone(M,U[0]),U[1]=j.Cartesian3.clone(x,U[1]),z=ea(U,S+u,A+u,o),m=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,m,i,z,1),E=j.Cartesian3.cross(h,p,E),E=j.Cartesian3.normalize(E,E),P=j.Cartesian3.add(v,j.Cartesian3.multiplyByScalar(E,-y,P),P),l===F.ROUNDED||l===F.BEVELED?ia(v,x,P,l,G,i,m,C,A+u,t):m=ra(T,w,C,m,i,A+u,V,D)),j.Cartesian3.clone(P,M)),g=j.Cartesian3.negate(p,g)}else m=ra(M,E,C,m,i,S+u,1,1),M=T;S=A,A=s[b+1],T=B}U[0]=j.Cartesian3.clone(M,U[0]),U[1]=j.Cartesian3.clone(T,U[1]),z=ea(U,S+u,A+u,o),m=na(Q.PolylinePipeline.generateArc({positions:U,granularity:o,ellipsoid:i}),E,C,m,i,z,1),t&&(f=ra(T,E,c,f,i,A+u,1,1)),d=m.length;var R=t?d+f.length:d,I=new Float64Array(R);return I.set(m),t&&I.set(f,d),I},a.CornerType=F,a.PolylineVolumeGeometryLibrary=$});
