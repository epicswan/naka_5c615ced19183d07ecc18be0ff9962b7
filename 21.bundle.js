(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1094:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(9),c=n(18),a=n(44),r=n(907);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(o);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})):t).forEach(function(e){var t,n;t=r,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=w(n);return e=r?(e=w(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==s(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var n="https://cdn-app-wifeosite.fra1.digitaloceanspaces.com/dashboard/1.0.0/assets/img/icon_animation_section/",b=[{label:"Aucun",imgSrc:n+"anim_none.svg",effect:"none",component:i.a.Fragment},{label:"Slide in",imgSrc:n+"anim_slide_in.svg",effect:"fadeInDown",component:r.Slide,extraProps:{top:!0}},{label:"Fade in",imgSrc:n+"anim_fade_in.svg",effect:"fadeIn",component:r.Fade,extraProps:{}},{label:"Swing in",imgSrc:n+"anim_swing_in.svg",effect:"flipInX",component:r.Flip,extraProps:{top:!0}},{label:"Puff in",imgSrc:n+"anim_puff_in.svg",effect:"zoomIn",component:r.Zoom,extraProps:{}}],r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,i.a.Component);var e,t,n,r=m(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,e)).state={selectedAnimation:e.props.currentSiteDesignConfig.animSection&&e.props.currentSiteDesignConfig.animSection.effect},e}return e=o,(t=[{key:"shouldComponentUpdate",value:function(e,t){return this.state.selectedAnimation!=t.selectedAnimation}},{key:"updateAnimationSection",value:function(e){var t={label:e.label,effect:e.effect},n=l({},this.props.currentSiteDesignConfig);n.animSection=t,this.setState({selectedAnimation:e.effect}),this.props.updateSiteTemplateAction(n,this.props.currentSiteDesign.id)}},{key:"render",value:function(){var n=this,r=this.state.selectedAnimation;return i.a.createElement("div",{className:"editor__section-col"},i.a.createElement("span",{className:"we-h5 we-text-white"},i.a.createElement("i",{className:"fas fa-arrow-left we-me-2 ",onClick:function(){n.props.showDesignMenu()}}),"Choix de l'animation"),i.a.createElement("div",{className:"we-mt-2"},b.map(function(e,t){return e.effect===r||"none"===e.effect&&!n.props.currentSiteDesignConfig.animSection?i.a.createElement(e.component,f({key:t},e.extraProps),i.a.createElement("div",{onClick:function(){return n.updateAnimationSection(e)},className:"\r we-my-3\r cursor-pt\r we-align-items-center\r we-card\r we-px-2",style:{border:"3px solid #6666FF"}},i.a.createElement("img",{src:e.imgSrc,className:"we-mt-2 we-mb-1 we-mx-3 we-restrict"}),i.a.createElement("span",{className:"we-mt-1 we-mb-2 we-mx-3 we-restrict we-text-white"},e.label))):i.a.createElement("div",{key:t,onClick:function(){return n.updateAnimationSection(e)},className:"\r we-my-3\r cursor-pt\r we-align-items-center\r we-card\r we-px-2",style:{border:"none"}},i.a.createElement("img",{src:e.imgSrc,className:"we-mt-2 we-mb-1 we-mx-3 we-restrict"}),i.a.createElement("span",{className:"we-mt-1 we-mb-2 we-mx-3 we-restrict we-text-white"},e.label))})))}}])&&u(e.prototype,t),n&&u(e,n),o}();t.default=Object(o.connect)(function(e){return{currentSiteDesignConfig:e.sites.design&&e.sites.design.config?JSON.parse(e.sites.design.config):{},currentSiteDesign:e.sites.design}},{showDesignMenu:a.d,updateSiteTemplateAction:c.n})(r)}}]);