webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BigCalendar.js":
false,

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

/***/ "./components/CustomEvent.js":
false,

/***/ "./components/ErrorMessage.js":
false,

/***/ "./components/Portal.js":
false,

/***/ "./components/QuickUpdate.js":
false,

/***/ "./components/globals/functions/updateEventMethods.js":
false,

/***/ "./components/globals/mutations/mutations.js":
false,

/***/ "./components/globals/queries/queries.js":
false,

/***/ "./components/styles/BigCalendarStyles.js":
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

/***/ "./components/styles/CloseButton.js":
false,

/***/ "./components/styles/DeleteButtonStyles.js":
false,

/***/ "./components/styles/OverlayStyled.js":
false,

/***/ "./components/styles/QuickUpdateFormStyles.js":
false,

/***/ "./components/styles/QuickUpdateStyles.js":
false,

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/date-arithmetic/index.js":
false,

/***/ "./node_modules/dom-helpers/events/off.js":
false,

/***/ "./node_modules/dom-helpers/events/on.js":
false,

/***/ "./node_modules/dom-helpers/ownerDocument.js":
false,

/***/ "./node_modules/dom-helpers/query/contains.js":
false,

/***/ "./node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/query/offset.js":
false,

/***/ "./node_modules/dom-helpers/query/offsetParent.js":
false,

/***/ "./node_modules/dom-helpers/query/position.js":
false,

/***/ "./node_modules/dom-helpers/query/scrollLeft.js":
false,

/***/ "./node_modules/dom-helpers/query/scrollTop.js":
false,

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/style/index.js":
false,

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
false,

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/camelize.js":
false,

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_arrayEach.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arraySome.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssign.js":
false,

/***/ "./node_modules/lodash/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseClone.js":
false,

/***/ "./node_modules/lodash/_baseEach.js":
false,

/***/ "./node_modules/lodash/_baseFindIndex.js":
false,

/***/ "./node_modules/lodash/_baseFor.js":
false,

/***/ "./node_modules/lodash/_baseForOwn.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseHasIn.js":
false,

/***/ "./node_modules/lodash/_baseIsEqual.js":
false,

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
false,

/***/ "./node_modules/lodash/_baseIsMap.js":
false,

/***/ "./node_modules/lodash/_baseIsMatch.js":
false,

/***/ "./node_modules/lodash/_baseIsSet.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseIteratee.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash/_baseMap.js":
false,

/***/ "./node_modules/lodash/_baseMatches.js":
false,

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
false,

/***/ "./node_modules/lodash/_baseOrderBy.js":
false,

/***/ "./node_modules/lodash/_baseProperty.js":
false,

/***/ "./node_modules/lodash/_basePropertyDeep.js":
false,

/***/ "./node_modules/lodash/_baseRange.js":
false,

/***/ "./node_modules/lodash/_baseRest.js":
false,

/***/ "./node_modules/lodash/_baseSlice.js":
false,

/***/ "./node_modules/lodash/_baseSortBy.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_baseUnset.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneDataView.js":
false,

/***/ "./node_modules/lodash/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash/_compareAscending.js":
false,

/***/ "./node_modules/lodash/_compareMultiple.js":
false,

/***/ "./node_modules/lodash/_copyObject.js":
false,

/***/ "./node_modules/lodash/_copySymbols.js":
false,

/***/ "./node_modules/lodash/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash/_createBaseEach.js":
false,

/***/ "./node_modules/lodash/_createBaseFor.js":
false,

/***/ "./node_modules/lodash/_createRange.js":
false,

/***/ "./node_modules/lodash/_customOmitClone.js":
false,

/***/ "./node_modules/lodash/_equalArrays.js":
false,

/***/ "./node_modules/lodash/_equalByTag.js":
false,

/***/ "./node_modules/lodash/_equalObjects.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getMatchData.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_initCloneArray.js":
false,

/***/ "./node_modules/lodash/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash/_initCloneObject.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_isStrictComparable.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapToArray.js":
false,

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_parent.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setToArray.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/chunk.js":
false,

/***/ "./node_modules/lodash/defaults.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/findIndex.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/hasIn.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isMap.js":
false,

/***/ "./node_modules/lodash/isPlainObject.js":
false,

/***/ "./node_modules/lodash/isSet.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/keysIn.js":
false,

