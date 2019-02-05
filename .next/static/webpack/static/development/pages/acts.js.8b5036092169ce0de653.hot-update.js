webpackHotUpdate("static/development/pages/acts.js",{

/***/ "./components/ActsViewPicker.js":
/*!**************************************!*\
  !*** ./components/ActsViewPicker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ActsViewPickerStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ActsViewPickerStyles */ "./components/styles/ActsViewPickerStyles.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/ActsViewPicker.js";



var ActsViewPicker = function ActsViewPicker(_ref) {
  var changeView = _ref.changeView;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ActsViewPickerStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "View As:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    onClick: function onClick() {
      return changeView('block');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Block"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    onClick: function onClick() {
      return changeView('list');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "List"));
};

/* harmony default export */ __webpack_exports__["default"] = (ActsViewPicker);

/***/ }),

/***/ "./components/styles/ActsViewPickerStyles.js":
/*!***************************************************!*\
  !*** ./components/styles/ActsViewPickerStyles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ActsViewPickerStyles__PaginationStyles",
  componentId: "s3wplj-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ })

})
//# sourceMappingURL=acts.js.8b5036092169ce0de653.hot-update.js.map