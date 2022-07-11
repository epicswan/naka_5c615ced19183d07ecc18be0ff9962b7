(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/Sidebar/Sections/Panel/DraftEditor/TextEditorPanel.js":
/*!*******************************************************************!*\
  !*** ./src/Sidebar/Sections/Panel/DraftEditor/TextEditorPanel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Redux/actionsTools */ \"./src/Redux/actionsTools.js\");\n/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Redux/actions */ \"./src/Redux/actions.js\");\n/* harmony import */ var rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rcpt-draft-editor */ \"rcpt-draft-editor\");\n/* harmony import */ var rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Utils/utils */ \"./src/Utils/utils.ts\");\n/* harmony import */ var _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Redux/actionsSite */ \"./src/Redux/actionsSite.js\");\n/* harmony import */ var _Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Components/WeTitlePanel */ \"./src/Sidebar/Components/WeTitlePanel.js\");\n/* harmony import */ var _Redux_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Redux/selector */ \"./src/Redux/selector.js\");\n/* harmony import */ var _Apis_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Apis/site */ \"./src/Apis/site/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar TextEditorPanel = /*#__PURE__*/function (_React$Component) {\n  _inherits(TextEditorPanel, _React$Component);\n\n  var _super = _createSuper(TextEditorPanel);\n\n  function TextEditorPanel(props) {\n    var _this;\n\n    _classCallCheck(this, TextEditorPanel);\n\n    _this = _super.call(this, props);\n    _this.updateTextSection = _this.updateTextSection.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n  /**\r\n   *  On rend le refresh conditionnel pour eviter de rendre trop souvent les sections et perdre le focus\r\n   * @param {*} nextProps\r\n   * @param {*} nextState\r\n   * @returns\r\n   */\n\n\n  _createClass(TextEditorPanel, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return nextProps.currentText !== this.props.currentText;\n    }\n  }, {\n    key: \"updateTextSection\",\n    value: function updateTextSection(e) {\n      var sectionTemp = _objectSpread({}, this.props.section);\n\n      if (this.props.footerInEdit) {\n        sectionTemp = _objectSpread({}, this.props.footerInEdit, {\n          content: _objectSpread({}, this.props.footerInEdit.content.props)\n        });\n      }\n\n      if (this.props.navbarInEdit) {\n        sectionTemp = _objectSpread({}, this.props.navbarInEdit, {\n          content: _objectSpread({}, this.props.navbarInEdit.content.props)\n        });\n      }\n\n      var textObject = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content && sectionTemp.content.blocks || [], \"uid\", this.props.currentText);\n\n      if (textObject) {\n        textObject.txt = e.content;\n\n        if (sectionTemp.componentName == \"NavbarRcpt\") {\n          this.props.updateSiteNavbarAction(sectionTemp.content);\n        } else if (sectionTemp.componentName == \"FooterRcpt\") {\n          this.props.updateSiteFooterAction(sectionTemp.content);\n        } else {\n          this.props.updateSectionContent(sectionTemp.content);\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var sectionTemp = _objectSpread({}, this.props.section);\n\n      var _this$props = this.props,\n          siteId = _this$props.siteId,\n          shopId = _this$props.shopId,\n          blogId = _this$props.blogId,\n          darkMode = _this$props.darkMode;\n\n      if (this.props.footerInEdit) {\n        sectionTemp = _objectSpread({}, this.props.footerInEdit, {\n          content: _objectSpread({}, this.props.footerInEdit.content.props)\n        });\n      }\n\n      if (this.props.navbarInEdit) {\n        sectionTemp = _objectSpread({}, this.props.navbarInEdit, {\n          content: _objectSpread({}, this.props.navbarInEdit.content.props)\n        });\n      }\n\n      var textObject = Object(_Utils_utils__WEBPACK_IMPORTED_MODULE_5__[\"findUidObject\"])(sectionTemp.content && sectionTemp.content.blocks || [], \"uid\", this.props.currentText) || \"\";\n      console.log({\n        darkMode: darkMode\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_WeTitlePanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onClick: function onClick() {\n          return _this2.props.closeAllToolAction();\n        }\n      }, \"Edition de texte\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rcpt_draft_editor__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        darkMode: darkMode,\n        toggleDarkMode: function toggleDarkMode() {\n          return _this2.props.toggleDarkModeText();\n        },\n        draftProps: {\n          content: textObject.txt,\n          toolbarCss: \"we-h-100 we-border-0 we-p-1 we-sticky-top we-rounded-0 we-top-negative-15 we-bg-dark\",\n          editorCss: \"we-card we-py-2 we-px-1\",\n          onAction: function onAction(e) {\n            if (e.action && e.action === \"onChange\") {\n              _this2.updateTextSection(e);\n            }\n          },\n          showCharCounter: false,\n          charCounterClassName: \"\"\n        },\n        linkProps: {\n          modalClassName: \"we-bg-dark we-border-0 we-shadow-none we-w-100\",\n          fetchers: {\n            page: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_9__[\"SitesApiFactory\"])().apiSitesSlugPagesGet,\n            module: Object(_Apis_site__WEBPACK_IMPORTED_MODULE_9__[\"ModulesApiFactory\"])().apiSitesSlugModulesModulePagesGet\n          },\n          siteId: siteId,\n          shopId: shopId,\n          blogId: blogId,\n          itemClassname: \"we-text-white\",\n          selectedItemClassname: \"we-bg-secondary\",\n          unSelectedItemClassname: \"we-bg-dark\",\n          wantSelectFile: function wantSelectFile(onClickLink) {\n            _this2.props.setMediaIntent(\"select_file_for_draft\", onClickLink);\n\n            _this2.props.wantSelectFileAction();\n          }\n        },\n        colorPickerProps: {\n          modalClassName: \"we-bg-dark we-border-0 we-shadow-none\"\n        }\n      }));\n    }\n  }]);\n\n  return TextEditorPanel;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    currentText: state.tools.textInEdit,\n    themeColors: state.color.selectedThemeColors,\n    siteId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_8__[\"getCurrentSiteInEdit\"])(state).id,\n    shopId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_8__[\"getShopId\"])(state),\n    blogId: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_8__[\"getBlogId\"])(state),\n    darkMode: Object(_Redux_selector__WEBPACK_IMPORTED_MODULE_8__[\"getDarkModeText\"])(state),\n    section: state.sections.currentSectionInEdit && state.sections.byIds[state.sections.currentSectionInEdit] ? state.sections.byIds[state.sections.currentSectionInEdit] : null,\n    navbarInEdit: state.sections.currentSectionInEdit == state.sites.navbar.id ? state.sites.navbar : null,\n    footerInEdit: state.sections.currentSectionInEdit == state.sites.footer.id ? state.sites.footer : null\n  };\n}, {\n  setMediaIntent: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__[\"setMediaIntent\"],\n  wantSelectFileAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__[\"wantSelectFileAction\"],\n  updateSectionContent: _Redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"updateSectionContent\"],\n  setViewTplBtnEditor: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__[\"setViewTplBtnEditor\"],\n  closeAllToolAction: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__[\"closeAllToolAction\"],\n  updateSiteNavbarAction: _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__[\"updateSiteNavbarAction\"],\n  updateSiteFooterAction: _Redux_actionsSite__WEBPACK_IMPORTED_MODULE_6__[\"updateSiteFooterAction\"],\n  toggleDarkModeText: _Redux_actionsTools__WEBPACK_IMPORTED_MODULE_2__[\"toggleDarkModeText\"]\n})(TextEditorPanel));\n\n//# sourceURL=webpack:///./src/Sidebar/Sections/Panel/DraftEditor/TextEditorPanel.js?");

/***/ })

}]);