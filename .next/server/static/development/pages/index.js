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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BigCalendar.js":
/*!***********************************!*\
  !*** ./components/BigCalendar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-big-calendar */ "react-big-calendar");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-adopt */ "react-adopt");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_adopt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CustomEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomEvent */ "./components/CustomEvent.js");
/* harmony import */ var _QuickUpdate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QuickUpdate */ "./components/QuickUpdate.js");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-big-calendar/lib/addons/dragAndDrop */ "react-big-calendar/lib/addons/dragAndDrop");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_BigCalendarStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/BigCalendarStyles */ "./components/styles/BigCalendarStyles.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/BigCalendar.js";

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















var localizer = react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default.a.momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_6___default.a);
var DnDCalendar = react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_10___default()(react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default.a);
var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_4__["adopt"])({
  moveEvent: function moveEvent(_ref) {
    var updates = _ref.updates,
        updateCache = _ref.updateCache,
        render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_13__["MOVE_EVENT_MUTATION"],
      variables: updates,
      update: updateCache,
      optimisticResponse: {
        __typename: 'Mutation',
        moveEvent: {
          start: updates.start,
          end: updates.end,
          id: updates.id,
          __typename: 'Event'
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, render);
  },
  allEvents: function allEvents(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_12__["ALL_EVENTS_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, render);
  },
  toggleModal: function toggleModal(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_13__["TOGGLE_MODAL_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, render);
  },
  localState: function localState(_ref4) {
    var render = _ref4.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_12__["LOCAL_STATE_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, render);
  },
  spring: function spring(_ref5) {
    var render = _ref5.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["Spring"], {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, render);
  }
});

var BigCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(BigCalendar, _Component);

  function BigCalendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BigCalendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BigCalendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      eventSelected: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEventResize", function (type, _ref6) {
      var event = _ref6.event,
          start = _ref6.start,
          end = _ref6.end,
          allDay = _ref6.allDay;

      _this.setState(function (state) {
        state.events[0].start = start;
        state.events[0].end = end;
        return {
          events: state.events
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectSlot", function (e) {
      switch (e.action) {
        case 'click':
          console.log('slot was clicked');
          break;

        case 'doubleClick':
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
            pathname: '/newCalEvent',
            query: {
              start: encodeURIComponent(e.start),
              end: encodeURIComponent(e.end)
            }
          });
          break;

        case 'select':
          console.log('slot was selected');
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToolTipAccess", function (e) {
      var name = e.act.name ? "".concat(e.act.name) : null;
      var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(e.start, "h:mmaaaaa");
      return "".concat(time, " ").concat(name);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "titleAccessor", function (e) {
      var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(e.start, "h:mmaaaaa");
      var name = e.act.name ? " ".concat(e.act.name) : null;
      return time + name;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "eventStyleGetter", function (e) {
      var backGroundColor = '';

      switch (e.status) {
        case 'HELD':
          backGroundColor = 'grey';
          break;

        case 'CANCELLED':
          backGroundColor = 'red';
          break;
      }

      var style = {
        backgroundColor: backGroundColor
      };
      return {
        style: style
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMoveEvent", function (_ref7, moveEventMutation) {
      var event = _ref7.event,
          start = _ref7.start,
          end = _ref7.end,
          droppedOnAllDaySlot = _ref7.isAllDay;

      _this.setState({
        start: start,
        end: end,
        id: event.id
      });

      moveEventMutation().catch(function (err) {
        alert(err.message);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCache", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the cache for the items we want
      var data = cache.readQuery({
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_12__["ALL_EVENTS_QUERY"]
      }); // 2. Filter the deleted itemout of the page

      var eventIndex = data.events.findIndex(function (event) {
        return event.id === payload.data.moveEvent.id;
      });
      data.events[eventIndex].start = payload.data.moveEvent.start;
      data.events[eventIndex].end = payload.data.moveEvent.end; // 3. Put the items back!

      cache.writeQuery({
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_12__["ALL_EVENTS_QUERY"],
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggleModal", function (e, toggleModal) {
      _this.setState({
        event: e
      });

      toggleModal();
    });

    return _this;
  }

  _createClass(BigCalendar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Composed, {
        updates: this.state,
        updateCache: this.updateCache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, function (_ref8) {
        var moveEvent = _ref8.moveEvent,
            allEvents = _ref8.allEvents,
            toggleModal = _ref8.toggleModal,
            localState = _ref8.localState,
            spring = _ref8.spring;
        if (allEvents.loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "Loading...");
        if (allEvents.error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "Error: ", allEvents.error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, localState.data.modalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuickUpdate__WEBPACK_IMPORTED_MODULE_9__["default"], {
          event: _this2.state.event,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: spring,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_BigCalendarStyles__WEBPACK_IMPORTED_MODULE_11__["StyledBigCal"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DnDCalendar, {
          events: allEvents.data.events,
          eventPropGetter: function eventPropGetter(e) {
            return _this2.eventStyleGetter(e);
          },
          onSelectEvent: function onSelectEvent(e) {
            return _this2.onToggleModal(e, toggleModal);
          },
          onDoubleClickEvent: function onDoubleClickEvent(e) {
            return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
              pathname: '/updateEvent',
              query: {
                id: e.id,
                start: encodeURIComponent(e.start)
              }
            });
          },
          onEventDrop: function onEventDrop(e) {
            return _this2.onMoveEvent(e, moveEvent);
          },
          selectable: true,
          localizer: localizer,
          startAccessor: function startAccessor(e) {
            return moment__WEBPACK_IMPORTED_MODULE_6___default()(e.start).toDate();
          },
          endAccessor: function endAccessor(e) {
            return moment__WEBPACK_IMPORTED_MODULE_6___default()(e.end).toDate();
          },
          onEventResize: _this2.onEventResize,
          popup: true,
          popupOffset: {
            x: 30,
            y: 20
          },
          titleAccessor: _this2.titleAccessor,
          onSelectSlot: function onSelectSlot(e) {
            return _this2.onSelectSlot(e);
          },
          tooltipAccessor: function tooltipAccessor(e) {
            return _this2.onToolTipAccess(e);
          },
          defaultView: "month",
          defaultDate: new Date(),
          views: ['month'],
          style: {
            height: "100vh"
          },
          components: {
            event: _CustomEvent__WEBPACK_IMPORTED_MODULE_8__["default"]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }))));
      });
    }
  }]);

  return BigCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BigCalendar);

/***/ }),

/***/ "./components/CustomEvent.js":
/*!***********************************!*\
  !*** ./components/CustomEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/CustomEvent.js";

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




var Event = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CustomEvent__Event",
  componentId: "sc-11ix3ah-0"
})([""]);

var CustomEvent =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomEvent, _Component);

  function CustomEvent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomEvent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomEvent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContextMenu", function (e) {
      console.log('right clicked');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseOver", function (e) {
      setTimeout(function () {
        return console.log('moused over');
      }, 1500);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      console.log('clicked');
    });

    return _this;
  }

  _createClass(CustomEvent, [{
    key: "render",
    value: function render() {
      var event = this.props.event;
      var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(event.start, "h:mmaaaaa");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, start, " ", event.act.name));
    }
  }]);

  return CustomEvent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CustomEvent);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "u8tmc8-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Portal.js":
/*!******************************!*\
  !*** ./components/Portal.js ***!
  \******************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portal).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.element = document.querySelector(this.props.selector);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.element === undefined) {
        return null;
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this.element);
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./components/QuickUpdate.js":
/*!***********************************!*\
  !*** ./components/QuickUpdate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-adopt */ "react-adopt");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_adopt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portal */ "./components/Portal.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_QuickUpdateStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/QuickUpdateStyles */ "./components/styles/QuickUpdateStyles.js");
/* harmony import */ var _styles_OverlayStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/OverlayStyled */ "./components/styles/OverlayStyled.js");
/* harmony import */ var _styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/QuickUpdateFormStyles */ "./components/styles/QuickUpdateFormStyles.js");
/* harmony import */ var _styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/DeleteButtonStyles */ "./components/styles/DeleteButtonStyles.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_functions_updateEventMethods__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./globals/functions/updateEventMethods */ "./components/globals/functions/updateEventMethods.js");
/* harmony import */ var _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/possibleStatus */ "./lib/possibleStatus.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_3__["adopt"])({
  allActs: function allActs(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_13__["ALL_ACTS_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, render);
  },
  updateEventMutation: function updateEventMutation(_ref2) {
    var updates = _ref2.updates,
        render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__["UPDATE_EVENT_MUTATION"],
      variables: updates,
      refetchQueries: [{
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_13__["ALL_EVENTS_QUERY"]
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, render);
  },
  toggleModalMutation: function toggleModalMutation(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__["TOGGLE_MODAL_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, render);
  }
});

var QuickUpdate =
/*#__PURE__*/
function (_Component) {
  _inherits(QuickUpdate, _Component);

  function QuickUpdate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QuickUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QuickUpdate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;

      switch (name) {
        case 'status':
          return _this.setState({
            status: value
          });

        case 'select-existing-act':
          return _this.setState({
            actId: value,
            name: '',
            email: '',
            description: '',
            image: '',
            largeImage: ''
          });

        case 'duration':
          var val = parseFloat(value);
          debugger;
          return _this.setState({
            duration: val,
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMinutes"])(!!_this.state.start ? _this.state.start : _this.props.start, val)
          });

        case 'draw':
          val = parseFloat(value);
          return _this.setState(_defineProperty({}, name, value));

        case 'notes':
          var notes = _toConsumableArray(_this.state.notes);

          var selectedIndex = parseInt(e.target.dataset.key);
          notes[selectedIndex] = value;
          return _this.setState({
            notes: notes
          });
      }

      ;

      switch (type) {
        case 'date':
          var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(_this.state.start, "H:MM", {
            awareOfUnicodeTokens: true
          });
          var startDateTime = new Date("".concat(value, " ").concat(time));
          var title = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(value, "YYYY-MM-dd", {
            awareOfUnicodeTokens: true
          });
          var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMinutes"])(startDateTime, !!_this.state.duration ? _this.state.duration : _this.props.duration);

          _this.setState({
            start: startDateTime,
            title: title,
            end: end
          });

          break;

        case 'time':
          var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(!!_this.state.start ? _this.state.start : _this.props.start, "YYYY-MM-dd", {
            awareOfUnicodeTokens: true
          });
          startDateTime = new Date("".concat(date, " ").concat(value));
          end = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMinutes"])(startDateTime, !!_this.state.duration ? _this.state.duration : _this.props.duration);

          _this.setState({
            start: startDateTime,
            end: end
          });

          break;

        case 'checkbox':
          _this.setState({
            allDay: !!_this.state.allDay ? !_this.state.allDay : !_this.props.allDay
          });

          break;

        default:
          _this.setState(_defineProperty({}, name, value));

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addNoteField", function (e, notes) {
      e.preventDefault();

      if (notes) {
        var _notesCopy = _toConsumableArray(notes);

        _notesCopy.push('');

        return _this.setState({
          notes: _notesCopy
        });
      }

      var notesCopy = _toConsumableArray(_this.state.notes);

      notesCopy.push('');
      return _this.setState({
        notes: notesCopy
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDeleteNote", function (e, index, notes) {
      e.preventDefault();

      if (notes) {
        var _notesCopy2 = _toConsumableArray(notes);

        var _notesFiltered = _notesCopy2.filter(function (note, i) {
          return i !== index;
        });

        return _this.setState({
          notes: _notesFiltered
        });
      }

      var notesCopy = _toConsumableArray(_this.state.notes);

      var notesFiltered = notesCopy.filter(function (note, i) {
        return i != index;
      });
      return _this.setState({
        notes: notesFiltered
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
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
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateEvent",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e, updateEventMutation, closeModal) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.next = 3;
                return updateEventMutation({
                  variables: _objectSpread({
                    id: _this.props.event.id
                  }, _this.state)
                });

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return closeModal();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(QuickUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Composed, {
        singleEventId: this.props.id,
        updateCache: _globals_functions_updateEventMethods__WEBPACK_IMPORTED_MODULE_14__["updateCache"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, function (_ref6) {
        var allActs = _ref6.allActs,
            updateEventMutation = _ref6.updateEventMutation,
            toggleModalMutation = _ref6.toggleModalMutation;
        var event = _this2.props.event;
        var formattedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(event.start, "YYYY-MM-dd", {
          awareOfUnicodeTokens: true
        });
        var formattedTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(event.start, "HH:mm", {
          awareOfUnicodeTokens: true
        });
        var notes = null;

        if (_this2.state.notes) {
          notes = _this2.state.notes.map(function (note, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
              id: "notes",
              "data-key": index,
              name: "notes",
              placeholder: "Enter A Note",
              value: note,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, "-"));
          });
        } else if (event.notes.length > 0) {
          notes = event.notes.map(function (note, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
              id: "notes",
              "data-key": index,
              name: "notes",
              placeholder: "Enter A Note",
              value: note,
              onChange: _this2.handleChange,
              disabled: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index, event.notes);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, "-"));
          });
        }

        var acts = allActs.data.acts ? allActs.data.acts.map(function (act) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: act.id,
            value: act.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, act.name);
        }) : null;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["Portal"], {
          selector: "#modal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_OverlayStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_QuickUpdateStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClick: toggleModalMutation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: updateEventMutation.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: function onSubmit(e) {
            return _this2.updateEvent(e, updateEventMutation, toggleModalMutation);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: updateEventMutation.loading,
          "aria-busy": updateEventMutation.loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "Edit Event"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Date", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "date",
          id: "date",
          name: "date",
          placeholder: "Date",
          required: true,
          defaultValue: formattedDate,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "Time", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "time",
          id: "time",
          name: "time",
          placeholder: "Date",
          required: true,
          defaultValue: formattedTime,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "duration",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, "Duration (minutes)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "duration",
          name: "duration",
          defaultValue: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["differenceInMinutes"])(event.end, event.start),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "Status", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "status",
          defaultValue: event.status,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_15__["possibleStatus"].map(function (status) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: status,
            value: status,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, status);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "allDay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "All Day", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "checkbox",
          id: "allday",
          name: "allDay",
          defaultChecked: event.allDay,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "draw",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, "Draw", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "draw",
          name: "draw",
          placeholder: event.draw || 0,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "notes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, "Notes", notes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick(e) {
            return _this2.addNoteField(e, _this2.state.notes ? null : event.notes);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, "+"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "Edit Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "note: this will alter every event this act is associated with"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Act Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "name",
          name: "name",
          placeholder: "Act Name",
          defaultValue: event.act.name,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, "Blurb", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Blurb",
          defaultValue: event.act.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "email",
          name: "email",
          placeholder: "contact email",
          defaultValue: event.act.email,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, "Picture", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "Upload an image",
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this2.state.image ? _this2.state.image : event.act.image,
          alt: "Image Preview",
          width: "200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "Change To A Different Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, "...currently not working"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          defaultValue: "",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, "Acts"), acts)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, "Create A New Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, "...work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, "Sav", updateEventMutation.loading ? 'ing' : 'e', " Changes"))))));
      });
    }
  }]);

  return QuickUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuickUpdate);

