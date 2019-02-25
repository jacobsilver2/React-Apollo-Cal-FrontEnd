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
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "react-spring/renderprops.cjs");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CustomEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomEvent */ "./components/CustomEvent.js");
/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalContainer */ "./components/ModalContainer.js");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-big-calendar/lib/addons/dragAndDrop */ "react-big-calendar/lib/addons/dragAndDrop");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_BigCalendarStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/BigCalendarStyles */ "./components/styles/BigCalendarStyles.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/BigCalendar.js";

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
var DnDCalendar = react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_9___default()(react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default.a);
var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_4__["adopt"])({
  moveEvent: function moveEvent(_ref) {
    var updates = _ref.updates,
        updateCache = _ref.updateCache,
        render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__["MOVE_EVENT_MUTATION"],
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
        lineNumber: 21
      },
      __self: this
    }, render);
  },
  allEvents: function allEvents(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["ALL_EVENTS_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, render);
  },
  toggleModal: function toggleModal(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_12__["TOGGLE_MODAL_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, render);
  },
  localState: function localState(_ref4) {
    var render = _ref4.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["LOCAL_STATE_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, render);
  },
  spring: function spring(_ref5) {
    var render = _ref5.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_5__["Spring"], {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
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
          break;

        case 'doubleClick':
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
            pathname: '/newCalEvent',
            query: {
              start: encodeURIComponent(e.start.toString()),
              end: encodeURIComponent(e.end.toString())
            }
          });
          break;

        case 'select':
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToolTipAccess", function (e) {
      var name = e.act.name ? "".concat(e.act.name) : null;
      var time = moment__WEBPACK_IMPORTED_MODULE_6___default()(e.start).format("h:mma");
      return "".concat(time, " ").concat(name);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "titleAccessor", function (e) {
      var time = moment__WEBPACK_IMPORTED_MODULE_6___default()(e.start).format("hh:mma");
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
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["ALL_EVENTS_QUERY"]
      }); // 2. Filter the deleted itemout of the page

      var eventIndex = data.events.findIndex(function (event) {
        return event.id === payload.data.moveEvent.id;
      });
      data.events[eventIndex].start = payload.data.moveEvent.start;
      data.events[eventIndex].end = payload.data.moveEvent.end; // 3. Put the items back!

      cache.writeQuery({
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["ALL_EVENTS_QUERY"],
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
          lineNumber: 111
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
            lineNumber: 113
          },
          __self: this
        }, "Loading...");
        if (allEvents.error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "Error: ", allEvents.error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, localState.data.modalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          event: _this2.state.event,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: spring,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_BigCalendarStyles__WEBPACK_IMPORTED_MODULE_10__["StyledBigCal"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
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
            event: _CustomEvent__WEBPACK_IMPORTED_MODULE_7__["default"]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/CustomEvent.js";



var CustomEvent = function CustomEvent(_ref) {
  var event = _ref.event;

  function handleContextMenu(e) {
    console.log('right clicked');
  }

  function handleMouseOver() {
    setTimeout(function () {
      return console.log('moused over');
    }, 1500);
  }

  function handleClick() {
    console.log('clicked');
  }

  var start = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start).format("h:mma");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, start, " ", event.act.name));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomEvent); // class CustomEvent extends Component {
//   handleContextMenu = e => {
//     console.log('right clicked')
//   }
//   handleMouseOver = e => {
//     setTimeout(
//       () => console.log('moused over')
//       ,1500)
//   }
//   handleClick = e => {
//     console.log('clicked');
//   }
//   render() {
//     const {event} = this.props
//     // const start = format(parseISO(event.start), "h:mmaaaaa");
//     const start = moment(event.start).format("h:mma");
//     return (
//       <div onClick={this.handleClick}>
//          <p>{start} {event.act.name}</p>
//       </div>
//     );
//   }
// }
// export default CustomEvent;

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
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/ErrorMessage.js";



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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuickUpdate_QuickUpdateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickUpdate/QuickUpdateForm */ "./components/QuickUpdate/QuickUpdateForm.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap-react */ "focus-trap-react");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_3__);
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var _styles_ModalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ModalStyles */ "./components/styles/ModalStyles.js");
/* harmony import */ var _Reminders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reminders */ "./components/Reminders.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Modal.js";
=======
/* harmony import */ var _Reminders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reminders */ "./components/Reminders.js");
=======
/* harmony import */ var _Reminders_Reminders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reminders/Reminders */ "./components/Reminders/Reminders.js");
>>>>>>> 6760d226b000868ea9a4c10570b370e16f80bf21
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Modal.js";
>>>>>>> 1512034c4b910acbb7c1ddf25a7026dffd144b3b

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







