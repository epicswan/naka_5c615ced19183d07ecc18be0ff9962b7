(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1017:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var r=n(1),o=function(e){return{type:r.Ue,payload:e}},a=function(e){return{type:r.Te,payload:e}},c=function(e){return{type:r.N,payload:{id:e}}}},1435:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),r=n(6),o=n(7),c=n(5),i=n(95),u=n(90),l=n(20);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=m(n),t=(e=r?(e=m(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}var h=n.n(l).a._debounce,l=function(e){var t=o;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e);var n,r=b(o);function o(e){var t;if(this instanceof o)return d(y(t=r.call(this,e)),"updateText",h(function(e){t.props.onChange(e)},500)),t.state={text:t.props.value},t.update=t.update.bind(y(t)),t;throw new TypeError("Cannot call a class as a function")}return t=o,(e=[{key:"update",value:function(e){var t=this;this.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.forEach(function(e){d(t,e,n[e])})}return t}({},this.state,{text:e.target.value}),function(){return t.updateText(t.state.text)})}},{key:"render",value:function(){var t=this,e=this.state.text,n=this.props.label;return a.a.createElement("div",{className:"editor__section-col we-my-4"},a.a.createElement("span",{className:"we-h5 we-text-white we-my-2"},n),a.a.createElement("textarea",{rows:5,cols:30,value:e,className:"we-form-control we-my-2",onChange:function(e){return t.update(e)}}))}}])&&p(t.prototype,e),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(a.a.Component),v=Object(r.connect)(null,{})(l),l=n(1017),w=(n(12),n(83)),O=n.n(w);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=C(n),t=(e=r?(e=C(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(e){var t=o;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e);var n,r=P(o);function o(e){if(this instanceof o)return r.call(this,e);throw new TypeError("Cannot call a class as a function")}return t=o,(e=[{key:"handleBackground",value:function(e,t){this.props.wantChangeColor(t),this.props.setColorIntent(e,null)}},{key:"render",value:function(){var t=this,e=this.props.mailInEdit;if(!e)return null;var n=localStorage.getItem("debugEmail");return a.a.createElement("div",{className:"we-bg-dark we-text-white"},a.a.createElement("div",{className:"we-col"},"1"===n&&a.a.createElement("div",{className:"we-mb-2"},a.a.createElement(c.Button,{variant:"secondary",className:"we-btn-block",style:{textAlign:"start"},onClick:function(){O.a.post("https://email-converter-mjml-n6qds.ondigitalocean.app/api/mail/".concat(t.props.pageId),{optionsEmail:{backgroundColor:e.backgroundColor.hex}}),console.log({theme:t.props.theme},{theme:{fonts:t.props.theme.fonts,baseColor:t.props.theme.baseColor,idxPalette:t.props.theme.idxPalette,btn:t.props.theme.btn,palette:t.props.theme.config.variables},infoSite:t.props.infoSite,optionsEmail:{backgroundColor:e.backgroundColor.hex}})}},a.a.createElement("i",{className:"fal fa-folder-upload we-me-2"}),"Preview Email")),a.a.createElement(v,{label:"Objet",value:e.object,onChange:function(e){t.props.setMailObject(e)}}),a.a.createElement(v,{label:"Preview",value:e.preview,onChange:function(e){t.props.setMailPreview(e)}}),a.a.createElement(i.a,{label:"Fond du mail",onClick:function(){return t.handleBackground("email",e.backgroundColor)},color:e.backgroundColor})))}}])&&j(t.prototype,e),n&&j(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(a.a.Component);t.default=Object(r.connect)(function(e){return{mailInEdit:Object(o.D)(e),theme:JSON.parse(e.sites.design.config),infoSite:{domain:Object(o.E)(e).name,plan:Object(o.h)(e)}}},{wantChangeColor:u.e,setColorIntent:u.b,setMailObject:l.b,setMailPreview:l.c})(n)}}]);