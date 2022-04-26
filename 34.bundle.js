(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./src/Sidebar/Module/FicheProduit/TextSimilarTitle.js":
/*!*************************************************************!*\
  !*** ./src/Sidebar/Module/FicheProduit/TextSimilarTitle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Redux_shop_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Redux/shop_constant */ \"./src/Redux/shop_constant.js\");\n/* harmony import */ var _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Redux/actionsSite */ \"./src/Redux/actionsSite.js\");\n/* harmony import */ var _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Redux/actionsTools */ \"./src/Redux/actionsTools.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rcpt-draft-editor */ \"rcpt-draft-editor\");\n/* harmony import */ var rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Sidebar_Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Sidebar/Components/WeTitlePanel */ \"./src/Sidebar/Components/WeTitlePanel.js\");\n/* harmony import */ var _Apis_site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Apis/site */ \"./src/Apis/site/index.ts\");\n/* harmony import */ var _Redux_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Redux/selector */ \"./src/Redux/selector.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar TextSimilarTitle = /*#__PURE__*/function (_PureComponent) {\n  _inherits(TextSimilarTitle, _PureComponent);\n\n  var _super = _createSuper(TextSimilarTitle);\n\n  function TextSimilarTitle(props) {\n    var _this;\n\n    _classCallCheck(this, TextSimilarTitle);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(TextSimilarTitle, [{\n    key: \"getText\",\n    value: function getText(html) {\n      var divContainer = document.createElement(\"div\");\n      divContainer.innerHTML = html;\n      return divContainer.textContent || divContainer.innerText || \"\";\n    }\n  }, {\n    key: \"updateTextProduit\",\n    value: function updateTextProduit(e) {\n      var designTemp = _objectSpread({}, this.props.designFicheProduit);\n\n      var similarProducts = designTemp && designTemp.singleProduct && designTemp.singleProduct.similarProducts;\n      designTemp.singleProduct.similarProducts = _objectSpread({}, similarProducts, {\n        content: e.content,\n        uid: \"similar_product\"\n      });\n      var curMep = designTemp.singleProduct[\"tpl\"] && designTemp.singleProduct[\"mepId\"] ? Object(_Redux_shop_constant__WEBPACK_IMPORTED_MODULE_1__[\"getMep\"])(designTemp.singleProduct[\"tpl\"], designTemp.singleProduct[\"mepId\"]) : _Redux_shop_constant__WEBPACK_IMPORTED_MODULE_1__[\"meps\"][0];\n      designTemp.singleProduct[\"ui\"] = Object(_Redux_shop_constant__WEBPACK_IMPORTED_MODULE_1__[\"setUi\"])(curMep); //delete designTemp.commun;\n\n      delete designTemp.produit;\n\n      var newDesignModule = _objectSpread({}, JSON.parse(this.props.designModule[\"config\"]));\n\n      delete designTemp.commun;\n      delete designTemp.produit;\n      newDesignModule.shop.ficheProduit = designTemp;\n      this.props.updateSiteDesignModuleStarted(JSON.stringify(newDesignModule));\n    }\n  }, {\n    key: \"showText\",\n    value: function showText(textElement, name) {\n      var _this2 = this;\n\n      // lire au niveau du .txt\n      var _this$props = this.props,\n          siteId = _this$props.siteId,\n          shopId = _this$props.shopId,\n          darkMode = _this$props.darkMode;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: textElement.uid\n      }, textElement.txt ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        darkMode: darkMode,\n        toggleDarkMode: function toggleDarkMode() {\n          return _this2.props.toggleDarkModeText();\n        },\n        draftProps: {\n          content: textElement.txt,\n          toolbarCss: \"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark\",\n          editorCss: \"we-card  we-py-2 we-px-1\",\n          onAction: function onAction(e) {\n            if (e.action && e.action === \"onChange\") {\n              _this2.updateTextProduit(e);\n            }\n          },\n          showCharCounter: false,\n          charCounterClassName: \"\"\n        },\n        linkProps: {\n          modalClassName: \"we-bg-dark we-border-0 we-shadow-none we-w-100\",\n          fetchers: {\n            page: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_8__[\"SitesApiFactory\"])().apiSitesSlugPagesGet,\n            module: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_8__[\"ModulesApiFactory\"])().apiSitesSlugModulesModulePagesGet\n          },\n          siteId: siteId,\n          shopId: shopId,\n          itemClassname: \"we-text-white\",\n          selectedItemClassname: \"we-bg-secondary\",\n          unSelectedItemClassname: \"we-bg-dark\",\n          wantSelectFile: function wantSelectFile(onClickLink) {\n            _this2.props.setMediaIntent(\"select_file_for_draft\", onClickLink);\n\n            _this2.props.wantSelectFileAction();\n          }\n        },\n        colorPickerProps: {\n          modalClassName: \"we-bg-dark we-border-0 we-shadow-none\"\n        }\n      })\n      /*  <DraftEditorRcpt\r\n          content={textElement.txt}\r\n          onAction={(e) => {\r\n            this.updateTextProduit(e);\r\n          }}\r\n        ></DraftEditorRcpt>*/\n      :\n      /*#__PURE__*/\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, name));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var designTemp = _objectSpread({}, this.props.designFicheProduit);\n\n      var similarProducts = designTemp && designTemp.singleProduct && designTemp.singleProduct.similarProducts;\n\n      if (similarProducts && similarProducts.content) {\n        similarProducts = _objectSpread({}, similarProducts, {\n          content: similarProducts.content,\n          uid: \"similar_product\"\n        });\n      } else {\n        similarProducts = _objectSpread({}, similarProducts, {\n          content: \"Produits pouvant vous intéresser\",\n          uid: \"similar_product\"\n        });\n      }\n\n      var wrapperCss = \"mt-3 mb-2 d-flex\";\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"editor__section-col\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), this.showText({\n        txt: similarProducts.content,\n        uid: similarProducts.uid\n      }, \"Zone de texte\"));\n    }\n  }]);\n\n  return TextSimilarTitle;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(function (state) {\n  return {\n    currentSite: state.sites.currentSiteInEdit,\n    designFicheProduit: state.sites.designFicheProduit,\n    designModule: state.sites.designModule,\n    siteId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_9__[\"getCurrentSiteInEdit\"])(state).id,\n    shopId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_9__[\"getShopId\"])(state),\n    darkMode: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_9__[\"getDarkModeText\"])(state)\n  };\n}, {\n  updateSiteDesignModuleStarted: _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_2__[\"updateSiteDesignModuleStarted\"],\n  wantUpdateTextAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"wantUpdateTextAction\"],\n  setTextIntent: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"setTextIntent\"],\n  setMediaIntent: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"setMediaIntent\"],\n  wantSelectFileAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"wantSelectFileAction\"],\n  toggleDarkModeText: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"toggleDarkModeText\"]\n})(TextSimilarTitle));\n\n//# sourceURL=webpack:///./src/Sidebar/Module/FicheProduit/TextSimilarTitle.js?");

/***/ })

}]);