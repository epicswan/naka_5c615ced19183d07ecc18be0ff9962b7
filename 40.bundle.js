(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{654:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(55),u=n(16),c=n(6),s=n(7),l=n(5),a=n(721),f=n(198);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){y(t,e,n[e])}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(c,t);var e,n,r,u=g(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this,t)).state={},e}return e=c,(n=[{key:"getText",value:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""}},{key:"updateTextProduit",value:function(t){console.log("updateTextProduit",t);var e=p({},this.props.designFicheProduit),n=e&&e.singleProduct&&e.singleProduct.similarProducts;e.singleProduct.similarProducts=p({},n,{content:t.content,uid:"similar_product"});var r=e.singleProduct.tpl&&e.singleProduct.mepId?Object(i.a)(e.singleProduct.tpl,e.singleProduct.mepId):i.c[0];e.singleProduct.ui=Object(i.g)(r),delete e.produit;var o=p({},JSON.parse(this.props.designModule.config));delete e.commun,delete e.produit,console.log("similarProducts",n,e),o.shop.ficheProduit=e,this.props.updateSiteDesignModuleStarted(JSON.stringify(o))}},{key:"showText",value:function(t,e){var n=this;return o.a.createElement(l.ListGroup.Item,{key:t.uid},t.txt?o.a.createElement(a.a,{content:t.txt,onAction:function(t){n.updateTextProduit(t)}}):o.a.createElement("div",null,e))}},{key:"render",value:function(){var t=p({},this.props.designFicheProduit),e=t&&t.singleProduct&&t.singleProduct.similarProducts;return e=e&&e.content?p({},e,{content:e.content,uid:"similar_product"}):p({},e,{content:"Produits pouvant vous intéresser",uid:"similar_product"}),o.a.createElement("div",{className:"editor__section-col"},o.a.createElement(f.a,null),this.showText({txt:e.content,uid:e.uid},"Zone de texte"))}}])&&b(e.prototype,n),r&&b(e,r),c}(r.PureComponent);e.default=Object(s.connect)((function(t){return{currentSite:t.sites.currentSiteInEdit,designFicheProduit:t.sites.designFicheProduit,designModule:t.sites.designModule}}),{updateSiteDesignModuleStarted:u.j,wantUpdateTextAction:c.H,setTextIntent:c.p})(v)}}]);