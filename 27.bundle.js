(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{959:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(9),o=n(153),c=n.n(o),a=n(176),l=n(38),u=n(17),s=n(7),o=n(8);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(r);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):t).forEach(function(e){var t,n;t=o,e=r[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return o}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=g(n);return e=o?(e=g(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==p(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,i.a.Component);var e,t,n,o=d(r);function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,e)).state={newOnglet:e.props.payload.newOnglet,link:e.props.payload.link},e}return e=r,(t=[{key:"updateLink",value:function(e){var t=this,n=!(!e||!e.module),o=(e&&e.is_home?"/":!n&&e.slug)||e.url;this.setState(f({},this.state,{link:o}),function(){t.props.payload.callbackUpdateLink(o)})}},{key:"removeLink",value:function(){var e=this;this.setState(f({},this.state,{link:""}),function(){e.props.payload.callbackUpdateLink("")})}},{key:"toggleTarget",value:function(){var e=this;this.setState(f({},this.state,{newOnglet:!this.state.newOnglet}),function(){e.props.payload.callbackToggleTarget(!e.state.newOnglet)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.link,e=e.newOnglet;return i.a.createElement("div",null,i.a.createElement(a.a,{onClick:function(){return t.props.closeLinkToolAction()}},"Modifier Lien"),i.a.createElement(l.a,null,i.a.createElement(c.a,{onClick:function(e){return t.updateLink(e)},removeLink:function(){return t.removeLink()},toggleTarget:function(){return t.toggleTarget()},selectFile:function(){t.props.setMediaIntent("select_file_for_menu",{callback:function(e){t.setState(f({},t.state,{link:e.url}),function(){t.props.payload.callbackUpdateLink(e.url)})}}),t.props.wantSelectFileAction()},fetchers:{page:Object(u.g)().apiSitesSlugPagesGet,module:Object(u.d)().apiSitesSlugModulesModulePagesGet},siteId:this.props.siteId,shopId:this.props.shopId,blogId:this.props.blogId,value:n,target:e,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",canMultipleValue:!1,excludeList:[]})))}}])&&b(e.prototype,t),n&&b(e,n),r}();t.default=Object(r.connect)(function(e){return{siteId:Object(s.i)(e).id,shopId:Object(s.F)(e),blogId:Object(s.c)(e),payload:Object(s.w)(e)}},{setMediaIntent:o.o,wantSelectFileAction:o.A,closeLinkToolAction:o.e})(n)}}]);