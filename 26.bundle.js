(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{624:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),u=n(38),r=n(16),o=n(7),s=n(9),a=(n(6),n(202)),l=n.n(a),d=n(108),p=n(15),f=n(8),b=n(43);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(o);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})):t).forEach(function(e){var t,n;t=r,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=P(n);return e=r?(e=P(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==w(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,i["PureComponent"]);var e,t,n,r=m(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,e)).state={},e}return e=o,(t=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=y({},this.props.designFicheProduit);t.singleProduct.reassurance.content=e.content;e=t.singleProduct.tpl&&t.singleProduct.mepId?Object(u.b)(t.singleProduct.tpl,t.singleProduct.mepId):u.d[0];t.singleProduct.ui=Object(u.h)(e),delete t.produit;e=y({},JSON.parse(this.props.designModule.config));delete t.commun,delete t.produit,e.shop.ficheProduit=t,this.props.updateSiteDesignModuleStarted(JSON.stringify(e))}},{key:"showText",value:function(e,t){var n=this,r=this.props,o=r.siteId,r=r.shopId;return c.a.createElement("div",{key:e.uid},e.txt?c.a.createElement(b.a,null,c.a.createElement(l.a,{draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card  we-py-2 we-px-1",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:o,shopId:r,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}})):c.a.createElement("div",null,t))}},{key:"render",value:function(){var e=y({},this.props.designFicheProduit),e=e&&e.singleProduct&&e.singleProduct.ui&&e.singleProduct.ui.reassurance&&e.singleProduct.reassurance.content?e.singleProduct.reassurance:{content:u.f,uid:"reassurance_product"};return c.a.createElement("div",{className:"editor__section-col"},c.a.createElement(d.a,null),this.showText({txt:e.content,uid:e.uid},"Zone de texte"))}}])&&g(e.prototype,t),n&&g(e,n),o}();t.default=Object(s.connect)(function(e){return{currentSite:e.sites.currentSiteInEdit,designFicheProduit:e.sites.designFicheProduit,designModule:e.sites.designModule,siteId:Object(f.i)(e).id,shopId:Object(f.E)(e)}},{updateSiteDesignModuleStarted:r.j,wantUpdateTextAction:o.J,setTextIntent:o.p,setMediaIntent:o.o,wantSelectFileAction:o.A})(n)}}]);