var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toggle: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      _this.setState({
        toggle: !_this.state.toggle
      });
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          event = _this$props.event,
          modalRef = _this$props.modalRef,
          buttonRef = _this$props.buttonRef,
          closeModal = _this$props.closeModal,
          onKeyDown = _this$props.onKeyDown,
          onClickOutside = _this$props.onClickOutside;
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(focus_trap_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
        tag: "aside",
        role: "dialog",
        tabIndex: "-1",
        "aria-modal": "true",
        className: "modal-cover",
        onClick: onClickOutside,
        onKeyDown: onKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-area",
        ref: modalRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        ref: buttonRef,
        "aria-label": "Close Modal",
        className: "_modal-close",
        onClick: closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "close-modal",
        className: "_hide-visual",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "_modal-close-icon",
        viewBox: "0 0 40 40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 10,10 L 30,30 M 30,10 L 10,30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.state.toggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuickUpdate_QuickUpdateForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        event: event,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Reminders_Reminders__WEBPACK_IMPORTED_MODULE_4__["default"], {
        event: event,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))))), document.body);
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/ModalContainer.js":
/*!**************************************!*\
  !*** ./components/ModalContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/ModalContainer.js";

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






var ModalContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalContainer, _Component);

  function ModalContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleScrollLock", function () {
      document.querySelector('html').classList.toggle('scroll-lock');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function (toggleModalMutation) {
      _this.setState({
        isShown: false
      }); // this.TriggerButton.focus();


      _this.toggleScrollLock();

      toggleModalMutation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event, toggleModalMutation) {
      if (event.keyCode === 27) {
        _this.closeModal(toggleModalMutation);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickOutside", function (event, toggleModalMutation) {
      if (_this.modal && _this.modal.contains(event.target)) return;

      _this.closeModal(toggleModalMutation);
    });

    return _this;
  }

  _createClass(ModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.closeButton.focus();
      this.toggleScrollLock();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_MODAL_MUTATION"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, function (toggleModal) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          event: _this2.props.event,
          modalRef: function modalRef(n) {
            return _this2.modal = n;
          },
          buttonRef: function buttonRef(n) {
            return _this2.closeButton = n;
          },
          closeModal: function closeModal() {
            return _this2.closeModal(toggleModal);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.onKeyDown(e, toggleModal);
          },
          onClickOutside: function onClickOutside(e) {
            return _this2.onClickOutside(e, toggleModal);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      });
    }
  }]);

  return ModalContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ModalContainer);

/***/ }),

/***/ "./components/QuickUpdate/ChangeActWithinUpdateEvent.js":
/*!**************************************************************!*\
  !*** ./components/QuickUpdate/ChangeActWithinUpdateEvent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate/ChangeActWithinUpdateEvent.js";


var ChangeActWithinUpdateEvent = function ChangeActWithinUpdateEvent(_ref) {
  var acts = _ref.acts,
      handleChange = _ref.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Change To A Different Act"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "...currently not working"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Acts"), acts));
};

/* harmony default export */ __webpack_exports__["default"] = (ChangeActWithinUpdateEvent);

/***/ }),

/***/ "./components/QuickUpdate/NewActWithinUpdateEvent.js":
/*!***********************************************************!*\
  !*** ./components/QuickUpdate/NewActWithinUpdateEvent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate/NewActWithinUpdateEvent.js";


var NewActWithinUpdateEvent = function NewActWithinUpdateEvent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Create A New Act"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "...work in progress"));
};

/* harmony default export */ __webpack_exports__["default"] = (NewActWithinUpdateEvent);

/***/ }),

/***/ "./components/QuickUpdate/QuickUpdateForm.js":
/*!***************************************************!*\
  !*** ./components/QuickUpdate/QuickUpdateForm.js ***!
  \***************************************************/
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
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "react-spring/renderprops.cjs");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
<<<<<<< HEAD
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/QuickUpdateFormStyles */ "./components/styles/QuickUpdateFormStyles.js");
/* harmony import */ var _styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DeleteButtonStyles */ "./components/styles/DeleteButtonStyles.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_functions_updateEventMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals/functions/updateEventMethods */ "./components/globals/functions/updateEventMethods.js");
/* harmony import */ var _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/possibleStatus */ "./lib/possibleStatus.js");

