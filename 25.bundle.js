(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{501:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(8),c=n(6),s=n(12),a=n(167),p=n.n(a),u=n(10),l=n(15),f=n(82),d=n(7),b=n(14);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){w(t,e,n[e])}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=O(t);if(e){var r=O(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?E(t):e}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(c,t);var e,n,o,i=I(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).updateTextSection=e.updateTextSection.bind(E(e)),e}return e=c,(n=[{key:"shouldComponentUpdate",value:function(t,e){return t.currentText!==this.props.currentText}},{key:"updateTextSection",value:function(t){var e=y({},this.props.section);this.props.footerInEdit&&(e=y({},this.props.footerInEdit,{content:y({},this.props.footerInEdit.content.props)})),this.props.navbarInEdit&&(e=y({},this.props.navbarInEdit,{content:y({},this.props.navbarInEdit.content.props)}));var n=Object(u.f)(e.content.blocks||[],"uid",this.props.currentText);n&&(n.txt=t.content,"NavbarRcpt"==e.componentName?this.props.updateSiteNavbarAction(e.content):"FooterRcpt"==e.componentName?this.props.updateSiteFooterAction(e.content):this.props.updateSectionContent(e.content))}},{key:"render",value:function(){var t=this,e=y({},this.props.section),n=this.props,o=n.siteId,i=n.shopId;this.props.footerInEdit&&(e=y({},this.props.footerInEdit,{content:y({},this.props.footerInEdit.content.props)})),this.props.navbarInEdit&&(e=y({},this.props.navbarInEdit,{content:y({},this.props.navbarInEdit.content.props)}));var c=Object(u.f)(e.content.blocks||[],"uid",this.props.currentText)||"";return r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){return t.props.closeAllToolAction()}},"Edition de texte"),r.a.createElement(p.a,{draftProps:{content:c.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card ",onAction:function(e){e.action&&"onChange"===e.action&&t.updateTextSection(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(b.g)().apiSitesSlugPagesGet,module:Object(b.d)().apiSitesSlugModulesModulePagesGet},siteId:o,shopId:i,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){t.props.setMediaIntent("select_file_for_draft",e),t.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}))}}])&&m(e.prototype,n),o&&m(e,o),c}(r.a.Component);e.default=Object(i.connect)((function(t){return{currentText:t.tools.textInEdit,themeColors:t.color.selectedThemeColors,siteId:Object(d.h)(t).id,shopId:Object(d.D)(t),section:t.sections.currentSectionInEdit&&t.sections.byIds[t.sections.currentSectionInEdit]?t.sections.byIds[t.sections.currentSectionInEdit]:null,navbarInEdit:t.sections.currentSectionInEdit==t.sites.navbar.id?t.sites.navbar:null,footerInEdit:t.sections.currentSectionInEdit==t.sites.footer.id?t.sites.footer:null}}),{setMediaIntent:c.o,wantSelectFileAction:c.A,updateSectionContent:s.S,setViewTplBtnEditor:c.q,closeAllToolAction:c.b,updateSiteNavbarAction:l.m,updateSiteFooterAction:l.l})(g)}}]);