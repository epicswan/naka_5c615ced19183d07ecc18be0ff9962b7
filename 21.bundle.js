(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{504:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=(n(27),n(16)),a=n(6),c=n(8),u=(n(5),n(166)),s=n.n(u),l=n(81),f=n(7),p=n(14);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,o,i=g(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={},t}return t=a,(n=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=b({},JSON.parse(this.props.designModule.config));t.global?t.global.infosLegales=e.content:t.global={infosLegales:e.content},this.props.updateSiteDesignModuleStarted(JSON.stringify(t))}},{key:"showText",value:function(e,t){var n=this,o=this.props,i=o.siteId,a=o.shopId;return r.a.createElement("div",{key:e.uid},e.txt?r.a.createElement(s.a,{draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card ",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:i,shopId:a,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}):r.a.createElement("div",null,t))}},{key:"render",value:function(){var e=b({},this.props.facture).infosLegales||"<p></p>";return r.a.createElement("div",{className:"editor__section-col"},r.a.createElement(l.a,null),this.showText({txt:e,uid:"infosLegalesUp"},"Zone de texte"))}}])&&w(t.prototype,n),o&&w(t,o),a}(o.PureComponent);t.default=Object(c.connect)((function(e){return{facture:Object(f.i)(e),designModule:e.sites.designModule,siteId:Object(f.h)(e).id,shopId:Object(f.D)(e)}}),{updateSiteDesignModuleStarted:i.j,wantUpdateTextAction:a.J,setTextIntent:a.p,setMediaIntent:a.o,wantSelectFileAction:a.A})(O)}}]);