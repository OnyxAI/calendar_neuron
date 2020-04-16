(window["webpackJsonpcalendar"] = window["webpackJsonpcalendar"] || []).push([[677],{

/***/ 88127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* default */ index
});

// EXTERNAL MODULE: overridable react -> ./node_modules/react/index.js
var react = __webpack_require__(61801);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);

// EXTERNAL MODULE: overridable react-redux -> ../../node_modules/react-redux/es/index.js
var es = __webpack_require__(64499);

// EXTERNAL MODULE: ../../node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(99085);

// EXTERNAL MODULE: remote onyx/utils
var utils = __webpack_require__(56749);

// EXTERNAL MODULE: overridable react-intl -> ./node_modules/react-intl/lib/index.js
var lib = __webpack_require__(84788);

// EXTERNAL MODULE: overridable reselect -> ../../node_modules/reselect/es/index.js
var reselect_es = __webpack_require__(62103);

// EXTERNAL MODULE: overridable redux -> ../../node_modules/redux/es/redux.js
var redux = __webpack_require__(45317);

// EXTERNAL MODULE: ../../node_modules/globalize/lib/globalize.js
var globalize = __webpack_require__(75157);
var globalize_default = /*#__PURE__*/__webpack_require__.n(globalize);

// EXTERNAL MODULE: ../../node_modules/uikit-react/lib/uikit-react.js
var uikit_react = __webpack_require__(64542);

// EXTERNAL MODULE: overridable react-materialize -> ../../node_modules/react-materialize/lib/index.js
var react_materialize_lib = __webpack_require__(50993);

// EXTERNAL MODULE: overridable materialize-css -> ../../node_modules/materialize-css/dist/js/materialize.js
var materialize = __webpack_require__(72122);
var materialize_default = /*#__PURE__*/__webpack_require__.n(materialize);

// EXTERNAL MODULE: ./node_modules/react-big-calendar/dist/react-big-calendar.esm.js + 225 modules
var react_big_calendar_esm = __webpack_require__(99414);

// EXTERNAL MODULE: ./node_modules/react-big-calendar/lib/addons/dragAndDrop/index.js
var dragAndDrop = __webpack_require__(28624);
var dragAndDrop_default = /*#__PURE__*/__webpack_require__.n(dragAndDrop);

// EXTERNAL MODULE: ../../node_modules/react-color/lib/index.js
var react_color_lib = __webpack_require__(51626);

// EXTERNAL MODULE: ../../node_modules/immer/dist/immer.module.js
var immer_module = __webpack_require__(8662);

// CONCATENATED MODULE: ./src/containers/Calendar/constants.js
/*
 *
 * Calendar constants
 *
 */
var GET_EVENTS = 'app/Calendar/GET_EVENTS';
var GET_EVENTS_SUCCESS = 'app/Calendar/GET_EVENTS_SUCCESS';
var GET_EVENTS_ERROR = 'app/Calendar/GET_EVENTS_ERROR';
var UPDATE_DATE_EVENT = 'app/Calendar/UPDATE_DATE_EVENT';
var UPDATE_DATE_EVENT_SUCCESS = 'app/Calendar/UPDATE_DATE_EVENT_SUCCESS';
var UPDATE_DATE_EVENT_ERROR = 'app/Calendar/UPDATE_DATE_EVENT_ERROR';
var ADD_EVENT = 'app/Calendar/ADD_EVENT';
var ADD_EVENT_SUCCESS = 'app/Calendar/ADD_EVENT_SUCCESS';
var ADD_EVENT_ERROR = 'app/Calendar/ADD_EVENT_ERROR';
var UPDATE_EVENT = 'app/Calendar/UPDATE_EVENT';
var UPDATE_EVENT_SUCCESS = 'app/Calendar/UPDATE_EVENT_SUCCESS';
var UPDATE_EVENT_ERROR = 'app/Calendar/UPDATE_EVENT_ERROR';
var DELETE_EVENT = 'app/Calendar/DELETE_EVENT';
var DELETE_EVENT_SUCCESS = 'app/Calendar/DELETE_EVENT_SUCCESS';
var DELETE_EVENT_ERROR = 'app/Calendar/DELETE_EVENT_ERROR';
var CHANGE_ID = 'app/Calendar/CHANGE_ID';
var CHANGE_START = 'app/Calendar/CHANGE_START';
var CHANGE_END = 'app/Calendar/CHANGE_END';
var CHANGE_TITLE = 'app/Calendar/CHANGE_TITLE';
var CHANGE_PLACE = 'app/Calendar/CHANGE_PLACE';
var CHANGE_NOTE = 'app/Calendar/CHANGE_NOTE';
var CHANGE_COLOR = 'app/Calendar/CHANGE_COLOR';
// CONCATENATED MODULE: ./src/containers/Calendar/reducer.js
/*
 *
 * Calendar reducer
 *
 */


