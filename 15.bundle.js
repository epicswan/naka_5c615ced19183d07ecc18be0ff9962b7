(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{463:function(e,t,r){"use strict";var n=r(14),o=r.n(n),l=r(0),i=r.n(l),u=r(504);r(470);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,c=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(t){var e=t.preset?{presetColors:t.preset}:null,r=t.color,n=r.r,o=r.g,c=r.b,r=r.a,c=f(Object(l.useState)({r:n,g:o,b:c,a:r}),2),r=c[0],a=c[1];return i.a.createElement(u.a,s({width:"auto",className:"custom-sketch-picker",color:r,onChange:function(e){a(e.rgb)},onChangeComplete:function(e){t.onChangeComplete(e)}},e))}a.propTypes={color:o.a.any,onChangeComplete:o.a.func.isRequired,preset:o.a.array};var p=r(485),n=r(28),n=r.n(n);r.d(t,"a",function(){return y});var d=n.a._color.handleRgbaOrHex;function y(t){var e=d(t.color);return i.a.createElement("div",null,t.isColorPickerOpen?i.a.createElement("div",null,t.toggleColorPicker&&i.a.createElement("i",{className:"fal fa-arrow-left we-text-white",onClick:function(){return t.toggleColorPicker()}}),i.a.createElement(a,{isColorPickerOpen:t.isColorPickerOpen,color:e,preset:t.themeColors,toggleColorPicker:function(){return t.toggleColorPicker()},onChangeComplete:function(e){t.handleChangeColor(e)}})):i.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between"},className:"mt-4"},i.a.createElement(p.a,{isSelected:t.isSelected,color:e,handleChangeColor:function(e){t.handleChangeColor(e)},toggleColorPicker:function(){return t.toggleColorPicker()},colors:t.themeColors})))}y.propTypes={color:o.a.object,handleChangeColor:o.a.func.isRequired,isColorPickerOpen:o.a.bool,themeColors:o.a.array,toggleColorPicker:o.a.func},y.defaultProps={isColorPickerOpen:!1}},470:function(e,t,r){var n=r(490);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(103)(n,o);n.locals&&(e.exports=n.locals)},485:function(e,t,r){"use strict";var n=r(14),o=r.n(n),c=r(0),a=r.n(c),c=r(28),l=r.n(c).a._color.hexToRgbA;function i(e){var t=l(e.value,1);return a.a.createElement("div",{style:{backgroundColor:e.value,borderRadius:"100%",height:50,width:50,boxShadow:"rgb(51 51 51) 0px 0px 2px"},className:e.active?"we-border we-border-3 we-border-primary":"",onClick:function(){e.onClick({hex:e.value,rgb:t})}})}function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(r){var e=r.colors||["#cd1212","#1c88d2","#1c730a","#545656"],n=r.color&&r.color.hex;return[].concat(u(e.map(function(e,t){return a.a.createElement(i,{key:t,value:e,active:n===e&&r.isSelected,onClick:function(e){r.handleChangeColor(e)}})})),[a.a.createElement("div",{key:"colorSelector",style:{backgroundColor:n,borderRadius:"100%",height:50,width:50,alignContent:"center",justifyContent:"center",boxShadow:"rgb(51 51 51) 0px 0px 2px"},className:"we-rounded-circle we-round-color-sm we-d-flex we-justify-content-center we-align-items-center ".concat(!e.includes(n)&&r.isSelected&&"we-border we-border-3 we-border-primary"," "),onClick:function(){return r.toggleColorPicker()}},a.a.createElement("i",{className:"fal fa-fill-drip we-p-1 we-rounded-circle we-d-flex we-justify-content-center we-align-items-center",style:{backgroundColor:"rgba(255, 255, 255, 0.56)",width:30,height:30}}))])}i.propTypes={onClick:o.a.func.isRequired,value:o.a.any.isRequired},r.d(t,"a",function(){return f}),f.propTypes={colors:o.a.arrayOf(n.string).isRequired,handleChangeColor:o.a.func.isRequired},f.defaultProps={colors:["#cd1212","#1c88d2","#1c730a","#545656"]}},487:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"c",function(){return c}),r.d(t,"e",function(){return a}),r.d(t,"a",function(){return l}),r.d(t,"d",function(){return i});var n=r(1),o=function(e,t){return{type:n.Xd,payload:{intent:e,blockInEdit:t}}},c=function(e){return{type:n.ae,payload:{color:e}}},a=function(t){return function(e){e({type:n.Lg,payload:{color:t}}),e({type:n.Uc,payload:{content:"ColorPanel"}})}},l=function(e){return{type:n.Td,payload:{color:e}}},i=function(e){return{type:n.ue,payload:{id:e}}}},490:function(e,t,r){(e.exports=r(102)(!1)).push([e.i,"/************ CUSTOM Sketch Picker ************/\r\n.sketch-picker.custom-sketch-picker {\r\n    background: none !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker label {\r\n    color: #e1e1e1 !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker input {\r\n    border-radius: 3px !important;\r\n    background-color: #6E6F6E !important;\r\n    border: none !important;\r\n    color: #e1e1e1 !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.sketch-picker.custom-sketch-picker div.flexbox-fix {\r\n    border-top: none !important;\r\n}\r\n",""])},975:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),o=(r(5),r(9)),a=r(487),l=r(463);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(r);return e=n?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==i(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,c.a.Component);var e,t,r,n=f(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n.call(this,e)}return e=o,(t=[{key:"render",value:function(){var t=this,e=this.props.color;return c.a.createElement("div",{style:{justifyContent:"center",flex:1}},c.a.createElement("div",{className:"we-mt-2"},c.a.createElement(l.a,{themeColors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"],color:{hex:e},isColorPickerOpen:!0,handleChangeColor:function(e){e=e.hex;t.props.setBaseColor(e)}})))}}])&&u(e.prototype,t),r&&u(e,r),o}(),d=Object(o.connect)(function(e){return{color:e.color.baseColor,themeColors:e.color.selectedThemeColors}},{setBaseColor:a.a})(n),n=r(44);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=C(r);return e=n?(e=C(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==y(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,c.a.Component);var e,t,r,n=b(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n.call(this,e)}return e=o,(t=[{key:"selectPalette",value:function(e){this.props.setIdxPalette(e)}},{key:"render",value:function(){var r=this;return c.a.createElement("div",{className:"editor__section-col"},c.a.createElement("span",{className:" we-text-white"},c.a.createElement("i",{className:"fas fa-arrow-left ",onClick:function(){r.props.showDesignMenu()}})),"    ",c.a.createElement("span",{className:"we-h5 we-text-white"},"Couleur de base"),c.a.createElement(d,null),c.a.createElement("div",{style:{justifyContent:"center",flex:1},className:"we-mt-2"},c.a.createElement("div",{className:"we-m-2 we-mb-4"},c.a.createElement("span",{className:"we-h5 we-text-white"},"Choix de la palette"))),this.props.storeColor.themeColors&&this.props.storeColor.themeColors.map(function(e,t){return c.a.createElement("div",{className:"we-m-3 we-row ",style:{border:t===r.props.idxPalette?"3px solid #6666FF":"",borderRadius:19,overflow:"hidden",cursor:"pointer"},key:t,onClick:function(e){return r.selectPalette(t)}},c.a.createElement("div",{className:"we-col-3 we-p-1 ",style:{backgroundColor:e[0]}}," "),c.a.createElement("div",{className:"we-col-3 we-p-1 ",style:{backgroundColor:e[1]}}," "),c.a.createElement("div",{className:"we-col-3 we-p-1 ",style:{backgroundColor:e[2]}}," "),c.a.createElement("div",{className:"we-col-3 we-p-1 ",style:{backgroundColor:e[3]}}," "))}))}}])&&m(e.prototype,t),r&&m(e,r),o}();t.default=Object(o.connect)(function(e){return{storeColor:e.color}},{setIdxPalette:a.d,showDesignMenu:n.d})(r)}}]);