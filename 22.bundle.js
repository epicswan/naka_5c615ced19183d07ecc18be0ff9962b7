(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{501:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(27),c=n(16),u=n(6),a=n(8),s=(n(5),n(166)),l=n.n(s),d=n(81),f=n(14),p=n(7),b=n(32);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,c=P(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={},t}return t=u,(n=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=h({},this.props.designFicheProduit);t.singleProduct.reassurance.content=e.content;var n=t.singleProduct.tpl&&t.singleProduct.mepId?Object(i.b)(t.singleProduct.tpl,t.singleProduct.mepId):i.d[0];t.singleProduct.ui=Object(i.h)(n),delete t.produit;var r=h({},JSON.parse(this.props.designModule.config));delete t.commun,delete t.produit,r.shop.ficheProduit=t,this.props.updateSiteDesignModuleStarted(JSON.stringify(r))}},{key:"showText",value:function(e,t){var n=this,r=this.props,i=r.siteId,c=r.shopId;return o.a.createElement("div",{key:e.uid},e.txt?o.a.createElement(b.a,null,o.a.createElement(l.a,{draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card ",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(f.g)().apiSitesSlugPagesGet,module:Object(f.d)().apiSitesSlugModulesModulePagesGet},siteId:i,shopId:c,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}})):o.a.createElement("div",null,t))}},{key:"render",value:function(){var e=h({},this.props.designFicheProduit),t=e&&e.singleProduct&&e.singleProduct.ui&&e.singleProduct.ui.reassurance&&e.singleProduct.reassurance.content?e.singleProduct.reassurance:{content:i.f,uid:"reassurance_product"};return o.a.createElement("div",{className:"editor__section-col"},o.a.createElement(d.a,null),this.showText({txt:t.content,uid:t.uid},"Zone de texte"))}}])&&g(t.prototype,n),r&&g(t,r),u}(r.PureComponent);t.default=Object(a.connect)((function(e){return{currentSite:e.sites.currentSiteInEdit,designFicheProduit:e.sites.designFicheProduit,designModule:e.sites.designModule,siteId:Object(p.h)(e).id,shopId:Object(p.D)(e)}}),{updateSiteDesignModuleStarted:c.j,wantUpdateTextAction:u.J,setTextIntent:u.p,setMediaIntent:u.o,wantSelectFileAction:u.A})(S)}}]);