var initialState = {
  events: [],
  errorText: '',
  title: '',
  start: '',
  end: '',
  place: '',
  color: '',
  note: '',
  id: ''
};
/* eslint-disable default-case, no-param-reassign */

var calendarReducer = function calendarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0,immer_module/* default */.ZP)(state, function (draft) {
    switch (action.type) {
      case CHANGE_ID:
        draft.id = action.id;
        break;

      case CHANGE_COLOR:
        draft.color = action.color;
        break;

      case CHANGE_PLACE:
        draft.place = action.place;
        break;

      case CHANGE_TITLE:
        draft.title = action.title;
        break;

      case CHANGE_NOTE:
        draft.note = action.note;
        break;

      case CHANGE_START:
        draft.start = action.start;
        break;

      case CHANGE_END:
        draft.end = action.end;
        break;

      case GET_EVENTS_SUCCESS:
        draft.events = action.events;
        break;

      case GET_EVENTS_ERROR:
        draft.errorText = action.error;
        break;

      case UPDATE_DATE_EVENT:
        draft.start = action.start;
        draft.end = action.end;
        draft.id = action.id;
        break;

      case UPDATE_DATE_EVENT_SUCCESS:
        draft.id = '';
        draft.start = '';
        draft.end = '';
        break;

      case UPDATE_DATE_EVENT_ERROR:
        draft.id = '';
        draft.start = '';
        draft.end = '';
        draft.errorText = action.error;
        break;

      case UPDATE_EVENT_SUCCESS:
        draft.id = '';
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        break;

      case UPDATE_EVENT_ERROR:
        draft.id = '';
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        draft.errorText = action.error;
        break;

      case ADD_EVENT_SUCCESS:
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        break;

      case ADD_EVENT_ERROR:
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        draft.errorText = action.error;
        break;

      case DELETE_EVENT_SUCCESS:
        draft.id = '';
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        break;

      case DELETE_EVENT_ERROR:
        draft.id = '';
        draft.color = '';
        draft.title = '';
        draft.place = '';
        draft.start = '';
        draft.end = '';
        draft.note = '';
        draft.errorText = action.error;
        break;
    }
  });
};

/* harmony default export */ const reducer = (calendarReducer);
// CONCATENATED MODULE: ./src/containers/Calendar/selectors.js


/**
 * Direct selector to the calendar state domain
 */

var selectCalendarDomain = function selectCalendarDomain(state) {
  return state.calendar || initialState;
};
/**
 * Other specific selectors
 */


var makeSelectEvents = function makeSelectEvents() {
  return (0,reselect_es.createSelector)(selectCalendarDomain, function (substate) {
    return substate.events;
  });
};
/**
 * Default selector used by Calendar
 */


var makeSelectCalendar = function makeSelectCalendar() {
  return (0,reselect_es.createSelector)(selectCalendarDomain, function (substate) {
    return substate;
  });
};

/* harmony default export */ const selectors = (makeSelectCalendar);

// CONCATENATED MODULE: ./src/containers/Calendar/actions.js
/* eslint-disable no-undef */

/* eslint-disable no-param-reassign */

/*
 *
 * Calendar actions
 *
 */