/***/ }),

/***/ "./components/globals/functions/updateEventMethods.js":
/*!************************************************************!*\
  !*** ./components/globals/functions/updateEventMethods.js ***!
  \************************************************************/
/*! exports provided: updateCache, handleDeleteNote, addNoteField, renderPreview, uploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCache", function() { return updateCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDeleteNote", function() { return handleDeleteNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNoteField", function() { return addNoteField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPreview", function() { return renderPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./components/globals/queries/queries.js");


var _this = undefined,
    _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/globals/functions/updateEventMethods.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var updateCache = function updateCache(cache, payload) {
  // manually update the cache on the client, so it matches the server
  // 1. Read the cache for the items we want
  var data = cache.readQuery({
    query: _queries_queries__WEBPACK_IMPORTED_MODULE_2__["ALL_EVENTS_QUERY"]
  }); // 2. Filter the deleted itemout of the page

  var eventIndex = data.events.findIndex(function (event) {
    return event.id === payload.data.updateEventMutation.id;
  }); // data.events[eventIndex].start = payload.data.moveEvent.start;
  // data.events[eventIndex].end = payload.data.moveEvent.end;

  console.log(eventIndex); // 3. Put the items back!

  cache.writeQuery({
    query: _queries_queries__WEBPACK_IMPORTED_MODULE_2__["ALL_EVENTS_QUERY"],
    data: data
  });
}; // export const quickUpdateCache = (cache, payload) => {
//   const data = cache.readQuery({ query: ALL_EVENTS_QUERY });
//   const eventIndex = data.events.findIndex(event => event.id === payload.data.moveEvent.id)
//   cache.writeQuery({ query: ALL_EVENTS_QUERY, data });
// }

var handleDeleteNote = function handleDeleteNote(e, index, notes) {
  e.preventDefault();

  if (notes) {
    var _notesCopy = _toConsumableArray(notes);

    var _notesFiltered = _notesCopy.filter(function (note, i) {
      return i !== index;
    });

    return _this.setState({
      notes: _notesFiltered
    });
  }

  var notesCopy = _toConsumableArray(_this.state.notes);

  var notesFiltered = notesCopy.filter(function (note, i) {
    return i != index;
  });
  return _this.setState({
    notes: notesFiltered
  });
};
var addNoteField = function addNoteField(e, notes) {
  e.preventDefault();

  if (notes) {
    var _notesCopy2 = _toConsumableArray(notes);

    _notesCopy2.push('');

    return _this.setState({
      notes: _notesCopy2
    });
  }

  var notesCopy = _toConsumableArray(_this.state.notes);

  notesCopy.push('');
  return _this.setState({
    notes: notesCopy
  });
};
var renderPreview = function renderPreview(img) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: img,
    alt: "Upload Preview",
    width: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  });
};
var uploadFile =
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

  return function uploadFile(_x) {
    return _ref.apply(this, arguments);
  };
}(); // export {updateCache, handleDeleteNote, addNoteField, renderPreview, uploadFile}

/***/ }),

