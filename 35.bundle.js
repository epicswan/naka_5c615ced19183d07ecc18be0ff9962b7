(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1414:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(62),o=n(19),u=n(9),a=n(6),s=(n(5),n(767)),l=n.n(s),d=n(162),p=n(22),f=n(7),b=n(60);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),t.forEach(function(e){var t,n;t=r,n=o[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n})}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=P(n),t=(e=r?(e=P(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}s=function(e){var t=o;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e);var n,r=m(o);function o(e){if(this instanceof o)return(e=r.call(this,e)).state={},e;throw new TypeError("Cannot call a class as a function")}return t=o,(e=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=w({},this.props.designFicheProduit),e=(t.singleProduct.reassurance.content=e.content,t.singleProduct.tpl&&t.singleProduct.mepId?Object(i.b)(t.singleProduct.tpl,t.singleProduct.mepId):i.d[0]),e=(t.singleProduct.ui=Object(i.h)(e),delete t.produit,w({},JSON.parse(this.props.designModule.config)));delete t.commun,delete t.produit,e.shop.ficheProduit=t,this.props.updateSiteDesignModuleStarted(JSON.stringify(e))}},{key:"showText",value:function(e,t){var n=this,r=this.props,o=r.siteId,i=r.shopId,r=r.darkMode;return c.a.createElement("div",{key:e.uid},e.txt?c.a.createElement(b.a,null,c.a.createElement(l.a,{darkMode:r,toggleDarkMode:function(){return n.props.toggleDarkModeText()},draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card  we-py-2 we-px-1",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:o,shopId:i,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}})):c.a.createElement("div",null,t))}},{key:"render",value:function(){var e=w({},this.props.designFicheProduit),e=e&&e.singleProduct&&e.singleProduct.ui&&e.singleProduct.ui.reassurance&&e.singleProduct.reassurance.content?e.singleProduct.reassurance:{content:i.f,uid:"reassurance_product"};return c.a.createElement("div",{className:"editor__section-col"},c.a.createElement(d.a,null),this.showText({txt:e.content,uid:e.uid},"Zone de texte"))}}])&&g(t.prototype,e),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.PureComponent);t.default=Object(a.connect)(function(e){return{currentSite:e.sites.currentSiteInEdit,designFicheProduit:e.sites.designFicheProduit,designModule:e.sites.designModule,siteId:Object(f.k)(e).id,shopId:Object(f.N)(e),darkMode:Object(f.m)(e)}},{updateSiteDesignModuleStarted:o.j,wantUpdateTextAction:u.L,setTextIntent:u.p,setMediaIntent:u.o,wantSelectFileAction:u.C,toggleDarkModeText:u.v})(s)}}]);