function deleteEvent() {
  return {
    type: DELETE_EVENT
  };
}
function deleteEventSuccess() {
  return {
    type: DELETE_EVENT_SUCCESS
  };
}
function deleteEventError(error) {
  return {
    type: DELETE_EVENT_ERROR,
    error: error
  };
}
function updateDateEvent(id, start, end) {
  return {
    type: UPDATE_DATE_EVENT,
    start: start,
    end: end,
    id: id
  };
}
function updateDateEventSuccess() {
  return {
    type: UPDATE_DATE_EVENT_SUCCESS
  };
}
function updateDateEventError(error) {
  return {
    type: UPDATE_DATE_EVENT_ERROR,
    error: error
  };
}
function updateEvent() {
  return {
    type: UPDATE_EVENT
  };
}
function updateEventSuccess() {
  return {
    type: UPDATE_EVENT_SUCCESS
  };
}
function updateEventError(error) {
  return {
    type: UPDATE_EVENT_ERROR,
    error: error
  };
}
function getEvents() {
  return {
    type: GET_EVENTS
  };
}
function getEventsSuccess(events) {
  events.forEach(function (event, index) {
    events[index].start = new Date(events[index].start);
    events[index].end = new Date(events[index].end);
  });
  return {
    type: GET_EVENTS_SUCCESS,
    events: events
  };
}
function getEventsError(error) {
  return {
    type: GET_EVENTS_ERROR,
    error: error
  };
}
function addEvent() {
  return {
    type: ADD_EVENT
  };
}
function addEventSuccess() {
  return {
    type: ADD_EVENT_SUCCESS
  };
}
function addEventError(error) {
  return {
    type: ADD_EVENT_ERROR,
    error: error
  };
}
function changeId(id) {
  return {
    type: CHANGE_ID,
    id: id
  };
}
function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color: color
  };
}
function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title: title
  };
}
function changePlace(place) {
  return {
    type: CHANGE_PLACE,
    place: place
  };
}
function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    note: note
  };
}
function changeStart(start) {
  return {
    type: CHANGE_START,
    start: start
  };
}
function changeEnd(end) {
  return {
    type: CHANGE_END,
    end: end
  };
}
// EXTERNAL MODULE: ../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 5 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(71605);

// EXTERNAL MODULE: ../../node_modules/moment/moment.js
var moment = __webpack_require__(19034);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/containers/Calendar/saga.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(loadGetEvents),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loadAddEvent),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(loadUpdateDateEvent),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(loadUpdateEvent),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(loadDeleteEvent),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(calendarSaga);






 // Get Events

function loadGetEvents() {
  var token, result;
  return regeneratorRuntime.wrap(function loadGetEvents$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = localStorage.getItem('access_token');
          _context.prev = 1;
          _context.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils.request, {
            method: 'GET',
            url: "/api/neuron/calendar",
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          });

        case 4:
          result = _context.sent;

          if (!(result && result.status === 'success')) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEventsSuccess(result.events));

        case 8:
          _context.next = 17;
          break;

        case 10:
          if (!(result && result.status === 'error')) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEventsError(result.message));

        case 13:
          _context.next = 17;
          break;

        case 15:
          _context.next = 17;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEventsError('An error has occured'));

        case 17:
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](1);
          _context.next = 23;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEventsError(_context.t0.toString()));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 19]]);
} // Add Event

function loadAddEvent() {
  var token, calendar, result;
  return regeneratorRuntime.wrap(function loadAddEvent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          token = localStorage.getItem('access_token');
          _context2.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors());

        case 3:
          calendar = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils.request, {
            method: 'POST',
            url: "/api/neuron/calendar",
            headers: {
              Authorization: "Bearer ".concat(token)
            },
            data: {
              title: calendar.title,
              note: calendar.note,
              place: calendar.place,
              color: calendar.color,
              start: moment_default()(calendar.start).format(),
              end: moment_default()(calendar.end).format()
            }
          });

        case 7:
          result = _context2.sent;

          if (!(result && result.status === 'success')) {
            _context2.next = 15;
            break;
          }

          _context2.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEvents());

        case 11:
          _context2.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(addEventSuccess());

        case 13:
          _context2.next = 22;
          break;

        case 15:
          if (!(result && result.status === 'error')) {
            _context2.next = 20;
            break;
          }

          _context2.next = 18;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(addEventError(result.message));

        case 18:
          _context2.next = 22;
          break;

        case 20:
          _context2.next = 22;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(addEventError('An error has occured'));

        case 22:
          _context2.next = 28;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 28;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(addEventError(_context2.t0.toString()));

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[4, 24]]);
} // Update Date Event

function loadUpdateDateEvent() {
  var token, calendar, result;
  return regeneratorRuntime.wrap(function loadUpdateDateEvent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          token = localStorage.getItem('access_token');
          _context3.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors());

        case 3:
          calendar = _context3.sent;
          _context3.prev = 4;
          _context3.next = 7;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils.request, {
            method: 'PUT',
            url: "/api/neuron/calendar",
            headers: {
              Authorization: "Bearer ".concat(token)
            },
            data: {
              id: calendar.id,
              start: moment_default()(calendar.start).format(),
              end: moment_default()(calendar.end).format()
            }
          });

        case 7:
          result = _context3.sent;

          if (!(result && result.status === 'success')) {
            _context3.next = 15;
            break;
          }

          _context3.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEvents());

        case 11:
          _context3.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateDateEventSuccess());

        case 13:
          _context3.next = 22;
          break;

        case 15:
          if (!(result && result.status === 'error')) {
            _context3.next = 20;
            break;
          }

          _context3.next = 18;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateDateEventError(result.message));

        case 18:
          _context3.next = 22;
          break;

        case 20:
          _context3.next = 22;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateDateEventError('An error has occured'));

        case 22:
          _context3.next = 28;
          break;

        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 28;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateDateEventError(_context3.t0.toString()));

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 24]]);
} // Update  Event

