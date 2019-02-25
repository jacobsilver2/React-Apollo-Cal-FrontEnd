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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Header.js";












next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
};

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "yiwodm-0"
})(["font-size:2.5rem;margin-left:4rem;position:relative;z-index:2;a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.mainColor;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "yiwodm-1"
})([".bar{border-bottom:5px solid ", ";display:grid;grid-template-columns:repeat(auto-fit,1fr);justify-content:center;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightGrey;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, me.name)), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "React-Cal")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "React-Apollo-Cal"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Nav.js";


 // import { TOGGLE_SIDEBAR_MUTATION } from './Sidebar';





var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/newCalEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "New Event")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Sign In")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: .8rem;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 100;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'radnika_next';\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n  button {  font-family: 'radnika_next'; }\n\n  .modal-cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n    transform: translateZ(0);\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  .modal-area {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 2.5em 1.5em 1.5em 1.5em;\n    background-color: #ffffff;\n    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tag {\n    background: #eee;\n    border-radius: 3px 0 0 3px;\n    color: #999;\n    display: inline-block;\n    height: 26px;\n    line-height: 26px;\n    padding: 0 20px 0 23px;\n    position: relative;\n    margin: 0 10px 10px 0;\n    text-decoration: none;\n    -webkit-transition: color 0.2s;\n  }\n\n  .tag::before {\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);\n    content: '';\n    height: 6px;\n    left: 10px;\n    position: absolute;\n    width: 6px;\n    top: 10px;\n  }\n\n  .tag::after {\n    background: #fff;\n    border-bottom: 13px solid transparent;\n    border-left: 10px solid #eee;\n    border-top: 13px solid transparent;\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  \n  .tag:hover {\n    background-color: '#1a8fff';\n    color: white;\n  }\n  \n  .tag:hover::after {\n     border-left-color: '#1a8fff'; \n  }\n\n  @media screen and (min-width: 500px) {\n    /* Center the Modal! */\n    .modal-area {\n      left: 50%;\n      top: 50%;\n      height: auto;\n      transform: translate(-50%, -50%);\n      max-width: calc(100% - 20em);\n      max-height: calc(100% - 1em);\n    }\n  }\n\n  ._modal-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.5em;\n    line-height: 1;\n    background: #f6f6f7;\n    border: 0;\n    box-shadow: 0;\n    cursor: pointer;\n  }\n\n  ._modal-close-icon {\n    width: 25px;\n    height: 25px;\n    fill: transparent;\n    stroke: black;\n    stroke-linecap: round;\n    stroke-width: 2;\n  }\n\n  .modal-body {\n    padding-top: 0.25em;\n  }\n  ._hide-visual {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: 1px !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n    white-space: nowrap !important;\n  }\n\n  .scroll-lock {\n    overflow: hidden;\n    margin-right: 17px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  mainColor: '#1a8fff',
  textColor: '#373a42',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#eeecf0',
  neutralColor: '#fff',
  maxWidth: '90vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  offWhite: '#EDEDED',
  red: '#FF0000',
  black: '#373a42',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  highlighted: '#fff'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-12g8f3k-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-12g8f3k-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Search.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function routeToAct(act) {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
    pathname: '/act',
    query: {
      id: act.id
    }
  });
}

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Autocomplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      acts: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // turn loading on
                _this.setState({
                  loading: true
                });

                _context.next = 3;
                return client.query({
                  query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_7__["SEARCH_ACTS_QUERY"],
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 3:
                res = _context.sent;

                _this.setState({
                  acts: res.data.acts,
                  loading: false
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  _createClass(Autocomplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(downshift__WEBPACK_IMPORTED_MODULE_2__["resetIdCounter"])();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: routeToAct,
        itemToString: function itemToString(item) {
          return item === null ? '' : item.name;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            type: "search",
            placeholder: 'search for an Act',
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, _this2.state.acts.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["DropDownItem"], _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            width: "50",
            src: item.image,
            alt: item.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }), item.name);
        }), !_this2.state.acts.length && !_this2.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__["DropDownItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Nothing Found for ", inputValue)));
      }));
    }
  }]);

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_SideBarStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/SideBarStyles */ "./components/styles/SideBarStyles.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
/* harmony import */ var react_svg_loader_assets_calendar_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-svg-loader!../assets/calendar.svg */ "./node_modules/react-svg-loader/lib/loader.js!./assets/calendar.svg");
/* harmony import */ var react_svg_loader_assets_calendar_add_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-svg-loader!../assets/calendar-add.svg */ "./node_modules/react-svg-loader/lib/loader.js!./assets/calendar-add.svg");
/* harmony import */ var react_svg_loader_assets_music_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-svg-loader!../assets/music.svg */ "./node_modules/react-svg-loader/lib/loader.js!./assets/music.svg");
/* harmony import */ var react_svg_loader_assets_music_add_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-svg-loader!../assets/music-add.svg */ "./node_modules/react-svg-loader/lib/loader.js!./assets/music-add.svg");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Sidebar.js";












