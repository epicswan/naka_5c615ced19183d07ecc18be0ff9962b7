(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"AnimationStore",(function(){return E}));var n=r(0),o=r.n(n),i=r(7),a=r(35),s=r(14),c=(r(80),r(6)),l=r(84);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S="https://editor.wifeosite.com/assets/img/icon_animation_section/",E=[{label:"Aucun",imgSrc:S+"anim_none.svg",effect:"none"},{label:"Slide in",imgSrc:S+"anim_slide_in.svg",effect:"fadeInDown"},{label:"Fade in",imgSrc:S+"anim_fade_in.svg",effect:"fadeIn"},{label:"Swing in",imgSrc:S+"anim_swing_in.svg",effect:"flipInX"},{label:"Puff in",imgSrc:S+"anim_puff_in.svg",effect:"zoomIn"}],C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,r,n,i=b(a);function a(){var e;w(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(h(e=i.call.apply(i,[this].concat(r))),"getContrastYIQ",(function(e){e.replace("#","");var t=f([0,2,4].map((function(t){return parseInt(e.substr(t,2),16)})),3);return(299*t[0]+587*t[1]+114*t[2])/1e3>=128})),e}return t=a,(r=[{key:"setShapeBtn",value:function(e,t,r){if(!this.props.currentSiteDesign.btn||!this.props.currentSiteDesign.btn.shape||this.props.currentSiteDesign.btn.shape.type!==e){var n={type:e,css:"cfg-btn-".concat(e.toLocaleLowerCase())},o=m({},this.props.currentSiteDesign.btn,{shape:n}),i=m({},this.props.currentSiteDesign);i.btn=o,this.props.updateSiteTemplateAction(i,this.props.currentSiteDesign.id)}}},{key:"setTextColor",value:function(e,t){return e?this.getContrastYIQ(this.props.storeColor.baseColor)?"black":"white":this.getContrastYIQ(t[0])?"black":"white"}},{key:"getScheme",value:function(){var e=[{color:"var(--primary)",title:"Couleur primaire"},{color:"var(--secondary)",title:"Couleur secondaire"},{color:"var(--success)",title:"Couleur tertiaire"},{color:"var(--info)",title:"Couleur quaternaire"}],t=getComputedStyle(document.body),r=fixHex(t.getPropertyValue("--primary").trim()),n=fixHex(t.getPropertyValue("--secondary").trim()),o=fixHex(t.getPropertyValue("--success").trim()),i=fixHex(t.getPropertyValue("--info").trim()),a=["#FFFFFF",r,n,o,i];return e[0].color=r,e[1].color=n,e[2].color=o,e[3].color=i,{colors:a,presetUser:e}}},{key:"render",value:function(){var e=this,t=(this.props.currentSiteDesign.btn&&this.props.currentSiteDesign.btn.shape&&this.props.currentSiteDesign.btn.shape.type&&this.props.currentSiteDesign.btn.shape.type,E.find((function(t){return t.effect===(e.props.currentSiteDesign.animSection&&e.props.currentSiteDesign.animSection.effect)}))||E[0]),r=!!this.props.storeColor.baseColor,n=this.setTextColor(!r,this.props.storeColor.selectedThemeColors),i={name:"cta",type:"primary",class:"btn-primary",link:"",txt:"Primaire",visible:!0},a={name:"cta",type:"secondary",class:"btn-secondary",link:"",txt:"Secondaire",visible:!0};return this.props.currentSiteDesign&&this.props.currentSiteDesign.btn&&(i.ui=this.props.currentSiteDesign.btn.primary,a.ui=this.props.currentSiteDesign.btn.secondary),o.a.createElement("div",{className:"we-pt-3 editor__menu-design we-restrict we-text-white"},o.a.createElement("div",null,o.a.createElement("div",{className:"we-mb-2 we-d-flex we-flex-align-items-center we-text-uppercase"},"Modifiez le style"),o.a.createElement("div",{onClick:function(){return e.props.showDesignPalettes()},className:"we-d-flex we-flex-column we-my-3 cursor-pt we-card"},o.a.createElement("div",{className:"we-mt-2 we-mb-1 we-mx-3 we-text-uppercase"},"Palette de couleur"),o.a.createElement("div",{className:"we-d-flex we-h-100 we-align-items-center we-justify-content-center we-text-uppercase",style:{color:n,backgroundColor:this.props.storeColor.baseColor,minHeight:"80px"}}),o.a.createElement("div",{className:"we-footer-action"},o.a.createElement("div",{className:" we-my-2 we-mx-3 we-d-flex we-justify-content-between we-align-items-center"},o.a.createElement("div",{style:{fontSize:"85%"}},"Modifier ma palette de couleurs"),o.a.createElement("i",{className:"far fa-arrow-right"})))),o.a.createElement("div",{onClick:function(){return e.props.showDesignFonts()},className:"we-d-flex we-flex-column we-my-3 cursor-pt we-card wrapper-fake-browser"},o.a.createElement("div",null,o.a.createElement("div",{className:"we-mt-3 we-mb-4 we-mx-3 we-text-uppercase"},"Polices d'écriture"),o.a.createElement("div",null,o.a.createElement("h1",{className:"we-mt-2 we-mb-2 we-mx-3 we-restrict-none we-h3",style:{color:"white"}},"Titre"),o.a.createElement("div",{style:{fontSize:"90%"}},o.a.createElement("p",{className:"we-mt-2 we-mb-2 we-mx-3 we-restrict-none"},"Voici le texte de votre paragraphe.")))),o.a.createElement("div",{className:"we-footer-action",style:{borderTop:"3px solid #414141"}},o.a.createElement("div",{className:" we-my-2 we-mx-3 we-d-flex we-justify-content-between we-align-items-center"},o.a.createElement("div",{style:{fontSize:"85%"}},"Modifier les polices d'écriture"),o.a.createElement("i",{className:"far fa-arrow-right"})))),o.a.createElement("div",{className:"we-d-flex we-flex-column we-my-3  we-card ",style:{overflow:"hidden"}},o.a.createElement("div",{className:"we-mt-3 we-mx-3 we-text-uppercase"},"Boutons"),o.a.createElement("div",{className:"we-my-4 we-mx-auto we-restrict"},o.a.createElement(l.a,{mode:"edit",cta:i,onAction:function(t){e.props.setCtaIntent("themePrimary",i),e.props.showDesignBoutons()}}),o.a.createElement(l.a,{mode:"edit",cta:a,onAction:function(t){e.props.setCtaIntent("themeSecondary",a),e.props.showDesignBoutons()}})),o.a.createElement("div",{className:"we-footer-action",style:{borderTop:"3px solid #414141"}},o.a.createElement("div",{className:" we-my-2 we-mx-3 we-d-flex we-justify-content-between we-align-items-center",style:{fontSize:"85%"}},o.a.createElement("div",null,"Choisissez le bouton à modifier")))),o.a.createElement("div",{onClick:function(){return e.props.showDesignAnimations()},className:"we-d-flex we-flex-column we-my-3 cursor-pt we-card "},o.a.createElement("div",{className:"we-mt-3 we-mb-4 we-mx-3 we-text-uppercase"},"Animations"),o.a.createElement("img",{src:t.imgSrc,style:{maxHeight:"40px"},className:"we-mt-2 we-mb-1 we-mx-3 we-restrict"}),o.a.createElement("span",{className:"we-mt-1 we-mb-2 we-mx-3 we-restrict we-text-center"},t.label),o.a.createElement("div",{className:"we-footer-action",style:{borderTop:"3px solid #414141"}},o.a.createElement("div",{className:" we-my-2 we-mx-3 we-d-flex we-justify-content-between we-align-items-center"},o.a.createElement("div",{style:{fontSize:"85%"}},"Modifier les animations"),o.a.createElement("i",{className:"far fa-arrow-right"}))))))}}])&&d(t.prototype,r),n&&d(t,n),a}(o.a.Component);t.default=Object(i.connect)((function(e){return{currentSiteDesign:e.sites.design&&e.sites.design.config?JSON.parse(e.sites.design.config):{},storeColor:e.color}}),{showDesignAnimations:a.a,showDesignBoutons:a.b,showDesignMenu:a.d,showDesignPalettes:a.e,showDesignFonts:a.c,updateSiteTemplateAction:s.n,setCtaIntent:c.l,wantUpdateCtaAction:c.F})(C)}}]);