/***/ "./components/globals/mutations/mutations.js":
/*!***************************************************!*\
  !*** ./components/globals/mutations/mutations.js ***!
  \***************************************************/
/*! exports provided: TOGGLE_MODAL_MUTATION, UPDATE_EVENT_MUTATION, MOVE_EVENT_MUTATION, CREATE_EVENT_WITH_NEW_ACT_MUTATION, CREATE_EVENT_WITH_EXISTING_ACT_MUTATION, CREATE_ACT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EVENT_MUTATION", function() { return UPDATE_EVENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_EVENT_MUTATION", function() { return MOVE_EVENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EVENT_WITH_NEW_ACT_MUTATION", function() { return CREATE_EVENT_WITH_NEW_ACT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EVENT_WITH_EXISTING_ACT_MUTATION", function() { return CREATE_EVENT_WITH_EXISTING_ACT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACT_MUTATION", function() { return CREATE_ACT_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_ACT_MUTATION(\n      $name: String!\n      $description: String\n      $image: String\n      $largeImage: String\n      $email: String\n      $notes: [String!]\n  ) {\n    createAct(\n      name: $name\n      description: $description\n      image: $image\n      largeImage: $largeImage\n      email: $email\n      notes: $notes\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_EVENT_WITH_EXISTING_ACT_MUTATION(\n    $title: String\n    $status: EventStatus!\n    $start: DateTime!\n    $end: DateTime!\n    $allDay: Boolean!\n    $notes: [String!]\n    $actId: String\n  ){\n    createEventWithExistingAct(\n      title: $title\n      status: $status\n      start: $start\n      end: $end\n      allDay: $allDay\n      notes: $notes\n      actId: $actId\n    ){\n      id\n      act {\n        id\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_EVENT_WITH_NEW_ACT_MUTATION(\n      $title: String!\n      $status: EventStatus!\n      $start: DateTime!\n      $end: DateTime!\n      $allDay: Boolean!\n      $notes: [String!]\n      $name: String\n      $email: String\n      $description: String\n      $image: String\n      $largeImage: String\n      $actId: String\n  ) {\n    createEventWithNewAct( \n        title: $title\n        status: $status\n        start: $start\n        end: $end\n        allDay: $allDay\n        notes: $notes\n        name: $name\n        email: $email\n        description: $description\n        image: $image\n        largeImage: $largeImage\n        actId: $actId\n    ) \n    { \n      id\n      act {\n        id\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation MOVE_EVENT_MUTATION($id: ID!, $start: DateTime, $end: DateTime, $allDay: Boolean) {\n    moveEvent(id: $id, start: $start, end: $end, allDay: $allDay) {\n      id\n      start\n      end\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_EVENT_MUTATION(\n      $id: ID!\n      $title: String\n      $status: EventStatus\n      $start: DateTime\n      $end: DateTime\n      $allDay: Boolean\n      $notes: [String!]\n      $draw: Int\n      $name: String\n      $description: String\n      $email: String\n      $image: String\n      $largeImage: String\n      $actId: String\n      $newActId: String\n  ) {\n    updateEvent(\n      id: $id\n      title: $title\n      status: $status\n      start: $start\n      end: $end\n      allDay: $allDay\n      notes: $notes\n      draw: $draw\n      name: $name\n      description: $description\n      email: $email\n      image: $image\n      largeImage: $largeImage\n      actId: $actId\n      newActId: $newActId\n    ) {\n      id\n      start\n      notes\n      draw\n      act {\n        id\n        name\n        description\n        email\n        image\n        largeImage\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleModal @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var UPDATE_EVENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var MOVE_EVENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var CREATE_EVENT_WITH_NEW_ACT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var CREATE_EVENT_WITH_EXISTING_ACT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var CREATE_ACT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());

/***/ }),

