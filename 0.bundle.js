(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{953:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),i=r.n(o),s=r(27),c=r.n(s),l=r(60),u=r(33),p=r(74);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=["blocks","toggleSidebar","selectedItem","viewMode","onManageModule","prefixCss","styleContainerCards"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=i.a._css,S=i.a._Background,O=(Object(p.a)(),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,r,n,o=E(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={product:{titre:""},isShown:!1,progress:t.props.progressPercentage,inLoading:!1,cursusTree:t.props.cursusTree},t}return t=i,(r=[{key:"_onAction",value:function(e){"edit"===this.props.mode&&(e.params&&"img"===e.params.type||this.props.onAction(e))}},{key:"setIsShown",value:function(e){this.setState({isShown:e})}},{key:"componentWillReceiveProps",value:function(e){e.cursusTree!==this.props.cursusTree&&this.setState(h({isLogged:!0,inLoading:!1},e)),e.progressPercentage!==this.props.progressPercentage&&this.setState(h({isLogged:!0,inLoading:!1},e)),e.selectedItem!==this.props.selectedItem&&this.setState(h({isLogged:!0,inLoading:!1},e))}},{key:"render",value:function(){var e=this.state,t=e.progressPercentage,r=(e.mode,e.product),n=this.props,o=n.blocks,i=(n.toggleSidebar,n.selectedItem),s=n.viewMode,c=(n.onManageModule,n.prefixCss),p=n.styleContainerCards,f=g(n,d),b=o;b||(b=[]);var v={},E=(b.find((function(e){return"stitle"===e.name}))||{stitle:null}).stitle,P=b.find((function(e){return"card"===e.name}));v="sommaire"!=s?{width:"100%",height:"100%"}:{padding:"1.25rem",width:"100%"};var w={};return w=window&&window.__METADATA.SIDEBAR_STYLE?{bgData:h({},window.__METADATA.SIDEBAR_STYLE.bg),bgFor:"card"}:{bgData:h({},P.bg,{styleWrapper:v}),bgFor:"card"},this._onAction.bind(this),console.log("BackGround Props : ",w),"sommaire"!=s?a.a.createElement("div",{id:"sidebar-wrapper"},a.a.createElement(S,m({},w,{style:{height:"100%"}}),a.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none",padding:"15px"}},t>0==1&&a.a.createElement("li",{className:"sidebar-brand"},a.a.createElement("div",{className:"progress mx-1",style:{height:"20px"}},a.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:t+"%"},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}))),t>0==1&&a.a.createElement("li",{className:"sidebar-brand"},a.a.createElement("div",{style:{lineHeight:"40px"},className:"text-center"},a.a.createElement("b",{className:"text-primary"},t,"%")," complet"))),a.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none",paddingLeft:"0px",paddingRight:"0px",overflowX:"hidden",overflowY:"auto",height:"calc( 100vh - 100px )"}},!this.state.inLoading&&this.state.cursusTree.map((function(e,t){return e.is_chapitre?a.a.createElement("li",{style:{textIndent:"10px",margin:"10px"},key:t}," ",e.title,"  "):e.page&&e.page.nom?a.a.createElement("li",{key:t,style:{textIndent:"10px",lineHeight:"40px",padding:"5px"},className:i.page&&e.page.id==i.page.id?"active":""},a.a.createElement(l.b,{to:"/"+e.page.url},e.finish?a.a.createElement("i",{className:"far fa-check-square"}," ",a.a.createElement("del",null,e.title)):a.a.createElement("i",{className:"far fa-square"}," ",e.title,"  "))):a.a.createElement("li",{key:t}," Page introuvable ou supprimée ")})),a.a.createElement("li",null,"   "),a.a.createElement("li",null,"   ")))):a.a.createElement(u.a,m({title:"Titre de la Formation",stitle:E},f),a.a.createElement("div",null,a.a.createElement("div",y({className:x(c,"d-flex flex-row justify-content-center"),style:p},"style",{width:"100%"}),a.a.createElement("div",{className:"card-body border-0 card-shadow p-0"},a.a.createElement(S,w,a.a.createElement("ul",{className:"sidebar-nav",style:{listStyle:"none"}},a.a.createElement("li",{className:"sidebar-brand",style:{fontSize:"18px",lineHeight:"60px"}},a.a.createElement("h1",null,r.titre)),t>0==1&&a.a.createElement("li",{className:"sidebar-brand"},a.a.createElement("div",{className:"progress mx-1",style:{height:"20px"}},a.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:t+"%"},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}))),t>0==1&&a.a.createElement("li",{className:"sidebar-brand"},a.a.createElement("div",{style:{lineHeight:"40px"},className:"text-center"},a.a.createElement("b",{className:"text-primary"},t,"%")," complet")),!this.state.inLoading&&this.state.cursusTree.map((function(e,t){return e.is_chapitre?a.a.createElement("li",{style:{textIndent:"20px",lineHeight:"40px"},key:t}," ",e.title,"  "):e.page&&e.page.nom?a.a.createElement("li",{style:{textIndent:"20px",lineHeight:"40px"},key:t,className:i.page&&e.page.id==i.page.id?"active":""},a.a.createElement("a",{href:"/"+e.page.url,style:{display:"block",textDecoration:"none"}},e.finish?a.a.createElement("i",{className:"far fa-check-square"}," ",a.a.createElement("del",null,e.title)):a.a.createElement("i",{className:"far fa-square"}," ",e.title," - ",e.duration," min"))):a.a.createElement("li",{key:t}," Page introuvable ou supprimée ")}))))))))}}])&&b(t.prototype,r),n&&b(t,n),i}(n.Component));function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=N(e);if(t){var a=N(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return A(this,r)}}function A(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i.a._loadScript,i.a._loadScript;var L=i.a._store.getEnv(),B=L.scheme,R=L.domain,M=L.subdomain,F=L.apiProd,U=L.domainApi,D=F?M:"formation",q="".concat(B,"://").concat(D,".").concat(F?U:R).replace("__API__","formation"),H=F?M:"membership",z="".concat(B,"://").concat(H,".").concat(F?U:R).replace("__API__","membership"),V=F?M:"api",Y="".concat(B,"://").concat(V,".").concat(F?U:R).replace("__API__","platform"),J=(c.a.CancelToken,c.a.defaults.headers.common.Authorization,Object(p.a)(),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,e);var t,r,n,o=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={inLoading:!0,isFullyProtected:!0,product:window.__METADATA.product_props,isAuthorized:!1,isUserLoggedIn:!1,progressPercentage:null,sidebarVisibility:!0,selectedItem:{},userProgress:null,cursusTree:[],isLogged:!(!localStorage||!localStorage.getItem("currentUser")),containers:[]},t.onPageChange=t.onPageChange.bind(C(t)),t.toggleSidebar=t.toggleSidebar.bind(C(t)),t.BtnPagination=t.BtnPagination.bind(C(t)),t}return t=i,(r=[{key:"findPage",value:function(e,t){return t.find((function(t){return t.id==e}))||{}}},{key:"compareOrdre",value:function(e,t){return e.ordre<t.ordre?-1:e.ordre>t.ordre?1:0}},{key:"buildTreeStructure",value:function(e,t,r){var n=this,a=new Array,o=this;return Array.isArray(t.items)&&(t.items[0].children.sort(this.compareOrdre),t.items[0].children.forEach((function(t){t.visible&&(a.push(t),t.children.sort(n.compareOrdre),t.children.forEach((function(r){r.is_cours&&r.visible&&(r.page=o.findPage(r.page_id,e),parent=t,delete t.children,r.parent=parent,a.push(r))})))}))),a}},{key:"updateUserStats",value:function(){if("edit"!==this.props.mode){var e=this.state.product.formationId,t=z+"/api/formations/"+e+"/stats/mes",r=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"",n=this.state.userProgress;return new Promise((function(e,a){c.a.post(t,{data:n},{headers:{"Content-Type":"application/json",Authorization:r}}).then((function(t){e(t.data)})).catch((function(e){a()}))}))}}},{key:"getUserStats",value:function(){var e={formation_id:t,pages:[{id:0,status:!0}]};if("edit"===this.props.mode)return this.setState({progressPercentage:15}),e;var t=this.state.product.formationId,r=z+"/api/formations/"+t+"/stats/me",n=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"",a=this;return new Promise((function(t,o){c.a.get(r,{headers:{"Content-Type":"application/json",Authorization:n}}).then((function(e){a.setState({isUserLoggedIn:!0}),t(e.data)})).catch((function(r){t(e),a.setState({isUserLoggedIn:!1})}))}))}},{key:"getFormationCursusTree",value:function(){var e=this.state.product.formationId,t=q+"/public/formations/"+e+"/cursusitems";return new Promise((function(e,r){c.a.get(t,{headers:{"Content-Type":"application/json"}}).then((function(t){e(t.data)})).catch((function(e){r()}))}))}},{key:"computeProgressPercentage",value:function(){var e=this.state.cursusTree,t=0,r=0;e.forEach((function(e){e.page&&e.page_id&&(r++,e.finish&&t++)}));var n=Math.round(t/r*100);this.setState({progressPercentage:n}),this.updateUserStats()}},{key:"readProgression",value:function(){var e=this,t=this.state.cursusTree,r=this.state.userProgress,n=0;t.forEach((function(t){t.page&&t.page.id&&("edit"===e.props.mode?n<2&&(t.finish=!0,n++):r.pages.find((function(e){return e.id===t.page.id}))&&(t.finish=!0))})),this.setState({cursusTree:t},this.computeProgressPercentage)}},{key:"updateProgression",value:function(e,t){var r=this.state.cursusTree,n=this.state.userProgress,a=!1,o=!e;n.pages.forEach((function(e){e.id==t.page.id&&(a=!0,e.status=o)})),r.forEach((function(e){e.page&&e.page_id==t.page.id&&(e.finish=o)})),a||n.pages.push({id:t.page.id,status:o}),this.setState({userProgress:n,cursusTree:r},this.computeProgressPercentage)}},{key:"validCours",value:function(e,t){this.updateProgression(e,t),this.getPaginationItems(t).next}},{key:"toggleSidebar",value:function(){this.setState({sidebarVisibility:!this.state.sidebarVisibility})}},{key:"getPaginationItems",value:function(e){var t=[];this.state.cursusTree.forEach((function(e){e.is_cours&&t.push(e)}));var r=t.indexOf(e);if(-1!==r){var n=(r+1)%t.length,a=(r-1)%t.length,o=t[n];return n<a&&(o=null),{prev:t[a],next:o}}}},{key:"BtnPagination",value:function(e){var t,r,n=this.getPaginationItems(e),o=n.prev,i=n.next,s={textOverflow:"ellipsis",width:"100%",overflow:"hidden",whiteSpace:"nowrap",display:"inline-block"};return void 0!==o&&o&&(t=a.a.createElement(l.b,{key:"prevFooter",className:"btn btn-outline-primary btn-lg  col-6 float-left",to:"/"+o.page.url},a.a.createElement("span",{style:s}," ",o.title))),void 0!==i&&i&&(r=a.a.createElement(l.b,{key:"nextFooter",className:"btn btn-outline-primary btn-lg  col-6 "+(o?"":"offset-6"),to:"/"+i.page.url},a.a.createElement("span",{style:s}," ",i.title))),[t,r]}},{key:"getFormationPages",value:function(){var e=this.state.product.id,t=Y+"/public/modules/5/pages/"+e;return new Promise((function(e,r){c.a.get(t,{headers:{"Content-Type":"application/json"}}).then((function(t){e(t.data)})).catch((function(e){r()}))}))}},{key:"onPageChange",value:function(e){}},{key:"componentDidMount",value:function(){var e=this,t=this.getFormationCursusTree(),r=this.getFormationPages(),n=this.getUserStats();Promise.all([t,r,n]).then((function(t){e.setState({isLogged:!0,inLoading:!1,userProgress:t[2],cursusTree:e.buildTreeStructure(t[1],t[0],null)},e.readProgression)}))}},{key:"render",value:function(){var e=this.state,t=e.cursusTree,r=e.selectedItem,n=(e.userProgress,e.progressPercentage),o=e.product;if("sommaire"===this.props.viewMode)return a.a.createElement("div",null,a.a.createElement(O,k({viewMode:"sommaire",cursusTree:t,product:o,selectedItem:r},this.props,{onAction:this.props.onAction,toggleSidebar:this.toggleSidebar,progressPercentage:n})))}}])&&T(t.prototype,r),n&&T(t,n),i}(n.Component));J.defaultProps={onLoaded:function(e){},onAction:function(e){},estFormation:!0,formationMembershipId:137,formationId:73,produitId:10356,blocks:[{name:"title",title:{txt:'<h1 style="text-align:center;">COOL</h1>',class:"w-100",visible:!1}},{name:"card",item:{img:{path:"https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-0.3.5&s=633d2630af9e99997590147b28b6656e&auto=format&fit=crop&w=1346&q=30",class:"w-100 img-fluid"},visible:!0,tpl:"img"},class:"",border:!1,txt:{txt:'<p><span style="color: rgb(0,0,0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna neque, vitae elementum magna facilisis non. Mauris sodales elit ac consequat mollis. Cras ultrices ex nec leo eleifend, eget hendrerit tortor condimentum.</span></p>\n',class:"",visible:!0},ctas:[{name:"cta",type:"primary",class:"btn-primary",link:"",txt:"Bouton",visible:!0},{name:"cta",type:"secondary",class:"btn-secondary",link:"",txt:"Bouton",visible:!1}],bg:{class:"",type:"color",overlay:"gradient",gradient:{angle:"180deg",hex:"transparent",hex2:"#4a90e2",opacity:0,opacity2:.5}}}],containerCss:"container",prefixCss:"",sectionCss:"",bg:{class:"",img:{path:"",class:""},gradient:{angle:"0deg",hex:"#21d4fd",hex2:"#b721ff",opacity:1,opacity2:.8},color:{hex:"#d4f1ff"},opacity:1,type:"color",overlay:"color"},tpl:"Card2",cardsInRow:1,uid:"23E4B9EE-6680-480F-9F7F-E1A22765BDEB",c__Id:365791,mode:"view",viewMode:"fullpage"};t.default=J}}]);