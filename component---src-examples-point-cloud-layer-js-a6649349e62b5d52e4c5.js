(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{YKua:function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));var r=o("vuIU"),n=o("dI71"),i=o("j+0d"),a=o("rePB"),c=o("PVj1"),s=o("kh/P"),u=o("R25c");function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){Object(a.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var b=Math.PI/180;function f(t){var e=t.height,o=t.focalDistance,r=t.orbitAxis,n=t.rotationX,i=t.rotationOrbit,a=t.zoom,c="Z"===r?[0,0,1]:[0,1,0],u="Z"===r?[0,-o,0]:[0,0,o],p=(new s.a).lookAt({eye:u,up:c});p.rotateX(n*b),"Z"===r?p.rotateZ(i*b):p.rotateY(i*b);var l=Math.pow(2,a)/e;return p.scale(l),p}var d=function(t){function e(e){var o,r=e.height,n=e.projectionMatrix,i=e.fovy,a=void 0===i?50:i,c=e.orbitAxis,s=void 0===c?"Z":c,p=e.target,b=void 0===p?[0,0,0]:p,d=e.rotationX,O=void 0===d?0:d,h=e.rotationOrbit,v=void 0===h?0:h,m=e.zoom,j=void 0===m?0:m,y=n?n[5]/2:Object(u.f)(a);return(o=t.call(this,l(l({},e),{},{longitude:void 0,viewMatrix:f({height:r||1,focalDistance:y,orbitAxis:s,rotationX:O,rotationOrbit:v,zoom:j}),fovy:a,focalDistance:y,position:b,zoom:j}))||this).projectedCenter=o.project(o.center),o}Object(n.a)(e,t);var o=e.prototype;return o.unproject=function(t,e){var o=(void 0===e?{}:e).topLeft,r=void 0===o||o,n=t[0],i=t[1],a=t[2],c=void 0===a?this.projectedCenter[2]:a,s=r?i:this.height-i,p=Object(u.o)([n,s,c],this.pixelUnprojectionMatrix);return[p[0],p[1],p[2]]},o.panByPosition=function(t,e){var o=this.project(t),r=[this.width/2+o[0]-e[0],this.height/2+o[1]-e[1],this.projectedCenter[2]];return{target:this.unproject(r)}},e}(c.a),O=o("rmmO"),h=function(t){function e(e){var o;return void 0===e&&(e={}),(o=t.call(this,e)||this).props.orbitAxis=e.orbitAxis||"Z",o}return Object(n.a)(e,t),Object(r.a)(e,[{key:"ViewportType",get:function(){return d}},{key:"ControllerType",get:function(){return O.b}}]),e}(i.a);h.displayName="OrbitView"},exbY:function(t,e,o){"use strict";o.r(e);var r=o("dI71"),n=o("q1tI"),i=o.n(n),a=o("Lw+3"),c=o("lxDd"),s=o("rePB"),u=(o("i8i4"),o("4ErG")),p=o("W13g"),l=o("mA5F"),b=o("YKua"),f=o("YaxU"),d={name:"LAS",id:"las",module:"las",version:"3.2.4",worker:!0,extensions:["las","laz"],mimeTypes:["application/octet-stream"],text:!0,binary:!0,tests:["LAS"],options:{las:{shape:"mesh",fp64:!1,skip:1,colorDepth:8}}};function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){Object(s.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var v={target:[0,0,0],rotationX:0,rotationOrbit:0,minZoom:0,maxZoom:10,zoom:1},m=new p.a(["rotationOrbit"]);function j(t){var e=t.onLoad,o=Object(n.useState)(v),r=o[0],a=o[1],c=Object(n.useState)(!1),s=c[0],p=c[1];Object(n.useEffect)((function(){if(s){!function t(){a((function(e){return h(h({},e),{},{rotationOrbit:e.rotationOrbit+120,transitionDuration:2400,transitionInterpolator:m,onTransitionEnd:t})}))}()}}),[s]);var O=[new f.a({id:"laz-point-cloud-layer",data:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/point-cloud-laz/indoor.0.1.laz",onDataLoad:function(t){var o=t.header;if(o.boundingBox){var r=o.boundingBox,n=r[0],i=r[1];a(h(h({},v),{},{target:[(n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2],zoom:Math.log2(window.innerWidth/(i[0]-n[0]))-1})),p(!0)}e&&e({count:o.vertexCount,progress:1})},coordinateSystem:l.a.CARTESIAN,getNormal:[0,1,0],getColor:[255,255,255],opacity:.5,pointSize:.5,loaders:[d]})];return i.a.createElement(u.a,{views:new b.a({orbitAxis:"Y",fov:50}),viewState:r,controller:!0,onViewStateChange:function(t){return a(t.viewState)},layers:O,parameters:{clearColor:[.93,.86,.81,1]}})}var y=o("CtqP"),w=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this)._onLoad=function(t){e.props.onStateChange(t)},e}return Object(r.a)(e,t),e.renderInfo=function(t){return i.a.createElement("div",null,i.a.createElement("p",null,"This demo may not work on mobile devices due to browser limitations."),i.a.createElement("p",null,"Data source: ",i.a.createElement("a",{href:"https://kaarta.com"},"kaarta.com")),i.a.createElement("div",{className:"stat"},"No. of Points",i.a.createElement("b",null,Object(a.b)(t.count))))},e.prototype.render=function(){return i.a.createElement(j,{onLoad:this._onLoad})},e}(n.Component);w.title="3D Indoor Scan",w.code=c.b+"/examples/website/point-cloud";e.default=Object(y.a)(w)}}]);