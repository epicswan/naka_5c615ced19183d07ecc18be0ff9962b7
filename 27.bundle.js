(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{343:function(e,t,n){"use strict";var r=n(0),i=n.n(r),c=n(6),a=n(9),l=n(298),s=n(297),o=n(8),u=n(11),m=n(49),f=(n(27),n(36),n(344),n(345),n(346)),r=n(30),p=n.n(r),d=n(53),h=n(7),r=n(12);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function v(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=c.apply(e,i);function a(e){b(r,t,n,a,o,"next",e)}function o(e){b(r,t,n,a,o,"throw",e)}a(void 0)})}}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})):r).forEach(function(e){N(t,e,n[e])})}return t}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=O(n);return e=r?(e=O(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==y(e)&&"function"!=typeof e?P(t):e}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=e.showModal,n=e.hideModal,r=e.confirmModal,a=e.id,o=e.type;return e.message,i.a.createElement(c.Modal,{centered:!0,dialogClassName:" small-modal-w we-m-auto",show:t,onHide:n},i.a.createElement(c.Modal.Header,{closeButton:!0},i.a.createElement(c.Modal.Title,null," Attention !")),i.a.createElement(c.Modal.Body,null,i.a.createElement("div",{className:"we-container we-pt-4"},"Voulez-vous vraiment supprimer cette page ?")),i.a.createElement(c.Modal.Footer,null,i.a.createElement(c.Button,{variant:"secondary",onClick:n,size:"sm"},"Annuler"),i.a.createElement(c.Button,{variant:"danger",size:"sm",onClick:function(){return r(o,a)}},"Supprimer")))}var j={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):""},headersPublic:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,i.a.Component);var e,t,n,r=_(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),N(P(t=r.call(this,e)),"deletePage",function(){Object(d.f)().apiPagesPageDelete(t.state.itemToDelete.id,j).call().then(function(e){t.props.onDelete&&t.props.onDelete(t.state.itemToDelete.id),t.setState({itemToDelete:null,displayConfirmationModal:!1,refreshCount:t.state.refreshCount+1})}).catch(function(e){})}),N(P(t),"deleteIntent",function(e){t.setState({itemToDelete:g({},e),displayConfirmationModal:!0},function(){})}),N(P(t),"savePage",function(e){Object(d.f)().apiPagesPagePatchPut({nom:e.nom},t.state.currentItemInEdit.id,j).call().then(function(e){t.setState({currentItemInEdit:{id:0}},function(){t.setState({refreshCount:t.state.refreshCount+1})})})}),N(P(t),"resetCurrentItem",function(){t.setState({currentItemInEdit:{id:0}})}),N(P(t),"editPage",function(e){e==t.state.currentItemInEdit?t.resetCurrentItem():t.setState({currentItemInEdit:e})}),t.state={currentItemInEdit:{id:0},displayConfirmationModal:!1,refreshCount:0},t}return e=a,(t=[{key:"getNotArchivedItems",value:function(e){var n=this,r=[];return e.forEach(function(e){var t=g({},e);t.archived||(t.children&&0<e.children.length&&(t.children=n.getNotArchivedItems(t.children)),r.push(t))}),r}},{key:"getAllPageNames",value:function(e){var r=this,a=[];return e.forEach(function(e){var t=g({},e),n=t.page;n&&a.push({id:n.id,title:t.title}),t.children&&0<e.children.length&&r.getAllPageNames(t.children).forEach(function(e){a.push(e)})}),a}},{key:"createPage",value:function(){for(var e=this.getAllPageNames(this.props.menuItems),t=this.props.pageTypeName,n=1,r=(new Date).getTime().toString(6),a=t+" "+(r=r.substring(r.length-7,r.length));e.find(function(e){return e.title==a});)a=t+" copie "+n,n++;this.setState({refreshCount:this.state.refreshCount+1}),this.props.addPageAction({nom:a,url:Object(u.y)(a),editor:"10",is_home:!1,is_error:!1,layout:null,module:this.props.module,module_page_type:this.props.modulePageType},history)}},{key:"render",value:function(){var o,n=this,e=this.props,e=(e.editorMode,e.pageType,{module:(o=v(regeneratorRuntime.mark(function e(t,n,r,a,o){var i,c,l,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=p.a._store.getEnv(),i=s.scheme,u=s.domain,l=s.subdomain,c=s.apiProd,s=s.domainApi,l=c?l:"api",s="".concat(i,"://").concat(l,".").concat(c?s:u).replace("__API__","platform"),u="".concat(s,"/api/sites/").concat(t,"/modules/").concat(n,"/pages?page=").concat(r,"&term="),"2"===n&&(u="".concat(s,"/api/sites/").concat(t,"/modules/").concat(n,"/pages?page=").concat(r,"&term=CGV")),e.next=7,axios(g({method:"get",url:u},o)).then(function(e){return g({},e.data,{items:e.data.items.filter(function(e){return!1===e.archived})})});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)})),function(e,t,n,r,a){return o.apply(this,arguments)})});return i.a.createElement("div",{className:" we-row we-justify-content-between we-m-auto we-text-white we-sidebar-nav we-pb-1"},i.a.createElement(C,{type:"page",showModal:this.state.displayConfirmationModal,confirmModal:this.deletePage,hideModal:function(){n.setState({displayConfirmationModal:!1})},message:""}),"2"!==this.props.module&&i.a.createElement(c.Button,{variant:"secondary",style:{textAlign:"start",pointerEvents:"auto"},className:"we-mb-2 we-btn-block",onClick:function(){n.createPage()}},i.a.createElement("i",{className:"fal fa-book we-mr-2"})," Créer une"," ",this.props.pageTypeName),0===this.state.currentItemInEdit.id&&i.a.createElement(f.a,{siteId:this.props.currentSite.id,module:this.props.module,refresh:this.state.refreshCount,tabLabel:"Hello",fetcher:e.module,customItem:function(e){return i.a.createElement("div",{className:"rst__node",style:{height:"62px",width:"100%"}},i.a.createElement("div",{className:"rst__lineBlock rst__lineHalfHorizontalRight rst__lineFullVertical",style:{width:"20px"}}),i.a.createElement("div",{className:"rst__nodeContent",style:{left:"20px"}},i.a.createElement("div",{className:"we-py-4 we-my-1 ",style:{cursor:"pointer"}},i.a.createElement("div",{className:"rst__rowWrapper"},i.a.createElement("div",{className:"rst__row",style:{opacity:"1"}},i.a.createElement("div",{className:"rst__rowContents"},i.a.createElement("div",{className:"rst__rowContainer"},i.a.createElement("div",{className:"rst__toolbar-name",onClick:function(){e.onClick(e.item),location.href="/editor/pages/".concat(n.props.pageType,"/")+e.item.id}},i.a.createElement("span",{title:"Équipe",className:"rst__rowTitlePage",style:{textOverflow:"ellipsis"}},i.a.createElement("i",{className:"fal fa-file we-pe-2"}),e.item.nom)),i.a.createElement("div",{className:"rst__toolbar-item"}),"2"!==e.module&&i.a.createElement("div",{className:"rst__toolbar-item"},i.a.createElement(c.Button,{variant:"secondary",onClick:function(){return n.editPage(e.item)},title:"éditer le chapitre",className:"we-btn we-btn-sm "},i.a.createElement("i",{className:"fal fa-pencil-alt"})),i.a.createElement(c.Button,{variant:"secondary",onClick:function(){return n.deleteIntent(e.item)},className:"we-btn we-btn-sm "},i.a.createElement("i",{className:"fal fa-trash-alt"}))))))))))},onClick:function(e){}}),1<this.state.currentItemInEdit.id&&i.a.createElement("div",null," ",i.a.createElement("div",{className:"we-col-md-12"},i.a.createElement("div",{className:"we-card we-my-3 we-text-white we-bg-dark"},i.a.createElement("div",{className:"we-card-body"},i.a.createElement("div",{className:"card-column-header"},i.a.createElement("div",{className:"we-row"},i.a.createElement("div",{className:"we-col-12"},i.a.createElement(l.c,{initialValues:{nom:this.state.currentItemInEdit.nom},validationSchema:s.b().shape({nom:s.c().min(3,"Trop court!").max(500,"Trop long!").required("Obligatoire")}),onSubmit:function(){var t=v(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.savePage(g({},t));case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()},function(e){var t=e.errors,e=e.touched;return i.a.createElement(l.b,null,i.a.createElement(c.FormGroup,null,i.a.createElement(c.Col,{md:"12"},i.a.createElement(c.FormLabel,{htmlFor:"nom"},"Nom"),i.a.createElement(l.a,{name:"nom",type:"text",placeholder:"Titre",className:"we-form-control",invalid:t.nom&&e.nom}))),i.a.createElement("span",null,i.a.createElement("small",null,t.title)),i.a.createElement("br",null),i.a.createElement(c.FormGroup,null,i.a.createElement(c.Col,{md:"12"},i.a.createElement(c.Button,{color:"primary",type:"submit",className:"we-btn-block"},"enregistrer"))))})))))))))}}])&&w(e.prototype,t),n&&w(e,n),a}();t.a=Object(a.connect)(function(e){return{currentSite:e.sites.currentSiteInEdit,currentPage:Object(h.e)(e),plan:Object(h.g)(e),siteId:Object(h.j)(e).id,shopId:Object(h.I)(e),menuItems:Object(h.C)(e)}},{showBureau:o.r,showDesignMenu:m.d,resetSidebarNavigation:o.i,addPageAction:r.b})(n)},960:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(9),c=n(343),a=n(1),l=n(302);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p(n);return e=r?(e=p(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==s(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,o["Component"]);var e,t,n,r=f(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r.call(this,e)}return e=a,(t=[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement(c.a,{pageType:"modal",pageTypeName:"Popup",module:"7",modulePageType:"modal",onDelete:function(e){return t.props.deleteModal(e)}}),i.a.createElement(l.a,null))}}])&&u(e.prototype,t),n&&u(e,n),a}();t.default=Object(r.connect)(function(e){return{}},{deleteModal:function(e){return{type:a.R,payload:{id:e}}}})(n)}}]);