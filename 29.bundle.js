(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{964:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=(n(49),n(16)),r=n(8),c=n(9),u=(n(5),n(412)),s=n.n(u),l=n(176),f=n(7),p=n(17);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(r);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):t).forEach(function(e){var t,n;t=o,e=r[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return o}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=h(n);return e=o?(e=h(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==d(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,a["PureComponent"]);var e,t,n,o=g(r);function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,e)).state={},e}return e=r,(t=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=b({},JSON.parse(this.props.designModule.config));t.global?t.global.infosLegales=e.content:t.global={infosLegales:e.content},this.props.updateSiteDesignModuleStarted(JSON.stringify(t))}},{key:"showText",value:function(e,t){var n=this,o=this.props,r=o.siteId,a=o.shopId,o=o.darkMode;return i.a.createElement("div",{key:e.uid},e.txt?i.a.createElement(s.a,{darkMode:o,toggleDarkMode:function(){return n.props.toggleDarkModeText()},draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card  we-py-2 we-px-1",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(p.g)().apiSitesSlugPagesGet,module:Object(p.d)().apiSitesSlugModulesModulePagesGet},siteId:r,shopId:a,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}):i.a.createElement("div",null,t))}},{key:"render",value:function(){var e=b({},this.props.facture).infosLegales||"<p></p>";return i.a.createElement("div",{className:"editor__section-col"},i.a.createElement(l.a,null),this.showText({txt:e,uid:"infosLegalesUp"},"Zone de texte"))}}])&&w(e.prototype,t),n&&w(e,n),r}();t.default=Object(c.connect)(function(e){return{facture:Object(f.k)(e),designModule:e.sites.designModule,siteId:Object(f.i)(e).id,shopId:Object(f.G)(e),darkMode:Object(f.j)(e)}},{updateSiteDesignModuleStarted:o.j,wantUpdateTextAction:r.K,setTextIntent:r.p,setMediaIntent:r.o,wantSelectFileAction:r.B,toggleDarkModeText:r.v})(n)}}]);