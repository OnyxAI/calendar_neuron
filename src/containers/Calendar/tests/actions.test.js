/* eslint-disable no-undef */
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
  CHANGE_ID,
  CHANGE_COLOR,
  CHANGE_END,
  CHANGE_NOTE,
  CHANGE_PLACE,
  CHANGE_START,
  CHANGE_TITLE,
} from '../constants';

import {
  deleteEvent,
  deleteEventError,
  deleteEventSuccess,
  updateDateEvent,
  updateDateEventError,
  updateDateEventSuccess,
  updateEvent,
  updateEventError,
  updateEventSuccess,
  getEvents,
  getEventsError,
  getEventsSuccess,
  addEvent,
  addEventError,
  addEventSuccess,
  changeColor,
  changeEnd,
  changeNote,
  changePlace,
  changeId,
  changeStart,
  changeTitle,
} from '../actions';

describe('Calendar Actions', () => {
  describe('deleteEvent', () => {
    it('should return the correct type deleteEvent', () => {
      const expectedResult = {
        type: DELETE_EVENT,
      };

      expect(deleteEvent()).toEqual(expectedResult);
    });
  });

  describe('deleteEventSuccess', () => {
    it('should return the correct type and the passed deleteEventSuccess', () => {
      const expectedResult = {
        type: DELETE_EVENT_SUCCESS,
      };

      expect(deleteEventSuccess()).toEqual(expectedResult);
    });
  });

  describe('deleteEventError', () => {
    it('should return the correct type and the passed error for deleteEvent', () => {
      const error = 'An error has occured';
      const expectedResult = {
        type: DELETE_EVENT_ERROR,
        error,
      };

      expect(deleteEventError(error)).toEqual(expectedResult);
    });
  });

  describe('updateDateEvent', () => {
    it('should return the correct type updateDateEvent', () => {
      const expectedResult = {
        type: UPDATE_DATE_EVENT,
        start: '',
        end: '',
        id: '1',
      };

      expect(updateDateEvent('1', '', '')).toEqual(expectedResult);
    });
  });

  describe('updateDateEventSuccess', () => {
    it('should return the correct type and the passed updateDateEventSuccess', () => {
      const expectedResult = {
        type: UPDATE_DATE_EVENT_SUCCESS,
      };

      expect(updateDateEventSuccess()).toEqual(expectedResult);
    });
  });

  describe('updateDateEventError', () => {
    it('should return the correct type and the passed error for updateDateEvent', () => {
      const error = 'An error has occured';
      const expectedResult = {
        type: UPDATE_DATE_EVENT_ERROR,
        error,
      };

      expect(updateDateEventError(error)).toEqual(expectedResult);
    });
  });

  describe('updateEvent', () => {
    it('should return the correct type updateEvent', () => {
      const expectedResult = {
        type: UPDATE_EVENT,
      };

      expect(updateEvent()).toEqual(expectedResult);
    });
  });

  describe('updateEventSuccess', () => {
    it('should return the correct type and the passed updateEventSuccess', () => {
      const expectedResult = {
        type: UPDATE_EVENT_SUCCESS,
      };

      expect(updateEventSuccess()).toEqual(expectedResult);
    });
  });

  describe('updateEventError', () => {
    it('should return the correct type and the passed error for updateEvent', () => {
      const error = 'An error has occured';
      const expectedResult = {
        type: UPDATE_EVENT_ERROR,
        error,
      };

      expect(updateEventError(error)).toEqual(expectedResult);
    });
  });

  describe('getEvents', () => {
    it('should return the correct type getEvents', () => {
      const expectedResult = {
        type: GET_EVENTS,
      };

      expect(getEvents()).toEqual(expectedResult);
    });
  });

  describe('getEventsSuccess', () => {
    it('should return the correct type and the passed getEventsSuccess', () => {
      const expectedResult = {
        type: GET_EVENTS_SUCCESS,
        events: [],
      };

      expect(getEventsSuccess([])).toEqual(expectedResult);
    });
  });

  describe('getEventsError', () => {
    it('should return the correct type and the passed error for getEvents', () => {
      const error = 'An error has occured';
      const expectedResult = {
        type: GET_EVENTS_ERROR,
        error,
      };

      expect(getEventsError(error)).toEqual(expectedResult);
    });
  });

  describe('addEvent', () => {
    it('should return the correct type getEvents', () => {
      const expectedResult = {
        type: ADD_EVENT,
      };

      expect(addEvent()).toEqual(expectedResult);
    });
  });

  describe('addEventSuccess', () => {
    it('should return the correct type and the passed getEventsSuccess', () => {
      const expectedResult = {
        type: ADD_EVENT_SUCCESS,
      };

      expect(addEventSuccess()).toEqual(expectedResult);
    });
  });

  describe('addEventError', () => {
    it('should return the correct type and the passed error for getEvents', () => {
      const error = 'An error has occured';
      const expectedResult = {
        type: ADD_EVENT_ERROR,
        error,
      };

      expect(addEventError(error)).toEqual(expectedResult);
    });
  });

  describe('changeId', () => {
    it('should return the correct type and the passed changeId', () => {
      const expectedResult = {
        type: CHANGE_ID,
        id: '1',
      };

      expect(changeId('1')).toEqual(expectedResult);
    });
  });

  describe('changeTitle', () => {
    it('should return the correct type and the passed changeTitle', () => {
      const expectedResult = {
        type: CHANGE_TITLE,
        title: 'title',
      };

      expect(changeTitle('title')).toEqual(expectedResult);
    });
  });

  describe('changeNote', () => {
    it('should return the correct type and the passed changeNote', () => {
      const expectedResult = {
        type: CHANGE_NOTE,
        note: 'note',
      };

      expect(changeNote('note')).toEqual(expectedResult);
    });
  });

  describe('changePlace', () => {
    it('should return the correct type and the passed changePlace', () => {
      const expectedResult = {
        type: CHANGE_PLACE,
        place: 'place',
      };

      expect(changePlace('place')).toEqual(expectedResult);
    });
  });

  describe('changeStart', () => {
    it('should return the correct type and the passed changeStart', () => {
      const expectedResult = {
        type: CHANGE_START,
        start: '1',
      };

      expect(changeStart('1')).toEqual(expectedResult);
    });
  });

  describe('changeEnd', () => {
    it('should return the correct type and the passed changeEnd', () => {
      const expectedResult = {
        type: CHANGE_END,
        end: '1',
      };

      expect(changeEnd('1')).toEqual(expectedResult);
    });
  });

  describe('changeColor', () => {
    it('should return the correct type and the passed changeColor', () => {
      const expectedResult = {
        type: CHANGE_COLOR,
        color: 'blue',
      };

      expect(changeColor('blue')).toEqual(expectedResult);
    });
  });
});
