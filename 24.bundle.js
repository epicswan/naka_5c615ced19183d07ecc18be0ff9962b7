(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{502:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(8),c=n(7),a=n(6),s=n(12),u=n(10),l=n(15),p=n(14),f=n(112),d=n.n(f),h=n(81),m=n(32);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){S(t,e,n[e])}))}return t}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=C(t);if(e){var r=C(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(c,t);var e,n,o,i=v(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),S(w(e=i.call(this,t)),"getValues",(function(t){var e,n;return"media"===t.name||"card"===t.name?t.item&&t.item.link&&(e=t.item.link.link,n="_blank"===t.item.link.target):(e=t.link,n=t.newOnglet),{link:e,newOnglet:n}})),e.state={newOnglet:e.getValues(e.props.currentCta).newOnglet,link:e.getValues(e.props.currentCta).value},e}return e=c,(n=[{key:"applyLink",value:function(t,e){"media"===t.name||"card"===t.name?null===e?(delete t.item.link,delete t.item.target,t.item.tpl="img"):(t.item.link={link:e,target:this.state.newOnglet?"_blank":"_self"},t.item.tpl="imgLink"):null===e?(delete t.link,delete t.newOnglet):(t.link=e,t.newOnglet="_blank"===this.state.newOnglet)}},{key:"updateLink",value:function(t){var e=this,n=!(!t||!t.module),o=(t&&t.is_home?"/":!n&&t.slug)||t.url,r=k({},this.props.section),i=Object(u.f)(r.content.blocks,"uid",this.props.currentCta.uid);if(i){var c=this.props.ctaIntent;c.uids&&c.uids.forEach((function(t){var n=Object(u.f)(r.content.blocks,"uid",t);e.applyLink(n,o)})),this.applyLink(i,o),this.setState(k({},this.state,{link:o})),this.props.setCtaInEdit(i),"NavbarRcpt"===r.componentName?this.props.updateSiteNavbarAction(r.content):"FooterRcpt"===r.componentName?this.props.updateSiteFooterAction(r.content):this.props.updateSectionContent(r.content)}}},{key:"removeLink",value:function(){var t=this,e=k({},this.props.section),n=Object(u.f)(e.content.blocks,"uid",this.props.currentCta.uid);if(n){var o=this.props.ctaIntent;o.uids&&o.uids.forEach((function(n){var o=Object(u.f)(e.content.blocks,"uid",n);t.applyLink(o,null)})),this.applyLink(n,null),this.setState(k({},this.state,{link:null})),this.props.setCtaInEdit(n),"NavbarRcpt"===e.componentName?this.props.updateSiteNavbarAction(e.content):"FooterRcpt"===e.componentName?this.props.updateSiteFooterAction(e.content):this.props.updateSectionContent(e.content)}}},{key:"shouldComponentUpdate",value:function(t,e){if(e.link!==this.state.link)return!0;if("media"===t.currentCta.name||"card"===t.currentCta.name){if(this.props.currentCta.item&&this.props.currentCta.item.link&&t.currentCta.item.link.link!==this.props.currentCta.item.link.link)return!0}else if(t.currentCta.link!==this.props.currentCta.link)return!0;return!1}},{key:"toggleTarget",value:function(){var t=this.state.newOnglet;t=!t;var e=k({},this.props.section),n=Object(u.f)(e.content.blocks,"uid",this.props.currentCta.uid);if(n){var o=this.props.ctaIntent;o.uids&&o.uids.forEach((function(n){Object(u.f)(e.content.blocks,"uid",n).newOnglet=t})),n.newOnglet=t,this.setState(k({},this.state,{newOnglet:t})),this.props.setCtaInEdit(n),"NavbarRcpt"===e.componentName?this.props.updateSiteNavbarAction(e.content):"FooterRcpt"===e.componentName?this.props.updateSiteFooterAction(e.content):this.props.updateSectionContent(e.content)}}},{key:"render",value:function(){var t=this,e=this.props.currentCta,n=this.getValues(e),o=n.link,i=n.newOnglet;return r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){return t.props.closeLinkToolAction()}},"Modifier Lien"),r.a.createElement(m.a,null,r.a.createElement(d.a,{onClick:function(e){return t.updateLink(e)},removeLink:function(){return t.removeLink()},toggleTarget:function(){return t.toggleTarget()},selectFile:function(){t.props.setMediaIntent("select_file_for_cta",t.props.currentCta),t.props.wantSelectFileAction()},fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:this.props.siteId,shopId:this.props.shopId,value:o,target:i,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",canMultipleValue:!1,excludeList:[]})))}}])&&y(e.prototype,n),o&&y(e,o),c}(r.a.Component);e.default=Object(i.connect)((function(t){return{section:Object(c.F)(t).section,currentCta:t.tools.ctaInEdit,ctaIntent:t.tools.ctaIntent,siteId:Object(c.h)(t).id,shopId:Object(c.D)(t)}}),{setMediaIntent:a.o,wantSelectFileAction:a.z,updateSectionContent:s.S,updateSiteFooterAction:l.m,updateSiteNavbarAction:l.n,closeLinkToolAction:a.e,setCtaInEdit:a.k})(j)}}]);