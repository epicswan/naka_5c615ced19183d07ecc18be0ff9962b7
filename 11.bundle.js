(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{719:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o),i=n(0),c=n.n(i),u=n(698);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(i,t);var e,n,o,r=p(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.call(this,t)}return e=i,(n=[{key:"render",value:function(){var t=this;return c.a.createElement(u.a,{labelFieldItem:"nom",siteId:this.props.siteId,tabLabel:this.props.tabLabel,customItem:this.props.customItem,pageList:this.props.pagesList,onClick:function(e){t.props.onClick(e)},module:3,fetcher:this.props.fetchers.module})}}])&&s(e.prototype,n),o&&s(e,o),i}(i.Component);e.default=b,b.propTypes={onClick:r.a.func.isRequired,pagesList:r.a.array,siteId:r.a.any},b.defaultProps={pagesList:[]}}}]);