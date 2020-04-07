/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_EVENTS,
  ADD_EVENT,
  UPDATE_DATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../constants';
import * as CalendarAction from '../actions';

import { API_URL } from '../../App/constants';
import request from '../../../utils/request';

import calendarSaga, {
  loadGetEvents,
  loadUpdateDateEvent,
  loadAddEvent,
  loadDeleteEvent,
  loadUpdateEvent,
} from '../saga';

const title = 'event';
const place = 'place';
const note = 'note';
const color = 'blue';
const start = '1';
const end = '1';

const calendarState = {
  title,
  place,
  note,
  color,
  start,
  end,
};

/* eslint-disable redux-saga/yield-effects */
describe('calendarUser Saga', () => {
  let calendarGetGenerator;
  let calendarAddGenerator;
  let calendarUpdateDateGenerator;
  let calendarUpdateGenerator;
  let calendarDeleteGenerator;

  beforeEach(() => {
    calendarGetGenerator = loadGetEvents();
    calendarAddGenerator = loadAddEvent();
    calendarUpdateDateGenerator = loadUpdateDateEvent();
    calendarUpdateGenerator = loadUpdateEvent();
    calendarDeleteGenerator = loadDeleteEvent();
  });

  it('should call the api to get calendar', () => {
    localStorage.setItem('access_token', 'my_token');
    const callDescriptor = calendarGetGenerator.next().value;

    expect(callDescriptor).toEqual(
      call(request, {
        method: 'GET',
        url: `${API_URL}/calendar`,
        headers: { Authorization: 'Bearer my_token' },
      }),
    );
  });

  it('should call api success for calendar get', () => {
    const result = {
      status: 'success',
      events: [],
    };
    calendarGetGenerator.next();
    const putDescriptor = calendarGetGenerator.next(result).value;

    expect(putDescriptor).toEqual(put(CalendarAction.getEventsSuccess([])));
  });

  it('should call api with error for calendar get', () => {
    const result = {
      status: 'error',
      message: 'An error has occured',
    };
    calendarGetGenerator.next();
    const putDescriptor = calendarGetGenerator.next(result).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.getEventsError('An error has occured')),
    );
  });

  it('should dispatch an error if it requests doesnt work for calendar get', () => {
    calendarGetGenerator.next();
    const putDescriptor = calendarGetGenerator.next().value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.getEventsError('An error has occured')),
    );
  });

  it('should dispatch and error if an error is raised', () => {
    const response = new Error('Some error');
    calendarGetGenerator.next();
    const putDescriptor = calendarGetGenerator.throw(response).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.getEventsError('Error: Some error')),
    );
  });

  it('should call the api to add calendar', () => {
    localStorage.setItem('access_token', 'my_token');
    calendarAddGenerator.next();
    const callDescriptor = calendarAddGenerator.next(calendarState).value;

    expect(callDescriptor).toEqual(
      call(request, {
        method: 'POST',
        url: `${API_URL}/calendar`,
        headers: { Authorization: 'Bearer my_token' },
        data: calendarState,
      }),
    );
  });

  it('should call api success for calendar add', () => {
    const result = {
      status: 'success',
    };
    calendarAddGenerator.next();
    calendarAddGenerator.next(calendarState);
    calendarAddGenerator.next(result);
    const putDescriptor = calendarAddGenerator.next().value;

    expect(putDescriptor).toEqual(put(CalendarAction.addEventSuccess()));
  });

  it('should call api with error for calendar add', () => {
    const result = {
      status: 'error',
      message: 'An error has occured',
    };
    calendarAddGenerator.next();
    calendarAddGenerator.next(calendarState);
    const putDescriptor = calendarAddGenerator.next(result).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.addEventError('An error has occured')),
    );
  });

  it('should dispatch an error if it requests doesnt work for calendar add', () => {
    calendarAddGenerator.next();
    calendarAddGenerator.next(calendarState);
    const putDescriptor = calendarAddGenerator.next().value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.addEventError('An error has occured')),
    );
  });

  it('should dispatch and error if an error is raised', () => {
    const response = new Error('Some error');
    calendarAddGenerator.next();
    calendarAddGenerator.next(calendarState);
    const putDescriptor = calendarAddGenerator.throw(response).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.addEventError('Error: Some error')),
    );
  });

  it('should call the api to updateDate calendar', () => {
    localStorage.setItem('access_token', 'my_token');
    calendarUpdateDateGenerator.next();
    const callDescriptor = calendarUpdateDateGenerator.next({
      id: '1',
      start: '1',
      end: '1',
    }).value;

    expect(callDescriptor).toEqual(
      call(request, {
        method: 'PUT',
        url: `${API_URL}/calendar`,
        headers: { Authorization: 'Bearer my_token' },
        data: {
          id: '1',
          start: '1',
          end: '1',
        },
      }),
    );
  });

  it('should call api success for calendar updateDate', () => {
    const result = {
      status: 'success',
    };
    calendarUpdateDateGenerator.next();
    calendarUpdateDateGenerator.next(calendarState);
    calendarUpdateDateGenerator.next(result);
    const putDescriptor = calendarUpdateDateGenerator.next().value;

    expect(putDescriptor).toEqual(put(CalendarAction.updateDateEventSuccess()));
  });

  it('should call api with error for calendar updateDate', () => {
    const result = {
      status: 'error',
      message: 'An error has occured',
    };
    calendarUpdateDateGenerator.next();
    calendarUpdateDateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateDateGenerator.next(result).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateDateEventError('An error has occured')),
    );
  });

  it('should dispatch an error if it requests doesnt work for calendar updateDate', () => {
    calendarUpdateDateGenerator.next();
    calendarUpdateDateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateDateGenerator.next().value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateDateEventError('An error has occured')),
    );
  });

  it('should dispatch and error if an error is raised', () => {
    const response = new Error('Some error');
    calendarUpdateDateGenerator.next();
    calendarUpdateDateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateDateGenerator.throw(response).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateDateEventError('Error: Some error')),
    );
  });

  it('should call the api to update calendar', () => {
    localStorage.setItem('access_token', 'my_token');
    calendarUpdateGenerator.next();
    const callDescriptor = calendarUpdateGenerator.next({
      id: '1',
      color: 'blue',
      title: 'title',
      place: 'place',
      note: 'note',
    }).value;

    expect(callDescriptor).toEqual(
      call(request, {
        method: 'POST',
        url: `${API_URL}/calendar/update`,
        headers: { Authorization: 'Bearer my_token' },
        data: {
          id: '1',
          color: 'blue',
          title: 'title',
          place: 'place',
          note: 'note',
        },
      }),
    );
  });

  it('should call api success for calendar update', () => {
    const result = {
      status: 'success',
    };
    calendarUpdateGenerator.next();
    calendarUpdateGenerator.next(calendarState);
    calendarUpdateGenerator.next(result);
    const putDescriptor = calendarUpdateGenerator.next().value;

    expect(putDescriptor).toEqual(put(CalendarAction.updateEventSuccess()));
  });

  it('should call api with error for calendar update', () => {
    const result = {
      status: 'error',
      message: 'An error has occured',
    };
    calendarUpdateGenerator.next();
    calendarUpdateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateGenerator.next(result).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateEventError('An error has occured')),
    );
  });

  it('should dispatch an error if it requests doesnt work for calendar update', () => {
    calendarUpdateGenerator.next();
    calendarUpdateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateGenerator.next().value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateEventError('An error has occured')),
    );
  });

  it('should dispatch and error if an error is raised', () => {
    const response = new Error('Some error');
    calendarUpdateGenerator.next();
    calendarUpdateGenerator.next(calendarState);
    const putDescriptor = calendarUpdateGenerator.throw(response).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.updateEventError('Error: Some error')),
    );
  });

  it('should call the api to Delete calendar', () => {
    localStorage.setItem('access_token', 'my_token');
    calendarDeleteGenerator.next();
    const callDescriptor = calendarDeleteGenerator.next({
      id: '1',
    }).value;

    expect(callDescriptor).toEqual(
      call(request, {
        method: 'PUT',
        url: `${API_URL}/calendar/update`,
        headers: { Authorization: 'Bearer my_token' },
        data: {
          id: '1',
        },
      }),
    );
  });

  it('should call api success for calendar Delete', () => {
    const result = {
      status: 'success',
    };
    calendarDeleteGenerator.next();
    calendarDeleteGenerator.next(calendarState);
    calendarDeleteGenerator.next(result);
    const putDescriptor = calendarDeleteGenerator.next().value;

    expect(putDescriptor).toEqual(put(CalendarAction.deleteEventSuccess()));
  });

  it('should call api with error for calendar delete', () => {
    const result = {
      status: 'error',
      message: 'An error has occured',
    };
    calendarDeleteGenerator.next();
    calendarDeleteGenerator.next(calendarState);
    const putDescriptor = calendarDeleteGenerator.next(result).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.deleteEventError('An error has occured')),
    );
  });

  it('should dispatch an error if it requests doesnt work for calendar delete', () => {
    calendarDeleteGenerator.next();
    calendarDeleteGenerator.next(calendarState);
    const putDescriptor = calendarDeleteGenerator.next().value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.deleteEventError('An error has occured')),
    );
  });

  it('should dispatch and error if an error is raised', () => {
    const response = new Error('Some error');
    calendarDeleteGenerator.next();
    calendarDeleteGenerator.next(calendarState);
    const putDescriptor = calendarDeleteGenerator.throw(response).value;

    expect(putDescriptor).toEqual(
      put(CalendarAction.deleteEventError('Error: Some error')),
    );
  });
});

describe('calendarSaga Saga', () => {
  const calendarSagaFunc = calendarSaga();

  it('should start task to watch for GET_EVENTS action', () => {
    const takeLatestDescriptor = calendarSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_EVENTS, loadGetEvents));
  });

  it('should start task to watch for ADD_EVENT action', () => {
    const takeLatestDescriptor = calendarSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_EVENT, loadAddEvent));
  });

  it('should start task to watch for UPDATE_DATE_EVENT action', () => {
    const takeLatestDescriptor = calendarSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(UPDATE_DATE_EVENT, loadUpdateDateEvent),
    );
  });

  it('should start task to watch for UPDATE_EVENT action', () => {
    const takeLatestDescriptor = calendarSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(UPDATE_EVENT, loadUpdateEvent),
    );
  });

  it('should start task to watch for DELETE_EVENT action', () => {
    const takeLatestDescriptor = calendarSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(DELETE_EVENT, loadDeleteEvent),
    );
  });
});
