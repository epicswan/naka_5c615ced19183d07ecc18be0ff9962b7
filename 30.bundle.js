(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1090:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),u=n(50),o=n(18),r=n(8),s=n(9),a=(n(5),n(408)),l=n.n(a),d=n(176),p=n(16),f=n(7);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(r);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):t).forEach(function(e){var t,n;t=o,e=r[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return o}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=g(n);return e=o?(e=g(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==b(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,i["PureComponent"]);var e,t,n,o=m(r);function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,e)).state={},e}return e=r,(t=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=w({},this.props.designFicheProduit),n=t&&t.singleProduct&&t.singleProduct.similarProducts;t.singleProduct.similarProducts=w({},n,{content:e.content,uid:"similar_product"});e=t.singleProduct.tpl&&t.singleProduct.mepId?Object(u.b)(t.singleProduct.tpl,t.singleProduct.mepId):u.d[0];t.singleProduct.ui=Object(u.h)(e),delete t.produit;e=w({},JSON.parse(this.props.designModule.config));delete t.commun,delete t.produit,e.shop.ficheProduit=t,this.props.updateSiteDesignModuleStarted(JSON.stringify(e))}},{key:"showText",value:function(e,t){var n=this,o=this.props,r=o.siteId,o=o.shopId;return c.a.createElement("div",{key:e.uid},e.txt?c.a.createElement(l.a,{draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card  we-py-2 we-px-1",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:r,shopId:o,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}):c.a.createElement("div",null,t))}},{key:"render",value:function(){var e=w({},this.props.designFicheProduit),e=(e=e&&e.singleProduct&&e.singleProduct.similarProducts)&&e.content?w({},e,{content:e.content,uid:"similar_product"}):w({},e,{content:"Produits pouvant vous intéresser",uid:"similar_product"});return c.a.createElement("div",{className:"editor__section-col"},c.a.createElement(d.a,null),this.showText({txt:e.content,uid:e.uid},"Zone de texte"))}}])&&y(e.prototype,t),n&&y(e,n),r}();t.default=Object(s.connect)(function(e){return{currentSite:e.sites.currentSiteInEdit,designFicheProduit:e.sites.designFicheProduit,designModule:e.sites.designModule,siteId:Object(f.i)(e).id,shopId:Object(f.F)(e)}},{updateSiteDesignModuleStarted:o.j,wantUpdateTextAction:r.J,setTextIntent:r.p,setMediaIntent:r.o,wantSelectFileAction:r.A})(n)}}]);