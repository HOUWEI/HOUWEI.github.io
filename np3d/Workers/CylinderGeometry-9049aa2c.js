define(["exports","./defined-f727cca5","./Check-fad68dea","./defaultValue-14faef45","./Math-a357ad19","./Cartesian2-2029a73e","./Transforms-784d4ed4","./ComponentDatatype-d15788f3","./GeometryAttribute-f63a059c","./GeometryAttributes-b5228039","./IndexDatatype-6e46aa84","./GeometryOffsetAttribute-cca7f9df","./VertexFormat-977bd45b","./CylinderGeometryLibrary-8430a4bf"],function(t,I,e,m,U,S,B,Y,Z,J,W,j,d,q){"use strict";var H=new S.Cartesian2,K=new S.Cartesian3,Q=new S.Cartesian3,X=new S.Cartesian3,$=new S.Cartesian3;function f(t){var e=(t=m.defaultValue(t,m.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=m.defaultValue(t.vertexFormat,d.VertexFormat.DEFAULT),o=m.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=d.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}f.packedLength=d.VertexFormat.packedLength+5,f.pack=function(t,e,a){return a=m.defaultValue(a,0),d.VertexFormat.pack(t._vertexFormat,e,a),a+=d.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=m.defaultValue(t._offsetAttribute,-1),e};var a,p=new d.VertexFormat,l={vertexFormat:p,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};f.unpack=function(t,e,a){e=m.defaultValue(e,0);var r=d.VertexFormat.unpack(t,e,p);e+=d.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],s=t[e++],u=t[e];return I.defined(a)?(a._vertexFormat=d.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=s,a._offsetAttribute=-1===u?void 0:u,a):(l.length=n,l.topRadius=o,l.bottomRadius=i,l.slices=s,l.offsetAttribute=-1===u?void 0:u,new f(l))},f.createGeometry=function(t){var e=t._length,a=t._topRadius,r=t._bottomRadius,n=t._vertexFormat,o=t._slices;if(!(e<=0||a<0||r<0||0===a&&0===r)){var i,s=o+o,u=o+s,m=s+s,d=q.CylinderGeometryLibrary.computePositions(e,a,r,o,!0),f=n.st?new Float32Array(2*m):void 0,p=n.normal?new Float32Array(3*m):void 0,l=n.tangent?new Float32Array(3*m):void 0,y=n.bitangent?new Float32Array(3*m):void 0,c=n.normal||n.tangent||n.bitangent;if(c){var b=n.tangent||n.bitangent,v=0,A=0,g=0,x=Math.atan2(r-a,e),_=K;_.z=Math.sin(x);var h=Math.cos(x),C=X,F=Q;for(i=0;i<o;i++){var w=i/o*U.CesiumMath.TWO_PI,G=h*Math.cos(w),V=h*Math.sin(w);c&&(_.x=G,_.y=V,b&&(C=S.Cartesian3.normalize(S.Cartesian3.cross(S.Cartesian3.UNIT_Z,_,C),C)),n.normal&&(p[v++]=_.x,p[v++]=_.y,p[v++]=_.z,p[v++]=_.x,p[v++]=_.y,p[v++]=_.z),n.tangent&&(l[A++]=C.x,l[A++]=C.y,l[A++]=C.z,l[A++]=C.x,l[A++]=C.y,l[A++]=C.z),n.bitangent&&(F=S.Cartesian3.normalize(S.Cartesian3.cross(_,C,F),F),y[g++]=F.x,y[g++]=F.y,y[g++]=F.z,y[g++]=F.x,y[g++]=F.y,y[g++]=F.z))}for(i=0;i<o;i++)n.normal&&(p[v++]=0,p[v++]=0,p[v++]=-1),n.tangent&&(l[A++]=1,l[A++]=0,l[A++]=0),n.bitangent&&(y[g++]=0,y[g++]=-1,y[g++]=0);for(i=0;i<o;i++)n.normal&&(p[v++]=0,p[v++]=0,p[v++]=1),n.tangent&&(l[A++]=1,l[A++]=0,l[A++]=0),n.bitangent&&(y[g++]=0,y[g++]=1,y[g++]=0)}var D=12*o-12,R=W.IndexDatatype.createTypedArray(m,D),T=0,O=0;for(i=0;i<o-1;i++)R[T++]=O,R[T++]=O+2,R[T++]=O+3,R[T++]=O,R[T++]=O+3,R[T++]=O+1,O+=2;for(R[T++]=s-2,R[T++]=0,R[T++]=1,R[T++]=s-2,R[T++]=1,R[T++]=s-1,i=1;i<o-1;i++)R[T++]=s+i+1,R[T++]=s+i,R[T++]=s;for(i=1;i<o-1;i++)R[T++]=u,R[T++]=u+i,R[T++]=u+i+1;var L=0;if(n.st){var P=Math.max(a,r);for(i=0;i<m;i++){var k=S.Cartesian3.fromArray(d,3*i,$);f[L++]=(k.x+P)/(2*P),f[L++]=(k.y+P)/(2*P)}}var M=new J.GeometryAttributes;n.position&&(M.position=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})),n.normal&&(M.normal=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),n.tangent&&(M.tangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),n.bitangent&&(M.bitangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.st&&(M.st=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:f})),H.x=.5*e,H.y=Math.max(r,a);var z=new B.BoundingSphere(S.Cartesian3.ZERO,S.Cartesian2.magnitude(H));if(I.defined(t._offsetAttribute)){e=d.length;var E=new Uint8Array(e/3),N=t._offsetAttribute===j.GeometryOffsetAttribute.NONE?0:1;j.arrayFill(E,N),M.applyOffset=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:E})}return new Z.Geometry({attributes:M,indices:R,primitiveType:Z.PrimitiveType.TRIANGLES,boundingSphere:z,offsetAttribute:t._offsetAttribute})}},f.getUnitCylinder=function(){return I.defined(a)||(a=f.createGeometry(new f({topRadius:1,bottomRadius:1,length:1,vertexFormat:d.VertexFormat.POSITION_ONLY}))),a},t.CylinderGeometry=f});
