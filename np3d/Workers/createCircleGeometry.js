define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-1e0d318e","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-4ba04dc0","./GeometryAttributes-90846c5f","./AttributeCompression-170b3be0","./GeometryPipeline-4f9751d3","./EncodedCartesian3-86f19ac2","./IndexDatatype-66caba23","./IntersectionTests-50799e69","./Plane-af5cd52a","./GeometryOffsetAttribute-84f7eff3","./VertexFormat-cc24f342","./EllipseGeometryLibrary-f913262a","./GeometryInstance-c25994cb","./EllipseGeometry-91e978e8"],function(o,e,t,a,i,r,n,s,l,d,m,c,u,p,y,_,h,G,f,x,g){"use strict";function v(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new g.EllipseGeometry(i),this._workerName="createCircleGeometry"}v.packedLength=g.EllipseGeometry.packedLength,v.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new g.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new a.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return v.unpack=function(e,t,i){var r=g.EllipseGeometry.unpack(e,t,E);return w.center=a.Cartesian3.clone(r._center,w.center),w.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,w.ellipsoid),w.height=r._height,w.extrudedHeight=r._extrudedHeight,w.granularity=r._granularity,w.vertexFormat=G.VertexFormat.clone(r._vertexFormat,w.vertexFormat),w.stRotation=r._stRotation,w.shadowVolume=r._shadowVolume,o.defined(i)?(w.semiMajorAxis=r._semiMajorAxis,w.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new g.EllipseGeometry(w),i):(w.radius=r._semiMajorAxis,new v(w))},v.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},v.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,a=t(r,o),n=i(r,o);return new v({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:a,height:n,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(v.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=v.unpack(e,t)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),v.createGeometry(e)}});