next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', handleRouteStart);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', handleRouteComplete);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', handleRouteError);

function handleRouteStart() {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
}

function handleRouteComplete() {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
}

function handleRouteError() {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
}

var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SideBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_loader_assets_calendar_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: 50,
      height: 50,
      filter: 'invert(100%)',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hovertext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "All Events")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/newCalEvent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_loader_assets_calendar_add_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
      width: 50,
      height: 50,
      filter: 'invert(100%)',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "hovertext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Add Event")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "acts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/acts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_loader_assets_music_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
      width: 50,
      height: 50,
      filter: {
        invert: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "hovertext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "All Acts")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/newAct",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_loader_assets_music_add_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
      width: 50,
      height: 50,
      filter: {
        grayscale: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "hovertext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Add Act")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "automations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/automations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Automations"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "analytics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/analytics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Analytics")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Sign In"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Signout.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNOUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGNOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Signout = function Signout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: SIGNOUT_MUTATION,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Sign Out");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return _globals_queries_queries__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"]; });

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/globals/queries/queries.js":
/*!***********************************************!*\
  !*** ./components/globals/queries/queries.js ***!
  \***********************************************/
/*! exports provided: ALL_EVENTS_QUERY, SINGLE_EVENT_QUERY, ALL_ACTS_QUERY, ALL_ACTS_QUERY_PAGINATION, LOCAL_STATE_QUERY, PAGINATION_QUERY, SEARCH_ACTS_QUERY, SINGLE_ACT_QUERY, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_EVENTS_QUERY", function() { return ALL_EVENTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_EVENT_QUERY", function() { return SINGLE_EVENT_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ACTS_QUERY", function() { return ALL_ACTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ACTS_QUERY_PAGINATION", function() { return ALL_ACTS_QUERY_PAGINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ACTS_QUERY", function() { return SEARCH_ACTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_ACT_QUERY", function() { return SINGLE_ACT_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./config.js");
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me{\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ACT_QUERY($id: ID!) {\n    act(where: { id: $id }) {\n      id\n      name\n      description\n      image\n      email\n      notes\n      event{\n        id\n        start\n        allDay\n        draw\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query SEARCH_ACTS_QUERY($searchTerm: String!) {\n    acts(where: {\n      OR: [\n        {name_contains: $searchTerm},\n        {description_contains: $searchTerm},\n      ] }) \n      {\n        id \n        name\n        image\n        event{\n          id\n          start\n        }\n      }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY{\n    actsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query {\n    modalOpen @client\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ACTS_QUERY($skip: Int=0, $first: Int=", ") {\n    acts(first: $first, skip: $skip, orderBy: name_ASC) {\n      id\n      name\n      description\n      image\n      largeImage\n      email\n      notes\n      event{\n        id\n        title\n        draw\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ACTS_QUERY {\n    acts {\n      id\n      name\n      description\n      image\n      largeImage\n      email\n      notes\n      event{\n        id\n        title\n        draw\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_EVENT_QUERY($id: ID!) {\n    event(where: {id: $id}) {\n      id\n      title\n      status\n      start\n      end\n      allDay\n      notes\n      draw\n      act {\n        id\n        name\n        description\n        email\n        image\n        largeImage\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_EVENTS_QUERY {\n    events {\n      id\n      title\n      status\n      start\n      end\n      allDay\n      notes\n      draw\n      act {\n        id\n        name\n        description\n        notes\n        image\n        email\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ALL_EVENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var SINGLE_EVENT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var ALL_ACTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var ALL_ACTS_QUERY_PAGINATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_1__["perPage"]);
var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var SEARCH_ACTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var SINGLE_ACT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-6xg2gk-0"
})(["position:absolute;text-align:right;width:50%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-6xg2gk-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;text-align:right;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-6xg2gk-2"
})(["position:relative;text-align:right;input{text-align:right;width:50%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "wea9k1-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:.8em;background:none;border:0;cursor:pointer;color:", ";@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:", ";height:100%;left:0;position:absolute;top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/SideBarStyles.js":
/*!********************************************!*\
  !*** ./components/styles/SideBarStyles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SidebarStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SideBarStyles__SidebarStyles",
  componentId: "sc-1vxnimq-0"
})(["display:grid;grid-template-rows:auto 1fr auto;opacity:0.95;padding:20px;position:relative;background:", ";position:fixed;height:100%;top:0;bottom:0;left:0;min-width:100px;transition:all 0.4s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;width:7%;.hovertext{display:none;}&:hover{width:15%;.hovertext{display:inline;padding-left:50px;}};header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;}a{color:white;font-size:.9rem;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (SidebarStyles);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 16;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: TOGGLE_MODAL_MUTATION, LOCAL_STATE_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleModal @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    modalOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleModal: function toggleModal(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }),
                modalOpen = _cache$readQuery.modalOpen; // Write the cart State to the opposite


            var data = {
              data: {
                modalOpen: !modalOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        modalOpen: false
      }
    }
  });
}


/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./assets/calendar-add.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-svg-loader/lib/loader.js!./assets/calendar-add.svg ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: "32.75", height: "32.75", viewBox: "0 0 32.75 32.75" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M29.375 1.25h-1.123c.029-.093.059-.186.059-.289a.963.963 0 0 0-1.924 0c0 .103.028.196.059.289h-3.68c.029-.093.059-.186.059-.289a.962.962 0 1 0-1.925 0 .93.93 0 0 0 .059.289h-3.682c.029-.093.059-.186.059-.289a.961.961 0 0 0-1.922 0c0 .103.028.196.058.289h-3.681c.029-.093.059-.186.059-.289a.962.962 0 0 0-1.923 0c0 .103.028.196.058.289h-3.68a.93.93 0 0 0 .059-.289.96.96 0 1 0-1.923 0c0 .103.028.196.058.289H3.375A2.752 2.752 0 0 0 .625 4v26a2.751 2.751 0 0 0 2.75 2.75H26.27l5.855-5.855V4a2.752 2.752 0 0 0-2.75-2.75zm1.25 25.023l-.311.311h-2.355c-1.102 0-2 .9-2 2v2.355l-.311.311H3.375c-.689 0-1.25-.561-1.25-1.25V5h28.5v21.273z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M15.049 23.682h2.652v-3.981h3.979v-2.652h-3.979v-3.98h-2.652v3.98H11.07v2.652h3.979z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M16.376 28.229c5.433 0 9.853-4.42 9.853-9.854 0-5.434-4.42-9.854-9.853-9.854-5.434 0-9.854 4.42-9.854 9.854 0 5.434 4.42 9.854 9.854 9.854zm0-18.192c4.597 0 8.337 3.741 8.337 8.338 0 4.598-3.74 8.338-8.337 8.338-4.598 0-8.339-3.74-8.339-8.338 0-4.597 3.741-8.338 8.339-8.338z" })
  );
});

/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./assets/calendar.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/react-svg-loader/lib/loader.js!./assets/calendar.svg ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: "33", height: "33", viewBox: "0 0 33 33" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M28.5 0h-24A4.505 4.505 0 0 0 0 4.5v24C0 30.98 2.019 33 4.5 33h24c2.48 0 4.5-2.02 4.5-4.5v-24C33 2.019 30.98 0 28.5 0zm3 28.5c0 1.648-1.35 3-3 3h-24c-1.65 0-3-1.352-3-3v-24c0-1.649 1.35-3 3-3h24c1.65 0 3 1.351 3 3v24z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "9.25", cy: "4.773", r: "1.273" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "16.5", cy: "4.773", r: "1.273" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "23.75", cy: "4.773", r: "1.273" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M11.134 12.902h4.596v4.088h-4.596zM17.271 12.902h4.595v4.088h-4.595zM23.404 12.902H28v4.088h-4.596zM5 18.359h4.595v4.086H5zM11.134 18.359h4.596v4.086h-4.596zM17.271 18.359h4.595v4.086h-4.595zM23.404 18.359H28v4.086h-4.596zM5 23.816h4.595v4.086H5zM11.134 23.816h4.596v4.086h-4.596zM17.271 23.816h4.595v4.086h-4.595zM23.404 23.816H28v4.086h-4.596z" })
  );
});

/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./assets/music-add.svg":
/*!****************************************************************************!*\
  !*** ./node_modules/react-svg-loader/lib/loader.js!./assets/music-add.svg ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 59 59" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#df4d60", d: "M0 2v47h56V2z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M39.659 11.248a.999.999 0 0 0-.79-.239l-18 2.367a1 1 0 0 0-.869.991V33.801c-1.169-1.019-2.754-1.649-4.5-1.649-3.584 0-6.5 2.642-6.5 5.889s2.916 5.889 6.5 5.889 6.5-2.642 6.5-5.889V20.244l16-2.104v10.402c-1.133-.966-2.653-1.562-4.327-1.562-3.488 0-6.326 2.572-6.326 5.734s2.838 5.735 6.326 5.735c3.489 0 6.327-2.573 6.327-5.735V12a1 1 0 0 0-.341-.752z", fill: "#fff" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "47", cy: "45", r: "12", fill: "#71c386" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M53 44h-5v-5a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z", fill: "#fff" })
  );
});

/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./assets/music.svg":
/*!************************************************************************!*\
  !*** ./node_modules/react-svg-loader/lib/loader.js!./assets/music.svg ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 59 59" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#df4d60", d: "M0 2v47h56V2z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M39.659 11.248a.999.999 0 0 0-.79-.239l-18 2.367a1 1 0 0 0-.869.991V33.801c-1.169-1.019-2.754-1.649-4.5-1.649-3.584 0-6.5 2.642-6.5 5.889s2.916 5.889 6.5 5.889 6.5-2.642 6.5-5.889V20.244l16-2.104v10.402c-1.133-.966-2.653-1.562-4.327-1.562-3.488 0-6.326 2.572-6.326 5.734s2.838 5.735 6.326 5.735c3.489 0 6.327-2.573 6.327-5.735V12a1 1 0 0 0-.341-.752z", fill: "#fff" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "47", cy: "45", r: "12", fill: "#26b999" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M53.571 39.179a.999.999 0 0 0-1.392.25l-5.596 8.04-3.949-3.242a.999.999 0 1 0-1.268 1.546l4.786 3.929a1.003 1.003 0 0 0 1.455-.201l6.214-8.929a1.002 1.002 0 0 0-.25-1.393z", fill: "#fff" })
  );
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    // this is a special Next.js lifecycle method
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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
//# sourceMappingURL=_app.js.map