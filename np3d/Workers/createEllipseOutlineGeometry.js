define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-1e0d318e","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-4ba04dc0","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./GeometryOffsetAttribute-84f7eff3","./EllipseGeometryLibrary-f913262a","./EllipseOutlineGeometry-f5f24b27"],function(r,e,t,n,i,a,o,f,l,c,s,d,u,m){"use strict";return function(e,t){return r.defined(t)&&(e=m.EllipseOutlineGeometry.unpack(e,t)),e._center=n.Cartesian3.clone(e._center),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),m.EllipseOutlineGeometry.createGeometry(e)}});