var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdateForm.js";
=======
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/QuickUpdateFormStyles */ "./components/styles/QuickUpdateFormStyles.js");
/* harmony import */ var _styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/DeleteButtonStyles */ "./components/styles/DeleteButtonStyles.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_functions_updateEventMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../globals/functions/updateEventMethods */ "./components/globals/functions/updateEventMethods.js");
/* harmony import */ var _UpdateEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UpdateEvent */ "./components/QuickUpdate/UpdateEvent.js");
/* harmony import */ var _UpdateActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UpdateActWithinUpdateEvent */ "./components/QuickUpdate/UpdateActWithinUpdateEvent.js");
/* harmony import */ var _ChangeActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ChangeActWithinUpdateEvent */ "./components/QuickUpdate/ChangeActWithinUpdateEvent.js");
/* harmony import */ var _NewActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NewActWithinUpdateEvent */ "./components/QuickUpdate/NewActWithinUpdateEvent.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate/QuickUpdateForm.js";
>>>>>>> 1512034c4b910acbb7c1ddf25a7026dffd144b3b

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
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["ALL_ACTS_QUERY"],
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
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_10__["UPDATE_EVENT_MUTATION"],
      variables: updates,
      refetchQueries: [{
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_11__["ALL_EVENTS_QUERY"]
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
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_10__["TOGGLE_MODAL_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, render);
  },
  spring: function spring(_ref4) {
    var render = _ref4.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
      from: {
        opacity: 0,
        marginTop: -500
      },
      to: {
        opacity: 1,
        marginTop: 0
      },
      config: {
        duration: 250
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      actOption: 'editExisting'
    });

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
          return _this.setState({
            duration: val,
            end: !!_this.state.start ? moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.start).add(val, 'minutes').toDate() : moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.props.event.start).add(val, 'minutes').toDate()
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
          if (_this.state.start != null) {
            var _startTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.start).format('hh:mm');

            var _startDateTime = new Date("".concat(value, " ").concat(_startTime));

            var _title = moment__WEBPACK_IMPORTED_MODULE_5___default()(value).format("YYYY-M-D");

            var _end = moment__WEBPACK_IMPORTED_MODULE_5___default()(_startDateTime).add(_this.state.duration, 'minutes').toDate();

            _this.setState({
              start: _startDateTime,
              title: _title,
              end: _end
            });

            break;
          }

          var duration = moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.props.event.end).diff(_this.props.event.start, 'minutes');
          var startTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.props.event.start).format("hh:mm");
          var startDateTime = new Date("".concat(value, " ").concat(startTime));
          var end = moment__WEBPACK_IMPORTED_MODULE_5___default()(startDateTime).add(duration, 'minutes').toDate();
          var title = moment__WEBPACK_IMPORTED_MODULE_5___default()(value).format("YYYY-M-D");

          _this.setState({
            start: startDateTime,
            title: title,
            end: end,
            duration: duration
          });

          break;

        case 'time':
          var date = !!_this.state.start ? moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.start).format("YYYY-M-D").toString() : moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.props.event.start).format("YYYY-M-D").toString();
          startDateTime = new Date("".concat(date, " ").concat(value));
          duration = moment__WEBPACK_IMPORTED_MODULE_5___default()(_this.props.event.end).diff(_this.props.event.start, 'minutes');
          end = !!_this.state.duration ? moment__WEBPACK_IMPORTED_MODULE_5___default()(startDateTime).add(_this.state.duration, 'minutes').toDate() : moment__WEBPACK_IMPORTED_MODULE_5___default()(startDateTime).add(duration, 'minutes').toDate();

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
      var _ref5 = _asyncToGenerator(
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
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateEvent",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
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
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeActOption", function (e) {
      var value = e.target.value;

      _this.setState({
        actOption: value
      });
    });

    return _this;
  }

  _createClass(QuickUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Composed, {
        singleEventId: this.props.id,
        updateCache: _globals_functions_updateEventMethods__WEBPACK_IMPORTED_MODULE_12__["updateCache"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, function (_ref7) {
        var allActs = _ref7.allActs,
            updateEventMutation = _ref7.updateEventMutation,
            toggleModalMutation = _ref7.toggleModalMutation,
            spring = _ref7.spring;
        var event = _this2.props.event;
        var formattedDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(event.start).format("YYYY-MM-DD");
        var formattedTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(event.start).format("HH:mm");
        var notes = null;

        if (_this2.state.notes) {
          notes = _this2.state.notes.map(function (note, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
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
                lineNumber: 150
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
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
                lineNumber: 152
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
                lineNumber: 152
              },
              __self: this
            }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index, event.notes);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
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
              lineNumber: 154
            },
            __self: this
          }, act.name);
        }) : null;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: spring,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: updateEventMutation.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onSubmit: function onSubmit(e) {
            return _this2.updateEvent(e, updateEventMutation, toggleModalMutation);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UpdateEvent__WEBPACK_IMPORTED_MODULE_13__["default"], {
          loading: updateEventMutation.loading,
          event: event,
          handleChange: _this2.handleChange,
          notes: notes,
          noteFieldCheck: _this2.state.notes,
          addNoteField: _this2.addNoteField,
          formattedDate: formattedDate,
          formattedTime: formattedTime,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "act",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "Act", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "actOption",
          defaultValue: _this2.state.actOption,
          onChange: _this2.handleChangeActOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "editExisting",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, "Edit Existing Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "change",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, "Change To A Different Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "new",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, "Create New Act")))), _this2.state.actOption === 'editExisting' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UpdateActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_14__["default"], {
          event: event,
          handleChange: _this2.handleChange,
          uploadFile: _this2.uploadFile,
          image: _this2.state.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }), _this2.state.actOption === 'change' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChangeActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_15__["default"], {
          acts: acts,
          handleChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }), _this2.state.actOption === 'new' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewActWithinUpdateEvent__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, "Sav", updateEventMutation.loading ? 'ing' : 'e', " Changes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: _this2.props.toggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, "CREATE A REMINDER"))))));
      });
    }
  }]);

  return QuickUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuickUpdate);

