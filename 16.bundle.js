(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{463:function(e,r,t){"use strict";var n=t(14),o=t.n(n),a=t(0),l=t.n(a),u=t(504);t(470);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t,n=arguments[r];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,o,c=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return c}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(r){var e=r.preset?{presetColors:r.preset}:null,t=r.color,n=t.r,o=t.g,c=t.b,t=t.a,c=f(Object(a.useState)({r:n,g:o,b:c,a:t}),2),t=c[0],i=c[1];return l.a.createElement(u.a,s({width:"auto",className:"custom-sketch-picker",color:t,onChange:function(e){i(e.rgb)},onChangeComplete:function(e){r.onChangeComplete(e)}},e))}i.propTypes={color:o.a.any,onChangeComplete:o.a.func.isRequired,preset:o.a.array};var p=t(485),n=t(28),n=t.n(n);t.d(r,"a",function(){return y});var d=n.a._color.handleRgbaOrHex;function y(r){var e=d(r.color);return l.a.createElement("div",null,r.isColorPickerOpen?l.a.createElement("div",null,r.toggleColorPicker&&l.a.createElement("i",{className:"fal fa-arrow-left we-text-white",onClick:function(){return r.toggleColorPicker()}}),l.a.createElement(i,{isColorPickerOpen:r.isColorPickerOpen,color:e,preset:r.themeColors,toggleColorPicker:function(){return r.toggleColorPicker()},onChangeComplete:function(e){r.handleChangeColor(e)}})):l.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between"},className:"mt-4"},l.a.createElement(p.a,{isSelected:r.isSelected,color:e,handleChangeColor:function(e){r.handleChangeColor(e)},toggleColorPicker:function(){return r.toggleColorPicker()},colors:r.themeColors})))}y.propTypes={color:o.a.object,handleChangeColor:o.a.func.isRequired,isColorPickerOpen:o.a.bool,themeColors:o.a.array,toggleColorPicker:o.a.func},y.defaultProps={isColorPickerOpen:!1}},470:function(e,r,t){var n=t(490);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(103)(n,o);n.locals&&(e.exports=n.locals)},485:function(e,r,t){"use strict";var n=t(14),o=t.n(n),c=t(0),i=t.n(c),c=t(28),a=t.n(c).a._color.hexToRgbA;function l(e){var r=a(e.value,1);return i.a.createElement("div",{style:{backgroundColor:e.value,borderRadius:"100%",height:50,width:50,boxShadow:"rgb(51 51 51) 0px 0px 2px"},className:e.active?"we-border we-border-3 we-border-primary":"",onClick:function(){e.onClick({hex:e.value,rgb:r})}})}function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function f(t){var e=t.colors||["#cd1212","#1c88d2","#1c730a","#545656"],n=t.color&&t.color.hex;return[].concat(u(e.map(function(e,r){return i.a.createElement(l,{key:r,value:e,active:n===e&&t.isSelected,onClick:function(e){t.handleChangeColor(e)}})})),[i.a.createElement("div",{key:"colorSelector",style:{backgroundColor:n,borderRadius:"100%",height:50,width:50,alignContent:"center",justifyContent:"center",boxShadow:"rgb(51 51 51) 0px 0px 2px"},className:"we-rounded-circle we-round-color-sm we-d-flex we-justify-content-center we-align-items-center ".concat(!e.includes(n)&&t.isSelected&&"we-border we-border-3 we-border-primary"," "),onClick:function(){return t.toggleColorPicker()}},i.a.createElement("i",{className:"fal fa-fill-drip we-p-1 we-rounded-circle we-d-flex we-justify-content-center we-align-items-center",style:{backgroundColor:"rgba(255, 255, 255, 0.56)",width:30,height:30}}))])}l.propTypes={onClick:o.a.func.isRequired,value:o.a.any.isRequired},t.d(r,"a",function(){return f}),f.propTypes={colors:o.a.arrayOf(n.string).isRequired,handleChangeColor:o.a.func.isRequired},f.defaultProps={colors:["#cd1212","#1c88d2","#1c730a","#545656"]}},487:function(e,r,t){"use strict";t.d(r,"b",function(){return o}),t.d(r,"c",function(){return c}),t.d(r,"e",function(){return i}),t.d(r,"a",function(){return a}),t.d(r,"d",function(){return l});var n=t(1),o=function(e,r){return{type:n.Xd,payload:{intent:e,blockInEdit:r}}},c=function(e){return{type:n.ae,payload:{color:e}}},i=function(r){return function(e){e({type:n.Mg,payload:{color:r}}),e({type:n.Uc,payload:{content:"ColorPanel"}})}},a=function(e){return{type:n.Td,payload:{color:e}}},l=function(e){return{type:n.ue,payload:{id:e}}}},490:function(e,r,t){(e.exports=t(102)(!1)).push([e.i,"/************ CUSTOM Sketch Picker ************/\r\n.sketch-picker.custom-sketch-picker {\r\n    background: none !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker label {\r\n    color: #e1e1e1 !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker input {\r\n    border-radius: 3px !important;\r\n    background-color: #6E6F6E !important;\r\n    border: none !important;\r\n    color: #e1e1e1 !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker div.flexbox-fix {\r\n    border-top: none !important;\r\n}\r\n",""])},957:function(e,r,t){"use strict";t.r(r);var n=t(0),c=t.n(n),o=t(9),i=t(8),a=t(7),l=t(27),n=t(487),u=t(463),s=t(176);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(o);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})):r).forEach(function(e){var r,t;r=n,e=o[t=e],t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e})}return n}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,r){return(y=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,r=h(t);return e=n?(e=h(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments),r=this,!(e=e)||"object"!==f(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):e}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t=function(){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&y(e,r)}(o,c.a.Component);var e,r,t,n=b(o);function o(e){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,o),n.call(this,e)}return e=o,(r=[{key:"render",value:function(){var t=this,e=this.props.themeColors;return c.a.createElement("div",{style:{justifyContent:"center",flex:1}},c.a.createElement(s.a,null,"Modifier la couleur"),c.a.createElement("div",{className:"we-mt-2"},c.a.createElement(u.a,{themeColors:e,color:this.props.color,isColorPickerOpen:this.props.isColorPickerOpen,toggleColorPicker:function(){t.props.setIsColorPickerOpen(!t.props.isColorPickerOpen)},handleChangeColor:function(e){var r=e.hex,e=e.rgb;t.props.setColorValue(p({hex:r},e))}})))}}])&&d(e.prototype,r),t&&d(e,t),o}();r.default=Object(o.connect)(function(e){return{isColorPickerOpen:e.backgrounds.interface.isColorPickerOpen,currentSiteDesign:Object(a.h)(e),color:e.color.colorValue,themeColors:e.color.selectedThemeColors}},{closeAllToolAction:i.b,setIsColorPickerOpen:l.j,setColorValue:n.c})(t)}}]);