function loadUpdateEvent() {
  var token, calendar, result;
  return regeneratorRuntime.wrap(function loadUpdateEvent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          token = localStorage.getItem('access_token');
          _context4.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors());

        case 3:
          calendar = _context4.sent;
          _context4.prev = 4;
          _context4.next = 7;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils.request, {
            method: 'POST',
            url: "/api/neuron/calendar/update",
            headers: {
              Authorization: "Bearer ".concat(token)
            },
            data: {
              id: calendar.id,
              color: calendar.color,
              title: calendar.title,
              place: calendar.place,
              note: calendar.note
            }
          });

        case 7:
          result = _context4.sent;

          if (!(result && result.status === 'success')) {
            _context4.next = 15;
            break;
          }

          _context4.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEvents());

        case 11:
          _context4.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEventSuccess());

        case 13:
          _context4.next = 22;
          break;

        case 15:
          if (!(result && result.status === 'error')) {
            _context4.next = 20;
            break;
          }

          _context4.next = 18;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEventError(result.message));

        case 18:
          _context4.next = 22;
          break;

        case 20:
          _context4.next = 22;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEventError('An error has occured'));

        case 22:
          _context4.next = 28;
          break;

        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](4);
          _context4.next = 28;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEventError(_context4.t0.toString()));

        case 28:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 24]]);
} // Delete Event

function loadDeleteEvent() {
  var token, calendar, result;
  return regeneratorRuntime.wrap(function loadDeleteEvent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          token = localStorage.getItem('access_token');
          _context5.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors());

        case 3:
          calendar = _context5.sent;
          _context5.prev = 4;
          _context5.next = 7;
          return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(utils.request, {
            method: 'PUT',
            url: "/api/neuron/calendar/update",
            headers: {
              Authorization: "Bearer ".concat(token)
            },
            data: {
              id: calendar.id
            }
          });

        case 7:
          result = _context5.sent;

          if (!(result && result.status === 'success')) {
            _context5.next = 15;
            break;
          }

          _context5.next = 11;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(getEvents());

        case 11:
          _context5.next = 13;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(deleteEventSuccess());

        case 13:
          _context5.next = 22;
          break;

        case 15:
          if (!(result && result.status === 'error')) {
            _context5.next = 20;
            break;
          }

          _context5.next = 18;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(deleteEventError(result.message));

        case 18:
          _context5.next = 22;
          break;

        case 20:
          _context5.next = 22;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(deleteEventError('An error has occured'));

        case 22:
          _context5.next = 28;
          break;

        case 24:
          _context5.prev = 24;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 28;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(deleteEventError(_context5.t0.toString()));

        case 28:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[4, 24]]);
} // Individual exports for testing

