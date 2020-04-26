/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/*
 *
 * Calendar actions
 *
 */
import {
  GET_EVENTS,
  GET_EVENTS_ERROR,
  GET_EVENTS_SUCCESS,
  ADD_EVENT,
  ADD_EVENT_ERROR,
  ADD_EVENT_SUCCESS,
  UPDATE_DATE_EVENT,
  UPDATE_DATE_EVENT_ERROR,
  UPDATE_DATE_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  DELETE_EVENT_SUCCESS,
  TODAY_EVENTS,
  TODAY_EVENTS_ERROR,
  TODAY_EVENTS_SUCCESS,
  CHANGE_ID,
  CHANGE_COLOR,
  CHANGE_END,
  CHANGE_NOTE,
  CHANGE_PLACE,
  CHANGE_START,
  CHANGE_TITLE,
} from './constants';

export function deleteEvent() {
  return {
    type: DELETE_EVENT,
  };
}

export function deleteEventSuccess() {
  return {
    type: DELETE_EVENT_SUCCESS,
  };
}

export function deleteEventError(error) {
  return {
    type: DELETE_EVENT_ERROR,
    error,
  };
}

export function updateDateEvent(id, start, end) {
  return {
    type: UPDATE_DATE_EVENT,
    start,
    end,
    id,
  };
}

export function updateDateEventSuccess() {
  return {
    type: UPDATE_DATE_EVENT_SUCCESS,
  };
}

export function updateDateEventError(error) {
  return {
    type: UPDATE_DATE_EVENT_ERROR,
    error,
  };
}

export function updateEvent() {
  return {
    type: UPDATE_EVENT,
  };
}

export function updateEventSuccess() {
  return {
    type: UPDATE_EVENT_SUCCESS,
  };
}

export function updateEventError(error) {
  return {
    type: UPDATE_EVENT_ERROR,
    error,
  };
}

export function getTodayEvents() {
  return {
    type: TODAY_EVENTS,
  };
}

export function getTodayEventsSuccess(events) {
  return {
    type: TODAY_EVENTS_SUCCESS,
    events,
  };
}

export function getTodayEventsError(error) {
  return {
    type: TODAY_EVENTS_ERROR,
    error,
  };
}

export function getEvents() {
  return {
    type: GET_EVENTS,
  };
}

export function getEventsSuccess(events) {
  events.forEach((event, index) => {
    events[index].start = new Date(events[index].start);
    events[index].end = new Date(events[index].end);
  });
  return {
    type: GET_EVENTS_SUCCESS,
    events,
  };
}

export function getEventsError(error) {
  return {
    type: GET_EVENTS_ERROR,
    error,
  };
}

export function addEvent() {
  return {
    type: ADD_EVENT,
  };
}

export function addEventSuccess() {
  return {
    type: ADD_EVENT_SUCCESS,
  };
}

export function addEventError(error) {
  return {
    type: ADD_EVENT_ERROR,
    error,
  };
}

export function changeId(id) {
  return {
    type: CHANGE_ID,
    id,
  };
}

export function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color,
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}

export function changePlace(place) {
  return {
    type: CHANGE_PLACE,
    place,
  };
}

export function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    note,
  };
}

export function changeStart(start) {
  return {
    type: CHANGE_START,
    start,
  };
}

export function changeEnd(end) {
  return {
    type: CHANGE_END,
    end,
  };
}
