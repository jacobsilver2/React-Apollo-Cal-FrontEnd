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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateEvent.js":
/*!***********************************!*\
  !*** ./components/CreateEvent.js ***!
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-adopt */ "react-adopt");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_adopt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globals/queries/queries */ "./components/globals/queries/queries.js");
/* harmony import */ var _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals/mutations/mutations */ "./components/globals/mutations/mutations.js");
/* harmony import */ var _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/possibleStatus */ "./lib/possibleStatus.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/CreateEvent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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














var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_5__["adopt"])({
  allActsQuery: function allActsQuery(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__["ALL_ACTS_QUERY"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, render);
  },
  createEventWithNewActMutation: function createEventWithNewActMutation(_ref2) {
    var eventNewActUpdates = _ref2.eventNewActUpdates,
        render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      variables: eventNewActUpdates,
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_11__["CREATE_EVENT_WITH_NEW_ACT_MUTATION"],
      refetchQueries: [{
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__["ALL_EVENTS_QUERY"]
      }, {
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__["ALL_ACTS_QUERY"]
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, render);
  },
  createEventWithExistingActMutation: function createEventWithExistingActMutation(_ref3) {
    var eventExistingActUpdates = _ref3.eventExistingActUpdates,
        render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      variables: eventExistingActUpdates,
      mutation: _globals_mutations_mutations__WEBPACK_IMPORTED_MODULE_11__["CREATE_EVENT_WITH_EXISTING_ACT_MUTATION"],
      refetchQueries: [{
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__["ALL_EVENTS_QUERY"]
      }, {
        query: _globals_queries_queries__WEBPACK_IMPORTED_MODULE_10__["ALL_ACTS_QUERY"]
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, render);
  },
  spring: function spring(_ref4) {
    var render = _ref4.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_6__["Spring"], {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, render);
  }
});

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
      duration: 45,
      title: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), "MM-dd-YYYY", {
        awareOfUnicodeTokens: true
      }),
      status: 'CONFIRMED',
      start: new Date(),
      end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMinutes"])(new Date(), 45),
      allDay: false,
      notes: [''],
      name: '',
      image: '',
      largeImage: '',
      email: '',
      description: '',
      actId: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value; // console.log(type)
      // console.log(value)

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

        case 'notes':
          var notes = _toConsumableArray(_this.state.notes);

          var selectedIndex = parseInt(e.target.dataset.key);
          notes[selectedIndex] = value;
          return _this.setState({
            notes: notes
          });
      }

      switch (type) {
        case 'date':
          var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(_this.state.start, "H:MM", {
            awareOfUnicodeTokens: true
          });
          var startDateTime = new Date("".concat(value, " ").concat(time));
          var title = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(value, "YYYY-MM-dd", {
            awareOfUnicodeTokens: true
          });
          var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMinutes"])(startDateTime, _this.state.duration);

          _this.setState({
            start: startDateTime,
            title: title,
            end: end
          });

          break;

        case 'time':
          var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(_this.state.start, "YYYY-MM-dd", {
            awareOfUnicodeTokens: true
          });
          startDateTime = new Date("".concat(date, " ").concat(value));
          end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMinutes"])(startDateTime, _this.state.duration);

          _this.setState({
            start: startDateTime,
            end: end
          });

          break;

        case 'number':
          var val = parseFloat(value);

          _this.setState({
            duration: val,
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMinutes"])(_this.state.start, val)
          });

          break;

        case 'checkbox':
          _this.setState({
            allDay: !_this.state.allDay
          });

          break;

        default:
          _this.setState(_defineProperty({}, name, value));

      }
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addNoteField", function (e) {
      e.preventDefault();

      var notes = _toConsumableArray(_this.state.notes);

      notes.push('');

      _this.setState({
        notes: notes
      });
    });

    return _this;
  }

  _createClass(CreateEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (next_router__WEBPACK_IMPORTED_MODULE_7___default.a.query.start) {
        var decodedStart = decodeURIComponent(next_router__WEBPACK_IMPORTED_MODULE_7___default.a.query.start);
        var decodedEnd = decodeURIComponent(next_router__WEBPACK_IMPORTED_MODULE_7___default.a.query.end);
        this.setState({
          title: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(decodedStart), "YYYY-MM-dd", {
            awareOfUnicodeTokens: true
          }),
          start: new Date(decodedStart),
          end: new Date(decodedEnd)
        });
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dateFormat = "yyyy-MM-dd";
      var timeFormat = "H:mm";
      var notes = this.state.notes.map(function (note, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "notes",
          key: index,
          "data-key": index,
          name: "notes",
          placeholder: "Enter A Note",
          value: note,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Composed, {
        eventNewActUpdates: {
          title: this.state.title,
          status: this.state.status,
          start: this.state.start,
          end: this.state.end,
          allDay: this.state.allDay,
          notes: this.state.notes,
          name: this.state.name,
          image: this.state.image,
          largeImage: this.state.largeImage,
          email: this.state.email,
          description: this.state.description
        },
        eventExistingActUpdates: {
          title: this.state.title,
          status: this.state.status,
          start: this.state.start,
          end: this.state.end,
          allDay: this.state.allDay,
          notes: this.state.notes,
          actId: this.state.actId
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, function (_ref6) {
        var allActsQuery = _ref6.allActsQuery,
            createEventWithNewActMutation = _ref6.createEventWithNewActMutation,
            createEventWithExistingActMutation = _ref6.createEventWithExistingActMutation,
            spring = _ref6.spring;
        if (allActsQuery.loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Loading...");
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: spring,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref7 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();

                      if (_this2.state.actId) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 4;
                      return createEventWithNewActMutation();

                    case 4:
                      _context2.t0 = _context2.sent;
                      _context2.next = 10;
                      break;

                    case 7:
                      _context2.next = 9;
                      return createEventWithExistingActMutation();

                    case 9:
                      _context2.t0 = _context2.sent;

                    case 10:
                      res = _context2.t0;
                      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
                        pathname: '/'
                      });

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref7.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          error: allActsQuery.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: allActsQuery.loading,
          "aria-busy": allActsQuery.loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, "Date", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "date",
          id: "date",
          name: "date",
          placeholder: "Date",
          value: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(_this2.state.start, dateFormat, {
            awareOfUnicodeTokens: true
          }),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, "Time", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "time",
          id: "time",
          name: "time",
          placeholder: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(_this2.state.start), 20), timeFormat),
          value: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(_this2.state.start, timeFormat, {
            awareOfUnicodeTokens: true
          }),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "duration",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Duration (minutes)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "duration",
          name: "duration",
          placeholder: "45",
          value: _this2.state.duration,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "Status", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "status",
          defaultValue: _this2.state.status,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_12__["possibleStatus"].map(function (status) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: status,
            value: status,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, status);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, "All Day", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "checkbox",
          id: "allday",
          name: "allday",
          checked: _this2.state.allDay,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "notes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, "Notes", notes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: _this2.addNoteField,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "+"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "acts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "Select An Act Already In The Database", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "select-existing-act",
          defaultValue: "",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, "Acts"), allActsQuery.data.acts.map(function (act) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: act.id,
            value: act.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, act.name);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "Or Create A New Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          disabled: !!_this2.state.actId,
          required: !_this2.state.actId,
          value: _this2.state.name,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter A Description",
          disabled: !!_this2.state.actId,
          required: !_this2.state.actId,
          value: _this2.state.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          id: "email",
          name: "email",
          placeholder: "email",
          disabled: !!_this2.state.actId,
          required: !_this2.state.actId,
          value: _this2.state.email,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          disabled: !!_this2.state.actId,
          placeholder: "Upload an image",
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this2.state.image,
          alt: "Upload Preview",
          width: "200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, "Submit"))));
      });
    }
  }]);

  return CreateEvent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateEvent);

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

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signin */ "./components/Signin.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/PleaseSignIn.js";





var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Please Sign In Before Continuing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

/***/ }),

/***/ "./components/Signin.js":
/*!******************************!*\
  !*** ./components/Signin.js ***!
  \******************************/
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/Signin.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password ) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      password: '',
      email: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signup();

                    case 3:
                      _this2.setState({
                        name: '',
                        password: '',
                        email: ''
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Sign In")));
      });
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me{\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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

/***/ "./pages/newCalEvent.js":
/*!******************************!*\
  !*** ./pages/newCalEvent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateEvent */ "./components/CreateEvent.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
var _jsxFileName = "/Users/jake/Development/projects/react-apollo-cal/React-Apollo-Cal-FrontEnd/pages/newCalEvent.js";




var NewCalEvent = function NewCalEvent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreateEvent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewCalEvent);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/newCalEvent.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/newCalEvent.js */"./pages/newCalEvent.js");


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
//# sourceMappingURL=newCalEvent.js.map