/***/ "./node_modules/lodash/last.js":
false,

/***/ "./node_modules/lodash/mapValues.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/omit.js":
false,

/***/ "./node_modules/lodash/property.js":
false,

/***/ "./node_modules/lodash/range.js":
false,

/***/ "./node_modules/lodash/sortBy.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toFinite.js":
false,

/***/ "./node_modules/lodash/toInteger.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/lodash/transform.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
false,

/***/ "./node_modules/moment/locale/af.js":
false,

/***/ "./node_modules/moment/locale/ar-dz.js":
false,

/***/ "./node_modules/moment/locale/ar-kw.js":
false,

/***/ "./node_modules/moment/locale/ar-ly.js":
false,

/***/ "./node_modules/moment/locale/ar-ma.js":
false,

/***/ "./node_modules/moment/locale/ar-sa.js":
false,

/***/ "./node_modules/moment/locale/ar-tn.js":
false,

/***/ "./node_modules/moment/locale/ar.js":
false,

/***/ "./node_modules/moment/locale/az.js":
false,

/***/ "./node_modules/moment/locale/be.js":
false,

/***/ "./node_modules/moment/locale/bg.js":
false,

/***/ "./node_modules/moment/locale/bm.js":
false,

/***/ "./node_modules/moment/locale/bn.js":
false,

/***/ "./node_modules/moment/locale/bo.js":
false,

/***/ "./node_modules/moment/locale/br.js":
false,

/***/ "./node_modules/moment/locale/bs.js":
false,

/***/ "./node_modules/moment/locale/ca.js":
false,

/***/ "./node_modules/moment/locale/cs.js":
false,

/***/ "./node_modules/moment/locale/cv.js":
false,

/***/ "./node_modules/moment/locale/cy.js":
false,

/***/ "./node_modules/moment/locale/da.js":
false,

/***/ "./node_modules/moment/locale/de-at.js":
false,

/***/ "./node_modules/moment/locale/de-ch.js":
false,

/***/ "./node_modules/moment/locale/de.js":
false,

/***/ "./node_modules/moment/locale/dv.js":
false,

/***/ "./node_modules/moment/locale/el.js":
false,

/***/ "./node_modules/moment/locale/en-au.js":
false,

/***/ "./node_modules/moment/locale/en-ca.js":
false,

/***/ "./node_modules/moment/locale/en-gb.js":
false,

/***/ "./node_modules/moment/locale/en-ie.js":
false,

/***/ "./node_modules/moment/locale/en-il.js":
false,

/***/ "./node_modules/moment/locale/en-nz.js":
false,

/***/ "./node_modules/moment/locale/eo.js":
false,

/***/ "./node_modules/moment/locale/es-do.js":
false,

/***/ "./node_modules/moment/locale/es-us.js":
false,

/***/ "./node_modules/moment/locale/es.js":
false,

/***/ "./node_modules/moment/locale/et.js":
false,

/***/ "./node_modules/moment/locale/eu.js":
false,

/***/ "./node_modules/moment/locale/fa.js":
false,

/***/ "./node_modules/moment/locale/fi.js":
false,

/***/ "./node_modules/moment/locale/fo.js":
false,

/***/ "./node_modules/moment/locale/fr-ca.js":
false,

/***/ "./node_modules/moment/locale/fr-ch.js":
false,

/***/ "./node_modules/moment/locale/fr.js":
false,

/***/ "./node_modules/moment/locale/fy.js":
false,

/***/ "./node_modules/moment/locale/gd.js":
false,

/***/ "./node_modules/moment/locale/gl.js":
false,

/***/ "./node_modules/moment/locale/gom-latn.js":
false,

/***/ "./node_modules/moment/locale/gu.js":
false,

/***/ "./node_modules/moment/locale/he.js":
false,

/***/ "./node_modules/moment/locale/hi.js":
false,

/***/ "./node_modules/moment/locale/hr.js":
false,

/***/ "./node_modules/moment/locale/hu.js":
false,

/***/ "./node_modules/moment/locale/hy-am.js":
false,

/***/ "./node_modules/moment/locale/id.js":
false,

/***/ "./node_modules/moment/locale/is.js":
false,

/***/ "./node_modules/moment/locale/it.js":
false,

/***/ "./node_modules/moment/locale/ja.js":
false,

/***/ "./node_modules/moment/locale/jv.js":
false,

