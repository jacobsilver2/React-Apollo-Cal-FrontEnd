webpackHotUpdate("static/development/pages/newCalEvent.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: ALL_EVENTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_EVENTS_QUERY", function() { return ALL_EVENTS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/CalendarStyles */ "./components/styles/CalendarStyles.js");
/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CalendarEvent */ "./components/CalendarEvent.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Calendar.js";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_EVENTS_QUERY {\n    events {\n      id\n      title\n      description\n      image\n      largeImage\n      date\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ALL_EVENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createNewEvent", function () {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
        pathname: '/newCalEvent'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHeader", function () {
      var dateFormat = 'MMMM YYYY';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header row flex-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon",
        onClick: _this.prevMonth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "chevron_left")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(_this.state.currentMonth, dateFormat, {
        awareOfUnicodeTokens: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col col-end",
        onClick: _this.nextMonth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "chevron_right")));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDays", function () {
      var dateFormat = 'EEEE';
      var days = [];
      var startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfWeek"])(_this.state.currentMonth);

      for (var i = 0; i < 7; i++) {
        days.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col col-center",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(startDate, i), dateFormat, {
          awareOfUnicodeTokens: true
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "days row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, days);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCells", function (events) {
      var _this$state = _this.state,
          currentMonth = _this$state.currentMonth,
          selectedDate = _this$state.selectedDate;
      var monthStart = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfMonth"])(currentMonth);
      var monthEnd = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfMonth"])(monthStart);
      var startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfWeek"])(monthStart);
      var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfWeek"])(monthEnd);
      var dateFormat = "d";
      var rows = [];
      var days = [];
      var day = startDate;
      var formattedDate = ""; // let dateCheckFormat = "YYYY MMMM d";

      while (day <= endDate) {
        for (var i = 0; i < 7; i++) {
          formattedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(day, dateFormat, {
            awareOfUnicodeTokens: true
          });
          var matchedEvent = events.filter(function (event) {
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(event.date, day);
          });
          days.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col cell ".concat(!Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(day, monthStart) ? "disabled" : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(day, selectedDate) ? "selected" : ""),
            key: day.toString(),
            onClick: _this.createNewEvent,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, formattedDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, formattedDate), matchedEvent.length > 0 && matchedEvent.map(function (e) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarEvent__WEBPACK_IMPORTED_MODULE_6__["default"], {
              event: e,
              key: e.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            });
          })));
          day = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(day, 1);
        }

        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          key: day,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, days));
        days = [];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, rows);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextMonth", function () {
      _this.setState({
        currentMonth: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMonths"])(_this.state.currentMonth, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevMonth", function () {
      _this.setState({
        currentMonth: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["subMonths"])(_this.state.currentMonth, 1)
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_EVENTS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_5__["StyledCal"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, _this2.renderHeader(), _this2.renderDays(), _this2.renderCells(data.events)));
      });
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./components/CalendarEvent.js":
/*!*************************************!*\
  !*** ./components/CalendarEvent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/CalendarEvent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledEvent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CalendarEvent__StyledEvent",
  componentId: "dgr0vy-0"
})(["background:white;border:1px solid ", ";font-size:.4em;position:relative;"], function (props) {
  return props.theme.offWhite;
});

var CalendarEvent =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarEvent, _Component);

  function CalendarEvent() {
    _classCallCheck(this, CalendarEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarEvent).apply(this, arguments));
  }

  _createClass(CalendarEvent, [{
    key: "render",
    value: function render() {
      var event = this.props.event;
      var formattedDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(event.date, "MMMM d");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledEvent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/event',
          query: {
            id: event.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u2022", event.title)));
    }
  }]);

  return CalendarEvent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CalendarEvent, "propTypes", {
  event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CalendarEvent);

/***/ }),

/***/ "./components/CreateEvent.js":
/*!***********************************!*\
  !*** ./components/CreateEvent.js ***!
  \***********************************/
