/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./Transforms-9a355f42","./ComponentDatatype-569c1e3e","./AttributeCompression-4cb3e905"],function(e,y,t,i,b,f,v,r,M,s,x){"use strict";function a(e,t){this._ellipsoid=e,this._cameraPosition=new v.Cartesian3,this._cameraPositionInScaledSpace=new v.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,y.defined(t)&&(this.cameraPosition=t)}r.defineProperties(a.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(e){var t=this._ellipsoid.transformPositionToScaledSpace(e,this._cameraPositionInScaledSpace),i=v.Cartesian3.magnitudeSquared(t)-1;v.Cartesian3.clone(e,this._cameraPosition),this._cameraPositionInScaledSpace=t,this._distanceToLimbInScaledSpaceSquared=i}}});var m=new v.Cartesian3;a.prototype.isPointVisible=function(e){return C(this._ellipsoid.transformPositionToScaledSpace(e,m),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},a.prototype.isScaledSpacePointVisible=function(e){return C(e,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var n=new v.Cartesian3;a.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(e,t){var i,r,a=this._ellipsoid;return i=y.defined(t)&&t<0&&a.minimumRadius>-t?((r=n).x=this._cameraPosition.x/(a.radii.x+t),r.y=this._cameraPosition.y/(a.radii.y+t),r.z=this._cameraPosition.z/(a.radii.z+t),r.x*r.x+r.y*r.y+r.z*r.z-1):(r=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared),C(e,r,i)},a.prototype.computeHorizonCullingPoint=function(e,t,i){return l(this._ellipsoid,e,t,i)};var o=v.Ellipsoid.clone(v.Ellipsoid.UNIT_SPHERE);a.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(e,t,i,r){return l(d(this._ellipsoid,i,o),e,t,r)},a.prototype.computeHorizonCullingPointFromVertices=function(e,t,i,r,a){return h(this._ellipsoid,e,t,i,r,a)},a.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(e,t,i,r,a,n){return h(d(this._ellipsoid,a,o),e,t,i,r,n)};var c=[];a.prototype.computeHorizonCullingPointFromRectangle=function(e,t,i){var r=v.Rectangle.subsample(e,t,0,c),a=M.BoundingSphere.fromPoints(r);if(!(v.Cartesian3.magnitude(a.center)<.1*t.minimumRadius))return this.computeHorizonCullingPoint(a.center,r,i)};var u=new v.Cartesian3;function d(e,t,i){if(y.defined(t)&&t<0&&e.minimumRadius>-t){var r=v.Cartesian3.fromElements(e.radii.x+t,e.radii.y+t,e.radii.z+t,u);e=v.Ellipsoid.fromCartesian3(r,i)}return e}function l(e,t,i,r){y.defined(r)||(r=new v.Cartesian3);for(var a=E(e,t),n=0,o=0,s=i.length;o<s;++o){var m=T(e,i[o],a);if(m<0)return;n=Math.max(n,m)}return P(a,n,r)}var p=new v.Cartesian3;function h(e,t,i,r,a,n){y.defined(n)||(n=new v.Cartesian3),r=b.defaultValue(r,3),a=b.defaultValue(a,v.Cartesian3.ZERO);for(var o=E(e,t),s=0,m=0,c=i.length;m<c;m+=r){p.x=i[m]+a.x,p.y=i[m+1]+a.y,p.z=i[m+2]+a.z;var u=T(e,p,o);if(u<0)return;s=Math.max(s,u)}return P(o,s,n)}function C(e,t,i){var r=t,a=i,n=v.Cartesian3.subtract(e,r,m),o=-v.Cartesian3.dot(n,r);return!(a<0?0<o:a<o&&o*o/v.Cartesian3.magnitudeSquared(n)>a)}var S=new v.Cartesian3,g=new v.Cartesian3;function T(e,t,i){var r=e.transformPositionToScaledSpace(t,S),a=v.Cartesian3.magnitudeSquared(r),n=Math.sqrt(a),o=v.Cartesian3.divideByScalar(r,n,g);a=Math.max(1,a);var s=1/(n=Math.max(1,n));return 1/(v.Cartesian3.dot(o,i)*s-v.Cartesian3.magnitude(v.Cartesian3.cross(o,i,o))*(Math.sqrt(a-1)*s))}function P(e,t,i){if(!(t<=0||t===1/0||t!=t))return v.Cartesian3.multiplyByScalar(e,t,i)}var z=new v.Cartesian3;function E(e,t){return v.Cartesian3.equals(t,v.Cartesian3.ZERO)?t:(e.transformPositionToScaledSpace(t,z),v.Cartesian3.normalize(z,z))}var N=i.freezeObject({NONE:0,BITS12:1}),I=new v.Cartesian3,B=new v.Cartesian3,_=new v.Cartesian2,w=new M.Matrix4,A=new M.Matrix4,q=Math.pow(2,12);function H(e,t,i,r,a,n){var o,s,m,c=N.NONE;if(y.defined(e)&&y.defined(t)&&y.defined(i)&&y.defined(r)){var u=e.minimum,d=e.maximum,l=v.Cartesian3.subtract(d,u,B),p=i-t;c=Math.max(v.Cartesian3.maximumComponent(l),p)<q-1?N.BITS12:N.NONE,o=e.center,s=M.Matrix4.inverseTransformation(r,new M.Matrix4);var h=v.Cartesian3.negate(u,I);M.Matrix4.multiply(M.Matrix4.fromTranslation(h,w),s,s);var f=I;f.x=1/l.x,f.y=1/l.y,f.z=1/l.z,M.Matrix4.multiply(M.Matrix4.fromScale(f,w),s,s),m=M.Matrix4.clone(r),M.Matrix4.setTranslation(m,v.Cartesian3.ZERO,m),r=M.Matrix4.clone(r,new M.Matrix4);var x=M.Matrix4.fromTranslation(u,w),C=M.Matrix4.fromScale(l,A),S=M.Matrix4.multiply(x,C,w);M.Matrix4.multiply(r,S,r),M.Matrix4.multiply(m,S,m)}this.quantization=c,this.minimumHeight=t,this.maximumHeight=i,this.center=o,this.toScaledENU=s,this.fromScaledENU=r,this.matrix=m,this.hasVertexNormals=a,this.hasWebMercatorT=b.defaultValue(n,!1)}H.prototype.encode=function(e,t,i,r,a,n,o){var s=r.x,m=r.y;if(this.quantization===N.BITS12){(i=M.Matrix4.multiplyByPoint(this.toScaledENU,i,I)).x=f.CesiumMath.clamp(i.x,0,1),i.y=f.CesiumMath.clamp(i.y,0,1),i.z=f.CesiumMath.clamp(i.z,0,1);var c=this.maximumHeight-this.minimumHeight,u=f.CesiumMath.clamp((a-this.minimumHeight)/c,0,1);v.Cartesian2.fromElements(i.x,i.y,_);var d=x.AttributeCompression.compressTextureCoordinates(_);v.Cartesian2.fromElements(i.z,u,_);var l=x.AttributeCompression.compressTextureCoordinates(_);v.Cartesian2.fromElements(s,m,_);var p=x.AttributeCompression.compressTextureCoordinates(_);if(e[t++]=d,e[t++]=l,e[t++]=p,this.hasWebMercatorT){v.Cartesian2.fromElements(o,0,_);var h=x.AttributeCompression.compressTextureCoordinates(_);e[t++]=h}}else v.Cartesian3.subtract(i,this.center,I),e[t++]=I.x,e[t++]=I.y,e[t++]=I.z,e[t++]=a,e[t++]=s,e[t++]=m,this.hasWebMercatorT&&(e[t++]=o);return this.hasVertexNormals&&(e[t++]=x.AttributeCompression.octPackFloat(n)),t},H.prototype.decodePosition=function(e,t,i){if(y.defined(i)||(i=new v.Cartesian3),t*=this.getStride(),this.quantization!==N.BITS12)return i.x=e[t],i.y=e[t+1],i.z=e[t+2],v.Cartesian3.add(i,this.center,i);var r=x.AttributeCompression.decompressTextureCoordinates(e[t],_);i.x=r.x,i.y=r.y;var a=x.AttributeCompression.decompressTextureCoordinates(e[t+1],_);return i.z=a.x,M.Matrix4.multiplyByPoint(this.fromScaledENU,i,i)},H.prototype.decodeTextureCoordinates=function(e,t,i){return y.defined(i)||(i=new v.Cartesian2),t*=this.getStride(),this.quantization===N.BITS12?x.AttributeCompression.decompressTextureCoordinates(e[t+2],i):v.Cartesian2.fromElements(e[t+4],e[t+5],i)},H.prototype.decodeHeight=function(e,t){return t*=this.getStride(),this.quantization!==N.BITS12?e[t+3]:x.AttributeCompression.decompressTextureCoordinates(e[t+1],_).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},H.prototype.decodeWebMercatorT=function(e,t){return t*=this.getStride(),this.quantization===N.BITS12?x.AttributeCompression.decompressTextureCoordinates(e[t+3],_).x:e[t+6]},H.prototype.getOctEncodedNormal=function(e,t,i){var r=e[t=(t+1)*this.getStride()-1]/256,a=Math.floor(r),n=256*(r-a);return v.Cartesian2.fromElements(a,n,i)},H.prototype.getStride=function(){var e;switch(this.quantization){case N.BITS12:e=3;break;default:e=6}return this.hasWebMercatorT&&++e,this.hasVertexNormals&&++e,e};var V={position3DAndHeight:0,textureCoordAndEncodedNormals:1},O={compressed0:0,compressed1:1};H.prototype.getAttributes=function(e){var t,i=s.ComponentDatatype.FLOAT,r=s.ComponentDatatype.getSizeInBytes(i);if(this.quantization===N.NONE){var a=2;return this.hasWebMercatorT&&++a,this.hasVertexNormals&&++a,[{index:V.position3DAndHeight,vertexBuffer:e,componentDatatype:i,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:t=(4+a)*r},{index:V.textureCoordAndEncodedNormals,vertexBuffer:e,componentDatatype:i,componentsPerAttribute:a,offsetInBytes:4*r,strideInBytes:t}]}var n=3,o=0;return(this.hasWebMercatorT||this.hasVertexNormals)&&++n,this.hasWebMercatorT&&this.hasVertexNormals?[{index:O.compressed0,vertexBuffer:e,componentDatatype:i,componentsPerAttribute:n,offsetInBytes:0,strideInBytes:t=(n+ ++o)*r},{index:O.compressed1,vertexBuffer:e,componentDatatype:i,componentsPerAttribute:o,offsetInBytes:n*r,strideInBytes:t}]:[{index:O.compressed0,vertexBuffer:e,componentDatatype:i,componentsPerAttribute:n}]},H.prototype.getAttributeLocations=function(){return this.quantization===N.NONE?V:O},H.clone=function(e,t){return y.defined(t)||(t=new H),t.quantization=e.quantization,t.minimumHeight=e.minimumHeight,t.maximumHeight=e.maximumHeight,t.center=v.Cartesian3.clone(e.center),t.toScaledENU=M.Matrix4.clone(e.toScaledENU),t.fromScaledENU=M.Matrix4.clone(e.fromScaledENU),t.matrix=M.Matrix4.clone(e.matrix),t.hasVertexNormals=e.hasVertexNormals,t.hasWebMercatorT=e.hasWebMercatorT,t},e.EllipsoidalOccluder=a,e.TerrainEncoding=H});
