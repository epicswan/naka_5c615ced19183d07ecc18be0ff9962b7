(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{177:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(31),c=n(14),u=n(6),s=n(8),a=(n(5),n(169)),l=n.n(a),d=n(82),p=n(15),f=n(7);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,o,c=h(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={},t}return t=u,(n=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){console.log("updateTextProduit",e);var t=g({},this.props.designFicheProduit),n=t&&t.singleProduct&&t.singleProduct.similarProducts;t.singleProduct.similarProducts=g({},n,{content:e.content,uid:"similar_product"});var o=t.singleProduct.tpl&&t.singleProduct.mepId?Object(i.a)(t.singleProduct.tpl,t.singleProduct.mepId):i.c[0];t.singleProduct.ui=Object(i.g)(o),delete t.produit;var r=g({},JSON.parse(this.props.designModule.config));delete t.commun,delete t.produit,console.log("similarProducts",n,t),r.shop.ficheProduit=t,this.props.updateSiteDesignModuleStarted(JSON.stringify(r))}},{key:"showText",value:function(e,t){var n=this,o=this.props,i=o.siteId,c=o.shopId;return r.a.createElement("div",{key:e.uid},e.txt?r.a.createElement(l.a,{draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card ",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:i,shopId:c,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}):r.a.createElement("div",null,t))}},{key:"render",value:function(){var e=g({},this.props.designFicheProduit),t=e&&e.singleProduct&&e.singleProduct.similarProducts;return t=t&&t.content?g({},t,{content:t.content,uid:"similar_product"}):g({},t,{content:"Produits pouvant vous intéresser",uid:"similar_product"}),r.a.createElement("div",{className:"editor__section-col"},r.a.createElement(d.a,null),this.showText({txt:t.content,uid:t.uid},"Zone de texte"))}}])&&m(t.prototype,n),o&&m(t,o),u}(o.PureComponent);t.default=Object(s.connect)((function(e){return{currentSite:e.sites.currentSiteInEdit,designFicheProduit:e.sites.designFicheProduit,designModule:e.sites.designModule,siteId:Object(f.h)(e).id,shopId:Object(f.C)(e)}}),{updateSiteDesignModuleStarted:c.j,wantUpdateTextAction:u.H,setTextIntent:u.p,setMediaIntent:u.o,wantSelectFileAction:u.z})(O)}}]);