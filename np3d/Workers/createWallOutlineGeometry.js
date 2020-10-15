define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-1e0d318e","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-4ba04dc0","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./IntersectionTests-50799e69","./Plane-af5cd52a","./arrayRemoveDuplicates-b817241d","./EllipsoidRhumbLine-862a2df4","./EllipsoidGeodesic-7779e55a","./PolylinePipeline-23ce1411","./WallGeometryLibrary-8fbd4898"],function(G,e,L,x,P,i,t,T,D,V,I,a,n,r,o,s,l,R){"use strict";var S=new x.Cartesian3,M=new x.Cartesian3;function m(e){var i=(e=G.defaultValue(e,G.defaultValue.EMPTY_OBJECT)).positions,t=e.maximumHeights,a=e.minimumHeights,n=G.defaultValue(e.granularity,L.CesiumMath.RADIANS_PER_DEGREE),r=G.defaultValue(e.ellipsoid,x.Ellipsoid.WGS84);this._positions=i,this._minimumHeights=a,this._maximumHeights=t,this._granularity=n,this._ellipsoid=x.Ellipsoid.clone(r),this._workerName="createWallOutlineGeometry";var o=1+i.length*x.Cartesian3.packedLength+2;G.defined(a)&&(o+=a.length),G.defined(t)&&(o+=t.length),this.packedLength=o+x.Ellipsoid.packedLength+1}m.pack=function(e,i,t){var a;t=G.defaultValue(t,0);var n=e._positions,r=n.length;for(i[t++]=r,a=0;a<r;++a,t+=x.Cartesian3.packedLength)x.Cartesian3.pack(n[a],i,t);var o=e._minimumHeights;if(r=G.defined(o)?o.length:0,i[t++]=r,G.defined(o))for(a=0;a<r;++a)i[t++]=o[a];var s=e._maximumHeights;if(r=G.defined(s)?s.length:0,i[t++]=r,G.defined(s))for(a=0;a<r;++a)i[t++]=s[a];return x.Ellipsoid.pack(e._ellipsoid,i,t),i[t+=x.Ellipsoid.packedLength]=e._granularity,i};var u=x.Ellipsoid.clone(x.Ellipsoid.UNIT_SPHERE),p={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:u,granularity:void 0};return m.unpack=function(e,i,t){var a;i=G.defaultValue(i,0);var n,r,o=e[i++],s=new Array(o);for(a=0;a<o;++a,i+=x.Cartesian3.packedLength)s[a]=x.Cartesian3.unpack(e,i);if(0<(o=e[i++]))for(n=new Array(o),a=0;a<o;++a)n[a]=e[i++];if(0<(o=e[i++]))for(r=new Array(o),a=0;a<o;++a)r[a]=e[i++];var l=x.Ellipsoid.unpack(e,i,u),d=e[i+=x.Ellipsoid.packedLength];return G.defined(t)?(t._positions=s,t._minimumHeights=n,t._maximumHeights=r,t._ellipsoid=x.Ellipsoid.clone(l,t._ellipsoid),t._granularity=d,t):(p.positions=s,p.minimumHeights=n,p.maximumHeights=r,p.granularity=d,new m(p))},m.fromConstantHeights=function(e){var i,t,a=(e=G.defaultValue(e,G.defaultValue.EMPTY_OBJECT)).positions,n=e.minimumHeight,r=e.maximumHeight,o=G.defined(n),s=G.defined(r);if(o||s){var l=a.length;i=o?new Array(l):void 0,t=s?new Array(l):void 0;for(var d=0;d<l;++d)o&&(i[d]=n),s&&(t[d]=r)}return new m({positions:a,maximumHeights:t,minimumHeights:i,ellipsoid:e.ellipsoid})},m.createGeometry=function(e){var i=e._positions,t=e._minimumHeights,a=e._maximumHeights,n=e._granularity,r=e._ellipsoid,o=R.WallGeometryLibrary.computePositions(r,i,a,t,n,!1);if(G.defined(o)){var s,l=o.bottomPositions,d=o.topPositions,m=d.length,u=2*m,p=new Float64Array(u),f=0;for(m/=3,s=0;s<m;++s){var h=3*s,c=x.Cartesian3.fromArray(d,h,S),g=x.Cartesian3.fromArray(l,h,M);p[f++]=g.x,p[f++]=g.y,p[f++]=g.z,p[f++]=c.x,p[f++]=c.y,p[f++]=c.z}var y=new V.GeometryAttributes({position:new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),v=u/3;u=2*v-4+v;var _=I.IndexDatatype.createTypedArray(v,u),E=0;for(s=0;s<v-2;s+=2){var C=s,H=s+2,b=x.Cartesian3.fromArray(p,3*C,S),A=x.Cartesian3.fromArray(p,3*H,M);if(!x.Cartesian3.equalsEpsilon(b,A,L.CesiumMath.EPSILON10)){var k=s+1,w=s+3;_[E++]=k,_[E++]=C,_[E++]=k,_[E++]=w,_[E++]=C,_[E++]=H}}return _[E++]=v-2,_[E++]=v-1,new D.Geometry({attributes:y,indices:_,primitiveType:D.PrimitiveType.LINES,boundingSphere:new P.BoundingSphere.fromVertices(p)})}},function(e,i){return G.defined(i)&&(e=m.unpack(e,i)),e._ellipsoid=x.Ellipsoid.clone(e._ellipsoid),m.createGeometry(e)}});
