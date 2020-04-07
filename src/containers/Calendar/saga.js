import { call, put, takeLatest, select } from 'redux-saga/effects';
import { API_URL } from '@onyx/global/constants';
import request from '@onyx/utils/request';
import moment from 'moment';
import {
  GET_EVENTS,
  ADD_EVENT,
  UPDATE_DATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from './constants';

import {
  getEventsSuccess,
  getEventsError,
  addEventSuccess,
  addEventError,
  updateDateEventSuccess,
  updateDateEventError,
  updateEventSuccess,
  updateEventError,
  getEvents,
  deleteEventError,
  deleteEventSuccess,
} from './actions';

import makeSelectCalendar from './selectors';

// Get Events
export function* loadGetEvents() {
  const token = localStorage.getItem('access_token');

  try {
    const result = yield call(request, {
      method: 'GET',
      url: `${API_URL}/neuron/calendar`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result && result.status === 'success') {
      yield put(getEventsSuccess(result.events));
    } else if (result && result.status === 'error') {
      yield put(getEventsError(result.message));
    } else {
      yield put(getEventsError('An error has occured'));
    }
  } catch (error) {
    yield put(getEventsError(error.toString()));
  }
}

// Add Event
export function* loadAddEvent() {
  const token = localStorage.getItem('access_token');

  const calendar = yield select(makeSelectCalendar());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `${API_URL}/neuron/calendar`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title: calendar.title,
        note: calendar.note,
        place: calendar.place,
        color: calendar.color,
        start: moment(calendar.start).format(),
        end: moment(calendar.end).format(),
      },
    });
    if (result && result.status === 'success') {
      yield put(getEvents());
      yield put(addEventSuccess());
    } else if (result && result.status === 'error') {
      yield put(addEventError(result.message));
    } else {
      yield put(addEventError('An error has occured'));
    }
  } catch (error) {
    yield put(addEventError(error.toString()));
  }
}

// Update Date Event
export function* loadUpdateDateEvent() {
  const token = localStorage.getItem('access_token');

  const calendar = yield select(makeSelectCalendar());

  try {
    const result = yield call(request, {
      method: 'PUT',
      url: `${API_URL}/neuron/calendar`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: calendar.id,
        start: moment(calendar.start).format(),
        end: moment(calendar.end).format(),
      },
    });
    if (result && result.status === 'success') {
      yield put(getEvents());
      yield put(updateDateEventSuccess());
    } else if (result && result.status === 'error') {
      yield put(updateDateEventError(result.message));
    } else {
      yield put(updateDateEventError('An error has occured'));
    }
  } catch (error) {
    yield put(updateDateEventError(error.toString()));
  }
}

// Update  Event
export function* loadUpdateEvent() {
  const token = localStorage.getItem('access_token');

  const calendar = yield select(makeSelectCalendar());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `${API_URL}/neuron/calendar/update`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: calendar.id,
        color: calendar.color,
        title: calendar.title,
        place: calendar.place,
        note: calendar.note,
      },
    });
    if (result && result.status === 'success') {
      yield put(getEvents());
      yield put(updateEventSuccess());
    } else if (result && result.status === 'error') {
      yield put(updateEventError(result.message));
    } else {
      yield put(updateEventError('An error has occured'));
    }
  } catch (error) {
    yield put(updateEventError(error.toString()));
  }
}

// Delete Event
export function* loadDeleteEvent() {
  const token = localStorage.getItem('access_token');

  const calendar = yield select(makeSelectCalendar());

  try {
    const result = yield call(request, {
      method: 'PUT',
      url: `${API_URL}/neuron/calendar/update`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: calendar.id,
      },
    });
    if (result && result.status === 'success') {
      yield put(getEvents());
      yield put(deleteEventSuccess());
    } else if (result && result.status === 'error') {
      yield put(deleteEventError(result.message));
    } else {
      yield put(deleteEventError('An error has occured'));
    }
  } catch (error) {
    yield put(deleteEventError(error.toString()));
  }
}

// Individual exports for testing
export default function* calendarSaga() {
  yield takeLatest(GET_EVENTS, loadGetEvents);
  yield takeLatest(ADD_EVENT, loadAddEvent);
  yield takeLatest(UPDATE_DATE_EVENT, loadUpdateDateEvent);
  yield takeLatest(UPDATE_EVENT, loadUpdateEvent);
  yield takeLatest(DELETE_EVENT, loadDeleteEvent);
}