/***/ "./components/globals/queries/queries.js":
/*!***********************************************!*\
  !*** ./components/globals/queries/queries.js ***!
  \***********************************************/
/*! exports provided: ALL_EVENTS_QUERY, SINGLE_EVENT_QUERY, ALL_ACTS_QUERY, ALL_ACTS_QUERY_PAGINATION, LOCAL_STATE_QUERY, PAGINATION_QUERY, SEARCH_ACTS_QUERY, SINGLE_ACT_QUERY */
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./config.js");
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
  var data = _taggedTemplateLiteral(["\n  query ALL_EVENTS_QUERY {\n    events {\n      id\n      title\n      status\n      start\n      end\n      allDay\n      notes\n      draw\n      act {\n        id\n        name\n        description\n        notes\n        image\n      }\n    }\n  }\n"]);

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

/***/ }),

/***/ "./components/styles/BigCalendarStyles.js":
/*!************************************************!*\
  !*** ./components/styles/BigCalendarStyles.js ***!
  \************************************************/
/*! exports provided: StyledBigCal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBigCal", function() { return StyledBigCal; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledBigCal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BigCalendarStyles__StyledBigCal",
  componentId: "sc-6ird1i-0"
})([".rbc-btn{color:inherit;font:inherit;margin:0;}button.rbc-btn{overflow:visible;text-transform:none;-webkit-appearance:button;cursor:pointer;}button[disabled].rbc-btn{cursor:not-allowed;}button.rbc-input::-moz-focus-inner{border:0;padding:0;}.rbc-calendar{box-sizing:border-box;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;}.rbc-calendar *,.rbc-calendar *:before,.rbc-calendar *:after{box-sizing:inherit;}.rbc-abs-full,.rbc-row-bg{overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;}.rbc-ellipsis,.rbc-event-label,.rbc-row-segment .rbc-event-content,.rbc-show-more{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.rbc-rtl{direction:rtl;}.rbc-off-range{color:#999999;}.rbc-off-range-bg{background:#e5e5e5;}.rbc-header{overflow:hidden;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;text-overflow:ellipsis;white-space:nowrap;padding:0 3px;text-align:center;vertical-align:middle;font-weight:bold;font-size:90%;min-height:0;border-bottom:1px solid #DDD;}.rbc-header + .rbc-header{border-left:1px solid #DDD;}.rbc-rtl .rbc-header + .rbc-header{border-left-width:0;border-right:1px solid #DDD;}.rbc-header > a,.rbc-header > a:active,.rbc-header > a:visited{color:inherit;text-decoration:none;}.rbc-row-content{position:relative;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:4;}.rbc-today{background-color:#eaf6ff;}.rbc-toolbar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;font-size:25px;}.rbc-toolbar .rbc-toolbar-label{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 10px;text-align:center;}.rbc-toolbar button{color:#373a3c;display:inline-block;margin:0;text-align:center;vertical-align:middle;background:none;background-image:none;border:1px solid #ccc;padding:.375rem 1rem;border-radius:4px;line-height:normal;white-space:nowrap;}.rbc-toolbar button:active,.rbc-toolbar button.rbc-active{background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);background-color:#e6e6e6;border-color:#adadad;}.rbc-toolbar button:active:hover,.rbc-toolbar button.rbc-active:hover,.rbc-toolbar button:active:focus,.rbc-toolbar button.rbc-active:focus{color:#373a3c;background-color:#d4d4d4;border-color:#8c8c8c;}.rbc-toolbar button:focus{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;}.rbc-toolbar button:hover{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;}.rbc-btn-group{display:inline-block;white-space:nowrap;}.rbc-btn-group > button:first-child:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:last-child:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child){border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child){border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:not(:first-child):not(:last-child){border-radius:0;}.rbc-btn-group button + button{margin-left:-1px;}.rbc-rtl .rbc-btn-group button + button{margin-left:0;margin-right:-1px;}.rbc-btn-group + .rbc-btn-group,.rbc-btn-group + button{margin-left:10px;}.rbc-event{border:none;box-shadow:none;margin:0;padding:0px 5px;background-color:", ";border-radius:5px;color:#fff;cursor:pointer;width:100%;text-align:left;}.rbc-slot-selecting .rbc-event{cursor:inherit;pointer-events:none;}.rbc-event.rbc-selected{background-color:#265985;}.rbc-event:focus{outline:5px auto #3b99fc;}.rbc-event-label{font-size:80%;}.rbc-event-overlaps{box-shadow:-1px 1px 5px 0px rgba(51,51,51,0.5);}.rbc-event-continues-prior{border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-event-continues-after{border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-event-continues-earlier{border-top-left-radius:0;border-top-right-radius:0;}.rbc-event-continues-later{border-bottom-left-radius:0;border-bottom-right-radius:0;}.rbc-row{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-row-segment{padding:0 1px 1px 1px;}.rbc-selected-cell{background-color:rgba(0,0,0,0.1);}.rbc-show-more{background-color:rgba(255,255,255,0.3);z-index:4;font-weight:bold;font-size:85%;height:auto;line-height:normal;white-space:nowrap;}.rbc-month-view{left:5%;position:relative;border:1px solid #DDD;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;height:100%;}.rbc-month-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-month-row{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;overflow:hidden;height:100%;}.rbc-month-row + .rbc-month-row{border-top:1px solid #DDD;}.rbc-date-cell{-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;min-width:0;padding-right:5px;text-align:right;font-size:.5em;}.rbc-date-cell.rbc-now{font-weight:bold;}.rbc-date-cell > a,.rbc-date-cell > a:active,.rbc-date-cell > a:visited{color:inherit;text-decoration:none;}.rbc-row-bg{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:hidden;}.rbc-day-bg{-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;}.rbc-day-bg + .rbc-day-bg{border-left:1px solid #DDD;}.rbc-rtl .rbc-day-bg + .rbc-day-bg{border-left-width:0;border-right:1px solid #DDD;}.rbc-overlay{position:absolute;z-index:5;border:1px solid #e5e5e5;background-color:#fff;box-shadow:0 5px 15px rgba(0,0,0,0.25);padding:10px;}.rbc-overlay > * + *{margin-top:1px;}.rbc-overlay-header{border-bottom:1px solid #e5e5e5;margin:-10px -10px 5px -10px;padding:2px 10px;}.rbc-agenda-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:auto;}.rbc-agenda-view table.rbc-agenda-table{width:100%;border:1px solid #DDD;border-spacing:0;border-collapse:collapse;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td{padding:5px 10px;vertical-align:top;}.rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell{padding-left:15px;padding-right:15px;text-transform:lowercase;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left:1px solid #DDD;}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left-width:0;border-right:1px solid #DDD;}.rbc-agenda-view table.rbc-agenda-table tbody > tr + tr{border-top:1px solid #DDD;}.rbc-agenda-view table.rbc-agenda-table thead > tr > th{padding:3px 5px;text-align:left;border-bottom:1px solid #DDD;}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th{text-align:right;}.rbc-agenda-time-cell{text-transform:lowercase;}.rbc-agenda-time-cell .rbc-continues-after:after{content:' \xBB';}.rbc-agenda-time-cell .rbc-continues-prior:before{content:'\xAB ';}.rbc-agenda-date-cell,.rbc-agenda-time-cell{white-space:nowrap;}.rbc-agenda-event-cell{width:100%;}.rbc-time-column{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100%;}.rbc-time-column .rbc-timeslot-group{-webkit-flex:1;-ms-flex:1;flex:1;}.rbc-timeslot-group{border-bottom:1px solid #DDD;min-height:40px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.rbc-time-gutter,.rbc-header-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-label{padding:0 5px;}.rbc-day-slot{position:relative;}.rbc-day-slot .rbc-events-container{bottom:0;left:0;position:absolute;right:0;margin-right:10px;top:0;}.rbc-day-slot .rbc-events-container.rbc-is-rtl{left:10px;right:0;}.rbc-day-slot .rbc-event{border:1px solid #265985;display:-webkit-flex;display:-ms-flexbox;display:flex;max-height:100%;min-height:20px;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;overflow:hidden;position:absolute;}.rbc-day-slot .rbc-event-label{-webkit-flex:none;-ms-flex:none;flex:none;padding-right:5px;width:auto;}.rbc-day-slot .rbc-event-content{width:100%;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;word-wrap:break-word;line-height:1;height:100%;min-height:1em;}.rbc-day-slot .rbc-time-slot{border-top:1px solid #f7f7f7;}.rbc-time-view-resources .rbc-time-gutter,.rbc-time-view-resources .rbc-time-header-gutter{position:-webkit-sticky;position:sticky;left:0;background-color:white;border-right:1px solid #DDD;z-index:10;margin-right:-1px;}.rbc-time-view-resources .rbc-time-header{overflow:hidden;}.rbc-time-view-resources .rbc-time-header-content{min-width:auto;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;}.rbc-time-view-resources .rbc-time-header-cell-single-day{display:none;}.rbc-time-view-resources .rbc-day-slot{min-width:140px;}.rbc-time-view-resources .rbc-header,.rbc-time-view-resources .rbc-day-bg{width:140px;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;-webkit-flex-basis:0 px;-ms-flex-preferred-size:0 px;flex-basis:0 px;}.rbc-time-header-content + .rbc-time-header-content{margin-left:-1px;}.rbc-time-slot{-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;}.rbc-time-slot.rbc-now{font-weight:bold;}.rbc-day-header{text-align:center;}.rbc-slot-selection{z-index:10;position:absolute;background-color:rgba(0,0,0,0.5);color:white;font-size:75%;width:100%;padding:3px;}.rbc-slot-selecting{cursor:move;}.rbc-time-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;border:1px solid #DDD;min-height:0;}.rbc-time-view .rbc-time-gutter{white-space:nowrap;}.rbc-time-view .rbc-allday-cell{box-sizing:content-box;width:100%;height:100%;position:relative;}.rbc-time-view .rbc-allday-cell + .rbc-allday-cell{border-left:1px solid #DDD;}.rbc-time-view .rbc-allday-events{position:relative;z-index:4;}.rbc-time-view .rbc-row{box-sizing:border-box;min-height:20px;}.rbc-time-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-time-header.rbc-overflowing{border-right:1px solid #DDD;}.rbc-rtl .rbc-time-header.rbc-overflowing{border-right-width:0;border-left:1px solid #DDD;}.rbc-time-header > .rbc-row:first-child{border-bottom:1px solid #DDD;}.rbc-time-header > .rbc-row.rbc-row-resource{border-bottom:1px solid #DDD;}.rbc-time-header-cell-single-day{display:none;}.rbc-time-header-content{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-left:1px solid #DDD;}.rbc-rtl .rbc-time-header-content{border-left-width:0;border-right:1px solid #DDD;}.rbc-time-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:100%;border-top:2px solid #DDD;overflow-y:auto;position:relative;}.rbc-time-content > .rbc-time-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-time-content > * + * > *{border-left:1px solid #DDD;}.rbc-rtl .rbc-time-content > * + * > *{border-left-width:0;border-right:1px solid #DDD;}.rbc-time-content > .rbc-day-slot{width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.rbc-current-time-indicator{position:absolute;z-index:3;left:0;right:0;height:1px;background-color:#74ad31;pointer-events:none;}"], function (props) {
  return props.theme.mainColor;
});


/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "tgzrh8-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DeleteButtonStyles.js":
/*!*************************************************!*\
  !*** ./components/styles/DeleteButtonStyles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DeleteButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "DeleteButtonStyles",
  componentId: "sc-11mbax6-0"
})(["background:transparent;border:1px solid ", ";border-radius:2em;color:", ";display:inline-block;font-size:12px;height:20px;line-height:2px;margin:0 0 8px;padding:0;text-align:center;width:20px;"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.mainColor;
});
/* harmony default export */ __webpack_exports__["default"] = (DeleteButtonStyles);

