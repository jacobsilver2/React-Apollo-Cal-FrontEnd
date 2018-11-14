module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/addDays */ "date-fns/addDays");
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_addDays__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/addMonths */ "date-fns/addMonths");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/subMonths */ "date-fns/subMonths");
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/startOfWeek */ "date-fns/startOfWeek");
/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/endOfWeek */ "date-fns/endOfWeek");
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/startOfMonth */ "date-fns/startOfMonth");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/endOfMonth */ "date-fns/endOfMonth");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_getMilliseconds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/getMilliseconds */ "date-fns/getMilliseconds");
/* harmony import */ var date_fns_getMilliseconds__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_getMilliseconds__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/isSameDay */ "date-fns/isSameDay");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/isSameMonth */ "date-fns/isSameMonth");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/jacobsilver/Development/Projects/React-Apollo-Cal/frontend/components/Calendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var calTheme = {
  mainColor: '#1a8fff',
  textColor: '#777',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#f9f9f9',
  neutralColor: '#fff'
};
var StyledCal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Calendar__StyledCal",
  componentId: "sc-12yqhjy-0"
})([".header{display:block;width:100%;padding:1.75em 0;border-bottom:1px solid ", ";background:", ";}.row{margin:0;padding:0;display:flex;flex-direction:row;flex-wrap:wrap;width:100%;}.row-middle{align-items:center;}.col{flex-grow:1;flex-basis:0;max-width:100%;}.col-start{justify-content:flex-start;text-align:left;}.col-center{justify-content:center;text-align:center;}.col-end{justify-content:flex-end;text-align:right;}.calendar{display:block;position:relative;width:100%;background:", ";border:1px solid ", ";}.calendar .header{text-transform:uppercase;font-weight:700;font-size:115%;padding:1.5em 0;border-bottom:1px solid ", ";}.calendar .header .icon{cursor:pointer;transition:.15s ease-out;}.calendar .header .icon:hover{transform:scale(1.75);transition:.25s ease-out;color:", ";}.calendar .header .icon:first-of-type{margin-left:1em;}.calendar .header .icon:last-of-type{margin-right:1em;}.calendar .days{text-transform:uppercase;font-weight:400;color:", ";font-size:70%;padding:.75em 0;border-bottom:1px solid ", ";}.calendar .body .cell{position:relative;height:5em;border-right:1px solid ", ";overflow:hidden;cursor:pointer;background:", ";transition:0.25s ease-out;}.calendar .body .cell:hover{background:", ";transition:0.5s ease-out;}.calendar .body .selected{border-left:10px solid transparent;border-image:linear-gradient(45deg,#1a8fff 0%,#53cbf1 40%);border-image-slice:1;}.calendar .body .row{border-bottom:1px solid ", ";}.calendar .body .row:last-child{border-bottom:none;}.calendar .body .cell:last-child{border-right:none;}.calendar .body .cell .number{position:absolute;font-size:82.5%;line-height:1;top:.75em;right:.75em;font-weight:700;}.calendar .body .disabled{color:", ";pointer-events:none;}.calendar .body .cell .bg{font-weight:700;line-height:1;color:", ";opacity:0;font-size:8em;position:absolute;top:-.2em;right:-.05em;transition:.25s ease-out;letter-spacing:-.07em;}.calendar .body .cell:hover .bg,.calendar .body .selected .bg{opacity:0.05;transition:.5s ease-in;}.calendar .body .col{flex-grow:0;flex-basis:calc(100%/7);width:calc(100%/7);}"], calTheme.borderColor, calTheme.neutralColor, calTheme.bgColor, calTheme.borderColor, calTheme.borderColor, calTheme.mainColor, calTheme.textColorLight, calTheme.borderColor, calTheme.borderColor, calTheme.neutralColor, calTheme.bgColor, calTheme.borderColor, calTheme.textColorLight, calTheme.mainColor); // const StyledCalIcons = styled.div`
//   @font-face {
//     font-family: 'Material Icons';
//     src: url();
//     font-weight: normal;
//     font-style: normal;
//   }
//   font-family: 'Material Icons';
//   font-style: normal;
//   display: inline-block;
//   vertical-align: middle;
//   line-height: 1;
//   text-transform: none;
//   letter-spacing: normal;
//   word-wrap: normal;
//   white-space: nowrap;
//   direction: ltr;
//   -webkit-font-smoothing: antialiased;
//   text-rendering: optimizeLegibility;
//   -moz-osx-font-smoothing: grayscale;
//   font-feature-settings: 'liga';
// `;

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentMonth: new Date(),
      selectedDate: new Date()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHeader", function () {
      var dateFormat = 'MMMM YYYY';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header row flex-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon",
        onClick: _this.prevMonth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "chevron_left")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(_this.state.currentMonth, dateFormat, {
        awareOfUnicodeTokens: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-end",
        onClick: _this.nextMonth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "chevron-right")));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDays", function () {
      var dateFormat = 'EEEE';
      var days = [];
      var startDate = date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6___default()(_this.state.currentMonth);

      for (var i = 0; i < 7; i++) {
        days.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col col-center",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(date_fns_addDays__WEBPACK_IMPORTED_MODULE_3___default()(startDate, i), dateFormat, {
          awareOfUnicodeTokens: true
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "days row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, days);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCells", function () {
      var _this$state = _this.state,
          currentMonth = _this$state.currentMonth,
          selectedDate = _this$state.selectedDate;
      var monthStart = date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_8___default()(currentMonth);
      var monthEnd = date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_9___default()(monthStart);
      var startDate = date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6___default()(monthStart);
      var endDate = date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_7___default()(monthEnd);
      var dateFormat = "d";
      var rows = [];
      var days = [];
      var day = startDate;
      var formattedDate = "";

      while (day <= endDate) {
        for (var i = 0; i < 7; i++) {
          formattedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(day, dateFormat, {
            awareOfUnicodeTokens: true
          });
          var cloneDay = day; // debugger;

          days.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col cell ".concat(!date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12___default()(day, monthStart) ? "disabled" : date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_11___default()(day, selectedDate) ? "selected" : ""),
            key: day.toString(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 277
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }, formattedDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }, formattedDate)));
          day = date_fns_addDays__WEBPACK_IMPORTED_MODULE_3___default()(day, 1);
        }

        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          key: day,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, days));
        days = [];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, rows);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextMonth", function () {
      _this.setState({
        currentMonth: date_fns_addMonths__WEBPACK_IMPORTED_MODULE_4___default()(_this.state.currentMonth, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevMonth", function () {
      _this.setState({
        currentMonth: date_fns_subMonths__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.currentMonth, 1)
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCal, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "calendar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, this.renderHeader(), this.renderDays(), this.renderCells()));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Calendar */ "./components/Calendar.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/React-Apollo-Cal/frontend/pages/index.js";




var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Calendar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/addDays":
/*!***********************************!*\
  !*** external "date-fns/addDays" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/addDays");

/***/ }),

/***/ "date-fns/addMonths":
/*!*************************************!*\
  !*** external "date-fns/addMonths" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/addMonths");

/***/ }),

/***/ "date-fns/endOfMonth":
/*!**************************************!*\
  !*** external "date-fns/endOfMonth" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/endOfMonth");

/***/ }),

/***/ "date-fns/endOfWeek":
/*!*************************************!*\
  !*** external "date-fns/endOfWeek" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/endOfWeek");

/***/ }),

/***/ "date-fns/getMilliseconds":
/*!*******************************************!*\
  !*** external "date-fns/getMilliseconds" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/getMilliseconds");

/***/ }),

/***/ "date-fns/isSameDay":
/*!*************************************!*\
  !*** external "date-fns/isSameDay" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/isSameDay");

/***/ }),

/***/ "date-fns/isSameMonth":
/*!***************************************!*\
  !*** external "date-fns/isSameMonth" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/isSameMonth");

/***/ }),

/***/ "date-fns/startOfMonth":
/*!****************************************!*\
  !*** external "date-fns/startOfMonth" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/startOfMonth");

/***/ }),

/***/ "date-fns/startOfWeek":
/*!***************************************!*\
  !*** external "date-fns/startOfWeek" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/startOfWeek");

/***/ }),

/***/ "date-fns/subMonths":
/*!*************************************!*\
  !*** external "date-fns/subMonths" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/subMonths");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map