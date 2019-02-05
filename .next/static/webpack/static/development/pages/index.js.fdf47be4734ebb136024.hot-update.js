webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuickUpdate.js":
/*!***********************************!*\
  !*** ./components/QuickUpdate.js ***!
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
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _styles_QuickUpdateStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/QuickUpdateStyles */ "./components/styles/QuickUpdateStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Portal */ "./components/Portal.js");
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
        lineNumber: 18
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
        lineNumber: 19
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
        lineNumber: 20
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
          lineNumber: 126
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
                lineNumber: 133
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
                lineNumber: 133
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
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
                lineNumber: 135
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
                lineNumber: 135
              },
              __self: this
            }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onClick: function onClick(e) {
                return _this2.handleDeleteNote(e, index, event.notes);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
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
              lineNumber: 137
            },
            __self: this
          }, act.name);
        }) : null;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_8__["Portal"], {
          selector: "#modal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_OverlayStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_QuickUpdateStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: toggleModalMutation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: updateEventMutation.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_QuickUpdateFormStyles__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSubmit: function onSubmit(e) {
            return _this2.updateEvent(e, updateEventMutation, toggleModalMutation);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: updateEventMutation.loading,
          "aria-busy": updateEventMutation.loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, "Edit Event"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
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
            lineNumber: 149
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
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
            lineNumber: 154
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "duration",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
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
            lineNumber: 159
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, "Status", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          name: "status",
          defaultValue: event.status,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, _lib_possibleStatus__WEBPACK_IMPORTED_MODULE_15__["possibleStatus"].map(function (status) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: status,
            value: status,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, status);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "allDay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
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
            lineNumber: 171
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "draw",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
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
            lineNumber: 176
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "notes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, "Notes", notes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DeleteButtonStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick(e) {
            return _this2.addNoteField(e, _this2.state.notes ? null : event.notes);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "+"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, "Edit Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "note: this will alter every event this act is associated with"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
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
            lineNumber: 192
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
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
            lineNumber: 196
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
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
            lineNumber: 201
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
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
            lineNumber: 206
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this2.state.image ? _this2.state.image : event.act.image,
          alt: "Image Preview",
          width: "200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "Change To A Different Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "...currently not working"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          defaultValue: "",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, "Acts"), acts)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, "Create A New Act"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, "...work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
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

/***/ "./components/styles/Form.js":
false,

/***/ "./components/styles/QuickUpdateFormStyles.js":
/*!****************************************************!*\
  !*** ./components/styles/QuickUpdateFormStyles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "QuickUpdateFormStyles__Form",
  componentId: "sc-1s7v8rz-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.0rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.mainColor;
}, function (props) {
  return props.theme.mainColor;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.fdf47be4734ebb136024.hot-update.js.map