function calendarSaga() {
  return regeneratorRuntime.wrap(function calendarSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(GET_EVENTS, loadGetEvents);

        case 2:
          _context6.next = 4;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(ADD_EVENT, loadAddEvent);

        case 4:
          _context6.next = 6;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(UPDATE_DATE_EVENT, loadUpdateDateEvent);

        case 6:
          _context6.next = 8;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(UPDATE_EVENT, loadUpdateEvent);

        case 8:
          _context6.next = 10;
          return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(DELETE_EVENT, loadDeleteEvent);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
// CONCATENATED MODULE: ./src/containers/Calendar/messages.js
/*
 * Calendar Messages
 *
 * This contains all the text for the Calendar container.
 */

var scope = 'app.containers.Calendar';
/* harmony default export */ const messages = ((0,lib.defineMessages)({
  header: {
    id: "".concat(scope, ".header"),
    defaultMessage: 'Calendar'
  },
  title: {
    id: "".concat(scope, ".title"),
    defaultMessage: 'Title'
  },
  place: {
    id: "".concat(scope, ".place"),
    defaultMessage: 'Place'
  },
  note: {
    id: "".concat(scope, ".note"),
    defaultMessage: 'Note'
  },
  start: {
    id: "".concat(scope, ".start"),
    defaultMessage: 'Start'
  },
  end: {
    id: "".concat(scope, ".end"),
    defaultMessage: 'End'
  },
  send: {
    id: "".concat(scope, ".send"),
    defaultMessage: 'Send'
  },
  delete: {
    id: "".concat(scope, ".delete"),
    defaultMessage: 'Delete'
  },
  add_event: {
    id: "".concat(scope, ".add_event"),
    defaultMessage: 'Add Event'
  },
  update_event: {
    id: "".concat(scope, ".update_event"),
    defaultMessage: 'Update Event'
  }
}));
var calendarMessagesFR = {
  allDay: 'Journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  // Or anything you want
  showMore: function showMore(total) {
    return "+ ".concat(total, " \xE9v\xE9nement(s) suppl\xE9mentaire(s)");
  }
};
function getCalendarMessage(language) {
  var messages = {};

  switch (language) {
    case 'fr-FR':
      messages = calendarMessagesFR;
      break;

    default:
      messages = {};
  }

  return messages;
}
// EXTERNAL MODULE: ./node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css
var styles = __webpack_require__(39281);

// EXTERNAL MODULE: ./node_modules/react-big-calendar/lib/css/react-big-calendar.css
var react_big_calendar = __webpack_require__(29736);

// CONCATENATED MODULE: ./src/containers/Calendar/index.js
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/* eslint-disable no-undef */

/**
 *
 * Calendar
 *
 */
























__webpack_require__(41155);

var localizer = (0,react_big_calendar_esm/* globalizeLocalizer */.E7)((globalize_default()));
var Cal = dragAndDrop_default()(react_big_calendar_esm/* Calendar */.f);

var _ref2 = /*#__PURE__*/_jsx(Helmet/* Helmet */.q, {}, void 0, _jsx("title", {}, void 0, "Calendar"), _jsx("meta", {
  name: "description",
  content: "Description of Calendar"
}));

var _ref6 = /*#__PURE__*/_jsx("p", {});

var _ref7 = /*#__PURE__*/_jsx("p", {});

function Calendar(_ref) {
  var user = _ref.user,
      calendar = _ref.calendar,
      widget = _ref.widget,
      events = _ref.events,
      getEventsFunc = _ref.getEventsFunc,
      addEventFunc = _ref.addEventFunc,
      deleteEventFunc = _ref.deleteEventFunc,
      updateDateEventFunc = _ref.updateDateEventFunc,
      updateEventFunc = _ref.updateEventFunc,
      changeIdFunc = _ref.changeIdFunc,
      changeColorFunc = _ref.changeColorFunc,
      changeEndFunc = _ref.changeEndFunc,
      changeNoteFunc = _ref.changeNoteFunc,
      changeStartFunc = _ref.changeStartFunc,
      changeTitleFunc = _ref.changeTitleFunc,
      changePlaceFunc = _ref.changePlaceFunc;
  (0,utils.useInjectReducer)({
    key: 'calendar',
    reducer: reducer
  });
  (0,utils.useInjectSaga)({
    key: 'calendar',
    saga: calendarSaga
  });
  (0,react.useEffect)(function () {
    getEventsFunc();
  }, [0]);
  return _jsx("div", {}, void 0, _ref2, _jsx(uikit_react/* Card */.Zb, {
    hover: true,
    className: widget && 'widget'
  }, void 0, _jsx(uikit_react/* CardHeader */.Ol, {}, void 0, _jsx(uikit_react/* CardTitle */.ll, {}, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.header)), _jsx(uikit_react/* CardBody */.eW, {}, void 0, _jsx(Cal, {
    localizer: localizer,
    events: events !== undefined ? events : [],
    eventPropGetter: function eventPropGetter(event) {
      if (event.color) {
        return {
          style: {
            backgroundColor: event.color
          }
        };
      }

      return {};
    },
    resizable: true,
    culture: user.language.substring(0, 2),
    messages: getCalendarMessage(user.language),
    selectable: true,
    onEventDrop: function onEventDrop(_ref3) {
      var event = _ref3.event,
          start = _ref3.start,
          end = _ref3.end;
      return updateDateEventFunc(event.id, start, end);
    },
    onEventResize: function onEventResize(_ref4) {
      var event = _ref4.event,
          start = _ref4.start,
          end = _ref4.end;
      return updateDateEventFunc(event.id, start, end);
    },
    onSelectSlot: function onSelectSlot(_ref5) {
      var start = _ref5.start,
          end = _ref5.end;
      changeStartFunc(start);
      changeEndFunc(end); // eslint-disable-next-line no-undef

      materialize_default().Modal.getInstance(addModal).open();
    },
    onSelectEvent: function onSelectEvent(event) {
      changeStartFunc(event.start);
      changeEndFunc(event.end);
      changeColorFunc(event.color);
      changeNoteFunc(event.note);
      changePlaceFunc(event.place);
      changeTitleFunc(event.title);
      changeIdFunc(event.id); // eslint-disable-next-line no-undef

      materialize_default().Modal.getInstance(updateModal).open();
    },
    startAccessor: "start",
    endAccessor: "end",
    style: {
      height: widget ? '29vh' : 500
    }
  }), _jsx(react_materialize_lib.Modal, {
    id: "addModal",
    actions: _ref6,
    header: /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.add_event)
  }, void 0, _jsx("form", {
    onSubmit: addEventFunc
  }, void 0, _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "title"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.title)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.title, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.title,
      name: "title",
      id: "title",
      onChange: changeTitleFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "place"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.place)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.place, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.place,
      name: "place",
      id: "place",
      onChange: changePlaceFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "note"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.note)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.note, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.note,
      name: "note",
      id: "note",
      onChange: changeNoteFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small uk-position-top-center uk-position-relative"
  }, void 0, _jsx(react_color_lib/* ChromePicker */.AI, {
    color: calendar.color,
    onChangeComplete: changeColorFunc
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("p", {}, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.start), " :", ' ', calendar.start.toString()), _jsx("p", {}, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.end), " :", ' ', calendar.end.toString())), _jsx("div", {
    className: "uk-padding-small center"
  }, void 0, _jsx("button", {
    type: "submit",
    className: "uk-button uk-button-primary uk-button-large"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.send))))), _jsx(react_materialize_lib.Modal, {
    id: "updateModal",
    actions: _ref7,
    header: /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.update_event)
  }, void 0, _jsx("form", {
    onSubmit: updateEventFunc
  }, void 0, _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "title"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.title)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.title, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.title,
      name: "title",
      id: "title",
      onChange: changeTitleFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "place"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.place)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.place, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.place,
      name: "place",
      id: "place",
      onChange: changePlaceFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("label", {
    htmlFor: "note"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.note)), /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.note, function (message) {
    return _jsx("input", {
      type: "text",
      className: "uk-input uk-form-large",
      value: calendar.note,
      name: "note",
      id: "note",
      onChange: changeNoteFunc,
      placeholder: message
    });
  })), _jsx("div", {
    className: "uk-padding-small uk-position-top-center uk-position-relative"
  }, void 0, _jsx(react_color_lib/* ChromePicker */.AI, {
    color: calendar.color,
    onChangeComplete: changeColorFunc
  })), _jsx("div", {
    className: "uk-padding-small"
  }, void 0, _jsx("p", {}, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.start), " :", ' ', calendar.start.toString()), _jsx("p", {}, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.end), " :", ' ', calendar.end.toString())), _jsx("div", {
    className: "uk-padding-small center"
  }, void 0, _jsx("button", {
    type: "button",
    className: "uk-margin-right uk-button uk-button-primary uk-button-large",
    onClick: deleteEventFunc
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.delete)), _jsx("button", {
    type: "submit",
    className: "uk-margin-left uk-button uk-button-primary uk-button-large"
  }, void 0, /*#__PURE__*/react_default().createElement(lib.FormattedMessage, messages.send)))))))));
}
var mapStateToProps = (0,reselect_es.createStructuredSelector)({
  events: makeSelectEvents(),
  calendar: selectors()
});

