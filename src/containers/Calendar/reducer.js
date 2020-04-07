/*
 *
 * Calendar reducer
 *
 */
import produce from 'immer';
import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  CHANGE_TITLE,
  CHANGE_NOTE,
  CHANGE_END,
  CHANGE_COLOR,
  CHANGE_PLACE,
  CHANGE_START,
  CHANGE_ID,
  ADD_EVENT_ERROR,
  ADD_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  DELETE_EVENT_SUCCESS,
  UPDATE_DATE_EVENT,
  UPDATE_DATE_EVENT_SUCCESS,
  UPDATE_DATE_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_ERROR,
} from './constants';

export const initialState = {
  events: [],
  errorText: '',
  title: '',
  start: '',
  end: '',
  place: '',
  color: '',
  note: '',
  id: '',
};

/* eslint-disable default-case, no-param-reassign */
const calendarReducer = (state = initialState, action) =>
  produce(state, draft => {
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

export default calendarReducer;
