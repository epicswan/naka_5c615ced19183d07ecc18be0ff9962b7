(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{632:function(L,e,t){"use strict";t.r(e);var a=t(0),C=t.n(a),S=t(6),E=t(582),c=t(2),o=t(4),a=t(11);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function q(a){var r=u();return function(){var e,t=d(a),t=(e=r?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){var a="function"==typeof Map?new Map:void 0;return function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,t)}function t(){return r(e,arguments,d(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),l(t,e)}(e)}function r(e,t,a){return(r=u()?Reflect.construct:function(e,t,a){var r=[null];r.push.apply(r,t);t=new(Function.bind.apply(e,r));return a&&l(t,a.prototype),t}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,a){return t&&m(e.prototype,t),a&&m(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}function p(u){return{apiFormationsSlugCursusitemOrderPut:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(null==e)throw new g("rankItem","Required parameter rankItem was null or undefined when calling apiFormationsSlugCursusitemOrderPut.");if(null==t)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemOrderPut.");var r,t="/api/formations/{slug}/cursusitem/order".replace("{".concat("slug","}"),encodeURIComponent(String(t))),t=c.parse(t,!0),n=Object.assign({method:"PUT"},a),i={};u&&u.apiKey&&(r="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,i.Authorization=r),i["Content-Type"]="application/json",t.query=Object.assign({},t.query,{},a.query),delete t.search,n.headers=Object.assign({},i,a.headers);return n.body=JSON.stringify(e||{}),{url:c.format(t),options:n}},apiFormationsSlugCursusitemsCursusDelete:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(null==e)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemsCursusDelete.");if(null==t)throw new g("cursus","Required parameter cursus was null or undefined when calling apiFormationsSlugCursusitemsCursusDelete.");var r,e="/api/formations/{slug}/cursusitems/{cursus}".replace("{".concat("slug","}"),encodeURIComponent(String(e))).replace("{".concat("cursus","}"),encodeURIComponent(String(t))),t=c.parse(e,!0),e=Object.assign({method:"DELETE"},a),n={};return u&&u.apiKey&&(r="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,n.Authorization=r),t.query=Object.assign({},t.query,{},a.query),delete t.search,e.headers=Object.assign({},n,a.headers),{url:c.format(t),options:e}},apiFormationsSlugCursusitemsCursusGet:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(null==e)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemsCursusGet.");if(null==t)throw new g("cursus","Required parameter cursus was null or undefined when calling apiFormationsSlugCursusitemsCursusGet.");var r,e="/api/formations/{slug}/cursusitems/{cursus}".replace("{".concat("slug","}"),encodeURIComponent(String(e))).replace("{".concat("cursus","}"),encodeURIComponent(String(t))),t=c.parse(e,!0),e=Object.assign({method:"GET"},a),n={};return u&&u.apiKey&&(r="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,n.Authorization=r),t.query=Object.assign({},t.query,{},a.query),delete t.search,e.headers=Object.assign({},n,a.headers),{url:c.format(t),options:e}},apiFormationsSlugCursusitemsCursusPatchPut:function(e,t,a){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(null==e)throw new g("cursusItem","Required parameter cursusItem was null or undefined when calling apiFormationsSlugCursusitemsCursusPatchPut.");if(null==t)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemsCursusPatchPut.");if(null==a)throw new g("cursus","Required parameter cursus was null or undefined when calling apiFormationsSlugCursusitemsCursusPatchPut.");var n,t="/api/formations/{slug}/cursusitems/{cursus}/patch".replace("{".concat("slug","}"),encodeURIComponent(String(t))).replace("{".concat("cursus","}"),encodeURIComponent(String(a))),a=c.parse(t,!0),t=Object.assign({method:"PUT"},r),i={};u&&u.apiKey&&(n="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,i.Authorization=n),i["Content-Type"]="application/json",a.query=Object.assign({},a.query,{},r.query),delete a.search,t.headers=Object.assign({},i,r.headers);return t.body=JSON.stringify(e||{}),{url:c.format(a),options:t}},apiFormationsSlugCursusitemsCursusPut:function(e,t,a){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(null==e)throw new g("cursusItem","Required parameter cursusItem was null or undefined when calling apiFormationsSlugCursusitemsCursusPut.");if(null==t)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemsCursusPut.");if(null==a)throw new g("cursus","Required parameter cursus was null or undefined when calling apiFormationsSlugCursusitemsCursusPut.");var n,t="/api/formations/{slug}/cursusitems/{cursus}".replace("{".concat("slug","}"),encodeURIComponent(String(t))).replace("{".concat("cursus","}"),encodeURIComponent(String(a))),a=c.parse(t,!0),t=Object.assign({method:"PUT"},r),i={};u&&u.apiKey&&(n="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,i.Authorization=n),i["Content-Type"]="application/json",a.query=Object.assign({},a.query,{},r.query),delete a.search,t.headers=Object.assign({},i,r.headers);return t.body=JSON.stringify(e||{}),{url:c.format(a),options:t}},apiFormationsSlugCursusitemsPost:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(null==e)throw new g("formationItem","Required parameter formationItem was null or undefined when calling apiFormationsSlugCursusitemsPost.");if(null==t)throw new g("slug","Required parameter slug was null or undefined when calling apiFormationsSlugCursusitemsPost.");var r,t="/api/formations/{slug}/cursusitems".replace("{".concat("slug","}"),encodeURIComponent(String(t))),t=c.parse(t,!0),n=Object.assign({method:"POST"},a),i={};u&&u.apiKey&&(r="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,i.Authorization=r),i["Content-Type"]="application/json",t.query=Object.assign({},t.query,{},a.query),delete t.search,n.headers=Object.assign({},i,a.headers);return n.body=JSON.stringify(e||{}),{url:c.format(t),options:n}},publicFormationsSlugCursusitemsGet:function(e,t,a){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(null==e)throw new g("slug","Required parameter slug was null or undefined when calling publicFormationsSlugCursusitemsGet.");var n,e="/public/formations/{slug}/cursusitems".replace("{".concat("slug","}"),encodeURIComponent(String(e))),e=c.parse(e,!0),i=Object.assign({method:"GET"},r),o={},s={};return u&&u.apiKey&&(n="function"==typeof u.apiKey?u.apiKey("Authorization"):u.apiKey,o.Authorization=n),void 0!==t&&(s.page=t),void 0!==a&&(s.term=a),e.query=Object.assign({},e.query,s,r.query),delete e.search,i.headers=Object.assign({},o,r.headers),{url:c.format(e),options:i}}}}function f(i){return{apiFormationsSlugCursusitemOrderPut:function(e,t,a){var r=p(i).apiFormationsSlugCursusitemOrderPut(e,t,a);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+r.url,r.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},apiFormationsSlugCursusitemsCursusDelete:function(e,t,a){var r=p(i).apiFormationsSlugCursusitemsCursusDelete(e,t,a);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+r.url,r.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},apiFormationsSlugCursusitemsCursusGet:function(e,t,a){var r=p(i).apiFormationsSlugCursusitemsCursusGet(e,t,a);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+r.url,r.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},apiFormationsSlugCursusitemsCursusPatchPut:function(e,t,a,r){var n=p(i).apiFormationsSlugCursusitemsCursusPatchPut(e,t,a,r);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+n.url,n.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},apiFormationsSlugCursusitemsCursusPut:function(e,t,a,r){var n=p(i).apiFormationsSlugCursusitemsCursusPut(e,t,a,r);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+n.url,n.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},apiFormationsSlugCursusitemsPost:function(e,t,a){var r=p(i).apiFormationsSlugCursusitemsPost(e,t,a);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+r.url,r.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}},publicFormationsSlugCursusitemsGet:function(e,t,a,r){var n=p(i).publicFormationsSlugCursusitemsGet(e,t,a,r);return function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:o)((1<arguments.length&&void 0!==arguments[1]?arguments[1]:h)+n.url,n.options).then(function(e){if(200<=e.status&&e.status<300)return e.json();throw e})}}}}var h=Object(a.g)("https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/formation").replace(/\/+$/,""),g=function(){i(r,k(Error));var a=q(r);function r(e,t){return K(this,r),z(s(t=a.call(this,t)),"name",void 0),t}return x(r)}();var y=t(57),a=t(9),P=t(609),O=t(608),w=t(8),B=t(1);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,a,r,n,i,o){try{var s=e[i](o),u=s.value}catch(e){return void a(e)}s.done?t(u):Promise.resolve(u).then(r,n)}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),r.forEach(function(e){N(t,e,a[e])})}return t}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=T(a),t=(e=r?(e=T(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}function G(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?F(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function J(e){var t=e.showModal,a=e.hideModal,r=e.confirmModal,n=e.id,i=e.type;return e.message,C.a.createElement(S.Modal,{centered:!0,dialogClassName:" small-modal-w we-m-auto",show:t,onHide:a},C.a.createElement(S.Modal.Header,{closeButton:!0},C.a.createElement(S.Modal.Title,null," Attention !")),C.a.createElement(S.Modal.Body,null,C.a.createElement("div",{className:"we-container we-pt-4"},"Voulez-vous vraiment supprimer ce ",i,"?")),C.a.createElement(S.Modal.Footer,null,C.a.createElement(S.Button,{variant:"secondary",onClick:a,size:"sm"},"Annuler"),C.a.createElement(S.Button,{variant:"danger",size:"sm",onClick:function(){return r(i,n)}},"Supprimer")))}function D(e,t){var a=t.removedIndex,r=t.addedIndex,t=t.payload;return null===a&&null===r||(e=G(e),null!==a&&(t=e.splice(a,1)[0]),null!==r&&e.splice(r,0,t)),e}function M(){var e=Math.floor(10*Math.random());return V[e]}var R={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):""}},V=["azure","beige","bisque","blanchedalmond","burlywood","cornsilk","gainsboro","ghostwhite","ivory","khaki"],t=function(e){var t=n;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e);var a,r=U(n);function n(){var s;if(this instanceof n)return N(I(s=r.call(this)),"generateItems",function(e,t){var a=[],r=s.state.totalPages,n=0;return Array.isArray(e)&&e.forEach(function(e){e.is_cours&&r++,a.push(t(n,e)),n++}),0<r&&s.setState({totalPages:r}),a}),N(I(s),"compareOrdre",function(e,t){return e.metadata.ordre<t.metadata.ordre?-1:e.metadata.ordre>t.metadata.ordre?1:0}),N(I(s),"buildTreeview",function(e){var e=e.find(function(e){return 0==e.is_cours&&0==e.is_chapitre}),t=e.id,e={type:"container",props:{orientation:"vertical"},children:s.generateItems(e.children,function(e,t){return{id:t.id,type:"container",metadata:t,props:{orientation:"vertical",className:"we-card-container"},children:s.generateItems(t.children,function(e,t){return{type:"draggable",id:t.id,metadata:t,props:{className:"we-card ",style:{backgroundColor:M()}}}}).sort(s.compareOrdre)}}).sort(s.compareOrdre)};s.setState({scene:j({},e),treeRootId:t,isLoading:!1})}),N(I(s),"onColumnDrop",function(e){var t=j({},s.state.scene),a=(t.children=D(t.children,e),[]),r=0;t.children.forEach(function(e){a.push({id:e.id,rank:r}),r++}),s.saveOrder(a,function(){s.setState({scene:t,isLoading:!1}),s.refreshSommaire()})}),N(I(s),"onCardDrop",function(t,e){var a,r,n,i,o;null===e.removedIndex&&null===e.addedIndex||(n=(a=j({},s.state.scene)).children.filter(function(e){return e.id===t})[0],r=a.children.indexOf(n),(n=Object.assign({},n)).children=D(n.children,e),a.children.splice(r,1,n),i=[],o=0,n.children.forEach(function(e){i.push({id:e.id,rank:o}),o++}),e={title:s.state.currentPayload.metadata.title,isFree:s.state.currentPayload.metadata.isFree,parent:t},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsCursusPatchPut(e,window.__METADATA.product_props.formationId,s.state.currentPayload.metadata.id,R).call().then(function(e){s.saveOrder(i,function(){s.setState({scene:j({},a),isLoading:!1}),s.refreshSommaire()})}))}),N(I(s),"resetCurrentItem",function(){s.setState({currentItemInEdit:{metadata:{id:0}}})}),N(I(s),"edit",function(e){e==s.state.currentItemInEdit?s.resetCurrentItem():s.setState({currentItemInEdit:e})}),N(I(s),"setVisibility",function(r){var e;s.state.isLoading||(e={visible:!r.metadata.visible},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsCursusPatchPut(e,window.__METADATA.product_props.formationId,r.metadata.id,R).call().then(function(t){var a,e;r.metadata.is_cours?(a=Object.assign({},s.state.scene)).children.forEach(function(e){e=e.children.find(function(e){return e.metadata.id===r.metadata.id});e&&(e.metadata.visible=t.visible,s.setState({isLoading:!1,scene:a}),s.refreshSommaire())}):((e=Object.assign({},s.state.scene)).children.find(function(e){return e.metadata.id===r.metadata.id}).metadata.visible=t.visible,s.setState({isLoading:!1,scene:e}),s.refreshSommaire())}))}),N(I(s),"addChapitre",function(){var e;s.state.isLoading||(e={title:"Mon Nouveau chapitre",isCours:!1,isChapitre:!0,isFree:!1,pageId:0,duration:0,visible:!0,ordre:1e3,parent:s.state.treeRootId.toString()},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsPost(e,window.__METADATA.product_props.formationId,R).call().then(function(e){var e={id:e.id,type:"we-container",metadata:e,props:{orientation:"vertical",className:"we-card-container"},children:[]},t=Object.assign({},s.state.scene);t.children.unshift(e);s.setState({isLoading:!1,scene:t}),s.refreshSommaire()}))}),N(I(s),"deleteChapitre",function(){var e=s.state.chapitreToDelete,t=e.chapitre,a=e.index;f().apiFormationsSlugCursusitemsCursusDelete(window.__METADATA.product_props.formationId,t.metadata.id,R).call().then(function(e){var t=Object.assign({},s.state.scene);t.children.splice(a,1),s.setState({isLoading:!1,scene:t,displayConfirmationModal:!1}),s.refreshSommaire()})}),N(I(s),"deleteIntent",function(e,t,a){s.setState({itemToDelete:{item:e,chapitre:t,index:a},displayConfirmationModal:!0},function(){})}),N(I(s),"deleteChapitreIntent",function(e,t){s.setState({chapitreToDelete:{chapitre:e,index:t},displayConfirmationModal:!0},function(){})}),N(I(s),"goToMainPage",function(){location.href="/editor/pages/formation/"+window.__METADATA.product_props.id}),N(I(s),"goToPage",function(e){e.metadata.page_id<3?s.fixCours(e):s.props.history.push("/editor/pages/cursus/"+e.metadata.page_id)}),N(I(s),"createCursusPage",function(e){return{nom:e.title,url:" formations/"+window.__METADATA.product_props.id+"/cursus/"+e.id,editor:"10",is_home:!1,is_error:!1,module:"5",module_resource:window.__METADATA.product_props.id,module_page_type:"cursus",is_service:!1}}),N(I(s),"fixCours",function(r){var e,t;s.state.isLoading||(s.setState({isLoading:!0}),e=s.props.currentSiteInEdit.id,t=s.createCursusPage(r.metadata),Object(y.h)().apiSitesSitePagesPost(t,e.toString(),R).call().then(function(a){var e={title:r.metadata.title,pageId:a.id};f().apiFormationsSlugCursusitemsCursusPatchPut(e,window.__METADATA.product_props.formationId,r.metadata.id.toString(),R).call().then(function(e){var e=j({},e),t=(e.page_id=a.id,e.id,M(),Object.assign({},s.state.scene));t.children.forEach(function(e){e=e.children.find(function(e){return e.metadata.id===r.metadata.id});e&&(e.metadata.page_id=a.id,s.setState({isLoading:!1,scene:j({},t)},function(){s.resetCurrentItem(),s.refreshSommaire()}))})})}))}),N(I(s),"addCours",function(o){var e;s.state.isLoading||(e={title:"Mon Nouveau cours "+(s.state.totalPages+1),isCours:!0,isChapitre:!1,isFree:!1,pageId:0,duration:0,visible:!1,ordre:1e3,parent:o.metadata.id},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsPost(e,window.__METADATA.product_props.formationId,R).call().then(function(i){var e=s.props.currentSiteInEdit.id,t=s.createCursusPage(i);Object(y.h)().apiSitesSitePagesPost(t,e.toString(),R).call().then(function(n){var e={title:i.title,pageId:n.id};f().apiFormationsSlugCursusitemsCursusPatchPut(e,window.__METADATA.product_props.formationId,i.id.toString(),R).call().then(function(e){var t=j({},i),t=(t.page_id=n.id,{type:"draggable",id:i.id,metadata:t,props:{className:"we-card",style:{backgroundColor:M()}},data:"test"}),a=Object.assign({},s.state.scene),r=a.children.filter(function(e){return e.id===o.id})[0];Object.assign({},r).children.push(t),s.setState({totalPages:s.state.totalPages+1,scene:a,isLoading:!1}),s.refreshSommaire()})})}))}),N(I(s),"dragStart",function(e){s.setState({isLoading:!0,currentPayload:e.payload})}),N(I(s),"dragEnd",function(e){}),N(I(s),"saveOrder",function(e,t){f().apiFormationsSlugCursusitemOrderPut(e,window.__METADATA.product_props.formationId,R).call().then(function(e){t()})}),N(I(s),"saveCours",function(r,e,t){var a;s.state.isLoading||(a={title:r.metadata.title,duration:r.metadata.duration,visible:r.metadata.visible,isCours:!0},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsCursusPatchPut(a,window.__METADATA.product_props.formationId,r.metadata.id,R).call().then(function(t){var a=Object.assign({},s.state.scene);a.children.forEach(function(e){e=e.children.find(function(e){return e.metadata.id===r.metadata.id});e&&(e.metadata=t,s.setState({isLoading:!1,scene:a},function(){s.refreshSommaire(),s.resetCurrentItem()}))})}))}),N(I(s),"saveChapitre",function(r){var e;s.state.isLoading||(e={title:r.metadata.title,duration:r.metadata.duration,visible:r.metadata.visible,isChapitre:r.metadata.isChapitre},s.setState({isLoading:!0}),f().apiFormationsSlugCursusitemsCursusPatchPut(e,window.__METADATA.product_props.formationId,r.metadata.id,R).call().then(function(e){var t=Object.assign({},s.state.scene),a=t.children.map(function(e){return e.id===r.id?r:e});s.setState({scene:{scene:t,children:a},forcedReloadCount:s.state.forcedReloadCount+1},function(){s.setState({isLoading:!1,currentItemInEdit:{metadata:{id:0}}}),s.refreshSommaire()})}))}),N(I(s),"hasDraft",function(){}),N(I(s),"getCardPayload",function(t){return function(e){return s.state.scene.children.filter(function(e){return e.id===t})[0].children[e]}}),s.state={isCursusLoaded:!1,currentItemInEdit:{metadata:{id:0}},currentPayload:{},itemToDelete:{item:{},chapitre:{},index:0},chapitreToDelete:{chapitre:{},index:0},treeRootId:0,productId:0,isLoading:!1,totalPages:0,maxPages:100,formationId:"0",produit:{titre:""},cursusTree:[],displayConfirmationModal:!1,forcedReloadCount:0,sectionSommaireId:0,scene:{type:"container",props:{orientation:"vertical"},children:[]}},s.dragStart=s.dragStart.bind(I(s)),s.deleteCursus=s.deleteCursus.bind(I(s)),s;throw new TypeError("Cannot call a class as a function")}return t=n,(e=[{key:"refreshSommaire",value:function(){0<this.state.sectionSommaireId&&this.props.resetSommaire(this.state.sectionSommaireId)}},{key:"componentDidUpdate",value:function(){var t=this;this.state.isCursusLoaded||window.__METADATA&&window.__METADATA.product_props&&(this.state.isLoading||(this.setState({isLoading:!0}),f().publicFormationsSlugCursusitemsGet(window.__METADATA.product_props.formationId,1,R).call().then(function(e){t.setState({isCursusLoaded:!0}),e.items&&1==e.items.length&&(t.setState({isLoading:!1}),t.buildTreeview(e.items)),"formation"===t.props.currentPageInEdit.module_page_type&&(e=t.props.sections.find(function(e){return"PageFormationRcpt"===e.content.componentName}))&&t.setState({sectionSommaireId:e.id})})))}},{key:"componentDidMount",value:function(){var t=this;this.state.isCursusLoaded||window.__METADATA&&window.__METADATA.product_props&&f().publicFormationsSlugCursusitemsGet(window.__METADATA.product_props.formationId,1,R).call().then(function(e){t.setState({isCursusLoaded:!0}),e.items&&1==e.items.length&&(t.buildTreeview(e.items),"formation"===t.props.currentPageInEdit.module_page_type&&(e=t.props.sections.find(function(e){return"PageFormationRcpt"===e.content.componentName}))&&t.setState({sectionSommaireId:e.id}))})}},{key:"deleteCursus",value:function(){var e,t,a,r,n,i=this;this.state.isLoading||(this.setState({isLoading:!0}),this.state.chapitreToDelete&&void 0!==this.state.chapitreToDelete.chapitre.metadata?this.deleteChapitre():(t=(e=this.state.itemToDelete).item,a=e.chapitre,r=e.index,n=0<t.metadata.page_id?t.metadata.page_id:t.metadata.pageId,f().apiFormationsSlugCursusitemsCursusDelete(window.__METADATA.product_props.formationId,t.metadata.id,R).call().then(function(e){var t;n?Object(y.f)().apiPagesPageDelete(n,R).call().then(function(e){var t=Object.assign({},i.state.scene);t.children.filter(function(e){return e.id===a.id})[0].children.splice(r,1),i.setState({totalPages:i.state.totalPages-1,scene:t,isLoading:!1,displayConfirmationModal:!1}),i.refreshSommaire()}).catch(function(e){}):(console.error("No Page Founded"),(t=Object.assign({},i.state.scene)).children.filter(function(e){return e.id===a.id})[0].children.splice(r,1),i.setState({totalPages:i.state.totalPages-1,scene:t,isLoading:!1,displayConfirmationModal:!1}),i.refreshSommaire())})))}},{key:"render",value:function(){var e=this,t=this.state,r=t.currentItemInEdit,n=t.totalPages,i=t.maxPages,t=t.scene,o=this.props.currentPageInEdit&&this.props.currentPageInEdit.id,s=this.dragStart,u=this.dragEnd,c=this.onCardDrop,l=(this.onColumnDrop,this.setVisibility),d=(this.deleteChapitre,this.deleteChapitreIntent),m=this.deleteIntent,p=this.getCardPayload,f=this.edit,h=this.goToPage,g=(this.goToMainPage,this.addCours),a=this.addChapitre,y=this.deleteCursus,w=this.resetCurrentItem,v=this.saveChapitre,b=this.saveCours;return C.a.createElement("div",{className:"we-pt-2"},C.a.createElement("hr",null),C.a.createElement(J,{type:this.state.chapitreToDelete&&void 0!==this.state.chapitreToDelete.chapitre.metadata?"chapitre":"cours",showModal:this.state.displayConfirmationModal,confirmModal:y,hideModal:function(){e.setState({displayConfirmationModal:!1})},message:"Delete Message"}),0<r.metadata.id&&C.a.createElement("div",{className:"we-row"},C.a.createElement("span",{className:"we-h5 we-text-white"},C.a.createElement("i",{className:"fas fa-arrow-left ",onClick:function(){w()}}," ")," "," Retour au cursus"),C.a.createElement("div",{className:"we-col-md-12"},C.a.createElement("div",{className:"we-card we-my-3 we-text-white"},C.a.createElement("div",{className:"we-card-body"},C.a.createElement("div",{className:"card-column-header"},C.a.createElement("div",{className:"we-row"},C.a.createElement("div",{className:"we-col-12"},C.a.createElement(P.c,{initialValues:{title:r.metadata.title,duration:r.metadata.duration},validationSchema:O.b().shape({title:O.c().min(3,"Trop court!").max(500,"Trop long!").required("Obligatoire"),duration:O.a().required("Obligatoire").integer("Vous devez renseigner un nombre")}),onSubmit:function(){s=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(r.metadata.is_cours?b:v)(j({},r,{metadata:j({},r.metadata,t)}));case 1:case"end":return e.stop()}},e)});var s,t=function(){var e=this,o=arguments;return new Promise(function(t,a){var r=s.apply(e,o);function n(e){_(r,t,a,n,i,"next",e)}function i(e){_(r,t,a,n,i,"throw",e)}n(void 0)})};return function(e){return t.apply(this,arguments)}}()},function(e){var t=e.errors,e=e.touched;return C.a.createElement(P.b,null,C.a.createElement(S.FormGroup,null,C.a.createElement(S.Col,{md:"12"},C.a.createElement(S.FormLabel,{htmlFor:"title"},"Titre"),C.a.createElement(P.a,{name:"title",type:"text",placeholder:"Titre",className:"we-form-control",invalid:t.title&&e.title}))),C.a.createElement("span",null,C.a.createElement("small",null,t.title)),r.metadata.is_cours&&C.a.createElement(S.FormGroup,null,C.a.createElement("br",null),C.a.createElement(S.FormLabel,{htmlFor:"title"},"Durée en min"),C.a.createElement(P.a,{name:"duration",type:"number",placeholder:"90",className:"we-form-control",invalid:t.duration&&e.duration}),t.duration),C.a.createElement("br",null),C.a.createElement(S.FormGroup,null,C.a.createElement(S.Col,{md:"12"},C.a.createElement(S.Button,{color:"primary",type:"submit",className:"we-btn-block"},"enregistrer"))))})))))))),0===r.metadata.id&&C.a.createElement("div",null,C.a.createElement(S.Button,{className:"we-btn-block",onClick:function(){return a()}},this.state.isLoading&&C.a.createElement("i",{className:"fa fa-spinner fa-spin"}),!this.state.isLoading&&C.a.createElement("span",null,C.a.createElement("i",{className:"fas fa-plus"})," Ajouter un chapitre")),C.a.createElement(E.Container,{orientation:"vertical",onDrop:this.onColumnDrop,dragHandleSelector:".column-drag-handle"},t.children.map(function(a,e){return C.a.createElement(E.Draggable,{key:e},C.a.createElement("div",{className:"we-row"},C.a.createElement("div",{className:"we-col-md-12"},C.a.createElement("div",{className:"we-card we-my-3 we-text-white"},C.a.createElement("div",{className:"we-card-body"},C.a.createElement("div",{className:a.props.className},C.a.createElement("div",{className:"card-column-header"},C.a.createElement("div",{className:"we-row"},C.a.createElement("div",{className:"we-col-12"},a.metadata.id!==r.metadata.id&&C.a.createElement("div",{style:{display:"inlineBlock"}},C.a.createElement("h6",{className:"we-card-title"},0===r.metadata.id&&C.a.createElement("span",{className:"column-drag-handle",style:{cursor:"grab"}},C.a.createElement("i",{className:"fal fa-arrows-alt"}))," ",a.metadata.title,C.a.createElement("div",{className:"we-text-end"},C.a.createElement(S.Button,{variant:"secondary",onClick:function(){return f(a)},title:"éditer le chapitre",className:"we-btn we-btn-sm "},C.a.createElement("i",{className:"fal fa-pencil-alt"})),C.a.createElement(S.Button,{variant:"secondary",onClick:function(){return l(a)},title:"visibilité du chapitre",className:"we-btn we-btn-sm "},a.metadata.visible&&C.a.createElement("i",{className:"fal fa-eye"}),!a.metadata.visible&&C.a.createElement("i",{className:"far fa-eye-slash"})),0===a.children.length&&C.a.createElement(S.Button,{variant:"secondary",onClick:function(){return d(a,e)},className:"we-btn we-btn-sm "},C.a.createElement("i",{className:"fal fa-trash-alt"}))))),a.metadata.id===r.metadata.id&&C.a.createElement("div",null)),C.a.createElement("div",{className:"we-col-3 we-text-right we-mt-0 we-mb-1"}))),C.a.createElement(E.Container,{groupName:"col",onDrop:function(e){return c(a.id,e)},getChildPayload:p(a.id),dragClass:"card-ghost",dropClass:"card-ghost-drop",onDragStart:function(e){return s(e)},dragHandleSelector:".cours-drag-handle",onDragEnd:function(e){return u(e)}},a.children.map(function(e,t){return C.a.createElement(E.Draggable,{key:t},C.a.createElement("div",{className:e.props.className},C.a.createElement("div",{className:"we-row"},C.a.createElement("div",{className:"we-col-12"},C.a.createElement("div",{className:"we-row"},C.a.createElement("div",{className:"we-m-0 we-px-4"}),e.metadata.id!==r.metadata.id&&C.a.createElement("div",{className:"we-col-12 we-px-4"},C.a.createElement("h6",{className:"we-card-title",style:{color:e.metadata.page_id===o?"#5757d9":"white"}},0===r.metadata.id&&C.a.createElement("span",{className:"cours-drag-handle",style:{cursor:"grab"}},C.a.createElement("i",{className:"fal fa-arrows-alt"}))," ",e.metadata.title),C.a.createElement("i",{className:"far fa-clock"})," "," ",e.metadata.duration,C.a.createElement("small",null," mn"),C.a.createElement("br",null)),e.metadata.id===r.metadata.id&&C.a.createElement("div",{className:"we-col-11"})),e.metadata.id!==r.metadata.id&&C.a.createElement("div",{className:"we-text-end"},C.a.createElement(S.Button,{variant:"secondary",onClick:function(){return f(e)},title:"éditer le titre et la durée du cours",className:"we-btn we-btn-sm "},C.a.createElement("i",{className:"fal fa-pencil-alt"})),C.a.createElement(S.Button,{variant:"secondary",onClick:function(){return h(e)},title:"modifier le contenu du cours",className:"we-btn we-btn-sm "},C.a.createElement("i",{className:"fal fa-file-alt"})),C.a.createElement(S.Button,{variant:"secondary",title:"permuter la visibilité du cours",onClick:function(){return l(e)},className:"we-btn we-btn-sm "},e.metadata.visible&&C.a.createElement("i",{className:"fal fa-eye"}),!e.metadata.visible&&C.a.createElement("i",{className:"far fa-eye-slash"})),C.a.createElement(S.Button,{variant:"secondary",title:"supprimer le cours",onClick:function(){return m(e,a,t)},className:"we-btn we-btn-sm "},C.a.createElement("i",{className:"fal fa-trash-alt"})),C.a.createElement("hr",null))),C.a.createElement("div",{className:"we-col-2 we-text-right we-mt-0 we-mb-1"}))))}),C.a.createElement("div",{className:"we-row "},n<i&&C.a.createElement("div",{className:"we-col-12"},C.a.createElement(S.Button,{onClick:function(){return g(a)},className:"we-btn we-btn-sm"}," ","+ Ajouter une leçon"," ")),i<=n&&C.a.createElement("div",{className:"we-col-12"},C.a.createElement(S.Button,{className:"we-btn-sm we-disabled"}," ","+ Ajouter une leçon"," "))))))))))}))))}}])&&b(t.prototype,e),a&&b(t,a),Object.defineProperty(t,"prototype",{writable:!1}),n}(C.a.Component);e.default=Object(a.connect)(function(e){return{sections:Object(w.E)(e),currentPageInEdit:Object(w.e)(e),currentProductInEdit:Object(w.g)(e),currentSiteInEdit:Object(w.i)(e)}},function(t){return{resetSommaire:function(e){t({type:B.md,id:e})}}})(t)}}]);