(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1417:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=(n(62),n(19)),a=n(9),c=n(6),u=(n(5),n(767)),s=n.n(u),l=n(162),p=n(7),f=n(22);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n})}return o}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=h(n),t=(e=o?(e=h(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}u=function(e){var t=r;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e);var n,o=g(r);function r(e){if(this instanceof r)return(e=o.call(this,e)).state={},e;throw new TypeError("Cannot call a class as a function")}return t=r,(e=[{key:"getText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"updateTextProduit",value:function(e){var t=b({},JSON.parse(this.props.designModule.config));t.global?t.global.infosLegales=e.content:t.global={infosLegales:e.content},this.props.updateSiteDesignModuleStarted(JSON.stringify(t))}},{key:"showText",value:function(e,t){var n=this,o=this.props,r=o.siteId,a=o.shopId,o=o.darkMode;return i.a.createElement("div",{key:e.uid},e.txt?i.a.createElement(s.a,{darkMode:o,toggleDarkMode:function(){return n.props.toggleDarkModeText()},draftProps:{content:e.txt,toolbarCss:"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark",editorCss:"we-card  we-py-2 we-px-1",onAction:function(e){e.action&&"onChange"===e.action&&n.updateTextProduit(e)},showCharCounter:!1,charCounterClassName:""},linkProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none we-w-100",fetchers:{page:Object(f.g)().apiSitesSlugPagesGet,module:Object(f.d)().apiSitesSlugModulesModulePagesGet},siteId:r,shopId:a,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",wantSelectFile:function(e){n.props.setMediaIntent("select_file_for_draft",e),n.props.wantSelectFileAction()}},colorPickerProps:{modalClassName:"we-bg-dark we-border-0 we-shadow-none"}}):i.a.createElement("div",null,t))}},{key:"render",value:function(){var e=b({},this.props.facture).infosLegales||"<p></p>";return i.a.createElement("div",{className:"editor__section-col"},i.a.createElement(l.a,null),this.showText({txt:e,uid:"infosLegalesUp"},"Zone de texte"))}}])&&y(t.prototype,e),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),r}(o.PureComponent);t.default=Object(c.connect)(function(e){return{facture:Object(p.n)(e),designModule:e.sites.designModule,siteId:Object(p.k)(e).id,shopId:Object(p.N)(e),darkMode:Object(p.m)(e)}},{updateSiteDesignModuleStarted:r.j,wantUpdateTextAction:a.L,setTextIntent:a.p,setMediaIntent:a.o,wantSelectFileAction:a.C,toggleDarkModeText:a.v})(u)}}]);