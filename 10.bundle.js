(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1255:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(48),i=n(70),s=n(39),c=n.n(s),l=n(9),u=n.n(l),p=n(149),m=n(400);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){_(t,e,n[e])}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=S(t);if(e){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=u.a._reactSortableHoc,k=(P.SortableItem,P.SortableContainer,P.arrayMove,P.sortableHandle,u.a._store.getEnv()),O=k.scheme,I=k.domain,E=k.subdomain,A=k.apiProd,C=k.domainApi,R=A?E:"gallerie",j="".concat(O,"://").concat(R,".").concat(A?C:I).replace("__API__","gallerie"),x=u.a._css,N=u.a._getSrcSet,D=(u.a._ToolbarActions,c.a.CancelToken),M={transitionDuration:0},J={background:".bg-light"},L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(l,t);var e,n,o,s=y(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),_(w(e=s.call(this,t)),"handlePS",(function(t){e.setState({isOpenPS:!!t})}));var n={};if(e.props.items.items.length>0){var o=e.props.items,r=o.numItems,a=o.page,i=o.totalItems;n={items:e.transformItems(e.props.items.items),numItems:r,page:a,totalItems:i,inLoading:!1}}else n={items:[],numItems:0,page:1,totalItems:0,inLoading:!0};return e.state=g({},n,{pathOrder:"".concat(j,"/slides/").concat(e.props.idGallery,"/order"),grid:{1:"",2:"col-md-6",3:"col-md-4",4:"col-md-3"},forcePage:e.props.forcedPage,mepRender:{bootstrapColumn:function(t){return e.bootstrapColumn(t)},masonryJS:function(t){return e.masonryJs(t)},bootstrapDefault:function(t){return e.bootstrapDefault(t)}},isOpenPS:!1,optionsPS:{index:0,closeOnScroll:!1,shareEl:!1},itemsPS:[]}),e}return e=l,(n=[{key:"getItems",value:function(t,e){return"edit"===this.props.mode&&(e.no_cache=!0),new Promise((function(n,o){c.a.defaults.headers.common.Authorization=null,c.a.get(t,{cancelToken:new D((function(t){t})),params:e}).then((function(t){n(t)})).catch((function(t){o(t)}))}))}},{key:"componentDidMount",value:function(){this.loadItems(this.props.forcedPage||1,"init"),this.loadIconsPS()}},{key:"loadIconsPS",value:function(){if(document&&!document.querySelector("#PS_CSS")){var t=document.createElement("style");t.id="PS_CSS",document.head.appendChild(t);var e=t.sheet;e.insertRule(".pswp__button, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before {background: none !important}",e.cssRules.length),e.insertRule(".pswp__preloader--active .pswp__preloader__icn{background:url(".concat(O,"://editor.").concat(I,"/assets/dist/e34aafbb485a96eaf2a789b2bf3af6fe.gif) 0 0 no-repeat !important}"),e.cssRules.length),e.insertRule("@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:none !important}}",e.cssRules.length)}}},{key:"loadItems",value:function(t,e){var n=this,o=this.props.idGallery,r=j+"/public/galleries/"+o+"/slides",a={page:t};this.getItems(r,a).then((function(t){var e=t.data,o=e.items,r=e.numItems,a=e.page,i=e.totalItems;o=n.transformItems(o);var s=JSON.parse(JSON.stringify(o)).map((function(t){return g({},t,{w:0,h:0})}));n.setState({items:o,itemsPS:s,numItems:r,page:a,totalItems:i,inLoading:!1},(function(){n.props.onAction({action:"first_load_items",data:{numItems:r,page:a,totalItems:i,items:o}})}))})).catch((function(t){return console.log("erreur!!",t)}))}},{key:"orderItems",value:function(t){return[].concat(t).sort((function(t,e){return t.rank===e.rank?e.id-t.id:t.rank-e.rank}))}},{key:"transformItems",value:function(t){return this.orderItems(t.map((function(t){var e=t.src_set&&N(JSON.parse(t.src_set));return g({},t,{src:t.url,title:"",img:{path:t.url},visible:!0,srcSet:e})})))}},{key:"masonryJs",value:function(t){var e=this,n=this.props.prefixCss,o=t.map((function(t,o){return r.a.createElement("li",{key:o,className:"list-unstyled"},r.a.createElement(i.a,{css:x(n,"img-fluid"),tpl:"img",item:t,onAction:function(){return e.onActionMedia(t,o)}}))}));return r.a.createElement(Masonry,{className:"my-gallery-class",elementType:"ul",options:M,disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:J},o)}},{key:"onActionMedia",value:function(t,e){var n=this;this.setState({optionsPS:g({},this.state.optionsPS,{index:e})},(function(){return n.handlePS(!0)}))}},{key:"onActionPagination",value:function(t){var e=this;console.log("pagination",t),"page_change"===t.action&&this.setState({inLoading:!0},(function(){e.loadItems(t.data.nextPage)}))}},{key:"bootstrapColumn",value:function(t){var e=this,n=this.props.prefixCss;return r.a.createElement("div",{className:x(n,"card-columns")+" card-columns-2"},t.map((function(t,o){return r.a.createElement("div",{key:o,className:x(n,"card","border-0","mb-0")},r.a.createElement(i.a,{css:x(n,"card-img"),tpl:"img",item:t,onAction:function(){return e.onActionMedia(t,o)}}))})))}},{key:"getGrid",value:function(t,e){var n=this.state.grid,o=n[t]||n[1];return x(e,"col-12",o,"d-flex","align-items-stretch")}},{key:"bootstrapDefault",value:function(t){var e=this,n=this.props,o=n.prefixCss,a=n.spacing,s=(n.spacingAdmin,n.cardsInRow),c=n.mode,l=(n.cfgToolbarMedia,n.gridCss),u=(n.onAction,a?x(o,"mb-3","px-2"):x(o,"m-0","p-0")),p=""!==l&&l||this.getGrid(s,o);return r.a.createElement("div",{className:x(o,"row")},t.map((function(t,n){return r.a.createElement("div",{key:n,"data-item":"gallery",className:x(o,"col-12")+" "+p+" "+u},r.a.createElement(i.a,{mode:c,style:{objectFit:"cover",height:"100%",width:"100%"},css:x(o,"img-fluid"),tpl:"img",item:t,onAction:function(){return e.onActionMedia(t,n)}}))})))}},{key:"gettingData",value:function(t,e,n){if(n.w<1||n.h<1){var o=new Image;o.onload=function(){n.w=this.width,n.h=this.height,t.updateSize(!0)},n.srcSet&&(o.srcset=n.srcSet),o.src=n.src}}},{key:"render",value:function(){var t=this,e=this.props,n=e.type,o=(e.mode,e.onAction,e.blocks),i=(e.btnAdd,this.state),s=i.items,c=i.itemsPS,l=i.totalItems,u=i.numItems,f=i.forcePage,g=i.mepRender,h=i.inLoading,b=i.isOpenPS,y=i.optionsPS,v=Math.ceil(l/u),w=f&&f-1||null,S=(o&&o.find((function(t){return"title"===t.name}))||{title:null}).title,_=void 0!==m.PhotoSwipe?m.PhotoSwipe:null;return r.a.createElement(a.a,d({title:S},this.props),h&&r.a.createElement("div",{className:"text-center"},r.a.createElement("i",{className:"fas fa-spinner fa-pulse"})),g[n]&&g[n](s)||g.bootstrapDefault(s),v>1&&r.a.createElement(p.a,{forcePage:w,pageCount:v,onAction:function(e){return t.onActionPagination(e)}}),_&&r.a.createElement(_,{isOpen:b,items:c||[],options:y,onClose:this.handlePS,gettingData:function(e,n,o){return t.gettingData(e,n,o)}}))}}])&&h(e.prototype,n),o&&h(e,o),l}(o.Component);L.defaultProps={mode:"view",type:"bootstrapDefault",prefixCss:"",gridCss:"",cardsInRow:3,spacing:!0,onAction:function(){},cfgToolbarMedia:{visible:!0,trash:!0},idGallery:0,items:{items:[]},btnAdd:{limit:100}},L.displayName="MasonryRcpt",e.default=L}}]);