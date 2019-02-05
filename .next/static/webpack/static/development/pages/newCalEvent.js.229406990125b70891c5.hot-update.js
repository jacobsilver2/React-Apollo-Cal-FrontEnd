webpackHotUpdate("static/development/pages/newCalEvent.js",{

/***/ "./components/CreateEvent.js":
/*!***********************************!*\
  !*** ./components/CreateEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
        }, "+")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "acts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, "Select An Act Already In The Database", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "select-existing-act",
          defaultValue: "",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Acts"), allActsQuery.data.acts.map(function (act) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: act.id,
            value: act.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, act.name);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "Or Create A New Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
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
            lineNumber: 193
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
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
            lineNumber: 198
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
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
            lineNumber: 203
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
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
            lineNumber: 208
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this2.state.image,
          alt: "Upload Preview",
          width: "200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, "Submit"))));
      });
    }
  }]);

  return CreateEvent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateEvent);

/***/ })

})
//# sourceMappingURL=newCalEvent.js.229406990125b70891c5.hot-update.js.map