/***/ }),

/***/ "./components/styles/OverlayStyled.js":
/*!********************************************!*\
  !*** ./components/styles/OverlayStyled.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var OverlayedStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "OverlayStyled__OverlayedStyled",
  componentId: "sc-12gv6z4-0"
})(["z-index:10;position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (OverlayedStyled);

/***/ }),

/***/ "./components/styles/QuickUpdateFormStyles.js":
/*!****************************************************!*\
  !*** ./components/styles/QuickUpdateFormStyles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "QuickUpdateFormStyles__Form",
  componentId: "sc-1s7v8rz-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.0rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.mainColor;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/QuickUpdateStyles.js":
/*!************************************************!*\
  !*** ./components/styles/QuickUpdateStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var QuickUpdateStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickUpdateStyles__QuickUpdateStyled",
  componentId: "sc-70hl8g-0"
})(["z-index:11;background-color:whitesmoke;text-align:center;position:absolute;top:10%;right:10%;bottom:10%;left:10%;padding:1em;"]);
/* harmony default export */ __webpack_exports__["default"] = (QuickUpdateStyled);

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

/***/ "./lib/possibleStatus.js":
/*!*******************************!*\
  !*** ./lib/possibleStatus.js ***!
  \*******************************/
/*! exports provided: possibleStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "possibleStatus", function() { return possibleStatus; });
var possibleStatus = ['CONFIRMED', 'HELD', 'CANCELLED'];

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
/* harmony import */ var _components_BigCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BigCalendar */ "./components/BigCalendar.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/pages/index.js";




var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BigCalendar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-adopt":
/*!******************************!*\
  !*** external "react-adopt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-big-calendar":
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "react-big-calendar/lib/addons/dragAndDrop":
/*!************************************************************!*\
  !*** external "react-big-calendar/lib/addons/dragAndDrop" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar/lib/addons/dragAndDrop");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

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