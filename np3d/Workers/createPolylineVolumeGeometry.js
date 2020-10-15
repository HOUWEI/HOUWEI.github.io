define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-1e0d318e","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-4ba04dc0","./GeometryAttributes-90846c5f","./AttributeCompression-170b3be0","./GeometryPipeline-4f9751d3","./EncodedCartesian3-86f19ac2","./IndexDatatype-66caba23","./IntersectionTests-50799e69","./Plane-af5cd52a","./VertexFormat-cc24f342","./arrayRemoveDuplicates-b817241d","./BoundingRectangle-00ce281c","./EllipsoidTangentPlane-38fb6d5d","./EllipsoidRhumbLine-862a2df4","./PolygonPipeline-134cf8f9","./PolylineVolumeGeometryLibrary-9d4dff66","./EllipsoidGeodesic-7779e55a","./PolylinePipeline-23ce1411"],function(c,e,i,u,G,t,n,A,R,D,r,I,a,O,o,l,g,s,d,p,y,S,m,h,f){"use strict";var v={};function B(e,t){c.defined(v[e])||(v[e]=!0,console.warn(c.defaultValue(t,e)))}function b(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=u.Ellipsoid.clone(c.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=c.defaultValue(e.cornerType,m.CornerType.ROUNDED),this._vertexFormat=g.VertexFormat.clone(c.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT)),this._granularity=c.defaultValue(e.granularity,i.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";var r=1+t.length*u.Cartesian3.packedLength;r+=1+n.length*u.Cartesian2.packedLength,this.packedLength=r+u.Ellipsoid.packedLength+g.VertexFormat.packedLength+2}B.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",B.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",B.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",B.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",b.pack=function(e,t,n){var r;n=c.defaultValue(n,0);var i=e._positions,a=i.length;for(t[n++]=a,r=0;r<a;++r,n+=u.Cartesian3.packedLength)u.Cartesian3.pack(i[r],t,n);var o=e._shape;for(a=o.length,t[n++]=a,r=0;r<a;++r,n+=u.Cartesian2.packedLength)u.Cartesian2.pack(o[r],t,n);return u.Ellipsoid.pack(e._ellipsoid,t,n),n+=u.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var E=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),P=new g.VertexFormat,_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:E,vertexFormat:P,cornerType:void 0,granularity:void 0};b.unpack=function(e,t,n){var r;t=c.defaultValue(t,0);var i=e[t++],a=new Array(i);for(r=0;r<i;++r,t+=u.Cartesian3.packedLength)a[r]=u.Cartesian3.unpack(e,t);i=e[t++];var o=new Array(i);for(r=0;r<i;++r,t+=u.Cartesian2.packedLength)o[r]=u.Cartesian2.unpack(e,t);var l=u.Ellipsoid.unpack(e,t,E);t+=u.Ellipsoid.packedLength;var s=g.VertexFormat.unpack(e,t,P);t+=g.VertexFormat.packedLength;var d=e[t++],p=e[t];return c.defined(n)?(n._positions=a,n._shape=o,n._ellipsoid=u.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(s,n._vertexFormat),n._cornerType=d,n._granularity=p,n):(_.polylinePositions=a,_.shapePositions=o,_.cornerType=d,_.granularity=p,new b(_))};var x=new d.BoundingRectangle;return b.createGeometry=function(e){var t=e._positions,n=s.arrayRemoveDuplicates(t,u.Cartesian3.equalsEpsilon),r=e._shape;if(r=m.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(r),!(n.length<2||r.length<3)){S.PolygonPipeline.computeWindingOrder2D(r)===S.WindingOrder.CLOCKWISE&&r.reverse();var i=d.BoundingRectangle.fromPoints(r,x);return function(e,t,n,r){var i=new D.GeometryAttributes;r.position&&(i.position=new R.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var a,o,l,s,d,p,c=t.length,u=e.length/3,g=(u-2*c)/(2*c),y=S.PolygonPipeline.triangulate(t),m=(g-1)*c*6+2*y.length,h=O.IndexDatatype.createTypedArray(u,m),f=2*c,v=0;for(a=0;a<g-1;a++){for(o=0;o<c-1;o++)p=(l=2*o+a*c*2)+f,d=(s=l+1)+f,h[v++]=s,h[v++]=l,h[v++]=d,h[v++]=d,h[v++]=l,h[v++]=p;d=(s=(l=2*c-2+a*c*2)+1)+f,p=l+f,h[v++]=s,h[v++]=l,h[v++]=d,h[v++]=d,h[v++]=l,h[v++]=p}if(r.st||r.tangent||r.bitangent){var b,E,P=new Float32Array(2*u),_=1/(g-1),x=1/n.height,k=n.height/2,C=0;for(a=0;a<g;a++){for(b=a*_,E=x*(t[0].y+k),P[C++]=b,P[C++]=E,o=1;o<c;o++)E=x*(t[o].y+k),P[C++]=b,P[C++]=E,P[C++]=b,P[C++]=E;E=x*(t[0].y+k),P[C++]=b,P[C++]=E}for(o=0;o<c;o++)b=0,E=x*(t[o].y+k),P[C++]=b,P[C++]=E;for(o=0;o<c;o++)b=(g-1)*_,E=x*(t[o].y+k),P[C++]=b,P[C++]=E;i.st=new R.GeometryAttribute({componentDatatype:A.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(P)})}var V=u-2*c;for(a=0;a<y.length;a+=3){var L=y[a]+V,w=y[a+1]+V,F=y[a+2]+V;h[v++]=L,h[v++]=w,h[v++]=F,h[v++]=F+c,h[v++]=w+c,h[v++]=L+c}var T=new R.Geometry({attributes:i,indices:h,boundingSphere:G.BoundingSphere.fromVertices(e),primitiveType:R.PrimitiveType.TRIANGLES});if(r.normal&&(T=I.GeometryPipeline.computeNormal(T)),r.tangent||r.bitangent){try{T=I.GeometryPipeline.computeTangentAndBitangent(T)}catch(e){B("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}r.tangent||(T.attributes.tangent=void 0),r.bitangent||(T.attributes.bitangent=void 0),r.st||(T.attributes.st=void 0)}return T}(m.PolylineVolumeGeometryLibrary.computePositions(n,r,i,e,!0),r,i,e._vertexFormat)}},function(e,t){return c.defined(t)&&(e=b.unpack(e,t)),e._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),b.createGeometry(e)}});
