(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(t,e,a){!function(e){function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r,i;t.exports=(n=a(0),r=[function(e,t){e.exports=n},function(e,t,n){e.exports=n(15)()},function(e,t,n){var r=n(12),o=n(13),i=n(10),a=n(14);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var a=n(19);e.exports=function(e,t){if(null==e)return{};var n,r=a(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){"use strict";r={};var n,r,i=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]},s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c=n[a]||0,u="".concat(a," ").concat(c),a=(n[a]=c+1,l(u)),c={css:i[1],media:i[2],sourceMap:i[3]};-1!==a?(s[a].references++,s[a].updater(c)):s.push({identifier:u,updater:function(t,e){var n,r,o;{var i;o=e.singleton?(i=g++,n=d=d||p(e),r=f.bind(null,n,i,!1),f.bind(null,n,i,!0)):(n=p(e),r=function(e,t,n){var r=n.css,o=n.media,n=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,e),function(){var e;null!==(e=n).parentNode&&e.parentNode.removeChild(e)})}return r(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap||r(t=e):o()}}(c,t),references:1}),r.push(u)}return r}function p(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0!==n.nonce||(r=o.nc)&&(n.nonce=r),Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}a=[];var a,u=function(e,t){return a[e]=t,a.filter(Boolean).join("\n")};function f(e,t,n,r){var n=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;e.styleSheet?e.styleSheet.cssText=u(t,n):(r=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r))}var d=null,g=0;e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=n=void 0===n?Boolean(window&&document&&document.all&&!window.atob):n);var a=c(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<a.length;t++){var n=l(a[t]);s[n].references--}for(var e=c(e,i),r=0;r<a.length;r++){var o=l(a[r]);0===s[o].references&&(s[o].updater(),s.splice(o,1))}a=e}}}},function(e,t,n){"use strict";e.exports=function(i){var u=[];return u.toString=function(){return this.map(function(e){n=e[1]||"";var t,n,r,o=(r=e[3])?i&&"function"==typeof btoa?(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),t="/*# ".concat(t," */"),o=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}),[n].concat(o).concat([t]).join("\n")):[n].join("\n"):n;return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o}).join("")},u.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),u.push(c))}},u}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i;e.exports=(i={},o.m=r=[function(e,t,n){"use strict";function r(e){return parseInt(e.repeat(3-e.length),16)}n.r(t);var o=new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),i=new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);function a(e){return Number(e)}function c(t,e){var n,r,o=l.find(function(e){return e.regexps.some(function(e){return e.test(t)})});if(o)return o=o.handler(t,e),e=o.r,n=o.g,r=o.b,1!==(o=void 0===(o=o.a)?1:o)?"rgba(".concat(e,", ").concat(n,", ").concat(r,", ").concat(o,")"):"rgb(".concat(e,", ").concat(n,", ").concat(r,")");throw new Error("Stop color - ".concat(t," does not follow one of the accepted formats Hex / Rgb / Rgba "))}function u(e){return null!=e}var s=new RegExp(/\d+/g),l=[{regexps:[o,i],handler:function(e,t){t=1<arguments.length&&void 0!==t?t:1,e=o.exec(e)||i.exec(e);return e?{r:r(e[1]),g:r(e[2]),b:r(e[3]),a:t}:void 0}},{regexps:[s],handler:function(e){var t,e=function(e){if(Array.isArray(e))return e}(e=e.match(s))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),n=e[0],r=e[1],o=e[2],e=e.slice(3).join(".")||1;return t=e,[n,r,o].every(function(e){return 0<=e&&e<=255})&&(!t||0<=t&&t<=1)?{r:a(n),g:a(r),b:a(o),a:a(e)}:void 0}}];function p(e){return Number("".concat(e).trim().endsWith("%")?e.trim().replace("%",""):e)}function f(e){return e<=0||Math.abs(e)<=h?0:e}function d(e){return{x:f(Math.cos(e)),y:f(Math.sin(e))}}function g(e){return e*Math.PI/180}function b(e){return(e=e.toString().trim()).endsWith("%")?Number(e.replace("%","")):100*Number(e)}var m="stop-color",v="stop-opacity",y=["x1","x2","y1","y2"],h=Math.pow(2,-52);function x(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=new DOMParser;function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}var E={string:function(e){var n,e=w.parseFromString(e,"image/svg+xml").querySelector("linearGradient");if(e)return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach(function(e){O(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},(n=e,y.reduce(function(e,t){return Object.assign(e,O({},t,n.getAttribute(t)))},{})),{stops:Array.from(e.querySelectorAll("stop")).map(function(e){var t=b(e.getAttribute("offset")),e=function(e){var t=e.getAttribute(m);if(t)return n=e.getAttribute(v),c(t,n);t=e.getAttribute("style"),(n=document.createElement("div")).setAttribute("style",t);var n,e=n.style,t=e[m],e=e[v];return t?c(t,e):void 0}(e);return{offset:Number(t),color:e}}).filter(function(e){var t=e.offset,e=e.color;return u(t)&&u(e)})});throw new Error("Couldn't parse svg string into linearGradient SVGElement")},object:function(e){return function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?j(o,!0).forEach(function(e){var t,n;t=r,n=o[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):j(o).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}({},e,{stops:e.stops.map(function(e){var t=e.offset,n=e.color,e=e.opacity;return{offset:b(t),color:c(n,e)}})})}};t.default={getBackground:function(e){var t=A(e),t=E[t];if(!t)throw new Error("Cannot parse non JSON / SVG String input");var n,r,o,i,t=(e=t(e)).stops||e.children,a=(i=(e=e).x1,a=e.x2,n=e.y1,e=e.y2,i=(r=function(e){if(Array.isArray(e))return e}(r=[i,a,n,e].map(p))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),4!==t.length);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return t}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],a=r[1],n=r[2],o=a-i,0==(r=(e=r[3])-n)?a<i?270:90:0==o?e<n?0:180:function(e){return e<0?360+e:360<e?e-360:e}(180*Math.atan2(r,o)/Math.PI+90));return{angle:a,background:1===(e=(i={angle:a,stops:t}).stops).length?e[0].color:"linear-gradient(".concat(i.angle,"deg, ").concat(e.map(function(e){return"".concat(e.color," ").concat(e.offset,"%")}).join(", "),")")}},getGradientCords:function(e){var e=function(e){e=(360-(0<arguments.length&&void 0!==e?e:0))%360;return{startPoint:d(g(90-e)),endPoint:d(g(270-e))}}(e),t=e.startPoint,e=e.endPoint;return{x1:t.x,y1:t.y,x2:e.x,y2:e.y}}}}],o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0))},function(e,t,n){var r=n(20),o=n(21),i=n(10),a=n(22);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";var a=n(16);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a)throw(i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")).name="Invariant Violation",i}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(5),n=n(18);r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".ap {\n    flex: none;\n    box-sizing: border-box;\n    background-color: #6E6F6E;\n    border-radius: 50%;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.ap .apc {\n    width: 6px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.ap .aph {\n    width: 6px;\n    height: 6px;\n    background-color: #e1e1e1;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4px;\n    margin: auto;\n    cursor: pointer;\n}\n",""]),e.exports=t},function(e,t){e.exports=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(11);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(5),n=n(24);r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},function(e,t,n){var r=n(6),o=n(25),n=n(26),r=(t=r(!1),o(n));t.push([e.i,".cs {\n    height: 17px;\n    position: absolute;\n    width: 11px;\n    cursor: pointer;\n    background: url("+r+") right center;\n}\n\n.cs div {\n    height: 7px;\n    left: 2px;\n    width: 7px;\n    position: absolute;\n    top: 8px;\n}\n\n.active {\n    background-position: left center;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t){return t=t||{},"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAQAAABzuJQIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAB7SURBVCjP3c7BDQMhDETRP4gyUlb6SEphe9w+JgdArIMPm2uGizV6MpbpERgBzGb0tuZcLvTbDSoHrMUMQmFrY/IaaOeKB7yE+1yTz43irZNXbXcCFosuXqFt9g0cyZICT7LkrU+b62vGeVv4IX+Phc+tfABZK3xj5cgHC29ECUeufxkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMzFUMTg6NDE6MzIrMDI6MDD31tLGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTMxVDE4OjQxOjMyKzAyOjAwhotqegAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="},function(e,t,n){var r=n(5),n=n(28);r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".cp div {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n.cp div:hover {\n  border: 1px solid #fff;\n}\n",""]),e.exports=t},function(e,t,n){var r=n(5),n=n(30);r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".gp {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gp .gp-flat {\n    margin: 0 auto;\n    padding: 10px 0 0!important;\n    box-shadow: none!important;\n    transform: none!important;\n}",""]),e.exports=t},function(e,t,n){var r=n(5),n=n(32);r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".gpw {\n    padding: 20px;\n}\n\n.gpw .trigger {\n    padding: 5px;\n    background: rgb(255, 255, 255);\n    border-radius: 1px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.gpw .trigger .inner {\n    width: 36px;\n    height: 14px;\n    border-radius: 2px;\n}\n\n.gpw .popover {\n    z-index: 2;\n    margin-top: 6px;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px,\n    rgba(0, 0, 0, 0.15) 0 8px 16px;\n    padding: 12px;\n    border-radius: 4px;\n    position: absolute;\n}\n\n.gpw .popover .angle-holder {\n    margin: 0 -10px;\n    padding: 10px 0 0 10px;\n    border-top: 1px solid rgb(238, 238, 238);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.gpw .popover .angle-inputs {\n    border-radius: 4px;\n    background: #f2f2f2;\n    display: flex;\n    flex: 1;\n    margin: 0 20px;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gpw .popover .angle-inputs input {\n    border: none;\n    text-align: center;\n    width: 48px;\n    color: #0C0C09;\n    background: inherit;\n}\n\n.gpw .popover .angle-inputs span {\n    padding: 5px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.gpw .overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}",""]),e.exports=t},function(N,e,t){"use strict";t.r(e),t.d(e,"GradientPicker",function(){return V}),t.d(e,"GradientPickerPopover",function(){return W}),t.d(e,"AnglePicker",function(){return P}),t.d(e,"getGradientPreview",function(){return l});function w(e){return e.sort(q)}function v(){}function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=e%t;return 0==n?e:e+(t/2<n?t-n:-1*n)}var q=function(e,t){return e.offset-t.offset},e=t(3),r=t.n(e),e=t(8),o=t.n(e);function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var l=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:90,n=o.a.getGradientCords(t);return{gradient:n,background:o.a.getBackground(a(a({},n),{},{stops:e})).background,angle:t}},e=t(2),A=t.n(e),j=t(0),E=t.n(j),e=t(1),n=t.n(e);function c(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(e){function n(e,t){f(!c),s.handler=t,i(t.coordinates(e))}function r(){f(!1),t(s.change),l({})}function o(e){var t=s.handler;p&&(s.change=a(t.coordinates(e)))}var i=void 0===(u=e.onDragStart)?v:u,a=e.onDrag,t=void 0===(u=e.onDragEnd)?v:u,c=e.disableOffset,u=Object(j.useState)({}),s=(e=A()(u,2))[0],l=e[1],u=Object(j.useState)(!1),p=(e=A()(u,2))[0],f=e[1];return Object(j.useEffect)(function(){var e,t,n=s.handler;if(n)return e=n.dragEvent,t=n.dragEndEvent,p&&(document.addEventListener(e.name,o,t.options),document.addEventListener(t.name,r)),function(){document.removeEventListener(e.name,o,t.options),document.removeEventListener(t.name,r)}},[p]),[function(e){var t="touchstart"===e.type?S.TOUCH:S.MOUSE;t.stop(e),e.button||n(e,t)},n,r]}function p(e){function t(e){var t=e.clientX,e=e.clientY,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=function(e,t,n){t-=n.y,e-=n.x,n=Math.atan2(t,e);return Math.round(n*(180/Math.PI))+90}(t,e,function(e){if(!e)return{y:0,x:0};var e=e.getBoundingClientRect(),t=e.top,n=e.left;return{y:t+e.height/2,x:n+e.width/2}}(a.current)),t=(e=t)<0?360+e:360<e?e-360:e,e=n?u(t,i):t;return r(e),e}var n=e.angle,r=e.setAngle,o=void 0===(o=e.size)?48:o,i=void 0===(e=e.snap)?5:e,a=Object(j.useRef)(),e={height:o,width:o},c=y({onDragStart:function(e){return t(e,!0)},onDrag:t,onDragEnd:function(e){e&&(e=u(e,i),r(e))}}),c=A()(c,1)[0];return E.a.createElement("div",{className:"ap",ref:a,onMouseDown:c,onTouchStart:c,style:e},E.a.createElement("span",{className:"apc",style:{transform:"rotate(".concat(n,"deg)"),height:o}},E.a.createElement("i",{className:"aph"})))}function f(e){var c,u,s,l,t,n,p,f,r,o=e.stop,i=e.limits,a=e.onPosChange,d=e.onDeleteColor,g=void 0===(g=e.onDragStart)?v:g,b=void 0===(b=e.onDragEnd)?v:b,e=e.disableOffset,m=Object(j.useRef)(),g=(c=(i={stop:o,limits:i,onPosChange:a,onDragStart:g,onDragEnd:b,onDeleteColor:d,colorStopRef:m,disableOffset:e}).limits,u=i.stop,a=i.initialPos,s=i.colorStopRef,l=i.onPosChange,t=i.onDragStart,n=i.onDragEnd,p=i.onDeleteColor,i=i.disableOffset,a=Object(j.useState)(a),a=A()(a,2),f=a[0],r=a[1],a=y({onDragStart:function(e){e=e.clientX;r(e),t(u.id)},onDrag:function(e){var t=e.clientX,e=e.clientY,n=u.id,r=u.offset,o=c.min,i=c.max,a=s.current?s.current.getBoundingClientRect().top:0;if(Math.abs(e-a)>c.drop)return p(n);e=o;a=Math.max(Math.min(r-f+t,i),e);l({id:n,offset:a})},onDragEnd:function(){return n(u.id)},disableOffset:i}),[A()(a,1)[0]]),b=A()(g,1)[0],d=o.offset,e=o.color,i=o.isActive;return E.a.createElement("div",{className:i?"cs active":"cs",ref:m,style:{left:d},onMouseDown:b,onTouchStart:b},E.a.createElement("div",{style:{backgroundColor:e}}))}function d(e){var t=e.width,n=e.stops,r=void 0!==(r=e.disabled)&&r,o=e.onAddColor,i=e.disableOffset,a=M()(e,G);return E.a.createElement("div",{className:"csh",style:{width:t,height:17,position:"relative",cursor:r?"default":"crosshair"},onMouseDown:function(e){e.preventDefault(),e.button||(e=e.clientX-e.target.getBoundingClientRect().left,o({offset:e}))}},n.map(function(e){return E.a.createElement(B,D()({key:e.id,stop:e},a,{disableOffset:i}))}))}function I(){return""+Math.random().toString(36).substr(2,9)}function g(e){var t=e.palette,n=e.width,e=e.height,r=w(t),t=Object(j.useMemo)(I,[t.length]);return E.a.createElement("div",{className:"palette",style:{width:n,height:e}},E.a.createElement("svg",{width:"100%",height:"100%"},E.a.createElement("defs",null,E.a.createElement("linearGradient",{id:t,x1:"0",y1:"0.5",x2:"1",y2:"0.5"}," ",r.map(function(e){var t=e.id,n=e.offset,r=e.color,e=e.opacity;return E.a.createElement("stop",{key:t,offset:n,style:{stopColor:r,stopOpacity:void 0===e?1:e}})}))),E.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#".concat(t,")")})))}function b(e){var n=e.onSelect;return E.a.createElement("div",{className:"cp"},Y.map(function(e){var t=e.value,e=e.name;return E.a.createElement("div",{onClick:function(){return n(t)},key:e,title:e,style:{backgroundColor:t}})}))}var m=Object(e.shape)({id:e.number.isRequired,color:e.string.isRequired,offset:e.number.isRequired,isActive:e.bool.isRequired,pointX:e.number}),h=Object(e.shape)({min:e.number.isRequired,max:e.number.isRequired,drop:e.number}),x=Object(e.shape)({id:e.number,color:e.string.isRequired,offset:e.string.isRequired,opacity:e.number}),U={stop:m.isRequired,limits:h.isRequired,onPosChange:e.func.isRequired,onDeleteColor:e.func.isRequired,onDragStart:e.func,onDragEnd:e.func},m={width:e.number.isRequired,stops:Object(e.arrayOf)(m),limits:h,disabled:e.bool,onPosChange:e.func.isRequired,onAddColor:e.func.isRequired,onDeleteColor:e.func.isRequired,onDragStart:e.func,onDragEnd:e.func},h={width:e.number.isRequired,height:e.number.isRequired,palette:Object(e.arrayOf)(x).isRequired},x={onPaletteChange:e.func.isRequired,paletteHeight:e.number,width:e.number,stopRemovalDrop:e.number,maxStops:e.number,minStops:e.number,flatStyle:e.bool,activeColor:e.number,onActiveColorChange:e.func,palette:Object(e.arrayOf)(x),disableOffset:e.bool},O={angle:e.number.isRequired,setAngle:e.func.isRequired,size:e.number,snap:e.number},e=s(s(s({},x),O),{},{showAnglePicker:e.bool,open:e.bool.isRequired,setOpen:e.func.isRequired,trigger:e.func}),S={MOUSE:{stop:function(e){e.preventDefault(),e.stopPropagation()},coordinates:function(e){return{clientX:e.clientX,clientY:e.clientY}},dragEvent:{name:"mousemove"},dragEndEvent:{name:"mouseup"}},TOUCH:{stop:v,coordinates:function(e){e=A()(e.touches,1)[0];return{clientX:e.clientX,clientY:e.clientY}},dragEvent:{name:"touchmove",options:{cancelable:!0,passive:!0}},dragEndEvent:{name:"touchend"}}},P=(t(17),p.propTypes=O,p),O=t(4),M=t.n(O),O=t(9),C=t.n(O),O=t(7),D=t.n(O),B=(t(23),f.propTypes=U,f),G=["width","stops","disabled","onAddColor","disableOffset"],L=(d.propTypes=m,d),X=(g.propTypes=h,g),Y=[{value:"#000000",name:"black"},{value:"#808080",name:"gray"},{value:"#C0C0C0",name:"silver"},{value:"#FFFFFF",name:"white"},{value:"#FF0000",name:"red"},{value:"#800000",name:"maroon"},{value:"#FFFF00",name:"yellow"},{value:"#808000",name:"olive"},{value:"#00FF00",name:"lime"},{value:"#008000",name:"green"},{value:"#00FFFF",name:"aqua"},{value:"#008080",name:"teal"},{value:"#0000FF",name:"blue"},{value:"#000080",name:"navy"},{value:"#FF00FF",name:"fuchsia"},{value:"#800080",name:"purple"}],z=(t(27),b.propTypes={color:n.a.string.isRequired,onSelect:n.a.func.isRequired},b),H=(t(29),["offset"]);function R(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function k(e,t){return _(_({},e=e.find(function(e){return e.id===t})),{},{offset:Number(e.offset)})}function T(e){function r(e){b||0===b?m(e-1):x(e)}function n(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;a=a.map(function(e){return O===e.id?_(_({},e),{},{color:t,opacity:n}):e}),o(a)}function o(e){e=w(e).map(function(e){var t=e.offset,e=M()(e,H);return _({offset:Number(t).toFixed(3)},e)}),g(e)}var t,i,a=e.palette,c=void 0===(c=e.paletteHeight)?32:c,u=void 0===(v=e.width)?220:v,s=void 0===(v=e.stopRemovalDrop)?50:v,l=void 0===(v=e.minStops)?2:v,p=void 0===(v=e.maxStops)?5:v,f=e.children,d=void 0!==(v=e.flatStyle)&&v,g=e.onPaletteChange,b=e.activeColor,m=e.onActiveColorChange,e=void 0!==(v=e.disableOffset)&&v,v=(a=a.map(function(e,t){return _(_({},e),{},{id:e.id||t+1})}))[b||0],y=Object(j.useState)(v.id),h=(y=A()(y,2))[0],x=y[1],O=b?v.id:h,y=Object(j.useMemo)(function(){return{min:-5,max:u-5,drop:s}},[u]),v=u-5,h=a.length>=p;return E.a.createElement("div",{className:"gp"},E.a.createElement(X,{width:v,height:c,palette:a}),E.a.createElement(L,{width:v,disabled:h,stops:(h=(c={palette:a,width:v,activeId:O}).palette,t=c.activeId,i=c.width,h.map(function(e){return _(_({},e),{},{id:e.id,offset:i*e.offset-5,isActive:e.id===t})})),limits:y,onPosChange:function(e){var t=e.id,n=e.offset,e=a.map(function(e){return t===e.id?_(_({},e),{},{offset:(n+5)/u}):e});o(e)},onAddColor:function(e){var t,n,e=e.offset;a.length>=p||(t=k(a,O).color,n={id:(n=a,Math.max.apply(Math,C()(n.map(function(e){return e.id})))+1),offset:e/u,color:t},e=[].concat(C()(a),[n]),r(n.id),o(e))},onDeleteColor:function(t){var e,n;a.length<=l||(n=(e=a.filter(function(e){return e.id!==t})).reduce(function(e,t){return t.offset<e.offset?t:e},e[0]).id,r(n),o(e))},onDragStart:function(e){r(e)},disableOffset:e}),function(){var e=k(a,O),e=_(_({color:e.color,opacity:e.opacity},d&&{width:u,className:"gp-flat"}),{},{onSelect:n});if(!f)return E.a.createElement(z,e);var t=E.a.Children.only(f);return E.a.cloneElement(t,e)}())}function J(e,t){return E.a.createElement("div",{className:"trigger",onClick:t},E.a.createElement("div",{className:"inner",style:{background:e}}))}function F(e){function t(e){u(e=(e=360<e?e-360:e)<0?e+360:e)}var n=e.palette,r=void 0!==(i=e.open)&&i,o=e.setOpen,i=void 0===(i=e.trigger)?J:i,a=void 0!==(a=e.showAnglePicker)&&a,c=e.angle,u=e.setAngle,e=M()(e,Q),s=l(n,c).background;return E.a.createElement("div",{className:"gpw"},i(s,function(){return o(!r)}),r&&E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"overlay",onClick:function(){return o(!1)}}),E.a.createElement("div",{className:"popover"},E.a.createElement(V,D()({},e,{palette:n,flatStyle:!0})),a&&E.a.createElement("div",{className:"angle-holder"},E.a.createElement(P,{angle:c,setAngle:u,size:32}),E.a.createElement("div",{className:"angle-inputs"},E.a.createElement("span",{onClick:function(){return t(c-1)}},"−"),E.a.createElement("input",{value:"".concat(c,"°"),disabled:!0}),E.a.createElement("span",{onClick:function(){return t(c+1)}},"+"))))))}T.propTypes=x;var V=T,Q=(t(31),["palette","open","setOpen","trigger","showAnglePicker","angle","setAngle"]),W=(F.propTypes=e,F)}],i={},o.m=r,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=33))}.call(this,a(74))}}]);