/*! exports provided: CREATE_EVENT_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EVENT_MUTATION", function() { return CREATE_EVENT_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Calendar */ "./components/Calendar.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/CreateEvent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_EVENT_MUTATION(\n      $title: String!\n      $description: String\n      $image: String\n      $largeImage: String\n      $date: DateTime!\n  ) {\n    createEvent(\n      title: $title\n      description: $description\n      image: $image\n      largeImage: $largeImage\n      date: $date\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var CREATE_EVENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var CreateEvent =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateEvent, _Component);

  function CreateEvent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateEvent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateEvent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: '',
      description: '',
      image: '',
      largeImage: '',
      date: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the events in the cache
      var data = cache.readQuery({
        query: _Calendar__WEBPACK_IMPORTED_MODULE_7__["ALL_EVENTS_QUERY"]
      }); // 2. Add the new event to the events

      data.events = data.events.push(payload.data); // 3. Put the items back

      cache.writeQuery({
        query: _Calendar__WEBPACK_IMPORTED_MODULE_7__["ALL_EVENTS_QUERY"],
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);
                data.append('upload_preset', 'react-apollo-cal');
                _context.next = 6;
                return fetch('https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                file = _context.sent;

                _this.setState({
                  image: file.secure_url,
                  largeImage: file.eager[0].secure_url
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreateEvent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_EVENT_MUTATION,
        update: this.update,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, function (createEvent, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            called = _ref2.called,
            data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      _context2.next = 3;
                      return createEvent();

                    case 3:
                      res = _context2.sent;
                      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
                        pathname: '/'
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "Upload an image",
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this2.state.image,
          alt: "Upload Preview",
          width: "200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Date", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "date",
          id: "date",
          name: "date",
          placeholder: "Date",
          required: true,
          value: _this2.state.date,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter A Description",
          required: true,
          value: _this2.state.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Submit")));
      });
    }
  }]);

  return CreateEvent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (CreateEvent);

/***/ }),

/***/ "./components/globals/mutations/mutations.js":
false,

/***/ "./components/globals/queries/queries.js":
false,

/***/ "./components/styles/CalendarStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/CalendarStyles.js ***!
  \*********************************************/
/*! exports provided: StyledCal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCal", function() { return StyledCal; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var calTheme = {
  mainColor: '#1a8fff',
  textColor: '#777',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#f9f9f9',
  neutralColor: '#fff'
};
var StyledCal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CalendarStyles__StyledCal",
  componentId: "sc-1j3issn-0"
})([".icon{font-family:'material-icons';font-style:normal;font-style:normal;display:inline-block;vertical-align:middle;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;}.header{display:block;width:100%;padding:1.75em 0;border-bottom:1px solid ", ";background:", ";}.row{margin:0;padding:0;display:flex;flex-direction:row;flex-wrap:wrap;width:100%;}.row-middle{align-items:center;}.col{flex-grow:1;flex-basis:0;max-width:100%;}.col-start{justify-content:flex-start;text-align:left;}.col-center{justify-content:center;text-align:center;}.col-end{justify-content:flex-end;text-align:right;}.calendar{display:block;position:relative;width:100%;background:", ";border:1px solid ", ";}.calendar .header{text-transform:uppercase;font-weight:700;font-size:115%;padding:1.5em 0;border-bottom:1px solid ", ";}.calendar .header .icon{cursor:pointer;transition:.15s ease-out;}.calendar .header .icon:hover{transform:scale(1.75);transition:.25s ease-out;color:", ";}.calendar .header .icon:first-of-type{margin-left:1em;}.calendar .header .icon:last-of-type{margin-right:1em;}.calendar .days{text-transform:uppercase;font-weight:400;color:", ";font-size:70%;padding:.75em 0;border-bottom:1px solid ", ";}.calendar .body .cell{position:relative;height:5em;border-right:1px solid ", ";overflow:hidden;cursor:pointer;background:", ";transition:0.25s ease-out;}.calendar .body .cell:hover{background:", ";transition:0.5s ease-out;}.calendar .body .selected{border-left:10px solid transparent;border-image:linear-gradient(45deg,#1a8fff 0%,#53cbf1 40%);border-image-slice:1;}.calendar .body .row{border-bottom:1px solid ", ";}.calendar .body .row:last-child{border-bottom:none;}.calendar .body .cell:last-child{border-right:none;}.calendar .body .cell .number{position:absolute;font-size:82.5%;line-height:1;top:.75em;right:.75em;font-weight:700;}.calendar .body .disabled{color:", ";pointer-events:none;}.calendar .body .cell .bg{font-weight:700;line-height:1;color:", ";opacity:0;font-size:8em;position:absolute;top:-.2em;right:-.05em;transition:.25s ease-out;letter-spacing:-.07em;}.calendar .body .cell:hover .bg,.calendar .body .selected .bg{opacity:0.05;transition:.5s ease-in;}.calendar .body .col{flex-grow:0;flex-basis:calc(100%/7);width:calc(100%/7);}"], calTheme.borderColor, calTheme.neutralColor, calTheme.bgColor, calTheme.borderColor, calTheme.borderColor, calTheme.mainColor, calTheme.textColorLight, calTheme.borderColor, calTheme.borderColor, calTheme.neutralColor, calTheme.bgColor, calTheme.borderColor, calTheme.textColorLight, calTheme.mainColor);


/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "Form",
  componentId: "sc-193v0pb-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.red;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./config.js":
false,

/***/ "./lib/possibleStatus.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-adopt/dist/index.m.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-spring/web.js":
false

})
//# sourceMappingURL=newCalEvent.js.9ed94f3ec6b6a3ac6173.hot-update.js.map