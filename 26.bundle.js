(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./src/Sidebar/Sections/LinkEditorPanel.js":
/*!*************************************************!*\
  !*** ./src/Sidebar/Sections/LinkEditorPanel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Redux/selector */ \"./src/Redux/selector.js\");\n/* harmony import */ var _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Redux/actionsTools */ \"./src/Redux/actionsTools.js\");\n/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Redux/actions */ \"./src/Redux/actions.js\");\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/utils */ \"./src/Utils/utils.ts\");\n/* harmony import */ var _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Redux/actionsSite */ \"./src/Redux/actionsSite.js\");\n/* harmony import */ var _Apis_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Apis/site */ \"./src/Apis/site/index.ts\");\n/* harmony import */ var rcpt_link_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rcpt-link-editor */ \"rcpt-link-editor\");\n/* harmony import */ var rcpt_link_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rcpt_link_editor__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/WeTitlePanel */ \"./src/Sidebar/Components/WeTitlePanel.js\");\n/* harmony import */ var _Utils_Supense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utils/Supense */ \"./src/Utils/Supense.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LinkEditorPanel = /*#__PURE__*/function (_React$Component) {\n  _inherits(LinkEditorPanel, _React$Component);\n\n  var _super = _createSuper(LinkEditorPanel);\n\n  function LinkEditorPanel(props) {\n    var _this;\n\n    _classCallCheck(this, LinkEditorPanel);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"getValues\", function (object) {\n      var link;\n      var newOnglet;\n\n      if (object.name === \"media\" || object.name === \"card\") {\n        if (object.item && object.item.link) {\n          link = object.item.link.link;\n          newOnglet = object.item.link.target === \"_blank\";\n        }\n      } else {\n        link = object.link;\n        newOnglet = object.newOnglet;\n      }\n\n      return {\n        link: link,\n        newOnglet: newOnglet\n      };\n    });\n\n    _this.state = {\n      newOnglet: _this.getValues(_this.props.currentCta).newOnglet,\n      link: _this.getValues(_this.props.currentCta).value\n    };\n    return _this;\n  }\n  /**\r\n   * fonction pour appliquer un lien\r\n   * gère les differents format de data entre media, card et CTA\r\n   * @param object\r\n   * @param link\r\n   */\n\n\n  _createClass(LinkEditorPanel, [{\n    key: \"applyLink\",\n    value: function applyLink(object, link) {\n      if (object.name === \"media\" || object.name === \"card\") {\n        if (link === null) {\n          delete object.item.link;\n          delete object.item.target;\n          object.item.tpl = \"img\";\n        } else {\n          object.item.link = {\n            link: link,\n            target: this.state.newOnglet ? \"_blank\" : \"_self\"\n          };\n          object.item.tpl = \"imgLink\";\n        }\n      } else {\n        if (link === null) {\n          delete object.link;\n          delete object.newOnglet;\n        } else {\n          object.link = link;\n          object.newOnglet = this.state.newOnglet === \"_blank\";\n        }\n      }\n    }\n  }, {\n    key: \"updateLink\",\n    value: function updateLink(page) {\n      var _this2 = this;\n\n      // Pour les pages crees par l'user/l'editeur il faut choisir le slug car le rendue du site se base sur le slug..\n      // Pour les pages de modules, le rendu se base sur l'url, il faut donc choisir l'url, car on aura par ex:\n      // \"shop/tshirt-nike\" et si on choisit le slug fait par php ca donnera shop_tshirt_nike...\n      var testUrl = page && page.module ? true : false;\n      var link = page && page.is_home && \"/\" || !testUrl && page.slug || page.url;\n\n      var sectionTemp = _objectSpread({}, this.props.section);\n\n      var cta = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", this.props.currentCta.uid);\n\n      if (cta) {\n        var ctaIntent = this.props.ctaIntent;\n\n        if (ctaIntent.uids) {\n          ctaIntent.uids.forEach(function (uid) {\n            var btn = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", uid);\n\n            _this2.applyLink(btn, link);\n          });\n        }\n\n        this.applyLink(cta, link);\n        this.setState(_objectSpread({}, this.state, {\n          link: link\n        }));\n        this.props.setCtaInEdit(cta);\n\n        if (sectionTemp.componentName === \"NavbarRcpt\") {\n          this.props.updateSiteNavbarAction(sectionTemp.content);\n        } else if (sectionTemp.componentName === \"FooterRcpt\") {\n          this.props.updateSiteFooterAction(sectionTemp.content);\n        } else {\n          this.props.updateSectionContent(sectionTemp.content);\n        }\n      }\n    }\n  }, {\n    key: \"removeLink\",\n    value: function removeLink() {\n      var _this3 = this;\n\n      var sectionTemp = _objectSpread({}, this.props.section);\n\n      var cta = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", this.props.currentCta.uid);\n\n      if (cta) {\n        var ctaIntent = this.props.ctaIntent;\n\n        if (ctaIntent.uids) {\n          ctaIntent.uids.forEach(function (uid) {\n            var btn = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", uid);\n\n            _this3.applyLink(btn, null);\n          });\n        }\n\n        this.applyLink(cta, null);\n        this.setState(_objectSpread({}, this.state, {\n          link: null\n        }));\n        this.props.setCtaInEdit(cta);\n\n        if (sectionTemp.componentName === \"NavbarRcpt\") {\n          this.props.updateSiteNavbarAction(sectionTemp.content);\n        } else if (sectionTemp.componentName === \"FooterRcpt\") {\n          this.props.updateSiteFooterAction(sectionTemp.content);\n        } else {\n          this.props.updateSectionContent(sectionTemp.content);\n        }\n      }\n    }\n    /**\r\n     *  On rend le refresh conditionnel pour eviter de rendre trop souvent les sections et perdre le focus\r\n     * @param {*} nextProps\r\n     * @param {*} nextState\r\n     * @returns\r\n     */\n\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      if (nextState.link !== this.state.link) {\n        return true;\n      }\n\n      if (nextProps.currentCta.name === \"media\" || nextProps.currentCta.name === \"card\") {\n        if (this.props.currentCta.item && this.props.currentCta.item.link) {\n          if (nextProps.currentCta.item.link.link !== this.props.currentCta.item.link.link) {\n            return true;\n          }\n        }\n      } else {\n        if (nextProps.currentCta.link !== this.props.currentCta.link) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"toggleTarget\",\n    value: function toggleTarget() {\n      var newOnglet = this.state.newOnglet;\n      newOnglet = !newOnglet;\n\n      var sectionTemp = _objectSpread({}, this.props.section);\n\n      var cta = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", this.props.currentCta.uid);\n\n      if (cta) {\n        var ctaIntent = this.props.ctaIntent;\n\n        if (ctaIntent.uids) {\n          ctaIntent.uids.forEach(function (uid) {\n            var btn = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content.blocks, \"uid\", uid);\n            btn.newOnglet = newOnglet;\n          });\n        }\n\n        cta.newOnglet = newOnglet;\n        this.setState(_objectSpread({}, this.state, {\n          newOnglet: newOnglet\n        }));\n        this.props.setCtaInEdit(cta);\n\n        if (sectionTemp.componentName === \"NavbarRcpt\") {\n          this.props.updateSiteNavbarAction(sectionTemp.content);\n        } else if (sectionTemp.componentName === \"FooterRcpt\") {\n          this.props.updateSiteFooterAction(sectionTemp.content);\n        } else {\n          this.props.updateSectionContent(sectionTemp.content);\n        }\n      }\n    }\n    /**\r\n     * retourne  un objet ISO pour les different use case (cta, card, media)\r\n     * @param object\r\n     * @return {{newOnglet: boolean, value: *}}\r\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var object = this.props.currentCta;\n\n      var _this$getValues = this.getValues(object),\n          link = _this$getValues.link,\n          newOnglet = _this$getValues.newOnglet;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        onClick: function onClick() {\n          return _this4.props.closeLinkToolAction();\n        }\n      }, \"Modifier Lien\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Supense__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rcpt_link_editor__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        onClick: function onClick(pageArray) {\n          return _this4.updateLink(pageArray);\n        },\n        removeLink: function removeLink() {\n          return _this4.removeLink();\n        },\n        toggleTarget: function toggleTarget() {\n          return _this4.toggleTarget();\n        },\n        selectFile: function selectFile() {\n          _this4.props.setMediaIntent(\"select_file_for_cta\", _this4.props.currentCta);\n\n          _this4.props.wantSelectFileAction();\n        },\n        fetchers: {\n          page: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_7__[\"SitesApiFactory\"])().apiSitesSlugPagesGet,\n          module: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_7__[\"ModulesApiFactory\"])().apiSitesSlugModulesModulePagesGet\n        },\n        siteId: this.props.siteId,\n        shopId: this.props.shopId,\n        value: link\n        /* values={[{\r\n                                                                                                                         \"id\": 2945,\r\n                                                                                                                         \"nom\": \"Acceuil\",\r\n                                                                                                                         \"url\": \"accueil\",\r\n                                                                                                                         \"slug\": \"accueil\",\r\n                                                                                                                         \"published\": false,\r\n                                                                                                                         \"created\": \"2020-03-04T16:21:36+00:00\",\r\n                                                                                                                         \"is_home\": false,\r\n                                                                                                                         \"is_error\": false,\r\n                                                                                                                         \"archived\": false,\r\n                                                                                                                         \"is_service\": false,\r\n                                                                                                                         \"is_protected\": false\r\n                                                                                                                       },{\r\n                                                                                                                         \"id\": 2948,\r\n                                                                                                                         \"nom\": \"Jouets\",\r\n                                                                                                                         \"url\": \"jouets\",\r\n                                                                                                                         \"slug\": \"jouets\",\r\n                                                                                                                         \"published\": false,\r\n                                                                                                                         \"created\": \"2020-03-04T16:21:36+00:00\",\r\n                                                                                                                         \"is_home\": false,\r\n                                                                                                                         \"is_error\": false,\r\n                                                                                                                         \"archived\": false,\r\n                                                                                                                         \"is_service\": false,\r\n                                                                                                                         \"is_protected\": false\r\n                                                                                                                       }]}*/\n        ,\n        target: newOnglet,\n        itemClassname: \"we-text-white\",\n        selectedItemClassname: \"we-bg-secondary\",\n        unSelectedItemClassname: \"we-bg-dark\",\n        canMultipleValue: false,\n        excludeList: []\n      })));\n    }\n  }]);\n\n  return LinkEditorPanel;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    section: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_2__[\"handleGetSectionInEdit\"])(state).section,\n    currentCta: state.tools.ctaInEdit,\n    ctaIntent: state.tools.ctaIntent,\n    siteId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_2__[\"getCurrentSiteInEdit\"])(state).id,\n    shopId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_2__[\"getShopId\"])(state)\n  };\n}, {\n  setMediaIntent: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"setMediaIntent\"],\n  wantSelectFileAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"wantSelectFileAction\"],\n  updateSectionContent: _Redux_actions__WEBPACK_IMPORTED_MODULE_4__[\"updateSectionContent\"],\n  updateSiteFooterAction: _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__[\"updateSiteFooterAction\"],\n  updateSiteNavbarAction: _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__[\"updateSiteNavbarAction\"],\n  closeLinkToolAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"closeLinkToolAction\"],\n  setCtaInEdit: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_3__[\"setCtaInEdit\"]\n})(LinkEditorPanel));\n\n//# sourceURL=webpack:///./src/Sidebar/Sections/LinkEditorPanel.js?");

/***/ })

}]);