/***/ }),

/***/ "./components/QuickUpdate/UpdateActWithinUpdateEvent.js":
/*!**************************************************************!*\
  !*** ./components/QuickUpdate/UpdateActWithinUpdateEvent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate/UpdateActWithinUpdateEvent.js";


var UpdateActWithinUpdateEvent = function UpdateActWithinUpdateEvent(_ref) {
  var event = _ref.event,
      handleChange = _ref.handleChange,
      uploadFile = _ref.uploadFile,
      image = _ref.image;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Edit Existing Act"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "note: this will alter every event this act is associated with"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Act Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "name",
    name: "name",
    placeholder: "Act Name",
    defaultValue: event.act.name,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Blurb", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "description",
    name: "description",
    placeholder: "Blurb",
    defaultValue: event.act.description,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "email",
    name: "email",
    defaultValue: event.act.email,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Picture", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    id: "file",
    name: "file",
    placeholder: "Upload an image",
    onChange: uploadFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image ? image : event.act.image,
    alt: "Image Preview",
    width: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateActWithinUpdateEvent);

/***/ }),

/***/ "./components/QuickUpdate/UpdateEvent.js":
/*!***********************************************!*\
  !*** ./components/QuickUpdate/UpdateEvent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DeleteButtonStyles */ "./components/styles/DeleteButtonStyles.js");
/* harmony import */ var _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/possibleStatus */ "./lib/possibleStatus.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/QuickUpdate/UpdateEvent.js";





var UpdateEvent = function UpdateEvent(_ref) {
  var loading = _ref.loading,
      event = _ref.event,
      handleChange = _ref.handleChange,
      notes = _ref.notes,
      noteFieldCheck = _ref.noteFieldCheck,
      addNoteField = _ref.addNoteField,
      formattedDate = _ref.formattedDate,
      formattedTime = _ref.formattedTime;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    disabled: loading,
    "aria-busy": loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Edit Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Date", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "date",
    id: "date",
    name: "date",
    placeholder: "Date",
    required: true,
    defaultValue: formattedDate,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Time", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "time",
    id: "time",
    name: "time",
    placeholder: "Date",
    required: true,
    defaultValue: formattedTime,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "duration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Duration (minutes)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    id: "duration",
    name: "duration",
    defaultValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(event.end).diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start), 'minutes'),
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Status", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "status",
    defaultValue: event.status,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_3__["possibleStatus"].map(function (status) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: status,
      value: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, status);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "allDay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "All Day", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "allday",
    name: "allDay",
    defaultChecked: event.allDay,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "draw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Draw", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    id: "draw",
    name: "draw",
    placeholder: event.draw || 0,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "notes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Notes", notes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick(e) {
      return addNoteField(e, noteFieldCheck ? null : event.notes);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "+")));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateEvent);