function mapDispatchToProps(dispatch) {
  return {
    getEventsFunc: function getEventsFunc() {
      dispatch(getEvents());
    },
    addEventFunc: function addEventFunc(evt) {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      materialize_default().Modal.getInstance(addModal).close();
      dispatch(addEvent());
    },
    updateDateEventFunc: function updateDateEventFunc(id, start, end) {
      dispatch(updateDateEvent(id, start, end));
    },
    deleteEventFunc: function deleteEventFunc() {
      materialize_default().Modal.getInstance(updateModal).close();
      dispatch(deleteEvent());
    },
    updateEventFunc: function updateEventFunc(evt) {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      materialize_default().Modal.getInstance(updateModal).close();
      dispatch(updateEvent());
    },
    changeColorFunc: function changeColorFunc(color) {
      if (color.hex) {
        dispatch(changeColor(color.hex));
      } else {
        dispatch(changeColor(color));
      }
    },
    changeIdFunc: function changeIdFunc(id) {
      dispatch(changeId(id));
    },
    changeTitleFunc: function changeTitleFunc(evt) {
      if (evt.target) {
        dispatch(changeTitle(evt.target.value));
      } else {
        dispatch(changeTitle(evt));
      }
    },
    changePlaceFunc: function changePlaceFunc(evt) {
      if (evt.target) {
        dispatch(changePlace(evt.target.value));
      } else {
        dispatch(changePlace(evt));
      }
    },
    changeNoteFunc: function changeNoteFunc(evt) {
      if (evt.target) {
        dispatch(changeNote(evt.target.value));
      } else {
        dispatch(changeNote(evt));
      }
    },
    changeStartFunc: function changeStartFunc(start) {
      dispatch(changeStart(start));
    },
    changeEndFunc: function changeEndFunc(end) {
      dispatch(changeEnd(end));
    }
  };
}