/***/ "./node_modules/moment/locale/ka.js":
false,

/***/ "./node_modules/moment/locale/kk.js":
false,

/***/ "./node_modules/moment/locale/km.js":
false,

/***/ "./node_modules/moment/locale/kn.js":
false,

/***/ "./node_modules/moment/locale/ko.js":
false,

/***/ "./node_modules/moment/locale/ku.js":
false,

/***/ "./node_modules/moment/locale/ky.js":
false,

/***/ "./node_modules/moment/locale/lb.js":
false,

/***/ "./node_modules/moment/locale/lo.js":
false,

/***/ "./node_modules/moment/locale/lt.js":
false,

/***/ "./node_modules/moment/locale/lv.js":
false,

/***/ "./node_modules/moment/locale/me.js":
false,

/***/ "./node_modules/moment/locale/mi.js":
false,

/***/ "./node_modules/moment/locale/mk.js":
false,

/***/ "./node_modules/moment/locale/ml.js":
false,

/***/ "./node_modules/moment/locale/mn.js":
false,

/***/ "./node_modules/moment/locale/mr.js":
false,

/***/ "./node_modules/moment/locale/ms-my.js":
false,

/***/ "./node_modules/moment/locale/ms.js":
false,

/***/ "./node_modules/moment/locale/mt.js":
false,

/***/ "./node_modules/moment/locale/my.js":
false,

/***/ "./node_modules/moment/locale/nb.js":
false,

/***/ "./node_modules/moment/locale/ne.js":
false,

/***/ "./node_modules/moment/locale/nl-be.js":
false,

/***/ "./node_modules/moment/locale/nl.js":
false,

/***/ "./node_modules/moment/locale/nn.js":
false,

/***/ "./node_modules/moment/locale/pa-in.js":
false,

/***/ "./node_modules/moment/locale/pl.js":
false,

/***/ "./node_modules/moment/locale/pt-br.js":
false,

/***/ "./node_modules/moment/locale/pt.js":
false,

/***/ "./node_modules/moment/locale/ro.js":
false,

/***/ "./node_modules/moment/locale/ru.js":
false,

/***/ "./node_modules/moment/locale/sd.js":
false,

/***/ "./node_modules/moment/locale/se.js":
false,

/***/ "./node_modules/moment/locale/si.js":
false,

/***/ "./node_modules/moment/locale/sk.js":
false,

/***/ "./node_modules/moment/locale/sl.js":
false,

/***/ "./node_modules/moment/locale/sq.js":
false,

/***/ "./node_modules/moment/locale/sr-cyrl.js":
false,

/***/ "./node_modules/moment/locale/sr.js":
false,

/***/ "./node_modules/moment/locale/ss.js":
false,

/***/ "./node_modules/moment/locale/sv.js":
false,

/***/ "./node_modules/moment/locale/sw.js":
false,

/***/ "./node_modules/moment/locale/ta.js":
false,

/***/ "./node_modules/moment/locale/te.js":
false,

/***/ "./node_modules/moment/locale/tet.js":
false,

/***/ "./node_modules/moment/locale/tg.js":
false,

/***/ "./node_modules/moment/locale/th.js":
false,

/***/ "./node_modules/moment/locale/tl-ph.js":
false,

/***/ "./node_modules/moment/locale/tlh.js":
false,

/***/ "./node_modules/moment/locale/tr.js":
false,

/***/ "./node_modules/moment/locale/tzl.js":
false,

/***/ "./node_modules/moment/locale/tzm-latn.js":
false,

/***/ "./node_modules/moment/locale/tzm.js":
false,

/***/ "./node_modules/moment/locale/ug-cn.js":
false,

/***/ "./node_modules/moment/locale/uk.js":
false,

/***/ "./node_modules/moment/locale/ur.js":
false,

/***/ "./node_modules/moment/locale/uz-latn.js":
false,

/***/ "./node_modules/moment/locale/uz.js":
false,

/***/ "./node_modules/moment/locale/vi.js":
false,

/***/ "./node_modules/moment/locale/x-pseudo.js":
false,

/***/ "./node_modules/moment/locale/yo.js":
false,

/***/ "./node_modules/moment/locale/zh-cn.js":
false,

/***/ "./node_modules/moment/locale/zh-hk.js":
false,

/***/ "./node_modules/moment/locale/zh-tw.js":
false,

