define(["exports","./defined-f727cca5","./Check-fad68dea","./defaultValue-14faef45","./Transforms-784d4ed4"],function(e,t,i,a,r){"use strict";e.GeometryInstance=function(e){e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT),this.geometry=e.geometry,this.modelMatrix=r.Matrix4.clone(a.defaultValue(e.modelMatrix,r.Matrix4.IDENTITY)),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=a.defaultValue(e.attributes,{}),this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}});
