(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1432:function(A,e,t){"use strict";t.r(e);var r=t(0),l=t.n(r),r=t(6),n=t(7),c=t(5),i=t(163),u=t(12),a=t(20),a=t.n(a),o=t(114);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(e){y(t,e,r[e])})}return t}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=m(r),t=(e=n?(e=m(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}var g=a.a._debounce,v=[{label:"5 secondes",shortLabel:"5 sec",value:5,id:0},{label:"10 secondes",shortLabel:"10 sec",value:10,id:1},{label:"20 secondes",shortLabel:"20 sec",value:20,id:2},{label:"30 secondes",shortLabel:"30 sec",value:30,id:3},{label:"45 secondes",shortLabel:"45 sec",value:45,id:4},{label:"1 minute",shortLabel:"1 min",value:60,id:5},{label:"2 minutes",shortLabel:"2 min",value:120,id:6},{label:"5 minutes",shortLabel:"5 min",value:300,id:7}],h=[{label:"rechargement de la page",shortLabel:"5 min",value:5,id:0},{label:"5 minutes",shortLabel:"5 min",value:300,id:1},{label:"15 minutes",shortLabel:"15 min",value:900,id:2},{label:"30 minutes",shortLabel:"30 min",value:1800,id:3},{label:"1 heures",shortLabel:"1 h",value:3600,id:4},{label:"6 heures",shortLabel:"6 h",value:21600,id:5},{label:"12 heures",shortLabel:"12 h",value:43200,id:6},{label:"1 jour",shortLabel:"24 h",value:86400,id:7},{label:"2 jours",shortLabel:"48 h",value:172800,id:8}],a=function(e){var t=a;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e);var r,n=B(a);function a(e){var t;if(this instanceof a)return y(b(t=n.call(this,e)),"updateTime",g(function(e){t.props.setModalTriggerOn(p({},t.props.modalInEdit.triggerOn,{delay:e}))},500)),y(b(t),"updateRepeatTime",g(function(e){t.props.setModalTriggerOn(p({},t.props.modalInEdit.triggerOn,{repeat:e}))},500)),t.state={delay:t.props.modalInEdit&&t.props.modalInEdit.triggerOn&&t.props.modalInEdit.triggerOn.delay||0,repeat:t.props.modalInEdit&&t.props.modalInEdit.triggerOn&&t.props.modalInEdit.triggerOn.repeat||0},t;throw new TypeError("Cannot call a class as a function")}return t=a,(e=[{key:"handleChangeTime",value:function(e){var t=this;this.setState({delay:v[e].value},function(){t.updateTime(t.state.delay)})}},{key:"formatDate",value:function(e){var e=e.split("T"),t=e[0].match(/\d+/g),r=t[0],n=t[1],t=t[2],e=e[1].match(/\d+/g);return t+"/"+n+"/"+r+" "+e[0]+":"+e[1]}},{key:"handleChangeRepeatTime",value:function(e){var t=this;this.setState({repeat:h[e].value},function(){t.updateRepeatTime(t.state.repeat)})}},{key:"render",value:function(){var r=this,e=this.props.modalInEdit;if(!e)return null;var n=e.triggerOn,e=this.state,t=e.delay,a=e.repeat,e=v.find(function(e){return e.value==t})||v[0],o=h.find(function(e){return e.value==a})||h[6];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"we-h5 we-text-white we-pt-4 we-pb-2"},"Comment déclencher la popup"),l.a.createElement(c.Alert,{variant:"info"},"Ouverture ".concat(n.activeTrigger&&n.activeTrigger.includes("delay")?"après "+e.label:"immediate","."),l.a.createElement("br",null),n.activeTrigger&&n.activeTrigger.includes("repeat")?"Réapparition après ".concat(o.label,"."):"Pas de réapparition."," ",l.a.createElement("br",null),n.activeTrigger&&n.activeTrigger.includes("expiration")&&"Active jusqu'au ".concat(this.formatDate(n.expiration))),n&&n.expiration&&new Date(n.expiration)<new Date&&l.a.createElement(c.Alert,{variant:"danger"},"Votre popup a atteint sa date d'expiration. Modifier la si vous souhaitez la réactiver"),l.a.createElement("div",{className:"we-py-2"},l.a.createElement(i.a,{label:"Déclencher après un certain delai",checked:n.activeTrigger&&n.activeTrigger.includes("delay")||!1,handleChange:function(){var e=p({},n);n.activeTrigger.includes("delay")?delete e.delay:e.delay=v[0].value,r.props.setModalTriggerOn(p({},e,{activeTrigger:Object(u.A)(n.activeTrigger,"delay")}))}})),n.activeTrigger&&n.activeTrigger.includes("delay")&&l.a.createElement("div",{className:" we-py-2"},l.a.createElement("div",{className:"we-text-white"},l.a.createElement("label",{className:"label-range-padding"},e.label),l.a.createElement("input",{type:"range",className:"we-form-range",min:0,value:e.id,step:1,max:v.length-1,onChange:function(e){return r.handleChangeTime(e.target.value)}}))),l.a.createElement("div",{className:"we-py-2"},l.a.createElement(i.a,{label:"Répéter la popup",checked:n.activeTrigger&&n.activeTrigger.includes("repeat")||!1,handleChange:function(){var e=p({},n);n.activeTrigger.includes("repeat")?delete e.repeat:e.repeat=h[6].value,r.props.setModalTriggerOn(p({},e,{activeTrigger:Object(u.A)(n.activeTrigger,"repeat")}))}})),n.activeTrigger&&n.activeTrigger.includes("repeat")&&l.a.createElement("div",{className:" we-py-2"},l.a.createElement("div",{className:"we-text-white"},l.a.createElement("label",{className:"label-range-padding"},o.label),l.a.createElement("input",{type:"range",className:"we-form-range",min:0,value:o.id,step:1,max:h.length-1,onChange:function(e){return r.handleChangeRepeatTime(e.target.value)},name:"formCtrlSelectPaddingBottom"}))),l.a.createElement("div",{className:"we-py-2"},l.a.createElement(i.a,{label:"Désactiver la popup appartir d'une date",checked:n.activeTrigger&&n.activeTrigger.includes("expiration")||!1,handleChange:function(){var e=p({},n);n.activeTrigger.includes("expiration")?delete e.expiration:e.expiration="".concat((new Date).getFullYear()+1,"-01-01T00:00:00"),r.props.setModalTriggerOn(p({},e,{activeTrigger:Object(u.A)(n.activeTrigger,"expiration")}))}})),n.activeTrigger&&n.activeTrigger.includes("expiration")&&[l.a.createElement("div",{className:" we-py-2"},l.a.createElement("input",{type:"date",className:"we-form-control",value:n.expiration.split("T")[0],onChange:function(e){var t=n.expiration.split("T");t[0]=e.target.value,r.props.setModalTriggerOn(p({},n,{expiration:t.join("T")}))},name:"formCtrlSelectPaddingBottom"})),l.a.createElement("div",{className:" we-py-2"},l.a.createElement("input",{type:"time",className:"we-form-control",value:n.expiration.split("T")[1],onChange:function(e){var t=n.expiration.split("T");t[1]=e.target.value+":00",r.props.setModalTriggerOn(p({},n,{expiration:t.join("T")}))},name:"formCtrlSelectPaddingBottom"}))])}}])&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.a.Component),D=Object(r.connect)(function(e){return{modalInEdit:Object(n.H)(e)}},{setModalTriggerOn:o.f})(a),a=t(253),H=t.n(a);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),t.forEach(function(e){var t,r;t=n,r=a[e=e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r})}return n}function E(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=S(r),t=(e=n?(e=S(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=function(e){var t=a;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e);var r,n=W(a);function a(e){if(this instanceof a)return n.call(this,e);throw new TypeError("Cannot call a class as a function")}return t=a,(e=[{key:"handleSelectTriggerWhere",value:function(e,t){var r=this.props.modalInEdit.triggerWhere,n=r.enable,a=r.disable,o=a&&a.findIndex(function(e){return e==t.id}),i=n&&n.findIndex(function(e){return e==t.id}),a=o&&-1===o||i&&-1===i?"enable"===e?{enable:[].concat(E(n),[t.id])}:{disable:[].concat(E(a),[t.id])}:((n=E("enable"===e?n:a)).splice("enable"===e?i:o,1),"enable"===e?{enable:n}:{disable:n});this.props.setModalTriggerWhere(O({},r,a))}},{key:"render",value:function(){var t=this,e=this.props.modalInEdit;if(!e)return null;var r=e.triggerWhere,e=r.enable,n=r.disable;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"we-h5 we-text-white we-pt-4 we-pb-2"},"Où déclencher la popup"),!r.allPage&&(!r.enable||0===r.enable.length)&&l.a.createElement(c.Alert,{variant:"danger"},"Attention votre popup n'est activée sur aucune page"),l.a.createElement("div",{className:"we-py-1"},l.a.createElement(i.a,{label:"Afficher la popup sur tout vos pages",checked:!!r.allPage,handleChange:function(){var e=O({},r);r.allPage?(delete e.allPage,e.enable=[]):(delete e.enable,e.allPage=!0),t.props.setModalTriggerWhere(e)}})),r.allPage&&l.a.createElement("div",{className:"we-py-1"},l.a.createElement(i.a,{label:"Désactiver la popup sur certaines pages",checked:!!r.disable,handleChange:function(){var e=O({},r);r.disable?delete e.disable:e.disable=[],t.props.setModalTriggerWhere(e)}})),(r.allPage&&!!r.disable||!r.allPage)&&l.a.createElement("div",{className:"we-py-2"},l.a.createElement("div",{className:"we-p we-text-white we-py-2"},"Sélectionner les pages à"," ",r.allPage?"désactiver":"activer"),l.a.createElement(H.a,{siteId:this.props.siteId,shopId:this.props.shopId,blogId:this.props.blogId,itemClassname:"we-text-white",selectedItemClassname:"we-bg-secondary",unSelectedItemClassname:"we-bg-dark",onClick:function(e){t.handleSelectTriggerWhere(r.allPage?"disable":"enable",e)},canMultipleValue:!0,removeLink:function(){return t.removeLink()},values:r.allPage?n:e,excludeList:["Fichier"]})))}}])&&T(t.prototype,e),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.a.Component),F=Object(r.connect)(function(e){return{modalInEdit:Object(n.H)(e),siteId:Object(n.k)(e).id,shopId:Object(n.N)(e),blogId:Object(n.d)(e)}},{setModalTriggerWhere:o.g})(a),x=t(54),U=t(81),a=t(9),z=t(895),t=t(27);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=N(r),t=(e=n?(e=N(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=[{label:"Petit",value:"sm",id:1},{label:"Moyenne",value:null,id:2},{label:"Grande",value:"lg",id:3}],J=function(e){var t=a;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e);var r,n=V(a);function a(e){if(this instanceof a)return n.call(this,e);throw new TypeError("Cannot call a class as a function")}return t=a,(e=[{key:"handleBg",value:function(e,t){this.props.wantUpdateBackgroundSectionAction(),this.props.setCurrentBgInStore(t),this.props.setBackgroundIntent(e)}},{key:"render",value:function(){var t=this,e=this.props.modalInEdit;if(!e)return null;var r=e.title,n=e.size,a=e.centered,o=e.bg,i=e.hideHeader;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"we-py-2"},l.a.createElement(x.a,{onClick:function(){t.props.setModalHideHeader(!i)}},i?"Afficher l'entete":"Masquer l'entete")),!i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"we-h5 we-text-white we-py-2"}," Titre"),l.a.createElement("div",{className:" we-pb-4"},l.a.createElement(c.Button,{className:"we-w-100",variant:"secondary",onClick:function(){t.props.setTextIntent("modalTitle",r),t.props.wantUpdateTextAction()}},l.a.createElement("p",{className:"we-p-0 we-m-0 we-text-start we-text-truncate",dangerouslySetInnerHTML:{__html:Object(u.o)(r)}})))),l.a.createElement("div",{className:"we-py-2"},l.a.createElement(U.a,{label:"Tailles",mapValues:q,value:n,handleClick:function(e){t.props.setModalSize(e.value)}})),l.a.createElement("div",{className:"we-py-2"},l.a.createElement(x.a,{onClick:function(){t.props.setModalCentered(!a)}},a?"Centré":"Non centré")),l.a.createElement("div",{className:"we-p we-text-white we-py-2"}," Fond"),l.a.createElement("div",{className:" we-py-2"},l.a.createElement(z.a,{onClick:function(){return t.handleBg("modal",o)},bg:o,label:"Entete"})))}}])&&I(t.prototype,e),r&&I(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.a.Component),G=Object(r.connect)(function(e){return{modalInEdit:Object(n.H)(e)}},{setModalCentered:o.a,setModalSize:o.d,setTextIntent:a.p,wantUpdateTextAction:a.L,wantUpdateBackgroundSectionAction:a.E,setCurrentBgInStore:t.f,setBackgroundIntent:t.e,setModalHideHeader:o.b})(J);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=L(r),t=(e=n?(e=L(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a=function(e){var t=a;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e);var r,n=Y(a);function a(e){if(this instanceof a)return n.call(this,e);throw new TypeError("Cannot call a class as a function")}return t=a,(e=[{key:"render",value:function(){return this.props.modalInEdit?l.a.createElement("div",{className:"we-bg-dark "},l.a.createElement(G,null),l.a.createElement(D,null),l.a.createElement(F,null)):null}}])&&R(t.prototype,e),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.a.Component);e.default=Object(r.connect)(function(e){return{modalInEdit:Object(n.H)(e)}},{})(a)},895:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var t=r(0),n=r.n(t),a=r(5),t=r(66),o=r.n(t),i=r(12),l=r(60);function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),t.forEach(function(e){var t,r;t=n,r=a[e=e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r})}return n}function u(e){var t=c({},e.bg);return n.a.createElement("div",{style:{cursor:"pointer"},className:"we-my-2"},n.a.createElement("div",{className:"we-d-flex we-flex-row"},n.a.createElement(l.a,null,n.a.createElement(o.a,{card:{bg:Object(i.e)(t)}},n.a.createElement("div",{style:{width:"90%",height:50,margin:"10px auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},onClick:function(){return e.onClick()}},n.a.createElement(a.Button,{variant:"secondary"},e.label))))))}}}]);