import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calendar state domain
 */

const selectCalendarDomain = state => state.calendar || initialState;

/**
 * Other specific selectors
 */

const makeSelectEvents = () =>
  createSelector(
    selectCalendarDomain,
    substate => substate.events,
  );

/**
 * Default selector used by Calendar
 */

const makeSelectCalendar = () =>
  createSelector(
    selectCalendarDomain,
    substate => substate,
  );

export default makeSelectCalendar;
export { selectCalendarDomain, makeSelectEvents };