/***/ "./node_modules/moment/moment.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
false,

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/react-adopt/dist/index.m.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Agenda.js":
false,

/***/ "./node_modules/react-big-calendar/lib/BackgroundCells.js":
false,

/***/ "./node_modules/react-big-calendar/lib/BackgroundWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Calendar.js":
false,

/***/ "./node_modules/react-big-calendar/lib/DateContentRow.js":
false,

/***/ "./node_modules/react-big-calendar/lib/DateHeader.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Day.js":
false,

/***/ "./node_modules/react-big-calendar/lib/DayColumn.js":
false,

/***/ "./node_modules/react-big-calendar/lib/EventCell.js":
false,

/***/ "./node_modules/react-big-calendar/lib/EventEndingRow.js":
false,

/***/ "./node_modules/react-big-calendar/lib/EventRow.js":
false,

/***/ "./node_modules/react-big-calendar/lib/EventRowMixin.js":
false,

/***/ "./node_modules/react-big-calendar/lib/EventWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Header.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Month.js":
false,

/***/ "./node_modules/react-big-calendar/lib/NoopWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Popup.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Selection.js":
false,

/***/ "./node_modules/react-big-calendar/lib/TimeGrid.js":
false,

/***/ "./node_modules/react-big-calendar/lib/TimeGridEvent.js":
false,

/***/ "./node_modules/react-big-calendar/lib/TimeGridHeader.js":
false,

/***/ "./node_modules/react-big-calendar/lib/TimeGutter.js":
false,

/***/ "./node_modules/react-big-calendar/lib/TimeSlotGroup.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Toolbar.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Views.js":
false,

/***/ "./node_modules/react-big-calendar/lib/Week.js":
false,

/***/ "./node_modules/react-big-calendar/lib/WorkWeek.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/EventContainerWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/EventWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/WeekWrapper.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/common.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/index.js":
false,

/***/ "./node_modules/react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js":
false,

/***/ "./node_modules/react-big-calendar/lib/index.js":
false,

/***/ "./node_modules/react-big-calendar/lib/localizer.js":
false,

/***/ "./node_modules/react-big-calendar/lib/localizers/globalize.js":
false,

/***/ "./node_modules/react-big-calendar/lib/localizers/moment.js":
false,

/***/ "./node_modules/react-big-calendar/lib/localizers/oldGlobalize.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/DateSlotMetrics.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/DayEventLayout.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/Resources.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/TimeSlots.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/accessors.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/constants.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/dates.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/eventLevels.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/helpers.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/messages.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/move.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/propTypes.js":
false,

/***/ "./node_modules/react-big-calendar/lib/utils/selection.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/class/index.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/events/filter.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/events/index.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/events/listen.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/events/off.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/events/on.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/ownerDocument.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/closest.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/contains.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/height.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/matches.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/offset.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/offsetParent.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/position.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/querySelectorAll.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/scrollLeft.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/scrollTop.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/query/width.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/style/getComputedStyle.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/style/index.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/style/removeStyle.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/transition/isTransform.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/camelize.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/camelizeStyle.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/hyphenate.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/hyphenateStyle.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/requestAnimationFrame.js":
false,

/***/ "./node_modules/react-big-calendar/node_modules/dom-helpers/util/scrollbarSize.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-overlays/lib/LegacyPortal.js":
false,

/***/ "./node_modules/react-overlays/lib/Overlay.js":
false,

/***/ "./node_modules/react-overlays/lib/Portal.js":
false,

/***/ "./node_modules/react-overlays/lib/Position.js":
false,

/***/ "./node_modules/react-overlays/lib/RootCloseWrapper.js":
false,

/***/ "./node_modules/react-overlays/lib/utils/addEventListener.js":
false,

/***/ "./node_modules/react-overlays/lib/utils/calculatePosition.js":
false,

/***/ "./node_modules/react-overlays/lib/utils/getContainer.js":
false,

/***/ "./node_modules/react-overlays/lib/utils/ownerDocument.js":
false,

/***/ "./node_modules/react-spring/web.js":
false,

/***/ "./node_modules/uncontrollable/lib/index.js":
false,

/***/ "./node_modules/uncontrollable/lib/utils.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Calendar */ "./components/Calendar.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/pages/index.js";




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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9ed94f3ec6b6a3ac6173.hot-update.js.map