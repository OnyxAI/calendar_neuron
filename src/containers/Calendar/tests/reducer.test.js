import produce from 'immer';
import calendarReducer from '../reducer';
import {
  changeTitle,
  changeStart,
  changePlace,
  changeNote,
  changeEnd,
  changeColor,
  changeId,
} from '../actions';
import {
  GET_EVENTS_ERROR,
  GET_EVENTS_SUCCESS,
  UPDATE_DATE_EVENT,
  UPDATE_DATE_EVENT_SUCCESS,
  UPDATE_DATE_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_ERROR,
  ADD_EVENT_ERROR,
  ADD_EVENT_SUCCESS,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
} from '../constants';

/* eslint-disable default-case, no-param-reassign */
describe('calendarReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(calendarReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeColor action correctly', () => {
    const fixture = 'blue';
    const expectedResult = produce(state, draft => {
      draft.color = fixture;
    });

    expect(calendarReducer(state, changeColor(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the changeId action correctly', () => {
    const fixture = '1';
    const expectedResult = produce(state, draft => {
      draft.id = fixture;
    });

    expect(calendarReducer(state, changeId(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeNote action correctly', () => {
    const fixture = 'note';
    const expectedResult = produce(state, draft => {
      draft.note = fixture;
    });

    expect(calendarReducer(state, changeNote(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeTitle action correctly', () => {
    const fixture = 'Event';
    const expectedResult = produce(state, draft => {
      draft.title = fixture;
    });

    expect(calendarReducer(state, changeTitle(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the changeStart action correctly', () => {
    const fixture = '1';
    const expectedResult = produce(state, draft => {
      draft.start = fixture;
    });

    expect(calendarReducer(state, changeStart(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the changeEnd action correctly', () => {
    const fixture = '1';
    const expectedResult = produce(state, draft => {
      draft.end = fixture;
    });

    expect(calendarReducer(state, changeEnd(fixture))).toEqual(expectedResult);
  });

  it('should handle the changePlace action correctly', () => {
    const fixture = 'place';
    const expectedResult = produce(state, draft => {
      draft.place = fixture;
    });

    expect(calendarReducer(state, changePlace(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getEventsSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.events = [];
    });

    const action = {
      type: GET_EVENTS_SUCCESS,
      events: [],
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the getEventsError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.errorText = 'error';
    });

    const action = {
      type: GET_EVENTS_ERROR,
      error: 'error',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the updateDateEvent action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.id = '1';
      draft.start = '';
      draft.end = '';
    });

    const action = {
      type: UPDATE_DATE_EVENT,
      start: '',
      end: '',
      id: '1',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the updateDateEventSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.id = '';
      draft.start = '';
      draft.end = '';
    });

    const action = {
      type: UPDATE_DATE_EVENT_SUCCESS,
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the updateDateEventError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.errorText = 'error';
      draft.id = '';
      draft.start = '';
      draft.end = '';
    });

    const action = {
      type: UPDATE_DATE_EVENT_ERROR,
      error: 'error',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the updateEventSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.id = '';
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: UPDATE_EVENT_SUCCESS,
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the updateEventError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.errorText = 'error';
      draft.id = '';
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: UPDATE_EVENT_ERROR,
      error: 'error',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the addEventSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: ADD_EVENT_SUCCESS,
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the addEventError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.errorText = 'error';
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: ADD_EVENT_ERROR,
      error: 'error',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the deleteEventSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.id = '';
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: DELETE_EVENT_SUCCESS,
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });

  it('should handle the deleteEventError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.errorText = 'error';
      draft.id = '';
      draft.color = '';
      draft.title = '';
      draft.place = '';
      draft.start = '';
      draft.end = '';
      draft.note = '';
    });

    const action = {
      type: DELETE_EVENT_ERROR,
      error: 'error',
    };

    expect(calendarReducer(state, action)).toEqual(expectedResult);
  });
});
