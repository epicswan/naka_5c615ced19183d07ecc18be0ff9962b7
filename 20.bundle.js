(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{416:function(e,t,r){"use strict";r.r(t);var o=r(0),p=r.n(o),n=r(28),a=r.n(n),i=r(637),s=r.n(i),f=r(53),c=r(415),d=r.n(c),l=r(51),g=r(38);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=["blocks","toggleSidebar","selectedItem","viewMode","onManageModule","prefixCss","styleContainerCards"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):n).forEach(function(e){v(t,e,r[e])})}return t}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=S(r);return e=n?(e=S(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==u(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=a.a._css,O=a.a._Background,_=(Object(l.a)(),function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,o["Component"]);var e,t,r,n=w(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=n.call(this,e)).state={product:{titre:""},isShown:!1,progress:e.props.progressPercentage,inLoading:!1,cursusTree:e.props.cursusTree},e}return e=a,(t=[{key:"_onAction",value:function(e){"edit"===this.props.mode&&(e.params&&"img"===e.params.type||this.props.onAction(e))}},{key:"setIsShown",value:function(e){this.setState({isShown:e})}},{key:"componentWillReceiveProps",value:function(e){e.cursusTree!==this.props.cursusTree&&this.setState(b({isLogged:!0,inLoading:!1},e)),e.progressPercentage!==this.props.progressPercentage&&this.setState(b({isLogged:!0,inLoading:!1},e)),e.selectedItem!==this.props.selectedItem&&this.setState(b({isLogged:!0,inLoading:!1},e))}},{key:"render",value:function(){var e=this.state,t=e.progressPercentage,r=(e.mode,e.product),n=this.props,a=n.blocks,o=(n.toggleSidebar,n.selectedItem),i=n.viewMode,s=(n.onManageModule,n.prefixCss),c=n.styleContainerCards,l=y(n,m),u=a,e={},n=((u=a||[]).find(function(e){return"stitle"===e.name})||{stitle:null}).stitle,a=u.find(function(e){return"card"===e.name}),e="sommaire"!=i?{width:"100%",height:"100%"}:{padding:"1.25rem",width:"100%"},u={},u=window&&window.__METADATA.SIDEBAR_STYLE?{bgData:b({},window.__METADATA.SIDEBAR_STYLE.bg),bgFor:"card"}:{bgData:b({},a.bg,{styleWrapper:e}),bgFor:"card"};this._onAction.bind(this);return"sommaire"!=i?p.a.createElement("div",{id:"sidebar-wrapper"},p.a.createElement(g.a,null," ",p.a.createElement(O,h({},u,{style:{height:"100%"}}),p.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none",padding:"15px"}},0<t==1&&p.a.createElement("li",{className:"sidebar-brand"},p.a.createElement("div",{className:"progress mx-1",style:{height:"20px"}},p.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:t+"%"},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}))),0<t==1&&p.a.createElement("li",{className:"sidebar-brand"},p.a.createElement("div",{style:{lineHeight:"40px"},className:"text-center"},p.a.createElement("b",{className:"text-primary"},t,"%")," complet"))),p.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none",paddingLeft:"0px",paddingRight:"0px",overflowX:"hidden",overflowY:"auto",height:"calc( 100vh - 100px )"}},!this.state.inLoading&&this.state.cursusTree.map(function(e,t){return e.is_chapitre?p.a.createElement("li",{style:{textIndent:"10px",margin:"10px"},key:t}," ",e.title,"  "):e.page&&e.page.nom?p.a.createElement("li",{key:t,style:{textIndent:"10px",lineHeight:"40px",padding:"5px"},className:o.page&&e.page.id==o.page.id?"active":""},p.a.createElement(f.b,{to:"/"+e.page.url},e.finish?p.a.createElement("i",{className:"far fa-check-square"}," ",p.a.createElement("del",null,e.title)):p.a.createElement("i",{className:"far fa-square"}," ",e.title,"  "))):p.a.createElement("li",{key:t}," Page introuvable ou supprimée ")}),p.a.createElement("li",null,"   "),p.a.createElement("li",null,"   "))))):p.a.createElement(g.a,null," ",p.a.createElement(d.a,h({title:"Titre de la Formation",stitle:n},l),p.a.createElement("div",null,p.a.createElement("div",v({className:x(s,"d-flex flex-row justify-content-center"),style:c},"style",{width:"100%"}),p.a.createElement("div",{className:"card-body border-0 card-shadow p-0"},p.a.createElement(O,u,p.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none"}},p.a.createElement("li",{className:"sidebar-brand",style:{fontSize:"18px",lineHeight:"60px"}},p.a.createElement("h1",null,r.titre)),0<t==1&&p.a.createElement("li",{className:"sidebar-brand"},p.a.createElement("div",{className:"progress mx-1",style:{height:"20px"}},p.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:t+"%"},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}))),0<t==1&&p.a.createElement("li",{className:"sidebar-brand"},p.a.createElement("div",{style:{lineHeight:"40px"},className:"text-center"},p.a.createElement("b",{className:"text-primary"},t,"%")," complet")),!this.state.inLoading&&this.state.cursusTree.map(function(e,t){return e.is_chapitre?p.a.createElement("li",{style:{textIndent:"20px",lineHeight:"40px"},key:t}," ",e.title,"  "):e.page&&e.page.nom?p.a.createElement("li",{style:{textIndent:"20px",lineHeight:"40px"},key:t,className:o.page&&e.page.id==o.page.id?"active":""},p.a.createElement("a",{href:"/"+e.page.url,style:{display:"block",textDecoration:"none"}},e.finish?p.a.createElement("i",{className:"far fa-check-square"}," ",p.a.createElement("del",null,e.title)):p.a.createElement("i",{className:"far fa-square"}," ",e.title," - ",e.duration," min"))):p.a.createElement("li",{key:t}," Page introuvable ou supprimée ")}))))))))}}])&&P(e.prototype,t),r&&P(e,r),a}());function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=N(r);return e=n?(e=N(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==k(e)&&"function"!=typeof e?C(t):e}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.a._loadScript,a.a._loadScript;var L=a.a._store.getEnv(),n=L.scheme,i=L.domain,c=L.subdomain,r=L.apiProd,a=L.domainApi,L=r?c:"formation",B="".concat(n,"://").concat(L,".").concat(r?a:i).replace("__API__","formation"),L=r?c:"membership",R="".concat(n,"://").concat(L,".").concat(r?a:i).replace("__API__","membership"),c=r?c:"api",F="".concat(n,"://").concat(c,".").concat(r?a:i).replace("__API__","platform"),l=(s.a.CancelToken,s.a.defaults.headers.common.Authorization,Object(l.a)(),function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,o["Component"]);var e,t,r,n=A(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=n.call(this,e)).state={inLoading:!0,isFullyProtected:!0,product:window.__METADATA.product_props,isAuthorized:!1,isUserLoggedIn:!1,progressPercentage:null,sidebarVisibility:!0,selectedItem:{},userProgress:null,cursusTree:[],isLogged:!(!localStorage||!localStorage.getItem("currentUser")),containers:[]},e.onPageChange=e.onPageChange.bind(C(e)),e.toggleSidebar=e.toggleSidebar.bind(C(e)),e.BtnPagination=e.BtnPagination.bind(C(e)),e}return e=a,(t=[{key:"findPage",value:function(t,e){return e.find(function(e){return e.id==t})||{}}},{key:"compareOrdre",value:function(e,t){return e.ordre<t.ordre?-1:e.ordre>t.ordre?1:0}},{key:"buildTreeStructure",value:function(r,e,t){var n=this,a=new Array,o=this;return Array.isArray(e.items)&&(e.items[0].children.sort(this.compareOrdre),e.items[0].children.forEach(function(t){t.visible&&(a.push(t),t.children.sort(n.compareOrdre),t.children.forEach(function(e){e.is_cours&&e.visible&&(e.page=o.findPage(e.page_id,r),delete(parent=t).children,e.parent=parent,a.push(e))}))})),a}},{key:"updateUserStats",value:function(){if("edit"!==this.props.mode){var e=this.state.product.formationId,n=R+"/api/formations/"+e+"/stats/mes",a=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"",o=this.state.userProgress;return new Promise(function(t,r){s.a.post(n,{data:o},{headers:{"Content-Type":"application/json",Authorization:a}}).then(function(e){t(e.data)}).catch(function(e){r()})})}}},{key:"getUserStats",value:function(){var r={formation_id:void 0,pages:[{id:0,status:!0}]};if("edit"===this.props.mode)return this.setState({progressPercentage:15}),r;var e=this.state.product.formationId,n=R+"/api/formations/"+e+"/stats/me",a=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"",o=this;return new Promise(function(t,e){s.a.get(n,{headers:{"Content-Type":"application/json",Authorization:a}}).then(function(e){o.setState({isUserLoggedIn:!0}),t(e.data)}).catch(function(e){t(r),o.setState({isUserLoggedIn:!1})})})}},{key:"getFormationCursusTree",value:function(){var e=this.state.product.formationId,n=B+"/public/formations/"+e+"/cursusitems";return new Promise(function(t,r){s.a.get(n,{headers:{"Content-Type":"application/json"}}).then(function(e){t(e.data)}).catch(function(e){r()})})}},{key:"computeProgressPercentage",value:function(){var e=this.state.cursusTree,t=0,r=0;e.forEach(function(e){e.page&&e.page_id&&(r++,e.finish&&t++)});e=Math.round(t/r*100);this.setState({progressPercentage:e}),this.updateUserStats()}},{key:"readProgression",value:function(){var e=this,t=this.state.cursusTree,r=this.state.userProgress,n=0;t.forEach(function(t){t.page&&t.page.id&&("edit"===e.props.mode?n<2&&(t.finish=!0,n++):r.pages.find(function(e){return e.id===t.page.id})&&(t.finish=!0))}),this.setState({cursusTree:t},this.computeProgressPercentage)}},{key:"updateProgression",value:function(e,t){var r=this.state.cursusTree,n=this.state.userProgress,a=!1,o=!e;n.pages.forEach(function(e){e.id==t.page.id&&(a=!0,e.status=o)}),r.forEach(function(e){e.page&&e.page_id==t.page.id&&(e.finish=o)}),a||n.pages.push({id:t.page.id,status:o}),this.setState({userProgress:n,cursusTree:r},this.computeProgressPercentage)}},{key:"validCours",value:function(e,t){this.updateProgression(e,t);this.getPaginationItems(t).next}},{key:"toggleSidebar",value:function(){this.setState({sidebarVisibility:!this.state.sidebarVisibility})}},{key:"getPaginationItems",value:function(e){var t=[];this.state.cursusTree.forEach(function(e){e.is_cours&&t.push(e)});var r=t.indexOf(e);if(-1!==r){var n=(r+1)%t.length,e=(r-1)%t.length,r=t[n];return{prev:t[e],next:r=n<e?null:r}}}},{key:"BtnPagination",value:function(e){var t,r,n=this.getPaginationItems(e),a=n.prev,e=n.next,n={textOverflow:"ellipsis",width:"100%",overflow:"hidden",whiteSpace:"nowrap",display:"inline-block"};return[t=void 0!==a&&a?p.a.createElement(f.b,{key:"prevFooter",className:"btn btn-outline-primary btn-lg  col-6 float-left",to:"/"+a.page.url},p.a.createElement("span",{style:n}," ",a.title)):t,r=void 0!==e&&e?p.a.createElement(f.b,{key:"nextFooter",className:"btn btn-outline-primary btn-lg  col-6 "+(a?"":"offset-6"),to:"/"+e.page.url},p.a.createElement("span",{style:n}," ",e.title)):r]}},{key:"getFormationPages",value:function(){var e=this.state.product.id,n=F+"/public/modules/5/pages/"+e;return new Promise(function(t,r){s.a.get(n,{headers:{"Content-Type":"application/json"}}).then(function(e){t(e.data)}).catch(function(e){r()})})}},{key:"onPageChange",value:function(e){}},{key:"componentDidUpdate",value:function(e,t){var r,n,a=this;e.refresh!==this.props.refresh&&(r=this.getFormationCursusTree(),n=this.getFormationPages(),e=this.getUserStats(),Promise.all([r,n,e]).then(function(e){a.setState({isLogged:!0,inLoading:!1,userProgress:e[2],cursusTree:a.buildTreeStructure(e[1],e[0],null)},a.readProgression)}))}},{key:"componentDidMount",value:function(){var t=this,e=this.getFormationCursusTree(),r=this.getFormationPages(),n=this.getUserStats();Promise.all([e,r,n]).then(function(e){t.setState({isLogged:!0,inLoading:!1,userProgress:e[2],cursusTree:t.buildTreeStructure(e[1],e[0],null)},t.readProgression)})}},{key:"render",value:function(){var e=this.state,t=e.cursusTree,r=e.selectedItem,n=(e.userProgress,e.progressPercentage),e=e.product;if("sommaire"===this.props.viewMode)return p.a.createElement("div",null,p.a.createElement(_,T({viewMode:"sommaire",cursusTree:t,product:e,selectedItem:r},this.props,{onAction:this.props.onAction,toggleSidebar:this.toggleSidebar,progressPercentage:n})))}}])&&I(e.prototype,t),r&&I(e,r),a}());l.defaultProps={onLoaded:function(e){},onAction:function(e){},estFormation:!0,formationMembershipId:137,formationId:73,produitId:10356,blocks:[{name:"title",title:{txt:'<h1 style="text-align:center;">COOL</h1>',class:"w-100",visible:!1}},{name:"card",item:{img:{path:"https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-0.3.5&s=633d2630af9e99997590147b28b6656e&auto=format&fit=crop&w=1346&q=30",class:"w-100 img-fluid"},visible:!0,tpl:"img"},class:"",border:!1,txt:{txt:'<p><span style="color: rgb(0,0,0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna neque, vitae elementum magna facilisis non. Mauris sodales elit ac consequat mollis. Cras ultrices ex nec leo eleifend, eget hendrerit tortor condimentum.</span></p>\n',class:"",visible:!0},ctas:[{name:"cta",type:"primary",class:"btn-primary",link:"",txt:"Bouton",visible:!0},{name:"cta",type:"secondary",class:"btn-secondary",link:"",txt:"Bouton",visible:!1}],bg:{class:"",type:"color",overlay:"gradient",gradient:{angle:"180deg",hex:"transparent",hex2:"#4a90e2",opacity:0,opacity2:.5}}}],containerCss:"container",prefixCss:"",sectionCss:"",bg:{class:"",img:{path:"",class:""},gradient:{angle:"0deg",hex:"#21d4fd",hex2:"#b721ff",opacity:1,opacity2:.8},color:{hex:"#d4f1ff"},opacity:1,type:"color",overlay:"color"},tpl:"Card2",cardsInRow:1,uid:"23E4B9EE-6680-480F-9F7F-E1A22765BDEB",c__Id:365791,mode:"view",viewMode:"fullpage"};t.default=l}}]);