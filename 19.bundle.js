(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{538:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(9),o=n(140),c=n.n(o),a=n(107),l=n(43),u=n(15),s=n(8),o=n(7);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(r);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):t).forEach(function(e){var t,n;t=o,e=r[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return o}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=h(n);return e=o?(e=h(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==f(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(r,i.a.Component);var e,t,n,o=d(r);function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,e)).state={newOnglet:e.props.payload.newOnglet,link:e.props.payload.link},e}return e=r,(t=[{key:"updateLink",value:function(e){var t=this,n=!(!e||!e.module),o=(e&&e.is_home?"/":!n&&e.slug)||e.url;this.setState(p({},this.state,{link:o}),function(){t.props.payload.callbackUpdateLink(o)})}},{key:"removeLink",value:function(){var e=this;this.setState(p({},this.state,{link:""}),function(){e.props.payload.callbackUpdateLink("")})}},{key:"toggleTarget",value:function(){var e=this;this.setState(p({},this.state,{newOnglet:!this.state.newOnglet}),function(){e.props.payload.callbackToggleTarget(!e.state.newOnglet)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.link,e=e.newOnglet;return i.a.createElement("div",null,i.a.createElement(a.a,{onClick:function(){return t.props.closeLinkToolAction()}},"Modifier Lien"),i.a.createElement(l.a,null,i.a.createElement(c.a,{onClick:function(e){return t.updateLink(e)},removeLink:function(){return t.removeLink()},toggleTarget:function(){return t.toggleTarget()},selectFile:function(){t.props.setMediaIntent("select_file_for_menu",{callback:function(e){t.setState(p({},t.state,{link:e.url}),function(){t.props.payload.callbackUpdateLink(e.url)})}}),t.props.wantSelectFileAction()},fetchers:{page:Object(u.g)().apiSitesSlugPagesGet,module:Object(u.d)().apiSitesSlugModulesModulePagesGet},siteId:this.props.siteId,shopId:this.props.shopId,value:n,target:e,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",canMultipleValue:!1,excludeList:[]})))}}])&&y(e.prototype,t),n&&y(e,n),r}();t.default=Object(r.connect)(function(e){return{siteId:Object(s.h)(e).id,shopId:Object(s.D)(e),payload:Object(s.v)(e)}},{setMediaIntent:o.o,wantSelectFileAction:o.A,closeLinkToolAction:o.e})(n)}}]);