(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{715:function(e,t,n){"use strict";var r=n(0),i=n.n(r),c=n(5),a=n(6),l=n(473),u=n(471),o=n(9),s=n(10),f=n(78),m=(n(26),n(30)),p=n(8),d=n(13);n(51),n(18),n(206);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(a);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})):t).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=w(n);return e=r?(e=w(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==h(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,i.a.Component);var e,t,n,r=v(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this,e)).state={isEditing:!1,inputValue:"",isInputValid:!1,editingType:null,link:""},e}return e=a,(t=[{key:"getNotArchivedItems",value:function(e){var n=this,r=[];return e.forEach(function(e){var t=y({},e);t.archived||(t.children&&0<e.children.length&&(t.children=n.getNotArchivedItems(t.children)),r.push(t))}),r}},{key:"getAllPageNames",value:function(e){var r=this,a=[];return e.forEach(function(e){var t=y({},e),n=t.page;n&&a.push({id:n.id,title:t.title}),t.children&&0<e.children.length&&r.getAllPageNames(t.children).forEach(function(e){a.push(e)})}),a}},{key:"createPage",value:function(){for(var e=this.getAllPageNames(this.props.menuItems),t=1,n=(new Date).getTime().toString(6),r="Page "+(n=n.substring(n.length-7,n.length));e.find(function(e){return e.title==r});)r="Page copie "+t,t++;this.props.addPageAction({nom:r,url:Object(s.y)(r),editor:"10",is_home:!1,is_error:!1,layout:null,module:4,module_page_type:"landing"},history)}},{key:"setInputValue",value:function(e){var t=0<e.length;this.setState(y({},this.state,{inputValue:e,isInputValid:t}))}},{key:"render",value:function(){var e=this,t=this.state;t.isEditing,t.inputValue,t.editingType,t.newOnglet,t.link,t.isInputValid,this.props.menuItems.filter(function(e){return"page"===e.type}).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{content:"Ajouter une nouvelle page"},i.a.createElement(c.Button,{variant:"secondary",style:{textAlign:"start",pointerEvents:"auto"},className:"we-mb-2 we-btn-block ".concat(""),onClick:function(){e.createPage()}},i.a.createElement("i",{className:"fal fa-book we-mr-2"})," Créer un funnel")))}}])&&b(e.prototype,t),n&&b(e,n),a}();Object(a.connect)(function(e){return{plan:Object(p.h)(e),siteId:Object(p.k)(e).id,shopId:Object(p.N)(e),menuItems:Object(p.G)(e)}},{toggleVisibilityMenuitemAction:d.i,wantSelectFileAction:o.B,setMediaIntent:o.o,addMenuitemAction:d.a,addPageAction:d.b,getPageAction:d.d})(r);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},t=Object.keys(a);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})):t).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e})}return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=_(n);return e=r?(e=_(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==E(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,i.a.Component);var e,t,n,r=S(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this,e)).state={isEditing:!1,inputValue:"",isInputValid:!1,editingType:null,link:""},e}return e=a,(t=[{key:"getNotArchivedItems",value:function(e){var n=this,r=[];return e.forEach(function(e){var t=O({},e);t.archived||(t.children&&0<e.children.length&&(t.children=n.getNotArchivedItems(t.children)),r.push(t))}),r}},{key:"getAllPageNames",value:function(e){var r=this,a=[];return e.forEach(function(e){var t=O({},e),n=t.page;n&&a.push({id:n.id,title:t.title}),t.children&&0<e.children.length&&r.getAllPageNames(t.children).forEach(function(e){a.push(e)})}),a}},{key:"createPage",value:function(){for(var e=this.getAllPageNames(this.props.menuItems),t="Landing",n=1,r=(new Date).getTime().toString(6),a=t+" "+(r=r.substring(r.length-7,r.length));e.find(function(e){return e.title==a});)a=t+" copie "+n,n++;this.props.addPageAction({nom:a,url:Object(s.y)(a),editor:"10",is_home:!1,is_error:!1,layout:null,module:4,module_page_type:"landing"},history)}},{key:"setInputValue",value:function(e){var t=0<e.length;this.setState(O({},this.state,{inputValue:e,isInputValid:t}))}},{key:"render",value:function(){var e=this,t=this.state;t.isEditing,t.inputValue,t.editingType,t.newOnglet,t.link,t.isInputValid,this.props.menuItems.filter(function(e){return"page"===e.type}).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{content:"Ajouter une nouvelle page"},i.a.createElement(c.Button,{variant:"secondary",style:{textAlign:"start",pointerEvents:"auto"},className:"we-mb-2 we-btn-block ".concat(""),onClick:function(){e.createPage()}},i.a.createElement("i",{className:"fal fa-book we-mr-2"})," Créer une Landing Page")))}}])&&j(e.prototype,t),n&&j(e,n),a}(),I=(Object(a.connect)(function(e){return{plan:Object(p.h)(e),siteId:Object(p.k)(e).id,shopId:Object(p.N)(e),menuItems:Object(p.G)(e)}},{toggleVisibilityMenuitemAction:d.i,wantSelectFileAction:o.B,setMediaIntent:o.o,addMenuitemAction:d.a,addPageAction:d.b,getPageAction:d.d})(r),n(563)),N=(n(16),n(62));n(14);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function A(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=c.apply(e,i);function a(e){C(r,t,n,a,o,"next",e)}function o(e){C(r,t,n,a,o,"throw",e)}a(void 0)})}}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})):r).forEach(function(e){F(t,e,n[e])})}return t}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=V(n);return e=r?(e=V(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==k(e)&&"function"!=typeof e?x(t):e}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=e.showModal,n=e.hideModal,r=e.confirmModal,a=e.id,o=e.type;return e.message,i.a.createElement(c.Modal,{centered:!0,dialogClassName:" small-modal-w we-m-auto",show:t,onHide:n},i.a.createElement(c.Modal.Header,{closeButton:!0},i.a.createElement(c.Modal.Title,null," Attention !")),i.a.createElement(c.Modal.Body,null,i.a.createElement("div",{className:"we-container we-pt-4"},"Voulez-vous vraiment supprimer ce funnel ?")),i.a.createElement(c.Modal.Footer,null,i.a.createElement(c.Button,{variant:"secondary",onClick:n,size:"sm"},"Annuler"),i.a.createElement(c.Button,{variant:"danger",size:"sm",onClick:function(){return r(o,a)}},"Supprimer")))}var G={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):""},headersPublic:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,i.a.Component);var e,t,n,r=B(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),F(x(t=r.call(this,e)),"deletePage",function(){Object(N.h)().apiSitesSlugMenusMenuDelete(t.props.currentSite.id,t.state.itemToDelete.id,G).call().then(function(e){t.setState({itemToDelete:null,displayConfirmationModal:!1,refreshCount:t.state.refreshCount+1},function(){})})}),F(x(t),"deleteIntent",function(e){t.setState({itemToDelete:M({},e),displayConfirmationModal:!0},function(){})}),F(x(t),"savePage",function(e){alert("Creer route dans API qui permette la creation de la page"),Object(N.h)().apiSitesSlugMenusMenuPut({name:e.name},t.props.currentSite.id,t.state.currentItemInEdit.id,G).call().then(function(e){t.setState({currentItemInEdit:{id:0}},function(){t.setState({refreshCount:t.state.refreshCount+1})})})}),F(x(t),"resetCurrentItem",function(){t.setState({currentItemInEdit:{id:0}})}),F(x(t),"editPage",function(e){e==t.state.currentItemInEdit?t.resetCurrentItem():t.setState({currentItemInEdit:e})}),t.state={currentItemInEdit:{id:0},displayConfirmationModal:!1,refreshCount:0},t}return e=a,(t=[{key:"getNotArchivedItems",value:function(e){var n=this,r=[];return e.forEach(function(e){var t=M({},e);t.archived||(t.children&&0<e.children.length&&(t.children=n.getNotArchivedItems(t.children)),r.push(t))}),r}},{key:"getAllPageNames",value:function(e){var r=this,a=[];return e.forEach(function(e){var t=M({},e),n=t.page;n&&a.push({id:n.id,title:t.title}),t.children&&0<e.children.length&&r.getAllPageNames(t.children).forEach(function(e){a.push(e)})}),a}},{key:"createFunnel",value:function(){var n=this,e=(new Date).getTime().toString(6),e={name:"Funnel "+(e=e.substring(e.length-7,e.length))};Object(N.h)().apiSitesSlugMenusPost(e,this.props.currentSite.id,G).call().then(function(t){var e=(new Date).getTime().toString(6),e="Landing "+(e=e.substring(e.length-7,e.length)),e={nom:e,url:Object(s.y)(e),editor:"10",is_home:!1,is_error:!1,layout:null,module:6,module_page_type:"funnel"};Object(N.h)().apiSitesSitePagesPost(e,n.props.currentSite.id,G).call().then(function(e){e={title:e.nom,target:null,visible:!0,url:e.url,type:"page",page:e.id,parent:null};Object(N.c)().apiMenusSlugItemsPost(e,t.id,G).call().then(function(e){n.setState({refreshCount:n.state.refreshCount+1},function(){})})})})}},{key:"render",value:function(){var o,n=this,e=(this.props.editorMode,{module:(o=A(regeneratorRuntime.mark(function e(t,n,r,a,o){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.h)().apiSitesSlugMenusGet(t,o).call().then(function(e){return{items:e.filter(function(e){return"Menu Big Mac"!==e.name})}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),function(e,t,n,r,a){return o.apply(this,arguments)})});return i.a.createElement("div",{className:" we-row we-justify-content-between we-m-auto we-text-white we-sidebar-nav we-pb-1"},i.a.createElement(D,{type:"page",showModal:this.state.displayConfirmationModal,confirmModal:this.deletePage,hideModal:function(){n.setState({displayConfirmationModal:!1})},message:""}),i.a.createElement(c.Button,{variant:"secondary",style:{textAlign:"start",pointerEvents:"auto"},className:"we-mb-2 we-btn-block",onClick:function(){n.createFunnel()}},i.a.createElement("i",{className:"fal fa-book we-mr-2"})," Créer un Funnel"),i.a.createElement("div",null,0===this.state.currentItemInEdit.id&&i.a.createElement(I.a,{siteId:this.props.currentSite.id,module:4,refresh:this.state.refreshCount,tabLabel:"Hello",fetcher:e.module,customItem:function(t){return i.a.createElement("div",{className:"rst__node",style:{height:"62px",width:"100%"}},i.a.createElement("div",{className:"rst__lineBlock rst__lineHalfHorizontalRight rst__lineFullVertical",style:{width:"20px"}}),i.a.createElement("div",{className:"rst__nodeContent",style:{left:"20px"}},i.a.createElement("div",{className:"we-py-4 we-my-1 ",style:{cursor:"pointer"}},i.a.createElement("div",{className:"rst__rowWrapper"},i.a.createElement("div",{className:"rst__row",style:{opacity:"1"}},i.a.createElement("div",{className:"rst__rowContents"},i.a.createElement("div",{className:"rst__rowContainer"},i.a.createElement("div",{className:"rst__toolbar-name",onClick:function(){t.onClick(t.item),Object(N.c)().apiMenusSlugItemsGet(t.item.id,1,null,G).call().then(function(e){0<e.items.length&&(location.href="/editor/funnel/"+t.item.id+"/pages/"+e.items[0].page.id)})}},i.a.createElement("span",{title:"Équipe",className:"rst__rowTitlePage",style:{textOverflow:"ellipsis"}},i.a.createElement("i",{className:"fal fa-file we-pe-2"}),t.item.name)),i.a.createElement("div",{className:"rst__toolbar-item"}),i.a.createElement("div",{className:"rst__toolbar-item"},i.a.createElement(c.Button,{variant:"secondary",onClick:function(){return n.editPage(t.item)},title:"éditer le chapitre",className:"we-btn we-btn-sm "},i.a.createElement("i",{className:"fal fa-pencil-alt"})),i.a.createElement(c.Button,{variant:"secondary",onClick:function(){return n.deleteIntent(t.item)},className:"we-btn we-btn-sm "},i.a.createElement("i",{className:"fal fa-trash-alt"}))))))))))},onClick:function(e){}}),1<this.state.currentItemInEdit.id&&i.a.createElement("div",null," ",i.a.createElement("div",{className:"we-col-md-12"},i.a.createElement("div",{className:"we-card we-my-3 we-text-white we-bg-dark"},i.a.createElement("div",{className:"we-card-body"},i.a.createElement("div",{className:"card-column-header"},i.a.createElement("div",{className:"we-row"},i.a.createElement("div",{className:"we-col-12"},i.a.createElement(l.c,{initialValues:{name:this.state.currentItemInEdit.name},validationSchema:u.b().shape({name:u.c().min(3,"Trop court!").max(500,"Trop long!").required("Obligatoire")}),onSubmit:function(){var t=A(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.savePage(M({},t));case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()},function(e){var t=e.errors,e=e.touched;return i.a.createElement(l.b,null,i.a.createElement(c.FormGroup,null,i.a.createElement(c.Col,{md:"12"},i.a.createElement(c.FormLabel,{htmlFor:"name"},"Nom"),i.a.createElement(l.a,{name:"name",type:"text",placeholder:"Titre",className:"we-form-control",invalid:t.name&&e.name}))),i.a.createElement("span",null,i.a.createElement("small",null,t.name)),i.a.createElement("br",null),i.a.createElement(c.FormGroup,null,i.a.createElement(c.Col,{md:"12"},i.a.createElement(c.Button,{color:"primary",type:"submit",className:"we-btn-block"},"enregistrer"))))}))))))))))}}])&&T(e.prototype,t),n&&T(e,n),a}();t.a=Object(a.connect)(function(e){return{currentSite:e.sites.currentSiteInEdit,currentPage:Object(p.f)(e),plan:Object(p.h)(e),siteId:Object(p.k)(e).id,shopId:Object(p.N)(e),menuItems:Object(p.G)(e)}},{showBureau:o.r,showDesignMenu:f.d,resetSidebarNavigation:o.i,addPageAction:d.b})(n)}}]);