/***/ }),

/***/ "./components/Reminders/ReminderMessage.js":
/*!*************************************************!*\
  !*** ./components/Reminders/ReminderMessage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/ReminderMessage.js";
=======
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Reminders/ReminderMessage.js";
>>>>>>> 6760d226b000868ea9a4c10570b370e16f80bf21

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

var ReminderMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(ReminderMessage, _Component);

  function ReminderMessage() {
    _classCallCheck(this, ReminderMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReminderMessage).apply(this, arguments));
  }

  _createClass(ReminderMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          change = _this$props.change,
          connectDropTarget = _this$props.connectDropTarget,
          hovered = _this$props.hovered,
          width = _this$props.width,
          height = _this$props.height,
          item = _this$props.item;
      var backgroundColor = hovered ? '#1a8fff' : "white";
      return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        style: {
          width: width,
          height: height,
          background: backgroundColor
        },
        name: name,
        placeholder: placeholder,
        value: value,
        required: true,
        onChange: change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    }
  }]);

  return ReminderMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DropTarget"])("token", {}, collect)(ReminderMessage));

/***/ }),

/***/ "./components/Reminders/Reminders.js":
/*!*******************************************!*\
  !*** ./components/Reminders/Reminders.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-adopt */ "react-adopt");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_adopt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "react-spring/renderprops.cjs");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
<<<<<<< HEAD
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _TextToken__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextToken */ "./components/TextToken.js");
/* harmony import */ var _ReminderMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReminderMessage */ "./components/ReminderMessage.js");
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Reminders.js";
=======
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _TextToken__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextToken */ "./components/TextToken.js");
/* harmony import */ var _ReminderMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReminderMessage */ "./components/Reminders/ReminderMessage.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Reminders/Reminders.js";
>>>>>>> 6760d226b000868ea9a4c10570b370e16f80bf21

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