var withConnect = (0,es.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const containers_Calendar = ((0,redux.compose)(withConnect, react.memo)(Calendar));
// CONCATENATED MODULE: ./index.js



/* harmony default export */ const index = (containers_Calendar);


/***/ }),

/***/ 96616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 95191,
	"./af.js": 95191,
	"./ar": 54358,
	"./ar-dz": 71727,
	"./ar-dz.js": 71727,
	"./ar-kw": 98279,
	"./ar-kw.js": 98279,
	"./ar-ly": 87895,
	"./ar-ly.js": 87895,
	"./ar-ma": 11987,
	"./ar-ma.js": 11987,
	"./ar-sa": 52796,
	"./ar-sa.js": 52796,
	"./ar-tn": 12386,
	"./ar-tn.js": 12386,
	"./ar.js": 54358,
	"./az": 57452,
	"./az.js": 57452,
	"./be": 79053,
	"./be.js": 79053,
	"./bg": 65428,
	"./bg.js": 65428,
	"./bm": 21569,
	"./bm.js": 21569,
	"./bn": 56212,
	"./bn.js": 56212,
	"./bo": 13667,
	"./bo.js": 13667,
	"./br": 192,
	"./br.js": 192,
	"./bs": 51802,
	"./bs.js": 51802,
	"./ca": 19118,
	"./ca.js": 19118,
	"./cs": 39990,
	"./cs.js": 39990,
	"./cv": 30557,
	"./cv.js": 30557,
	"./cy": 4227,
	"./cy.js": 4227,
	"./da": 95406,
	"./da.js": 95406,
	"./de": 87994,
	"./de-at": 44139,
	"./de-at.js": 44139,
	"./de-ch": 86591,
	"./de-ch.js": 86591,
	"./de.js": 87994,
	"./dv": 94649,
	"./dv.js": 94649,
	"./el": 14453,
	"./el.js": 14453,
	"./en-SG": 59804,
	"./en-SG.js": 59804,
	"./en-au": 48428,
	"./en-au.js": 48428,
	"./en-ca": 36972,
	"./en-ca.js": 36972,
	"./en-gb": 13224,
	"./en-gb.js": 13224,
	"./en-ie": 18843,
	"./en-ie.js": 18843,
	"./en-il": 32732,
	"./en-il.js": 32732,
	"./en-nz": 29851,
	"./en-nz.js": 29851,
	"./eo": 10654,
	"./eo.js": 10654,
	"./es": 63621,
	"./es-do": 68791,
	"./es-do.js": 68791,
	"./es-us": 60717,
	"./es-us.js": 60717,
	"./es.js": 63621,
	"./et": 72404,
	"./et.js": 72404,
	"./eu": 62944,
	"./eu.js": 62944,
	"./fa": 30496,
	"./fa.js": 30496,
	"./fi": 98137,
	"./fi.js": 98137,
	"./fo": 6545,
	"./fo.js": 6545,
	"./fr": 49090,
	"./fr-ca": 13049,
	"./fr-ca.js": 13049,
	"./fr-ch": 12338,
	"./fr-ch.js": 12338,
	"./fr.js": 49090,
	"./fy": 95088,
	"./fy.js": 95088,
	"./ga": 77812,
	"./ga.js": 77812,
	"./gd": 8374,
	"./gd.js": 8374,
	"./gl": 63649,
	"./gl.js": 63649,
	"./gom-latn": 44948,
	"./gom-latn.js": 44948,
	"./gu": 24033,
	"./gu.js": 24033,
	"./he": 10175,
	"./he.js": 10175,
	"./hi": 58055,
	"./hi.js": 58055,
	"./hr": 41678,
	"./hr.js": 41678,
	"./hu": 85111,
	"./hu.js": 85111,
	"./hy-am": 26530,
	"./hy-am.js": 26530,
	"./id": 19126,
	"./id.js": 19126,
	"./is": 11696,
	"./is.js": 11696,
	"./it": 98710,
	"./it-ch": 38821,
	"./it-ch.js": 38821,
	"./it.js": 98710,
	"./ja": 93974,
	"./ja.js": 93974,
	"./jv": 70648,
	"./jv.js": 70648,
	"./ka": 54731,
	"./ka.js": 54731,
	"./kk": 43501,
	"./kk.js": 43501,
	"./km": 84398,
	"./km.js": 84398,
	"./kn": 91825,
	"./kn.js": 91825,
	"./ko": 13729,
	"./ko.js": 13729,
	"./ku": 19670,
	"./ku.js": 19670,
	"./ky": 78797,
	"./ky.js": 78797,
	"./lb": 50627,
	"./lb.js": 50627,
	"./lo": 65859,
	"./lo.js": 65859,
	"./lt": 80355,
	"./lt.js": 80355,
	"./lv": 16594,
	"./lv.js": 16594,
	"./me": 45324,
	"./me.js": 45324,
	"./mi": 11689,
	"./mi.js": 11689,
	"./mk": 61308,
	"./mk.js": 61308,
	"./ml": 85241,
	"./ml.js": 85241,
	"./mn": 76320,
	"./mn.js": 76320,
	"./mr": 96771,
	"./mr.js": 96771,
	"./ms": 20503,
	"./ms-my": 77748,
	"./ms-my.js": 77748,
	"./ms.js": 20503,
	"./mt": 55534,
	"./mt.js": 55534,
	"./my": 62727,
	"./my.js": 62727,
	"./nb": 7550,
	"./nb.js": 7550,
	"./ne": 49899,
	"./ne.js": 49899,
	"./nl": 41228,
	"./nl-be": 31225,
	"./nl-be.js": 31225,
	"./nl.js": 41228,
	"./nn": 97130,
	"./nn.js": 97130,
	"./pa-in": 91282,
	"./pa-in.js": 91282,
	"./pl": 28190,
	"./pl.js": 28190,
	"./pt": 41549,
	"./pt-br": 78135,
	"./pt-br.js": 78135,
	"./pt.js": 41549,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 89272,
	"./ru.js": 89272,
	"./sd": 79248,
	"./sd.js": 79248,
	"./se": 74969,
	"./se.js": 74969,
	"./si": 65522,
	"./si.js": 65522,
	"./sk": 61581,
	"./sk.js": 61581,
	"./sl": 56428,
	"./sl.js": 56428,
	"./sq": 34611,
	"./sq.js": 34611,
	"./sr": 19821,
	"./sr-cyrl": 20185,
	"./sr-cyrl.js": 20185,
	"./sr.js": 19821,
	"./ss": 35029,
	"./ss.js": 35029,
	"./sv": 80939,
	"./sv.js": 80939,
	"./sw": 73107,
	"./sw.js": 73107,
	"./ta": 72304,
	"./ta.js": 72304,
	"./te": 72550,
	"./te.js": 72550,
	"./tet": 99717,
	"./tet.js": 99717,
	"./tg": 87669,
	"./tg.js": 87669,
	"./th": 94959,
	"./th.js": 94959,
	"./tl-ph": 52234,
	"./tl-ph.js": 52234,
	"./tlh": 94120,
	"./tlh.js": 94120,
	"./tr": 81111,
	"./tr.js": 81111,
	"./tzl": 53080,
	"./tzl.js": 53080,
	"./tzm": 88246,
	"./tzm-latn": 25385,
	"./tzm-latn.js": 25385,
	"./tzm.js": 88246,
	"./ug-cn": 48777,
	"./ug-cn.js": 48777,
	"./uk": 2014,
	"./uk.js": 2014,
	"./ur": 45953,
	"./ur.js": 45953,
	"./uz": 89716,
	"./uz-latn": 87791,
	"./uz-latn.js": 87791,
	"./uz.js": 89716,
	"./vi": 99816,
	"./vi.js": 99816,
	"./x-pseudo": 94450,
	"./x-pseudo.js": 94450,
	"./yo": 22556,
	"./yo.js": 22556,
	"./zh-cn": 7414,
	"./zh-cn.js": 7414,
	"./zh-hk": 50824,
	"./zh-hk.js": 50824,
	"./zh-tw": 63285,
	"./zh-tw.js": 63285
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 96616;

/***/ })

}]);