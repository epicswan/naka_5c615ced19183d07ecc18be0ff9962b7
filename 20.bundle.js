(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{267:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return i});var r=n(1),o=function(t,e){return{type:r.de,payload:{intent:t,blockInEdit:e}}},c=function(t){return{type:r.ge,payload:{color:t}}},u=function(e){return function(t){t({type:r.Yg,payload:{color:e}}),t({type:r.ad,payload:{content:"ColorPanel"}})}},a=function(t){return{type:r.Zd,payload:{color:t}}},i=function(t){return{type:r.Be,payload:{id:t}}}},353:function(t,e,n){"use strict";var r=n(17),o=n.n(r),c=n(0),u=n.n(c),r=n(9),a=n(6),c=n(107),i=n.n(c),c=n(30);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?Object(arguments[t]):{},e=Object.keys(o);(e="function"==typeof Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})):e).forEach(function(t){var e,n;e=r,t=o[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return r}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=b(n);return t=r?(t=b(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==l(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=n.n(c).a._color.rgbToHex,c=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(o,u.a.Component);var t,e,n,r=y(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,t)}return t=o,(e=[{key:"render",value:function(){var t=this,e=f({},this.props),n=e.color,e=e.label;n.r&&n.g&&n.b&&(n.hex=d(n.r,n.g,n.b));n={color:f({},n),type:"color",opacity:n.a||1,overlay:"color"};return u.a.createElement("div",{style:{cursor:"pointer"},className:"we-my-2"},u.a.createElement("div",{className:"we-d-flex we-flex-row"},u.a.createElement(i.a,{card:{bg:n}},u.a.createElement("div",{style:{width:"90%",height:50,margin:"10px auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},onClick:function(){return t.props.onClick()}},u.a.createElement(a.Button,{variant:"secondary"},e)))))}}])&&p(t.prototype,e),n&&p(t,n),o}();e.a=Object(r.connect)(null,{})(c),c.propTypes={color:o.a.object,label:o.a.string,onClick:o.a.func},c.defaultProps={color:{hex:"#FFFFFF"}}},486:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});var r=n(1),o=function(t){return{type:r.Ke,payload:t}},c=function(t){return{type:r.Je,payload:t}},u=function(t){return{type:r.L,payload:{id:t}}}},972:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(9),u=n(7),a=(n(6),n(353)),i=n(267),r=n(30);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=b(n);return t=r?(t=b(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==l(t)&&"function"!=typeof t?y(e):t}}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=n.n(r).a._debounce,r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,c.a.Component);var t,e,n,r=s(o);function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),d(y(e=r.call(this,t)),"updateText",h(function(t){e.props.onChange(t)},500)),e.state={text:e.props.value},e.update=e.update.bind(y(e)),e}return t=o,(e=[{key:"update",value:function(t){var e=this;this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})):r).forEach(function(t){d(e,t,n[t])})}return e}({},this.state,{text:t.target.value}),function(){return e.updateText(e.state.text)})}},{key:"render",value:function(){var e=this,t=this.state.text,n=this.props.label;return c.a.createElement("div",{className:"editor__section-col we-my-4"},c.a.createElement("span",{className:"we-h5 we-text-white we-my-2"},n),c.a.createElement("textarea",{rows:5,cols:30,value:t,className:"we-form-control we-my-2",onChange:function(t){return e.update(t)}}))}}])&&f(t.prototype,e),n&&f(t,n),o}(),m=Object(o.connect)(null,{})(r),r=n(486);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=j(n);return t=r?(t=j(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==v(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(o,c.a.Component);var t,e,n,r=g(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,t)}return t=o,(e=[{key:"handleBackground",value:function(t,e){this.props.wantChangeColor(e),this.props.setColorIntent(t,null)}},{key:"render",value:function(){var e=this,t=this.props.mailInEdit;return t?c.a.createElement("div",{className:"we-bg-dark we-text-white"},c.a.createElement("div",{className:"we-col"},c.a.createElement(m,{label:"Objet",value:t.object,onChange:function(t){e.props.setMailObject(t)}}),c.a.createElement(m,{label:"Preview",value:t.preview,onChange:function(t){e.props.setMailPreview(t)}}),c.a.createElement(a.a,{label:"Fond du mail",onClick:function(){return e.handleBackground("email",t.backgroundColor)},color:t.backgroundColor}))):null}}])&&w(t.prototype,e),n&&w(t,n),o}();e.default=Object(o.connect)(function(t){return{mailInEdit:Object(u.z)(t)}},{wantChangeColor:i.e,setColorIntent:i.b,setMailObject:r.b,setMailPreview:r.c})(n)}}]);