var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_2__["adopt"])({
  currentUser: function currentUser(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, render);
  },
  sendEmail: function sendEmail(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_8__["CREATE_EMAIL_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, render);
  },
  spring: function spring(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_3__["Spring"], {
      from: {
        opacity: 0,
        marginTop: -500
      },
      to: {
        opacity: 1,
        marginTop: 0
      },
      config: {
        duration: 250
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, render);
  }
});

var Reminders =
/*#__PURE__*/
function (_Component) {
  _inherits(Reminders, _Component);

  function Reminders() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Reminders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Reminders)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      message: '',
      subject: '',
      sendDuration: 'week',
      sendInterval: "1"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSendEmail", function (e, sendEmail, from, to, startDate) {
      e.preventDefault();
      var sendDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(startDate).subtract(_this.state.sendInterval, _this.state.sendDuration).toDate();
      var vars = {
        from: from,
        to: to,
        message: _this.state.message,
        subject: _this.state.subject,
        sendDate: sendDate
      };
      sendEmail({
        variables: vars
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrop", function (text, name) {
      _this.setState(function (prevState) {
        var prevText = prevState.message;
        var newText = prevText + text;
        return {
          message: newText
        };
      });
    });

    return _this;
  }

  _createClass(Reminders, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          event = _this$props.event,
          toggle = _this$props.toggle;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Composed, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, function (_ref4) {
        var currentUser = _ref4.currentUser,
            sendEmail = _ref4.sendEmail,
            spring = _ref4.spring;
        var currentUserEmail = currentUser.data.me.email;
        var startDateFormatted = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format("MMMM Do, YYYY");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: spring,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: function onSubmit(e) {
            return _this2.onSendEmail(e, sendEmail, currentUserEmail, event.act.email, event.start);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tokens",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: event.act.name,
          handleDrop: function handleDrop() {
            return _this2.handleDrop(event.act.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('dddd'),
          handleDrop: function handleDrop() {
            return _this2.handleDrop(moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('dddd'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('MMMM'),
          handleDrop: function handleDrop() {
            return _this2.handleDrop(moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('MMMM'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('Do'),
          handleDrop: function handleDrop() {
            return _this2.handleDrop(moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('Do'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('YYYY'),
          handleDrop: function handleDrop() {
            return _this2.handleDrop(moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('YYYY'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('h:mA'),
          handleDrop: function handleDrop() {
            return _this2.handleDrop(moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).format('h:mmA'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Create A Reminder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "subject",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Subject", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReminderMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
          width: "100%",
          height: "25px",
          name: "subject",
          placeholder: "Enter the Subject",
          value: _this2.state.subject,
          change: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "message",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Message", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReminderMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
          width: "100%",
          height: "300px",
          name: "message",
          placeholder: "Enter Your Message",
          value: _this2.state.message,
          change: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "sendDate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "When Would You Like To Send?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "number",
          defaultValue: _this2.state.sendInterval,
          name: "sendInterval",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          name: "sendDuration",
          defaultValue: _this2.state.sendDuration,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "week",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, parseInt(_this2.state.sendInterval) > 1 ? 'Weeks' : 'Week'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "day",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, parseInt(_this2.state.sendInterval) > 1 ? 'Days' : 'Day'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "hour",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, parseInt(_this2.state.sendInterval) > 1 ? 'Hours' : 'Hour'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "minute",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, parseInt(_this2.state.sendInterval) > 1 ? 'Minutes' : 'Minute')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Before ", startDateFormatted, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "This email will send on ", moment__WEBPACK_IMPORTED_MODULE_6___default()(event.start).subtract(_this2.state.sendInterval, _this2.state.sendDuration).format("LLLL"), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: toggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Create Reminder")))));
      });
    }
  }]);

  return Reminders;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_5__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4___default.a)(Reminders));

/***/ }),

/***/ "./components/TextToken.js":
/*!*********************************!*\
  !*** ./components/TextToken.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/TextToken.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var itemSource = {
  beginDrag: function beginDrag(props) {
    var item = {
      text: props.text
    };
    return item;
  },
  endDrag: function endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.text);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

var TextToken =
/*#__PURE__*/
function (_Component) {
  _inherits(TextToken, _Component);

  function TextToken() {
    _classCallCheck(this, TextToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextToken).apply(this, arguments));
  }

  _createClass(TextToken, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          connectDragSource = _this$props.connectDragSource,
          text = _this$props.text;
      var opacity = isDragging ? 0 : 1;
      return connectDragSource(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tag",
        style: {
          opacity: opacity
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, text));
    }
  }]);

  return TextToken;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DragSource"])("token", itemSource, collect)(TextToken));

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
    _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/globals/functions/updateEventMethods.js";



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
/*! exports provided: TOGGLE_MODAL_MUTATION, UPDATE_EVENT_MUTATION, MOVE_EVENT_MUTATION, CREATE_EVENT_WITH_NEW_ACT_MUTATION, CREATE_EVENT_WITH_EXISTING_ACT_MUTATION, CREATE_ACT_MUTATION, CREATE_EMAIL_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EVENT_MUTATION", function() { return UPDATE_EVENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_EVENT_MUTATION", function() { return MOVE_EVENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EVENT_WITH_NEW_ACT_MUTATION", function() { return CREATE_EVENT_WITH_NEW_ACT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EVENT_WITH_EXISTING_ACT_MUTATION", function() { return CREATE_EVENT_WITH_EXISTING_ACT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACT_MUTATION", function() { return CREATE_ACT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_EMAIL_MUTATION", function() { return CREATE_EMAIL_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_EMAIL_MUTATION($from: String!, $to: String!, $subject: String!, $message: String!, $sendDate: DateTime!)\n    {createEmail(\n      from: $from\n      to: $to\n      subject: $subject\n      message: $message\n      sendDate: $sendDate\n    ){\n      message\n    }\n  }   \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

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
var CREATE_EMAIL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());

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

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-193v0pb-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.0rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.mainColor;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

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
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}ul{list-style-type:none;}input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.0rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.mainColor;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "sc-1jyo9le-0"
})(["background:", ";cursor:pointer;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"], function (props) {
  return props.theme.mainColor;
});
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

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
var perPage = 12;

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
var _jsxFileName = "/Users/jacobsilver/Development/Projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/pages/index.js";




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

/***/ 3:
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

/***/ "focus-trap-react":
/*!***********************************!*\
  !*** external "focus-trap-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("focus-trap-react");

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

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-spring/renderprops.cjs":
/*!***********************************************!*\
  !*** external "react-spring/renderprops.cjs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring/renderprops.cjs");

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